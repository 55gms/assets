import {canonicalCode,DEFAULT_BINDS,keyLabel} from './bindings.js';
import {phrase,placeName} from './i18n.js';
import {recordDamage,recordElimination,awardRoundMvp} from './match-stats.js';
import {botDifficulty,botHitChance,ambushGoal} from './bot-difficulty.js';
import {TacticalRadar} from './radar.js';
import {attachOperatorWeapon} from './operator-weapon.js';
import {CameraLook} from './camera-look.js';
import {createAtmosphere,SUN_DIRECTION} from './atmosphere.js';
import {Breakables} from './breakables.js';
import * as THREE from './vendor/three.module.js';
import {smokeCloud,animateCloud} from './particles.js';
import {SurfaceMarks} from './decals.js';
import {SOUND_CUES} from './sound-cues.js';
import {SpatialAudio} from './spatial-audio.js';
import {stepGrenade} from './grenade-physics.js';
import {EXTRA_WEAPONS} from './arsenal.js';
import {BakedAnimator,viewModel,makeRig} from './motion.js';
import {capsuleOverlap,sweepCapsule,resolveCapsule} from './capsule-collision.js';


export const WEAPONS = {
  ...EXTRA_WEAPONS,
  ak: {name:'AK-47',type:'RIFLE',price:2700,team:'T',damage:35,mag:30,reserve:90,delay:.105,reload:2.4,color:0x58473a},
  m4: {name:'M4A4',type:'RIFLE',price:3100,team:'CT',damage:32,mag:30,reserve:90,delay:.095,reload:2.3,color:0x485961},
  awp: {name:'AWP',type:'SNIPER',price:4750,damage:110,mag:10,reserve:30,delay:1.35,reload:3.3,color:0x63724a},
  mp9: {name:'MP9',type:'SMG',team:'CT',price:1250,damage:23,mag:30,reserve:120,delay:.075,reload:2.0,color:0x45525a},
  deagle: {name:'Desert Eagle',type:'PISTOL',price:700,damage:52,mag:7,reserve:35,delay:.3,reload:2.1,color:0x9d9e98},
  glock: {name:'Glock-18',type:'PISTOL',team:'T',price:200,damage:25,mag:20,reserve:80,delay:.19,reload:1.9,color:0x424849},
  knife: {name:'Knife',type:'MELEE',price:0,damage:55,mag:Infinity,reserve:0,delay:.5,reload:0,color:0x969b9d},
};
const V=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
const clamp=THREE.MathUtils.clamp;
const rand=(a,b)=>a+Math.random()*(b-a);
const pick=a=>a[Math.floor(Math.random()*a.length)];
// Sweep the entire body and slide along contact planes, including thin edges between the feet and head.
function slideBody(world,start,delta,height){
  const position=start.clone(),remaining=delta.clone(),contacts=[];
  for(let i=0;i<5&&remaining.lengthSq()>1e-12;i++){
    const hit=sweepCapsule(world,position,remaining,height);
    if(!hit){position.add(remaining);break;}
    position.addScaledVector(remaining,Math.max(0,hit.fraction-0.0005/remaining.length()));
    contacts.push(hit);remaining.multiplyScalar(1-hit.fraction);
    const normal=hit.normal.clone();
    // Steep edges must block the legs rather than lift an airborne player over a tall crate.
    if(delta.y===0&&normal.y>0&&normal.y<.65)normal.setY(0).normalize();
    const inward=remaining.dot(normal);
    if(inward<0){if(normal.y>=.65&&delta.y===0)remaining.y=-(normal.x*remaining.x+normal.z*remaining.z)/normal.y;else remaining.addScaledVector(normal,-inward);}
    for(const contact of contacts){const n=contact.normal;if(Math.abs(n.y)<.01&&remaining.dot(n)<0)remaining.addScaledVector(n,-remaining.dot(n));}
  }
  return {position,contacts};
}
const supportsBody=(hit,allowEdge=false)=>!!hit&&(hit.normal.y>=.65||(allowEdge&&hit.normal.y>.05&&Math.abs(hit.triangle?.normal.y)>=.65));
const boxGeo=new THREE.BoxGeometry(1,1,1);
const importedModels=new Map(),modelPromises=new Map(),modelTextures=new Map();
export async function loadImportedModels(ids=['sas','phoenix','ak','m4','awp','mp9','deagle','glock','v_ak','v_m4','v_awp','v_mp9','v_deagle','v_glock','v_knife_ct','v_knife_t','arms_ct','arms_t','usp','v_usp','v_flash','v_smoke','v_he','v_c4','flash','smoke','he','c4','c4_dropped','knife_ct','knife_t']){
  const textureLoader=new THREE.TextureLoader();
  await Promise.all(ids.map(id=>{if(importedModels.has(id))return;if(modelPromises.has(id))return modelPromises.get(id);const promise=(async()=>{
    const base=`assets/models/${id}/`,[mr,br]=await Promise.all([fetch(base+'mesh.json?v=16'),fetch(base+'mesh.bin')]);if(!mr.ok||!br.ok)throw Error('Missing model '+id);
    const meta=await mr.json(),array=new Float32Array(await br.arrayBuffer()),count=meta.vertices,geometry=new THREE.BufferGeometry();
    const pos=new Float32Array(count*3),normal=new Float32Array(count*3),uv=new Float32Array(count*2),weights=new Float32Array(count*4),indices=new Uint16Array(count*4);
    for(let i=0;i<count;i++){const o=i*14;pos.set(array.subarray(o,o+3),i*3);normal.set(array.subarray(o+3,o+6),i*3);uv.set(array.subarray(o+6,o+8),i*2);weights.set(array.subarray(o+8,o+11),i*4);indices.set(array.subarray(o+11,o+14),i*4);}
    geometry.setAttribute('position',new THREE.BufferAttribute(pos,3));geometry.setAttribute('normal',new THREE.BufferAttribute(normal,3));geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));geometry.setAttribute('skinWeight',new THREE.BufferAttribute(weights,4));geometry.setAttribute('skinIndex',new THREE.BufferAttribute(indices,4));geometry.userData.shared=true;
    const materials=await Promise.all(meta.groups.map(async(g,i)=>{
      geometry.addGroup(g.start,g.count,i);const data=g.material;
      async function texture(name,colorSpace){
        if(!name)return null;
        const url=new URL(base+name,document.baseURI).href,key=url+'|'+colorSpace;
        if(!modelTextures.has(key))modelTextures.set(key,textureLoader.loadAsync(url).then(t=>{
          t.colorSpace=colorSpace;t.flipY=false;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=8;return t;
        }).catch(error=>{modelTextures.delete(key);throw error;}));
        return modelTextures.get(key);
      }
      const [map,normalMap]=await Promise.all([texture(data.texture,THREE.SRGBColorSpace),texture(data.normalTexture,THREE.NoColorSpace)]);
      const character=id.startsWith('arms_')||['sas','phoenix'].includes(id);
      const mat=new THREE.MeshStandardMaterial({map,normalMap,normalScale:new THREE.Vector2(.55,-.55),color:new THREE.Color(...data.color),roughness:data.roughness??(character?.88:.62),metalness:data.metalness??(character?0:.12),envMapIntensity:data.envMapIntensity??.25,side:THREE.DoubleSide});mat.userData.shared=true;return mat;
    }));
    let animation=null;if(id.startsWith('v_')||['sas','phoenix'].includes(id)){const [a,b]=await Promise.all([fetch(base+'animations.json?v=12'),fetch(base+'animations.bin?v=12')]);if(a.ok&&b.ok)animation={meta:await a.json(),data:new Float32Array(await b.arrayBuffer())};}importedModels.set(id,{meta,geometry,materials,animation});
  })();modelPromises.set(id,promise);return promise.catch(error=>{modelPromises.delete(id);throw error;});}));
}
function importedActor(id){
 const template=importedModels.get(id);if(!template)return null;const rig=makeRig(template),root=new THREE.Group(),axis=new THREE.Group(),facing=new THREE.Group();axis.rotation.x=-Math.PI/2;axis.scale.setScalar(.025);axis.add(rig.root);facing.rotation.y=Math.PI/2;facing.add(axis);root.add(facing);
 const gunTemplate=importedModels.get(id==='sas'?'m4':'ak');let gun;
 if(gunTemplate){gun=new THREE.Mesh(gunTemplate.geometry,gunTemplate.materials);gun.name='remote weapon';const socket=rig.bones.find(b=>b.name==='weapon_hand_R');if(socket)socket.add(gun);}
 root.traverse(o=>{if(o.isMesh)o.receiveShadow=true;});root.userData={imported:true,bones:rig.bones,animator:rig.animator,gun};return root;
}
function animateActor(actor,walk,dt=1/60,state=null){const a=actor.userData.animator;if(a){const action=state?.objectiveAction||(!state?.grounded&&state?.vy?'jump':state?.crouching?(Math.abs(walk)>.01?'crouchwalk':'crouch'):Math.abs(walk)>.01?'walk':'idle');if(a.name!==action)a.action(action);a.update(dt);if(state&&!state.objectiveAction){actor.updateMatrixWorld(true);const right=V(1,0,0).applyQuaternion(actor.quaternion);for(const [name,weight]of [['ValveBiped.Bip01_Spine1',.35],['ValveBiped.Bip01_Spine2',.65]]){const bone=actor.userData.bones?.find(b=>b.name===name);if(!bone)continue;const parent=bone.parent.getWorldQuaternion(new THREE.Quaternion()),rotation=new THREE.Quaternion().setFromAxisAngle(right,clamp(state.aimPitch||0,-1.15,1.15)*weight);rotation.premultiply(parent.clone().invert()).multiply(parent);bone.quaternion.premultiply(rotation);bone.updateWorldMatrix(false,true);}}}else if(actor.userData.legs){actor.userData.legs[0].rotation.x=walk;actor.userData.legs[1].rotation.x=-walk;}}
function box(parent,size,pos,color,rotation=0){const m=new THREE.Mesh(boxGeo,new THREE.MeshStandardMaterial({color,roughness:.86}));m.scale.set(...size);m.position.set(...pos);m.rotation.z=rotation;parent.add(m);return m;}

export function createGun(id='ak'){
  const imported=importedModels.get(id);if(imported){const root=new THREE.Group(),source=new THREE.Group();root.add(source);source.rotation.x=-Math.PI/2;source.scale.setScalar(.025);const mesh=new THREE.Mesh(imported.geometry,imported.materials);mesh.rotation.z=Math.PI/2;source.add(mesh);return root;}
  const g=new THREE.Group(),w=WEAPONS[id]||WEAPONS.ak;
  if(id==='knife'){
    box(g,[.07,.09,.3],[0,0,.05],0x202a2a);box(g,[.085,.025,.44],[0,.03,-.29],0xb8c3c6);box(g,[.17,.035,.045],[0,0,-.12],0x59696e);
  }else{
    const pistol=w.type==='PISTOL',s=pistol?.6:1;
    box(g,[.13,.17,.48*s],[0,0,-.1],w.color);box(g,[.06,.055,.43*s],[0,.025,-.47*s],0x283136);
    box(g,[.11,.25,.12],[0,-.15,.02],0x2b3333,.2);
    if(!pistol){box(g,[.08,.25,.18],[0,-.19,-.16],0x292f30,-.1);box(g,[.13,.15,.3],[0,-.005,.23],w.color);box(g,[.045,.08,.04],[0,.11,-.26],0x192428);}
    if(id==='awp'){const s=new THREE.Mesh(new THREE.CylinderGeometry(.055,.055,.3,12),new THREE.MeshStandardMaterial({color:0x1b282e}));s.rotation.x=Math.PI/2;s.position.set(0,.15,-.1);g.add(s);}
  }
  return g;
}

export function createActor(team='CT'){
  const original=importedActor(team==='CT'?'sas':'phoenix');if(original)return original;
  const g=new THREE.Group(),cloth=team==='CT'?0x475c68:0xa18c68,armor=team==='CT'?0x293b46:0x494a3d;
  box(g,[.47,.57,.27],[0,1.12,0],cloth);box(g,[.49,.43,.32],[0,1.15,-.015],armor);
  for(const x of [-.15,0,.15])box(g,[.12,.14,.08],[x,1.08,-.2],0x53605d);
  box(g,[.39,.17,.29],[0,.78,0],0x283838);box(g,[.39,.08,.31],[0,.91,0],0x293637);
  const head=new THREE.Mesh(new THREE.SphereGeometry(.17,12,10),new THREE.MeshStandardMaterial({color:0x8c8976,roughness:1}));head.position.y=1.57;g.add(head);
  const helmet=new THREE.Mesh(new THREE.SphereGeometry(.195,12,8,0,Math.PI*2,0,Math.PI*.6),new THREE.MeshStandardMaterial({color:armor,roughness:.8}));helmet.position.y=1.59;g.add(helmet);
  box(g,[.3,.085,.08],[0,1.6,-.135],0x16242b);box(g,[.25,.12,.09],[0,1.49,-.12],0x33454a);
  const legs=[];for(const x of [-.13,.13]){const pivot=new THREE.Group();pivot.position.set(x,.78,0);g.add(pivot);box(pivot,[.19,.62,.21],[0,-.31,0],cloth);box(pivot,[.205,.14,.32],[0,-.7,-.04],0x263337);box(pivot,[.2,.15,.08],[0,-.32,-.12],armor);legs.push(pivot);}
  const arms=[];for(const x of [-.32,.32]){const pivot=new THREE.Group();pivot.position.set(x,1.35,0);g.add(pivot);box(pivot,[.17,.38,.18],[0,-.18,0],cloth);box(pivot,[.16,.19,.18],[0,-.39,-.12],cloth,-.1);box(pivot,[.13,.12,.13],[0,-.46,-.23],0x3c463e);pivot.rotation.x=-.5;arms.push(pivot);}
  const gun=createGun(team==='CT'?'m4':'ak');gun.position.set(.16,.98,-.4);g.add(gun);
  g.userData={legs,arms,gun};return g;
}

