import {phrase} from './i18n.js';
import {keyLabel,DEFAULT_BINDS} from './bindings.js';
const TEAM_ICON={CT:'assets/gui-kit/assets/theme/vgui/gfx/cs2vgui/teammenu/ct_logo.png',T:'assets/gui-kit/assets/theme/vgui/gfx/cs2vgui/teammenu/tr_logo.png'};
const MAP_NAME={cs2_mirage:'Mirage',de_dust2:'Dust II',de_inferno:'Inferno'};
const number=value=>Number.isFinite(value)?value:0;
const clock=seconds=>{seconds=Math.max(0,Math.ceil(number(seconds)));return Math.floor(seconds/60)+':'+String(seconds%60).padStart(2,'0');};
export function scoreSnapshot(engine,language='es'){
  const en=language==='en',bomb=engine.config.mode==='bomb';
  return {
    map:MAP_NAME[engine.config.map]||engine.config.map,mode:bomb?(phrase(language,'Bomba','Defuse')):phrase(language,'Deathmatch','Deathmatch'),
    phase:engine.roundEnd>0?(phrase(language,'Fin de ronda','Round over')):engine.prep>0?(phrase(language,'Preparación','Preparation')):bomb?(phrase(language,'Ronda ','Round '))+engine.round:phrase(language,'Deathmatch','Deathmatch'),
    time:clock(engine.roundEnd>0?engine.roundEnd:engine.prep>0?engine.prep:engine.bomb?.planted?engine.bomb.timer:engine.remaining),
    objective:engine.bomb?.planted?(phrase(language,'Bomba plantada','Bomb planted')):bomb?(phrase(language,'Primero en ganar 3 rondas','First to 3 rounds')):(phrase(language,'Gana quien consiga más bajas','Most eliminations wins')),
    local:phrase(language,'Partida local','Local match'),
    teams:['CT','T'].map(team=>{
      const players=engine.players.filter(p=>p.team===team).slice().sort((a,b)=>number(b.score)-number(a.score)||number(b.kills)-number(a.kills)||number(a.deaths)-number(b.deaths));
      return {team,score:bomb?number(engine.scores?.[team]):players.reduce((sum,p)=>sum+number(p.kills),0),alive:players.filter(p=>p.alive).length,total:players.length,players};
    })
  };
}

