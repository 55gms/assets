import * as THREE from './vendor/three.module.js';

export class Breakables {
 constructor(definitions,world,mesh,onBreak=()=>{}){
  this.world=world;this.mesh=mesh;this.onBreak=onBreak;
  this.items=definitions.map(d=>({...d,remaining:d.health,broken:false,center:new THREE.Vector3().fromArray(d.bounds[0]).add(new THREE.Vector3().fromArray(d.bounds[1])).multiplyScalar(.5)}));
  this.groups=mesh.geometry.groups.map(g=>({...g}));this.hidden=new Set();
  const owners=new Map();for(const item of this.items)for(const index of item.collisionTriangles)owners.set(index,item);
  for(const tri of world.triangles)tri.breakable=owners.get(tri.sourceTriangle)||null;
 }
 damage(hit,amount){const item=hit?.breakable;if(!item||item.broken||amount<=0)return false;item.remaining-=amount;if(item.remaining>0)return true;
  item.broken=true;for(const index of item.renderTriangles)this.hidden.add(index);
  for(const tri of this.world.triangles)if(tri.breakable===item)tri.disabled=true;
  this.rebuild();this.onBreak(item);return true;
 }
 rebuild(){const geometry=this.mesh.geometry,indices=[];geometry.clearGroups();
  for(const g of this.groups){const start=indices.length;for(let v=g.start;v<g.start+g.count;v+=3)if(!this.hidden.has(v/3))indices.push(v,v+1,v+2);geometry.addGroup(start,indices.length-start,g.materialIndex);}
  geometry.setIndex(indices);
 }
 reset(){if(!this.hidden.size)return;this.hidden.clear();for(const item of this.items){item.remaining=item.health;item.broken=false;}for(const tri of this.world.triangles)if(tri.breakable)tri.disabled=false;this.rebuild();}
}
