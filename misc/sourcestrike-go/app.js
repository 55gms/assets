import {ACTIONS,DEFAULT_BINDS,normalizeBinds,assignBind,allowedCode,keyLabel} from './bindings.js';
import {phrase,message,UI} from './i18n.js';
import {MatchScoreboard} from './scoreboard.js';
import {kitImage} from './gui-kit.js';
import {GameEngine,WEAPONS,startOperatorPreview,loadImportedModels} from './engine.js';

const $=id=>document.getElementById(id),all=s=>[...document.querySelectorAll(s)];
const MAPS={
  cs2_mirage:{name:'Mirage',image:'assets/gui-kit/assets/menu/mirage.webp',props:'props.json',breakables:'breakables.json'},
  de_dust2:{name:'Dust II',image:'assets/dust2-preview.png'},
  de_inferno:{name:'Inferno',image:'assets/inferno-preview.png'}
};
const defaults={nickname:'RECRUIT',language:'en',languageVersion:2,sensitivity:1,volume:.6,quality:1.5,fov:80,showFps:false,mobile:false,loadout:'ak'};
let stored={};try{stored=JSON.parse(localStorage.getItem('sourcestrike-go-settings')||'{}');}catch{}
const settings={...defaults,...stored};
settings.nickname=String(settings.nickname||'RECRUIT').slice(0,18);settings.language=stored.languageVersion===2&&['es','en','ru'].includes(settings.language)?settings.language:'en';settings.languageVersion=2;settings.binds=normalizeBinds(stored.binds);
for(const [key,min,max]of [['sensitivity',.2,3],['volume',0,1],['quality',1,2],['fov',65,105]])settings[key]=Math.min(max,Math.max(min,Number.isFinite(Number(settings[key]))?Number(settings[key]):defaults[key]));
if(!['ak','m4','awp','mp9','deagle','glock'].includes(settings.loadout))settings.loadout='ak';
let config={map:'cs2_mirage',mode:'bomb',team:'T',bots:9,loadout:settings.loadout},engine,updateOperator=()=>{},toastTimer,announcementTimer,lastHud;
let bindingAction=null,suppressBindClick=false;
const settingsPage=$('page-settings'),settingsHome=settingsPage.parentNode,settingsAnchor=document.createComment('settings home');settingsPage.before(settingsAnchor);
let modelsReady,buyOperator=null,previewSerial=0,rosterKey="",inventoryKey="";
const strings={
  localReady:['LISTO PARA JUGAR EN LOCAL','READY FOR LOCAL PLAY'],yourProfile:['PERFIL LOCAL','LOCAL PROFILE'],play:['JUGAR','PLAY'],loadout:['ARSENAL','LOADOUT'],content:['CONTENIDO','CONTENT'],settings:['AJUSTES','SETTINGS'],operation:['TU PRÓXIMA PARTIDA','YOUR NEXT MATCH'],heroText:['Elige tu bando. Prepara tu arsenal.','Choose your side. Prepare your loadout.'],localBots:['PARTIDA LOCAL CON BOTS','LOCAL MATCH WITH BOTS'],trainingOperator:['EQUIPO CT / T · CONTENIDO ORIGINAL','CT / T TEAM · ORIGINAL CONTENT'],session:['CONFIGURAR PARTIDA','MATCH SETUP'],gameMode:['MODO DE JUEGO','GAME MODE'],defuse:['BOMBA','DEFUSE'],chooseSide:['ELIGE TU EQUIPO','CHOOSE YOUR SIDE'],counter:['ANTITERRORISTAS','COUNTER-TERRORISTS'],terror:['TERRORISTAS','TERRORISTS'],bots:['BOTS','BOTS'],selectedMap:['MAPA SELECCIONADO','SELECTED MAP'],start:['INICIAR PARTIDA','START MATCH'],noDownloads:['Recursos locales · Sin nuevas descargas','Local assets · No new downloads'],selectMap:['SELECCIONAR MAPA','SELECT MAP'],twoMaps:['MIRAGE · DUST II · INFERNO','MIRAGE · DUST II · INFERNO'],mirageDesc:['Calles, patios y combate a media distancia','Courtyards, alleys and mid-range encounters'],baggageDesc:['Encuentros rápidos en la terminal','Close-quarter encounters in the terminal'],yourLoadout:['TU ARSENAL','YOUR LOADOUT'],loadoutHelp:['Elige tu arma inicial para Deathmatch. En Bomba, compra durante la preparación.','Choose your starting weapon for Deathmatch. In Defuse, buy during preparation.'],weaponNote:['Armas y manos originales: desenfundar, disparar, recargar e inspeccionar (F). Cuchillos propios de T y CT.','Original weapons and hands: draw, fire, reload and inspect (F). Team-specific T and CT knives.'],installedContent:['CONTENIDO INSTALADO','INSTALLED CONTENT'],installedHelp:['Los archivos se reutilizan desde esta carpeta. No hay que importar los ZIP al entrar.','Files are reused from this folder. No need to import the ZIPs when you return.'],sourceMaps:['MAPAS ORIGINALES','ORIGINAL MAPS'],webMaps:['MAPAS PREPARADOS PARA WEB','WEB-READY MAPS'],localFiles:['RECURSOS LOCALES','LOCAL ASSETS'],installed:['INSTALADO','INSTALLED'],mapNote:['Mirage, Dust II e Inferno: mapas importados con texturas, iluminación, objetos y navegación local.','Mirage, Dust II and Inferno: imported maps with textures, lighting, props and local navigation.'],networkNote:['Esta versión juega en tu equipo. Las salas online todavía requieren un servidor multijugador.','This version runs on your computer. Online rooms still require a multiplayer server.'],checkFiles:['COMPROBAR RECURSOS WEB','CHECK WEB ASSETS'],playerName:['NOMBRE DEL JUGADOR','PLAYER NAME'],language:['IDIOMA','LANGUAGE'],sensitivity:['SENSIBILIDAD DEL RATÓN','MOUSE SENSITIVITY'],volume:['VOLUMEN','VOLUME'],quality:['CALIDAD DE IMAGEN','IMAGE QUALITY'],showFps:['Mostrar FPS','Show FPS'],touchControls:['Controles táctiles','Touch controls'],autoSaved:['Los ajustes se guardan automáticamente en este navegador.','Settings are saved automatically in this browser.'],move:['Moverse','Move'],jump:['Saltar','Jump'],crouch:['Agacharse','Crouch'],reload:['Recargar','Reload'],buy:['Comprar','Buy'],scoreboard:['Marcador','Scoreboard'],interact:['Recoger / plantar / desactivar','Pick up / plant / defuse'],weapons:['Armas','Weapons'],drop:['Soltar arma / objeto','Drop weapon / item'],pause:['Pausa','Pause'],footer:['TUS ARCHIVOS. TU PARTIDA.','YOUR FILES. YOUR MATCH.'],fullscreen:['PANTALLA COMPLETA','FULLSCREEN'],localLoading:['Cargando únicamente los recursos de esta partida.','Loading only the assets needed for this match.'],paused:['PARTIDA EN PAUSA','MATCH PAUSED'],pauseHint:['La partida local se detiene mientras estás aquí.','Your local match is paused while you are here.'],resume:['CONTINUAR','RESUME'],restart:['REINICIAR PARTIDA','RESTART MATCH'],backMenu:['VOLVER AL MENÚ','BACK TO MENU'],buyTitle:['COMPRAR EQUIPAMIENTO','BUY EQUIPMENT'],balance:['SALDO','BALANCE'],player:['JUGADOR','PLAYER'],kills:['BAJAS','KILLS'],deaths:['MUERTES','DEATHS'],points:['PUNTOS','POINTS'],matchOver:['PARTIDA FINALIZADA','MATCH COMPLETE'],playAgain:['VOLVER A JUGAR','PLAY AGAIN']
};
Object.assign(strings,UI,{backward:UI.backward,primary:UI.primary,secondary:UI.secondary,grenade:UI.grenade,bomb:UI.bomb,you:['TÚ','YOU'],deathmatch:['DEATHMATCH','Deathmatch']});
const t=(es,en,vars)=>phrase(settings.language,es,en,vars);
const tr=(key,vars)=>strings[key]?t(strings[key][0],strings[key][1],vars):message(settings.language,key,vars);
function save(){try{localStorage.setItem('sourcestrike-go-settings',JSON.stringify(settings));}catch{toast(t('El navegador no permite guardar los ajustes.','Your browser could not save settings.'));}}
function toast(message){clearTimeout(toastTimer);$('toast').textContent=message;$('toast').classList.remove('hidden');toastTimer=setTimeout(()=>$('toast').classList.add('hidden'),4500);}
function translate(){
 document.documentElement.lang=settings.language;document.title='SourceStrike GO — '+t('Partida local','Local match');
 all('[data-i18n]').forEach(el=>{if(strings[el.dataset.i18n])el.textContent=tr(el.dataset.i18n);});
 for(const [suffix,attribute] of [['aria','aria-label'],['title','title'],['alt','alt']])all('[data-i18n-'+suffix+']').forEach(el=>el.setAttribute(attribute,tr(el.getAttribute('data-i18n-'+suffix))));
 updateModeText();renderLoadout();updateMapUI();renderBindings();renderKeyHints();inventoryKey='';rosterKey='';$('bindingStatus').textContent=bindingAction?tr('waitingBind'):'';$('contentResult').textContent='';$('toast').classList.add('hidden');
 $('shield').textContent=t('◈ PROTECCIÓN DE REAPARICIÓN','◈ SPAWN PROTECTION');
 if(engine?.player){engine.updateHud();engine.drawRadar();}
}