export class CollisionWorld{
  constructor(array){this.cells=new Map();this.triangles=[];this.size=4;this.ray=new THREE.Ray();this.hit=V();this.close=V();this.normal=V();
    for(let i=0;i<array.length;i+=15){const a=V(...array.slice(i,i+3)),b=V(...array.slice(i+5,i+8)),c=V(...array.slice(i+10,i+13));const tri=new THREE.Triangle(a,b,c);const normal=tri.getNormal(V());if(normal.lengthSq()<.1)continue;const index=this.triangles.length,minX=Math.min(a.x,b.x,c.x),maxX=Math.max(a.x,b.x,c.x),minY=Math.min(a.y,b.y,c.y),maxY=Math.max(a.y,b.y,c.y),minZ=Math.min(a.z,b.z,c.z),maxZ=Math.max(a.z,b.z,c.z);this.triangles.push({tri,normal,sourceTriangle:i/15,minX,maxX,minY,maxY,minZ,maxZ,wall:Math.abs(normal.y)<=.65});
      const x0=Math.floor(minX/4),x1=Math.floor(maxX/4),z0=Math.floor(minZ/4),z1=Math.floor(maxZ/4);
      for(let x=x0;x<=x1;x++)for(let z=z0;z<=z1;z++){const key=x+','+z;if(!this.cells.has(key))this.cells.set(key,[]);this.cells.get(key).push(index);}
    }this.traceVisited=new Uint32Array(this.triangles.length);this.traceStamp=0;
  }
  trace(a,b){const delta=b.clone().sub(a),distance=delta.length();if(distance<1e-7)return null;const dir=delta.multiplyScalar(1/distance);this.ray.set(a,dir);let stamp=(this.traceStamp+1)>>>0;if(stamp===0){this.traceVisited.fill(0);stamp=1;}this.traceStamp=stamp;const visited=this.traceVisited,minX=Math.min(a.x,b.x)-1e-7,maxX=Math.max(a.x,b.x)+1e-7,minY=Math.min(a.y,b.y)-1e-7,maxY=Math.max(a.y,b.y)+1e-7,minZ=Math.min(a.z,b.z)-1e-7,maxZ=Math.max(a.z,b.z)+1e-7;let nearest=distance,hit=null;
    for(let t=0;t<=distance+this.size;t+=this.size*.65){const p=a.clone().addScaledVector(dir,Math.min(t,distance)),x=Math.floor(p.x/4),z=Math.floor(p.z/4);for(let dx=-1;dx<=1;dx++)for(let dz=-1;dz<=1;dz++)for(const i of this.cells.get((x+dx)+','+(z+dz))||[]){if(visited[i]===stamp)continue;visited[i]=stamp;const record=this.triangles[i];if(record.disabled||record.maxX<minX||record.minX>maxX||record.maxY<minY||record.minY>maxY||record.maxZ<minZ||record.minZ>maxZ)continue;const {tri,normal}=record;if(this.ray.intersectTriangle(tri.a,tri.b,tri.c,false,this.hit)){const d=this.hit.distanceTo(a);if(d<nearest){nearest=d;const n=normal.clone();if(n.dot(dir)>0)n.negate();hit={distance:d,point:this.hit.clone(),normal:n,breakable:record.breakable};}}}if(t>nearest+8)break;}return hit;}
  raycast(origin,dir,distance){return this.trace(origin,origin.clone().addScaledVector(dir,distance))?.distance??Infinity;}
  clear(a,b){return !this.trace(a,b);}
  sweep(a,b,radius){const delta=b.clone().sub(a),length=delta.length();if(length<1e-7)return null;const forward=delta.multiplyScalar(1/length),side=forward.clone().cross(V(0,1,0));if(side.lengthSq()<.001)side.set(1,0,0);side.normalize();const up=side.clone().cross(forward).normalize();let best=null;
    for(const offset of [V(),side.clone().multiplyScalar(radius),side.clone().multiplyScalar(-radius),up.clone().multiplyScalar(radius),up.clone().multiplyScalar(-radius)]){const hit=this.trace(a.clone().add(offset),b.clone().add(offset).addScaledVector(forward,radius));if(hit&&(!best||hit.distance<best.distance))best=hit;}if(best)best.center=a.clone().addScaledVector(forward,Math.max(0,best.distance-radius-.004));return best;}
  floor(pos,up=.6,down=3){const o=pos.clone();o.y+=up;const d=this.raycast(o,V(0,-1,0),up+down);return Number.isFinite(d)?o.y-d:null;}
  resolve(pos,height=1.7,radius=.29){const cx=Math.floor(pos.x/4),cz=Math.floor(pos.z/4),set=new Set();for(let dx=-1;dx<=1;dx++)for(let dz=-1;dz<=1;dz++)for(const i of this.cells.get((cx+dx)+','+(cz+dz))||[])set.add(i);
    for(let iteration=0;iteration<2;iteration++)for(const offset of [.35,height*.6,height-.25]){const p=pos.clone().add(V(0,offset,0));for(const i of set){const record=this.triangles[i];if(record.disabled||!record.wall||record.maxY<pos.y+.45||p.x<record.minX-radius||p.x>record.maxX+radius||p.y<record.minY-radius||p.y>record.maxY+radius||p.z<record.minZ-radius||p.z>record.maxZ+radius)continue;record.tri.closestPointToPoint(p,this.close);const delta=p.clone().sub(this.close);const d=delta.length();if(d<radius&&d>.0001){delta.multiplyScalar((radius-d)/d);delta.y=0;pos.add(delta);p.add(delta);}}}return pos;}
}

