import {Vector3} from './vendor/three.module.js';
export const BOT_DIFFICULTIES={
  easy:{reaction:[.9,1.5],scan:[.65,.9],shot:[.7,1.15],accuracy:.28,falloff:.006,minAccuracy:.07,speed:2.1,turn:4,damage:[8,15]},
  normal:{reaction:[.35,.8],scan:[.35,.6],shot:[.3,.7],accuracy:.6,falloff:.007,minAccuracy:.15,speed:3.2,turn:8,damage:[12,24]},
  hard:{reaction:[.16,.3],scan:[.15,.25],shot:[.13,.27],accuracy:.87,falloff:.005,minAccuracy:.35,speed:3.8,turn:13,damage:[20,32]}
};
export const botDifficulty=id=>BOT_DIFFICULTIES[id]||BOT_DIFFICULTIES.normal;
export const botHitChance=(profile,distance)=>Math.max(profile.minAccuracy,profile.accuracy-distance*profile.falloff);

// Cover is derived from the map and remembered sightings, never from hidden enemy positions.
export function ambushGoal(engine,bot){
  const now=engine.time||0,bomb=engine.bomb;
  const urgent=bomb.carrier===bot||(bomb.planted&&bot.team==='CT')||(!bomb.planted&&!bomb.carrier&&bomb.position&&bot.team==='T');
  bot.holdingAngle=false;
  if(engine.config.difficulty!=='hard'||urgent||bot.target){bot.ambush=null;return null;}
  if(bot.ambush){
    const a=bot.ambush;
    if(bot.pos.distanceTo(a.position)<.6){
      a.until??=now+4+Math.random()*4;
      if(now<a.until){bot.holdingAngle=true;bot.desiredYaw=Math.atan2(bot.pos.x-a.watch.x,bot.pos.z-a.watch.z);return a.position;}
      bot.ambush=null;bot.nextAmbush=now+12;return null;
    }
    if(now-a.created<12)return a.position;
    bot.ambush=null;bot.nextAmbush=now+8;return null;
  }
  if(now<(bot.nextAmbush||0))return null;
  bot.nextAmbush=now+6;
  const anchor=bot.lastSeen&&now-bot.lastSeenAt<10?bot.lastSeen:(bomb.planted?bomb.position:engine.sites?.[(bot.spawnSlot||0)%engine.sites.length]?.position);
  if(!anchor||!engine.nav?.length)return null;
  const eye=new Vector3(0,1.35,0),watch=anchor.clone().add(eye);let best=null,bestScore=-Infinity;
  for(let i=0;i<96;i++){
    const node=engine.nav[Math.floor(Math.random()*engine.nav.length)];if(node.flags&1)continue;
    const p=new Vector3(...node.position),distance=p.distanceTo(anchor),travel=p.distanceTo(bot.pos);
    if(distance<4||distance>14||travel>22||travel<1||Math.abs(p.y-anchor.y)>3)continue;
    const origin=p.clone().add(eye);if(!engine.world.clear(origin,watch))continue;
    let cover=0;for(const [x,z] of [[1,0],[-1,0],[0,1],[0,-1]])if(!engine.world.clear(origin,origin.clone().add(new Vector3(x*1.8,0,z*1.8))))cover++;
    if(!cover||cover>2)continue;
    const occupied=(engine.bots||[]).some(other=>other!==bot&&other.ambush?.position.distanceTo(p)<3);
    const score=cover*5-travel*.2-Math.abs(distance-8)*.3-(occupied?20:0);
    if(score>bestScore){bestScore=score;best={position:p,watch:anchor.clone(),created:now};}
  }
  if(best){bot.ambush=best;return best.position;}return null;
}