Object.assign(strings,{difficulty:['DIFICULTAD','DIFFICULTY'],easy:['Fácil','Easy'],normal:['Normal','Normal'],hard:['Difícil','Hard']});
settings.botDifficulty=['easy','normal','hard'].includes(settings.botDifficulty)?settings.botDifficulty:'normal';
$('botDifficulty').value=settings.botDifficulty;
$('botDifficulty').addEventListener('change',()=>{settings.botDifficulty=$('botDifficulty').value;save();});
function updateModeText(){$('modeDescription').textContent=config.mode==='ffa'?t('Dos equipos sin fuego amigo. Reaparición automática. 5 minutos.','Two teams, no friendly fire. Automatic respawn. 5 minutes.'):t('Planta o desactiva la bomba. Gana 3 rondas.','Plant or defuse the bomb. Win 3 rounds.');}
function weaponSvg(id,full=false){const kit=kitImage(id,false);if(kit)return '<img class="weapon-icon kit-icon" src="'+kit+'" alt="" loading="lazy">';const icon=WEAPONS[id]?.icon||({ak:'ak47',m4:'m4a1',he:'hegrenade',smoke:'smokegrenade',flash:'flashbang'}[id])||id;return '<img class="weapon-icon" src="assets/icons/'+icon+'.png?v=2" alt="" loading="lazy">';}
function weaponCard(id,buy=false){const w=WEAPONS[id],b=document.createElement('button');b.className='weapon-card'+(!buy&&config.loadout===id?' selected':'');b.dataset.weapon=id;if(buy){const preview=()=>showBuyPreview(id);b.addEventListener('mouseenter',preview);b.addEventListener('focus',preview);}b.innerHTML=weaponSvg(id,true)+`<h3>${itemName(id)}</h3><div class="weapon-type">${weaponType(w.type)}${w.team?' / '+w.team:''}</div><span class="weapon-stat">${w.damage} ${t('DAÑO','DMG')} · ${w.mag} ${t('BALAS','ROUNDS')}</span><span class="weapon-price">${buy?'$'+w.price:config.loadout===id?'✓':''}</span>`;b.addEventListener('click',()=>{if(buy){if(engine.buy(id)){renderBuy(id);toast(t('Equipado: ','Equipped: ')+w.name);}}else{config.loadout=id;settings.loadout=id;save();renderLoadout();}});return b;}
function renderLoadout(){if(!$('loadoutGrid'))return;$('loadoutGrid').replaceChildren(...Object.keys(WEAPONS).filter(id=>id!=='knife').map(id=>weaponCard(id)));}
function renderBuy(previewId=engine.player.weapon){
 const team=engine.player.team;$('buyMenu').dataset.team=team;$('buyBalance').textContent='$'+engine.player.money;$('buyMessage').textContent=t('Equipo ','Team ')+team+' · '+t('Compra en base','Buy at spawn');showBuyPreview(previewId==='knife'?(engine.player.primary||engine.player.secondary):previewId);
 const ids=type=>Object.keys(WEAPONS).filter(id=>type.includes(WEAPONS[id].type));const categories=[[t('Equipamiento','Equipment'),['armor']],[t('Pistolas','Pistols'),ids(['PISTOL'])],[t('Subfusiles / Pesadas','Mid-tier'),ids(['SMG','SHOTGUN','HEAVY'])],[t('Rifles','Rifles'),ids(['RIFLE','SNIPER'])],[tr('grenades'),['flash','smoke','he']]];
 $('buyGrid').replaceChildren(...categories.map(([name,ids],i)=>{const column=document.createElement('section');column.className='buy-column';const heading=document.createElement('h3');heading.textContent=(i+1)+'  '+name;column.append(heading);
 for(const id of ids){const w=WEAPONS[id];if(w?.team&&w.team!==team)continue;let b;if(w)b=weaponCard(id,true);else{const items={armor:[itemName('armor'),650,'◈'],he:[itemName('he'),300,'●'],smoke:[itemName('smoke'),300,'▥'],flash:[itemName('flash'),200,'✷']},[label,price,symbol]=items[id];b=document.createElement('button');b.className='weapon-card';b.dataset.weapon=id;b.addEventListener('mouseenter',()=>showBuyPreview(id));b.addEventListener('focus',()=>showBuyPreview(id));b.innerHTML=weaponSvg(id,true)+'<h3>'+label+'</h3><span class="weapon-price">$'+price+'</span>';b.onclick=()=>{if(engine.buy(id)){renderBuy(id);toast(t('Equipado: ','Equipped: ')+label);}};}
 const price=w?.price??({armor:650,he:300,smoke:300,flash:200}[id]);b.disabled=price>engine.player.money;b.title=b.disabled?t('Dinero insuficiente','Insufficient funds'):t('Comprar ','Buy ')+(w?.name||id);column.append(b);}return column;}));
}
function hideOverlays(){closeInGameSettings();for(const id of ['pause','buyMenu','result','scoreboard','loading'])$(id).classList.add('hidden');}
function notification(event,data){
  if(event==='loading'){$('loading').classList.remove('hidden');$('loadingTitle').textContent=MAPS[config.map].name.toUpperCase();$('loadingText').textContent=data.text;$('loadingProgress').style.width=data.percent+'%';}
  if(event==='started'){$('menu').classList.add('hidden');hideOverlays();$('hud').classList.remove('hidden');$('touchControls').classList.toggle('hidden',!settings.mobile);$('killFeed').replaceChildren();$('shield').textContent=t('◈ PROTECCIÓN DE REAPARICIÓN','◈ SPAWN PROTECTION');}
  if(event==='pause'){if(!data)closeInGameSettings();$('pause').classList.toggle('hidden',!data);if(data)$('resume').focus();}
  if(event==='pauseEscape'){if(!$('pauseSettings').classList.contains('hidden'))closeInGameSettings();else engine.resume();}
  if(event==='menu'){hideOverlays();$('hud').classList.add('hidden');$('menu').classList.remove('hidden');$('scope').classList.add('hidden');$('interaction').classList.add('hidden');}
  if(event==='toast')toast(data);
  if(event==='scope'){$('scope').classList.toggle('hidden',!data);$('crosshair').classList.toggle('hidden',data);}
  if(event==='hit'){$('hitmarker').classList.remove('hidden');setTimeout(()=>$('hitmarker').classList.add('hidden'),100);}
  if(event==='announcement'){clearTimeout(announcementTimer);$('announcement').querySelector('b').textContent=data.title;$('announcement').querySelector('span').textContent=data.subtitle;if(data.duration)announcementTimer=setTimeout(()=>notification('announcement',{title:'',subtitle:''}),data.duration*1000);}
  if(event==='interaction'){$('interaction').classList.toggle('hidden',!data.text);$('interaction').querySelector('span').textContent=data.text;$('interaction').querySelector('i').style.width=Math.min(100,data.progress*100)+'%';}
  if(event==='kill'){const row=document.createElement('div'),killer=document.createElement('b'),weapon=document.createElement('span'),victim=document.createElement('b');killer.textContent=data.killer;weapon.textContent='⌁ '+t(({WORLD:'ENTORNO',GRENADE:'GRANADA',FALL:'CAÍDA',Knife:'Cuchillo'})[data.weapon]||data.weapon,data.weapon);victim.textContent=data.victim;row.append(killer,weapon,victim);$('killFeed').prepend(row);while($('killFeed').children.length>5)$('killFeed').lastChild.remove();setTimeout(()=>row.remove(),6500);}
  if(event==='scoreboard'){$('scoreboard').classList.toggle('hidden',!data);if(data)renderScore();}
  if(event==='buy'){$('buyMenu').classList.toggle('hidden',!data);if(data)renderBuy();}
  if(event==='result'){$('result').classList.remove('hidden');$('resultTitle').textContent=data.title;$('resultStats').textContent=`${data.kills} ${t('bajas','kills')} · ${data.deaths} ${t('muertes','deaths')}`;}
  if(event==='hud'){lastHud=data;renderRoster(data);$('spectatorLabel').textContent=data.observed?tr('spectating')+' '+data.observed+' · '+keyLabel(settings.binds.interact)+' '+tr('switchPlayer'):'';$('ctLabel').textContent=data.mode==='ffa'?t('TÚ','YOU'):'CT';$('tLabel').textContent=data.mode==='ffa'?t('LÍDER','LEADER'):'T';$('health').textContent=data.health;$('armor').textContent=data.armor;$('healthBar').style.width=Math.min(100,data.health)+'%';$('armorBar').style.width=Math.min(100,data.armor)+'%';$('money').textContent='$ '+data.money.toLocaleString();$('ammo').textContent=data.ammo;$('reserve').textContent=data.reserve;$('weaponName').textContent=data.weapon==='Knife'?itemName('knife'):data.weapon;$('shield').classList.toggle('hidden',data.shield<=0||!engine.player.alive);$('timer').textContent=`${Math.floor(data.remaining/60)}:${String(Math.floor(data.remaining%60)).padStart(2,'0')}`;$('timer').style.color=data.planted?'#ff927b':'';$('roundLabel').textContent=data.mode==='ffa'?'DEATHMATCH':t('RONDA ','ROUND ')+data.round;$('ctScore').textContent=data.mode==='ffa'?engine.player.kills:data.scores.CT;$('tScore').textContent=data.mode==='ffa'?Math.max(0,...engine.bots.map(b=>b.kills)):data.scores.T;$('fps').textContent=settings.showFps?data.fps+' FPS':'';$('damageVignette').style.opacity=data.damage;$('flashOverlay').style.opacity=data.flash;$('scope').classList.toggle('hidden',!engine.scoped);$('crosshair').classList.toggle('hidden',engine.scoped||!engine.player.alive);const nextInventory=data.inventory.join(',')+data.active;if(nextInventory!==inventoryKey){inventoryKey=nextInventory;$('inventory').replaceChildren(...data.inventory.map(id=>{const el=document.createElement('div');el.className=id===data.active?'active':'';el.innerHTML=weaponSvg(id);const label=document.createElement('span');label.textContent=keyLabel(settings.binds[id===data.primary?'primary':id===data.secondary?'secondary':id==='knife'?'knife':id==='c4'?'bomb':'grenade'])+'  '+itemName(id);el.append(label);return el;}));}if(!$('scoreboard').classList.contains('hidden'))renderScore();}
}
let matchScoreboard;
function renderScore(){if(!engine?.players)return;matchScoreboard??=new MatchScoreboard($('scorePanel'));matchScoreboard.update(engine,settings.language,id=>kitImage(id,false)||'assets/icons/'+(WEAPONS[id]?.icon||({he:'hegrenade',smoke:'smokegrenade',flash:'flashbang'}[id])||id)+'.png');}
async function start(){if(!engine){toast(t('WebGL no está disponible en este navegador.','WebGL is unavailable in this browser.'));return;}hideOverlays();$('startGame').disabled=true;try{await modelsReady;await engine.start({...config,bots:Number($('botCount').value),difficulty:$('botDifficulty').value});}catch(error){console.error(error);engine.exit();toast(t('No se pudo iniciar: ','Could not start: ')+error.message);}finally{$('startGame').disabled=false;}}
all('.nav-item').forEach(button=>button.addEventListener('click',()=>{all('.nav-item').forEach(b=>b.classList.toggle('active',b===button));all('.page').forEach(p=>p.classList.toggle('active',p.id==='page-'+button.dataset.page));}));
function updateMapUI(){
 const map=MAPS[config.map];
 all('[data-map]').forEach(button=>{const selected=button.dataset.map===config.map;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',String(selected));});
 $('selectedMap').textContent=map.name;
 $('mapFeatureTitle').textContent=map.name;
 $('mapFeatureImage').src=map.image;$('mapFeatureImage').alt=map.name;
 $('matchMapTitle').textContent=t('PARTIDA LOCAL','LOCAL MATCH')+' · '+map.name.toUpperCase();
 $('preparedMapCount').textContent=Object.keys(MAPS).length;
 document.querySelector('.backdrop').style.backgroundImage=`url('${map.image}')`;
 $('loading').style.backgroundImage=`linear-gradient(90deg,#07100de0,#07100d55),url('${map.image}')`;
 $('loadingTitle').textContent=map.name.toUpperCase();
}
all('[data-map]').forEach(button=>button.addEventListener('click',()=>{if(!MAPS[button.dataset.map])return;config.map=button.dataset.map;updateMapUI();}));
all('[data-mode]').forEach(button=>button.onclick=()=>{config.mode=button.dataset.mode;all('[data-mode]').forEach(b=>b.classList.toggle('selected',b===button));updateModeText();});
all('[data-team]').forEach(button=>button.onclick=()=>{config.team=button.dataset.team;all('[data-team]').forEach(b=>b.classList.toggle('selected',b===button));updateOperator(config.team);});
for(const key of ['nickname','language','sensitivity','volume','quality','fov','showFps','mobile']){const input=$(key);if(input.type==='checkbox')input.checked=Boolean(settings[key]);else input.value=settings[key];input.addEventListener('input',()=>{settings[key]=input.type==='checkbox'?input.checked:['sensitivity','volume','quality','fov'].includes(key)?Number(input.value):input.value;if(key==='nickname')settings.nickname=input.value.trim()||'RECRUIT';save();updateSettingsUI();engine?.updateSettings(settings);if(key==='language')translate();});}
function updateSettingsUI(){$('profileName').textContent=settings.nickname;$('sensitivityValue').textContent=settings.sensitivity.toFixed(1);$('volumeValue').textContent=Math.round(settings.volume*100)+'%';$('fovValue').textContent=settings.fov;}
$('startGame').onclick=start;$('resume').onclick=()=>{closeInGameSettings();engine.resume();};$('restart').onclick=start;$('playAgain').onclick=start;$('exitGame').onclick=()=>engine.exit();$('resultMenu').onclick=()=>engine.exit();$('closeBuy').onclick=()=>engine.closeBuy();
$('fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{toast(t('Usa F11 para pantalla completa.','Use F11 for fullscreen.'));}};
async function preparedMapResources(id){
 const base=`assets/${id}/`,paths=new Set(['world.json','world.bin','nav.json']);
 const response=await fetch(base+'world.json',{cache:'no-cache'});if(!response.ok)throw Error(id);
 const meta=await response.json();
 for(const file of [meta.navigation,meta.collision,meta.blend,meta.normals,meta.lightmap?.texture,meta.lightmap?.uv,...(meta.sky||[])])if(file)paths.add(file);
 const addMaterials=groups=>{for(const group of groups||[])for(const key of ['texture','texture2','detail','normal','normalMap']){const file=group.material?.[key];if(typeof file==='string')paths.add(file);}};
 addMaterials(meta.groups);
 const propsFile=typeof meta.props==='string'?meta.props:meta.props?'props.json':MAPS[id].props;
 if(propsFile){const response=await fetch(base+propsFile,{cache:'no-cache'});if(!response.ok)throw Error(id+' / '+propsFile);const props=await response.json();paths.add(propsFile);paths.add(props.binary||'props.bin');if(props.normals)paths.add(props.normals);if(props.indices)paths.add(props.indices);addMaterials(props.groups);addMaterials((props.materials||[]).map(material=>({material})));}
 if(meta.overlays){const file=typeof meta.overlays==='string'?meta.overlays:'overlays.json',response=await fetch(base+file,{cache:'no-cache'});if(!response.ok)throw Error(id+' / '+file);const overlays=await response.json();paths.add(file);paths.add(overlays.binary||'overlays.bin');if(overlays.lightmap?.uv)paths.add(overlays.lightmap.uv);if(overlays.lightmap?.texture)paths.add(overlays.lightmap.texture);addMaterials(overlays.groups);}
 const breakablesFile=typeof meta.breakables==='string'?meta.breakables:meta.breakables?'breakables.json':MAPS[id].breakables;if(breakablesFile)paths.add(breakablesFile);
 return [...paths].map(path=>base+path);
}
$('checkContent').onclick=async()=>{
 const button=$('checkContent');button.disabled=true;$('contentResult').textContent=t('Comprobando…','Checking…');
 try{let total=0;for(const id of Object.keys(MAPS)){const paths=await preparedMapResources(id);for(let offset=0;offset<paths.length;offset+=24){const results=await Promise.all(paths.slice(offset,offset+24).map(path=>fetch(path,{method:'HEAD',cache:'no-cache'})));if(results.some(result=>!result.ok))throw Error(id);}total+=paths.length;}$('contentResult').textContent=tr('checkedAssets',{maps:Object.keys(MAPS).length,count:total});}
 catch{$('contentResult').textContent=t('Faltan recursos. Consulta README.md.','Some assets are missing. See README.md.');}
 finally{button.disabled=false;}
};
$('game').addEventListener('click',()=>{if(engine?.state==='playing'&&!settings.mobile&&!document.pointerLockElement){try{engine.canvas.requestPointerLock()?.catch(()=>{});}catch{}}});
let joystickPointer=null,lookPointer=null,lastLook={x:0,y:0};
$('joystick').addEventListener('pointerdown',e=>{joystickPointer=e.pointerId;e.currentTarget.setPointerCapture(e.pointerId);});
$('joystick').addEventListener('pointermove',e=>{if(e.pointerId!==joystickPointer||!engine)return;const rect=e.currentTarget.getBoundingClientRect(),x=Math.max(-1,Math.min(1,(e.clientX-rect.left-rect.width/2)/45)),y=Math.max(-1,Math.min(1,(e.clientY-rect.top-rect.height/2)/45));engine.touchMove={x,y};e.currentTarget.querySelector('i').style.transform=`translate(${x*32}px,${y*32}px)`;});
for(const name of ['pointerup','pointercancel'])$('joystick').addEventListener(name,()=>{joystickPointer=null;if(engine)engine.touchMove={x:0,y:0};$('joystick').querySelector('i').style.transform='';});
$('game').addEventListener('pointerdown',e=>{if(settings.mobile&&e.pointerType==='touch'){lookPointer=e.pointerId;lastLook={x:e.clientX,y:e.clientY};e.currentTarget.setPointerCapture(e.pointerId);}});
$('game').addEventListener('pointermove',e=>{if(e.pointerId===lookPointer){engine.look(e.clientX-lastLook.x,e.clientY-lastLook.y);lastLook={x:e.clientX,y:e.clientY};}});
$('game').addEventListener('pointerup',()=>lookPointer=null);$('touchShoot').addEventListener('pointerdown',e=>{engine.mouseDown=true;engine.shoot();e.currentTarget.setPointerCapture(e.pointerId);});for(const event of ['pointerup','pointercancel'])$('touchShoot').addEventListener(event,()=>engine.releaseTrigger());$('touchReload').onclick=()=>engine.reload();$('touchJump').onclick=()=>{if(engine.player?.grounded){engine.player.vy=6;engine.player.grounded=false;}};$('touchPause').onclick=()=>engine.pause();
translate();updateSettingsUI();
try{engine=new GameEngine($('game'),notification,settings);updateOperator=startOperatorPreview($('operator'));}catch(error){console.error(error);$('startGame').disabled=true;toast(t('No se pudo activar WebGL. Prueba Chrome o Edge con aceleración gráfica.','Could not enable WebGL. Try Chrome or Edge with graphics acceleration.'));}
modelsReady=loadImportedModels().then(()=>{updateOperator(config.team);}).catch(error=>{console.error(error);toast(t('No se pudieron cargar los modelos originales; se usarán modelos de entrenamiento.','Original models could not load; using training models.'));});
// Read-only diagnostics for local verification; gameplay is controlled through the UI.
window.sourceStrikeStatus=()=>engine?{state:engine.state,map:engine.config?.map,mode:engine.config?.mode,health:engine.player?.health,position:engine.player?.pos.toArray(),ammo:engine.player?.ammo[engine.player?.weapon]?.mag,weapon:engine.player?.weapon,players:engine.players.length,navAreas:engine.nav.length,triangles:engine.world?.triangles.length,remaining:engine.remaining,settings:{...settings}}:{state:'unavailable'};

function renderRoster(data){const key=data.players.map(p=>p.name+p.team+p.alive+p.health).join('|');if(key===rosterKey)return;rosterKey=key;for(const team of ['CT','T']){const el=$(team==='CT'?'ctRoster':'tRoster');el.replaceChildren(...data.players.filter(p=>p.team===team).map(p=>{const slot=document.createElement('div');slot.className='roster-slot'+(!p.alive?' dead':'')+(p.me?' self':'');slot.title=p.name+' · '+p.health+' HP';const portrait=document.createElement('span');portrait.textContent=p.alive?'':'×';const name=document.createElement('small');name.textContent=p.name.slice(0,8);slot.append(portrait,name);return slot;}));}}
const settingsGroups={video:['quality','fov','showFps'],audio:['volume'],game:['nickname','language'],input:['sensitivity','mobile']};
function selectSettings(category){all('[data-settings]').forEach(b=>{const on=b.dataset.settings===category;b.classList.toggle('active',on);b.setAttribute('aria-selected',String(on));});for(const ids of Object.values(settingsGroups))for(const id of ids){const input=$(id),label=input.closest('label')||document.querySelector('label[for="'+id+'"]'),on=settingsGroups[category].includes(id);input.classList.toggle('hidden',!on);label?.classList.toggle('hidden',!on);}$('bindingsPanel').classList.toggle('hidden',category!=='input');cancelBinding();}
all('[data-settings]').forEach(b=>b.onclick=()=>selectSettings(b.dataset.settings));selectSettings('video');

const playDialog=$('kitPlayDialog');
$('homePlay').onclick=()=>{playDialog.classList.remove('hidden');$('closePlayConfig').focus();};
$('closePlayConfig').onclick=()=>{playDialog.classList.add('hidden');$('homePlay').focus();};
all('.nav-item').forEach(button=>button.addEventListener('click',()=>{playDialog.classList.add('hidden');if(button.dataset.page==='play')$('homePlay').click();}));
playDialog.addEventListener('click',event=>{if(event.target===playDialog)$('closePlayConfig').click();});
addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('menu').classList.contains('hidden'))playDialog.classList.add('hidden');});

