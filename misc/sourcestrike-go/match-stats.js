// Match totals survive rounds; damage contributions belong to a single life.
export function recordDamage(victim,attacker,damage){
  if(!attacker||attacker===victim||attacker.team===victim.team||damage<=0)return;
  victim.damageContributors??=new Map();
  victim.damageContributors.set(attacker,(victim.damageContributors.get(attacker)||0)+damage);
  attacker.roundDamage=(attacker.roundDamage||0)+damage;
}
export function recordElimination(victim,killer){
  if(killer&&killer!==victim&&killer.team!==victim.team){
    killer.score=(killer.score||0)+2;killer.roundKills=(killer.roundKills||0)+1;
    for(const [helper,damage]of victim.damageContributors||[]){
      if(helper===killer||helper.team!==killer.team||damage<40)continue;
      helper.assists=(helper.assists||0)+1;helper.score=(helper.score||0)+1;
    }
  }
  victim.damageContributors?.clear();
}
export function awardRoundMvp(players,team,bomb){
  const objective=team==='CT'?bomb?.defusedBy:bomb?.planted&&bomb.timer<=0?bomb.planter:null;
  const candidates=players.filter(p=>p.team===team&&(p.roundKills||0)>0)
    .sort((a,b)=>(b.roundKills||0)-(a.roundKills||0)||(b.roundDamage||0)-(a.roundDamage||0));
  const winner=objective?.team===team?objective:candidates[0];
  if(winner)winner.mvps=(winner.mvps||0)+1;
  return winner||null;
}
