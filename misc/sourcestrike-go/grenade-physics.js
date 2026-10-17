import * as THREE from './vendor/three.module.js';

// A small spherical rigid body: fixed substeps, swept contacts, normal impulses,
// tangential friction and angular velocity. No per-frame physics allocations persist.
export function stepGrenade(body,world,dt){
 body.accumulator=(body.accumulator||0)+Math.min(dt,.1);
 const h=body.fixedStep||1/120,r=body.radius||.09;
 body.angular??=new THREE.Vector3(8,3,5);
 while(body.accumulator>=h){
  body.accumulator-=h;
  if(body.sleeping)continue;
  body.vel.y-=9.81*h;
  const next=body.pos.clone().addScaledVector(body.vel,h),hit=world.sweep(body.pos,next,r);
  if(hit){
   body.pos.copy(hit.center);const n=hit.normal.clone();if(n.dot(body.vel)>0)n.negate();
   const vn=body.vel.dot(n),normalSpeed=Math.abs(vn);body.impact=Math.max(body.impact||0,normalSpeed);
   if(vn<0)body.vel.addScaledVector(n,-vn*(1+(normalSpeed>1?.42:0)));
   const tangent=body.vel.clone().addScaledVector(n,-body.vel.dot(n));
   body.vel.addScaledVector(tangent,-Math.min(.35,.22*normalSpeed/(tangent.length()+.001)));
   const roll=n.clone().cross(tangent).multiplyScalar(1/r);body.angular.lerp(roll,.16).multiplyScalar(.93);
   if(n.y>.55&&body.vel.lengthSq()<.06){body.vel.set(0,0,0);body.angular.multiplyScalar(.8);body.sleeping=true;}
  }else body.pos.copy(next);
  const speed=body.angular.length();if(speed>1e-5)body.mesh.quaternion.premultiply(new THREE.Quaternion().setFromAxisAngle(body.angular.clone().normalize(),speed*h));
 }
}