export class GameEngine{
  constructor(canvas,notify,settings){
    this.canvas=canvas;this.notify=notify;this.settings=settings;this.keys=new Set();this.state='menu';this.players=[];this.bots=[];this.effects=[];this.smokes=[];this.grenades=[];this.worldItems=[];this.time=0;this.lastFrame=performance.now();this.fps=0;this.hudClock=0;this.mouseDown=false;this.scoped=false;this.flash=0;this.damageFlash=0;this.touchMove={x:0,y:0};this.nav=[];this.navMap=new Map();this.mapCache=new Map();
    this.sound=new SpatialAudio();document.addEventListener('pointerdown',()=>this.sound.unlock());document.addEventListener('keydown',()=>this.sound.unlock());
    this.renderer=new THREE.WebGLRenderer({canvas,antialias:true});this.renderer.setPixelRatio(Math.min(devicePixelRatio,settings.quality));this.renderer.setSize(innerWidth,innerHeight);this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=.90;this.cameraLook=new CameraLook(this.renderer);
    this.scene=new THREE.Scene();this.scene.background=new THREE.Color(0xa6bac4);this.scene.fog=new THREE.Fog(0xc3d2d7,75,210);this.scene.add(new THREE.HemisphereLight(0xd8e8f2,0x807566,1.15));const sun=new THREE.DirectionalLight(0xffefd5,1.20);sun.position.set(30,70,20);this.scene.add(sun);this.sun=sun;sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.bias=-.00008;sun.shadow.normalBias=.025;this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;this.renderer.shadowMap.autoUpdate=false;
    const faces=['#bed9f0','#bdd8ed','#d3e8ff','#5c5448','#dce3df','#a4c6e4'].map(color=>{const c=document.createElement('canvas');c.width=c.height=32;const ctx=c.getContext('2d');ctx.fillStyle=color;ctx.fillRect(0,0,32,32);return c;});const cube=new THREE.CubeTexture(faces);cube.colorSpace=THREE.SRGBColorSpace;cube.needsUpdate=true;const pmrem=new THREE.PMREMGenerator(this.renderer);this.environment=pmrem.fromCubemap(cube);this.scene.environment=this.environment.texture;this.scene.environmentIntensity=.65;pmrem.dispose();cube.dispose();
    this.camera=new THREE.PerspectiveCamera(settings.fov,innerWidth/innerHeight,.045,600);this.camera.rotation.order='YXZ';this.scene.add(this.camera);// A camera fill only illuminates the viewmodel, never the wall in front of it.
    const fill=new THREE.PointLight(0xfff4e5,5.5,4,1);fill.position.set(-.4,.6,.7);fill.layers.set(1);this.camera.add(fill);
    const handAmbient=new THREE.HemisphereLight(0xe5eff7,0x93816d,1.8);handAmbient.layers.set(1);this.scene.add(handAmbient);
    const viewBounce=new THREE.AmbientLight(0xdce5ed,2.4);viewBounce.layers.set(1);this.scene.add(viewBounce);this.viewGun=new THREE.Group();this.camera.add(this.viewGun);this.viewGun.position.set(.25,-.25,-.48);
    this.yaw=0;this.pitch=0;this.velocity=V();this.bomb={planted:false,carrier:null,position:null,timer:40,progress:0};this.scores={CT:0,T:0};
    window.addEventListener('resize',()=>this.resize());
    document.addEventListener('mousemove',e=>{if(this.state==='playing'&&document.pointerLockElement===canvas)this.look(e.movementX,e.movementY);});
    document.addEventListener('pointerlockchange',()=>{if(!document.pointerLockElement&&this.state==='playing'&&!this.settings.mobile)this.pause();});
    document.addEventListener('keydown',e=>this.keyDown(e));document.addEventListener('keyup',e=>this.keyUp(e));
    canvas.addEventListener('mousedown',e=>this.keyDown({code:'Mouse'+e.button,target:canvas,repeat:false,preventDefault:()=>e.preventDefault()}));
    document.addEventListener('mouseup',e=>this.keyUp({code:'Mouse'+e.button}));canvas.addEventListener('contextmenu',e=>e.preventDefault());
    window.addEventListener('blur',()=>{this.keys.clear();this.mouseDown=false;if(this.state==='playing')this.pause();});
    document.addEventListener('visibilitychange',()=>{if(document.hidden&&this.state==='playing')this.pause();});
    requestAnimationFrame(t=>this.frame(t));
  }
  resize(){this.renderer.setSize(innerWidth,innerHeight);this.camera.aspect=innerWidth/innerHeight;this.camera.updateProjectionMatrix();}
  updateSettings(settings){this.keys.clear();this.mouseDown=false;this.grenadeCharge=null;this.settings=settings;this.renderer.setPixelRatio(Math.min(devicePixelRatio,settings.quality));this.camera.fov=this.scoped?27:settings.fov;this.camera.updateProjectionMatrix();}
  look(dx,dy){this.yaw-=dx*.002*this.settings.sensitivity*(this.scoped?.4:1);this.pitch=clamp(this.pitch-dy*.002*this.settings.sensitivity*(this.scoped?.4:1),-1.48,1.48);}
  keyUp(e){const code=canonicalCode(e.code,this.settings.binds||DEFAULT_BINDS);this.keys.delete(code);if(code==='Tab')this.notify('scoreboard',false);if(code==='Mouse0')this.releaseTrigger();}
  keyDown(e){
    const code=canonicalCode(e.code,this.settings.binds||DEFAULT_BINDS);if(!code)return;
    if(code==='Escape'){if(e.repeat)return;if(this.state==='playing')this.pause();else if(this.state==='buy')this.closeBuy();else if(this.state==='paused')this.notify('pauseEscape');return;}
    if(e.target?.isContentEditable||['INPUT','SELECT','TEXTAREA'].includes(e.target?.tagName))return;
    if(!['playing','buy'].includes(this.state))return;
    e.preventDefault();this.keys.add(code);if(e.repeat)return;
    if(code==='Tab'){this.notify('scoreboard',true);return;}
    if(code==='KeyB'){if(this.state==='buy')this.closeBuy();else this.openBuy();return;}
    if(this.state!=='playing')return;
    if(code==='Mouse0'){this.mouseDown=true;this.shoot();return;}
    if(code==='Mouse2'){this.toggleScope();return;}
    if(code==='KeyF'&&!this.player.reloadTime)this.viewModel?.action('inspect');if(code==='KeyR')this.reload();if(code==='Digit1')this.equip(this.player.primary);if(code==='Digit2')this.equip(this.player.secondary);if(code==='Digit3')this.equip('knife');
    if(code==='Digit4'){const available=['he','smoke','flash'].filter(k=>this.player.grenades[k]>0);if(available.length){const i=available.indexOf(this.player.weapon);this.equip(available[(i+1)%available.length]);}}
    if(code==='Digit5'&&this.bomb.carrier===this.player)this.equip('c4');if(code==='KeyG'&&!e.repeat)this.dropCurrent();if(code==='KeyE'&&this.player.alive&&!e.repeat){const item=this.nearestLoot(this.player,2);if(item)this.pickupLoot(item,this.player,true);}
    if(code==='Space')e.preventDefault();
    if(code==='KeyE'&&!this.player.alive)this.spectatorIndex=(this.spectatorIndex||0)+1;
  }
  async loadMap(id){
    this.routeCache=new Map();
    if(this.mapGroup)this.scene.remove(this.mapGroup);
    if(this.mapCache.has(id)){
      Object.assign(this,this.mapCache.get(id));this.activateMap();
      this.notify('loading',{percent:100,text:this.text('Mapa listo','Map ready')});return;
    }
    this.notify('loading',{percent:8,text:this.text('Leyendo el mapa local…','Loading map…')});
    const base=`assets/${id}/`,read=async file=>{const response=await fetch(base+file,{cache:file.split('?')[0].endsWith('.json')?'no-cache':'default'});if(!response.ok)throw Error(this.text('Falta un recurso del mapa: ','Missing map resource: ')+id+'/'+file);return response;};
    const [metaResponse,binaryResponse]=await Promise.all([read('world.json?v=10'),read('world.bin')]);
    const meta=await metaResponse.json(),navFile=(meta.navigation||'nav.json')+(meta.collisionHash?'?v='+encodeURIComponent(meta.collisionHash):''),nav=await (await read(navFile)).json(),array=new Float32Array(await binaryResponse.arrayBuffer());
    this.notify('loading',{percent:28,text:this.text('Preparando geometría y colisiones…','Preparing geometry and collisions…')});
    this.mapGroup=new THREE.Group();this.mapGroup.name=id;this.mapAppearance=await this.createMapAppearance(id,meta);
    const geometry=new THREE.BufferGeometry(),positions=new Float32Array(array.length/5*3),uv=new Float32Array(array.length/5*2);
    for(let i=0;i<array.length/5;i++){positions.set(array.subarray(i*5,i*5+3),i*3);uv.set(array.subarray(i*5+3,i*5+5),i*2);}
    geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));
    if(meta.normals){const normals=new Float32Array(await (await read(meta.normals)).arrayBuffer());if(normals.length!==positions.length)throw Error(this.text('Normales del mapa incompletas','Incomplete map normals'));geometry.setAttribute('normal',new THREE.BufferAttribute(normals,3));}else geometry.computeVertexNormals();
    if(meta.blend){const blend=new Float32Array(await (await read(meta.blend)).arrayBuffer());if(blend.length!==positions.length/3)throw Error(this.text('Mezcla de texturas del mapa incompleta','Incomplete map texture blending'));geometry.setAttribute('sourceBlend',new THREE.BufferAttribute(blend,1));}
    const loader=new THREE.TextureLoader(),textureCache=new Map();
    const texture=file=>{if(!file)return null;if(!textureCache.has(file))textureCache.set(file,loader.loadAsync(base+file).then(map=>{map.colorSpace=THREE.SRGBColorSpace;map.wrapS=map.wrapT=THREE.RepeatWrapping;map.flipY=false;map.anisotropy=Math.min(16,this.renderer.capabilities.getMaxAnisotropy());return map;}));return textureCache.get(file);};
    let lightMap=null;
    if(meta.lightmap){
      const raw=new Float32Array(await (await read(meta.lightmap.uv)).arrayBuffer());if(raw.length!==positions.length/3*2)throw Error(this.text('Coordenadas de iluminación incompletas','Incomplete lighting coordinates'));geometry.setAttribute('uv1',new THREE.BufferAttribute(raw,2));
      lightMap=await loader.loadAsync(base+meta.lightmap.texture);
      const space=meta.lightmap.colorSpace??(id==='cs2_mirage'?'linear':'srgb');lightMap.colorSpace=space==='linear'?THREE.NoColorSpace:THREE.SRGBColorSpace;lightMap.flipY=false;lightMap.channel=1;
    }
    let loaded=0;
    const materials=await Promise.all(meta.groups.map(async(group,index)=>{
      const data=group.material||{},map=await texture(data.texture),map2=data.texture2&&meta.blend&&map?await texture(data.texture2):null;
      const color=Array.isArray(data.color)?new THREE.Color(...data.color):new THREE.Color(data.color??0xffffff),options={map,color,alphaTest:data.alphaTest||0,side:THREE.DoubleSide};
      const material=lightMap?new THREE.MeshStandardMaterial({...options,lightMap,lightMapIntensity:meta.lightmap.intensity??.48,roughness:.94,metalness:0,envMapIntensity:.08,toneMapped:true}):new THREE.MeshLambertMaterial(options);
      if(map2){
        material.userData.sourceMap2=map2;
        material.onBeforeCompile=shader=>{
          shader.uniforms.sourceMap2={value:map2};
          shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nattribute float sourceBlend;\nvarying float vSourceBlend;').replace('#include <uv_vertex>','#include <uv_vertex>\nvSourceBlend = sourceBlend;');
          shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nuniform sampler2D sourceMap2;\nvarying float vSourceBlend;').replace('#include <map_fragment>',THREE.ShaderChunk.map_fragment.replace('diffuseColor *= sampledDiffuseColor;','sampledDiffuseColor = mix(sampledDiffuseColor, texture2D(sourceMap2, vMapUv), clamp(vSourceBlend, 0.0, 1.0));\ndiffuseColor *= sampledDiffuseColor;'));
        };
        material.customProgramCacheKey=()=>'source-blend-v1';
      }
      geometry.addGroup(group.start,group.count,index);loaded++;this.notify('loading',{percent:28+Math.round(loaded/meta.groups.length*48),text:`${this.text('Texturas','Textures')} · ${loaded}/${meta.groups.length}`});return material;
    }));
    this.worldMesh=new THREE.Mesh(geometry,materials);this.mapGroup.add(this.worldMesh);
    const collisionFile=meta.collision+(meta.collisionHash?'?v='+encodeURIComponent(meta.collisionHash):'');
    const collisionArray=meta.collision?new Float32Array(await (await read(collisionFile)).arrayBuffer()):array;
    this.world=new CollisionWorld(collisionArray);this.breakables=null;
    const breakablesFile=typeof meta.breakables==='string'?meta.breakables:meta.breakables||id==='cs2_mirage'?'breakables.json':null;
    if(breakablesFile){const definitions=await (await read(breakablesFile)).json();this.breakables=new Breakables(definitions,this.world,this.worldMesh,item=>this.onBreakableBroken(item));}
    if(meta.props||id==='cs2_mirage')await this.loadMapProps(id,typeof meta.props==='string'?meta.props:'props.json');
    if(meta.overlays)await this.loadMapOverlays(id,typeof meta.overlays==='string'?meta.overlays:'overlays.json',lightMap,meta.lightmap?.intensity??.48);
    this.nav=nav;this.navMap=new Map(nav.map(node=>[node.id,node]));this.meta=meta;
    const spawnHeights=(meta.entities||[]).filter(e=>e.position&&e.classname.startsWith('info_player')).map(e=>e.position[1]);
    meta.killY=(spawnHeights.length?Math.min(...spawnHeights):Math.min(...nav.map(node=>node.position[1])))-20;
    this.safeSpawnNodes=nav.filter(node=>{const floor=this.world.floor(V(...node.position),.7,1.2);return floor!==null&&Math.abs(floor-node.position[1])<1.1&&!(node.flags&2);});
    this.sites=meta.sites?meta.sites.map(site=>({...site,position:V(...site.position)})):['BombsiteA','BombsiteB'].map((place,index)=>{const nodes=nav.filter(node=>node.place===place);const position=nodes.length?V(...nodes[Math.floor(nodes.length/2)].position):V(...nav[Math.floor(nav.length*(index?.7:.3))].position);return {name:index?'B':'A',position};});
    for(const ladder of meta.ladders||[]){const height=ladder.top-ladder.bottom;for(const dx of [-.3,.3])box(this.mapGroup,[.035,height,.035],[ladder.x+dx,ladder.bottom+height/2,ladder.z],0x72776d);for(let y=ladder.bottom+.2;y<ladder.top;y+=.3)box(this.mapGroup,[.65,.035,.035],[ladder.x,y,ladder.z],0x72776d);}
    this.mapCache.set(id,{mapGroup:this.mapGroup,world:this.world,worldMesh:this.worldMesh,breakables:this.breakables,nav:this.nav,navMap:this.navMap,meta:this.meta,sites:this.sites,safeSpawnNodes:this.safeSpawnNodes,mapAppearance:this.mapAppearance});
    this.activateMap();this.notify('loading',{percent:100,text:this.text('Listo para entrar','Ready to play')});
  }
  async createMapAppearance(id,meta){
    const fogColor=new THREE.Color(meta.fogColor??(id==='cs2_mirage'?0xb5c6c9:0xc3d2d7));
    if(meta.proceduralSky||id==='cs2_mirage'||id==='de_dust2'){
      if(!this.atmosphere)this.atmosphere=createAtmosphere(this.renderer);
      return {background:this.atmosphere.texture,environment:this.atmosphere.environment,environmentIntensity:.5,fogColor};
    }
    if(meta.sky?.length===6){
      const background=await new THREE.CubeTextureLoader().loadAsync(meta.sky.map(file=>`assets/${id}/${file}`));background.colorSpace=THREE.SRGBColorSpace;
      const pmrem=new THREE.PMREMGenerator(this.renderer),environmentTarget=pmrem.fromCubemap(background);pmrem.dispose();
      return {background,environment:environmentTarget.texture,environmentTarget,environmentIntensity:meta.environmentIntensity??.5,fogColor};
    }
    return {background:new THREE.Color(0xa6bac4),environment:this.environment?.texture||null,environmentIntensity:.65,fogColor};
  }
  activateMap(){
    this.scene.add(this.mapGroup);
    const appearance=this.mapAppearance;
    this.scene.background=appearance.background;this.scene.environment=appearance.environment;this.scene.environmentIntensity=appearance.environmentIntensity;
    if(this.scene.fog)this.scene.fog.color.copy(appearance.fogColor);
    // Decals reference one collision world; switching cached maps must not retain the previous one.
    this.marks?.dispose();this.marks=new SurfaceMarks(this.scene,this.world);
    this.configureMapSun();
  }
  configureMapSun(){
    this.mapGroup.traverse(object=>{if(object.isMesh){object.castShadow=!object.userData.noShadow;object.receiveShadow=true;}});
    // Source 3D skyboxes can be far from the playable map. Keep the shadow texels on the play area.
    const bounds=new THREE.Box3();
    if(this.meta?.shadowBounds)bounds.set(V(...this.meta.shadowBounds[0]),V(...this.meta.shadowBounds[1]));
    else{
      for(const node of this.nav||[])bounds.expandByPoint(V(...node.position));
      for(const entity of this.meta?.entities||[])if(entity.position&&entity.classname.startsWith('info_player'))bounds.expandByPoint(V(...entity.position));
      for(const site of this.sites||[])bounds.expandByPoint(site.position);
      if(bounds.isEmpty())bounds.setFromObject(this.mapGroup);else bounds.expandByVector(V(15,22,15));
    }
    const center=bounds.getCenter(V()),radius=Math.max(10,bounds.getSize(V()).length()*.5);
    this.sun.target.position.copy(center);this.scene.add(this.sun.target);this.sun.position.copy(center).add(SUN_DIRECTION.clone().multiplyScalar(radius*2));
    this.sun.target.updateMatrixWorld();this.sun.updateMatrixWorld();
    const camera=this.sun.shadow.camera;camera.left=camera.bottom=-radius;camera.right=camera.top=radius;camera.near=.1;camera.far=radius*4;camera.updateProjectionMatrix();this.renderer.shadowMap.needsUpdate=true;
  }
  async loadMapProps(id,file='props.json'){
    const base=`assets/${id}/`,read=async name=>{const response=await fetch(base+name);if(!response.ok)throw Error(this.text('Falta un recurso del mapa: ','Missing map resource: ')+id+'/'+name);return response;};
    const meta=await (await read(file)).json(),array=new Float32Array(await (await read(meta.binary||'props.bin')).arrayBuffer()),geometry=new THREE.BufferGeometry();
    const positions=new Float32Array(array.length/5*3),uv=new Float32Array(array.length/5*2);
    for(let i=0;i<array.length/5;i++){positions.set(array.subarray(i*5,i*5+3),i*3);uv.set(array.subarray(i*5+3,i*5+5),i*2);}
    geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));
    if(meta.indices){const indices=new Uint32Array(await (await read(meta.indices)).arrayBuffer());geometry.setIndex(new THREE.BufferAttribute(indices,1));}
    if(meta.normals){const normals=new Float32Array(await (await read(meta.normals)).arrayBuffer());if(normals.length!==positions.length)throw Error(this.text('Normales de objetos incompletas','Incomplete prop normals'));geometry.setAttribute('normal',new THREE.BufferAttribute(normals,3));}else geometry.computeVertexNormals();
    const loader=new THREE.TextureLoader(),textureCache=new Map();
    if(!meta.chunks?.length)for(const [index,group]of (meta.groups||[]).entries())geometry.addGroup(group.start,group.count,typeof group.material==='number'?group.material:index);
    const materialRecords=meta.materials||(meta.groups||[]).map(group=>group.material);
    const materials=await Promise.all(materialRecords.map(async record=>{
      const data=record||{};let map=null;
      if(data.texture){if(!textureCache.has(data.texture))textureCache.set(data.texture,loader.loadAsync(base+data.texture).then(texture=>{texture.colorSpace=THREE.SRGBColorSpace;texture.flipY=false;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());return texture;}));map=await textureCache.get(data.texture);}
      const color=id==='cs2_mirage'?new THREE.Color(0xd9d6ce):Array.isArray(data.color)?new THREE.Color(...data.color):new THREE.Color(data.color??0xffffff);
      return new THREE.MeshStandardMaterial({map,color,roughness:.92,metalness:0,envMapIntensity:.15,alphaTest:data.alphaTest||0,side:THREE.DoubleSide});
    }));
    if(meta.chunks?.length){
      const props=new THREE.Group();props.name='map-props';
      for(const [index,chunk]of meta.chunks.entries()){
        // Each cell has its own culling bounds, while GPU vertex/index buffers remain shared.
        const cell=new THREE.BufferGeometry();
        for(const [name,attribute]of Object.entries(geometry.attributes))cell.setAttribute(name,attribute);
        if(geometry.index)cell.setIndex(geometry.index);
        cell.setDrawRange(chunk.start,chunk.count);
        for(const group of chunk.groups)cell.addGroup(group.start,group.count,group.material);
        cell.boundingBox=new THREE.Box3(V(...chunk.bounds[0]),V(...chunk.bounds[1]));
        cell.boundingSphere=cell.boundingBox.getBoundingSphere(new THREE.Sphere());
        const mesh=new THREE.Mesh(cell,materials);mesh.name='map-props-cell-'+index;props.add(mesh);
      }
      this.mapGroup.add(props);
    }else{
      const mesh=new THREE.Mesh(geometry,materials);mesh.name='map-props';this.mapGroup.add(mesh);
    }
  }
  async loadMapOverlays(id,file='overlays.json',lightMap=null,lightMapIntensity=.48){
    const base=`assets/${id}/`,read=async name=>{const response=await fetch(base+name,{cache:name.endsWith('.json')?'no-cache':'default'});if(!response.ok)throw Error(this.text('Falta un recurso del mapa: ','Missing map resource: ')+id+'/'+name);return response;};
    const meta=await (await read(file)).json(),array=new Float32Array(await (await read(meta.binary||'overlays.bin')).arrayBuffer());
    const positions=new Float32Array(array.length/5*3),uv=new Float32Array(array.length/5*2),geometry=new THREE.BufferGeometry();
    for(let i=0;i<array.length/5;i++){positions.set(array.subarray(i*5,i*5+3),i*3);uv.set(array.subarray(i*5+3,i*5+5),i*2);}
    geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));geometry.computeVertexNormals();
    if(lightMap&&meta.lightmap?.uv){const lightUv=new Float32Array(await (await read(meta.lightmap.uv)).arrayBuffer());if(lightUv.length!==uv.length)throw Error(this.text('Coordenadas de iluminación de marcas incompletas','Incomplete overlay lighting coordinates'));geometry.setAttribute('uv1',new THREE.BufferAttribute(lightUv,2));}
    const loader=new THREE.TextureLoader(),textures=new Map(),overlays=new THREE.Group();overlays.name='map-overlays';
    const meshes=await Promise.all(meta.groups.map(async(group,index)=>{
      const data=group.material||{};let map=null;
      if(data.texture){if(!textures.has(data.texture))textures.set(data.texture,loader.loadAsync(base+data.texture).then(texture=>{texture.colorSpace=THREE.SRGBColorSpace;texture.flipY=false;texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.anisotropy=Math.min(16,this.renderer.capabilities.getMaxAnisotropy());return texture;}));map=await textures.get(data.texture);}
      const color=Array.isArray(data.color)?new THREE.Color(...data.color):new THREE.Color(data.color??0xffffff);
      const options={map,color,transparent:true,opacity:data.opacity??1,depthWrite:false,alphaTest:data.alphaTest??.015,polygonOffset:true,polygonOffsetFactor:-2,polygonOffsetUnits:-2,side:THREE.DoubleSide};
      const material=lightMap?new THREE.MeshStandardMaterial({...options,lightMap,lightMapIntensity,roughness:.94,metalness:0,envMapIntensity:.08}):new THREE.MeshLambertMaterial(options);
      const layer=new THREE.BufferGeometry();for(const [name,attribute]of Object.entries(geometry.attributes))layer.setAttribute(name,attribute);layer.setDrawRange(group.start,group.count);
      const bounds=new THREE.Box3();for(let vertex=group.start;vertex<group.start+group.count;vertex++)bounds.expandByPoint(V().fromBufferAttribute(geometry.attributes.position,vertex));
      layer.boundingBox=bounds;layer.boundingSphere=bounds.getBoundingSphere(new THREE.Sphere());
      const mesh=new THREE.Mesh(layer,material);mesh.name='map-overlay-'+index;mesh.renderOrder=group.renderOrder??10;mesh.userData.noShadow=true;mesh.castShadow=false;mesh.receiveShadow=true;return mesh;
    }));
    overlays.add(...meshes);this.mapGroup.add(overlays);
  }
  async start(config){this.state='loading';this.config=config;this.notify('loading',{percent:1,text:this.text('Preparando la partida…','Preparing match…')});await this.loadMap(config.map);this.clearActors();this.scores={CT:0,T:0};this.round=0;this.matchKills=0;this.player=this.newPlayer(this.settings.nickname,config.team,true);this.players=[this.player];
    const names=['FALCON','NOVA','GHOST','VIPER','ATLAS','ECHO','RAVEN','WOLF','KITE'];this.bots=[];
    for(let i=0;i<config.bots;i++){const team=i%2===0?(config.team==='CT'?'T':'CT'):config.team;const b=this.newPlayer(names[i],team,false);b.model=createActor(team);this.scene.add(b.model);this.bots.push(b);this.players.push(b);}
    this.startRound();this.canvas.style.display='block';this.notify('started',null);this.resume();
  }
  newPlayer(name,team,isHuman){return {name,team,isHuman,pos:V(),vy:0,health:100,armor:100,alive:true,kills:0,deaths:0,assists:0,mvps:0,score:0,money:this.config.mode==='ffa'?16000:800,primary:null,secondary:team==='CT'?'usp':'glock',weapon:team==='CT'?'usp':'glock',ammo:{},grenades:{he:0,smoke:0,flash:0},reloadTime:0,nextShot:0,respawnTime:0,shield:0,grounded:false,brain:0,path:[],target:null,thought:0,reaction:0};}
  spawn(p,initial=false,preserveEquipment=false){
    const carried=preserveEquipment?{primary:p.primary,secondary:p.secondary,weapon:p.weapon,armor:p.armor,grenades:{...p.grenades},ammo:Object.fromEntries(Object.entries(p.ammo).map(([id,a])=>[id,{...a}]))}:null;
    const teamClass=p.team==='CT'?'info_player_counterterrorist':'info_player_terrorist';const spawns=this.meta.entities.filter(e=>e.classname===teamClass&&e.position);let pos;
    if(this.config.mode==='ffa'&&!initial){let nodes=this.safeSpawnNodes.length?this.safeSpawnNodes:this.nav.filter(n=>!(n.flags&2));const candidates=Array.from({length:16},()=>pick(nodes));candidates.sort((a,b)=>{const distance=n=>Math.min(...this.players.filter(o=>o!==p&&o.alive).map(o=>o.pos.distanceTo(V(...n.position))),100);return distance(b)-distance(a);});pos=V(...candidates[0].position);}
    else{const slot=this.players.filter(o=>o.team===p.team).indexOf(p),valid=[];for(const e of spawns){const v=V(...e.position);if(!valid.some(o=>V(...o.position).distanceTo(v)<.65))valid.push(e);}const ent=valid[Math.max(0,slot)%Math.max(1,valid.length)];pos=ent?V(...ent.position):V(...pick(this.safeSpawnNodes).position);p.spawnAngles=ent?.angles;p.spawnSlot=slot;}
    const floor=this.world.floor(pos,1,6);if(floor!==null)pos.y=floor+.015;
    const placement=resolveCapsule(this.world,pos,1.72);if(!placement.overlapping)pos.copy(placement.position);
    p.damageContributors=new Map();p.roundKills=0;p.roundDamage=0;p.lastSafe=placement.overlapping?null:pos.clone();p.pos.copy(pos);p.health=100;p.armor=100;p.alive=true;p.vy=0;p.reloadTime=0;p.nextShot=0;p.shield=this.config.mode==='ffa'?10:0;p.grenades={he:0,smoke:0,flash:0};p.path=[];p.reaction=0;p.objectiveAction=null;p.crouching=false;p.patrolGoal=null;p.visitedPlaces=new Set();p.plantSite=null;p.ambush=null;p.holdingAngle=false;p.nextAmbush=0;p.lastSeen=null;p.lastSeenAt=-Infinity;
    p.primary=this.config.mode==='ffa'?(p.isHuman&&(!WEAPONS[this.config.loadout]?.team||WEAPONS[this.config.loadout].team===p.team)?this.config.loadout:(p.team==='CT'?'m4':'ak')):null;p.secondary=p.team==='CT'?'usp':'glock';p.weapon=p.primary||p.secondary;p.ammo={};for(const [id,w]of Object.entries(WEAPONS))p.ammo[id]={mag:w.mag,reserve:w.reserve};
    if(carried){Object.assign(p,carried);if(this.previousRoundWinner===p.team)for(const id of [p.primary,p.secondary])if(WEAPONS[id])p.ammo[id]={mag:WEAPONS[id].mag,reserve:WEAPONS[id].reserve};if(![p.primary,p.secondary,'knife'].includes(p.weapon)&&!p.grenades[p.weapon])p.weapon=p.primary||p.secondary||'knife';}
    p.jumpHeld=this.keys?.has('Space')||false;p.grounded=false;p.stepDistance=0;p.stepIndex=Math.max(0,this.players.indexOf(p))%6;
    if(p.model){p.model.visible=!p.isHuman;p.model.rotation.z=0;p.model.position.copy(pos);}if(p.isHuman){this.clearSpectator();this.equip(p.weapon);this.yaw=p.spawnAngles?Number(p.spawnAngles.split(' ')[1])*Math.PI/180-Math.PI/2:0;this.pitch=0;this.velocity.set(0,0,0);this.mouseDown=false;}
  }
  startRound(){this.previousRoundWinner=this.round>0?this.roundWinner:null;this.breakables?.reset();if(this.renderer?.shadowMap)this.renderer.shadowMap.needsUpdate=true;this.marks?.clear();this.soundEvents=[];this.clearLoot();for(const list of [this.effects,this.grenades,this.smokes]){for(const item of list){this.scene.remove(item.mesh);this.disposeObject(item.mesh);}list.length=0;}this.pendingThrow=null;this.grenadeCharge=null;this.round++;this.prep=5;this.elapsed=0;this.remaining=this.config.mode==='ffa'?300:120;this.roundEnd=0;this.roundWinner=null;this.bomb={planted:false,carrier:null,position:null,timer:40,progress:0};if(this.bombMesh){this.scene.remove(this.bombMesh);this.bombMesh=null;}for(const p of this.players)this.spawn(p,true,this.config.mode==='bomb'&&this.round>1&&p.alive);if(this.config.mode==='bomb')this.bomb.carrier=this.player.team==='T'?this.player:this.bots.find(b=>b.team==='T');for(const bot of this.bots){this.buyBotWeapon(bot);this.botEquip(bot,bot.weapon);}this.notify('announcement',{title:'5',subtitle:this.text('Prepárate para la partida','Get ready')});this.updateHud();}
  clearActors(){this.clearLoot();for(const p of this.players)if(p.model){this.scene.remove(p.model);this.disposeObject(p.model);}for(const e of this.effects){this.scene.remove(e.mesh);this.disposeObject(e.mesh);}for(const g of this.grenades){this.scene.remove(g.mesh);this.disposeObject(g.mesh);}for(const s of this.smokes){this.scene.remove(s.mesh);this.disposeObject(s.mesh);}if(this.bombMesh){this.scene.remove(this.bombMesh);this.disposeObject(this.bombMesh);this.bombMesh=null;}this.players=[];this.effects=[];this.grenades=[];this.smokes=[];}
  disposeObject(obj){obj.traverse(o=>{if(o.geometry&&o.geometry!==boxGeo&&!o.geometry.userData.shared)o.geometry.dispose();if(o.material){for(const m of Array.isArray(o.material)?o.material:[o.material])if(!m.userData.shared)m.dispose();}if(o.skeleton)o.skeleton.dispose();});}
  equip(id){this.grenadeCharge=null;if(!id||!this.player?.alive||this.pendingThrow)return;const changed=id!==this.player.weapon||this.player.nextShot<=0;this.player.soundSerial=(this.player.soundSerial||0)+1;this.player.weapon=id;if(changed)this.actionAudio(this.player,'draw');if(WEAPONS[id]&&WEAPONS[id].type!=='MELEE'){this.sound?.load(id+'-fire');this.sound?.load(id+'-reload');}else if(id==='knife')for(const name of ['knife-swing','knife-hit','knife-wall'])this.sound?.load(name);this.player.reloadTime=0;this.scoped=false;this.camera.fov=this.settings.fov;this.camera.updateProjectionMatrix();while(this.viewGun.children.length){const old=this.viewGun.children[0];this.viewGun.remove(old);this.disposeObject(old);}const asset=id==='knife'?'v_knife_'+this.player.team.toLowerCase():'v_'+id;if(!importedModels.has(asset)){loadImportedModels([asset,...(WEAPONS[id]?[id]:[])]).then(()=>{if(this.player?.alive&&this.player.weapon===id)this.equip(id);}).catch(error=>this.notify('toast',error.message));}this.viewModel=viewModel(importedModels,id,this.player.team);if(this.viewModel){this.viewGun.add(this.viewModel.root);this.viewModel.action('draw');this.player.nextShot=Math.max(this.player.nextShot,.35);this.updateHud();return;}const g=WEAPONS[id]?createGun(id):new THREE.Group();if(!WEAPONS[id])box(g,id==='c4'?[.25,.15,.2]:[.12,.16,.12],[0,0,0],id==='c4'?0x425a46:0x526149);for(const [x,y,z]of [[.035,-.1,.01],[-.045,-.055,-.28]]){const palm=new THREE.Mesh(new THREE.SphereGeometry(.067,10,8),new THREE.MeshStandardMaterial({color:0x405148,roughness:1}));palm.scale.set(.75,1,1.35);palm.position.set(x,y,z);g.add(palm);const sleeve=new THREE.Mesh(new THREE.CylinderGeometry(.056,.079,.3,10),new THREE.MeshStandardMaterial({color:0x455762,roughness:1}));sleeve.rotation.x=-.8;sleeve.position.set(x+.025,y-.12,z+.13);g.add(sleeve);}this.viewGun.add(g);this.updateHud();}
  toggleScope(){if(!['awp','ssg08','scar20','g3sg1','aug','sg553'].includes(this.player.weapon))return;this.scoped=!this.scoped;this.audio('scope-zoom',.2);this.camera.fov=this.scoped?27:this.settings.fov;this.camera.updateProjectionMatrix();this.notify('scope',this.scoped);}
  pause(){this.sound?.stop();this.grenadeCharge=null;if(this.state!=='playing')return;this.state='paused';this.notify('scoreboard',false);this.mouseDown=false;this.keys.clear();document.exitPointerLock?.();this.notify('pause',true);}
  resume(){this.sound?.unlock();for(const id of new Set(this.players.map(p=>p.weapon)))if(WEAPONS[id]&&WEAPONS[id].type!=='MELEE')this.sound?.load(id+'-fire');for(let i=1;i<=6;i++)this.sound?.load('step-'+i);for(const name of ['c4-beep1','c4-beep2','c4-beep3','c4-initiate','c4-disarmstart','c4-disarm','c4-disarmfinish','c4-plant','c4-explode1','scope-zoom',...Array.from({length:5},(_,i)=>'hit-body'+(i+1)),...Array.from({length:5},(_,i)=>'hit-armor'+(i+1)),'hit-head1','hit-head2'])this.sound?.load(name);this.state='playing';this.keys.clear();this.mouseDown=false;this.notify('pause',false);if(!this.settings.mobile){try{const p=this.canvas.requestPointerLock();p?.catch(()=>this.notify('toast',this.text('Haz clic en el escenario para activar el ratón.','Click the scene to capture your mouse.')));}catch{}}}
  exit(){this.sound?.stop();this.grenadeCharge=null;this.clearSpectator();this.state='menu';this.keys.clear();this.mouseDown=false;document.exitPointerLock?.();this.canvas.style.display='none';this.notify('menu',null);}
  openBuy(){this.grenadeCharge=null;if(!this.player.alive)return;if(this.config.mode==='bomb'&&(this.elapsed>20||this.player.pos.distanceTo(this.spawnOrigin||this.player.pos)>15)){this.notify('toast',this.text('La compra solo está disponible al inicio, cerca de tu base.','Buy near your spawn at the start of the round.'));return;}this.state='buy';this.mouseDown=false;this.keys.clear();document.exitPointerLock?.();this.notify('buy',true);}
  closeBuy(){this.notify('buy',false);this.resume();}
  buy(id){const p=this.player;if(this.state!=='buy')return false;const w=WEAPONS[id],cost=w?.price??({armor:650,he:300,smoke:300,flash:200}[id]);if(cost===undefined)return false;if(w?.team&&w.team!==p.team)return false;if(p.money<cost){this.notify('toast',this.text('No tienes suficiente dinero.','Not enough money.'));return false;}if(p.grenades[id]>=2){this.notify('toast',this.text('Ya llevas el máximo de este tipo.','You already carry the maximum.'));return false;}p.money-=cost;if(w){if(w.type==='PISTOL')p.secondary=id;else p.primary=id;p.ammo[id]={mag:w.mag,reserve:w.reserve};this.equip(id);}else if(id==='armor')p.armor=100;else p.grenades[id]++;this.updateHud();return true;}
  tickReload(p,dt){if(p.reloadTime<=0)return false;p.reloadTime=Math.max(0,p.reloadTime-dt);if(p.reloadTime>0)return false;const a=p.ammo[p.weapon],w=WEAPONS[p.weapon];if(a&&w){const count=Math.min(w.mag-a.mag,a.reserve);a.mag+=count;a.reserve-=count;}return true;}
  reload(){const p=this.player,w=WEAPONS[p.weapon];if(!p.alive||!w||w.type==='MELEE'||p.reloadTime||p.ammo[p.weapon].mag===w.mag||!p.ammo[p.weapon].reserve)return;p.reloadTime=this.viewModel?.animator.animation?.meta.actions.reload?.duration||w.reload;this.viewModel?.action('reload');this.actionAudio(p,'reload',p.reloadTime);this.scoped=false;this.notify('scope',false);this.camera.fov=this.settings.fov;this.camera.updateProjectionMatrix();}
  shoot(){const p=this.player;if(this.state!=='playing'||!p.alive||this.prep>0||this.roundEnd>0||p.reloadTime||p.nextShot>0)return;if(['he','smoke','flash'].includes(p.weapon)){if(!this.pendingThrow&&!this.grenadeCharge){this.grenadeCharge={type:p.weapon,time:0};this.audio(p.weapon+'-pin',.3);this.viewModel?.action('idle');}return;}const w=WEAPONS[p.weapon];if(!w)return;if(p.ammo[p.weapon].mag<=0){this.reload();return;}p.shield=0;this.viewModel?.action('fire');p.nextShot=w.delay;if(w.type!=='MELEE')p.ammo[p.weapon].mag--;const origin=this.camera.position.clone(),dir=V();this.camera.getWorldDirection(dir);let spread=(this.velocity.length()>.2?.028:.003)+(this.recoil||0)*.012;if(p.weapon==='awp'&&!this.scoped)spread=.045;dir.add(V(rand(-spread,spread),rand(-spread,spread),rand(-spread,spread))).normalize();
    const aim=dir.clone(),pellets=w.type==='SHOTGUN'?8:1;let nearest=160,hitBody=false;for(let pellet=0;pellet<pellets;pellet++){dir.copy(aim);if(pellets>1)dir.add(V(rand(-.055,.055),rand(-.055,.055),rand(-.055,.055))).normalize();const limit=w.type==='MELEE'?2.2:160;nearest=this.world.raycast(origin,dir,limit);let target=null,head=false;
    for(const b of this.bots){if(!b.alive||b.team===p.team)continue;const body=new THREE.Box3(b.pos.clone().add(V(-.3,0,-.3)),b.pos.clone().add(V(.3,b.crouching?1.15:1.78,.3)));const hit=new THREE.Ray(origin,dir).intersectBox(body,V());if(hit){const d=hit.distanceTo(origin);if(d<nearest&&d<limit){nearest=d;target=b;head=hit.y>b.pos.y+(b.crouching?.88:1.42);}}}
    if(target){hitBody=true;this.damage(target,w.damage*(head?2.3:1)*(pellets>1?Math.max(.15,1-nearest/35):1),p,{head,melee:w.type==='MELEE',point:origin.clone().addScaledVector(dir,nearest),direction:dir.clone()});this.notify('hit',head);}else if(Number.isFinite(nearest)){const hit=this.world.trace(origin,origin.clone().addScaledVector(dir,nearest+.02));if(!this.breakables?.damage(hit,w.damage))this.marks?.add(w.type==='MELEE'?'scratch':'bullet',hit,w.type==='MELEE'?.3:.11);}}if(w.type==='MELEE'){this.audio(hitBody?'knife-hit':Number.isFinite(nearest)&&nearest<2.2?'knife-wall':'knife-swing',.65);this.updateHud();return;}this.audio(p.weapon+'-fire',.4);this.actionAudio(p,'cycle');this.recoil=Math.min(2,(this.recoil||0)+.18);if(w.type!=='MELEE')this.pitch=Math.min(1.45,this.pitch+.012+(this.recoil||0)*.006);this.gunKick=.08;this.updateHud();
  }
  damage(victim,amount,attacker,impact=null){if(!victim.alive||victim.shield>0||(attacker&&attacker!==victim&&attacker.team&&attacker.team===victim.team))return;if(impact?.direction&&this.marks){const point=impact.point||victim.pos.clone().add(V(0,1,0));let surface=this.world.trace(point,point.clone().addScaledVector(impact.direction,3.5));if(!surface)surface=this.world.trace(point,point.clone().add(V(0,-3,0)));this.marks.add(Math.random()<.5?'blood1':'blood2',surface,impact.head?.65:.45);}if(impact&&!impact.melee){const variant=1+Math.floor(Math.random()*(impact.head?2:5)),name=impact.head?'hit-head':victim.armor>0?'hit-armor':'hit-body';this.audio(name+variant,impact.head?.7:.45,victim.isHuman?null:victim.pos.clone().add(V(0,impact.head?(victim.crouching?1:1.6):.9,0)));}const absorbed=Math.min(victim.armor,amount*.45);victim.armor-=absorbed;recordDamage(victim,attacker,Math.min(victim.health,Math.max(0,amount-absorbed)));victim.health=Math.max(0,victim.health-(amount-absorbed));if(victim.isHuman){this.damageFlash=.65;this.notify('damage',true);}if(victim.health<=0){recordElimination(victim,attacker);victim.alive=false;if(this.bomb?.defuser===victim)this.releaseBotDefuse(victim);if(victim.isHuman){this.grenadeCharge=null;this.pendingThrow=null;this.scoped=false;if(this.camera&&this.settings){this.camera.fov=this.settings.fov;this.camera.updateProjectionMatrix();}}victim.deaths++;victim.respawnTime=3;victim.reloadTime=0;if(attacker&&attacker!==victim){attacker.kills++;attacker.money=Math.min(16000,attacker.money+300);}this.dropInventory(victim);if(victim.model)victim.model.visible=false;
      this.notify('kill',{killer:attacker?.name||'WORLD',victim:victim.name,weapon:attacker?(WEAPONS[attacker.weapon]?.name||'GRENADE'):'FALL'});if(victim.isHuman){this.scoped=false;this.notify('scope',false);this.camera.fov=this.settings.fov;this.camera.updateProjectionMatrix();this.notify('announcement',{title:this.text('ELIMINADO','ELIMINATED'),subtitle:this.config.mode==='ffa'?this.text('Reaparición en 3 segundos','Respawning in 3 seconds'):this.text('Observando · E para cambiar de jugador','Spectating · E to switch player')});}}
  }
  audio(name,volume=1,position=null){
    if(this.settings.volume<=0||!this.sound)return;
    const globalBomb=name.startsWith('c4-')&&name!=='c4-draw';const origin=globalBomb?null:position?.clone();if(origin&&origin.distanceTo(this.camera.position)>75)return;
    const occluded=origin&&this.world&&!this.world.clear(this.camera.position,origin);
    this.sound.listener(this.camera.position,this.camera.getWorldDirection(V()),V(0,1,0).applyQuaternion(this.camera.quaternion),this.settings.volume);
    this.sound.play(name,volume,origin,occluded);
  }
  actionAudio(p,kind,duration=1){
    const cue=SOUND_CUES[p.weapon];if(!cue)return;
    const entries=kind==='draw'?(cue.draw?[[0,cue.draw]]:[]):cue[kind]||[];
    this.soundEvents??=[];
    for(const [at,name]of entries){this.sound?.load(name);this.soundEvents.push({p,kind,name,weapon:p.weapon,serial:p.soundSerial||0,time:at*duration});}
    if(kind==='reload'&&!entries.length)this.audio(p.weapon+'-reload',.3,p.isHuman?null:p.pos.clone().add(V(0,1.3,0)));
  }
  updateActionAudio(dt){
    const pending=[];for(const event of this.soundEvents||[]){const p=event.p;if(!p.alive||p.weapon!==event.weapon||(p.soundSerial||0)!==event.serial||event.kind==='reload'&&p.reloadTime<=0)continue;event.time-=dt;if(event.time>0){pending.push(event);continue;}this.audio(event.name,.3,p.isHuman||p===this.observed?null:p.pos.clone().add(V(0,1.3,0)));}this.soundEvents=pending;
  }
  bombActionAudio(p,kind,progress){
    const previous=p.bombAudioProgress||0;if(p.bombAudioKind!==kind||progress<previous)p.bombAudioProgress=0;
    const old=p.bombAudioProgress||0,position=p.pos.clone().add(V(0,.8,0));
    if(progress>0&&!old)this.audio(kind==='plant'?'c4-initiate':'c4-disarmstart',.45,position);
    const interval=kind==='plant'?.4:1;if(progress>0&&Math.floor(progress/interval)>Math.floor(old/interval))this.audio(kind==='plant'?'c4-key'+(1+Math.floor(progress/interval)%7):'c4-disarm',.25,position);
    p.bombAudioKind=kind;p.bombAudioProgress=progress;
  }
  updateFootsteps(p,previous,dt,quiet=false){
    const distance=Math.hypot(p.pos.x-previous.x,p.pos.z-previous.z);
    if(!p.alive||!p.grounded||quiet||distance<.0001||distance>1||distance/Math.max(dt,.001)<1.5){p.stepDistance=0;return;}
    p.stepDistance=(p.stepDistance||0)+distance;if(p.stepDistance<1.45)return;p.stepDistance%=1.45;
    p.stepIndex=((p.stepIndex||0)+1)%6;const own=p.isHuman||p===this.observed;
    if(own||!this.camera||p.pos.distanceTo(this.camera.position)<24)this.audio('step-'+(p.stepIndex+1),own?.15:.5,own?null:p.pos.clone().add(V(0,.2,0)));
  }
  releaseTrigger(){this.mouseDown=false;if(!this.grenadeCharge)return;const charge=this.grenadeCharge;this.grenadeCharge=null;if(this.state!=='playing'||!this.player.alive)return;this.viewModel?.action('throw');this.pendingThrow={type:charge.type,time:.24,power:Math.min(1,charge.time/1.2)};this.player.nextShot=.8;}
  throwGrenade(type,power=1){const p=this.player;if(!p.grenades[type])return;p.grenades[type]--;p.shield=0;const dir=V();this.camera.getWorldDirection(dir);this.audio(type+'-throw',.25);const mesh=createGun(type);mesh.position.copy(this.camera.position).addScaledVector(dir,.5);this.scene.add(mesh);this.grenades.push({mesh,pos:mesh.position,vel:dir.multiplyScalar(5+power*16).add(V(0,1.3+power*1.8+Math.max(0,p.vy)*.9,0)).addScaledVector(this.velocity,1.35),fuse:type==='smoke'?2.3:1.8,age:0,type,owner:p});this.equip(p.primary||p.secondary||'knife');}
  onBreakableBroken(item){
    this.renderer.shadowMap.needsUpdate=true;this.routeCache?.clear();
    this.audio(item.material===1?'break-wood':item.material===0?'break-glass':'break-solid',.6,item.center);
    const dust=smokeCloud(item.center,8,item.material===1?0xb9a080:0xbeb9ab);this.scene.add(dust);this.effects.push({mesh:dust,life:.45,total:.45,cloud:true});
  }
  explode(g){const pos=g.pos.clone();this.audio(g.type+'-explode',.75,pos);if(g.type==='smoke'){const mesh=smokeCloud(pos);this.scene.add(mesh);this.smokes.push({mesh,pos,life:18,total:18,radius:0});}
    else if(g.type==='he'){for(const item of this.breakables?.items||[]){const d=item.center.distanceTo(pos);if(!item.broken&&d<8){const hit=this.world.trace(pos,item.center);if(!hit||hit.breakable===item)this.breakables.damage({breakable:item},100*(1-d/8));}}for(const p of this.players){const d=p.pos.distanceTo(pos);if(d<8&&this.visible(pos.clone().add(V(0,.3,0)),p.pos.clone().add(V(0,.8,0)),false))this.damage(p,Math.max(0,100*(1-d/8)),g.owner);}const mesh=smokeCloud(pos,28,0xcbb99e);this.scene.add(mesh);this.effects.push({mesh,life:1.1,total:1.1,cloud:true});}
    else if(this.visible(pos,this.camera.position,false)){const to=pos.clone().sub(this.camera.position),d=to.length();if(d<30){const facing=this.camera.getWorldDirection(V()).dot(to.normalize());this.flash=Math.max(this.flash,(1-d/30)*(facing>.3?3:.7));}}
    this.scene.remove(g.mesh);this.disposeObject(g.mesh);
  }
  visible(a,b,smoke=true){const delta=b.clone().sub(a),d=delta.length();if(this.world.raycast(a,delta.clone().normalize(),d)<d-.25)return false;if(smoke){const line=new THREE.Line3(a,b);for(const s of this.smokes){const center=s.pos.clone().add(V(0,1,0));if(line.closestPointToPoint(center,true,V()).distanceTo(center)<s.radius)return false;}}return true;}
  nearestNode(pos){let best=null,dist=Infinity;for(const n of this.nav){const d=(pos.x-n.position[0])**2+(pos.y-n.position[1])**2+(pos.z-n.position[2])**2;if(d<dist){dist=d;best=n;}}return best;}
  pathTo(pos,target){const start=this.nearestNode(pos),goal=this.nearestNode(target);if(!start||!goal)return [];const key=start.id+':'+goal.id;if(this.routeCache?.has(key))return this.routeCache.get(key).slice();const queue=[start.id],from=new Map(),seen=new Set(queue);for(let i=0;i<queue.length;i++){const id=queue[i];if(id===goal.id)break;for(const next of this.navMap.get(id)?.links||[]){const n=this.navMap.get(next);if(!n||seen.has(next)||n.flags&2)continue;seen.add(next);from.set(next,id);queue.push(next);}}if(!seen.has(goal.id))return [];const path=[];let id=goal.id;while(id!==start.id){path.unshift(this.navMap.get(id));id=from.get(id);if(id===undefined)return [];}if(start.nw&&goal.nw){let previous=start;const portals=[];for(const node of path){const a=previous,b=node;const lowX=Math.max(a.nw[0],b.nw[0]),highX=Math.min(a.se[0],b.se[0]),lowY=Math.max(a.nw[1],b.nw[1]),highY=Math.min(a.se[1],b.se[1]);const x=(lowX+highX)/80,z=-(lowY+highY)/80;const p=V(x,Math.max(a.position[1],b.position[1]),z),floor=this.world.floor(p,1,2);if(floor!==null)p.y=floor;portals.push({...node,position:p.toArray()});previous=node;}portals.push({...goal,position:target.toArray()});return portals;}if(this.routeCache){if(this.routeCache.size>256)this.routeCache.clear();this.routeCache.set(key,path);}return path;}
  movementSpeed(p,crouch=false,slow=false){
    // World scale: 50 Source units per metre. Values are tuned for this adaptation.
    const units={knife:250,ak:215,m4:225,m4s:225,awp:200,ssg08:230,scar20:215,g3sg1:215,aug:220,sg553:210,negev:150,m249:195,deagle:230,revolver:220,mp9:240,mac10:240,mp7:220,mp5:235,ump45:230,p90:230,bizon:240,nova:220,xm1014:215,mag7:225,sawedoff:210,famas:220,galil:215};
    let speed=(units[p.weapon]??240)/50;
    if(this.scoped){if(p.weapon==='awp')speed=2;else if(WEAPONS[p.weapon]?.type==='SNIPER')speed=3;else speed*=.7;}
    return speed*(crouch?.34:slow?.52:1);
  }
  updateMovement(p,dt,crouch=false,slow=false){
    // Small movement steps keep friction and acceleration stable across frame rates.
    if(dt>1/128+.000001){const n=Math.ceil(dt*128);for(let i=0;i<n;i++)this.updateMovement(p,dt/n,crouch,slow);return;}
    crouch=!!crouch||!!(p.crouching&&capsuleOverlap(this.world,p.pos,1.72));p.crouching=crouch;
    const forward=(this.keys.has('KeyW')?1:0)-(this.keys.has('KeyS')?1:0)-(this.touchMove?.y||0),side=(this.keys.has('KeyD')?1:0)-(this.keys.has('KeyA')?1:0)+(this.touchMove?.x||0);
    const wish=V(side,0,-forward);const amount=Math.min(1,wish.length());if(amount)wish.normalize();wish.applyAxisAngle(V(0,1,0),this.yaw);
    const speed=this.movementSpeed(p,crouch,slow),pressed=this.keys.has('Space'),jump=pressed&&!p.jumpHeld&&p.grounded&&!crouch;p.jumpHeld=pressed;
    if(jump){const cap=this.movementSpeed(p)*1.1;if(this.velocity.length()>cap)this.velocity.setLength(cap);p.vy=5.8;p.grounded=false;}
    if(p.grounded){const v=this.velocity.length();this.velocity.multiplyScalar(v?Math.max(0,v-Math.max(v,1.6)*5.2*dt)/v:0);}
    // Low air wish-speed preserves strafing, without accelerating by simply holding W.
    const max=(p.grounded?speed:.6)*amount,along=this.velocity.dot(wish),gain=Math.min(Math.max(0,max-along),(p.grounded?5.5:12)*speed*amount*dt);
    this.velocity.addScaledVector(wish,gain);const limit=p.grounded?speed:6;if(this.velocity.length()>limit)this.velocity.setLength(limit);
    if(this.velocity.length()>.1)p.shield=0;const previous=p.pos.clone();this.movePerson(p,this.velocity.clone().multiplyScalar(dt),dt,crouch);this.updateFootsteps(p,previous,dt,crouch||slow);
  }
  movePerson(p,delta,dt,crouch=false){
    if(dt>1/60+.00001){const n=Math.ceil(dt*60);for(let i=0;i<n;i++)this.movePerson(p,delta.clone().multiplyScalar(1/n),dt/n,crouch);return;}
    crouch=!!crouch||!!(p.crouching&&capsuleOverlap(this.world,p.pos,1.72));p.crouching=crouch;
    const height=crouch?1.05:1.72,wasGrounded=!!p.grounded&&p.vy<=0;
    if(capsuleOverlap(this.world,p.pos,height)){
      const repaired=resolveCapsule(this.world,p.pos,height);
      if(!repaired.overlapping)p.pos.copy(repaired.position);
      else if(p.lastSafe&&!capsuleOverlap(this.world,p.lastSafe,height))p.pos.copy(p.lastSafe);
    }
    const start=p.pos.clone();
    const ladder=(this.meta?.ladders||[]).find(l=>Math.hypot(p.pos.x-l.x,p.pos.z-l.z)<.85&&p.pos.y>=l.bottom-.2&&p.pos.y<l.top+.05);
    if(ladder&&p.isHuman&&!this.keys.has('Space')){
      const climb=(this.keys.has('KeyW')?1:0)-(this.keys.has('KeyS')?1:0);
      if(climb){const motion=V((ladder.x-p.pos.x)*Math.min(1,dt*6),clamp(p.pos.y+climb*dt*2.8,ladder.bottom,ladder.top+.06)-p.pos.y,0);p.pos.copy(slideBody(this.world,start,motion,height).position);p.vy=0;p.grounded=false;return;}
    }
    const horizontal=V(delta.x,0,delta.z);let result=slideBody(this.world,start,horizontal,height);
    // Step only from supported ground and only through a clear raised body-sized passage.
    if(wasGrounded&&horizontal.lengthSq()>1e-10&&result.contacts.some(c=>c.normal.y<.65)){
      const up=V(0,.5,0),upHit=sweepCapsule(this.world,start,up,height);
      const rise=upHit?Math.max(0,.5*upHit.fraction-.002):.5;
      if(rise>.02){
        const raised=start.clone().add(V(0,rise,0)),step=slideBody(this.world,raised,horizontal,height),down=V(0,-rise-.07,0),landing=sweepCapsule(this.world,step.position,down,height);
        if(supportsBody(landing,true)&&landing.point.y-start.y<=.502){
          step.position.addScaledVector(down,Math.max(0,landing.fraction-.001/down.length()));
          const progress=v=>(v.x-start.x)*horizontal.x+(v.z-start.z)*horizontal.z;
          if(step.position.y-start.y<=.502&&progress(step.position)>progress(result.position)+1e-7&&!capsuleOverlap(this.world,step.position,height))result=step;
        }
      }
    }
    p.vy=(p.vy||0)-16*dt;
    const vertical=V(0,p.vy*dt,0),verticalHit=sweepCapsule(this.world,result.position,vertical,height);
    p.grounded=vertical.y<=0&&supportsBody(verticalHit,wasGrounded&&verticalHit?.point.y-start.y<=.502);
    if(verticalHit){
      if(p.grounded||vertical.y>0){result.position.addScaledVector(vertical,Math.max(0,verticalHit.fraction-.001/Math.max(vertical.length(),.001)));p.vy=0;}
      else result.position.copy(slideBody(this.world,result.position,vertical,height).position);
    }else result.position.add(vertical);
    if(p.vy<=0){
      const down=V(0,-(wasGrounded?.52:.035),0),support=sweepCapsule(this.world,result.position,down,height);
      if(supportsBody(support,wasGrounded&&support?.point.y-start.y<=.502)){result.position.addScaledVector(down,Math.max(0,support.fraction-.001/down.length()));p.grounded=true;p.vy=0;}
    }
    p.pos.copy(result.position);
    if(p.isHuman&&this.velocity)for(const {normal} of result.contacts){if(Math.abs(normal.y)<.65){const n=normal.clone().setY(0).normalize(),inward=this.velocity.dot(n);if(inward<0)this.velocity.addScaledVector(n,-inward);}}
    if(!capsuleOverlap(this.world,p.pos,height)){if(p.grounded)p.lastSafe=p.pos.clone();}
    else{p.pos.copy(start);p.vy=0;}
    if(p.pos.y<(this.meta?.killY??-100)){if(p.lastSafe){p.pos.copy(p.lastSafe);p.vy=0;if(p.isHuman)this.velocity?.set(0,0,0);}else this.damage(p,1000,null);}
  }
  chooseBotPatrol(b){
    if(b.patrolGoal&&b.pos.distanceTo(V(...b.patrolGoal.position))>1&&(b.patrolUntil??Infinity)>(this.time||0))return V(...b.patrolGoal.position);
    const nodes=this.safeSpawnNodes?.length?this.safeSpawnNodes:this.nav;b.visitedPlaces??=new Set();
    const candidates=Array.from({length:28},()=>pick(nodes)).filter(n=>n&&V(...n.position).distanceTo(b.pos)>8);
    const sector=n=>Math.floor(n.position[0]/10)+':'+Math.floor(n.position[2]/10);
    candidates.sort((a,c)=>{const score=n=>(b.visitedPlaces.has(sector(n))?30:0)+(this.bots||[]).filter(o=>o!==b&&o.patrolGoal&&V(...o.patrolGoal.position).distanceTo(V(...n.position))<8).length*20+Math.abs(V(...n.position).distanceTo(b.pos)-20);return score(a)-score(c);});
    const goal=candidates[0]||nodes[0];if(goal){b.visitedPlaces.add(sector(goal));if(b.visitedPlaces.size>24)b.visitedPlaces.clear();b.patrolGoal=goal;b.patrolUntil=(this.time||0)+20;return V(...goal.position);}return b.pos.clone();
  }
  buyBotWeapon(b){
    if(b.isHuman||!b.alive||this.config.mode!=='bomb'||this.round<=1||b.primary||b.purchaseRound===this.round)return null;
    b.purchaseRound=this.round;
    const choices=Object.entries(WEAPONS).filter(([id,w])=>!['PISTOL','MELEE'].includes(w.type)&&w.price>0&&w.price<=b.money&&(!w.team||w.team===b.team));
    if(!choices.length)return null;
    const [id,w]=pick(choices);b.money-=w.price;b.primary=id;b.weapon=id;b.ammo[id]={mag:w.mag,reserve:w.reserve};return id;
  }
  botEquip(b,id){
    if(!id||b.weapon===id&&b.model?.userData.weaponId===id)return;
    if(b.weapon!==id){b.weapon=id;b.reloadTime=0;b.soundSerial=(b.soundSerial||0)+1;b.nextShot=Math.max(b.nextShot,.35);this.actionAudio(b,'draw');}
    const data=b.model?.userData,socket=data?.bones?.find(bone=>bone.name==='weapon_hand_R');if(!socket)return;
    if(data.gun){data.gun.removeFromParent();data.gun=null;}data.weaponId=id;
    const asset=id==='knife'?'knife_'+b.team.toLowerCase():id;
    const template=importedModels.get(asset);if(template){data.gun=new THREE.Mesh(template.geometry,template.materials);socket.add(data.gun);}else if(typeof window!=='undefined')loadImportedModels([asset]).then(()=>{if(b.alive&&b.weapon===id){data.weaponId=null;this.botEquip(b,id);}}).catch(()=>{});
  }
  botObstacleAction(b,direction){
    if(!b.grounded||b.jumpCooldown>0||direction.lengthSq()<.001)return false;
    const end=b.pos.clone().addScaledVector(direction,1.1),floor=this.world.floor(end,1,2);if(floor===null||floor-b.pos.y>.85||floor-b.pos.y<-.7)return false;
    const low=this.world.clear(b.pos.clone().add(V(0,.3,0)),end.clone().add(V(0,.3,0))),high=this.world.clear(b.pos.clone().add(V(0,1.9,0)),end.clone().add(V(0,1.9,0)));
    if(high&&(!low||floor-b.pos.y>.45)){b.vy=5.8;b.grounded=false;b.jumpCooldown=1;return true;}return false;
  }
  targetAimPoint(p){const crouching=p.crouching||(p.isHuman&&(this.keys?.has('ControlLeft')||this.keys?.has('ControlRight')));return p.pos.clone().add(V(0,crouching?.78:1.25,0));}
  canBotDefuse(b){const pos=this.bomb.position;return !!(this.bomb.planted&&pos&&b.alive&&b.team==='CT'&&Math.hypot(b.pos.x-pos.x,b.pos.z-pos.z)<.38&&Math.abs(b.pos.y-pos.y)<.4&&this.world.clear(b.pos.clone().add(V(0,.85,0)),pos.clone().add(V(0,.15,0))));}
  releaseBotDefuse(b){
    if(this.bomb.defuser!==b)return;this.bomb.defuser=null;this.bomb.progress=0;b.defuse=0;b.bombAudioProgress=0;b.objectiveAction=null;
    if(this.bombMesh){this.bombMesh.position.copy(this.bomb.position);this.bombMesh.visible=true;}
    if(b.isHuman){b.defuseWeapon=null;return;}
    if(b.alive)this.botEquip(b,b.defuseWeapon||b.primary||b.secondary||'knife');else{b.weapon=b.defuseWeapon||b.primary||b.secondary||'knife';if(b.model?.userData.gun)b.model.userData.gun.visible=false;}b.defuseWeapon=null;
  }
  holdBombForDefuse(b){
    if(this.bomb.defuser&&this.bomb.defuser!==b)return false;
    if(this.bomb.defuser!==b){b.defuseWeapon=b.weapon==='c4'?(b.primary||b.secondary||'knife'):b.weapon;this.bomb.defuser=b;b.defuse=0;}
    this.botEquip(b,'c4');if(this.bombMesh)this.bombMesh.visible=false;return true;
  }
  updateBot(b,dt){const skill=botDifficulty(this.config.difficulty);if(!b.alive){if(this.bomb.defuser===b)this.releaseBotDefuse(b);return;}if(this.bomb.defuser===b&&!this.canBotDefuse(b))this.releaseBotDefuse(b);const previousPosition=b.pos.clone();this.tickReload(b,dt);b.jumpCooldown=Math.max(0,(b.jumpCooldown||0)-dt);b.shield=Math.max(0,b.shield-dt);b.nextShot=Math.max(0,b.nextShot-dt);b.brain-=dt;const eye=b.pos.clone().add(V(0,b.crouching?1:1.5,0));
    if(b.brain<=0){b.brain=rand(...skill.scan);b.visibleToPlayer=b.pos.distanceTo(this.player.pos)<45&&this.visible(eye,this.targetAimPoint(this.player));const enemies=this.players.filter(p=>p!==b&&p.alive&&p.team!==b.team).sort((a,c)=>a.pos.distanceToSquared(b.pos)-c.pos.distanceToSquared(b.pos));const target=enemies.find(p=>p.pos.distanceTo(b.pos)<45&&this.visible(eye,this.targetAimPoint(p)));if(target!==b.target)b.reaction=rand(...skill.reaction);b.target=target||null;if(target){b.lastSeen=target.pos.clone();b.lastSeenAt=this.time||0;}const tactical=ambushGoal(this,b);
      if(!b.path.length||b.thought<=0){let destination=b.target?.pos;if(this.config.mode==='bomb'){if(this.bomb.planted)destination=b.team==='CT'?this.bomb.position:(!b.patrolGoal||V(...b.patrolGoal.position).distanceTo(this.bomb.position)>10?this.bomb.position:V(...b.patrolGoal.position));else if(this.bomb.carrier===b){b.plantSite??=this.sites[((b.spawnSlot||0)+(this.round||0))%this.sites.length];destination=b.plantSite.position;}else if(b.team==='T'&&this.bomb.position)destination=this.bomb.position;}if(tactical)destination=tactical;if(!destination){destination=this.chooseBotPatrol(b);}b.path=this.pathTo(b.pos,destination);b.thought=rand(3,6);}
    }
    const defuser=this.bomb.planted&&b.team==='CT'&&(this.bomb.defuser||this.bots.filter(o=>o.alive&&o.team==='CT').sort((a,c)=>a.pos.distanceToSquared(this.bomb.position)-c.pos.distanceToSquared(this.bomb.position))[0])===b;b.thought-=dt;b.reaction-=dt;const rung=b.path[0];if(rung?.ladder&&Math.abs(rung.position[1]-b.pos.y)>.3&&Math.hypot(rung.position[0]-b.pos.x,rung.position[2]-b.pos.z)<1.5){const down=rung.position[1]<b.pos.y;if(down){b.pos.x+=(rung.position[0]-b.pos.x)*Math.min(1,dt*5);b.pos.z+=(rung.position[2]-b.pos.z)*Math.min(1,dt*5);}b.pos.y+=Math.sign(rung.position[1]-b.pos.y)*Math.min(dt*2.8,Math.abs(rung.position[1]-b.pos.y));b.vy=0;b.model.position.copy(b.pos);animateActor(b.model,1,dt);return;}if(b.holdingAngle&&(b.target||this.bomb.carrier===b||(this.bomb.planted&&b.team==='CT'))){b.holdingAngle=false;b.ambush=null;b.thought=0;}let direction=V();const target=b.target?.alive&&b.target.team!==b.team?b.target:null;
    const planting=this.config.mode==='bomb'&&this.bomb.carrier===b&&!this.bomb.planted&&this.sites.some(s=>b.pos.distanceTo(s.position)<3.5),defusing=defuser&&this.canBotDefuse(b);b.objectiveAction=planting?'plant':defusing?'defuse':null;
    const primary=b.primary&&b.ammo[b.primary]?.mag>0?b.primary:null,secondary=b.secondary&&b.ammo[b.secondary]?.mag>0?b.secondary:null;
    const travelKnife=this.config.difficulty==='hard'&&!target&&!b.holdingAngle&&!b.objectiveAction&&b.reloadTime<=0&&b.path.length>5&&(this.time||0)-(b.lastSeenAt??-Infinity)>3;const nextWeapon=planting?'c4':travelKnife?'knife':primary||secondary||b.primary||b.secondary||'knife';if(b.weapon==='knife'&&nextWeapon!=='knife')b.nextShot=Math.max(b.nextShot,.25);if(defusing)this.holdBombForDefuse(b);else this.botEquip(b,nextWeapon);if(defusing){const d=this.bomb.position.clone().sub(b.pos);b.desiredYaw=Math.atan2(-d.x,-d.z);b.aimPitch=-.45;}b.crouching=!!b.objectiveAction||Boolean(b.path[0]?.flags&1)||!!(target&&b.pos.distanceTo(target.pos)>10&&(b.spawnSlot||0)%2===0);
    const held=WEAPONS[b.weapon],ammoHeld=b.ammo[b.weapon];if(!b.objectiveAction&&held&&ammoHeld?.mag===0&&ammoHeld.reserve>0&&b.reloadTime<=0){b.reloadTime=held.reload;b.reloadAt=this.time;this.actionAudio(b,'reload',b.reloadTime);}
    if(target&&!b.objectiveAction&&held&&held.type!=='MELEE'&&ammoHeld?.mag>0){const aimPoint=this.targetAimPoint(target),desiredPitch=Math.atan2(aimPoint.y-eye.y,Math.max(.1,Math.hypot(aimPoint.x-eye.x,aimPoint.z-eye.z)));b.aimPitch=(b.aimPitch||0)+(desiredPitch-(b.aimPitch||0))*(1-Math.exp(-12*dt));direction.copy(target.pos).sub(b.pos);direction.y=0;b.desiredYaw=Math.atan2(-direction.x,-direction.z);if(b.reaction<=0&&b.nextShot<=0&&b.reloadTime<=0&&this.visible(eye,aimPoint)){b.nextShot=Math.max(held.delay,rand(...skill.shot));b.shotAt=this.time;b.shield=0;const ammo=b.ammo[b.weapon];if(ammo&&Number.isFinite(ammo.mag)){ammo.mag=Math.max(0,ammo.mag-1);if(ammo.mag===0){b.reloadTime=WEAPONS[b.weapon].reload;b.reloadAt=this.time;this.actionAudio(b,'reload',b.reloadTime);}}this.audio?.(b.weapon+'-fire',b===this.observed?.4:.55,b===this.observed?null:eye);this.actionAudio(b,'cycle');if(Math.random()<botHitChance(skill,target.pos.distanceTo(b.pos)))this.damage(target,rand(...skill.damage),b,{head:false,point:aimPoint.clone(),direction:aimPoint.clone().sub(eye).normalize()});else if(this.marks){const aim=aimPoint.clone().add(V(rand(-.6,.6),rand(-.3,.3),rand(-.6,.6)));const miss=this.world.trace(eye,eye.clone().addScaledVector(aim.sub(eye).normalize(),60));if(!this.breakables?.damage(miss,WEAPONS[b.weapon]?.damage||20))this.marks.add('bullet',miss,.1);}}}
    if(defuser&&!defusing&&b.pos.distanceTo(this.bomb.position)<2&&this.world.clear(eye,this.bomb.position.clone().add(V(0,.85,0))))b.path=[{position:this.bomb.position.toArray(),flags:0}];
    if(!b.objectiveAction&&!b.holdingAngle&&b.path.length&&(defuser||!target||b.pos.distanceTo(target.pos)>13)){const node=b.path[0],goal=V(...node.position);direction.copy(goal).sub(b.pos);direction.y=0;if(direction.length()<.18)b.path.shift();else{direction.normalize();if(!target)b.desiredYaw=Math.atan2(-direction.x,-direction.z);const clearance=b.pos.clone().addScaledVector(direction,.6);b.crouching=b.crouching||!this.world.clear(b.pos.clone().add(V(0,1.6,0)),clearance.add(V(0,1.6,0)));const crouch=b.crouching;this.botObstacleAction(b,direction);const old=b.pos.clone();const travelSpeed=skill.speed<3.2&&(!b.grounded||goal.y-b.pos.y>.15)?3.2:skill.speed;const movement=direction.multiplyScalar((crouch?travelSpeed*.56:b.weapon==='knife'?travelSpeed*1.22:travelSpeed)*dt),next=old.clone().add(movement);const nextFloor=this.world.floor(next,.6,1.2);if(nextFloor===null){b.path=[];b.thought=0;b.vy=0;}else this.movePerson(b,movement,dt,crouch);if(b.pos.distanceToSquared(old)<.0001){b.stuck=(b.stuck||0)+dt;if(b.stuck>1){const near=this.nearestNode(b.pos),alternatives=(near?.links||[]).map(id=>this.navMap.get(id)).filter(n=>n&&n.id!==node.id);b.path=alternatives.length?[pick(alternatives)]:[];b.thought=1;b.stuck=0;}}else b.stuck=0;}}
    else this.movePerson(b,V(),dt,b.crouching);
    for(const other of this.players){if(b.objectiveAction||other===b||!other.alive)continue;const d=b.pos.clone().sub(other.pos);d.y=0;if(d.lengthSq()<.3&&d.lengthSq()>.001){b.pos.addScaledVector(d.normalize(),dt*.4);this.world.resolve(b.pos);}}
    if(this.config.mode==='bomb'){if(planting){b.plant=(b.plant||0)+dt;this.bombActionAudio(b,'plant',b.plant);if(b.plant>=3)this.plantBomb(b);}else b.plant=0;if(defusing&&this.canBotDefuse(b)&&this.bomb.defuser===b){b.defuse=(b.defuse||0)+dt;this.bombActionAudio(b,'defuse',b.defuse);if(b.defuse>=5){this.bomb.defusedBy=b;b.score=(b.score||0)+3;this.audio('c4-disarmfinish',.6,this.bomb.position);this.releaseBotDefuse(b);this.endRound('CT',this.text('Bomba desactivada','Bomb defused'));}}else b.defuse=0;if(!b.plant&&!b.defuse)b.bombAudioProgress=0;if(!this.bomb.planted&&!this.bomb.carrier&&this.bomb.position&&b.team==='T'&&b.pos.distanceTo(this.bomb.position)<2){if(this.bomb.loot)this.pickupLoot(this.bomb.loot,b);else{this.bomb.carrier=b;this.bomb.position=null;if(this.bombMesh)this.bombMesh.visible=false;}}}
    if(Number.isFinite(b.desiredYaw)){const d=Math.atan2(Math.sin(b.desiredYaw-b.model.rotation.y),Math.cos(b.desiredYaw-b.model.rotation.y));b.model.rotation.y+=d*(1-Math.exp(-skill.turn*dt));}b.model.position.copy(b.pos);const walk=!b.holdingAngle&&b.path.length&&(defuser||!target||b.pos.distanceTo(target.pos)>13)?1:0;if(b.model.userData.gun)b.model.userData.gun.visible=true;animateActor(b.model,b.objectiveAction?0:walk,dt,b);this.updateFootsteps(b,previousPosition,dt,b.crouching);
  }
  dropBomb(){this.dropCurrent();}
  clearLoot(){for(const item of this.worldItems||[]){this.scene?.remove(item.mesh);this.disposeObject(item.mesh);}this.worldItems=[];}
  spawnLoot(owner,id,ammo=null,count=1,manual=false){if(!this.scene||!owner.pos)return null;const mesh=createGun(id==='c4'?'c4_dropped':id),direction=owner.isHuman&&this.camera?this.camera.getWorldDirection(V()):V(rand(-1,1),.2,rand(-1,1)).normalize();mesh.position.copy(owner.pos).add(V(0,manual?1.3:.8,0));mesh.rotation.z=WEAPONS[id]?Math.PI/2:0;const vel=direction.multiplyScalar(manual?3.5:1.5).add(V(0,2,0));if(owner.isHuman&&this.velocity)vel.addScaledVector(this.velocity,.6);const item={id,mesh,pos:mesh.position,vel,angular:V(0,rand(2,5),0),radius:WEAPONS[id]?.type==='PISTOL'?.12:WEAPONS[id]?.type==='RIFLE'?.2:.1,ammo:ammo?{...ammo}:null,count,fixedStep:1/60,age:0,life:id==='c4'?Infinity:120};this.scene.add(mesh);(this.worldItems??=[]).push(item);if(id==='c4'){this.bomb.carrier=null;this.bomb.loot=item;this.bomb.position=item.pos;}
    if(this.worldItems.length>80){const old=this.worldItems.find(i=>i.id!=='c4');if(old)this.removeLoot(old);}return item;}
  removeLoot(item){const i=this.worldItems.indexOf(item);if(i>=0)this.worldItems.splice(i,1);this.scene.remove(item.mesh);this.disposeObject(item.mesh);}
  dropCurrent(){const p=this.player;if(!p?.alive||this.pendingThrow)return false;const id=p.weapon;if(id==='knife')return false;if(id==='c4'){if(this.bomb.carrier!==p)return false;this.spawnLoot(p,id,null,1,true);}else if(p.grenades[id]){p.grenades[id]--;this.spawnLoot(p,id,null,1,true);}else{const slot=WEAPONS[id]?.type==='PISTOL'?'secondary':'primary';if(p[slot]!==id)return false;this.spawnLoot(p,id,p.ammo[id],1,true);p[slot]=null;}this.equip(p.primary||p.secondary||'knife');this.updateHud();return true;}
  dropInventory(p){for(const id of new Set([p.primary,p.secondary].filter(Boolean)))this.spawnLoot(p,id,p.ammo?.[id]);for(const [id,count]of Object.entries(p.grenades||{}))if(count>0)this.spawnLoot(p,id,null,count);if(this.bomb.carrier===p)this.spawnLoot(p,'c4');p.primary=p.secondary=null;p.grenades={he:0,smoke:0,flash:0};}
  nearestLoot(p,range=1){let best=null,d=range;for(const item of this.worldItems||[]){if(item.age<.65||item.id==='c4'&&p.team!=='T')continue;const distance=item.pos.distanceTo(p.pos.clone().add(V(0,.3,0)));if(distance<d&&this.world.clear(p.pos.clone().add(V(0,1,0)),item.pos.clone().add(V(0,.12,0)))){best=item;d=distance;}}return best;}
  pickupLoot(item,p,swap=false){if(!item||!p.alive||!this.worldItems.includes(item))return false;const id=item.id,w=WEAPONS[id];if(id==='c4'){if(p.team!=='T'||this.bomb.planted||this.bomb.carrier)return false;this.bomb.carrier=p;this.bomb.position=null;this.bomb.loot=null;}else if(w){const slot=w.type==='PISTOL'?'secondary':'primary';if(p[slot]&&!swap)return false;if(p[slot])this.spawnLoot(p,p[slot],p.ammo[p[slot]],1,true);p[slot]=id;p.ammo[id]={...(item.ammo||{mag:w.mag,reserve:w.reserve})};}else{const room=2-(p.grenades[id]||0);if(room<=0)return false;const n=Math.min(room,item.count);p.grenades[id]=(p.grenades[id]||0)+n;item.count-=n;if(item.count>0){this.updateHud();return true;}}this.removeLoot(item);if(p.isHuman){if(w)this.equip(id);this.updateHud();}return true;}
  updateLoot(dt){for(const item of [...this.worldItems||[]]){item.age+=dt;item.life-=dt;if(!item.sleeping)stepGrenade(item,this.world,dt);if(item.sleeping&&!item.settled){if(WEAPONS[item.id])item.mesh.rotation.set(0,item.mesh.rotation.y,Math.PI/2);item.mesh.updateMatrixWorld(true);const bounds=new THREE.Box3().setFromObject(item.mesh),floor=this.world.floor(item.pos,1,3);if(floor!==null&&Number.isFinite(bounds.min.y))item.pos.y+=floor+.015-bounds.min.y;item.settled=true;}if(item.pos.y<(this.meta.killY??-100)){const n=this.nearestNode(item.pos);if(item.id==='c4'&&n){item.pos.fromArray(n.position);item.pos.y+=.2;item.vel.set(0,0,0);item.sleeping=true;}else item.life=0;}if(item.life<=0)this.removeLoot(item);}const p=this.player;if(p?.alive){const item=this.nearestLoot(p,.95);if(item)this.pickupLoot(item,p,false);}}
  showBomb(){if(this.bombMesh){this.scene.remove(this.bombMesh);this.disposeObject(this.bombMesh);}this.bombMesh=new THREE.Group();this.bombMesh.add(createGun(this.bomb.planted?'c4':'c4_dropped'));box(this.bombMesh,[.04,.015,.03],[0,.13,0],0xea633d);this.bombMesh.position.copy(this.bomb.position);this.scene.add(this.bombMesh);}
  plantBomb(p){this.bomb.planter=p;p.score=(p.score||0)+2;this.bomb.planted=true;this.bomb.carrier=null;this.bomb.position=p.pos.clone();this.bomb.timer=40;this.bomb.progress=0;for(const bot of this.bots||[]){bot.path=[];bot.thought=0;bot.brain=0;bot.defuse=0;}this.audio('c4-plant',.5,this.bomb.position);this.bomb.beepTime=0;this.showBomb();if(p.isHuman)this.equip(p.primary||p.secondary||'knife');else{p.objectiveAction=null;p.plant=0;this.botEquip(p,p.primary||p.secondary||'knife');}this.notify('announcement',{title:this.text('BOMBA PLANTADA','BOMB PLANTED'),subtitle:this.text('40 segundos para la detonación','40 seconds until detonation'),duration:3});}
  updateBomb(dt){if(this.config.mode!=='bomb'||this.roundEnd)return;const p=this.player;let text='',progress=0;
    if(this.bomb.planted){this.bomb.timer-=dt;this.bomb.beepTime=(this.bomb.beepTime||0)-dt;if(this.bomb.beepTime<=0){this.audio('c4-beep'+(this.bomb.timer<10?3:this.bomb.timer<20?2:1),.45,this.bomb.position);this.bomb.beepTime=.12+Math.max(0,this.bomb.timer)/40*.95;}if(this.bombMesh)this.bombMesh.children[1].visible=Math.sin(this.time*8)>0;if(this.bomb.timer<=0){this.audio('c4-explode1',1,this.bomb.position);this.endRound('T',this.text('La bomba ha detonado','The bomb exploded'));return;}if(p.alive&&p.team==='CT'&&p.pos.distanceTo(this.bomb.position)<3){text=this.text('Mantén E para desactivar','Hold E to defuse');if(this.bomb.defuser&&this.bomb.defuser!==p){text=this.text('Un compañero está desactivando','A teammate is defusing');this.bomb.progress=0;p.bombAudioProgress=0;}else if(this.keys.has('KeyE')&&this.world.clear(p.pos.clone().add(V(0,1,0)),this.bomb.position.clone().add(V(0,.15,0)))){this.bomb.defuser=p;this.bomb.progress+=dt;progress=this.bomb.progress/5;this.bombActionAudio(p,'defuse',this.bomb.progress);if(progress>=1){this.bomb.defusedBy=p;p.score=(p.score||0)+3;this.audio('c4-disarmfinish',.6,this.bomb.position);this.releaseBotDefuse(p);this.endRound('CT',this.text('Bomba desactivada','Bomb defused'));}}else{if(this.bomb.defuser===p)this.releaseBotDefuse(p);this.bomb.progress=0;p.bombAudioProgress=0;}}else{if(this.bomb.defuser===p)this.releaseBotDefuse(p);this.bomb.progress=0;p.bombAudioProgress=0;}}
    else if(this.bomb.carrier===p&&p.weapon==='c4'&&p.alive&&this.sites.some(s=>p.pos.distanceTo(s.position)<5)){text=this.text('Mantén E para plantar C4','Hold E to plant C4');if(this.keys.has('KeyE')&&this.velocity.length()<.2){if(this.bomb.progress===0)this.viewModel?.action('plant',.82);this.bomb.progress+=dt;}else{if(this.bomb.progress>0)this.viewModel?.action('idle');this.bomb.progress=0;}this.bombActionAudio(p,'plant',this.bomb.progress);progress=this.bomb.progress/3;if(progress>=1)this.plantBomb(p);}
    else if(!this.bomb.carrier&&this.bomb.position&&p.alive&&p.team==='T'&&p.pos.distanceTo(this.bomb.position)<2){text=this.text('E · Recoger C4','E · Pick up C4');if(this.keys.has('KeyE')){if(this.bomb.loot)this.pickupLoot(this.bomb.loot,p);else{this.bomb.carrier=p;this.bomb.position=null;if(this.bombMesh)this.bombMesh.visible=false;}}}else{this.bomb.progress=0;p.bombAudioProgress=0;}
    if(!text&&p.alive){const item=this.nearestLoot(p,2);if(item)text=this.text('E · Recoger ','E · Pick up ')+(WEAPONS[item.id]?.name||item.id.toUpperCase());}this.notify('interaction',{text,progress});const aliveCT=this.players.some(p=>p.alive&&p.team==='CT'),aliveT=this.players.some(p=>p.alive&&p.team==='T');if(this.config.bots>0){if(!aliveCT)this.endRound('T',this.text('Equipo CT eliminado','CT team eliminated'));else if(!aliveT&&!this.bomb.planted)this.endRound('CT',this.text('Equipo T eliminado','T team eliminated'));}if(this.remaining<=0&&!this.bomb.planted)this.endRound('CT',this.text('Tiempo agotado','Time expired'));
  }
  endRound(team,reason){if(this.roundEnd)return;this.roundEnd=5;this.roundWinner=team;this.roundMvp=awardRoundMvp(this.players,team,this.bomb);this.scores[team]++;this.notify('announcement',{title:team+this.text(' GANA LA RONDA',' WINS THE ROUND'),subtitle:reason});for(const p of this.players)p.money=Math.min(16000,p.money+(p.team===team?3250:1900));}
  finish(){this.notify('scoreboard',false);this.state='finished';document.exitPointerLock?.();const ranked=[...this.players].sort((a,b)=>b.kills-a.kills);const title=this.config.mode==='ffa'?(ranked[0]===this.player?this.text('VICTORIA','VICTORY'):ranked[0].name+this.text(' GANA',' WINS')):(this.scores.CT>this.scores.T?'CT':'T')+this.text(' GANA LA PARTIDA',' WINS THE MATCH');this.notify('result',{title,kills:this.player.kills,deaths:this.player.deaths});}
  update(dt){this.time+=dt;this.updateActionAudio(dt);this.updateLoot(dt);if(this.grenadeCharge)this.grenadeCharge.time=Math.min(1.2,this.grenadeCharge.time+dt);if(this.pendingThrow){this.pendingThrow.time-=dt;if(this.pendingThrow.time<=0){const {type,power}=this.pendingThrow;this.pendingThrow=null;if(this.player.alive)this.throwGrenade(type,power);}}this.gunKick=Math.max(0,(this.gunKick||0)-dt*.8);this.recoil=Math.max(0,(this.recoil||0)-dt*.8);this.damageFlash=Math.max(0,this.damageFlash-dt*1.8);this.flash=Math.max(0,this.flash-dt);
    if(this.roundEnd>0){this.roundEnd-=dt;if(this.roundEnd<=0){if(Math.max(this.scores.CT,this.scores.T)>=3)this.finish();else this.startRound();}this.updateCamera(dt);return;}
    if(this.prep>0){const before=Math.ceil(this.prep);this.prep-=dt;if(Math.ceil(this.prep)!==before)this.notify('announcement',this.prep>0?{title:String(Math.ceil(this.prep)),subtitle:this.text('Prepárate · B para comprar','Get ready · B to buy')}:{title:'',subtitle:''});this.spawnOrigin=this.player.pos.clone();this.updateCamera(dt);return;}
    this.elapsed+=dt;this.remaining=Math.max(0,this.remaining-dt);if(this.config.mode==='ffa'&&this.remaining<=0){this.finish();return;}
    const p=this.player;p.nextShot=Math.max(0,p.nextShot-dt);p.shield=Math.max(0,p.shield-dt);
    this.tickReload(p,dt);
    if(p.alive){const crouch=this.keys.has('ControlLeft')||this.keys.has('ControlRight'),slow=this.keys.has('ShiftLeft');this.updateMovement(p,dt,crouch,slow);if(this.mouseDown)this.shoot();}
    else if(this.config.mode==='ffa'){p.respawnTime-=dt;if(p.respawnTime<=0){this.spawn(p);this.notify('announcement',{title:'',subtitle:''});}}
    this.botStep=(this.botStep||0)+dt;if(this.botStep>=1/30){const step=Math.min(this.botStep,.067);this.botStep=0;for(const b of this.bots){if(!b.alive&&this.config.mode==='ffa'){b.respawnTime-=step;if(b.respawnTime<=0)this.spawn(b);}this.updateBot(b,step);}}
    for(let i=this.grenades.length-1;i>=0;i--){const g=this.grenades[i];g.fuse-=dt;g.age=(g.age||0)+dt;stepGrenade(g,this.world,dt);if(g.impact>1.5&&g.age>(g.lastBounce||0)+.12){this.audio(g.type+'-bounce',Math.min(.5,g.impact*.05),g.pos);g.lastBounce=g.age;}g.impact=0;if(g.fuse<=0&&(g.type!=='smoke'||g.sleeping||g.vel.length()<.4||g.age>5)){this.explode(g);this.grenades.splice(i,1);}}
    for(let i=this.smokes.length-1;i>=0;i--){const s=this.smokes[i];s.life-=dt;const age=s.total-s.life,fade=Math.min(1,s.life/3);s.radius=3.7*Math.min(1,age/1.25)*fade;animateCloud(s.mesh,age,fade);if(s.life<=0){this.scene.remove(s.mesh);this.disposeObject(s.mesh);this.smokes.splice(i,1);}}
    for(let i=this.effects.length-1;i>=0;i--){const e=this.effects[i];e.life-=dt;if(e.cloud)animateCloud(e.mesh,e.total-e.life,Math.max(0,e.life/e.total),true);else e.mesh.material.opacity=Math.max(0,e.life/e.total);if(e.life<=0){this.scene.remove(e.mesh);this.disposeObject(e.mesh);this.effects.splice(i,1);}}
    this.updateBomb(dt);this.updateCamera(dt);
  }
  updateCamera(dt){const p=this.player;if(!p)return;const crouch=p.crouching;if(p.alive){this.camera.position.copy(p.pos).add(V(0,crouch?1.0:1.6,0));this.camera.rotation.set(this.pitch,this.yaw,0);this.viewGun.visible=!this.scoped;const bob=this.velocity.length()>.1?Math.sin(this.time*10)*.008:0;if(this.viewModel){this.viewGun.position.set(0,bob,0);this.viewGun.rotation.set(0,0,Math.sin(this.time*5)*.002);this.viewModel.update(dt);}else{this.viewGun.position.set(.25,-.25+bob-(p.reloadTime>0?.13:0),-.48+(this.gunKick||0));this.viewGun.rotation.set(p.reloadTime>0?-.55:0,0,p.reloadTime>0?-.3:0);}}
    else{const living=this.players.filter(o=>o.alive&&!o.isHuman&&o.team===p.team);const fallback=this.players.filter(o=>o.alive&&!o.isHuman);const list=living.length?living:fallback;const target=list[(this.spectatorIndex||0)%Math.max(1,list.length)];if(target){if(this.observed!==target||this.observedWeapon!==target.weapon){this.clearSpectator();this.observed=target;this.observedWeapon=target.weapon;this.camera.position.copy(target.pos).add(V(0,target.crouching?1.05:1.6,0));this.camera.rotation.set(target.aimPitch||0,target.model.rotation.y,0);for(const old of [...this.viewGun.children]){this.viewGun.remove(old);this.disposeObject(old);}this.viewModel=viewModel(importedModels,target.weapon,target.team);if(this.viewModel)this.viewGun.add(this.viewModel.root);}target.model.visible=false;this.camera.position.lerp(target.pos.clone().add(V(0,target.crouching?1.05:1.6,0)),1-Math.exp(-18*dt));const rotation=new THREE.Quaternion().setFromEuler(new THREE.Euler(target.aimPitch||0,target.model.rotation.y,0,'YXZ'));this.camera.quaternion.slerp(rotation,1-Math.exp(-12*dt));this.yaw=this.camera.rotation.y;this.viewGun.visible=true;this.viewGun.position.set(0,0,0);this.viewGun.rotation.set(0,0,0);if(this.observedReload!==target.reloadAt){this.observedReload=target.reloadAt;if(target.reloadTime>0)this.viewModel?.action('reload');}if(this.observedShot!==target.shotAt){this.observedShot=target.shotAt;this.viewModel?.action('fire');}if(this.observedAction!==target.objectiveAction){this.observedAction=target.objectiveAction;if(['plant','defuse'].includes(target.objectiveAction))this.viewModel?.action('plant',target.objectiveAction==='defuse'?.5:.82);}this.viewModel?.update(dt);}else this.viewGun.visible=false;}
    this.updateWeaponWall(dt);
  }
  updateWeaponWall(dt){
    if(!this.viewGun?.visible||!this.world)return;
    const forward=this.camera.getWorldDirection(V()),right=V(1,0,0).applyQuaternion(this.camera.quaternion),up=V(0,1,0).applyQuaternion(this.camera.quaternion);let nearest=.95;
    for(const [x,y]of [[0,0],[-.16,0],[.16,0],[0,-.2],[0,.12]]){const origin=this.camera.position.clone().addScaledVector(right,x).addScaledVector(up,y);nearest=Math.min(nearest,this.world.raycast(origin,forward,.95));}
    const target=clamp((.85-nearest)/.6,0,1);this.wallAmount=(this.wallAmount||0)+(target-(this.wallAmount||0))*(1-Math.exp(-16*dt));
    // Move the common parent so hands and weapon cannot separate.
    this.viewGun.position.z+=this.wallAmount*.035;this.viewGun.position.y-=this.wallAmount*.025;this.viewGun.rotation.x-=this.wallAmount*.1;
  }
  renderGame(){
    // The first-person model has its own depth pass; nearby walls cannot slice it.
    this.viewGun.traverse(o=>o.layers.set(1));this.scene.traverse(o=>{if(o.isLight)o.layers.enable(1);});
    const background=this.scene.background,mask=this.camera.layers.mask,auto=this.renderer.autoClear;
    try{this.cameraLook?.begin(this.renderer);this.camera.layers.set(0);this.renderer.render(this.scene,this.camera);this.renderer.autoClear=false;this.renderer.clearDepth();this.scene.background=null;this.camera.layers.set(1);this.renderer.render(this.scene,this.camera);}
    finally{this.scene.background=background;this.camera.layers.mask=mask;this.renderer.autoClear=auto;this.cameraLook?.finish(this.renderer);}
  }
  clearSpectator(){if(this.observed?.model)this.observed.model.visible=this.observed.alive;this.observed=null;this.observedAction=null;this.observedWeapon=null;this.observedShot=null;this.observedReload=null;}

  updateHud(){if(!this.player)return;const p=this.player.alive?this.player:(this.observed||this.player),w=WEAPONS[p.weapon],a=p.ammo[p.weapon];this.notify('hud',{observed:this.player.alive?'':p.name,charge:this.grenadeCharge?Math.min(1,this.grenadeCharge.time/1.2):0,health:Math.ceil(p.health),armor:Math.ceil(p.armor),money:p.money,ammo:w?.type==='MELEE'?'—':a?.mag??p.grenades[p.weapon]??1,reserve:a?.reserve??0,weapon:p.reloadTime>0?this.text('RECARGANDO…','RELOADING…'):w?.name??p.weapon.toUpperCase(),shield:p.shield,remaining:this.bomb.planted?this.bomb.timer:this.remaining,round:this.round,scores:this.scores,fps:this.fps,damage:this.damageFlash,flash:Math.min(1,this.flash),players:this.players.map(o=>({name:o.name,kills:o.kills,deaths:o.deaths,me:o.isHuman,alive:o.alive,team:o.team,health:Math.ceil(o.health)})),inventory:[p.primary,p.secondary,'knife',...Object.keys(p.grenades).filter(k=>p.grenades[k]),...(this.bomb.carrier===p?['c4']:[])].filter(Boolean),primary:p.primary,secondary:p.secondary,active:p.weapon,mode:this.config.mode,planted:this.bomb.planted});}
  text(es,en){return phrase(this.settings.language,es,en).replace(/\bE\b/g,keyLabel((this.settings.binds||DEFAULT_BINDS).interact)).replace(/\bB\b/g,keyLabel((this.settings.binds||DEFAULT_BINDS).buy));}
  frame(now){const frameDelta=(now-this.lastFrame)/1000,dt=Math.min(.05,frameDelta);this.lastFrame=now;this.fps=Math.round(1/Math.max(.001,frameDelta));if(this.state==='playing'){try{this.update(dt);}catch(error){console.error(error);this.pause();this.notify('toast',error.message);}this.hudClock+=dt;if(this.hudClock>.16){this.hudClock=0;this.updateHud();this.drawRadar();}}if(this.state!=='menu'&&this.state!=='loading'){this.sound?.listener(this.camera.position,this.camera.getWorldDirection(V()),V(0,1,0).applyQuaternion(this.camera.quaternion),this.settings.volume);this.renderGame();}requestAnimationFrame(t=>this.frame(t));}
  drawRadar(){
    const p=this.observed||this.player;if(!p)return;
    this.radar??=new TacticalRadar(document.getElementById('radar'));
    this.radar.draw({nav:this.nav,player:p,bots:this.bots,yaw:this.yaw,sites:this.sites,mode:this.config.mode});
    document.getElementById('location').textContent=placeName(this.settings.language,this.nearestNode(p.pos)?.place||this.config.map.toUpperCase());
  }
}