export class MatchScoreboard{
  constructor(root){this.root=root;this.rows=new Map();this.language=null;}
  build(language){
    this.language=language;this.rows.clear();const en=language==='en';
    this.root.replaceChildren();
    const make=(tag,className,text)=>{const el=document.createElement(tag);el.className=className;if(text!==undefined)el.textContent=text;return el;};this.make=make;
    const header=make('div','score-header');
    this.map=make('div','score-map');this.server=make('div','score-server');
    const center=make('div','score-match');this.phase=make('b','score-phase');this.timer=make('strong','score-clock');this.objective=make('span','score-objective');
    center.append(this.phase,this.timer,this.objective);header.append(this.map,center,this.server);
    const table=make('table','score-table');table.setAttribute('aria-label',phrase(language,'Marcador de la partida','Match scoreboard'));
    const cols=document.createElement('colgroup');for(const name of ['connection','weapon','avatar','name','money','kills','assists','deaths','mvps','points'])cols.append(make('col','score-col-'+name));
    const head=document.createElement('thead'),labels=document.createElement('tr');
    for(const [name,title]of [[phrase(language,'PING','PING'),phrase(language,'Jugadores locales y bots','Local players and bots')],['',''],['',''],[phrase(language,'JUGADOR','PLAYER'),''],[phrase(language,'DINERO','MONEY'),''],['K',phrase(language,'Bajas','Kills')],['A',phrase(language,'Asistencias','Assists')],['D',phrase(language,'Muertes','Deaths')],['MVP',phrase(language,'Mejor jugador de la ronda','Round MVPs')],[phrase(language,'PUNTOS','SCORE'),'']]){const th=make('th','',name);th.scope='col';th.title=title;labels.append(th);}
    head.append(labels);this.ctRows=document.createElement('tbody');this.ctRows.className='score-team-rows score-ct';this.tRows=document.createElement('tbody');this.tRows.className='score-team-rows score-t';
    const separators=document.createElement('tbody');separators.className='score-team-summaries';this.summaries={};
    for(const team of ['CT','T']){
      const row=document.createElement('tr'),cell=document.createElement('td');cell.colSpan=10;
      const bar=make('div','score-team-bar score-'+team.toLowerCase()),icon=make('img','score-team-emblem');icon.src=TEAM_ICON[team];icon.alt='';
      const score=make('b','score-team-total'),label=make('div','score-team-label'),name=make('strong','',team==='CT'?(phrase(language,'ANTITERRORISTAS','COUNTER-TERRORISTS')):(phrase(language,'TERRORISTAS','TERRORISTS'))),alive=make('small','');label.append(name,alive);bar.append(icon,score,label);cell.append(bar);row.append(cell);separators.append(row);this.summaries[team]={score,alive};
    }
    table.append(cols,head,this.ctRows,separators,this.tRows);
    const footer=this.footer=make('div','score-footer',phrase(language,'Mantén TAB para ver el marcador','Hold TAB to view the scoreboard'));
    this.root.append(header,table,footer);
  }
  update(engine,language='es',weaponImage){
    if(this.language!==language)this.build(language);
    const en=language==='en',data=scoreSnapshot(engine,language),make=this.make;
    this.map.textContent=data.map+' · '+data.mode;this.server.textContent=data.local+' · '+engine.players.filter(p=>!p.isHuman).length+' '+phrase(language,'bots','bots');
    this.phase.textContent=data.phase;this.timer.textContent=data.time;this.objective.textContent=data.objective;this.timer.classList.toggle('urgent',!!engine.bomb?.planted);
    this.footer.textContent=phrase(language,'Mantén TAB para ver el marcador','Hold TAB to view the scoreboard').replace('TAB',keyLabel((engine.settings?.binds||DEFAULT_BINDS).scoreboard));
    const present=new Set();
    for(const group of data.teams){
      const summary=this.summaries[group.team];summary.score.textContent=group.score;summary.alive.textContent=(phrase(language,'Jugadores vivos: ','Players alive: '))+group.alive+'/'+group.total;
      const body=group.team==='CT'?this.ctRows:this.tRows,ordered=[];
      for(const p of group.players){
        present.add(p);let entry=this.rows.get(p);
        if(!entry){
          const row=make('tr','score-player'),cells=Array.from({length:10},()=>make('td',''));row.append(...cells);
          cells[0].className='score-connection';cells[1].className='score-weapon';cells[2].className='score-avatar';cells[3].className='score-name';cells[8].className='score-mvp';
          const avatar=make('img','');avatar.src=TEAM_ICON[p.team];avatar.alt='';cells[2].append(avatar);
          const name=make('span',''),self=make('small','score-self');cells[3].append(name,self);
          entry={row,cells,name,self,weaponKey:null};this.rows.set(p,entry);
        }
        const {row,cells,name,self}=entry;row.classList.toggle('me',p.isHuman);row.classList.toggle('dead',!p.alive);row.setAttribute('aria-label',p.name+' · '+p.team+(!p.alive?(phrase(language,' · Muerto',' · Dead')):''));
        cells[0].textContent=p.isHuman?'—':'BOT';cells[0].title=phrase(language,'Partida local; sin latencia de red','Local match; no network latency');name.textContent=p.name;name.title=p.name;self.textContent=p.isHuman?(phrase(language,'TÚ','YOU')):'';
        const key=p.alive?p.weapon:'dead';if(entry.weaponKey!==key){cells[1].replaceChildren();if(p.alive){const icon=weaponImage?.(p.weapon);if(icon){const img=make('img','');img.src=icon;img.alt='';cells[1].append(img);}}else cells[1].textContent='†';entry.weaponKey=key;}
        for(const [i,value]of [[4,'$'+Math.floor(number(p.money))],[5,number(p.kills)],[6,number(p.assists)],[7,number(p.deaths)],[8,p.mvps?'★'+p.mvps:''],[9,number(p.score)]])cells[i].textContent=value;
        ordered.push(row);
      }
      // Reuse rows, including for names that contain HTML-like text.
      for(let i=0;i<ordered.length;i++)if(body.children[i]!==ordered[i])body.insertBefore(ordered[i],body.children[i]||null);
    }
    for(const [p,entry]of this.rows)if(!present.has(p)){entry.row.remove();this.rows.delete(p);}
  }
}
