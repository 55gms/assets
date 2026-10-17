import * as THREE from './vendor/three.module.js';
import {makeRig} from './motion.js';

// Preserve the weapon's bind pose. Dual Berettas has a separate root for each
// pistol; parenting its entire mesh to one hand would stack both pistols there.
export function attachOperatorWeapon(actor,template){
  const rig=makeRig(template),actorBones=new Map(actor.userData.bones.map(b=>[b.name,b]));
  actor.userData.bones[0].parent.add(rig.root);
  const anchors=template.meta.bones.flatMap((def,i)=>{
    if(def.parent>=0)return [];
    const target=actorBones.get(def.name)||actorBones.get('weapon_hand_R');
    return target?[[rig.bones[i],target]]:[];
  });
  const local=new THREE.Matrix4();
  return {
    root:rig.root,
    update(){
      actor.updateWorldMatrix(true,true);
      for(const [bone,target]of anchors){
        local.copy(bone.parent.matrixWorld).invert().multiply(target.matrixWorld);
        local.decompose(bone.position,bone.quaternion,bone.scale);
        bone.updateWorldMatrix(false,true);
      }
    },
    dispose(){rig.root.removeFromParent();rig.root.traverse(o=>o.skeleton?.dispose());}
  };
}
