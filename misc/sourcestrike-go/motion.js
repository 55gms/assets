import * as THREE from './vendor/three.module.js';

export class BakedAnimator {
 constructor(bones,animation){this.bones=bones;this.animation=animation;this.time=0;this.p=new THREE.Vector3();this.q=new THREE.Quaternion();this.action('idle');}
 action(name,speed=1){const clip=this.animation?.meta.actions[name];if(!clip)return false;this.name=name;this.clip=clip;this.time=0;this.speed=speed;this.apply();return true;}
 update(dt){if(!this.clip)return;this.time+=dt*this.speed;if(this.time>this.clip.duration){if(['idle','walk','crouch','crouchwalk','defuse'].includes(this.name))this.time%=this.clip.duration;else this.action('idle');}this.apply();}
 apply(){if(!this.clip)return;const c=this.clip,data=this.animation.data,n=this.bones.length,f=Math.min(c.frames-1,this.time/c.duration*(c.frames-1)),a=Math.floor(f),b=Math.min(a+1,c.frames-1),mix=f-a,p=this.p,q=this.q;for(let i=0;i<n;i++){const bone=this.bones[i],x=c.offset+(a*n+i)*7,y=c.offset+(b*n+i)*7;bone.position.fromArray(data,x).lerp(p.fromArray(data,y),mix);bone.quaternion.fromArray(data,x+3).slerp(q.fromArray(data,y+3),mix);}}
}
export function makeRig(template){
 const root=new THREE.Group(),bones=template.meta.bones.map(def=>{const bone=new THREE.Bone();bone.name=def.name;bone.position.fromArray(def.position);bone.quaternion.fromArray(def.quaternion);return bone;});
 template.meta.bones.forEach((def,i)=>(def.parent>=0?bones[def.parent]:root).add(bones[i]));
 const mesh=new THREE.SkinnedMesh(template.geometry,template.materials);mesh.frustumCulled=false;root.add(mesh);root.updateMatrixWorld(true);mesh.bind(new THREE.Skeleton(bones));
 return {root,bones,animator:new BakedAnimator(bones,template.animation)};
}
export function viewModel(templates,id,team){
 const key=id==='knife'?'v_knife_'+team.toLowerCase():'v_'+id,template=templates.get(key);if(!template)return null;
 const weapon=makeRig(template),arms=makeRig(templates.get('arms_'+team.toLowerCase())),source=new THREE.Group(),axis=new THREE.Group(),root=new THREE.Group();source.add(weapon.root,arms.root);source.rotation.x=-Math.PI/2;axis.rotation.y=Math.PI/2;axis.add(source);root.add(axis);root.scale.setScalar(.0254);root.position.y=-.075;
 const byName=new Map(weapon.bones.map(b=>[b.name.toLowerCase(),b])),merge=arms.bones.map(b=>[b,byName.get(b.name.toLowerCase())]).filter(pair=>pair[1]);
 const matrix=new THREE.Matrix4();
 // Update the camera's ancestor matrices before copying a pose. Mixing last-frame
 // weapon matrices with current-frame hand matrices causes visible hand lag.
 function sync(){weapon.root.updateWorldMatrix(true,true);arms.root.updateWorldMatrix(true,true);for(const [bone,target]of merge){if(bone.parent.name&&bone.parent.name===target.parent.name){bone.position.copy(target.position);bone.quaternion.copy(target.quaternion);bone.scale.copy(target.scale);}else{matrix.copy(bone.parent.matrixWorld).invert().multiply(target.matrixWorld);matrix.decompose(bone.position,bone.quaternion,bone.scale);}bone.updateMatrixWorld(true);}}
 return {root,animator:weapon.animator,update(dt){weapon.animator.update(dt);sync();},action(name,speed=1){const ok=weapon.animator.action(name,speed);sync();return ok;}};
}
