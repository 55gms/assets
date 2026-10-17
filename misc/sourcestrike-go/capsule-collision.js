import * as T from './vendor/three.module.js';

const EPSILON=1e-10,CONTACT_GAP=1e-5,MAX_ADVANCES=32;
const visits=new WeakMap();
const axisStart=new T.Vector3(),axisEnd=new T.Vector3(),scratch=new T.Vector3();
const sample={axis:new T.Vector3(),point:new T.Vector3(),normal:new T.Vector3(),distance:Infinity};
const clamp01=value=>Math.max(0,Math.min(1,value));

function candidates(world,feet,delta,height,radius){
  const endX=feet.x+delta.x,endY=feet.y+delta.y,endZ=feet.z+delta.z;
  const minX=Math.min(feet.x,endX)-radius-CONTACT_GAP,maxX=Math.max(feet.x,endX)+radius+CONTACT_GAP;
  const minY=Math.min(feet.y,endY)-CONTACT_GAP,maxY=Math.max(feet.y,endY)+Math.max(height,2*radius)+CONTACT_GAP;
  const minZ=Math.min(feet.z,endZ)-radius-CONTACT_GAP,maxZ=Math.max(feet.z,endZ)+radius+CONTACT_GAP;
  const result=[],triangles=world.triangles;
  const keep=index=>{const triangle=triangles[index];if(!triangle||triangle.disabled)return;if(triangle.maxX<minX||triangle.minX>maxX||triangle.maxY<minY||triangle.minY>maxY||triangle.maxZ<minZ||triangle.minZ>maxZ)return;result.push(index);};
  if(!world.cells){for(let i=0;i<triangles.length;i++)keep(i);return result;}
  let visited=visits.get(world);if(!visited||visited.marks.length!==triangles.length){visited={marks:new Uint32Array(triangles.length),stamp:0};visits.set(world,visited);}
  visited.stamp=(visited.stamp+1)>>>0;if(!visited.stamp){visited.marks.fill(0);visited.stamp=1;}
  const size=world.size||4;
  for(let x=Math.floor(minX/size);x<=Math.floor(maxX/size);x++)for(let z=Math.floor(minZ/size);z<=Math.floor(maxZ/size);z++)for(const index of world.cells.get(x+','+z)||[]){if(visited.marks[index]===visited.stamp)continue;visited.marks[index]=visited.stamp;keep(index);}
  return result;
}

function storePair(px,py,pz,qx,qy,qz,best){
  const x=px-qx,y=py-qy,z=pz-qz,d=x*x+y*y+z*z;
  if(d<best.distance){best.distance=d;best.axis.set(px,py,pz);best.point.set(qx,qy,qz);}
}

// Closest points between the vertical capsule axis and one triangle edge.
function edgePair(a,b,c,d,best){
  const ux=b.x-a.x,uy=b.y-a.y,uz=b.z-a.z,vx=d.x-c.x,vy=d.y-c.y,vz=d.z-c.z;
  const rx=a.x-c.x,ry=a.y-c.y,rz=a.z-c.z;
  const uu=ux*ux+uy*uy+uz*uz,vv=vx*vx+vy*vy+vz*vz,uv=ux*vx+uy*vy+uz*vz;
  const ur=ux*rx+uy*ry+uz*rz,vr=vx*rx+vy*ry+vz*rz;let s=0,t=0;
  if(uu<=EPSILON&&vv<=EPSILON){storePair(a.x,a.y,a.z,c.x,c.y,c.z,best);return;}
  if(uu<=EPSILON)t=clamp01(vr/vv);
  else if(vv<=EPSILON)s=clamp01(-ur/uu);
  else{
    const denominator=uu*vv-uv*uv;
    s=denominator>EPSILON?clamp01((uv*vr-ur*vv)/denominator):0;
    t=(uv*s+vr)/vv;
    if(t<0){t=0;s=clamp01(-ur/uu);}else if(t>1){t=1;s=clamp01((uv-ur)/uu);}
  }
  storePair(a.x+s*ux,a.y+s*uy,a.z+s*uz,c.x+t*vx,c.y+t*vy,c.z+t*vz,best);
}

