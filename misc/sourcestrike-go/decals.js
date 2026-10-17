import * as T from './vendor/three.module.js';
export function projectMark(world,hit,width,height,angle=0,segments=3){
 const normal=hit.normal.clone().normalize(),right=new T.Vector3(0,1,0).cross(normal);if(right.lengthSq()<.01)right.set(1,0,0);right.normalize().applyAxisAngle(normal,angle);const up=normal.clone().cross(right),points=[],uv=[],positions=[];
 for(let y=0;y<=segments;y++)for(let x=0;x<=segments;x++){const p=hit.point.clone().addScaledVector(right,(x/segments-.5)*width).addScaledVector(up,(y/segments-.5)*height),h=world.trace(p.clone().addScaledVector(normal,.08),p.clone().addScaledVector(normal,-.08));points.push(h&&h.normal.dot(normal)>.8?h.point.clone().addScaledVector(normal,.006):null);}
 for(let y=0;y<segments;y++)for(let x=0;x<segments;x++){const a=y*(segments+1)+x,b=a+1,c=a+segments+1,d=c+1;for(const indices of [[a,b,d],[a,d,c]])if(indices.every(i=>points[i]))for(const i of indices){positions.push(...points[i].toArray());uv.push((i%(segments+1))/segments,Math.floor(i/(segments+1))/segments);}}
 if(!positions.length)return null;const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));return g;
}
export class SurfaceMarks{
 constructor(scene,world){this.scene=scene;this.world=world;this.items=[];this.materials=new Map();}
 material(kind){if(this.materials.has(kind))return this.materials.get(kind);let map;
  if(kind==='scratch'){const canvas=document.createElement('canvas');canvas.width=128;canvas.height=32;const ctx=canvas.getContext('2d');ctx.fillStyle='#808080';ctx.fillRect(0,0,128,32);for(const [y,w]of [[14,3],[20,1]]){ctx.strokeStyle='#292725';ctx.lineWidth=w;ctx.beginPath();ctx.moveTo(5,y);ctx.lineTo(112,y-5);ctx.stroke();ctx.strokeStyle='#a1a09b';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(8,y+2);ctx.lineTo(115,y-3);ctx.stroke();}map=new T.CanvasTexture(canvas);}else map=new T.TextureLoader().load(`assets/decals/${kind}.png`);
  map.colorSpace=T.NoColorSpace;const material=new T.ShaderMaterial({uniforms:{map:{value:map}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'uniform sampler2D map;varying vec2 vUv;void main(){gl_FragColor=vec4(min(texture2D(map,vUv).rgb*2.02,vec3(1.)),1.);}',transparent:true,premultipliedAlpha:true,depthWrite:false,depthTest:true,polygonOffset:true,polygonOffsetFactor:-1,blending:T.MultiplyBlending});this.materials.set(kind,material);return material;
 }
 add(kind,hit,size){if(!hit)return;const g=projectMark(this.world,hit,size,kind==='scratch'?size*.22:size,Math.random()*Math.PI,kind.startsWith('blood')?6:3);if(!g)return;const mesh=new T.Mesh(g,this.material(kind));mesh.renderOrder=1;this.scene.add(mesh);this.items.push(mesh);while(this.items.length>128){const old=this.items.shift();old.removeFromParent();old.geometry.dispose();}}
 clear(){for(const mesh of this.items){mesh.removeFromParent();mesh.geometry.dispose();}this.items=[];}
 dispose(){this.clear();for(const m of this.materials.values()){m.uniforms.map.value.dispose();m.dispose();}this.materials.clear();}
}