// Menu and shop use the same imported, skinned character rig as the match.
const previewPosePromises=new Map();
async function loadPreviewPoses(team){
  const id=team==='CT'?'sas':'phoenix';
  if(!previewPosePromises.has(id))previewPosePromises.set(id,(async()=>{
    const base=`assets/models/${id}/preview-poses`;
    const [meta,bytes]=await Promise.all([fetch(base+'.json?v=3'),fetch(base+'.bin?v=3')]);
    if(!meta.ok||!bytes.ok)throw Error('Missing operator aim poses');
    return {meta:await meta.json(),data:new Float32Array(await bytes.arrayBuffer())};
  })().catch(error=>{previewPosePromises.delete(id);throw error;}));
  return previewPosePromises.get(id);
}

export function startOperatorPreview(canvas,{mode='menu'}={}){
  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0,0);
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1;
  const scene=new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xdce9f4,0x7e7365,2));
  const light=new THREE.DirectionalLight(0xffedda,3);light.position.set(-3,4,4);scene.add(light);
  const soft=new THREE.DirectionalLight(0xc5dcec,1.2);soft.position.set(3,2,4);scene.add(soft);
  const rim=new THREE.DirectionalLight(0xdcecff,1.8);rim.position.set(2,3,-3);scene.add(rim);
  const camera=new THREE.PerspectiveCamera(mode==='buy'?34:32,1,.1,20);
  const eyeHeight=mode==='buy'?1.02:1.24,baseDistance=mode==='buy'?3.35:2.55;
  const frameCenter=mode==='buy'?.15:0;
  camera.position.set(frameCenter,eyeHeight,baseDistance);camera.lookAt(frameCenter,eyeHeight,0);
  let actor=null,currentTeam=null,currentWeapon=null,poseSet=null,poseBindings=[],weaponRig=null,serial=0,previousTime=0,lastDraw=0;
  const disposeActor=()=>{
    if(!actor)return;weaponRig?.dispose();weaponRig=null;scene.remove(actor);
    actor.traverse(o=>{o.skeleton?.dispose();if(o.geometry&&o.geometry!==boxGeo&&!o.geometry.userData.shared)o.geometry.dispose();for(const m of o.material?(Array.isArray(o.material)?o.material:[o.material]):[])if(!m.userData.shared)m.dispose();});
  };
  async function select(team='CT',weaponId=team==='CT'?'m4':'ak'){
    if(team===currentTeam&&weaponId===currentWeapon&&canvas.dataset.ready==='true')return true;
    const request=++serial;currentTeam=team;currentWeapon=weaponId;poseSet=null;
    canvas.dataset.ready='false';canvas.dataset.team=team;canvas.dataset.weapon=weaponId;
    // Hide the previous item while another model is being loaded.
    if(actor?.userData.gun)actor.userData.gun.visible=false;
    try{
      const character=team==='CT'?'sas':'phoenix';
      const modelId=weaponId==='c4'?'c4_dropped':weaponId;
      await loadImportedModels([character,modelId]);
      const poses=await loadPreviewPoses(team);
      if(request!==serial)return false;
      if(!actor||actor.userData.previewTeam!==team){disposeActor();actor=createActor(team);actor.userData.previewTeam=team;scene.add(actor);}
      const socket=actor.userData.bones?.find(b=>b.name==='weapon_hand_R'),template=importedModels.get(modelId);
      if(!socket||!template)throw Error('Missing operator weapon socket');
      weaponRig?.dispose();actor.userData.gun?.removeFromParent();
      weaponRig=attachOperatorWeapon(actor,template);weaponRig.root.name='shop weapon '+weaponId;
      actor.userData.gun=weaponRig.root;actor.userData.weaponId=weaponId;
      actor.userData.animator?.action('idle');poseSet=poses;
      poseBindings=poses.meta.bones.map(name=>actor.userData.bones.find(b=>b.name===name));
      canvas.dataset.ready='true';return true;
    }catch(error){if(request===serial)canvas.dataset.ready='error';console.warn('Operator preview:',error.message);return false;}
  }
  function draw(now){
    requestAnimationFrame(draw);
    if(!canvas.offsetWidth||canvas.closest('.hidden')||document.hidden){previousTime=now;return;}
    if(now-lastDraw<1000/30)return;
    const dt=Math.min((now-previousTime)/1000,.05);previousTime=lastDraw=now;
    const w=canvas.clientWidth,h=canvas.clientHeight;
    if(w<1||h<1)return;
    if(canvas.width!==Math.floor(w*renderer.getPixelRatio())||canvas.height!==Math.floor(h*renderer.getPixelRatio())){
      renderer.setSize(w,h,false);camera.aspect=w/h;
      camera.position.z=Math.max(baseDistance,(mode==='buy'?1.4:1.15)/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*camera.aspect));
      camera.updateProjectionMatrix();
    }
    if(actor){
      actor.userData.animator?.update(dt);
      // The original aim pose places both hands on the selected gun's grips.
      const pose=(mode==='buy'?poseSet?.meta.aimPoses?.[currentWeapon]:null)||poseSet?.meta.poses[currentWeapon];
      if(pose)for(let i=0;i<poseSet.meta.bones.length;i++){
        const bone=poseBindings[i];if(!bone)continue;
        const offset=pose.offset+i*7;bone.position.fromArray(poseSet.data,offset);bone.quaternion.fromArray(poseSet.data,offset+3);
      }
      actor.rotation.y=Math.PI+(mode==='buy'?.45:0);
      weaponRig?.update();
    }
    renderer.render(scene,camera);
  }
  requestAnimationFrame(draw);
  return select;
}