$('money').onclick=()=>{if(engine?.state==='playing')engine.openBuy();};$('money').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();$('money').click();}};

async function showBuyPreview(id){
 const preview=$('kitBuyPreview');if(!preview)return;
 const names=Object.fromEntries(['armor','flash','smoke','he','c4'].map(id=>[id,itemName(id)]));
 const label=document.createElement('strong');label.textContent=names[id]||itemName(id);
 const detail=document.createElement('span');detail.textContent=t('Cargando modelo…','Loading model…');preview.replaceChildren(label,detail);
 const request=++previewSerial,team=engine.player.team;
 $('buyOperator').setAttribute('aria-label',label.textContent+' · '+team+' · 3D');
 const weapon=id==='armor'?(engine.player.primary||engine.player.secondary||'glock'):id==='knife'?(team==='CT'?'usp':'glock'):id;
 buyOperator??=startOperatorPreview($('buyOperator'),{mode:'buy'});
 const ready=await buyOperator(team,weapon);
 if(request!==previewSerial)return;
 detail.textContent=ready?(team==='CT'?t('ANTITERRORISTAS','COUNTER-TERRORISTS'):t('TERRORISTAS','TERRORISTS')):t('Vista 3D no disponible','3D preview unavailable');
}

// The logo returns to the home screen without opening match configuration.
document.querySelector('.classic-logo')?.addEventListener('click',event=>{
 event.preventDefault();playDialog.classList.add('hidden');
 all('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.page==='play'));
 all('.page').forEach(p=>p.classList.toggle('active',p.id==='page-play'));
});

function weaponType(type){const es={PISTOL:'PISTOLA',RIFLE:'RIFLE',SMG:'SUBFUSIL',SHOTGUN:'ESCOPETA',HEAVY:'PESADA',SNIPER:'FRANCOTIRADOR',MELEE:'CUCHILLO'};return t(es[type]||type,type);}
function itemName(id){const names={knife:['Cuchillo','Knife'],armor:['Kevlar','Kevlar'],flash:['Flashbang','Flashbang'],smoke:['Granada de humo','Smoke grenade'],he:['Granada HE','HE grenade']};return names[id]?t(...names[id]):WEAPONS[id]?.name||id.toUpperCase();}
function renderKeyHints(){all('[data-bind]').forEach(el=>el.textContent=keyLabel(settings.binds[el.dataset.bind]));$('money').title=tr('buy')+' ('+keyLabel(settings.binds.buy)+')';all('[data-i18n=weaponNote]').forEach(el=>el.textContent=tr('weaponNote').replace('(F)','('+keyLabel(settings.binds.inspect)+')'));}
function renderBindings(){
 $('bindingsList').replaceChildren(...ACTIONS.map(([id,label])=>{
  const row=document.createElement('div');row.className='binding-row';
  const text=document.createElement('label');text.textContent=tr(id);text.htmlFor='bind-'+id;
  const button=document.createElement('button');button.id='bind-'+id;button.type='button';button.className='binding-key';button.dataset.bindAction=id;
  button.classList.toggle('listening',bindingAction===id);button.setAttribute('aria-pressed',String(bindingAction===id));
  button.textContent=bindingAction===id?tr('waitingBind'):keyLabel(settings.binds[id]);button.setAttribute('aria-label',tr(id)+': '+button.textContent);
  button.onclick=()=>{bindingAction=id;renderBindings();$('bindingStatus').textContent=tr('waitingBind');$('bind-'+id).focus();};row.append(text,button);return row;
 }));
}
function cancelBinding(){if(!bindingAction)return;bindingAction=null;renderBindings();$('bindingStatus').textContent=tr('cancelled');}
function captureBinding(event,code){
 if(!bindingAction)return;event.preventDefault();event.stopImmediatePropagation();
 if(code==='Escape'){cancelBinding();return;}
 if(event.repeat)return;
 if(event.metaKey||(!['ControlLeft','ControlRight','AltLeft','AltRight','ShiftLeft','ShiftRight'].includes(code)&&(event.ctrlKey||event.altKey))||!allowedCode(code)){$('bindingStatus').textContent=tr('reservedBind');return;}
 const action=bindingAction,swapped=assignBind(settings.binds,action,code);bindingAction=null;
 engine?.keys.clear();if(engine){engine.mouseDown=false;engine.grenadeCharge=null;engine.notify('scoreboard',false);}
 save();renderBindings();renderKeyHints();inventoryKey='';$('bindingStatus').textContent=tr(typeof swapped==='string'?'bindingSwapped':'bindingSaved');$('bind-'+action).focus();
}
document.addEventListener('keydown',event=>captureBinding(event,event.code),true);
document.addEventListener('mousedown',event=>{if(bindingAction){suppressBindClick=true;captureBinding(event,'Mouse'+event.button);}},true);
document.addEventListener('click',event=>{if(suppressBindClick){suppressBindClick=false;event.preventDefault();event.stopImmediatePropagation();}},true);
$('resetBindings').onclick=()=>{bindingAction=null;settings.binds={...DEFAULT_BINDS};save();engine?.keys.clear();renderBindings();renderKeyHints();inventoryKey='';$('bindingStatus').textContent=tr('bindingsReset');};
function openInGameSettings(){if(engine?.state!=='paused')return;cancelBinding();$('pauseSettingsMount').append(settingsPage);settingsPage.classList.add('active');$('pauseSettings').classList.remove('hidden');$('pauseSettingsButton').classList.add('active');selectSettings('game');$('closePauseSettings').focus();}
function closeInGameSettings(){cancelBinding();if(settingsPage.parentNode!==settingsHome){settingsAnchor.after(settingsPage);settingsPage.classList.toggle('active',!!document.querySelector('.nav-item.active[data-page="settings"]'));}$('pauseSettings').classList.add('hidden');$('pauseSettingsButton').classList.remove('active');}
$('pauseSettingsButton').onclick=()=>{$('pauseSettings').classList.contains('hidden')?openInGameSettings():closeInGameSettings();};
$('closePauseSettings').onclick=()=>{closeInGameSettings();$('pauseSettingsButton').focus();};