function distanceToTriangle(record,feet,height,radius,delta,fraction,best){
  const x=feet.x+delta.x*fraction,y=feet.y+delta.y*fraction,z=feet.z+delta.z*fraction;
  axisStart.set(x,y+radius,z);axisEnd.set(x,y+Math.max(height-radius,radius),z);best.distance=Infinity;
  const tri=record.tri;
  // A segment piercing the triangle has zero distance, even when both ends are far away.
  const normal=record.normal||tri.getNormal(scratch),denominator=normal.y*(axisEnd.y-axisStart.y);
  if(Math.abs(denominator)>EPSILON){
    const t=-(normal.x*(axisStart.x-tri.a.x)+normal.y*(axisStart.y-tri.a.y)+normal.z*(axisStart.z-tri.a.z))/denominator;
    if(t>=0&&t<=1){scratch.copy(axisStart).lerp(axisEnd,t);if(tri.containsPoint(scratch))storePair(scratch.x,scratch.y,scratch.z,scratch.x,scratch.y,scratch.z,best);}
  }
  if(best.distance!==0){
    tri.closestPointToPoint(axisStart,scratch);storePair(axisStart.x,axisStart.y,axisStart.z,scratch.x,scratch.y,scratch.z,best);
    tri.closestPointToPoint(axisEnd,scratch);storePair(axisEnd.x,axisEnd.y,axisEnd.z,scratch.x,scratch.y,scratch.z,best);
    edgePair(axisStart,axisEnd,tri.a,tri.b,best);edgePair(axisStart,axisEnd,tri.b,tri.c,best);edgePair(axisStart,axisEnd,tri.c,tri.a,best);
  }
  best.distance=Math.sqrt(Math.max(0,best.distance));
  if(best.distance>EPSILON)best.normal.copy(best.axis).sub(best.point).multiplyScalar(1/best.distance);
  else{
    best.normal.copy(record.normal||tri.getNormal(scratch)).normalize();
    const side=best.normal.x*(x-tri.a.x)+best.normal.y*(y+height*.5-tri.a.y)+best.normal.z*(z-tri.a.z);
    if(side<-EPSILON||(Math.abs(side)<=EPSILON&&best.normal.dot(delta)>0))best.normal.negate();
  }
  return best;
}

const stationary=new T.Vector3();
/** True only for actual triangle penetration; broadphase boxes are never treated as barriers. */
export function capsuleOverlap(world,feet,height,radius=.29,tolerance=.002){
  const threshold=Math.max(0,radius-tolerance);
  for(const index of candidates(world,feet,stationary,height,radius))if(distanceToTriangle(world.triangles[index],feet,height,radius,stationary,0,sample).distance<threshold)return true;
  return false;
}

/** Sweep a vertical capsule. Fraction is in [0,1]; point is on the contacted triangle. */
export function sweepCapsule(world,feet,delta,height,radius=.29){
  if(delta.lengthSq()<EPSILON*EPSILON)return null;
  let hit=null,nearest=1;
  for(const index of candidates(world,feet,delta,height,radius)){
    const record=world.triangles[index];let fraction=0;
    const planeNormal=record.normal||record.tri.getNormal(scratch),planeLength=planeNormal.length();
    if(planeLength>EPSILON&&Math.abs(planeNormal.dot(delta))/planeLength<1e-9){
      const a=record.tri.a,low=(planeNormal.x*(feet.x-a.x)+planeNormal.y*(feet.y+radius-a.y)+planeNormal.z*(feet.z-a.z))/planeLength;
      const high=low+planeNormal.y*Math.max(0,height-2*radius)/planeLength;
      // A sphere tangent to a shared floor/slope plane cannot enter either adjacent triangle.
      // This also avoids reporting an approaching internal triangle edge as a tiny step.
      if(low*high>=0&&Math.min(Math.abs(low),Math.abs(high))>=radius-1e-7)continue;
    }
    for(let iteration=0;iteration<MAX_ADVANCES;iteration++){
      distanceToTriangle(record,feet,height,radius,delta,fraction,sample);
      const closing=-sample.normal.dot(delta),gap=sample.distance-radius;
      // Distance to the convex triangle cannot decrease later if its initial derivative is nonnegative.
      if(closing<=1e-9)break;
      if(gap<=CONTACT_GAP){
        if(fraction<=nearest){nearest=fraction;hit={fraction,normal:sample.normal.clone(),point:sample.point.clone(),triangle:record};}break;
      }
      const advance=gap/closing;
      if(!Number.isFinite(advance)||fraction+advance>nearest+EPSILON)break;
      fraction=Math.min(nearest,fraction+Math.max(advance,1e-10));
    }
  }
  return hit;
}

/** Bounded depenetration for a known nearby valid placement; does not mutate feet. */
export function resolveCapsule(world,feet,height,radius=.29){
  const position=feet.clone(),contacts=[];
  for(let iteration=0;iteration<8;iteration++){
    let deepest=null,depth=.002;
    for(const index of candidates(world,position,stationary,height,radius)){
      const record=world.triangles[index];distanceToTriangle(record,position,height,radius,stationary,0,sample);
      const penetration=radius-sample.distance;
      if(penetration>depth){depth=penetration;deepest={normal:sample.normal.clone(),point:sample.point.clone(),depth,triangle:record};}
    }
    if(!deepest)break;
    position.addScaledVector(deepest.normal,depth+.0005);contacts.push(deepest);
  }
  return {position,contacts,overlapping:capsuleOverlap(world,position,height,radius)};
}
