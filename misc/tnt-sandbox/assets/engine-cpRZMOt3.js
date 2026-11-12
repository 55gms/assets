const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./main-D1DEjQFi.js","./rolldown-runtime-DK3Fl9T5.js","./weapon-model-rgMcruAN.js","./game-events-CVGS72hs.js","./blocks-Bcsl3fEt.js","./cubemesh-C2vOGvU3.js","./state-BHrB_j6I.js","./gamerules-BK4wMfs2.js","./world.proto-DWOiO6m7.js","./reactive-BUzY1auv.js","./dirty-CCadsGOM.js","./train.layout-uDLqut4n.js","./trades-C9Y2ky99.js","./campaign-CRUd2EzK.js","./preload-helper-ChxXz101.js","./mapkit-BrsQFakX.js","./structures-C_fHCZ1I.js","./poki-Qmq7_zbG.js","./index-Dcloz3bG.js","./loader-drawing-46T_n9YF.js","./index-CHIjM83-.css","./faces-sqQKRgLA.js"])))=>i.map(i=>d[i]);
import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{S as t,n,r,w as i}from"./game-events-CVGS72hs.js";import{$ as a,A as o,B as s,Ct as c,Dt as l,Et as u,F as d,Ft as f,I as p,It as m,J as h,L as g,M as _,N as v,O as y,P as b,Q as x,Rt as S,St as ee,U as C,V as te,W as w,X as T,Y as ne,Z as E,b as re,c as ie,ct as ae,dt as oe,et as se,f as ce,ft as le,gt as ue,it as de,j as fe,k as pe,l as me,lt as he,n as ge,nt as _e,o as ve,p as ye,pt as be,q as xe,rt as Se,s as Ce,st as we,tt as Te,ut as Ee,v as De,wt as Oe,x as ke,xt as Ae,y as je,yt as Me}from"./state-BHrB_j6I.js";import{t as Ne}from"./preload-helper-ChxXz101.js";import{A as D,D as Pe,E as Fe,F as O,I as Ie,M as Le,N as k,O as Re,R as A,T as ze,_ as j,a as Be,b as M,d as Ve,f as N,k as He,n as P,p as Ue,r as We,t as Ge,v as Ke,w as F,x as qe,y as Je,z as Ye}from"./weapon-model-rgMcruAN.js";import{_ as I,a as L,c as Xe,f as Ze,g as R,h as Qe,l as $e,m as et,n as tt,r as nt,s as rt,t as it,u as at,v as z,x as B,y as ot}from"./blocks-Bcsl3fEt.js";import{A as st,B as ct,E as lt,I as V,L as H,O as U,R as ut,T as dt,V as ft,_ as pt,b as W,c as mt,d as ht,g as gt,h as _t,j as G,l as vt,n as yt,o as bt,p as xt,s as St,t as Ct,u as wt,x as Tt,z as Et}from"./world.proto-DWOiO6m7.js";import{_ as Dt,c as Ot,d as kt,f as K,g as At,l as jt,m as Mt,n as Nt,o as Pt,s as Ft,v as It}from"./campaign-CRUd2EzK.js";import{a as Lt,c as Rt,d as zt,f as Bt,i as Vt,o as Ht,r as Ut,s as Wt,u as Gt}from"./structures-C_fHCZ1I.js";import{m as Kt}from"./mapkit-BrsQFakX.js";import{a as qt,c as Jt,i as q,l as J,n as Y,o as Yt,r as Xt,t as Zt,u as X}from"./cubemesh-C2vOGvU3.js";import{A as Qt,D as $t,E as en,I as tn,L as Z,N as nn,P as rn,R as an,_ as on,a as sn,d as cn,f as ln,i as un,j as dn,k as fn,l as pn,m as mn,n as hn,s as gn,u as _n,v as vn,x as yn,y as bn,z as xn}from"./trades-C9Y2ky99.js";import{a as Sn,c as Cn,i as wn,l as Tn,n as En,o as Dn,r as On,s as kn,t as An}from"./debris.proto-X5Ywx6n-.js";import{t as jn}from"./recovery-Cw2NYmfO.js";import{a as Mn,c as Nn,f as Pn,g as Fn,i as Q,l as In,m as Ln,o as Rn,r as zn,s as Bn,t as Vn,u as Hn,v as Un}from"./jackoh-1WNey0Vl.js";import{A as Wn,C as Gn,D as Kn,N as qn,O as Jn,P as Yn,S as Xn,_ as Zn,d as Qn,f as $n,g as er,k as tr,l as nr,m as rr,n as ir,p as ar,r as or,t as sr,u as cr,v as lr,x as ur,y as dr}from"./poki-Qmq7_zbG.js";import{n as fr,t as pr}from"./recovery-model-5Rxhyvb1.js";function mr(e,t,n){let r=null,i=null;return{enter(){return r||=Ne(async()=>{let{initializeVerity:e}=await import(`./main-D1DEjQFi.js`);return{initializeVerity:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url).then(({initializeVerity:r})=>r(e,t,n)).then(e=>{i=e}).catch(e=>{r=null,console.error(`Verity failed to load`,e)})},update(e){i?.update(e)},beforeProjectiles(e){i?.beforeProjectiles(e)},interceptC4(e){return p.value===`sandbox`&&!!i?.interceptC4(e)},spawn(t,n,r){return p.value===`sandbox`&&e.verity.spawn(t,n,r)},blockPlaced(t,n,r,i){p.value===`sandbox`&&[`tnt`,`mega`,`nuke`,`cluster`].includes(t)&&e.verity.tntPlaced(n,r,i)}}}var hr=-1,gr=class extends H{constructor(e){super({ids:!1}),this.sim=e,this.tracksDirty=!1,this.quiet=!1}setByIndex(e,t,n){return super.setByIndex(e,t,n)?(this.quiet||this.sim.recordSet(e,t),!0):!1}},_r=class{constructor(){this.world=new gr(this),this.worker=new Worker(new URL(`world.worker-BlOPJoxM.js`,import.meta.url).href,{type:`module`}),this.worker.onmessage=e=>this.receive(e.data),this.ctrl=new ArrayBuffer(W()),this.u32=new Uint32Array(this.ctrl),this.f32=new Float32Array(this.ctrl),this.records=new ArrayBuffer(lt(bt)),this.recU32=new Uint32Array(this.records),this.home=!0,this.idleWaiters=[],this.stage=new Uint32Array(Ct),this.stageF=new Float32Array(this.stage.buffer),this.stageN=0,this.journal=[],this.batch=1,this.epoch=1,this.staged=0,this.inFlight=0,this.workerMore=!1,this.mapIdx=Ft,this.seed=1,this.tags={},this.aimCell=hr,this.aimSent=hr,this.hoverCell=hr,this.hoverId=0,this.onDamage=null,this.onRecords=null,this.onChain=null,this.onDestroyed=null,this.onSpongeAbsorbed=null,this.onDelta=null,this.relays=[],this.local=new Uint32Array(8192),this.localN=0,this.loading=!1,this.loaded=Promise.resolve(),this.resolveLoaded=null,this.meshed=new Promise(e=>{this.resolveMeshed=e})}sendGameRules(e){this.worker.postMessage({gameRules:e})}init(){this.worker.postMessage({tiles:nt})}addRelay(e){this.relays.push(e)}room(e){if(this.stageN+e<=this.stage.length)return;let t=this.stage.length;for(;t<this.stageN+e;)t*=2;let n=new Uint32Array(t);n.set(this.stage.subarray(0,this.stageN)),this.stage=n,this.stageF=new Float32Array(n.buffer)}recordSet(e,t){this.room(3),this.stage[this.stageN]=1,this.stage[this.stageN+1]=e,this.stage[this.stageN+2]=t,this.stageN+=3,this.journal.push(this.batch,e,t),this.pushLocal(e,dt(t,0))}pushLocal(e,t){if((this.localN+1)*2>this.local.length){let e=new Uint32Array(this.local.length*2);e.set(this.local),this.local=e}let n=this.localN*2;this.local[n]=e,this.local[n+1]=t,this.localN++}ignite(e,t,n=!1,r=!1){this.room(3),this.stage[this.stageN]=6,this.stage[this.stageN+1]=e,this.stage[this.stageN+2]=!!t|(n?2:0)|(r?4:0),this.stageN+=3}closeHole(e,t,n){this.room(4);let r=this.stageN;this.stage[r]=11,this.stageF[r+1]=e,this.stageF[r+2]=t,this.stageF[r+3]=n,this.stageN+=4}erase(e,t=!1){this.room(3),this.stage[this.stageN]=7,this.stage[this.stageN+1]=e,this.stage[this.stageN+2]=+!!t,this.stageN+=3}aim(e){e!==this.aimSent&&(this.aimCell=e)}idAt(e){return this.hoverCell===e?this.hoverId:-1}explode(e,t,n,r,i,a=0){this.room(6),this.stage[this.stageN]=2,this.stageF[this.stageN+1]=e,this.stageF[this.stageN+2]=t,this.stageF[this.stageN+3]=n,this.stageF[this.stageN+4]=r,this.stage[this.stageN+5]=+!!i|a,this.stageN+=6,this.staged++}restore(e,t,n,r){this.room(5);let i=this.stageN;this.stage[i]=12,this.stageF.set([e,t,n,r],i+1),this.stageN+=5,this.staged++}sponge(e,t,n,r,i){this.room(6);let a=this.stageN;this.stage[a]=10,this.stage[a+1]=e,this.stageF[a+2]=t,this.stageF[a+3]=n,this.stageF[a+4]=r,this.stageF[a+5]=i,this.stageN+=6}stamp(e,t,n,r,i=0){let a=Ut[e];if(a){if(this.loading)Wt(this.world,a,t,n,r,i);else{this.world.quiet=!0,Wt(this.world,a,t,n,r,i),this.world.quiet=!1;for(let a=0;a<this.relays.length;a++)this.relays[a].stamp(e,t,n,r,i);this.room(6),this.stage[this.stageN]=3,this.stage[this.stageN+1]=Vt[e],this.stageF[this.stageN+2]=t,this.stage[this.stageN+3]=n,this.stageF[this.stageN+4]=r,this.stage[this.stageN+5]=i&3,this.stageN+=6}}}generate(e=Ft,t=1){let n=Ot[e]||Ot[0];return this.beginGenerate(e,t,n.w,n.d,n.h,n.ground),this.stage[this.stageN++]=4,this.stage[this.stageN++]=e,this.stage[this.stageN++]=t,this.growRecords(K(e)),this.loaded}generateMission(e,t,n=1){let r=t?t.width:100,i=t?t.depth:100;return this.beginGenerate(-1,n,r,i,t?t.height:48,t&&t.groundY!==void 0?t.groundY:8),this.stage[this.stageN++]=9,this.stage[this.stageN++]=e,this.stage[this.stageN++]=n,this.growRecords(Tt(Math.max(bt,r*i*3),Math.ceil(r/64)*Math.ceil(i/64))),this.loaded}beginGenerate(e,t,n,r,i,a){this.epoch++,this.journal.length=0,this.staged=0,this.inFlight=0,this.stageN=0,this.aimCell=hr,this.aimSent=hr,this.hoverCell=hr,this.mapIdx=e,this.seed=t,this.loading=!0,this.loaded=new Promise(e=>{this.resolveLoaded=e}),this.meshed=new Promise(e=>{this.resolveMeshed=e}),this.tags={},this.world.resize(n,r,i,a),this.world.clear(),this.localN=0;for(let e=0;e<this.relays.length;e++)this.relays[e].dropWorld();this.room(3)}growRecords(e){if(!this.home)return;let t=lt(e);this.records.byteLength>=t||(this.records=new ArrayBuffer(t),this.recU32=new Uint32Array(this.records))}abort(){this.staged=0,this.inFlight=0,this.room(1),this.stage[this.stageN++]=5}get pending(){return this.staged+this.inFlight}flush(){if(this.localN>0){for(let e=0;e<this.relays.length;e++)this.relays[e].cells(this.local,this.localN);this.localN=0}if(!this.home||this.stageN===0&&this.inFlight===0&&!this.workerMore&&this.aimCell===hr)return;let e=this.splitAt(Ct-2);this.u32.set(this.stage.subarray(0,e),16);let t=e;this.aimCell!==hr&&(this.u32[16+t]=8,this.u32[16+t+1]=this.aimCell,t+=2,this.aimSent=this.aimCell,this.aimCell=hr),this.u32[0]=this.epoch,this.u32[1]=this.batch,this.u32[3]=t;let n=this.stageN-e;n>0&&(this.retagDeferred(e,this.stageN,this.batch+1),this.stage.copyWithin(0,e,this.stageN)),this.stageN=n,this.batch++,this.inFlight+=this.staged,this.staged=0,this.home=!1,this.worker.postMessage({ctrl:this.ctrl,records:this.records},[this.ctrl,this.records])}splitAt(e){if(this.stageN<=e)return this.stageN;let t=0;for(;t<this.stageN;){let n=yt[this.stage[t]];if(!n||t+n>e)break;t+=n}return t}retagDeferred(e,t,n){let r=0,i=e;for(;i<t;)this.stage[i]===1&&r++,i+=yt[this.stage[i]]||1;for(let e=this.journal.length-r*3;e<this.journal.length;e+=3)this.journal[e]=n}receive(e){if(e.snapshot!==void 0){this.applySnapshot(e.snapshot,e.spots,e.wet,e.tags);return}this.ctrl=e.ctrl,this.u32=new Uint32Array(this.ctrl),this.f32=new Float32Array(this.ctrl),e.records!==this.records&&(this.records=e.records,this.recU32=new Uint32Array(this.records)),this.home=!0;let t=this.u32,n=this.f32,r=t[2];if(this.workerMore=t[10]!==0,t[0]===this.epoch){this.inFlight=t[9],e.restore?.length&&this.onRestore?.(e.restore);let i=e.spongeAbsorbed||[];for(let e=0;e<i.length;e+=2)this.onSpongeAbsorbed?.(i[e],i[e+1]);let a=t[11]|0;a!==hr&&(this.hoverCell=a,this.hoverId=t[12]),t[4]>0&&(this.aimSent=hr),this.applyDelta(t),this.replayJournal(r),this.emitChain(n,t[5]),t[8]>0&&this.onDestroyed?.(t[8]),t[7]&&(this.onRecords?.(this.recU32,t[6],t[13],t.subarray(mt,wt),!1,t.subarray(wt,ht),t.subarray(ht,ht+xt)),this.resolveMeshed?.(),this.resolveMeshed=null)}this.dropAcked(r);for(let e of this.idleWaiters.splice(0))e()}async restoreRecords(){this.home||await new Promise(e=>this.idleWaiters.push(e));let e=this.u32;e[0]===this.epoch&&this.onRecords?.(this.recU32,e[6],e[13],e.subarray(mt,wt),!0,e.subarray(wt,ht),e.subarray(ht,ht+xt))}applySnapshot(e,t,n,r){let i=new Uint32Array(e);if(i[0]!==this.epoch)return;this.tags=r||{},this.world.applyOccupancy(e),this.replayJournal(i[1]),this.loading=!1;let a=this.relays;for(let r=0;r<a.length;r++)a[r].snapshot(r===a.length-1?e:e.slice(0),t,n);this.resolveLoaded?.(),this.resolveLoaded=null}applyDelta(e){let t=e[4];if(t===0)return;let n=this.world,r=this.onDamage;n.quiet=!0;let i=0;for(let a=0;a<t;a++){let t=vt+a*2,o=e[t],s=e[t+1];n.setByIndex(o,_t(s),gt(s)),pt(s)?(a>i&&this.relayDamage(e,i,a-i),i=a+1,this.pushLocal(o,s)):r&&r(Et(o),ct(o),ft(o))}t>i&&this.relayDamage(e,i,t-i),n.quiet=!1,this.onDelta?.()}relayDamage(e,t,n){let r=this.relays;if(r.length===0)return;let i=vt+t*2,a=e.subarray(i,i+n*2);for(let e=0;e<r.length;e++)r[e].damage(a,n)}dropAcked(e){let t=this.journal,n=0;for(;n<t.length&&t[n]<=e;)n+=3;n>0&&t.splice(0,n)}replayJournal(e){let t=this.journal;if(t.length===0)return;let n=this.world;n.quiet=!0;for(let r=0;r<t.length;r+=3)t[r]<=e||n.setByIndex(t[r+1],t[r+2]);n.quiet=!1}emitChain(e,t){if(this.onChain)for(let n=0;n<t;n++){let t=St+n*9;this.onChain(e[t+3]|0,e[t],e[t+1],e[t+2],{fuse:e[t+4],vx:e[t+5],vy:e[t+6],vz:e[t+7],playerLit:e[t+8]===1})}}},vr=`#version 300 es
in vec2 position;
out vec2 vUv;
void main() { vUv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }
`,yr=`#version 300 es
precision highp float;
in vec2 vUv;
uniform float uAmount;
uniform float uTime;
out vec4 fragColor;
void main() {
    float edge = smoothstep(0.22, 0.72, length(vUv - 0.5));
    float ripple = sin(vUv.y * 28.0 + sin(vUv.x * 12.0 + uTime * 0.7) + uTime);
    fragColor = vec4(0.015, 0.10, 0.15, uAmount * (edge * 0.26 + 0.008 * (ripple + 1.0)));
}
`;function br(e,t,n){let r=Math.floor(n.x),i=Math.floor(n.y),a=Math.floor(n.z);if(!e.inBounds(r,i,a)||!e.waterByIndex(ut(r,i,a)))return 0;if(e.inBounds(r,i+1,a)&&e.waterByIndex(ut(r,i+1,a)))return 1;let o=i+t.waterHeight(n.x,i,n.z);return Math.max(0,Math.min(1,(o-n.y)/.08))}var xr=class{constructor(e,t,n,r){this.amount=0,this.lastTime=performance.now();let i=e.gl,a={uAmount:{value:0},uTime:{value:0}},o=new A(i,{geometry:new X(i,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])}}),program:new Ie(i,{vertex:vr,fragment:yr,uniforms:a,transparent:!0,depthTest:!1,depthWrite:!1,cullFace:!1}),frustumCulled:!1});e.on(`cull`,()=>{let o=e.viewCamera,s=o.position,c=br(t,n,s),l=performance.now(),u=Math.min(.1,(l-this.lastTime)/1e3);this.lastTime=l,this.amount+=(c-this.amount)*(1-Math.exp(-16*u)),this.amount<.001&&(this.amount=0);let d=Le.uWaterFog.value;d[0]=this.amount,d[2]=o.near,d[3]=o.far,a.uAmount.value=this.amount,a.uTime.value=l/1e3,i.clearColor(...k(r),1)}),e.on(`frameend`,()=>{this.amount>0&&o.draw()})}},Sr=3.8,Cr=-20*Math.log(.8);function wr(e,t,n,r=n.x,i=n.y,a=n.z,o=.4){let s=n.halfW-.001,c=i+o,l=i+n.height-o;for(let n=Math.floor(c);n<=Math.floor(l-.001);n++)for(let i=Math.floor(a-s);i<=Math.floor(a+s);i++)for(let o=Math.floor(r-s);o<=Math.floor(r+s);o++){if(!e.inBounds(o,n,i)||!e.waterByIndex(ut(o,n,i)))continue;if(e.inBounds(o,n+1,i)&&e.waterByIndex(ut(o,n+1,i)))return!0;let l=(Math.max(r-s,o)+Math.min(r+s,o+1))*.5,u=(Math.max(a-s,i)+Math.min(a+s,i+1))*.5;if(c<n+t.waterHeight(l,n,u))return!0}return!1}function Tr(e,t,n,r,i){let a=t.halfW,o=Math.floor(n-a),s=Math.floor(n+a),c=Math.floor(r),l=Math.floor(r+t.height-.01),u=Math.floor(i-a),d=Math.floor(i+a);for(let t=c;t<=l;t++)for(let n=u;n<=d;n++)for(let r=o;r<=s;r++)if(e.solidAt(r,t,n))return!0;return!1}function Er(e,t,n,r,i,a,o,s,c){n.inWater=!n.fly&&!n.noclip&&wr(e,t,n);let l=n.vx,u=n.vy,d=n.vz;if(n.fly){let e=s?26:15,t=0;a&&(t+=1),o&&--t;let l=1-Math.exp(-9*c);n.vx+=(r*e-n.vx)*l,n.vy+=(t*e-n.vy)*l,n.vz+=(i*e-n.vz)*l}else if(n.inWater){let e=1-Math.exp(-Cr*c);n.vx+=(r*Sr-n.vx)*e,n.vy+=((a?2:-2)-n.vy)*e,n.vz+=(i*Sr-n.vz)*e}else{let e=s?7.4:4.6,t=1-Math.exp(-(n.onGround?13:4.5)*c);n.vx+=(r*e-n.vx)*t,n.vz+=(i*e-n.vz)*t,a&&n.onGround&&(n.vy=8.2,n.onGround=!1),n.vy=Math.max(-50,n.vy-22*c)}if(n.noclip){n.x+=n.vx*c,n.y+=n.vy*c,n.z+=n.vz*c,n.onGround=!1;return}let f=n.inWater?r*Sr*c+(l-n.vx)/Cr:n.vx*c,p=n.inWater?(a?2:-2)*c+(u-n.vy)/Cr:n.vy*c,m=n.inWater?i*Sr*c+(d-n.vz)/Cr:n.vz*c,h=n.y,g=n.x+f,_=n.z+m,v=!1;Tr(e,n,g,n.y,n.z)?(n.vx=0,v=!0):n.x=g,Tr(e,n,n.x,n.y,_)?(n.vz=0,v=!0):n.z=_;let y=n.y+p;if(!Tr(e,n,n.x,y,n.z))n.y=y;else{if(n.vy<0){let t=Math.floor(y)+1;Tr(e,n,n.x,t,n.z)||(n.y=t)}n.vy=0}n.onGround=!n.fly&&n.vy<=0&&Tr(e,n,n.x,n.y-.02,n.z),n.inWater&&v&&(r!==0||i!==0)&&!Tr(e,n,g,h+.6,_)&&!wr(e,t,n,g,h+.6,_,0)&&(n.vy=6,n.onGround=!1),n.x=Math.max(n.halfW+.01,Math.min(V-n.halfW-.01,n.x)),n.z=Math.max(n.halfW+.01,Math.min(U-n.halfW-.01,n.z))}var Dr=.5/16,Or=He([1,.78,.25],2),kr=F+`
in vec3 position;
in vec3 normal;
in vec2 uv;         // face-local 0..1
in vec4 iPrev1;     // xyz: position, w: scale        (previous snapshot)
in vec4 iPrev2;     // xyz: tumble eulers, w: tile + gen * 256
in vec4 iCur1;      // xyz: position, w: scale        (current snapshot)
in vec4 iCur2;      // xyz: tumble eulers, w: tile + gen * 256

uniform float uAlpha;
uniform float uTime;

out vec2 vUv;
out vec3 vNormal;
out vec3 vWorld;

void main() {
    float curKey = floor(iCur2.w / 256.0);
    float prevKey = floor(iPrev2.w / 256.0);
    float a = (curKey == prevKey) ? uAlpha : 1.0;

    float scale;
    vec3 wpos0;
    vec3 rot;
    if (iCur1.w < 0.0) {
        // Kinematic recovery must keep moving with the camera even if the
        // worker has not returned another snapshot. Birth and destination are
        // immutable; a new snapshot cannot restart or rewind the flight.
        float t = clamp((uTime - (-iCur1.w - 1.0)) / ${jn}, 0.0, 1.0);
        if (t >= 1.0) { gl_Position = vec4(0.0); return; }
        float ease = 1.0 - pow(1.0 - t, 3.0);
        float swirl = sin(t * 3.14159265359) * (1.0 - t) * 0.22;
        vec3 delta = iCur2.xyz - iCur1.xyz;
        wpos0 = iCur1.xyz + delta * ease + vec3(-delta.z, 0.0, delta.x) * swirl;
        scale = 0.12 + 0.88 * ease;
        rot = fract(iCur2.xyz * vec3(0.754877, 0.569840, 0.438579) + curKey * 0.318310)
            * 6.28318530718 * (1.0 - ease);
    } else {
        scale = mix(iPrev1.w, iCur1.w, a);
        wpos0 = mix(iPrev1.xyz, iCur1.xyz, a);
        rot = mix(iPrev2.xyz, iCur2.xyz, a);
    }
    if (scale <= 0.0) {          // dead slot
        gl_Position = vec4(0.0); // degenerate: never rasterizes
        return;
    }

    vec3 sn = sin(rot);
    vec3 cs = cos(rot);
    mat3 rx = mat3(1.0, 0.0, 0.0,  0.0, cs.x, sn.x,  0.0, -sn.x, cs.x);
    mat3 ry = mat3(cs.y, 0.0, -sn.y,  0.0, 1.0, 0.0,  sn.y, 0.0, cs.y);
    mat3 rz = mat3(cs.z, sn.z, 0.0,  -sn.z, cs.z, 0.0,  0.0, 0.0, 1.0);
    mat3 rm = rz * ry * rx;

    int tile = int(iCur2.w - curKey * 256.0); // never interpolated
    vec2 f = clamp(uv, vec2(${Dr}), vec2(${1-Dr}));
    vUv = (vec2(float(tile % 8), float(tile / 8)) + f)
        / vec2(8.0, ${Qe}.0);

    vec3 wpos = rm * (position * scale) + wpos0;
    vNormal = rm * normal;
    vWorld = wpos;
    gl_Position = projectionMatrix * viewMatrix * vec4(wpos, 1.0);
}
`,Ar=j+M+`
in vec2 vUv;
in vec3 vNormal;
in vec3 vWorld;

uniform sampler2D uAtlas;
out vec4 fragColor;

void main() {
    vec4 t = texture(uAtlas, vUv);
    if (t.a < 0.3) discard;
    fragColor = colorGrade(vec4(gammaOut(t.rgb * diffuseLightFree(vNormal, vWorld)), 1.0));
}
`,jr=`#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 vUv;
uniform sampler2D uAtlas;
out vec4 fragColor;
void main() {
    if (texture(uAtlas, vUv).a < 0.3) discard;
    fragColor = vec4(1.0);
}
`,Mr=j+`
in vec2 vUv;
in vec3 vNormal;
in vec3 vWorld;

uniform vec3 uEmissive;
out vec4 fragColor;

void main() {
    fragColor = colorGrade(vec4(pow(uEmissive, vec3(0.4545454545)), 1.0));
}
`,Nr=class{constructor(e,t,n,r){let i=e.gl;this.capacity=r,this.geometry=Y(i),this.prev=new Je(i,this.geometry,[`iPrev1`,`iPrev2`],8,r,!0),this.cur=new Je(i,this.geometry,[`iCur1`,`iCur2`],8,r,!0),this.program=t,this.mesh=new A(i,{geometry:this.geometry,program:t,frustumCulled:!1}),this.mesh.visible=!1,this.mesh.castShadow=!1,this.mesh.setParent(n)}upload(e,t,n){this.prev.uploadFrom(e,n),this.cur.uploadFrom(t,n),this.geometry.instancedCount=n,this.mesh.visible=n>0,this.mesh.castShadow&&this.mesh.depthProgram&&(this.mesh.shadowDirty=!0)}},Pr=class{constructor(e,t){this.gfx=e,this.root=new Ye,this.root.setParent(e.scene);let n=e.makeProgram({vertex:kr,fragment:Ar,uniforms:{uAtlas:{value:t},uAlpha:{value:0},uTime:{value:0}}}),r=e.makeProgram({vertex:kr,fragment:Mr,lit:!1,uniforms:{uEmissive:{value:Or},uAlpha:{value:0},uTime:{value:0}}});this.main=new Nr(e,n,this.root,wn),this.sparks=new Nr(e,r,this.root,Sn),this.past=new Float32Array(Tn()/4),this.present=new Float32Array(Tn()/4),this.future=new Float32Array(Tn()/4),this.futureReady=!0,this.clock=0,this.mainN=0,this.sparkN=0,this.worker=new Worker(new URL(`debris.worker-iLA9dvWE.js`,import.meta.url).href,{type:`module`}),this.worker.onmessage=e=>{this.future=new Float32Array(e.data.buffer),this.futureReady=!0},this.stage=new Uint32Array(En),this.stageF=new Float32Array(this.stage.buffer),this.stageN=0,e.renderer.addRestoreHandler(()=>this.uploadSnapshots())}sendGameRules(e){this.worker.postMessage({gameRules:e})}init(){this.worker.postMessage({tiles:nt,names:R,timeOrigin:performance.timeOrigin})}room(e){if(this.stageN+e<=this.stage.length)return!0;let t=this.stage.length;for(;t<this.stageN+e;)t*=2;let n=new Uint32Array(t);return n.set(this.stage.subarray(0,this.stageN)),this.stage=n,this.stageF=new Float32Array(n.buffer),!0}explode(e,t,n,r,i,a=!1,o=!1){this.room(6),this.stage[this.stageN]=1,this.stageF[this.stageN+1]=e,this.stageF[this.stageN+2]=t,this.stageF[this.stageN+3]=n,this.stageF[this.stageN+4]=r,this.stage[this.stageN+5]=!!i|(a?4:0)|(o?8:0),this.stageN+=6}hole(e,t,n,r){this.room(5),this.stage[this.stageN]=10,this.stageF[this.stageN+1]=e,this.stageF[this.stageN+2]=t,this.stageF[this.stageN+3]=n,this.stageF[this.stageN+4]=r,this.stageN+=5}restore(e){for(let t=0;t<e.length;t+=7){this.room(On[13]);let n=this.stageN;this.stage[n]=13,this.stageF[n+1]=e[t],this.stageF[n+2]=e[t+1],this.stageF[n+3]=e[t+2],this.stage[n+4]=e[t+3],this.stage[n+5]=e[t+4],this.stageF[n+6]=e[t+5],this.stageF[n+7]=(e[t+6]-performance.timeOrigin)/1e3,this.stageN+=On[13]}}closeHole(e,t,n){this.room(4);let r=this.stageN;this.stage[r]=12,this.stageF[r+1]=e,this.stageF[r+2]=t,this.stageF[r+3]=n,this.stageN+=4}sponge(e,t,n,r,i,a){this.room(7);let o=this.stageN;this.stage[o]=11,this.stage[o+1]=e,this.stageF[o+2]=t,this.stageF[o+3]=n,this.stageF[o+4]=r,this.stageF[o+5]=i,this.stageF[o+6]=a,this.stageN+=7}damage(e,t){this.cellRuns(2,e,t)}cells(e,t){this.cellRuns(3,e,t)}cellRuns(e,t,n){let r=0;for(;r<n;){let i=Math.min(An,n-r),a=i*2;this.room(2+a),this.stage[this.stageN]=e,this.stage[this.stageN+1]=i,this.stage.set(t.subarray(r*2,(r+i)*2),this.stageN+2),this.stageN+=2+a,r+=i}}stamp(e,t,n,r,i=0){let a=Vt[e];a!==void 0&&(this.room(6),this.stage[this.stageN]=4,this.stage[this.stageN+1]=a,this.stageF[this.stageN+2]=t,this.stage[this.stageN+3]=n,this.stageF[this.stageN+4]=r,this.stage[this.stageN+5]=i&3,this.stageN+=6)}snapshot(e){this.worker.postMessage({snapshot:e},[e])}dropWorld(){let e=0,t=0;for(;e<this.stageN;){let n=this.stage[e],r=n===2||n===3?2+this.stage[e+1]*2:On[n];n!==2&&n!==3&&n!==13&&n!==4&&n!==11&&(t!==e&&this.stage.copyWithin(t,e,e+r),t+=r),e+=r}this.stageN=t}puff(e,t,n,r,i,a=1,o=1,s=R.smoke){this.room(9),this.stage[this.stageN]=5,this.stageF[this.stageN+1]=e,this.stageF[this.stageN+2]=t,this.stageF[this.stageN+3]=n,this.stageF[this.stageN+4]=r,this.stageF[this.stageN+5]=a,this.stage[this.stageN+6]=i,this.stageF[this.stageN+7]=o,this.stage[this.stageN+8]=s,this.stageN+=9}poof(e,t,n,r){this.room(5),this.stage[this.stageN]=9,this.stageF[this.stageN+1]=e,this.stageF[this.stageN+2]=t,this.stageF[this.stageN+3]=n,this.stage[this.stageN+4]=r,this.stageN+=5}spark(e,t,n,r,i,a){this.room(7),this.stage[this.stageN]=6,this.stageF[this.stageN+1]=e,this.stageF[this.stageN+2]=t,this.stageF[this.stageN+3]=n,this.stageF[this.stageN+4]=r,this.stageF[this.stageN+5]=i,this.stageF[this.stageN+6]=a,this.stageN+=7}trail(e,t,n,r,i,a,o,s){o<=0&&s<=0||(this.room(9),this.stage[this.stageN]=8,this.stageF[this.stageN+1]=e,this.stageF[this.stageN+2]=t,this.stageF[this.stageN+3]=n,this.stageF[this.stageN+4]=r,this.stageF[this.stageN+5]=i,this.stageF[this.stageN+6]=a,this.stage[this.stageN+7]=o,this.stage[this.stageN+8]=s,this.stageN+=9)}clear(){this.room(1),this.stage[this.stageN++]=7}update(e,t){this.clock+=e,this.clock>.016666666666666666&&this.futureReady&&(this.clock%=Cn,this.rotate(t));let n=Math.min(1,this.clock/Cn);this.main.program.uniforms.uAlpha.value=n,this.sparks.program.uniforms.uAlpha.value=n;let r=performance.now()/1e3;this.main.program.uniforms.uTime.value=r,this.sparks.program.uniforms.uTime.value=r}updateShadows(e){if(!this.gfx.shadows)return;let t=this.gfx.performanceSettings.debrisShadows;for(let n=0;n<2;n++){let r=n===0?this.main:this.sparks,i=r.mesh;t&&!i.depthProgram&&this.gfx.addCaster(i,this.gfx.makeDepthProgram(kr,n===0?jr:void 0,r.program.uniforms)),(t!==i.castShadow||t&&e&&i.visible)&&(i.shadowDirty=!0),i.castShadow=t}}rotate(e){if(!this.futureReady)return;let t=this.past;this.past=this.present,this.present=this.future,this.future=t,this.futureReady=!1;let n=new Uint32Array(this.present.buffer);this.mainN=n[3],this.sparkN=n[4],fe.value=n[5],this.uploadSnapshots();let r=this.splitAt(En),i=new Uint32Array(this.future.buffer);i.set(this.stage.subarray(0,r),16),i[2]=r,this.future[1]=Cn*e;let a=this.stageN-r;a>0&&this.stage.copyWithin(0,r,this.stageN),this.stageN=a;let o=this.future.buffer;this.worker.postMessage({buffer:o},[o])}splitAt(e){if(this.stageN<=e)return this.stageN;let t=0;for(;t<this.stageN;){let n=this.stage[t],r=n===2||n===3?2+this.stage[t+1]*2:On[n];if(!r||t+r>e)break;t+=r}return t}uploadSnapshots(){let e=this.past,t=this.present,n=this.mainN,r=this.sparkN;this.main.upload(e.subarray(Dn,Dn+n*8),t.subarray(Dn,Dn+n*8),n),this.sparks.upload(e.subarray(kn,kn+r*8),t.subarray(kn,kn+r*8),r)}},Fr={half:dn,height:nn},Ir=class{constructor(e,t){this.npc=e,this.Instancer=t,this.draw=null,this.past=null,this.current=null,this.count=0,this.spawnPending=!1,this.behaviorLoaded=!1}message(e){return e.verityReady===void 0?e.veritySpawned!==void 0&&(this.spawnPending=!1,!0):(this.behaviorLoaded=e.verityReady,e.verityReady?this.resolve?.():this.reject?.(Error(e.error)),!0)}loadBehavior(){return this.loading||=new Promise((e,t)=>{this.resolve=e,this.reject=t,this.npc.worker.postMessage({loadVerity:!0})}).catch(e=>{throw this.loading=null,e})}installModel(e,t){if(this.draw)return;let n=this.npc;this.past=new Float32Array(20),this.current=new Float32Array(20),this.draw=new this.Instancer(n.gfx,e.verityGeometry(n.gfx.gl),e.VERITY_VS,e.VERITY_FS,e.verityTexture(n.gfx.gl,t),n.alphaU,20,1,n.root),n.uploadSnapshots()}spawn(e,t,n){return!this.draw||!this.behaviorLoaded||this.count||this.spawnPending?!1:(this.spawnPending=!0,this.npc.spawnVillager(e,t,n,rn),!0)}tntPlaced(e,t,n){let r=this.npc;r.room(4);let i=r.stageN;r.stage[i]=14,r.stageF[i+1]=e,r.stageF[i+2]=t,r.stageF[i+3]=n,r.stageN+=4}projectileReaction(e,t,n){if(!this.count)return;let r=this.npc;r.room(8);let i=r.stageN;r.stage[i]=15,r.stage[i+1]=this.slot,r.stage[i+2]=this.current[7],r.stage[i+3]=e,r.stageF[i+4]=t.x,r.stageF[i+5]=t.y,r.stageF[i+6]=t.z,r.stageF[i+7]=n,r.stageN+=8}reflects(e){return!!(this.count&&e.body===1&&e.slot===this.slot&&e.gen===this.current[7]&&this.current[9]<=Math.fround(.6))}setAnger(e){if(!this.count||!Number.isFinite(e)||e<0||e>1)return!1;let t=this.npc;t.room(4);let n=t.stageN;return t.stage[n]=16,t.stage[n+1]=this.slot,t.stage[n+2]=this.current[7],t.stageF[n+3]=e,t.stageN+=4,!0}clear(){this.onPose?.(null),this.spawnPending=!1}event(e,t,n,r){if(e!==6&&e!==7)return!1;let i=e===6,a=t[r+(i?5:2)],o=t[r+(i?6:3)],s=bn+a*20;return a<this.npc.villagerN&&n[s+11]&&n[s+14]&&n[s+7]===o&&(i?this.onVoice?.(t[r+4],n[r+1],n[r+2],n[r+3],o,Math.max(0,Math.min(1,1-n[s+9]))):this.onAction?.(t[r+1],n.subarray(r+4,r+11),o)),!0}uploadSnapshots(){let{past:e,present:t,villagerN:n}=this.npc;this.count=0;for(let r=0;r<n;r++){let n=bn+r*20;if(!t[n+11]||!t[n+14])continue;e[n+7]===t[n+7]&&Math.hypot(t[n]-e[n],t[n+1]-e[n+1],t[n+2]-e[n+2])>8&&e.set(t.subarray(n,n+20),n);let i=this.count++*20;this.slot=r,this.past.set(e.subarray(n,n+20),i),this.current.set(t.subarray(n,n+20),i)}this.count&&(this.spawnPending=!1),this.onPose?.(this.count?this.current:null),this.draw?.upload(this.past,this.current,this.count)}updateVisibility(){if(!this.draw)return;let e=this.draw.mesh;(this.count>0||e.visible)&&(e.shadowDirty=!0),e.visible=this.count>0}bounds(e,t){return e[t+14]>0?Fr:null}},Lr=class{constructor(e,t,n,r,i,a,o,s,c,l={}){let u=e.gl;this.geometry=t;let d=o/4,f=[],p=[];for(let e=1;e<=d;e++)f.push(`iPrev`+e),p.push(`iCur`+e);this.prev=new Je(u,t,f,o,s,!0),this.cur=new Je(u,t,p,o,s,!0);let m=e.makeProgram({vertex:n,fragment:r,uniforms:{uAtlas:{value:i},uAlpha:a,...l}});this.mesh=new A(u,{geometry:t,program:m,frustumCulled:!1}),this.mesh.visible=!1,this.mesh.setParent(c),e.addCaster(this.mesh,e.makeDepthProgram(n,void 0,{uAlpha:a,...l}))}upload(e,t,n){this.prev.uploadFrom(e,n),this.cur.uploadFrom(t,n),this.geometry.instancedCount=n}},Rr=class{constructor(e,t,n){this.npc=e,this.snapshot=t,this.draw=n,this.count=0,this.liveCount=0}readHeader(e){this.count=e[this.snapshot.countWord],this.liveCount=e[this.snapshot.liveWord]}updateVisibility(){let e=this.draw.mesh;(this.count>0||e.visible)&&(e.shadowDirty=!0),e.visible=this.count>0}uploadSnapshots(){let{off:e,floats:t}=this.snapshot,n=e+this.count*t;this.draw.upload(this.npc.past.subarray(e,n),this.npc.present.subarray(e,n),this.count)}writeInput(){}sphereBounds(){return null}sweep(e,t,n,r,i,a,o,s=0,c=-1,l=0){let u=this.snapshot,d=this.count,f=Math.hypot(r,i,a);if(f<1e-9)return null;r/=f,i/=f,a/=f;let p=Math.min(1,this.npc.clock/en),m=this.npc.past,h=this.npc.present,g=null,_=o+1e-6;for(let f=0;f<d;f++){let d=u.off+f*u.floats;if(h[d+u.alive]===0)continue;let v=h[d+7];if(f===c&&v===l)continue;let y=m[d+7]===v?p:1,b=m[d]+(h[d]-m[d])*y,x=m[d+1]+(h[d+1]-m[d+1])*y,S=m[d+2]+(h[d+2]-m[d+2])*y,ee=this.sphereBounds(h,d);if(ee){let c=Z(e,t,n,r,i,a,b,x+ee.half,S,ee.half+s);c&&c.dist<=_&&c.dist<=o&&(_=c.dist,g={slot:f,gen:v,...c});continue}let C=[b-u.half-s,x-(u.centred?u.half:0)-s,S-u.half-s],te=[b+u.half+s,x+u.height+s,S+u.half+s],w=tn(e,t,n,r,i,a,C,te);if(w>_||w>o)continue;let T=e+r*w,ne=t+i*w,E=n+a*w,re=0,ie=0,ae=0;if(w<=1e-6)Math.abs(r)>=Math.abs(i)&&Math.abs(r)>=Math.abs(a)?re=r>0?-1:1:Math.abs(i)>=Math.abs(a)?ie=i>0?-1:1:ae=a>0?-1:1;else{let e=[[Math.abs(T-C[0]),-1,0,0],[Math.abs(T-te[0]),1,0,0],[Math.abs(ne-C[1]),0,-1,0],[Math.abs(ne-te[1]),0,1,0],[Math.abs(E-C[2]),0,0,-1],[Math.abs(E-te[2]),0,0,1]],t=e[0];for(let n=1;n<e.length;n++)e[n][0]<t[0]&&(t=e[n]);re=t[1],ie=t[2],ae=t[3]}_=w,g={slot:f,gen:v,dist:w,nx:re,ny:ie,nz:ae}}return g}pose(e,t,n){let r=this.snapshot,i=this.count;if(e<0||e>=i)return!1;let a=r.off+e*r.floats,o=this.npc.present,s=this.npc.past;if(o[a+r.alive]===0||o[a+7]!==t)return!1;let c=Math.min(1,this.npc.clock/en),l=s[a+7]===t?c:1;return n.x=s[a]+(o[a]-s[a])*l,n.y=s[a+1]+(o[a+1]-s[a+1])*l,n.z=s[a+2]+(o[a+2]-s[a+2])*l,n.yaw=s[a+3]+(o[a+3]-s[a+3])*l,!0}};function zr(e={}){let{health:t,speedScale:n=1}=e;if(t!==void 0&&(!Number.isFinite(t)||t<1||t>1e4))throw RangeError(`NPC health must be a finite number from 1 to 10000`);if(!Number.isFinite(n)||n<.1||n>3)throw RangeError(`NPC speedScale must be a finite number from 0.1 to 3`);return{health:t??0,speedScale:n}}var Br=[[`head`,.55,.55,.55,0,1.5,0,0],[`body`,.5,.8,.32,0,.82,0,0],[`legF`,.46,.42,.3,0,.21,-.26,1],[`legB`,.46,.42,.3,0,.21,.26,-1]],Vr=F+`
in vec3 position;
in vec3 normal;
in vec2 uv;
in float part;      // body-part index (0-3) for this vertex
in vec4 iPrev1;     // xyz: creeper pos, w: draw yaw (rad, unwrapped)
in vec4 iPrev2;     // x: swell, y: leg swing (rad), z: flash, w: gen
in vec4 iCur1;      // current snapshot, same layout
in vec4 iCur2;
in vec4 iPrev3;
in vec4 iCur3;      // ragdoll quaternion, applied after yaw

uniform float uAlpha;
${Un}

out vec2 vUv;
out vec3 vNormal;
out vec3 vWorld;
out float vFlash;

// part local offset (xyz) + leg swing sign (w), indexed by the per-vertex part id
const vec4 cParts[4] = vec4[4](
${Br.map(e=>`    vec4(${e[4].toFixed(3)}, ${e[5].toFixed(3)}, ${e[6].toFixed(3)}, ${e[7].toFixed(1)})`).join(`,
`)}
);

void main() {
    // Dead slot: collapse. The varyings are written before the return because
    // a shader that leaves an output unassigned on some path is undefined.
    if (iCur2.x == 0.0) {
        vUv = vec2(0.0);
        vNormal = vec3(0.0, 1.0, 0.0);
        vWorld = vec3(0.0);
        vFlash = 0.0;
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }
    float a = (iCur2.w == iPrev2.w) ? uAlpha : 1.0; // gen changed: snap
    vec3 cpos = mix(iPrev1.xyz, iCur1.xyz, a);
    float cyaw = mix(iPrev1.w, iCur1.w, a);
    float swell = mix(iPrev2.x, iCur2.x, a);

    vec4 p = cParts[int(part + 0.5)];
    float yawS = sin(cyaw), yawC = cos(cyaw);
    float swing = mix(iPrev2.y, iCur2.y, a) * p.w;
    float swS = sin(swing), swC = cos(swing);

    // leg swing about X, then part offset, then swell scale, then yaw
    vec3 v = position;
    v = vec3(v.x, v.y * swC - v.z * swS, v.y * swS + v.z * swC);
    v = (p.xyz + v) * swell;
    vec3 wpos = vec3(v.x * yawC + v.z * yawS, v.y, -v.x * yawS + v.z * yawC) + cpos;
    vec4 tumble = ragdollQuat(iPrev3, iCur3, a);
    vec3 centre = cpos + vec3(0.0, ${(gn/2).toFixed(3)}, 0.0);
    wpos = centre + ragdollRotate(tumble, wpos - centre);

    vec3 n = normal;
    n = vec3(n.x, n.y * swC - n.z * swS, n.y * swS + n.z * swC);
    n = vec3(n.x * yawC + n.z * yawS, n.y, -n.x * yawS + n.z * yawC);
    n = ragdollRotate(tumble, n);

    vUv = uv;
    vNormal = n;
    vWorld = wpos;
    vFlash = iCur2.z;
    gl_Position = projectionMatrix * viewMatrix * vec4(wpos, 1.0);
}
`,Hr=j+M+`
in vec2 vUv;
in vec3 vNormal;
in vec3 vWorld;
in float vFlash;

uniform sampler2D uAtlas;
out vec4 fragColor;

void main() {
    vec3 albedo = texture(uAtlas, vUv).rgb;
    vec3 lit = albedo * diffuseLightFree(vNormal, vWorld) + vec3(vFlash);
    fragColor = colorGrade(vec4(gammaOut(lit), 1.0));
}
`;function Ur(e,t,n,r){let i=e.gl,a=R.creeper_skin,o=R.creeper_face;return new Lr(e,Yt(i,Br,e=>q(e[0]===`head`?{px:a,nx:a,py:a,ny:a,pz:a,nz:o}:a,e[1],e[2],e[3])),Vr,Hr,t,n,12,200,r)}var Wr=class extends Rr{constructor(e,t){super(e,Fn,Ur(e.gfx,t,e.alphaU,e.root))}spawn(e,t,n,r,i){let{health:a,speedScale:o}=zr(i);this.npc.room(9),this.npc.stage[this.npc.stageN]=1,this.npc.stageF[this.npc.stageN+1]=e,this.npc.stageF[this.npc.stageN+2]=t,this.npc.stageF[this.npc.stageN+3]=n,this.npc.stage[this.npc.stageN+4]=r===`player`?2:+!!r,this.npc.stageF[this.npc.stageN+5]=r&&r!==`player`?r.x:0,this.npc.stageF[this.npc.stageN+6]=r&&r!==`player`?r.z:0,this.npc.stageF[this.npc.stageN+7]=a,this.npc.stageF[this.npc.stageN+8]=o,this.npc.stageN+=9}ignite(e,t){this.npc.room(3),this.npc.stage[this.npc.stageN]=5,this.npc.stage[this.npc.stageN+1]=e,this.npc.stage[this.npc.stageN+2]=t,this.npc.stageN+=3}};function Gr(e,t){let n=B(I.indexOf(e),.5,.5),r=B(I.indexOf(t),.5,.5);return`vec2(${(r[0]-n[0]).toFixed(8)}, ${(r[1]-n[1]).toFixed(8)})`}var Kr=0,qr=1,Jr=2,Yr=3,Xr=[{tile:`robe`,sx:.22,sy:.58,sz:.24,x:-.13,y:.29,z:0,leg:1,pivot:.58,arm:0,tint:qr,wear:0},{tile:`robe`,sx:.22,sy:.58,sz:.24,x:.13,y:.29,z:0,leg:-1,pivot:.58,arm:0,tint:qr,wear:0},{tile:`robe`,sx:.5,sy:.72,sz:.34,x:0,y:.96,z:0,leg:0,pivot:0,arm:0,tint:qr,wear:0},{tile:`robe`,sx:.6,sy:.14,sz:.42,x:0,y:.65,z:0,leg:0,pivot:0,arm:0,tint:qr,wear:0,villagerOnly:!0},{tile:`robe`,sx:.62,sy:.22,sz:.24,x:0,y:1.09,z:-.2,leg:0,pivot:1.2,arm:1,tint:qr,wear:0,humanOnly:!0},{tile:`head`,sx:.52,sy:.6,sz:.52,x:0,y:1.6,z:0,leg:0,pivot:0,arm:0,tint:Kr,wear:0},{tile:`skin`,sx:.13,sy:.24,sz:.13,x:0,y:1.52,z:-.32,leg:0,pivot:0,arm:0,tint:Kr,wear:0,villagerOnly:!0},{tile:`robe`,sx:.44,sy:.86,sz:.08,x:0,y:.86,z:-.22,leg:0,pivot:0,arm:0,tint:Yr,wear:32},{tile:`robe`,sx:.56,sy:.1,sz:.38,x:0,y:1.06,z:0,leg:0,pivot:0,arm:0,tint:Yr,wear:64},{tile:`robe`,sx:.34,sy:.32,sz:.18,x:0,y:1.06,z:.25,leg:0,pivot:0,arm:0,tint:Yr,wear:128},{tile:`robe`,sx:.545,sy:.11,sz:.545,x:0,y:1.79,z:0,leg:0,pivot:0,arm:0,tint:Yr,wear:8},{tile:`robe`,sx:.58,sy:.1,sz:.08,x:0,y:1.63,z:-.36,leg:0,pivot:0,arm:0,tint:Yr,wear:16},{tile:`robe`,sx:.88,sy:.07,sz:.88,x:0,y:1.9,z:0,leg:0,pivot:0,arm:0,tint:Jr,wear:1},{tile:`robe`,sx:.5,sy:.26,sz:.5,x:0,y:2.01,z:0,leg:0,pivot:0,arm:0,tint:Jr,wear:2},{tile:`robe`,sx:.46,sy:.06,sz:.3,x:0,y:1.93,z:-.36,leg:0,pivot:0,arm:0,tint:Jr,wear:4},{tile:`skin`,sx:.18,sy:.2,sz:.72,x:-.34,y:1.2,z:-.3,leg:0,pivot:0,arm:0,tint:Kr,wear:0,zombieOnly:!0},{tile:`skin`,sx:.18,sy:.2,sz:.72,x:.34,y:1.2,z:-.3,leg:0,pivot:0,arm:0,tint:Kr,wear:0,zombieOnly:!0}],Zr=(()=>{let e=He([z[0]/255,z[1]/255,z[2]/255]);return .2126*e[0]+.7152*e[1]+.0722*e[2]})(),Qr=F+`
in vec3 position;
in vec3 normal;
in vec2 uv;
in float part;      // body-part index for this vertex
in vec4 iPrev1;     // xyz: feet position, w: draw yaw (rad, unwrapped)
in vec4 iPrev2;     // x: leg swing (rad), y: arm raise (rad), z: wear mask, w: gen
in vec4 iPrev3;     // x: cloth, y: trim, z: accent (0xRRGGBB per float), w: alive
in vec4 iPrev4;     // x: hurt, yzw: reserved
in vec4 iCur1;      // current snapshot, same layout
in vec4 iCur2;
in vec4 iCur3;
in vec4 iCur4;
in vec4 iPrev5;
in vec4 iCur5;      // ragdoll quaternion

uniform float uAlpha;
${Un}

out vec2 vUv;
out vec3 vNormal;
out vec3 vWorld;
out vec4 vTint;     // rgb: linear colour to recolour to, a: 0 = wear the tile as painted
out float vHurt;    // 0..1, the flash that says a round landed

// xyz: part offset in body space, w: leg-swing sign
const vec4 cPart[${Xr.length}] = vec4[${Xr.length}](
${Xr.map(e=>`    vec4(${e.x.toFixed(3)}, ${e.y.toFixed(3)}, ${e.z.toFixed(3)}, ${e.leg.toFixed(1)})`).join(`,
`)}
);
// xyz: rotation pivot in body space, w: arm-raise mask
const vec4 cPivot[${Xr.length}] = vec4[${Xr.length}](
${Xr.map(e=>`    vec4(0.0, ${e.pivot.toFixed(3)}, 0.0, ${e.arm.toFixed(1)})`).join(`,
`)}
);
// x: tint channel (0 none, 1 cloth, 2 trim, 3 accent), y: wear bit (0 = always)
const vec2 cWear[${Xr.length}] = vec2[${Xr.length}](
${Xr.map(e=>`    vec2(${e.tint.toFixed(1)}, ${e.wear.toFixed(1)})`).join(`,
`)}
);

const float cInfection[${Xr.length}] = float[${Xr.length}](
${Xr.map(e=>`    ${(e.zombieOnly?1:e.humanOnly?-1:e.villagerOnly?-2:0).toFixed(1)}`).join(`,
`)}
);

void main() {
    int id = int(part + 0.5);
    vec4 p = cPart[id];
    vec4 q = cPivot[id];
    vec2 w = cWear[id];

    // A dead slot collapses whole; a garment this villager is not wearing
    // collapses too (wear and the tints are CUR-only — they are static per
    // slot). All four vertices of every face land on one clip position, so the
    // box's triangles have zero area and rasterize nothing. That is what lets
    // one geometry carry ten trades' worth of hats and still be ONE instanced
    // draw. The varyings are written before the return because a shader that
    // leaves an output unassigned on some path is undefined.
    int wearBit = int(w.y + 0.5);
    int infection = int(iCur2.z + 0.5) >> 8;
    bool infected = infection != 0;
    bool originalZombie = infection == 2;
    if (iCur3.w == 0.0 || iCur4.z != 0.0 || (wearBit != 0 && (int(iCur2.z + 0.5) & wearBit) == 0)
        || (cInfection[id] > 0.5 && !infected)
        || (cInfection[id] == -1.0 && infected)
        || (cInfection[id] == -2.0 && originalZombie)) {
        vUv = vec2(0.0);
        vNormal = vec3(0.0, 1.0, 0.0);
        vWorld = vec3(0.0);
        vTint = vec4(0.0);
        vHurt = 0.0;
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }

    float al = (iCur2.w == iPrev2.w) ? uAlpha : 1.0; // gen changed: snap
    vec3 feet = mix(iPrev1.xyz, iCur1.xyz, al);
    float yaw = mix(iPrev1.w, iCur1.w, al);
    float a = mix(iPrev2.x, iCur2.x, al) * p.w + mix(iPrev2.y, iCur2.y, al) * q.w;
    float sA = sin(a), cA = cos(a);

    // into body space, rotate about the part's pivot, then yaw. A part with no
    // angle comes through unchanged whatever its pivot says, so the static
    // pieces need no special case.
    vec3 b = position + p.xyz - q.xyz;
    b = vec3(b.x, b.y * cA - b.z * sA, b.y * sA + b.z * cA) + q.xyz;
    vec3 n = vec3(normal.x, normal.y * cA - normal.z * sA, normal.y * sA + normal.z * cA);

    float yawS = sin(yaw), yawC = cos(yaw);
    b *= iCur3.w;
    vec3 wpos = vec3(b.x * yawC + b.z * yawS, b.y, -b.x * yawS + b.z * yawC) + feet;
    vec4 tumble = ragdollQuat(iPrev5, iCur5, al);
    vec3 centre = feet + vec3(0.0, ${(fn/2).toFixed(3)}, 0.0);
    wpos = centre + ragdollRotate(tumble, wpos - centre);

    // Unpack only the ONE colour this vertex's part wants. Three colours ride
    // as three floats rather than three vec4 lines because 0xRRGGBB is exactly
    // what eight-bit colour is, and a float holds 24 bits of integer exactly.
    int ch = int(w.x + 0.5);
    if (ch == 0) {
        vTint = vec4(0.0);
    } else {
        int c = int(ch == 1 ? iCur3.x : (ch == 2 ? iCur3.y : iCur3.z));
        vec3 srgb = vec3(float((c >> 16) & 255), float((c >> 8) & 255), float(c & 255)) / 255.0;
        vTint = vec4(pow(srgb, vec3(2.2)), 1.0); // authored sRGB, shaded linear
    }

    vUv = uv;
    if (infected && (id == 5 || id == 6 || cInfection[id] > 0.5)) {
        vUv += id == 5 && normal.z < -0.5
            ? ${Gr(`villager_face`,`zombie_face`)}
            : ${Gr(`villager_skin`,`zombie_skin`)};
    }
    if (originalZombie && ch == 1) {
        vUv += p.w != 0.0 ? ${Gr(`villager_robe`,`zombie_pants`)}
            : ${Gr(`villager_robe`,`zombie_shirt`)};
        vTint = vec4(0.0);
    }
    vNormal = vec3(n.x * yawC + n.z * yawS, n.y, -n.x * yawS + n.z * yawC);
    vNormal = ragdollRotate(tumble, vNormal);
    vWorld = wpos;
    vHurt = iCur4.x;
    gl_Position = projectionMatrix * viewMatrix * vec4(wpos, 1.0);
}
`,$r=j+M+`
in vec2 vUv;
in vec3 vNormal;
in vec3 vWorld;
in vec4 vTint;
in float vHurt;

uniform sampler2D uAtlas;
out vec4 fragColor;

void main() {
    vec3 albedo = texture(uAtlas, vUv).rgb;
    float l = dot(albedo, vec3(0.2126, 0.7152, 0.0722)) * ${(1/Zr).toFixed(5)};
    vec3 col = mix(albedo, vTint.rgb * l, vTint.a);
    vec3 lit = col * diffuseLightFree(vNormal, vWorld) + vec3(0.75, 0.06, 0.04) * vHurt;
    fragColor = colorGrade(vec4(gammaOut(lit), 1.0));
}
`;function ei(e,t,n,r){let i=e.gl,a=R.villager_skin,o=R.villager_face,s=R.villager_robe;return new Lr(e,Yt(i,Xr,e=>q(e.tile===`head`?{px:a,nx:a,py:a,ny:a,pz:a,nz:o}:e.tile===`skin`?a:s,e.sx,e.sy,e.sz)),Qr,$r,t,n,20,200,r)}var ti=class extends Rr{constructor(e,t){super(e,Ln,ei(e.gfx,t,e.alphaU,e.root))}spawn(e,t,n,r){this.npc.room(5),this.npc.stage[this.npc.stageN]=2,this.npc.stageF[this.npc.stageN+1]=e,this.npc.stageF[this.npc.stageN+2]=t,this.npc.stageF[this.npc.stageN+3]=n,this.npc.stage[this.npc.stageN+4]=r,this.npc.stageN+=5}spawnZombie(e,t,n,r){let{health:i,speedScale:a}=zr(r);this.npc.room(6),this.npc.stage[this.npc.stageN]=19,this.npc.stageF[this.npc.stageN+1]=e,this.npc.stageF[this.npc.stageN+2]=t,this.npc.stageF[this.npc.stageN+3]=n,this.npc.stageF[this.npc.stageN+4]=i,this.npc.stageF[this.npc.stageN+5]=a,this.npc.stageN+=6}sphereBounds(e,t){return this.npc.verity.bounds(e,t)}martyr(e,t,n){this.npc.room(4),this.npc.stage[this.npc.stageN]=12,this.npc.stage[this.npc.stageN+1]=e,this.npc.stage[this.npc.stageN+2]=t,this.npc.stage[this.npc.stageN+3]=+!!n,this.npc.stageN+=4}martyrState(e,t){if(e<0||e>=this.count)return 0;let n=bn+e*20,r=this.npc.present;return r[n+11]===0||r[n+7]!==t?0:r[n+13]}},ni=1.3,ri=-.12,ii=[{tile:`fatigue`,sx:.22,sy:.58,sz:.24,x:-.13,y:.29,z:0,leg:1,pivot:.58,aim:0,muzzle:0,cant:0,team:0},{tile:`fatigue`,sx:.22,sy:.58,sz:.24,x:.13,y:.29,z:0,leg:-1,pivot:.58,aim:0,muzzle:0,cant:0,team:0},{tile:`vest`,sx:.48,sy:.7,sz:.3,x:0,y:.97,z:0,leg:0,pivot:0,aim:0,muzzle:0,cant:0,team:1},{tile:`vest`,sx:.48,sy:.7,sz:.3,x:0,y:.97,z:0,leg:0,pivot:0,aim:0,muzzle:0,cant:0,team:2},{tile:`fatigue`,sx:.52,sy:.12,sz:.34,x:0,y:.66,z:0,leg:0,pivot:0,aim:0,muzzle:0,cant:0,team:0},{tile:`helmet`,sx:.54,sy:.56,sz:.54,x:0,y:1.58,z:0,leg:0,pivot:0,aim:0,muzzle:0,cant:1,team:1},{tile:`helmet`,sx:.54,sy:.56,sz:.54,x:0,y:1.58,z:0,leg:0,pivot:0,aim:0,muzzle:0,cant:1,team:2},{tile:`helmet`,sx:.64,sy:.07,sz:.64,x:0,y:1.7,z:0,leg:0,pivot:0,aim:0,muzzle:0,cant:1,team:1},{tile:`helmet`,sx:.64,sy:.07,sz:.64,x:0,y:1.7,z:0,leg:0,pivot:0,aim:0,muzzle:0,cant:1,team:2},{tile:`fatigue`,sx:.15,sy:.36,sz:.16,x:-.134,y:1.164,z:-.135,leg:0,pivot:1.24,aim:1,muzzle:0,cant:0,team:0,rz:.534,rx:1.175},{tile:`fatigue`,sx:.14,sy:.14,sz:.42,x:.052,y:1.185,z:-.425,leg:0,pivot:1.24,aim:1,muzzle:0,cant:0,team:0,rx:.4,ry:-.566},{tile:`glove`,sx:.15,sy:.17,sz:.18,x:.15,y:1.262,z:-.58,leg:0,pivot:1.24,aim:1,muzzle:0,cant:0,team:0},{tile:`fatigue`,sx:.15,sy:.36,sz:.16,x:.243,y:1.063,z:-.058,leg:0,pivot:1.24,aim:1,muzzle:0,cant:0,team:0,rz:.133,rx:.348},{tile:`fatigue`,sx:.14,sy:.14,sz:.4,x:.214,y:1.03,z:-.255,leg:0,pivot:1.24,aim:1,muzzle:0,cant:0,team:0,rx:.699,ry:.349},{tile:`glove`,sx:.14,sy:.15,sz:.15,x:.163,y:1.155,z:-.395,leg:0,pivot:1.24,aim:1,muzzle:0,cant:0,team:0},{tile:`gun`,sx:.09,sy:.15,sz:.3,x:.165,y:1.235,z:-.28,leg:0,pivot:1.24,aim:1,muzzle:0,cant:0,team:0},{tile:`gun`,sx:.08,sy:.115,sz:.46,x:.158,y:1.262,z:-.65,leg:0,pivot:1.24,aim:1,muzzle:0,cant:0,team:0},{tile:`gun`,sx:.05,sy:.05,sz:.2,x:.158,y:1.272,z:-.96,leg:0,pivot:1.24,aim:1,muzzle:0,cant:0,team:0},{tile:`gun`,sx:.07,sy:.2,sz:.1,x:.167,y:1.12,z:-.38,leg:0,pivot:1.24,aim:1,muzzle:0,cant:0,team:0,rx:-.42},{tile:`gun`,sx:.07,sy:.22,sz:.11,x:.162,y:1.105,z:-.47,leg:0,pivot:1.24,aim:1,muzzle:0,cant:0,team:0,rx:.12},{tile:`flash`,sx:.17,sy:.17,sz:.24,x:.158,y:1.272,z:-1.14,leg:0,pivot:1.24,aim:1,muzzle:1,cant:0,team:0}],ai=F+`
in vec3 position;
in vec3 normal;
in vec2 uv;
in float part;      // body-part index for this vertex
in vec4 iPrev1;     // xyz: feet position, w: draw yaw (rad, unwrapped)
in vec4 iPrev2;     // x: leg swing (rad), y: aim pitch (rad), z: muzzle flash, w: gen
in vec4 iPrev3;     // x: alive, y: hurt, z: cheek weld (0..1), w: team (CUR-only)
in vec4 iPrev4;
in vec4 iCur1;      // current snapshot, same layout
in vec4 iCur2;
in vec4 iCur3;
in vec4 iCur4;      // ragdoll quaternion

uniform float uAlpha;
${Un}

out vec2 vUv;
out vec3 vNormal;
out vec3 vWorld;
out float vGlow;    // 1 on the muzzle box, 0 everywhere else
out float vHurt;

// xyz: part offset in body space, w: leg-swing sign
const vec4 cPart[${ii.length}] = vec4[${ii.length}](
${ii.map(e=>`    vec4(${e.x.toFixed(3)}, ${e.y.toFixed(3)}, ${e.z.toFixed(3)}, ${e.leg.toFixed(1)})`).join(`,
`)}
);
// x: pivot y, y: aim mask, z: 1 on the muzzle box, w: cheek-weld mask
const vec4 cPivot[${ii.length}] = vec4[${ii.length}](
${ii.map(e=>`    vec4(${e.pivot.toFixed(3)}, ${e.aim.toFixed(1)}, ${e.muzzle.toFixed(1)}, ${e.cant.toFixed(1)})`).join(`,
`)}
);
// Which side wears this part: 0 both, 1 red only, 2 blue only. Its own table
// rather than a fifth channel on cPivot, because cPivot is full and a vec4 is
// the unit these const tables come in — a table of floats costs the compiler
// the same and says what it is.
const float cTeam[${ii.length}] = float[${ii.length}](
${ii.map(e=>`    ${e.team.toFixed(1)}`).join(`,
`)}
);

const float cSkin[${ii.length}] = float[${ii.length}](
${ii.map(e=>`    ${(e.tile===`helmet`&&e.sy>.2?1:e.tile===`glove`?2:0).toFixed(1)}`).join(`,
`)}
);

void main() {
    int id = int(part + 0.5);
    vec4 p = cPart[id];
    vec4 q = cPivot[id];

    // A dead slot collapses whole; so does the muzzle box on every frame the
    // record does not say a round left it; and so does the half of the kit
    // belonging to the side this soldier is not on — all four vertices of every
    // face land on one clip position, so the box rasterizes nothing. Same
    // mechanism the villager's unworn garments use, and it is what lets a
    // flash, and now two uniforms, cost no draw call and no second mesh. The
    // varyings are written before the return because a shader that leaves an
    // output unassigned on some path is undefined.
    //
    // Bit zero selects the unchanged uniform; bit one marks infection.
    // Read CUR alone so conversion never blends uniforms between snapshots.
    // The table stores sides one higher because zero means both sides.
    int side = int(cTeam[id] + 0.5);
    if (iCur3.x == 0.0 || (q.z > 0.5 && iCur2.z < 0.5)
        || (side != 0 && side != (int(iCur3.w + 0.5) & 1) + 1)) {
        vUv = vec2(0.0);
        vNormal = vec3(0.0, 1.0, 0.0);
        vWorld = vec3(0.0);
        vGlow = 0.0;
        vHurt = 0.0;
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }

    float al = (iCur2.w == iPrev2.w) ? uAlpha : 1.0; // gen changed: snap
    vec3 feet = mix(iPrev1.xyz, iCur1.xyz, al);
    float yaw = mix(iPrev1.w, iCur1.w, al);
    float a = mix(iPrev2.x, iCur2.x, al) * p.w + mix(iPrev2.y, iCur2.y, al) * q.y;
    float sA = sin(a), cA = cos(a);

    vec3 pivot = vec3(0.0, q.x, 0.0);
    vec3 b = position + p.xyz - pivot;
    b = vec3(b.x, b.y * cA - b.z * sA, b.y * sA + b.z * cA) + pivot;
    vec3 n = vec3(normal.x, normal.y * cA - normal.z * sA, normal.y * sA + normal.z * cA);

    // THE CHEEK WELD, and the only roll on this model — every other angle a
    // soldier holds is a pitch and is baked into the mesh (SOLDIER_PARTS). It
    // is here rather than in the geometry because a head is tipped onto the
    // stock only while the rifle is up: the weld ramps 0..1 on whether the sim
    // has a target, and at 0 the sine vanishes and the cosine is one, so the
    // head of a soldier walking a patrol goes through this untouched and no
    // branch is needed to say so. The mask is per PART, so the roll can reach
    // the head and its rim and nothing else whatever the record says.
    float cant = mix(iPrev3.z, iCur3.z, al) * q.w * ${ri.toFixed(4)};
    float sW = sin(cant), cW = cos(cant);
    float ny = b.y - ${ni.toFixed(3)};
    b = vec3(b.x * cW - ny * sW, b.x * sW + ny * cW + ${ni.toFixed(3)}, b.z);
    n = vec3(n.x * cW - n.y * sW, n.x * sW + n.y * cW, n.z);

    float yawS = sin(yaw), yawC = cos(yaw);
    b *= iCur3.x;
    vec3 wpos = vec3(b.x * yawC + b.z * yawS, b.y, -b.x * yawS + b.z * yawC) + feet;
    vec4 tumble = ragdollQuat(iPrev4, iCur4, al);
    vec3 centre = feet + vec3(0.0, ${(yn/2).toFixed(3)}, 0.0);
    wpos = centre + ragdollRotate(tumble, wpos - centre);

    vUv = uv;
    if (iCur3.w > 1.5) {
        if (cSkin[id] == 1.0 && normal.z < -0.5) {
            vUv += (int(iCur3.w + 0.5) & 1) == 0
                ? ${Gr(`soldier_red_face`,`zombie_face`)}
                : ${Gr(`soldier_blue_face`,`zombie_face`)};
        } else if (cSkin[id] == 2.0) {
            vUv += ${Gr(`gun_mag`,`zombie_skin`)};
        }
    }
    vNormal = vec3(n.x * yawC + n.z * yawS, n.y, -n.x * yawS + n.z * yawC);
    vNormal = ragdollRotate(tumble, vNormal);
    vWorld = wpos;
    vGlow = q.z;
    vHurt = iCur3.y;
    gl_Position = projectionMatrix * viewMatrix * vec4(wpos, 1.0);
}
`,oi=j+M+`
in vec2 vUv;
in vec3 vNormal;
in vec3 vWorld;
in float vGlow;
in float vHurt;

uniform sampler2D uAtlas;
out vec4 fragColor;

void main() {
    vec3 albedo = texture(uAtlas, vUv).rgb;
    vec3 lit = mix(albedo * diffuseLightFree(vNormal, vWorld), albedo * 4.0, vGlow);
    lit += vec3(0.75, 0.06, 0.04) * vHurt * (1.0 - vGlow);
    fragColor = colorGrade(vec4(gammaOut(lit), 1.0));
}
`;function si(e,t,n,r){let i=e.gl,a=[{vest:R.soldier_red_vest,helm:R.soldier_red_helmet,face:R.soldier_red_face},{vest:R.soldier_blue_vest,helm:R.soldier_blue_helmet,face:R.soldier_blue_face}],o=R.soldier_fatigue,s=R.gun_body,c=R.gun_mag;return new Lr(e,Yt(i,ii,e=>{let t=a[e.team-1];return q(e.tile===`helmet`&&e.sy>.2?{px:t.helm,nx:t.helm,py:t.helm,ny:t.helm,pz:t.helm,nz:t.face}:e.tile===`helmet`?t.helm:e.tile===`vest`?t.vest:e.tile===`gun`?s:e.tile===`glove`?c:e.tile===`flash`?R.spark:o,e.sx,e.sy,e.sz)}),ai,oi,t,n,16,64,r)}var ci=class extends Rr{constructor(e,t){super(e,Pn,si(e.gfx,t,e.alphaU,e.root))}spawn(e,t,n,r){this.npc.room(5),this.npc.stage[this.npc.stageN]=10,this.npc.stageF[this.npc.stageN+1]=e,this.npc.stageF[this.npc.stageN+2]=t,this.npc.stageF[this.npc.stageN+3]=n,this.npc.stage[this.npc.stageN+4]=r,this.npc.stageN+=5}},li=e=>e.map(e=>e.toFixed(8)).join(`, `),ui=`
const vec4 cHip[8] = vec4[8](
${Nn.map(e=>`vec4(${li(e.hip)}, ${e.upper.toFixed(8)})`).join(`,
`)}
);
const vec4 cFoot[8] = vec4[8](
${Nn.map(e=>`vec4(${li(e.foot)}, ${e.lower.toFixed(8)})`).join(`,
`)}
);
float spiderBob(float gait) { return sin(gait * 2.0) * 0.008; }
vec3 turn(vec4 q, vec3 v) { return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v); }

// A planted foot keeps progress=1 and a fixed world-space endpoint. During a
// step, interpolate its clock and evaluate the worker's collision-checked curve.
vec3 footTarget(int leg, float a) {
    ivec2 uv = ivec2(leg * 4, gl_InstanceID);
    vec4 start = texelFetch(uFeetCur, uv, 0);
    vec4 control1 = texelFetch(uFeetCur, uv + ivec2(1, 0), 0);
    vec3 control2 = texelFetch(uFeetCur, uv + ivec2(2, 0), 0).xyz;
    vec3 end = texelFetch(uFeetCur, uv + ivec2(3, 0), 0).xyz;
    float previousId = texelFetch(uFeetPrev, uv, 0).w;
    float previousT = previousId == start.w ? texelFetch(uFeetPrev, uv + ivec2(1, 0), 0).w : 0.0;
    float t = mix(previousT, control1.w, a), s = 1.0 - t;
    return s*s*s*start.xyz + 3.0*s*s*t*control1.xyz + 3.0*s*t*t*control2 + t*t*t*end;
}

// Two rigid segments, one fixed bend direction: away from the walking surface.
// Project local up perpendicular to hip->foot; no neighbour scans or swivels.
void solveLeg(int leg, float gait, vec3 target, out vec3 hip, out vec3 knee, out vec3 foot) {
    hip = cHip[leg].xyz + vec3(0.0, spiderBob(gait), 0.0);
    float upper = cHip[leg].w, lower = cFoot[leg].w;
    vec3 delta = target - hip;
    vec3 axis = length(delta) > 0.00001 ? normalize(delta) : vec3(sign(hip.x), 0.0, 0.0);
    float d = clamp(length(delta), abs(upper-lower)+0.00001, upper+lower-0.00001);
    foot = hip + axis*d;
    float along = (upper*upper-lower*lower+d*d)/(2.0*d);
    float height = sqrt(max(0.0, upper*upper-along*along));
    vec3 bend = vec3(0.0, 1.0, 0.0) - axis*axis.y;
    if (dot(bend, bend) < 0.000001) {
        vec3 outward = vec3(sign(hip.x), 0.0, 0.0);
        bend = outward - axis*dot(outward, axis);
    }
    knee = hip + axis*along + normalize(bend)*height;
}
vec3 boneTurn(vec3 from, vec3 to, vec3 v) {
    vec3 axis = cross(from, to);
    return v + cross(axis,v) + cross(axis,cross(axis,v))/max(1.0+dot(from,to),0.00001);
}
`;function di(e){let t=R.spider_skin;return e.head?{px:t,nx:t,py:t,ny:t,pz:t,nz:R.spider_face}:R[e.tile]}var fi=F+`
in vec3 position;
in vec3 normal;
in vec2 uv;
in float part;
in vec4 iPrev1;
in vec4 iPrev2;
in vec4 iPrev3;
in vec4 iCur1;
in vec4 iCur2;
in vec4 iCur3;
uniform float uAlpha;
uniform sampler2D uFeetPrev;
uniform sampler2D uFeetCur;
out vec2 vUv;
out vec3 vNormal;
out vec3 vWorld;
out float vHurt;
const vec4 cPart[${In.length}] = vec4[${In.length}](
${In.map(e=>`vec4(${li([e.x,e.y,e.z])}, ${e.leg===void 0?`-1.0`:(e.leg*2+e.bone).toFixed(1)})`).join(`,
`)}
);
const vec3 cKnee[8] = vec3[8](
${Nn.map(e=>`vec3(${li(e.knee)})`).join(`,
`)}
);
${ui}
void main() {
    vUv = uv; vNormal = vec3(0.0,1.0,0.0); vWorld = vec3(0.0); vHurt = iCur3.z;
    if (iCur3.y == 0.0) { gl_Position = vec4(0.0,0.0,0.0,1.0); return; }
    float a = iPrev2.w == iCur2.w ? uAlpha : 1.0;
    vec4 qa = vec4(iPrev2.xyz,iPrev3.x), qb = vec4(iCur2.xyz,iCur3.x);
    if (dot(qa,qb) < 0.0) qa = -qa;
    vec4 q = normalize(mix(qa,qb,a));
    float gait = mix(iPrev1.w,iCur1.w,a);
    vec3 body = mix(iPrev1.xyz,iCur1.xyz,a);
    vec4 p = cPart[int(part+0.5)];
    vec3 v = position+p.xyz, n = normal;
    if (p.w >= 0.0) {
        int bone = int(p.w+0.5), leg = bone/2;
        vec3 target = turn(vec4(-q.xyz,q.w),footTarget(leg,a)-body);
        vec3 hip, knee, foot;
        solveLeg(leg,gait,target,hip,knee,foot);
        bool upper = (bone-leg*2) == 0;
        vec3 bindStart = upper ? cHip[leg].xyz : cKnee[leg];
        vec3 bindEnd = upper ? cKnee[leg] : cFoot[leg].xyz;
        vec3 start = upper ? hip : knee, end = upper ? knee : foot;
        vec3 bindDir = normalize(bindEnd-bindStart), posedDir = normalize(end-start);
        v = start + boneTurn(bindDir,posedDir,v-bindStart);
        n = boneTurn(bindDir,posedDir,n);
    } else v.y += spiderBob(gait);
    vWorld = turn(q,v)+body;
    vNormal = turn(q,n);
    gl_Position = projectionMatrix*viewMatrix*vec4(vWorld,1.0);
}
`,pi=j+M+`
in vec2 vUv;
in vec3 vNormal;
in vec3 vWorld;
in float vHurt;
uniform sampler2D uAtlas;
out vec4 fragColor;
void main() {
    vec3 lit = texture(uAtlas, vUv).rgb * diffuseLightFree(vNormal, vWorld);
    fragColor = vec4(gammaOut(lit + vec3(0.75, 0.06, 0.04) * vHurt), 1.0);
}
`;function mi(e){return new O(e,{image:new Float32Array(12288),width:32,height:96,type:e.FLOAT,format:e.RGBA,internalFormat:e.RGBA32F,minFilter:e.NEAREST,magFilter:e.NEAREST,generateMipmaps:!1,flipY:!1})}function hi(e,t,n,r){let i=mi(e.gl),a=mi(e.gl),o=new Lr(e,Yt(e.gl,In,e=>q(di(e),e.sx,e.sy,e.sz,e.head?0:.64)),fi,pi,t,n,12,96,r,{uFeetPrev:{value:i},uFeetCur:{value:a}});return o.uploadFeet=(e,t)=>{i.image=e,i.needsUpdate=!0,a.image=t,a.needsUpdate=!0},o}var gi=class extends Rr{constructor(e,t){super(e,Hn,hi(e.gfx,t,e.alphaU,e.root))}uploadSnapshots(){super.uploadSnapshots();let e=on+12288;this.draw.uploadFeet(this.npc.past.subarray(on,e),this.npc.present.subarray(on,e))}spawn(e,t,n,r,i,a,o){let{health:s,speedScale:c}=zr(o);this.npc.room(9),this.npc.stage[this.npc.stageN]=17,this.npc.stageF.set([e,t,n,r,i,a,s,c],this.npc.stageN+1),this.npc.stageN+=9}},_i=[[0,0,0,0],[.31,.14,0,0],[.47,.1,0,0],[.477,.19,.11,0],[.477,.19,-.11,0],[.25,.27,.14,0],[.25,.27,-.14,0],[.03,.04,.16,-1],[.03,.04,-.16,1],[-.25,-.03,0,0]],vi=[.23,.19,.24],yi=[.2,.16,.21],bi=[.32,.24,.28],xi=[.76,.43,.19],Si=[.29,.17,.23],Ci=[.39,.29,.34],wi=[.44,.27,.34],Ti=[[[0,0,1],[-1,-1,1],[1,-1,1],[1,1,1],[-1,1,1]],[[0,0,-1],[1,-1,-1],[-1,-1,-1],[-1,1,-1],[1,1,-1]],[[1,0,0],[1,-1,1],[1,-1,-1],[1,1,-1],[1,1,1]],[[-1,0,0],[-1,-1,-1],[-1,-1,1],[-1,1,1],[-1,1,-1]],[[0,1,0],[-1,1,1],[1,1,1],[1,1,-1],[-1,1,-1]],[[0,-1,0],[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1]]];function Ei(e){let t=[],n=[],r=[],i=[],a=[];function o(e,o,s){let c=e[0],l=e[1],u=e[2],d=l[0]-c[0],f=l[1]-c[1],p=l[2]-c[2],m=u[0]-c[0],h=u[1]-c[1],g=u[2]-c[2],_=f*g-p*h,v=p*m-d*g,y=d*h-f*m,b=Math.hypot(_,v,y),x=He(s),S=t.length/3;for(let a of e)t.push(...a),n.push(_/b,v/b,y/b),r.push(o),i.push(...x);for(let t=1;t<e.length-1;t++)a.push(S,S+t,S+t+1)}function s(e,t,n){for(let r of Ti)o(r.slice(1).map(e=>e.map((e,n)=>e*t[n]*.5)),e,n)}function c(e,t,n,r,i,a=i){let s=t.map(e=>e.slice()),c=s[1].map((e,t)=>e-s[0][t]),l=s[2].map((e,t)=>e-s[0][t]);[c[1]*l[2]-c[2]*l[1],c[2]*l[0]-c[0]*l[2],c[0]*l[1]-c[1]*l[0]][n]<0&&s.splice(1,s.length-1,...s.slice(1).reverse());let u=e=>s.map(t=>t.map((t,r)=>t+(r===n?e:0))),d=u(r*.5),f=u(-r*.5);o(d,e,a),o([f[0],...f.slice(1).reverse()],e,i);for(let t=0;t<s.length;t++){let n=(t+1)%s.length;o([d[t],f[t],f[n],d[n]],e,i)}}s(0,[.55,.36,.34],vi),s(1,[.32,.29,.33],yi),s(2,[.11,.1,.19],bi),s(3,[.025,.045,.045],xi),s(4,[.025,.045,.045],xi);for(let e of[1,-1])c(e>0?5:6,[[0,0,-.09],[0,0,.09],[0,.34,e*.035]],0,.09,vi,wi);let l=[[.18,0],[.44,.58],[.18,1.36],[0,1.06],[-.45,1.02],[-.3,.76],[-.61,.64],[-.41,.45],[-.5,.08],[-.28,0]];for(let e of[1,-1]){let t=e>0?7:8;c(t,l.map(([t,n])=>[t,0,n*e]),1,.045,Si);let n=[[l[0],l[1]],[l[1],l[2]],[l[0],l[4]],[l[0],l[6]]];for(let r=0;r<n.length;r++){let[i,a]=n[r],o=a[0]-i[0],s=a[1]-i[1],l=.018/Math.hypot(o,s),u=-s*l,d=o*l;c(t,[[i[0]+u,i[1]+d],[a[0]+u,a[1]+d],[a[0]-u,a[1]-d],[i[0]-u,i[1]-d]].map(([t,n])=>[t,0,n*e]),1,.075+r*.008,Ci)}}return c(9,[[.06,0,-.16],[-.36,0,0],[.06,0,.16]],1,.035,Si),new X(e,{position:{size:3,data:new Float32Array(t)},normal:{size:3,data:new Float32Array(n)},part:{size:1,data:new Float32Array(r)},color:{size:3,data:new Float32Array(i)},index:{data:new Uint32Array(a)}})}var Di=F+`
in vec3 position;
in vec3 normal;
in float part;
in vec3 color;  // the part's own, baked in at build time (already linear)
in vec4 iPrev1;
in vec4 iPrev2;
in vec4 iCur1; // xyz: position, w: unwrapped heading
in vec4 iCur2; // phase, scale, alive, generation
uniform float uAlpha;
out vec3 vNormal;
out vec3 vWorld;
out vec3 vColor;

// part offset (xyz) + flap sign (w), indexed by the per-vertex part id
const vec4 cParts[${_i.length}] = vec4[${_i.length}](
${_i.map(e=>`    vec4(${e[0].toFixed(3)}, ${e[1].toFixed(3)}, ${e[2].toFixed(3)}, ${e[3].toFixed(1)})`).join(`,
`)}
);

void main() {
    if (iCur2.z == 0.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
    float a = iPrev2.w == iCur2.w ? uAlpha : 1.0;
    vec4 pose = mix(iPrev1, iCur1, a);
    float phase = mix(iPrev2.x, iCur2.x, a);
    int pid = int(part + 0.5);
    vec4 pd = cParts[pid];

    float ang = sin(phase) * pd.w * ${Mn.toFixed(2)};
    float fs = sin(ang), fc = cos(ang);

    // hinge the wing about the fore-aft axis, then heading, then place
    vec3 v = position;
    v = vec3(v.x, v.y * fc - v.z * fs, v.y * fs + v.z * fc) + pd.xyz;
    vec3 n = normal;
    n = vec3(n.x, n.y * fc - n.z * fs, n.y * fs + n.z * fc);

    float s = sin(pose.w), c = cos(pose.w);
    v = vec3(v.x * c - v.z * s, v.y, v.x * s + v.z * c);
    n = vec3(n.x * c - n.z * s, n.y, n.x * s + n.z * c);

    vec3 wpos = pose.xyz + v * iCur2.y;
    vNormal = n;
    vWorld = wpos;
    vColor = color;
    gl_Position = projectionMatrix * viewMatrix * vec4(wpos, 1.0);
}
`,Oi=j+M+`
in vec3 vNormal;
in vec3 vWorld;
in vec3 vColor;
out vec4 fragColor;
void main() {
    fragColor = vec4(gammaOut(vColor * diffuseLightFree(vNormal, vWorld)), 1.0);
}
`;function ki(e,t,n,r){return new Lr(e,Ei(e.gl),Di,Oi,t,n,8,96,r)}var Ai=128,ji=512,Mi=8,Ni=1536,Pi=1337,Fi=.4,Ii=.32,Li=16;function Ri(){return G+Li}var zi=10,Bi=2.5,Vi=.9,Hi=.9,Ui=.55;function Wi(e,t){let n=new Float32Array(t*t);for(let t=0;t<n.length;t++)n[t]=e();return(e,r)=>{let i=Math.floor(e),a=Math.floor(r),o=e-i,s=r-a;o=o*o*(3-2*o),s=s*s*(3-2*s);let c=i%t,l=(i+1)%t,u=a%t,d=(a+1)%t,f=n[c+u*t],p=n[l+u*t],m=n[c+d*t],h=n[l+d*t];return f+(p-f)*o+(m-f+(f-p+h-m)*o)*s}}function Gi(e,t){let n=new Float32Array(t*t);for(let t=0;t<n.length;t++)n[t]=e[t]?0:1e9;let r=(e,r)=>n[(e+t)%t+(r+t)%t*t];for(let e=0;e<2;e++){for(let e=0;e<t;e++)for(let i=0;i<t;i++){let a=i+e*t;n[a]=Math.min(n[a],r(i-1,e)+1,r(i,e-1)+1,r(i-1,e-1)+1.4,r(i+1,e-1)+1.4)}for(let e=t-1;e>=0;e--)for(let i=t-1;i>=0;i--){let a=i+e*t;n[a]=Math.min(n[a],r(i+1,e)+1,r(i,e+1)+1,r(i+1,e+1)+1.4,r(i-1,e+1)+1.4)}}return n}function Ki(e,t){let n=ji,r=n/Ai,i=new Uint8Array(n*n),a=new Uint8Array(n*n);for(let o=0;o<n;o++){let s=Math.floor(o/r);for(let c=0;c<n;c++){let l=+(e[Math.floor(c/r)+s*Ai]>=t);i[c+o*n]=l,a[c+o*n]=1-l}}let o=Gi(i,n),s=Gi(a,n),c=Ni/n,l=new Uint8Array(n*n);for(let e=0;e<l.length;e++){let t=(o[e]>0?o[e]-.5:-(s[e]-.5))*c;l[e]=Math.max(0,Math.min(255,Math.round(128+t*Mi)))}return l}function qi(e,t){let n=Ai,r=Kt(e),i=[12,24,48],a=[.5,1,.25],o=[];for(let e=0;e<i.length;e++)o.push(Wi(r,i[e]));let s=new Float32Array(16384);for(let e=0;e<n;e++)for(let t=0;t<n;t++){let r=0;for(let s=0;s<o.length;s++)r+=a[s]*o[s](t*i[s]/n,e*i[s]/n);s[t+e*n]=r}let c=Float32Array.from(s).sort(),l=e=>c[Math.min(16383,Math.floor(16384*(1-e)))],u=Ki(s,l(t)),d=Ki(s,l(t*Fi)),f=new Uint8Array(ji*ji*2);for(let e=0;e<u.length;e++)f[e*2]=u[e],f[e*2+1]=d[e];return f}var Ji=F+`
uniform vec3 cameraPosition;
uniform float uCloudY;
uniform float uThick;
uniform float uSpan;
in vec2 aPos;
out vec2 vWorldXZ;
void main() {
    // The quad follows the camera in x/z and sits on whichever FACE of the
    // layer the camera is outside of — its floor from below, its ceiling from
    // above — so it is always the face a ray enters through. The source only
    // ever did the first: that game's camera could not get above its clouds
    // and this one's can (fly mode has no ceiling), and the failure is silent
    // — the whole sky simply stops being drawn.
    float top = uCloudY + uThick * 1.3 + 1.0;
    float entryY = cameraPosition.y > top ? top : uCloudY;
    vWorldXZ = cameraPosition.xz + aPos * uSpan;
    gl_Position = projectionMatrix * viewMatrix * vec4(vWorldXZ.x, entryY, vWorldXZ.y, 1.0);
}
`,Yi=j+`
in vec2 vWorldXZ;
uniform sampler2D uMap;      // RG8 signed distance, REPEAT + LINEAR
uniform vec3 cameraPosition;
uniform float uDrift;        // blocks of offset, wrapped mod the tile period
uniform float uCloudY;       // the layer's floor, and the quad's height
uniform float uPeriod;       // blocks per repeat of the map
uniform float uThick;
uniform float uRound;
uniform float uSpan;
uniform vec4 uColor;         // rgb tint, a = base opacity
out vec4 fragColor;

const float SDF_SCALE = 8.0; // byte = 128 + d * 8; see the JS constant above

// The two tiers' 2D signed distances, in blocks, at a world xz.
vec2 fieldSD(vec2 xz) {
    return (texture(uMap, (xz + vec2(uDrift, 0.0)) / uPeriod).rg * 255.0 - 128.0) / SDF_SCALE;
}

// Rounded extrusion of a 2D distance into a y0..y0+th slab. The radius is
// capped against the thickness so a thin slab stays a slab instead of
// collapsing into a lens.
float slab(float d2, float y, float y0, float th) {
    float r = min(uRound, th * 0.3);
    vec2 w = vec2(d2 + r, abs(y - y0 - th * 0.5) - (th * 0.5 - r));
    return min(max(w.x, w.y), 0.0) + length(max(w, vec2(0.0))) - r;
}

float map(vec3 p) {
    vec2 sd = fieldSD(p.xz);
    float d = slab(sd.r, p.y, uCloudY, uThick);
    // Upper tier: lifted 0.7 of the thickness and 0.6 as thick, so it tops out
    // at uCloudY + 1.3 * uThick — which is the number tMax below is built on.
    return min(d, slab(sd.g, p.y, uCloudY + uThick * 0.7, uThick * 0.6));
}

void main() {
    // Which face we are entering through, and therefore which way the ray
    // runs. Above the layer it enters the ceiling and marches DOWN; below, the
    // floor and up. Inside the slab neither is true — the quad is not in front
    // of the camera at all — and that band is eleven blocks thick above the
    // world's ceiling, so it is a place you pass through rather than fly in.
    float top = uCloudY + uThick * 1.3 + 1.0;
    bool above = cameraPosition.y > top;
    vec3 entry = vec3(vWorldXZ.x, above ? top : uCloudY, vWorldXZ.y);
    vec3 rd = normalize(entry - cameraPosition);
    if (above ? rd.y >= -0.002 : rd.y <= 0.002) discard;
    float t = length(entry - cameraPosition);
    // The ray ends when it leaves through the far face.
    float exitY = above ? uCloudY - 1.0 : top;
    float tMax = min((exitY - cameraPosition.y) / rd.y, t + uSpan);

    bool hit = false;
    vec3 p;
    for (int i = 0; i < 48; i++) {
        p = cameraPosition + rd * t;
        float d = map(p);
        if (d < 0.12) { hit = true; break; }
        // The step floor grows with distance: 48 iterations then cover a range
        // that scales with how far off the fragment is, instead of running out
        // partway to a horizon this world actually has.
        t += max(d * 0.9, 0.35 + t * 0.004);
        if (t > tMax) break;
    }
    if (!hit) discard;

    // Fade out before the quad's own edge, so the layer ends in haze rather
    // than in a rim. Derived from the span so it follows the map's far plane.
    float fade = 1.0 - smoothstep(uSpan * 0.58, uSpan * 0.86, distance(p.xz, cameraPosition.xz));
    if (fade <= 0.0) discard;

    // Normal from the field gradient: white tops rolling over to blue-grey
    // undersides, which is the whole of the shading and all it needs.
    vec2 e = vec2(0.6, 0.0);
    vec3 n = normalize(vec3(map(p + e.xyy) - map(p - e.xyy),
                            map(p + e.yxy) - map(p - e.yxy),
                            map(p + e.yyx) - map(p - e.yyx)));
    float up = clamp(n.y * 0.5 + 0.5, 0.0, 1.0);
    vec3 shade = mix(vec3(0.60, 0.65, 0.78), vec3(1.0), up * up);
    fragColor = colorGrade(vec4(uColor.rgb * shade, uColor.a * fade));
}
`,Xi=class{constructor(e){this.gfx=e;let t=e.gl,n=new O(t,{image:qi(Pi,Ii),width:ji,height:ji,internalFormat:t.RG8,format:t.RG,type:t.UNSIGNED_BYTE,generateMipmaps:!1,minFilter:t.LINEAR,magFilter:t.LINEAR,wrapS:t.REPEAT,wrapT:t.REPEAT,flipY:!1}),r=e.makeProgram({vertex:Ji,fragment:Yi,lit:!1,transparent:!0,depthWrite:!1,cullFace:!1,uniforms:{uMap:{value:n},uDrift:{value:0},uCloudY:{value:G+Li},uPeriod:{value:Ni},uThick:{value:zi},uRound:{value:Bi},uSpan:{value:600},uColor:{value:[1,1,1,Vi]}}}),i=new X(t,{aPos:{size:2,data:new Float32Array([-1,-1,1,-1,-1,1,1,1])}});this.mesh=new A(t,{geometry:i,program:r,mode:t.TRIANGLE_STRIP,frustumCulled:!1}),this.mesh.renderOrder=-10,this.mesh.setParent(e.scene),e.on(`cull`,()=>{let t=r.uniforms,n=t.uCloudY.value+t.uThick.value*1.3+1;this.mesh.renderOrder=e.viewCamera.position.y>n?-4:-10}),this.drift=0,e.setCloudField(n,G+Li,0,Ni,Ui)}update(e){this.mesh.visible=!this.gfx.halloweenSkyActive&&this.gfx.lightUniforms.uBackroomsLighting.value<.5,this.drift=(this.drift+e*Hi)%Ni;let t=this.mesh.program.uniforms;t.uDrift.value=this.drift,t.uCloudY.value=G+Li,t.uSpan.value=this.gfx.camera.far*.92,this.gfx.setCloudField(null,t.uCloudY.value,this.drift,Ni,Ui)}},Zi=class extends Rr{constructor(e,t){super(e,Bn,ki(e.gfx,t,e.alphaU,e.root))}sweep(e,t,n,r,i,a,o,s=0){let c=Math.hypot(r,i,a);if(c<1e-9||o<0)return null;r/=c,i/=c,a/=c;let l=this.npc.past,u=this.npc.present,d=null,f=o;for(let o=0;o<this.count;o++){let c=cn+o*8;if(!u[c+6])continue;let p=u[c+7],m=l[c+7]===p?this.npc.alphaU.value:1,h=l[c]+(u[c]-l[c])*m,g=l[c+1]+(u[c+1]-l[c+1])*m,_=l[c+2]+(u[c+2]-l[c+2])*m,v=l[c+3]+(u[c+3]-l[c+3])*m,y=l[c+4]+(u[c+4]-l[c+4])*m,b=Rn(e,t,n,r,i,a,h,g,_,v,y,u[c+5],s);Number.isFinite(b)&&b<=f&&(f=b,d={body:4,slot:o,gen:p,dist:b,nx:-r,ny:-i,nz:-a})}return d}writeInput(e){let t=ln,n=this.npc.gfx.camera;if(e.fill(0,t,t+56),e[t+6]=Ri(),!n)return;n.updateMatrixWorld(),n.updateFrustum();let r=n.worldMatrix;e[t]=r[12],e[t+1]=r[13],e[t+2]=r[14],e[t+3]=1;let i=Math.hypot(r[8],r[10]);e[t+4]=i>1e-4?-r[8]/i:r[2],e[t+5]=i>1e-4?-r[10]/i:-r[0];let a=this.npc.gfx.viewCamera,o=a&&a!==n?[n,a]:[n];e[t+7]=o.length-1;for(let n=0;n<o.length;n++){let r=o[n];n&&(r.updateMatrixWorld(),r.updateFrustum());for(let i=0;i<6;i++){let a=r.frustum[i],o=t+8+n*24+i*4;e[o]=a[0],e[o+1]=a[1],e[o+2]=a[2],e[o+3]=a.constant}}}populate(e){this.npc.room(2),this.npc.stage[this.npc.stageN++]=18,this.npc.stage[this.npc.stageN++]=e}populateRoost({count:e,seed:t=1,x:n,y:r,z:i,radiusX:a,radiusY:o,radiusZ:s}){let c=this.npc;c.room(9);let l=c.stageN;c.stage[l]=23,c.stage[l+1]=e,c.stage[l+2]=t,c.stageF.set([n,r,i,a,o,s],l+3),c.stageN+=9}},Qi=class{constructor(e,t){this.gfx=e,this.root=new Ye,this.root.setParent(e.scene),this.alphaU={value:0},this.creepers=new Wr(this,t),this.villagers=new ti(this,t),this.verity=new Ir(this,Lr),this.soldiers=new ci(this,t),this.spiders=new gi(this,t),this.bats=new Zi(this,t),this.populations=[this.creepers,this.villagers,this.soldiers,this.spiders,this.bats],this.past=new Float32Array(Qt()/4),this.present=new Float32Array(Qt()/4),this.future=new Float32Array(Qt()/4),this.futureReady=!0,this.clock=0,this.discardEvents=!1,this.worker=new Worker(new URL(`npc.worker-DtPm_lMo.js`,import.meta.url).href,{type:`module`}),this.worker.onmessage=e=>{this.verity.message(e.data)||(e.data.cam===void 0?(this.future=new Float32Array(e.data.buffer),this.futureReady=!0):this.onCamReturn?.(e.data.cam))},this.onCamReturn=null,this.stage=new Uint32Array(sn),this.stageF=new Float32Array(this.stage.buffer),this.stageN=0,this.playerOn=0,this.playerX=0,this.playerY=0,this.playerZ=0,this.playerEyeY=0,this.playerFX=0,this.playerFY=0,this.playerFZ=-1,this.threatSource=null,this.onBoom=null,this.onPoof=null,this.onShockDeath=null,this.onIgnited=null,this.onShot=null,this.onPlayerAttack=null,this.onInfected=null}get creeperN(){return this.creepers.count}get villagerN(){return this.villagers.count}get soldierN(){return this.soldiers.count}get spiderN(){return this.spiders.count}get batN(){return this.bats.count}sendGameRules(e){this.worker.postMessage({gameRules:e})}init(){}setPlayer(e,t,n,r,i,a,o,s=t+1.62){this.playerX=e,this.playerY=t,this.playerZ=n,this.playerFX=r,this.playerFY=i,this.playerFZ=a,this.playerOn=+!!o,this.playerEyeY=s}writeBatView(e){return this.bats.writeInput(e)}spawnSpider(e,t,n,r,i,a,o){return this.spiders.spawn(e,t,n,r,i,a,o)}populateBats(e){return this.bats.populate(e)}room(e){if(this.stageN+e<=this.stage.length)return;let t=this.stage.length;for(;t<this.stageN+e;)t*=2;let n=new Uint32Array(t);n.set(this.stage.subarray(0,this.stageN)),this.stage=n,this.stageF=new Float32Array(n.buffer)}spawnCreeper(e,t,n,r,i){return this.creepers.spawn(e,t,n,r,i)}spawnZombie(e,t,n,r){return this.villagers.spawnZombie(e,t,n,r)}spawnVillager(e,t,n,r){return this.villagers.spawn(e,t,n,r)}spawnSoldier(e,t,n,r){return this.soldiers.spawn(e,t,n,r)}shoot(e,t,n,r,i=!1){this.room(6),this.stage[this.stageN]=11,this.stage[this.stageN+1]=e,this.stage[this.stageN+2]=t,this.stage[this.stageN+3]=n,this.stage[this.stageN+4]=r,this.stage[this.stageN+5]=+!!i,this.stageN+=6}populate(e,t,n,r,i,a,o){let s=o.length>>1;this.room(8+s*2),this.stage[this.stageN]=3,this.stage[this.stageN+1]=e,this.stage[this.stageN+2]=t,this.stage[this.stageN+3]=n,this.stage[this.stageN+4]=r,this.stageF[this.stageN+5]=i,this.stageF[this.stageN+6]=a,this.stage[this.stageN+7]=s;for(let e=0;e<s*2;e++)this.stageF[this.stageN+8+e]=o[e];this.stageN+=8+s*2}blast(e,t,n,r){this.room(5),this.stage[this.stageN]=4,this.stageF[this.stageN+1]=e,this.stageF[this.stageN+2]=t,this.stageF[this.stageN+3]=n,this.stageF[this.stageN+4]=r,this.stageN+=5}jackohBlast(e,t,n,r){this.room(_n[20]);let i=this.stageN;this.stage[i]=20,this.stageF[i+1]=e,this.stageF[i+2]=t,this.stageF[i+3]=n,this.stageF[i+4]=r,this.stageN+=_n[20]}jackohWave(e,t,n,r,i){this.room(_n[21]);let a=this.stageN;this.stage[a]=21,this.stageF[a+1]=e,this.stageF[a+2]=t,this.stageF[a+3]=n,this.stageF[a+4]=r,this.stageF[a+5]=i,this.stageN+=_n[21]}shockwave(e,t,n,r,i){this.room(6);let a=this.stageN;this.stage[a]=13,this.stageF[a+1]=e,this.stageF[a+2]=t,this.stageF[a+3]=n,this.stageF[a+4]=r,this.stageF[a+5]=i,this.stageN+=6}ignite(e,t){return this.creepers.ignite(e,t)}martyr(e,t,n){return this.villagers.martyr(e,t,n)}martyrState(e,t){return this.villagers.martyrState(e,t)}water(e,t,n){this.room(4),this.stage[this.stageN]=6,this.stage[this.stageN+1]=e,this.stage[this.stageN+2]=t,this.stage[this.stageN+3]=+!!n,this.stageN+=4}clear(){this.verity.clear(),this.room(1),this.stage[this.stageN++]=9,this.discardEvents=!0}cellRuns(e,t){let n=0;for(;n<t;){let r=Math.min(un,t-n),i=r*2;this.room(2+i),this.stage[this.stageN]=7,this.stage[this.stageN+1]=r,this.stage.set(e.subarray(n*2,(n+r)*2),this.stageN+2),this.stageN+=2+i,n+=r}}cells(e,t){this.cellRuns(e,t)}damage(e,t){this.cellRuns(e,t)}stamp(e,t,n,r,i=0){let a=Vt[e];a!==void 0&&(this.room(6),this.stage[this.stageN]=8,this.stage[this.stageN+1]=a,this.stageF[this.stageN+2]=t,this.stage[this.stageN+3]=n,this.stageF[this.stageN+4]=r,this.stage[this.stageN+5]=i&3,this.stageN+=6)}snapshot(e,t,n){let r=[e];t&&r.push(t.buffer),n&&r.push(n.buffer),this.worker.postMessage({snapshot:e,spots:t||null,wet:n||null},r)}dropWorld(){let e=0,t=0;for(;e<this.stageN;){let n=this.stage[e],r=n===7?2+this.stage[e+1]*2:n===3?8+this.stage[e+7]*2:_n[n];n===9&&(t!==e&&this.stage.copyWithin(t,e,e+r),t+=r),e+=r}this.stageN=t,this.discardEvents=!0}update(e,t){this.clock+=e,this.clock>.016666666666666666&&(this.clock%=en,this.rotate(t)),this.alphaU.value=Math.min(1,this.clock/en);for(let e of this.populations)e.updateVisibility();this.verity.updateVisibility()}rotate(e){if(!this.futureReady)return;let t=this.past;this.past=this.present,this.present=this.future,this.future=t,this.futureReady=!1;let n=new Uint32Array(this.present.buffer);for(let e of this.populations)e.readHeader(n);o.value=this.creepers.liveCount,xe.value=this.populations.reduce((e,t)=>e+t.liveCount,0),this.readEvents(n,this.present),this.uploadSnapshots();let r=new Uint32Array(this.future.buffer),i=this.future,a=this.splitAt(sn);r.set(this.stage.subarray(0,a),32),r[2]=a,i[1]=en*e,r[3]=this.threatSource?this.threatSource(r,i,vn,$t):0,i[4]=this.playerX,i[5]=this.playerY,i[6]=this.playerZ,i[22]=this.playerEyeY||0,i[7]=this.playerFX,i[8]=this.playerFY,i[9]=this.playerFZ,r[10]=this.playerOn;for(let e of this.populations)e.writeInput(i);let s=this.stageN-a;s>0&&this.stage.copyWithin(0,a,this.stageN),this.stageN=s;let c=this.future.buffer;this.worker.postMessage({buffer:c},[c])}readEvents(e,t){let n=e[15];if(this.discardEvents){this.discardEvents=!1;return}let r=mn+n,i=mn;for(;i<r;){let n=e[i];if(n===1)this.onBoom?.(t[i+1],t[i+2],t[i+3],t[i+4]);else if(n===2)this.onPoof?.(t[i+1],t[i+2],t[i+3],e[i+4],e[i+5]);else if(n===5)this.onShockDeath?.(t[i+1],t[i+2],t[i+3],t[i+4],t[i+5],t[i+6],e[i+7]);else if(n===3)this.onIgnited?.(t[i+1],t[i+2],t[i+3],t[i+4]);else if(n===4)this.onShot?.(t[i+1],t[i+2],t[i+3],t[i+4],t[i+5],t[i+6],e[i+7]);else if(n===8)this.onPlayerAttack?.(e[i+4],t[i+1],t[i+2],t[i+3]);else if(n===9)this.onInfected?.(e[i+4],t[i+1],t[i+2],t[i+3]);else if(!this.verity.event(n,e,t,i))break;i+=pn[n]}}uploadSnapshots(){this.verity.uploadSnapshots();for(let e of this.populations)e.uploadSnapshots()}sweepCreeper(e,t,n,r,i,a,o,s=0,c=-1,l=0){return this.creepers.sweep(e,t,n,r,i,a,o,s,c,l)}sweepVillager(e,t,n,r,i,a,o,s=0,c=-1,l=0){return this.villagers.sweep(e,t,n,r,i,a,o,s,c,l)}sweepSoldier(e,t,n,r,i,a,o,s=0,c=-1,l=0){return this.soldiers.sweep(e,t,n,r,i,a,o,s,c,l)}sweepBats(e,t,n,r,i,a,o,s=0){return this.bats.sweep(e,t,n,r,i,a,o,s)}sweepAny(e,t,n,r,i,a,o,s=0){let c=null;for(let l of this.populations){let u=l.sweep(e,t,n,r,i,a,c?c.dist:o,s);u&&(u.body=l.snapshot.body,c=u)}return c}pickCreeper(e,t,n,r,i,a,o){return this.creepers.sweep(e,t,n,r,i,a,o,0)}creeperPose(e,t,n){return this.creepers.pose(e,t,n)}villagerPose(e,t,n){return this.villagers.pose(e,t,n)}soldierPose(e,t,n){return this.soldiers.pose(e,t,n)}splitAt(e){if(this.stageN<=e)return this.stageN;let t=0;for(;t<this.stageN;){let n=this.stage[t],r=n===7?2+this.stage[t+1]*2:n===3?8+this.stage[t+7]*2:_n[n];if(!r||t+r>e)break;t+=r}return t}},$i=.2,ea=class{constructor(e,t,n,r){this.sim=e,this.debris=t,this.effects=n,this.npc=r,this.entities=null,this.singularity=null,this.nukes=null,this.rockets=null,this.jackoh=null,this.onDamage=null,this.onExplode=null,e.onRestore=e=>t.restore(e),e.onDamage=(e,t,n)=>this.onDamage?.(e,t,n),e.onDestroyed=e=>{ye.value+=e},e.onChain=(e,t,n,r,i)=>this.entities?.spawnFused(e,t,n,r,i),e.addRelay(t)}explode(e,t,r,i,a={}){if(a.restore){this.sim.restore(e,t,r,i);return}if(a.water){this.sim.explode(e,t,r,i,!1,4),Gn(e,t,r);return}let o=!!a.hole,s=a.jackoh?16:o?2:0;a.damageScenery!==!1&&this.sim.explode(e,t,r,i,!!a.nuke,s),this.debris.explode(e,t,r,i,!!a.nuke,!!a.rocket,o||!!a.noSmoke||!!a.jackoh),a.jackoh&&this.jackoh?.open(e,t,r,i),a.nuke&&this.nukes?.open(e,t,r,i),a.rocket&&this.rockets?.impact(e,t,r,i,a.rocket),o&&(this.debris.hole(e,t,r,i),this.singularity?.open(e,t,r,i)),a.jackoh?this.npc.jackohBlast(e,t,r,i):o||this.npc.blast(e,t,r,i),a.sound===`rocket-heavy`?ur(e,t,r):nr(i,e,t,r,!!a.nuke),this.effects.blast(e,t,r,i,!!a.nuke),n.explosion(),this.onExplode?.(e,t,r,i),this.entities?.onExplosion(e,t,r,i)}penetrate(e,t,n,r,i,a,o,s){let c=new Set,l=0,u=(e,t,n)=>{if(t<0)return;let r=`${e},${t},${n}`;c.has(r)||(c.add(r),this.sim.world.solidAt(e,t,n)&&(this.sim.erase(ut(e,t,n)),l++))},d=Math.max(1,Math.round(o*3)),f=0,p=0,m=0,h=!0;for(let c=0;c<=d;c++){let l=c/d,g=$i+o*l,_=Math.floor(e+r*g),v=Math.floor(t+i*g),y=Math.floor(n+a*g);h||(_!==f&&u(_,p,m),v!==p&&u(_,v,m)),f=_,p=v,m=y,h=!1;let b=s*(1-l),x=Math.floor(b);for(let e=-x;e<=x;e++)for(let t=-x;t<=x;t++)for(let n=-x;n<=x;n++)e*e+t*t+n*n>b*b||u(_+e,v+t,y+n)}return l&&this.debris.puff(e,t,n,1.6,14),l}get pending(){return this.sim.pending}abort(){this.sim.abort(),this.singularity?.clear(),this.nukes?.clear(),this.rockets?.clear(),this.jackoh?.clear()}},ta=16,na=.9,ra=1.5,ia=.14,aa=.15,oa=70,sa=2.5,ca=F+`
uniform vec3 cameraPosition;
uniform vec3 uCenter;
uniform float uSize;
in vec2 aSide;
out vec2 vQuad;
void main() {
    vec3 f = normalize(cameraPosition - uCenter);
    // Straight above or below it the world up axis is useless as a reference
    // and the frame collapses; swap it for one that cannot be. Same guard the
    // laser's flare needs, and it earns its keep here — flying over one of
    // these and looking down is a thing people will do on purpose.
    vec3 ref = abs(f.y) > 0.99 ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0);
    vec3 r = normalize(cross(ref, f));
    vec3 u = cross(f, r);
    vQuad = aSide;
    vec3 p = uCenter + (r * aSide.x + u * aSide.y) * uSize;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,la=j+`
${N}
in vec2 vQuad;
uniform float uTime;
uniform float uFade;
out vec4 fragColor;
void main() {
    float d = length(vQuad);
    if (d > 1.0) discard;

    // The horizon. One texel of feather and no more — the edge of this is the
    // sharpest thing on the screen, and softening it reads as fog rather than
    // as an edge nothing comes back over.
    float core = smoothstep(0.40, 0.36, d);

    // The accretion disc: an annulus just outside the horizon, broken into arms
    // that turn. The 1/d in the phase is what curves them — an arm at a smaller
    // radius is further round than the same arm further out, which is the whole
    // difference between a spiral and a pinwheel.
    //
    // The epsilon on x is not cosmetic: atan(0, 0) is UNDEFINED in GLSL ES, and
    // the one fragment that hits it is the centre one, whose NaN would then
    // survive being multiplied by the (1 - core) that is meant to remove it.
    float a = atan(vQuad.y, vQuad.x + 1e-6);
    float arms = 0.5 + 0.5 * sin(a * 2.0 + uTime * 6.0 - 7.0 / max(d, 0.18));
    // Squared by multiplication rather than by pow(): pow() with a negative
    // base is undefined too, and this base is negative for the whole inside of
    // the ring.
    float g = (d - 0.50) / 0.115;
    float ring = exp(-g * g);
    vec3 glow = mix(vec3(1.0, 0.52, 0.16), vec3(0.50, 0.34, 0.96),
                    smoothstep(0.42, 0.95, d))
              * ring * (0.35 + 0.65 * arms) * 2.4;

    // A veil of darkening out to the edge of the quad, so the sky around it is
    // dimmed instead of the effect stopping dead at the ring.
    float veil = smoothstep(1.0, 0.5, d) * 0.3;

    float alpha = clamp(core + veil, 0.0, 1.0) * uFade;
    // (1 - core) keeps the glow out of the horizon: light in front of the one
    // part of this that must never emit any would put a grey disc where the
    // black one goes.
    fragColor = colorGradePremultiplied(vec4(glow * uFade * (1.0 - core), alpha));
    fragColor = compositeThroughWater(fragColor, fragColor.a);
}
`;function ua(e){return new X(e,{aSide:{size:2,data:new Float32Array([-1,-1,-1,1,1,-1,1,1])}})}var da=F+`
uniform vec3 cameraPosition;
in vec2 aSide;
in vec4 iBolt; // xyz: centre, w: visual radius
out vec2 vQuad;
void main() {
    vec3 delta = cameraPosition - iBolt.xyz;
    vec3 f = length(delta) > 1e-5 ? normalize(delta) : vec3(0.0, 0.0, 1.0);
    vec3 ref = abs(f.y) > 0.99 ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0);
    vec3 r = normalize(cross(ref, f));
    vec3 u = cross(f, r);
    vQuad = aSide;
    vec3 p = iBolt.xyz + (r * aSide.x + u * aSide.y) * iBolt.w;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,fa=class{constructor(e,t,n){let r=e.gl;this.capacity=n,this.time={value:0},this.geometry=ua(r),this.inst=new Je(r,this.geometry,[`iBolt`],4,n);let i=e.makeProgram({vertex:da,fragment:la,lit:!1,transparent:!0,depthWrite:!1,cullFace:!1,uniforms:{...e.waterPass.effectUniforms,uTime:this.time,uFade:{value:1}}});i.setBlendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),this.mesh=new A(r,{geometry:this.geometry,program:i,mode:r.TRIANGLE_STRIP,frustumCulled:!1}),this.mesh.visible=!1,this.mesh.setParent(t)}write(e,t=0){this.time.value+=Math.max(0,t);let n=Math.min(e.length,this.capacity),r=this.inst.data;for(let t=0;t<n;t++){let n=e[t],i=t*4;r[i]=n.x,r[i+1]=n.y,r[i+2]=n.z,r[i+3]=.75+Math.sin(n.age*12)*.035}this.inst.upload(n),this.mesh.visible=n>0}},pa=class{constructor(e,t){this.gfx=e,this.player=t,this.list=[],this.meshes=[],this.picked=new Int32Array(ta),this.score=new Float64Array(ta),this.gl=e.gl,this.mesh(0)}mesh(e){for(;this.meshes.length<=e;){let e=this.gl,t=this.gfx.makeProgram({vertex:ca,fragment:la,lit:!1,transparent:!0,depthWrite:!1,cullFace:!1,uniforms:{...this.gfx.waterPass.effectUniforms,uCenter:{value:[0,0,0]},uSize:{value:1},uTime:{value:0},uFade:{value:0}}});t.setBlendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA);let n=new A(e,{geometry:ua(e),program:t,mode:e.TRIANGLE_STRIP,frustumCulled:!1});n.visible=!1,n.setParent(this.gfx.scene),this.meshes.push(n)}return this.meshes[e]}open(e,t,n,r){this.list.push({x:e,y:t,z:n,power:r,reach:Xe(r),age:0,voice:Wn(e,t,n,L)})}swallowAt(e,t,n,r,i=1.2){let a=!1;for(let o of this.list)o.swallowed||Math.hypot(o.x-e,o.y-t,o.z-n)>.001||(o.swallowed={from:[o.x,o.y,o.z],mouth:r,duration:i,age:0},o.voice?.stop(),a=!0);return a}clear(){for(let e=0;e<this.list.length;e++)this.list[e].voice?.stop();this.list.length=0;for(let e=0;e<this.meshes.length;e++)this.meshes[e].visible=!1}update(e){let t=this.player;for(let n=this.list.length-1;n>=0;n--){let r=this.list[n];if(r.swallowed){let t=r.swallowed;t.age+=e;let i=Math.min(1,t.age/t.duration),a=i*i*(3-2*i);r.x=t.from[0]+(t.mouth.x-t.from[0])*a,r.y=t.from[1]+(t.mouth.y-t.from[1])*a,r.z=t.from[2]+(t.mouth.z-t.from[2])*a,i>=1&&this.list.splice(n,1);continue}if(r.age+=e,r.age>=5.5){r.voice?.stop(),this.list[n]=this.list[this.list.length-1],this.list.pop();continue}let i=r.x-t.x,a=r.y-(t.y+.9),o=r.z-t.z,s=Math.hypot(i,a,o);if(s<r.reach*1.4&&s>.001){let n=oa/Math.max(sa,s)*e;t.vx+=i/s*n,t.vy+=a/s*n,t.vz+=o/s*n,s<r.reach*.5&&(t.onGround=!1)}}for(let e=0;e<this.meshes.length;e++)this.meshes[e].visible=!1;let n=this.list.length;for(let e=0;e<n;e++){let t=this.list[e],n=t.age/L;t.shut=Math.max(0,(n-.86)/ia),t.size=Math.max(ra,rt(t.reach,n)*na)*(1-t.shut*.94),t.swallowed&&(t.size*=Math.max(0,1-t.swallowed.age/t.swallowed.duration))}let r=this.pick(n);for(let e=0;e<r;e++){let t=this.list[this.picked[e]],n=t.shut,r=t.size,i=this.mesh(e),a=i.program.uniforms;a.uCenter.value[0]=t.x,a.uCenter.value[1]=t.y,a.uCenter.value[2]=t.z,a.uSize.value=r,a.uTime.value=t.age,a.uFade.value=Math.min(1,t.age/aa)*(1-n),i.visible=!0}}pick(e){let t=this.picked;if(e<=ta){for(let n=0;n<e;n++)t[n]=n;return e}let n=this.gfx.camera.position,r=this.gfx.cameraForward(),i=this.score,a=0;for(let o=0;o<e;o++){let e=this.list[o],s=e.x-n.x,c=e.y-n.y,l=e.z-n.z,u=Math.max(1,Math.sqrt(s*s+c*c+l*l)),d=e.size/u;if(s*r.x+c*r.y+l*r.z<0&&(d=-1/(1+d)),a===ta&&d<=i[a-1])continue;let f=a<ta?a:15;for(;f>0&&i[f-1]<d;)i[f]=i[f-1],t[f]=t[f-1],f--;i[f]=d,t[f]=o,a<ta&&a++}return a}},ma=[{tile:`water_balloon`,sx:.46,sy:.3,sz:.46,x:0,y:0,z:0},{tile:`water_balloon`,sx:.34,sy:.44,sz:.34,x:0,y:0,z:0},{tile:`water_balloon`,sx:.22,sy:.08,sz:.22,x:0,y:-.25,z:0},{tile:`water_balloon`,sx:.08,sy:.1,sz:.08,x:0,y:-.34,z:0},{tile:`water_balloon`,sx:.16,sy:.05,sz:.12,x:0,y:-.4,z:0}],ha=-22,ga=new Set([`tnt`,`mega`,`cluster`,`c4`].map(e=>tt[e].id)),_a=Math.PI/180,va=8,ya=5,ba=-22,xa=5,Sa=15.5,Ca=2.6,wa=.23,Ta=6,Ea=13,Da=2,Oa=5.5,ka=wa,Aa=.08,ja=.17,Ma=1.6,Na=1.28,Pa=1.15,Fa=.9,Ia=3.2,La=1.4,Ra=15,za=.35,Ba=.25,Va=1.5,Ha=0,Ua=1,Wa=2,Ga=[];Ga[Ha]={hx:.25,hz:.16,y0:.42,y1:1.22},Ga[Ua]={hx:.25,hz:.17,y0:.6,y1:1.32},Ga[Wa]={hx:.24,hz:.15,y0:.66,y1:1.26};var Ka={x:0,y:0,z:0,yaw:0},qa=class{constructor(e,t,n,r,i,a={}){this.sys=e,this.blockId=t;let o=it[t].explosive;this.power=a.power??(o.nuke?Ze(Math.max(V,U)):o.power),this.fuse=a.fuse??o.fuse,this.isNuke=!!o.nuke,this.hole=!!o.hole,this.water=!!o.water,this.jackoh=!!o.jackoh,this.cluster=a.isBomblet?0:o.cluster??0,this.size=a.size??.98,this.bomb=!!a.bomb,this.playerLit=!!a.playerLit,this.projectileKind=ga.has(t)?`tnt`:null,this.verityPrimed=!1,this.held=!1,this.stuck=!1,this.armed=!1,this.pierceLeft=Ra,this.aimYaw=0,this.aimPitch=-Math.PI/2,this.x=n,this.y=r,this.z=i,this.vx=a.vx??(Math.random()-.5)*1.2,this.vy=a.vy??3.2,this.vz=a.vz??(Math.random()-.5)*1.2,this.age=0,this.dead=!1,this.blinkOn=!1;let s=nt[t];this.tiles=s[0]|s[1]<<8|s[2]<<16,this.isNuke?Zn(this.fuse,n,r,i):this.bomb||$n(Math.min(2.5,this.fuse),n,r,i)}aimFromVelocity(){let e=Math.hypot(this.vx,this.vz);e<1e-4&&Math.abs(this.vy)<1e-4||(this.aimYaw=Math.atan2(this.vx,this.vz),this.aimPitch=Math.atan2(this.vy,e))}bombHalfLen(){return Na*this.size*Ma*.5}slabAhead(e,t,n,r,i,a,o){for(let s=Ba;s<=o;s+=Ba){let c=Math.floor(e+r*s),l=Math.floor(t+i*s),u=Math.floor(n+a*s);if(c<0||c>=V||u<0||u>=U)return o;if(!this.sys.world.solidAt(c,l,u))return s}return o}bombStep(e){this.vy+=ha*Va*e,this.aimFromVelocity();let t=this.vx*e,n=this.vy*e,r=this.vz*e,i=Math.hypot(t,n,r);if(i<1e-6)return;let a=t/i,o=n/i,s=r/i,c=this.bombHalfLen(),l=an(this.sys.world,this.x+a*c,this.y+o*c,this.z+s*c,a,o,s,i);if(l){let e=this.x+a*(c+l.dist),t=this.y+o*(c+l.dist),n=this.z+s*(c+l.dist),r=this.slabAhead(e,t,n,a,o,s,this.pierceLeft+1);if(r<=this.pierceLeft){this.sys.boom.penetrate(e,t,n,a,o,s,r+za,La),this.pierceLeft-=r;let i=l.dist+r+za;this.x+=a*i,this.y+=o*i,this.z+=s*i;let c=Math.max(.6,1-r*.1);this.vx*=c,this.vy*=c,this.vz*=c;return}this.sys.boom.penetrate(e,t,n,a,o,s,Ia,La);let i=l.dist+Fa;this.plantAt(this.x+a*i,this.y+o*i,this.z+s*i)}else this.x+=t,this.y+=n,this.z+=r,this.y<0&&this.detonate()}plantAt(e,t,n){this.stuck=!0,this.armed=!0,this.vx=0,this.vy=0,this.vz=0,this.x=e,this.y=t,this.z=n,this.fuse=Pa,this.age=0,$n(Pa,e,t,n)}update(e){if(this.age+=e,this.fuse-=e,this.isNuke&&!this.leadPlayed&&this.fuse<=.48&&(this.leadPlayed=!0,er(this.x,this.y,this.z,Math.max(0,this.fuse))),this.stuck&&(this.vx!==0||this.vy!==0||this.vz!==0)&&(this.stuck=!1),this.bomb)!this.stuck&&!this.held&&this.bombStep(e);else if(!this.stuck&&!this.held){this.vy+=ha*e;let t=this.size/2,n=this.x+this.vx*e,r=this.y+this.vy*e,i=this.z+this.vz*e,a=this.sys.world;a.solidAt(Math.floor(n),Math.floor(this.y-t+.05),Math.floor(this.z))&&(this.vx*=-.3,n=this.x),a.solidAt(Math.floor(n),Math.floor(r-t),Math.floor(this.z))&&(this.vy<0?(this.vy=0,this.vx*=.6,this.vz*=.6,r=Math.floor(r-t)+1+t):(this.vy*=-.3,r=this.y)),a.solidAt(Math.floor(n),Math.floor(r-t+.05),Math.floor(i))&&(this.vz*=-.3,i=this.z),this.x=n,this.y=r,this.z=i}let t=this.fuse<.5?14:this.fuse<1?8:5;this.blinkOn=Math.floor(this.age*t)%2==0,this.fuse<=0&&(!this.bomb||this.armed)&&this.detonate()}detonate(){if(!this.dead&&(this.dead=!0,this.sys.boom.explode(this.x,this.y,this.z,this.power,{nuke:this.isNuke,hole:this.hole,water:this.water,jackoh:this.jackoh}),this.cluster>0))for(let e=0;e<this.cluster;e++){let t=e/this.cluster*Math.PI*2+Math.random();this.sys.spawnFused(this.blockId,this.x,this.y+.5,this.z,{power:2.6,fuse:.55+Math.random()*.9,size:.45,isBomblet:!0,vx:Math.cos(t)*(6+Math.random()*6),vy:9+Math.random()*6,vz:Math.sin(t)*(6+Math.random()*6)})}}aabb(){let e=this.size/2;return[[this.x-e,this.y-e,this.z-e],[this.x+e,this.y+e,this.z+e]]}destroy(){}},Ja=class{constructor(e,t,n,r,i,a,o,s={}){this.sys=e,this.projectileKind=`rocket`,this.held=!1,this.life=va,this.x=t,this.y=n,this.z=r,this.launcher=S[s.variant]||S[s.hole?`hole_launcher`:`rocket`],this.hole=!!this.launcher.hole,this.waterSinkId=this.hole?e.nextSpongeId++:null;let c=this.launcher.speed;this.vx=i*c+(s.vx||0)*.35,this.vy=a*c+(s.vy||0)*.35,this.vz=o*c+(s.vz||0)*.35,this.gravity=s.straight?0:this.launcher.gravity,this.age=0,this.dead=!1;let l=Math.max(.001,Math.hypot(this.vx,this.vy,this.vz));this.trailX=t-this.vx/l*.7,this.trailY=n-this.vy/l*.7,this.trailZ=r-this.vz/l*.7,this.trailCarry=0,this.exhaustSeed=Math.random()*Math.PI*2,this.flightSound=null}update(e){if(e<=0)return;if(this.age+=e,this.held){this.absorbWater(this.x,this.y,this.z),this.flightSound?.update(this.x,this.y,this.z),this.age>=this.life&&this.detonate();return}this.vy+=this.gravity*e;let t=this.x,n=this.y,r=this.z,i=t+this.vx*e,a=n+this.vy*e,o=r+this.vz*e,s=i-t,c=a-n,l=o-r,u=Math.hypot(s,c,l);if(u>1e-6){let i=s/u,a=c/u,o=l/u,d=an(this.sys.world,t,n,r,i,a,o,u+.05),f=this.sys.npc.sweepAny(t,n,r,i,a,o,u+.02,.18),p=f&&(!d||f.dist<=d.dist)?f:d;if(p&&p.dist<=u+.02){let i=Math.max(0,p.dist-.12);this.x=t+s/u*i,this.y=n+c/u*i,this.z=r+l/u*i,this.absorbWater(t,n,r),this.flightSound?.update(this.x,this.y,this.z),this.emitTrail(e),this.detonate(p===d?p:null);return}}i<0||i>=V||o<0||o>=U||a<0?this.detonate():(this.x=i,this.y=a,this.z=o,this.absorbWater(t,n,r),this.flightSound?.update(this.x,this.y,this.z),this.emitTrail(e),(this.age>=this.life||this.y>G+80)&&this.detonate())}absorbWater(e,t,n){if(this.waterSinkId===null)return;let r=this.x-e,i=this.y-t,a=this.z-n,o=Math.hypot(r,i,a),s=Math.max(1,Math.ceil(o));for(let o=0;o<=s;o++){let c=o/s;this.sys.boom.sim.sponge(this.waterSinkId,e+r*c,t+i*c,n+a*c,ya)}this.sys.boom.debris.sponge(this.waterSinkId,this.x,this.y,this.z,ya+o,.2)}releaseWater(){this.waterSinkId!==null&&(this.sys.boom.sim.sponge(this.waterSinkId,0,0,0,0),this.sys.boom.debris.sponge(this.waterSinkId,0,0,0,0,0),this.waterSinkId=null)}emitTrail(e){this.hole||this.sys.boom.rockets?.trail(this,e)}detonate(e=null){if(!this.dead){if(this.dead=!0,this.releaseWater(),this.flightSound?.stop(),this.flightSound=null,this.hole)this.sys.boom.explode(this.x,this.y,this.z,this.launcher.power,{hole:!0});else{let t=Math.max(.001,Math.hypot(this.vx,this.vy,this.vz)),n=e&&Math.hypot(e.nx,e.ny,e.nz)>.5?e:null;this.sys.boom.explode(this.x,this.y,this.z,this.launcher.power,{sound:`rocket-heavy`,rocket:{nx:n?n.nx:-this.vx/t,ny:n?n.ny:-this.vy/t,nz:n?n.nz:-this.vz/t,surface:!!e}})}}}aabb(){return[[this.x-.25,this.y-.25,this.z-.25],[this.x+.25,this.y+.25,this.z+.25]]}destroy(){this.releaseWater(),this.flightSound?.stop(),this.flightSound=null}};function Ya(e,t,n,r,i=wa,a=!1){let o=Math.floor(t-i),s=Math.floor(t+i),c=Math.floor(n-i),l=Math.floor(n+i),u=Math.floor(r-i),d=Math.floor(r+i);for(let t=c;t<=l;t++)for(let n=u;n<=d;n++)for(let r=o;r<=s;r++)if(a?e.emptySpan(r,t,n)===0:e.solidAt(r,t,n))return!0;return!1}function Xa(e,t,n,r,i,a){let o=wa,s=Math.floor(t-o),c=Math.floor(t+o),l=Math.floor(n-o),u=Math.floor(n+o),d=Math.floor(r-o),f=Math.floor(r+o);i===0?s=c=a>0?c:s:i===1?l=u=a>0?u:l:d=f=a>0?f:d;for(let t=l;t<=u;t++)for(let n=d;n<=f;n++)for(let r=s;r<=c;r++)if(e.solidAt(r,t,n))return!0;return!1}function Za(e,t){let n=e.qx,r=e.qy,i=e.qz,a=e.qw,o=t*.5;e.qx+=o*(e.spinX*a+e.spinY*i-e.spinZ*r),e.qy+=o*(-e.spinX*i+e.spinY*a+e.spinZ*n),e.qz+=o*(e.spinX*r-e.spinY*n+e.spinZ*a),e.qw+=o*(-e.spinX*n-e.spinY*r-e.spinZ*i);let s=1/Math.hypot(e.qx,e.qy,e.qz,e.qw);e.qx*=s,e.qy*=s,e.qz*=s,e.qw*=s}var Qa=class{constructor(e,t,n,r,i,a,o,s={},c={}){this.sys=e,this.projectileKind=`grenade`,this.held=!1,this.x=t,this.y=n,this.z=r;for(let t=0;t<16&&Ya(e.world,this.x,this.y,this.z);t++)this.x-=i*.05,this.y-=a*.05,this.z-=o*.05;let l=c.speed??Sa;this.vx=i*l+(s.vx||0)*.55,this.vy=a*l+(c.loft??2.7)+(s.vy||0)*.35,this.vz=o*l+(s.vz||0)*.55,this.age=0,this.fuse=c.fuse??Ca,this.impact=!!c.impact,this.model=c.model||`hand_grenade`,this.radius=wa,this.power=c.power??xa,this.dead=!1,this.blinkOn=!1,this.qx=0,this.qy=0,this.qz=0,this.qw=1,this.spinX=o*12,this.spinY=(Math.random()-.5)*3,this.spinZ=-i*12,this.lastSlot=-1,this.lastGen=0,this.creeperHitCooldown=0}syncSurfaceSpin(e,t,n,r){let i=this.vx*e+this.vy*t+this.vz*n,a=this.vx-e*i,o=this.vy-t*i,s=this.vz-n*i,c=(t*s-n*o)/this.radius,l=(n*a-e*s)/this.radius,u=(e*o-t*a)/this.radius,d=Math.hypot(c,l,u);if(d>40){let e=40/d;c*=e,l*=e,u*=e}this.spinX+=(c-this.spinX)*r,this.spinY+=(l-this.spinY)*r,this.spinZ+=(u-this.spinZ)*r}integrateOrientation(e){Za(this,e)}update(e){if(e<=0)return;this.age+=e,this.fuse-=e,this.creeperHitCooldown=Math.max(0,this.creeperHitCooldown-e),this.held||this.move(e);let t=.998**(e*60);this.spinX*=t,this.spinY*=t,this.spinZ*=t,this.integrateOrientation(e);let n=this.fuse<.5?14:this.fuse<1?8:4;this.blinkOn=this.fuse<1&&Math.floor(this.age*n)%2==0,(this.fuse<=0||this.y<-2)&&this.detonate()}move(e){let t=Math.max(Math.abs(this.vx*e),Math.abs(this.vy*e),Math.abs(this.vz*e)),n=Math.min(24,Math.max(1,Math.ceil(t/.18))),r=e/n,i=this.sys.world;for(let e=0;e<n;e++){let e=this.x,t=this.y,n=this.z;this.vy+=ba*r;let a=this.x+this.vx*r;if(Ya(i,a,this.y,this.z,this.radius)){if(this.impact){this.detonate();return}this.syncSurfaceSpin(this.vx>0?-1:1,0,0,.55),this.vx*=-.46}else this.x=a;let o=this.y+this.vy*r;if(Ya(i,this.x,o,this.z,this.radius)){if(this.impact){this.detonate();return}this.syncSurfaceSpin(0,this.vy<0?1:-1,0,.68),Math.abs(this.vy)>1.15?this.vy*=-.4:this.vy=0;let e=.2**r;this.vx*=e,this.vz*=e}else this.y=o;let s=this.z+this.vz*r;if(Ya(i,this.x,this.y,s,this.radius)){if(this.impact){this.detonate();return}this.syncSurfaceSpin(0,0,this.vz>0?-1:1,.55),this.vz*=-.46}else this.z=s;this.x<this.radius&&(this.syncSurfaceSpin(1,0,0,.55),this.x=this.radius,this.vx=Math.abs(this.vx)*.45),this.x>V-this.radius&&(this.syncSurfaceSpin(-1,0,0,.55),this.x=V-this.radius,this.vx=-Math.abs(this.vx)*.45),this.z<this.radius&&(this.syncSurfaceSpin(0,0,1,.55),this.z=this.radius,this.vz=Math.abs(this.vz)*.45),this.z>U-this.radius&&(this.syncSurfaceSpin(0,0,-1,.55),this.z=U-this.radius,this.vz=-Math.abs(this.vz)*.45);let c=this.x-e,l=this.y-t,u=this.z-n,d=Math.hypot(c,l,u);if(d>1e-6&&!this.water){let r=this.creeperHitCooldown>0?this.lastSlot:-1,i=this.impact?this.sys.npc.sweepAny(e,t,n,c/d,l/d,u/d,d,this.radius):this.sys.npc.sweepCreeper(e,t,n,c/d,l/d,u/d,d,this.radius,r,this.lastGen);if(i){if(this.x=e+c/d*i.dist+i.nx*.015,this.y=t+l/d*i.dist+i.ny*.015,this.z=n+u/d*i.dist+i.nz*.015,this.impact){this.detonate();return}this.sys.npc.ignite(i.slot,i.gen),this.syncSurfaceSpin(i.nx,i.ny,i.nz,.72);let r=this.vx*i.nx+this.vy*i.ny+this.vz*i.nz;if(r<0){let e=this.vx-i.nx*r,t=this.vy-i.ny*r,n=this.vz-i.nz*r;this.vx=e*.72-i.nx*r*.5,this.vy=t*.72-i.ny*r*.5,this.vz=n*.72-i.nz*r*.5}this.lastSlot=i.slot,this.lastGen=i.gen,this.creeperHitCooldown=.12}}}}detonate(){this.dead||(this.dead=!0,this.sys.boom.explode(this.x,this.y,this.z,this.power,{damageScenery:g.peek().grenadesDamageScenery}))}aabb(){let e=this.radius;return[[this.x-e,this.y-e,this.z-e],[this.x+e,this.y+e,this.z+e]]}destroy(){}},$a=class extends Qa{constructor(e,t,n,r,i,a,o,s){super(e,t,n,r,i,a,o,s,{fuse:1/0,power:5,model:`water_balloon`}),this.water=!0,this.x=t,this.y=n,this.z=r}update(e){this.dead||e<=0||(this.age+=e,this.held||this.move(e),this.dead||(this.integrateOrientation(e),(this.age>30||this.y<-2)&&(this.dead=!0)))}move(e){let t=this.sys.world;if(Ya(t,this.x,this.y,this.z,this.radius,!0)){this.detonate();return}let n=Math.max(Math.abs(this.vx),Math.abs(this.vz),Math.abs(this.vy)+Math.abs(ba)*e)*e,r=Math.max(1,Math.ceil(n/.18)),i=e/r;for(let e=0;e<r;e++)if(this.vy+=ba*i,this.x+=this.vx*i,this.y+=this.vy*i,this.z+=this.vz*i,Ya(t,this.x,this.y,this.z,this.radius,!0)){this.detonate();return}}detonate(){this.dead||(this.dead=!0,this.sys.boom.explode(this.x,this.y,this.z,this.power,{water:!0}))}},eo=class extends Qa{constructor(e,...t){super(e,...t),this.sponge=!0,this.water=!0,this.power=0,this.fuse=7,this.scale=1,this.consumed=0,this.absorbIn=0,this.id=e.nextSpongeId++}update(e){if(super.update(e),this.dead||e<=0)return;let t=Math.min(6,Math.cbrt(1+this.consumed*.18)),n=this.scale+(t-this.scale)*(1-Math.exp(-5*e)),r=wa*n,i=r-this.radius;Ya(this.sys.world,this.x,this.y+i,this.z,r)||(this.y+=i,this.scale=n,this.radius=r);let a=5+(this.scale-1)*2.6;this.sys.boom.debris.sponge(this.id,this.x,this.y,this.z,a,this.radius),this.absorbIn-=e,this.absorbIn<=0&&(this.absorbIn=.15,this.sys.boom.sim.sponge(this.id,this.x,this.y,this.z,a))}detonate(){this.dead||(this.dead=!0,this.release(),this.sys.burstSponge(this),Gn(this.x,this.y,this.z))}release(){this.released||(this.released=!0,this.sys.boom.sim.sponge(this.id,0,0,0,0),this.sys.boom.debris.sponge(this.id,0,0,0,0,0))}destroy(){this.release()}},to=class extends Qa{constructor(e,t,n,r,i){let a=t.scale/3,o=wa*2*a;super(e,t.x,t.y,t.z,0,0,0),this.x+=n*o,this.y+=r*o,this.z+=i*o,this.water=!0,this.scale=this.initialScale=a,this.radius=wa*a,this.consumed=t.consumed,this.fuse=1.3+Math.random()*.9,this.vx=t.vx*.3+n*(2+Math.random()*3),this.vy=3+r*2+Math.random()*3,this.vz=t.vz*.3+i*(2+Math.random()*3),this.spinX=(Math.random()-.5)*18,this.spinY=(Math.random()-.5)*18,this.spinZ=(Math.random()-.5)*18,Ya(e.world,this.x,this.y,this.z,this.radius)&&(this.x=t.x,this.y=t.y,this.z=t.z)}update(e){super.update(e),this.scale=this.initialScale*Math.min(1,Math.max(0,this.fuse/.6)),this.radius=Math.max(.02,wa*this.scale)}detonate(){this.dead=!0}},no=class{constructor(e,t,n,r,i,a,o,s={}){this.sys=e,this.projectileKind=`grenade`,this.radius=ka,this.held=!1,this.x=t,this.y=n,this.z=r;for(let t=0;t<16&&Ya(e.world,this.x,this.y,this.z);t++)this.x-=i*.05,this.y-=a*.05,this.z-=o*.05;this.vx=i*Ea+(s.vx||0)*.55,this.vy=a*Ea+Da+(s.vy||0)*.35,this.vz=o*Ea+(s.vz||0)*.55,this.age=0,this.fuse=Oa,this.power=Ta,this.dead=!1,this.blinkOn=!1,this.stuck=!1,this.carrier=null,this.committed=!1,this.offX=0,this.offY=0,this.offZ=0,this.nx=0,this.ny=1,this.nz=0,this.ax=0,this.ay=0,this.az=0,this.anchored=!1,this.qx=0,this.qy=0,this.qz=0,this.qw=1,this.lqx=0,this.lqy=0,this.lqz=0,this.lqw=1,this.spinX=o*9,this.spinY=(Math.random()-.5)*2,this.spinZ=-i*9,$n(Math.min(2.5,Oa),t,n,r)}faceUp(e,t,n){let r=t;if(r>.99999){this.qx=0,this.qy=0,this.qz=0,this.qw=1;return}if(r<-.99999){this.qx=1,this.qy=0,this.qz=0,this.qw=0;return}let i=Math.sqrt((1+r)*2),a=1/i;this.qx=n*a,this.qy=0,this.qz=-e*a,this.qw=i*.5}halt(){this.stuck=!0,this.vx=0,this.vy=0,this.vz=0,this.spinX=0,this.spinY=0,this.spinZ=0}stickToFace(e,t,n,r=!0){this.halt(),this.nx=e,this.ny=t,this.nz=n,this.anchored=r&&this.anchorBehind(e,t,n),this.faceUp(e,t,n),lr()}anchorBehind(e,t,n){let r=ka,i=.58,a=this.x-e*i,o=this.y-t*i,s=this.z-n*i,c=Math.floor(e===0?a-r:a),l=Math.floor(e===0?a+r:a),u=Math.floor(t===0?o-r:o),d=Math.floor(t===0?o+r:o),f=Math.floor(n===0?s-r:s),p=Math.floor(n===0?s+r:s),m=this.sys.world,h=!1,g=1/0;for(let e=u;e<=d;e++)for(let t=f;t<=p;t++)for(let n=c;n<=l;n++){if(!m.solidAt(n,e,t))continue;let r=n+.5-a,i=e+.5-o,c=t+.5-s,l=r*r+i*i+c*c;l>=g||(g=l,this.ax=n,this.ay=e,this.az=t,h=!0)}return h}release(){this.stuck=!1;let e=this.carrier;e&&e.kind===Ua&&(this.sys.npc.martyr(e.slot,e.gen,!1),this.committed=!0),this.carrier=null,this.anchored&&(this.anchored=!1,this.x+=this.nx*ja,this.y+=this.ny*ja,this.z+=this.nz*ja)}detachForVerity(){this.release(),this.committed=!1}keepLocalAttitude(){this.lqx=this.qx,this.lqy=this.qy,this.lqz=this.qz,this.lqw=this.qw}stickAxis(e,t,n){let r=(n>0?Math.floor(t+ka):Math.floor(t-ka)+1)-n*Aa;e===0?(this.x=r,this.stickToFace(-n,0,0)):e===1?(this.y=r,this.stickToFace(0,-n,0)):(this.z=r,this.stickToFace(0,0,-n))}rideBody(e,t){let n={kind:e,slot:t.slot,gen:t.gen};if(!this.sys.carrierPose(n,Ka))return!1;let r=Math.cos(Ka.yaw),i=Math.sin(Ka.yaw),a=this.x-Ka.x,o=this.y-Ka.y,s=this.z-Ka.z,c=a*r-s*i,l=o,u=a*i+s*r,d=t.nx*r-t.nz*i,f=t.ny,p=t.nx*i+t.nz*r,m=Ga[e],h=Math.abs(d),g=Math.abs(f),_=Math.abs(p),v=0,y=0,b=0;return h>=g&&h>=_?(v=d>=0?1:-1,c=v*(m.hx+Aa),l=Math.min(m.y1,Math.max(m.y0,l)),u=Math.min(m.hz,Math.max(-m.hz,u))):_>=g?(b=p>=0?1:-1,u=b*(m.hz+Aa),l=Math.min(m.y1,Math.max(m.y0,l)),c=Math.min(m.hx,Math.max(-m.hx,c))):(y=f>=0?1:-1,l=y>0?m.y1+Aa:m.y0-Aa,c=Math.min(m.hx,Math.max(-m.hx,c)),u=Math.min(m.hz,Math.max(-m.hz,u))),this.carrier=n,this.offX=c,this.offY=l,this.offZ=u,this.halt(),this.faceUp(v,y,b),this.keepLocalAttitude(),this.followCarrier(),e===Ua&&this.sys.npc.martyr(n.slot,n.gen,!0),lr(),!0}followCarrier(){let e=Ka.yaw,t=Math.cos(e),n=Math.sin(e);this.x=Ka.x+this.offX*t+this.offZ*n,this.y=Ka.y+this.offY,this.z=Ka.z-this.offX*n+this.offZ*t;let r=e*.5,i=Math.sin(r),a=Math.cos(r),o=this.lqx,s=this.lqy,c=this.lqz,l=this.lqw;this.qx=a*o+i*c,this.qy=a*s+i*l,this.qz=a*c-i*o,this.qw=a*l-i*s}courier(){let e=this.carrier;return!this.stuck||!e||e.kind!==Ua?0:this.sys.npc.martyrState(e.slot,e.gen)}ridePlane(){let e=this.sys.plane;if(!e||!e.alive)return!1;let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r>9?!1:(this.carrier={kind:3},this.offX=t,this.offY=n,this.offZ=r,this.halt(),this.keepLocalAttitude(),lr(),!0)}fly(e){let t=Math.max(Math.abs(this.vx*e),Math.abs(this.vy*e),Math.abs(this.vz*e)),n=Math.min(24,Math.max(1,Math.ceil(t/.18))),r=e/n,i=this.sys.world;for(let e=0;e<n;e++){let e=this.x,t=this.y,n=this.z;this.vy+=ba*r;let a=this.vx>0?1:-1,o=this.x+this.vx*r;if(this.vx!==0&&Xa(i,o,this.y,this.z,0,a))return this.stickAxis(0,o,a);this.x=o;let s=this.vy>0?1:-1,c=this.y+this.vy*r;if(this.vy!==0&&Xa(i,this.x,c,this.z,1,s))return this.stickAxis(1,c,s);this.y=c;let l=this.vz>0?1:-1,u=this.z+this.vz*r;if(this.vz!==0&&Xa(i,this.x,this.y,u,2,l))return this.stickAxis(2,u,l);if(this.z=u,this.x<ka)return this.x=Aa,this.stickToFace(1,0,0,!1);if(this.x>V-ka)return this.x=V-Aa,this.stickToFace(-1,0,0,!1);if(this.z<ka)return this.z=Aa,this.stickToFace(0,0,1,!1);if(this.z>U-ka)return this.z=U-Aa,this.stickToFace(0,0,-1,!1);let d=this.x-e,f=this.y-t,p=this.z-n,m=Math.hypot(d,f,p);if(m>1e-6){let r=1/m,i=this.sys.npc.sweepAny(e,t,n,d*r,f*r,p*r,m,ka);if(i&&(this.x=e+d*r*i.dist,this.y=t+f*r*i.dist,this.z=n+p*r*i.dist,this.rideBody(i.body,i)))return}if(this.ridePlane())return}let a=.998**(e*60);this.spinX*=a,this.spinY*=a,this.spinZ*=a,Za(this,e)}update(e){if(e<=0)return;if(this.age+=e,this.held){this.fuse-=e;let t=this.fuse<.5?14:this.fuse<1.5?8:4;this.blinkOn=Math.floor(this.age*t)%2==0,this.fuse<=0&&this.detonate();return}if(this.stuck&&(this.vx!==0||this.vy!==0||this.vz!==0)&&this.release(),this.stuck&&(this.carrier===null?this.anchored&&!this.sys.world.solidAt(this.ax,this.ay,this.az)&&this.release():this.sys.carrierPose(this.carrier,Ka)?this.followCarrier():this.release()),this.committed){this.detonate();return}this.stuck||this.fly(e);let t=this.courier();t===0&&(this.fuse-=e);let n=this.fuse<.5?14:this.fuse<1.5?8:4;this.blinkOn=t===0&&Math.floor(this.age*n)%2==0,(t>=2||this.fuse<=0||this.y<-2)&&this.detonate()}detonate(){this.dead||(this.dead=!0,this.sys.boom.explode(this.x,this.y,this.z,this.power))}aabb(){let e=ka;return[[this.x-e,this.y-e,this.z-e],[this.x+e,this.y+e,this.z+e]]}destroy(){}},ro=j+M+`
in vec2 vUv;
in vec3 vNormal;
in vec3 vWorld;
in float vFlash;

uniform sampler2D uAtlas;
out vec4 fragColor;

void main() {
    vec3 albedo = texture(uAtlas, vUv).rgb;
    vec3 lit = albedo * diffuseLightFree(vNormal, vWorld) + vec3(vFlash);
    fragColor = colorGrade(vec4(gammaOut(lit), 1.0));
}
`,io=1024,ao=8,oo=.5/16,so=F+`
in vec3 position;
in vec3 normal;
in vec2 uv;         // face-local 0..1
in vec4 iLine1;     // xyz: world position, w: yaw (radians)
in vec4 iLine2;     // x: scale, y: flash, z: packed tiles

out vec2 vUv;
out vec3 vNormal;
out vec3 vWorld;
out float vFlash;

void main() {
    int vid = gl_VertexID;
    int face = vid >> 2;
    int tiles = int(floatBitsToUint(iLine2.z));
    int tile = (face == 2) ? (tiles & 255)
             : (face == 3) ? ((tiles >> 16) & 255)
             : ((tiles >> 8) & 255);
    vec2 f = clamp(uv, vec2(${oo}), vec2(${1-oo}));
    vUv = (vec2(float(tile % 8), float(tile / 8)) + f)
        / vec2(8.0, ${Qe}.0);

    float yawS = sin(iLine1.w), yawC = cos(iLine1.w);
    vec3 v = position * iLine2.x;
    vec3 wpos = vec3(v.x * yawC + v.z * yawS, v.y, -v.x * yawS + v.z * yawC) + iLine1.xyz;
    vNormal = vec3(normal.x * yawC + normal.z * yawS, normal.y, -normal.x * yawS + normal.z * yawC);
    vWorld = wpos;
    vFlash = iLine2.y;
    gl_Position = projectionMatrix * viewMatrix * vec4(wpos, 1.0);
}
`,co=class{constructor(e,t,n){let r=e.gl;this.geometry=Y(r),this.inst=new Je(r,this.geometry,[`iLine1`,`iLine2`],ao,io);let i=e.makeProgram({vertex:so,fragment:ro,uniforms:{uAtlas:{value:t}}});this.mesh=new A(r,{geometry:this.geometry,program:i,frustumCulled:!1}),this.mesh.visible=!1,this.mesh.setParent(n),e.addCaster(this.mesh,e.makeDepthProgram(so),!0)}write(e){let t=this.inst.data,n=this.inst.u32,r=0;for(let i=0;i<e.length&&r<1024;i++){let a=e[i];if(a.bomb)continue;let o=r*ao,s=1+Math.max(0,.5-a.fuse)*.35;t[o]=a.x,t[o+1]=a.y,t[o+2]=a.z,t[o+3]=a.age*30*_a,t[o+4]=a.size*s,t[o+5]=+!!a.blinkOn,n[o+6]=a.tiles,t[o+7]=0,r++}this.inst.upload(r),(r>0||this.mesh.visible)&&(this.mesh.shadowDirty=!0),this.mesh.visible=r>0}};function $(e,t,n,r,i,a,o,s,c=0){let l=q(t,n,r,i),u=e.positions.length/3;for(let t=0;t<l.positions.length;t+=3)e.positions.push(l.positions[t]+a,l.positions[t+1]+o,l.positions[t+2]+s);for(let t=0;t<l.normals.length;t++)e.normals.push(l.normals[t]);for(let t=0;t<l.uvs.length;t++)e.uvs.push(l.uvs[t]);for(let t=0;t<l.positions.length;t+=3)e.glow.push(c);for(let t=0;t<l.indices.length;t++)e.indices.push(u+l.indices[t])}function lo(){return{positions:[],normals:[],uvs:[],indices:[],glow:[]}}var uo=8,fo=F+`
in vec3 position;
in vec3 normal;
in vec2 uv;
in vec4 iLine1;     // xyz: world position, w: yaw
in vec4 iLine2;     // x: pitch, y: uniform scale, z: emissive flash

out vec2 vUv;
out vec3 vNormal;
out vec3 vWorld;
out float vFlash;

void main() {
    float yawS = sin(iLine1.w), yawC = cos(iLine1.w);
    float pitchS = sin(iLine2.x), pitchC = cos(iLine2.x);

    vec3 s = position * iLine2.y;
    vec3 v = vec3(s.x,
                  s.y * pitchC + s.z * pitchS,
                 -s.y * pitchS + s.z * pitchC);
    vec3 n = vec3(normal.x,
                  normal.y * pitchC + normal.z * pitchS,
                 -normal.y * pitchS + normal.z * pitchC);
    vec3 wpos = vec3(v.x * yawC + v.z * yawS, v.y, -v.x * yawS + v.z * yawC) + iLine1.xyz;

    vUv = uv;
    vNormal = vec3(n.x * yawC + n.z * yawS, n.y, -n.x * yawS + n.z * yawC);
    vWorld = wpos;
    vFlash = iLine2.z;
    gl_Position = projectionMatrix * viewMatrix * vec4(wpos, 1.0);
}
`,po=class{constructor(e,t,n){let r=e.gl,i=lo();$(i,R.rocket_side,.34,.34,.9,0,0,.02),$(i,R.rocket_tip,.27,.27,.3,0,0,.62),$(i,R.rocket_engine,.28,.28,.2,0,0,-.53),$(i,R.rocket_tip,.64,.08,.3,0,0,-.38),$(i,R.rocket_tip,.08,.64,.3,0,0,-.38),this.geometry=J(r,i.positions,i.normals,i.uvs,i.indices),this.inst=new Je(r,this.geometry,[`iLine1`,`iLine2`],uo,128);let a=e.makeProgram({vertex:fo,fragment:ro,uniforms:{uAtlas:{value:t}}});this.mesh=new A(r,{geometry:this.geometry,program:a,frustumCulled:!1}),this.mesh.visible=!1,this.mesh.setParent(n),e.addCaster(this.mesh,e.makeDepthProgram(fo),!0)}write(e){let t=Math.min(e.length,128),n=this.inst.data;for(let r=0;r<t;r++){let t=e[r],i=r*uo;n[i]=t.x,n[i+1]=t.y,n[i+2]=t.z,n[i+3]=Math.atan2(t.vx,t.vz),n[i+4]=Math.atan2(t.vy,Math.hypot(t.vx,t.vz)),n[i+5]=t.launcher.scale,n[i+6]=0,n[i+7]=0}this.inst.upload(t),(t>0||this.mesh.visible)&&(this.mesh.shadowDirty=!0),this.mesh.visible=t>0}},mo=8,ho=class{constructor(e,t,n){let r=e.gl,i=lo();$(i,R.rocket_side,.12,.12,.09,0,0,.595),$(i,R.rocket_side,.21,.21,.096,0,0,.502),$(i,R.rocket_side,.28,.28,.096,0,0,.406),$(i,R.rocket_side,.32,.32,.435,0,0,.141),$(i,R.rocket_side,.27,.27,.12,0,0,-.137),$(i,R.rocket_side,.21,.21,.123,0,0,-.259),$(i,R.metal,.05,.448,.32,0,0,-.48),$(i,R.metal,.448,.05,.32,0,0,-.48),$(i,R.metal,.448,.05,.24,0,.199,-.5),$(i,R.metal,.448,.05,.24,0,-.199,-.5),$(i,R.metal,.05,.348,.24,-.199,0,-.5),$(i,R.metal,.05,.348,.24,.199,0,-.5),this.geometry=J(r,i.positions,i.normals,i.uvs,i.indices),this.inst=new Je(r,this.geometry,[`iLine1`,`iLine2`],mo,64);let a=e.makeProgram({vertex:fo,fragment:ro,uniforms:{uAtlas:{value:t}}});this.mesh=new A(r,{geometry:this.geometry,program:a,frustumCulled:!1}),this.mesh.visible=!1,this.mesh.setParent(n),e.addCaster(this.mesh,e.makeDepthProgram(fo),!0)}write(e){let t=this.inst.data,n=0;for(let r=0;r<e.length&&n<64;r++){let i=e[r];if(!i.bomb)continue;let a=n*mo;t[a]=i.x,t[a+1]=i.y,t[a+2]=i.z,t[a+3]=i.aimYaw,t[a+4]=i.aimPitch,t[a+5]=i.size*Ma,t[a+6]=i.stuck&&i.blinkOn?1:0,t[a+7]=0,n++}this.inst.upload(n),(n>0||this.mesh.visible)&&(this.mesh.shadowDirty=!0),this.mesh.visible=n>0}},go=8,_o=F+`
in vec3 position;
in vec3 normal;
in vec2 uv;
in vec4 iLine1;     // xyz: world position, w: quaternion x
in vec4 iLine2;     // xyz: quaternion y/z/w, w: fuse flash

out vec2 vUv;
out vec3 vNormal;
out vec3 vWorld;
out float vFlash;

vec3 quatRotate(vec3 v, vec4 q) {
    return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}

void main() {
    vec4 q = vec4(iLine1.w, iLine2.x, iLine2.y, iLine2.z);
    vec3 v = quatRotate(position, q);
    vec3 n = quatRotate(normal, q);
    vec3 wpos = v + iLine1.xyz;

    vUv = uv;
    vNormal = n;
    vWorld = wpos;
    vFlash = iLine2.w;
    gl_Position = projectionMatrix * viewMatrix * vec4(wpos, 1.0);
}
`,vo=class{constructor(e,t,n,r=null){let i=e.gl,a=lo();if(r)for(let e of r)$(a,R[e.tile],e.sx,e.sy,e.sz,e.x,e.y,e.z);else $(a,R.grenade_body,.42,.46,.42,0,0,0),$(a,R.grenade_metal,.22,.14,.22,0,.29,0),$(a,R.grenade_metal,.08,.12,.38,.23,.19,.04),$(a,R.grenade_metal,.3,.07,.07,.14,.39,0);this.geometry=J(i,a.positions,a.normals,a.uvs,a.indices),this.inst=new Je(i,this.geometry,[`iLine1`,`iLine2`],go,128);let o=e.makeProgram({vertex:_o,fragment:ro,uniforms:{uAtlas:{value:t}}});this.mesh=new A(i,{geometry:this.geometry,program:o,frustumCulled:!1}),this.mesh.visible=!1,this.mesh.setParent(n),e.addCaster(this.mesh,e.makeDepthProgram(_o),!0)}write(e){let t=Math.min(e.length,128),n=this.inst.data;for(let r=0;r<t;r++){let t=e[r],i=r*go;n[i]=t.x,n[i+1]=t.y,n[i+2]=t.z,n[i+3]=t.qx,n[i+4]=t.qy,n[i+5]=t.qz,n[i+6]=t.qw,n[i+7]=t.blinkOn?.8:0}this.inst.upload(t),(t>0||this.mesh.visible)&&(this.mesh.shadowDirty=!0),this.mesh.visible=t>0}},yo=j+M+`
in vec2 vUv;
in vec3 vNormal;
in vec3 vWorld;
in float vFlash;
uniform sampler2D uAtlas;
out vec4 fragColor;
void main() {
    vec3 albedo = texture(uAtlas, vUv).rgb;
    // Only the cyan charge windows emit; the dark casing keeps world lighting.
    float charge = smoothstep(0.05, 0.3, albedo.g - albedo.r);
    vec3 lit = albedo * diffuseLightFree(vNormal, vWorld) + albedo * charge * 1.2;
    fragColor = colorGrade(vec4(gammaOut(lit), 1.0));
}
`,bo=class{constructor(e,t,n){let r=e.gl,i=lo();$(i,R.gun_body,.28,.28,.32,0,0,0),$(i,R.laser_cell,.3,.3,.06,0,0,.16),$(i,R.metal,.22,.22,.12,0,0,.25),$(i,R.laser_cell,.14,.14,.06,0,0,.34),$(i,R.gun_mag,.2,.2,.12,0,0,-.22),$(i,R.gun_rail,.44,.06,.16,0,0,-.18),$(i,R.gun_rail,.06,.44,.16,0,0,-.18),this.geometry=J(r,i.positions,i.normals,i.uvs,i.indices),this.inst=new Je(r,this.geometry,[`iLine1`,`iLine2`],uo,128);let a=e.makeProgram({vertex:fo,fragment:yo,uniforms:{uAtlas:{value:t}}});this.mesh=new A(r,{geometry:this.geometry,program:a,frustumCulled:!1}),this.mesh.visible=!1,this.mesh.setParent(n),e.addCaster(this.mesh,e.makeDepthProgram(fo),!0)}write(e){let t=Math.min(e.length,128),n=this.inst.data;for(let r=0;r<t;r++){let t=e[r],i=r*uo;n[i]=t.x,n[i+1]=t.y,n[i+2]=t.z,n[i+3]=Math.atan2(t.vx,t.vz),n[i+4]=Math.atan2(t.vy,Math.hypot(t.vx,t.vz)),n[i+5]=1,n[i+6]=0,n[i+7]=0}this.inst.upload(t),(t>0||this.mesh.visible)&&(this.mesh.shadowDirty=!0),this.mesh.visible=t>0}},xo=512,So=F+`
in vec3 position;
in vec3 normal;
in vec2 uv;
in vec4 iLine1; // xyz position, quaternion x
in vec4 iLine2; // quaternion y/z/w, unused
in vec4 iExtra; // scale, saturation, unused, unused
out vec2 vUv;
out vec3 vNormal;
out vec3 vWorld;
out float vWet;

vec3 quatRotate(vec3 v, vec4 q) {
    return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}

void main() {
    vec4 q = vec4(iLine1.w, iLine2.xyz);
    vWorld = quatRotate(position * iExtra.x, q) + iLine1.xyz;
    vNormal = quatRotate(normal, q);
    vUv = uv;
    vWet = iExtra.y;
    gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}
`,Co=j+M+`
in vec2 vUv;
in vec3 vNormal;
in vec3 vWorld;
in float vWet;
uniform sampler2D uAtlas;
out vec4 fragColor;

void main() {
    vec3 albedo = texture(uAtlas, vUv).rgb;
    albedo = mix(albedo, albedo * vec3(0.45, 0.72, 0.85), vWet);
    vec3 lit = albedo * diffuseLightFree(vNormal, vWorld);
    fragColor = colorGrade(vec4(gammaOut(lit), 1.0));
}
`,wo=class{constructor(e,t,n){let r=e.gl,i=lo();$(i,R.water_sponge,.46,.46,.46,0,0,0),this.geometry=J(r,i.positions,i.normals,i.uvs,i.indices),this.inst=new Je(r,this.geometry,[`iLine1`,`iLine2`,`iExtra`],12,640);let a=e.makeProgram({vertex:So,fragment:Co,uniforms:{uAtlas:{value:t}}});this.mesh=new A(r,{geometry:this.geometry,program:a,frustumCulled:!1}),this.mesh.visible=!1,this.mesh.setParent(n),e.addCaster(this.mesh,e.makeDepthProgram(So),!0)}write(e,t){let n=this.inst.data,r=0;for(let i of[e,t])for(let e of i){let t=r++*12;n[t]=e.x,n[t+1]=e.y,n[t+2]=e.z,n[t+3]=e.qx,n[t+4]=e.qy,n[t+5]=e.qz,n[t+6]=e.qw,n[t+7]=0,n[t+8]=e.scale,n[t+9]=Math.min(1,e.consumed/150),n[t+10]=0,n[t+11]=0}this.inst.upload(r),(r>0||this.mesh.visible)&&(this.mesh.shadowDirty=!0),this.mesh.visible=r>0}},To=F+`
in vec3 position;
in vec3 normal;
in vec2 uv;
in float glow;
in vec4 iLine1;     // xyz: world position, w: quaternion x
in vec4 iLine2;     // xyz: quaternion y/z/w, w: fuse flash

out vec2 vUv;
out vec3 vNormal;
out vec3 vWorld;
out float vFlash;

vec3 quatRotate(vec3 v, vec4 q) {
    return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);
}

void main() {
    vec4 q = vec4(iLine1.w, iLine2.x, iLine2.y, iLine2.z);
    vec3 v = quatRotate(position, q);
    vec3 n = quatRotate(normal, q);
    vec3 wpos = v + iLine1.xyz;

    vUv = uv;
    vNormal = n;
    vWorld = wpos;
    // Folded into the one varying the fragment shader already had: off the
    // readout this is zero for every instance, so the blink cannot reach the
    // body no matter what the record says.
    vFlash = iLine2.w * glow;
    gl_Position = projectionMatrix * viewMatrix * vec4(wpos, 1.0);
}
`,Eo=j+M+`
in vec2 vUv;
in vec3 vNormal;
in vec3 vWorld;
in float vFlash;

uniform sampler2D uAtlas;
out vec4 fragColor;

// How hard the readout is driven on the blink. The emissive is the tile's OWN
// colour multiplied up, which means the painted segments lift and the near-black
// glass around them does not — the screen reads as digits coming on rather than
// as a panel changing colour, and it needs no colour stated here at all.
//
// Worth knowing what that does to the hue, because it is the deliberate part:
// a multiply raises all three channels together, so red clamps at 1 while green
// and blue keep climbing behind it, and (255, 62, 42) driven 2.2x comes out
// (255, 106, 76). The core goes salmon, hot rather than saturated, the way an
// overdriven LED does. That is the look; a stated colour was tried and is a
// flatter, more even red.
const float SCREEN_GAIN = 2.2;

void main() {
    vec3 albedo = texture(uAtlas, vUv).rgb;
    // vFlash is already zero off the readout plate (STICKY_VS), so the blink
    // cannot reach the body whatever the instance record says.
    vec3 lit = albedo * diffuseLightFree(vNormal, vWorld)
             + albedo * vFlash * SCREEN_GAIN;
    fragColor = colorGrade(vec4(gammaOut(lit), 1.0));
}
`,Do=class{constructor(e,t,n){let r=e.gl,i=lo();$(i,R.sticky_body,.5,.16,.34,0,0,0),$(i,R.grenade_metal,.52,.18,.09,0,0,0),$(i,R.sticky_panel,.27,.07,.21,.08,.11,0),$(i,R.grenade_metal,.03,.13,.03,-.19,.13,.11),$(i,R.sticky_screen,.23,.04,.16,.08,.16,0,1),this.geometry=J(r,i.positions,i.normals,i.uvs,i.indices,{glow:{size:1,data:new Float32Array(i.glow)}}),this.inst=new Je(r,this.geometry,[`iLine1`,`iLine2`],go,64);let a=e.makeProgram({vertex:To,fragment:Eo,uniforms:{uAtlas:{value:t}}});this.mesh=new A(r,{geometry:this.geometry,program:a,frustumCulled:!1}),this.mesh.visible=!1,this.mesh.setParent(n),e.addCaster(this.mesh,e.makeDepthProgram(To),!0)}write(e){let t=Math.min(e.length,64),n=this.inst.data;for(let r=0;r<t;r++){let t=e[r],i=r*go;n[i]=t.x,n[i+1]=t.y,n[i+2]=t.z,n[i+3]=t.qx,n[i+4]=t.qy,n[i+5]=t.qz,n[i+6]=t.qw,n[i+7]=+!!t.blinkOn}this.inst.upload(t),(t>0||this.mesh.visible)&&(this.mesh.shadowDirty=!0),this.mesh.visible=t>0}},Oo=class{constructor(e,t,n,r,i){this.gfx=e,this.world=t,this.boom=n,this.npc=i,this.root=new Ye,this.root.setParent(e.scene),this.list=[],this.holes=[],this.plane=null,this.rocketCount=0,this.grenadeCount=0,this.stickyCount=0,this.nextSpongeId=1,this.spongePieces=[],this.spongeInstancer=new wo(e,r,this.root),n.sim.onSpongeAbsorbed=(e,t)=>{let n=this.list.find(t=>t.sponge&&t.id===e&&!t.dead);n&&(n.consumed+=t)},this.fusedInstancer=new co(e,r,this.root),this.bombInstancer=new ho(e,r,this.root),this.rocketInstancer=new po(e,r,this.root),this.holeRocketInstancer=new fa(e,this.root,128),this.grenadeInstancer=new vo(e,r,this.root),this.waterBalloonInstancer=new vo(e,r,this.root,ma),this.launcherGrenadeInstancer=new bo(e,r,this.root),this.stickyInstancer=new Do(e,r,this.root),this.onFuseLit=null,n.entities=this}carrierPose(e,t){if(e.kind===Ha)return this.npc.creeperPose(e.slot,e.gen,t);if(e.kind===Ua)return this.npc.villagerPose(e.slot,e.gen,t);if(e.kind===Wa)return this.npc.soldierPose(e.slot,e.gen,t);let n=this.plane;return!n||!n.alive?!1:(t.x=n.x,t.y=n.y,t.z=n.z,t.yaw=0,!0)}spawnFused(e,t,n,r,i={}){this.list.push(new qa(this,e,t,n,r,i)),this.onFuseLit?.(t,n,r)}spawnRocket(e,t,n,r,i,a,o){if(this.rocketCount>=128)return!1;this.rocketCount++;let s=new Ja(this,e,t,n,r,i,a,o);return s.flightSound=tr(e,t,n),this.list.push(s),this.onFuseLit?.(e,t,n),!0}spawnHoleRocket(e,t,n,r,i,a,o={}){return this.spawnLauncher(`hole_launcher`,e,t,n,r,i,a,o)}spawnLauncher(e,t,n,r,i,a,o,s={}){return!S[e]||S[e].beam?!1:this.spawnRocket(t,n,r,i,a,o,{...s,variant:e})}spawnSticky(e,t,n,r,i,a,o){return this.stickyCount>=64?!1:(this.stickyCount++,this.list.push(new no(this,e,t,n,r,i,a,o)),this.onFuseLit?.(e,t,n),!0)}spawnGrenade(e,t,n,r,i,a,o,s){return this.grenadeCount>=128?!1:(this.grenadeCount++,this.list.push(new Qa(this,e,t,n,r,i,a,o,s)),this.onFuseLit?.(e,t,n),!0)}spawnWaterBalloon(e,t,n,r,i,a,o){return this.grenadeCount>=128?!1:(this.grenadeCount++,this.list.push(new $a(this,e,t,n,r,i,a,o)),!0)}spawnWaterSponge(e,t,n,r,i,a,o,{veritySpawned:s=!1}={}){if(this.grenadeCount>=128)return!1;this.grenadeCount++;let c=new eo(this,e,t,n,r,i,a,o);return c.veritySpawned=s,this.list.push(c),!0}burstSponge(e){for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++)this.spongePieces.length>=xo&&this.spongePieces.shift(),this.spongePieces.push(new to(this,e,r,t,n))}onExplosion(e,t,n,r){for(let i=0;i<this.list.length;i++){let a=this.list[i];if(a.dead)continue;let o=a.x-e,s=a.y-t,c=a.z-n,l=Math.max(.5,Math.hypot(o,s,c));if(l<r*1.8){let e=r*6/(l*l+2);a.vx+=o/l*e,a.vy+=s/l*e+e*.4,a.vz+=c/l*e}}}writeThreats(e,t,n,r){let i=0,a=Math.max(0,r-this.holes.length);for(let r=0;r<this.list.length&&i<a;r++){let a=this.list[r];if(a.dead||a.water||a.jackoh)continue;let o;if(a instanceof qa)o=0;else if(a instanceof Qa||a instanceof no)o=1;else continue;let s=n+i*5;t[s]=a.x,t[s+1]=a.y,t[s+2]=a.z,t[s+3]=a.power,e[s+4]=o,i++}for(let a=0;a<this.holes.length&&i<r;a++){let r=this.holes[a];if(r.swallowed)continue;let o=n+i*5;t[o]=r.x,t[o+1]=r.y,t[o+2]=r.z,t[o+3]=r.power,e[o+4]=2,i++}return i}pick(e,t,n,r,i,a,o){let s=null,c=o;for(let o=0;o<this.list.length;o++){let l=this.list[o];if(l.dead||!(l instanceof qa))continue;let u=l.aabb(),d=tn(e,t,n,r,i,a,u[0],u[1]);d<c&&(c=d,s=l)}return s?{entity:s,dist:c}:null}update(e){for(let t=0;t<this.list.length;t++)this.list[t].dead||this.list[t].update(e);for(let e=this.list.length-1;e>=0;e--)this.list[e].dead&&(this.list[e]instanceof Ja&&this.rocketCount--,this.list[e]instanceof Qa&&this.grenadeCount--,this.list[e]instanceof no&&this.stickyCount--,this.list[e].destroy(),this.list.splice(e,1));let t=this.list.filter(e=>e instanceof qa);this.fusedInstancer.write(t),this.bombInstancer.write(t);let n=this.list.filter(e=>e instanceof Ja);this.rocketInstancer.write(n.filter(e=>!e.hole)),this.holeRocketInstancer.write(n.filter(e=>e.hole),e),this.boom.rockets?.update(e,n.filter(e=>!e.hole));let r=this.list.filter(e=>e instanceof Qa&&!e.sponge);this.grenadeInstancer.write(r.filter(e=>e.model===`hand_grenade`)),this.waterBalloonInstancer.write(r.filter(e=>e.model===`water_balloon`)),this.launcherGrenadeInstancer.write(r.filter(e=>e.model===`sf_shell`));for(let t of this.spongePieces)t.update(e);this.spongePieces=this.spongePieces.filter(e=>!e.dead),this.spongeInstancer.write(this.list.filter(e=>e.sponge),this.spongePieces),this.stickyInstancer.write(this.list.filter(e=>e instanceof no)),_.value=this.list.length}clear(){for(let e=0;e<this.list.length;e++)this.list[e].destroy();this.list.length=0,this.rocketCount=0,this.grenadeCount=0,this.stickyCount=0,this.fusedInstancer.write([]),this.bombInstancer.write([]),this.rocketInstancer.write([]),this.boom.rockets?.clear(),this.holeRocketInstancer.write([],0),this.grenadeInstancer.write([]),this.waterBalloonInstancer.write([]),this.launcherGrenadeInstancer.write([]),this.spongePieces.length=0,this.spongeInstancer.write([],[]),this.stickyInstancer.write([]),_.value=0}},ko=[];for(let e of[-9,9])for(let t of[5,25])for(let n of[-9,9])ko.push([e,t,n]);for(let e of[-1,1])for(let t of[-1,1])ko.push([e*12,5,t*9]),ko.push([e*9,5,t*12]);var Ao=[];for(let e of At){let t=new Map;Wt({set(e,n,r){for(let i of[n,n+1]){let n=t.get(i)||[1/0,-1/0,1/0,-1/0];n[0]=Math.min(n[0],e),n[1]=Math.max(n[1],e+1),n[2]=Math.min(n[2],r),n[3]=Math.max(n[3],r+1),t.set(i,n)}}},Ut[e],0,5,0,2);for(let[e,[n,r,i,a]]of t)for(let t of[n-.3,r+.3])for(let n of[i-.3,a+.3])Ao.push([t,e,n])}Ao.push([.5,24,.5]);var jo=class{constructor(e){this.camera=e,this.gameplayFov=null}enter(){this.gameplayFov===null&&(this.gameplayFov=this.camera.fov),this.update(0)}update(e){Mo(this.camera,e,window.innerWidth)}leave(){this.gameplayFov!==null&&(this.camera.perspective({fov:this.gameplayFov}),this.gameplayFov=null)}};function Mo(e,t,n=1920){let r=e.aspect<=1?45:15;e.fov!==r&&e.perspective({fov:r});let i=Dt(e.aspect),a=i.left*2-1,o=i.right*2-1,s=1-i.bottom*2,c=1-i.top*2,l=(a+o)/2,u=(s+c)/2,d=Math.tan(e.fov*Math.PI/360),f=d*e.aspect,p=Math.PI/2-.95+Math.sin(t*.17)*.035,m=e.aspect<=1,h=m?.18:.32,g=Math.cos(p),_=Math.sin(p),v=Math.cos(h),y=Math.sin(h),b=[g*v,y,_*v],x=[_,0,-g],S=[-g*y,v,-_*y],ee=4+(m?9.5:7),C=1,te=(e,t,n)=>{let r=t-ee,i=e*x[0]+n*x[2],p=e*S[0]+r*S[1]+n*S[2],m=e*b[0]+r*b[1]+n*b[2];C=Math.max(C,(i/f+o*m)/(o-l),(-a*m-i/f)/(l-a),(p/d+c*m)/(c-u),(-s*m-p/d)/(u-s))};for(let e of ko)te(...e);if(C/=m?1.55:1.1,m||(C*=1.5625/2.875),m)for(let e of Ao)te(...e);let w=[160,ee,160];for(let e=0;e<3;e++)w[e]-=C*(l*f*x[e]+u*d*S[e]);if(m){let e=.12*C*d;for(let t=0;t<3;t++)w[t]-=S[t]*e}else{let e=Math.min(1,Math.max(0,(1920-n)/820)),t=(.04-.04*e)*2*C*f,r=.02*e*2*C*d;for(let e=0;e<3;e++)w[e]+=x[e]*t+S[e]*r}e.position.set(...w.map((e,t)=>e+b[t]*C)),e.lookAt(w);let T=2*Math.atan(d/(m?1.5:1))*180/Math.PI;e.perspective({fov:m?T:15})}var No=Math.PI/180,Po=180/Math.PI,Fo=j+M+`
in vec3 vNormal;
in vec3 vWorld;
in vec2 vUv;
uniform sampler2D uAtlas;
out vec4 fragColor;
void main() {
    vec3 albedo = texture(uAtlas, vUv).rgb;
    fragColor = colorGrade(vec4(gammaOut(albedo * diffuseLightFree(vNormal, vWorld)), 1.0));
}
`,Io=.5;function Lo(e){return(t,n,r,i)=>e(t-.5,n-.5,r-.5,i)}function Ro(e,t,n,r,i){for(let a=-n;a<=n;a++)for(let o=-n;o<=n;o++)a*a+o*o>n*n+n*.6||e(a,o,t,i&&o<=-2?i:r)}var zo={key:`plane`,size:[28,16,26],build(e){let t=Lo(e),n=`metal`,r=`slate`,i=`hazard`,a=`glass`,o=`obsidian`,s=`slate`;for(let e=-12;e<=11;e++)Ro(t,e,e<=-11?1:e<=-9?2:e<=4?3:e<=7?2:1,e<=-8?`rust`:n,e<=-8?null:r);for(let e=-1;e<=1;e+=2)t(e*2,-1,-9,s),t(e*2,-1,-8,s);for(let e=-8;e<=-1;e++){let r=e<=-7||e>=-2?1:2,i=e<=-7||e>=-3?0:1;for(let i=-r;i<=r;i++)t(i,3,e,e===-8?n:a);if(e>-8&&e<-1)for(let n=-i;n<=i;n++)t(n,4,e,a)}for(let e=-1;e<=1;e+=2){for(let r=2;r<=13;r++){let a=r/13,o=Math.round(r*.45),c=Math.round(9-a*5),l=r<=7?2:1,u=r>=12;for(let a=0;a<c;a++)for(let d=0;d<l;d++){let l=a===c-1&&!u;t(e*r,-1-d,-3+o+a,u?i:l?s:n)}}for(let n=0;n<=2;n++)for(let i=0;i<9;i++)t(e*n,-3,-3+i,r)}for(let e=8;e<=11;e++){let r=e===8?3:e===9?5:7;for(let i=1;i<=r;i++)t(0,i,e,e>=11?s:n)}for(let e=6;e<=7;e++)t(0,e,10,i);for(let e=-7;e<=7;e++){let r=Math.abs(e)<=1;for(let a=9;a<=11;a++)(r||a!==9)&&t(e,0,a,Math.abs(e)>=6?i:a===11?s:n)}for(let e=-1;e<=1;e+=2){for(let r=-3;r>=-4;r--)t(e*4,r,0,n);for(let n=-5;n>=-6;n--)for(let r=-1;r<=0;r++)t(e*4,n,r,o)}t(0,-3,9,n),t(0,-4,9,o)}},Bo={key:`plane-prop`,build(e){let t=Lo(e);for(let e=1;e<=6;e++){let n=e>=5?0:1;for(let r=-n;r<=0;r++)t(r,e,0,`slate`),t(r,-e,0,`slate`),t(e,r,0,`slate`),t(-e,r,0,`slate`)}for(let e=-1;e<=1;e++)for(let n=-1;n<=1;n++)t(e,n,0,`rust`);t(0,0,-1,`rust`)}},Vo={key:`bomber-prop`,build(e){let t=Lo(e);for(let e=1;e<=5;e++)t(0,e,0,`slate`),t(0,-e,0,`slate`),t(e,0,0,`slate`),t(-e,0,0,`slate`);t(0,0,0,`metal`),t(0,0,-1,`metal`)}},Ho={key:`bomber`,size:[34,14,32],build(e){let t=Lo(e),n=`slate`,r=`metal`,i=`glass`,a=`concrete`;for(let e=-15;e<=15;e++)Ro(t,e,e<=-14?2:e<=-11?3:e<=9?4:e<=12?3:2,n,null);for(let e=-15;e<=-12;e++){let n=e<=-14?2:3;for(let r=-n;r<=n;r++)for(let a=-n;a<=0;a++)r*r+a*a<=n*n+n*.6&&t(r,a,e,i)}for(let e=-11;e<=-7;e++){let r=e===-11||e===-7?1:2;for(let a=-r;a<=r;a++)t(a,5,e,e===-11?n:i)}for(let e=-1;e<=1;e+=2){for(let r=3;r<=17;r++){let i=r/17,o=Math.round(10-i*4),s=r<=10?2:1;for(let i=0;i<o;i++)for(let c=0;c<s;c++)t(e*r,c,-3+i,i===o-1&&r<16?a:n)}for(let n=-8;n<=4;n++){let i=n<=-7||n>=3?1:2;for(let a=-i;a<=i;a++)for(let o=-i;o<=i;o++)a*a+o*o>i*i+i*.6||t(e*8+a,o-1,n,r)}}for(let e=-5;e<=6;e++)for(let n=-2;n<=2;n++)t(n,-4,e,`rust`);for(let e=-9;e<=9;e++)for(let r=12;r<=15;r++)t(e,0,r,r===15?a:n);for(let e=-1;e<=1;e+=2)for(let n=1;n<=7;n++)for(let i=12;i<=15;i++)n>5&&i<13||t(e*7,n,i,i===15?a:r)}},Uo=42,Wo=24,Go=10,Ko=13,qo=17,Jo=82,Yo=26,Xo=11,Zo=5,Qo=.4,$o=[[0,0,-6.4],[0,0,-3],[0,0,0],[0,0,3],[0,.5,5.4],[-6.4,-.5,.5],[6.4,-.5,.5],[0,-2.6,0]],es=[4,-1.1,.5];function ts(e,t,n,r,i,a,o){let s=Math.cos(o*No),c=Math.sin(o*No),l=t*s-n*c,u=t*c+n*s,d=Math.cos(i*No),f=Math.sin(i*No),p=u*d-r*f,m=u*f+r*d,h=Math.cos(a*No),g=Math.sin(a*No);return e.x=l*h+m*g,e.y=p,e.z=-l*g+m*h,e}function ns(e,t){let n=(t-e)%360;return n>180&&(n-=360),n<-180&&(n+=360),n}var rs={x:0,y:0,z:0},is=class{constructor(e,t,n){this.world=t;let r=e.gl,i=e=>nt[tt[e].id];this.root=new Ye,this.root.setParent(e.scene);let a=e.makeProgram({vertex:qe,fragment:Fo,uniforms:{uAtlas:{value:n}}});this.body=new A(r,{geometry:Xt(r,zo,i),program:a,frustumCulled:!1}),this.body.scale.set(Io,Io,Io),this.body.setParent(this.root),this.prop=new A(r,{geometry:Xt(r,Bo,i),program:a,frustumCulled:!1}),this.prop.scale.set(Io,Io,Io),this.prop.position.set(0,0,-6.3),this.prop.setParent(this.root),e.addCaster(this.body,e.makeDepthProgram(qe)),e.addCaster(this.prop,e.makeDepthProgram(qe)),this.x=0,this.y=0,this.z=0,this.vx=0,this.vy=0,this.vz=0,this.pitch=0,this.yaw=0,this.roll=0,this.speed=0,this.throttle=0,this.sink=0,this.propAngle=0,this.boarded=!1,this.derelict=!1,this.alive=!1,this.engine=null,this.engineRetry=0,this.setVisible(!1)}setVisible(e){this.body.visible=e,this.prop.visible=e,this.body.shadowDirty=!0,this.prop.shadowDirty=!0}place(e,t,n,r){this.x=e,this.y=t,this.z=n,this.yaw=r,this.pitch=0,this.roll=0,this.speed=0,this.throttle=0,this.sink=0,this.alive=!0,this.boarded=!1,this.derelict=!1,this.setVisible(!0),this.syncTransform(),this.stopEngine()}remove(){this.alive=!1,this.boarded=!1,this.derelict=!1,this.setVisible(!1),this.stopEngine()}stopEngine(){this.engine?.stop(),this.engine=null}board(){return this.alive?(this.boarded=!0,this.derelict=!1,this.engineRetry=1,this.engine=Jn(this.x,this.y,this.z),!0):!1}leave(){this.boarded=!1,this.derelict=!this.onGround(),this.derelict||(this.throttle=0),this.stopEngine()}onGround(){return!!this.hullHits(this.x,this.y-Qo,this.z,this.pitch,this.yaw,this.roll)}distanceTo(e,t,n){return Math.hypot(this.x-e,this.y-t,this.z-n)}forward(e){return ts(e,0,0,-1,this.pitch,this.yaw,0)}hardpoint(e,t){return ts(e,t*es[0],es[1],es[2],this.pitch,this.yaw,this.roll),e.x+=this.x,e.y+=this.y,e.z+=this.z,e}hullHits(e,t,n,r,i,a){let o=this.world;for(let s=0;s<$o.length;s++){let c=$o[s];ts(rs,c[0],c[1],c[2],r,i,a);let l=e+rs.x,u=t+rs.y,d=n+rs.z;if(u<0||o.solidAt(Math.floor(l),Math.floor(u),Math.floor(d)))return{x:l,y:u,z:d}}return null}update(e,t){if(!this.alive)return`parked`;if(!this.boarded)return this.spinProp(e,this.derelict?this.throttle:0),this.derelict?this.glide(e):`parked`;t.throttleUp&&(this.throttle=Math.min(1,this.throttle+e*.7)),t.throttleDown&&(this.throttle=Math.max(0,this.throttle-e*1.1));let n=this.throttle*Uo,r=(n>this.speed?Ko:qo)*e;this.speed+=Math.max(-r,Math.min(r,n-this.speed));let i=Jo*Math.max(.22,Math.min(1.3,this.speed/Wo))*e,a=ns(this.yaw,t.yaw),o=ns(this.pitch,t.pitch),s=Math.max(-i,Math.min(i,a));this.yaw=(this.yaw+s+540)%360-180,this.pitch+=Math.max(-i*.8,Math.min(i*.8,o)),this.pitch=Math.max(-85,Math.min(85,this.pitch));let c=s/Math.max(e,1e-4)*Math.cos(this.pitch*No),l=Math.max(-72,Math.min(72,c*.6))-(t.roll||0)*55;return this.roll+=(l-this.roll)*(1-Math.exp(-5*e)),this.spinProp(e,this.throttle),this.engine?this.engine.update(this.x,this.y,this.z,this.throttle,this.speed/Wo):(this.engineRetry-=e,this.engineRetry<=0&&(this.engineRetry=1,this.engine=Jn(this.x,this.y,this.z))),this.flyOn(e)}glide(e){return this.roll+=(0-this.roll)*(1-Math.exp(-.7*e)),this.flyOn(e)}flyOn(e){let t=Math.min(1,this.speed/Go),n=(1-t*t)*Yo;this.sink+=(n-this.sink)*(1-Math.exp(-3*e));let r=this.forward(rs),i=r.x*this.speed,a=r.y*this.speed-this.sink,o=r.z*this.speed;return this.vx=i,this.vy=a,this.vz=o,this.move(e,i,a,o)}spinProp(e,t){this.propAngle+=(Zo+t*95)*e,this.prop.rotation.z=this.propAngle,this.prop.shadowDirty=!0}settle(){for(let e=0;e<=3.5;e+=.25)if(!this.hullHits(this.x,this.y+e,this.z,this.pitch,this.yaw,this.roll))return e>0&&(this.y+=e+.08),!0;return!1}move(e,t,n,r){if(this.derelict)return this.plough(e,t,n,r);if(!this.settle())return{crash:!0,x:this.x,y:Math.max(0,this.y),z:this.z};let i=Math.hypot(t,n,r)*e,a=Math.max(1,Math.min(8,Math.ceil(i/.6))),o=e/a,s=!1;for(let e=0;e<a;e++){let e=this.x+t*o,i=this.y+n*o,a=this.z+r*o,c=this.hullHits(e,i,a,this.pitch,this.yaw,this.roll);if(c){let l=this.x+t*o,u=this.z+r*o,d=this.hullHits(l,this.y,u,this.pitch,this.yaw,this.roll),f={crash:!0,x:c.x,y:Math.max(0,c.y),z:c.z};if(d){if(this.speed>Xo)return f;this.speed*=.4,this.sink=0,s=!0,this.settle();break}if(n<-13)return f;e=l,i=this.y,a=u,this.sink=0,s=!0}this.x=e,this.y=i,this.z=a}return(this.x<7||this.x>V-7||this.z<7||this.z>U-7)&&(this.x=Math.max(7,Math.min(V-7,this.x)),this.z=Math.max(7,Math.min(U-7,this.z)),this.speed*=.4,this.yaw=Math.atan2(-(V/2-this.x),-(U/2-this.z))*Po),this.y>G-4&&(this.y=G-4,this.sink=Math.max(this.sink,2)),this.syncTransform(),s?`landed`:`flying`}plough(e,t,n,r){let i=Math.hypot(t,n,r)*e;if(i<1e-9)return this.syncTransform(),`flying`;let a=Math.max(1,Math.min(8,Math.ceil(i/.6))),o=e/a;for(let e=0;e<a;e++){let e=this.x+t*o,i=this.y+n*o,a=this.z+r*o,s=this.hullHits(e,i,a,this.pitch,this.yaw,this.roll);if(s)return{crash:!0,x:s.x,y:Math.max(0,s.y),z:s.z};this.x=e,this.y=i,this.z=a}return this.x<7||this.x>V-7||this.z<7||this.z>U-7?{crash:!0,x:Math.max(7,Math.min(V-7,this.x)),y:Math.max(0,this.y),z:Math.max(7,Math.min(U-7,this.z))}:(this.y>G-4&&(this.y=G-4),this.syncTransform(),`flying`)}syncTransform(){this.root.position.set(this.x,this.y,this.z),Pe(this.root.quaternion,this.pitch,this.yaw,this.roll),this.body.shadowDirty=!0,this.prop.shadowDirty=!0}},as=54,os=24,ss=80,cs=170,ls=70,us=14,ds=1.5,fs=36,ps=3,ms=class{constructor(e,t,n){let r=e.gl,i=e=>nt[tt[e].id];this.world=t,this.root=new Ye,this.root.setParent(e.scene);let a=e.makeProgram({vertex:qe,fragment:Fo,uniforms:{uAtlas:{value:n}}});this.body=new A(r,{geometry:Xt(r,Ho,i),program:a,frustumCulled:!1}),this.body.scale.set(Io,Io,Io),this.body.setParent(this.root);let o=Xt(r,Vo,i);this.props=[];for(let t=-1;t<=1;t+=2){let n=new A(r,{geometry:o,program:a,frustumCulled:!1});n.scale.set(Io,Io,Io),n.position.set(t*4,-.5,-4.6),n.setParent(this.root),this.props.push(n),e.addCaster(n,e.makeDepthProgram(qe))}e.addCaster(this.body,e.makeDepthProgram(qe)),this.active=!1,this.phase=`idle`,this.x=0,this.y=0,this.z=0,this.yaw=0,this.propAngle=0,this.engine=null,this.target={x:0,y:0,z:0},this.releaseIn=0,this.setVisible(!1)}setVisible(e){this.body.visible=e,this.body.shadowDirty=!0;for(let t=0;t<this.props.length;t++)this.props[t].visible=e,this.props[t].shadowDirty=!0}approachHeading(e,t,n){let r=360/fs*Math.random(),i=0,a=0,o=0,s=-1/0;for(let c=0;c<fs;c++){let l=r+c*360/fs,u=ts(rs,0,0,-1,0,l,0),d=e-u.x*n,f=t-u.z*n,p=Math.min(d,V-d,f,U-f);p>=ps?(a++,Math.random()*a<1&&(i=l)):p>s&&(s=p,o=l)}return a>0?i:o}launch(e,t,n){this.engine?.stop(),this.engine=null,this.target.x=e,this.target.y=t,this.target.z=n;let r=this.world?this.world.topSolidY():-1;this.y=Math.min(G-4,Math.max(t+ss,r+os));let i=Math.sqrt(Math.max(0,2*(this.y-t))/33);this.fallTime=i;let a=as*i;this.yaw=this.approachHeading(e,n,a);let o=ts(rs,0,0,-1,0,this.yaw,0),s=a+cs;return this.x=e-o.x*s,this.z=n-o.z*s,this.releaseIn=cs,this.phase=`in`,this.active=!0,this.setVisible(!0),this.syncTransform(),this.engine=Jn(this.x,this.y,this.z),!0}stop(){this.active=!1,this.phase=`idle`,this.setVisible(!1),this.engine?.stop(),this.engine=null}get busy(){return this.active&&this.phase===`in`}update(e){if(!this.active)return null;let t=ts(rs,0,0,-1,0,this.yaw,0),n=t.x,r=t.z,i=as*e;this.x+=n*i,this.z+=r*i,this.propAngle+=88*e;for(let e=0;e<this.props.length;e++)this.props[e].rotation.z=this.propAngle;this.engine?.update(this.x,this.y,this.z,.42,1.1);let a=null;if(this.phase===`in`)this.releaseIn-=i,this.releaseIn<=0&&(a=this.release(n,r),this.phase=`out`);else{let e=Math.max(V,U)*.5+ls;Math.hypot(this.x-V/2,this.z-U/2)>e&&this.stop()}return this.syncTransform(),a}release(e,t){return{x:this.x,y:this.y-2.5,z:this.z,vx:e*as,vy:0,vz:t*as,fuse:this.fallTime,power:us,size:ds}}syncTransform(){this.root.position.set(this.x,this.y,this.z),Pe(this.root.quaternion,0,this.yaw,0),this.body.shadowDirty=!0;for(let e=0;e<this.props.length;e++)this.props[e].shadowDirty=!0}},hs=.075,gs=.62,_s=.55,vs=.5,ys=.03,bs=4,xs=.16,Ss=.5,Cs=.11,ws=.32,Ts=F+`
uniform vec3 cameraPosition;
uniform vec3 uStart;
uniform vec3 uEnd;
uniform float uRadius;
in vec2 aSide;
out float vAcross;
void main() {
    vec3 axis = uEnd - uStart;
    vec3 p = uStart + axis * aSide.x;
    vec3 side = cross(normalize(axis), cameraPosition - p);
    float len = length(side);
    // Dead down the barrel the cross product vanishes. Any direction will do
    // there — the quad is edge-on and covers a pixel either way.
    p += (len > 1e-4 ? side / len : vec3(1.0, 0.0, 0.0)) * aSide.y * uRadius;
    vAcross = aSide.y;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,Es=j+`
${N}
in float vAcross;
uniform vec3 uCore;
uniform vec3 uEdge;
uniform float uPower;
out vec4 fragColor;
void main() {
    float r = abs(vAcross);
    float t = max(0.0, 1.0 - r);
    float halo = t * t * sqrt(t);
    float core = pow(t, 8.0);
    fragColor = colorGradeAdditive(vec4((uEdge * halo + uCore * core) * uPower, 1.0));
    fragColor = compositeThroughWater(fragColor, 0.0);
}
`,Ds=F+`
uniform vec3 cameraPosition;
uniform vec3 uPoint;
uniform float uSize;
in vec2 aSide;
out vec2 vQuad;
void main() {
    vec3 f = normalize(cameraPosition - uPoint);
    // Straight up or straight down at the cut, the world up axis is useless as
    // a reference and the frame collapses; swap it for one that cannot be.
    vec3 ref = abs(f.y) > 0.99 ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0);
    vec3 r = normalize(cross(ref, f));
    vec3 u = cross(f, r);
    vQuad = aSide;
    vec3 p = uPoint + (r * aSide.x + u * aSide.y) * uSize;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,Os=j+`
${N}
in vec2 vQuad;
uniform vec3 uCore;
uniform vec3 uEdge;
uniform float uPower;
out vec4 fragColor;
void main() {
    float d = length(vQuad);
    if (d > 1.0) discard;
    float t = 1.0 - d;
    fragColor = colorGradeAdditive(vec4((uEdge * t * t + uCore * pow(t, 5.0)) * uPower, 1.0));
    fragColor = compositeThroughWater(fragColor, 0.0);
}
`;function ks(e,t,n){return new X(e,{aSide:{size:2,data:new Float32Array([t,-1,t,1,n,-1,n,1])}})}var As=class{constructor(e,t,n,r,i){this.gfx=e,this.sim=t,this.world=n,this.debris=r,this.npc=i,this.soundSemitones=0,this.soundBass=!1;let a=e.gl;this.beam=this.createBeam(e),this.beam.visible=!1,this.beam.setParent(e.scene);let o=e.makeProgram({vertex:Ds,fragment:Os,lit:!1,transparent:!0,depthWrite:!1,cullFace:!1,uniforms:{...e.waterPass.effectUniforms,uPoint:{value:[0,0,0]},uSize:{value:gs},uCore:{value:[1,.97,.85]},uEdge:{value:[1,.34,.06]},uPower:{value:1}}});o.setBlendFunc(a.ONE,a.ONE),this.flare=new A(a,{geometry:ks(a,-1,1),program:o,mode:a.TRIANGLE_STRIP,frustumCulled:!1}),this.flare.visible=!1,this.flare.setParent(e.scene),this.firing=!1,this.heatCell=-1,this.heatPool=-1,this.heatSlot=0,this.heatGen=0,this.heat=0,this.pending=-1,this.pendingAge=0,this.blocked=!1,this.impact={hit:!1,x:0,y:0,z:0,nx:0,ny:0,nz:0},this.smokeIn=0,this.flicker=0,this.voice=null,this.muzzle={x:0,y:0,z:0},this.target={hit:null,body:null,reach:0,x:0,y:0,z:0},this.reflection=null,this.allowReflection=!0,this.hitWater=!1}createBeam(e){let t=e.gl,n=e.makeProgram({vertex:Ts,fragment:Es,lit:!1,transparent:!0,depthWrite:!1,cullFace:!1,uniforms:{...e.waterPass.effectUniforms,uStart:{value:[0,0,0]},uEnd:{value:[0,0,0]},uRadius:{value:hs},uCore:{value:[1,.94,.9]},uEdge:{value:[1,.16,.1]},uPower:{value:1}}});return n.setBlendFunc(t.ONE,t.ONE),new A(t,{geometry:ks(t,0,1),program:n,mode:t.TRIANGLE_STRIP,frustumCulled:!1})}trace(e,t){let n=an(this.world,e.x,e.y,e.z,t.x,t.y,t.z,140,this.hitWater),r=n?n.dist:140,i=this.npc.sweepAny(e.x,e.y,e.z,t.x,t.y,t.z,r),a=i?null:n,o=i?i.dist:r,s=this.target;return s.hit=a,s.body=i,s.reach=o,s.x=e.x+t.x*o,s.y=e.y+t.y*o,s.z=e.z+t.z*o,s}update(e,t,n,r,i,a=null){if(!t){this.stop();return}let{hit:o,body:s,reach:c,x:l,y:u,z:d}=a||this.trace(n,r),f=this.muzzle,p,m,h;i?(p=i.x-n.x,m=i.y-n.y,h=i.z-n.z):(p=r.x*_s,m=r.y*_s,h=r.z*_s);let g=p*r.x+m*r.y+h*r.z,_=c*vs,v=g>_?_/g:1;if(f.x=n.x+p*v,f.y=n.y+m*v,f.z=n.z+h*v,this.firing||(this.firing=!0,this.voice=Kn(f.x,f.y,f.z,this.soundSemitones,this.soundBass)),this.impact.hit=!1,s&&this.allowReflection&&this.npc.verity?.reflects(s)){if(this.scorch(e,s,l,u,d),this.impact.hit=!1,!this.reflection){this.reflection=new this.constructor(this.gfx,this.sim,this.world,this.debris,this.npc),this.reflection.allowReflection=!1;for(let e of[this.reflection.beam,this.reflection.flare])e.program.uniforms.uCore.value=[1,1,.65],e.program.uniforms.uEdge.value=[1,.8,.05];this.reflection.beam.program.uniforms.uRadius.value=.11}let t=xn(l-f.x,u-f.y,d-f.z,s.nx,s.ny,s.nz),n={x:l+s.nx*.04,y:u+s.ny*.04,z:d+s.nz*.04};this.reflection.update(e,!0,n,t,{x:l,y:u,z:d})}else this.reflection?.stop(),s?this.scorch(e,s,l,u,d):o?this.burn(e,o):(this.heatCell=-1,this.heatPool=-1,this.heat=0,this.blocked=!1);this.voice?.update(f.x,f.y,f.z,this.impact.hit&&!this.blocked),this.draw(e,f,l,u,d,!!(s||o)),this.effects(e)}scorch(e,t,n,r,i){(t.body!==this.heatPool||t.slot!==this.heatSlot||t.gen!==this.heatGen)&&(this.heatPool=t.body,this.heatSlot=t.slot,this.heatGen=t.gen,this.heatCell=-1,this.heat=t.body===0?xs:0),this.blocked=!1,this.mark(n,r,i,t.nx,t.ny,t.nz),this.heat+=e,this.heat<xs||(this.heat-=xs,this.npc.shoot(t.body,t.slot,t.gen,1,!0))}mark(e,t,n,r,i,a){let o=this.impact;o.hit=!0,o.x=e,o.y=t,o.z=n,o.nx=r,o.ny=i,o.nz=a}burn(e,t){let n=ut(t.x,t.y,t.z);if(n!==this.heatCell&&(this.heatCell=n,this.heatPool=-1,this.heat=0,this.blocked=!1),this.mark(t.x+.5+t.nx*.5,t.y+.5+t.ny*.5,t.z+.5+t.nz*.5,t.nx,t.ny,t.nz),n===this.pending&&(this.pendingAge+=e,this.pendingAge<Ss))return;this.pending=-1,this.heat+=e,this.sim.aim(n);let r=this.sim.idAt(n);r<0||(at(r)?(this.sim.ignite(n,!1,this.allowReflection),this.spend(n)):et(r)>bs?this.blocked=!0:(this.blocked=!1,this.heat<ys||(this.sim.erase(n),this.spend(n))))}spend(e){this.pending=e,this.pendingAge=0,this.heat=0}draw(e,t,n,r,i,a){this.flicker+=e;let o=.84+.16*Math.sin(this.flicker*61)*Math.sin(this.flicker*23),s=this.beam.program.uniforms;s.uStart.value[0]=t.x,s.uStart.value[1]=t.y,s.uStart.value[2]=t.z,s.uEnd.value[0]=n,s.uEnd.value[1]=r,s.uEnd.value[2]=i,s.uPower.value=o,this.beam.visible=!0;let c=this.flare.program.uniforms,l=n-(n-t.x)*.012,u=r-(r-t.y)*.012,d=i-(i-t.z)*.012;c.uPoint.value[0]=l,c.uPoint.value[1]=u,c.uPoint.value[2]=d,c.uSize.value=gs*(this.blocked?1.25:1)*o,c.uPower.value=o,this.flare.visible=a}effects(e){let t=this.impact;if(!t.hit)return;let n=t.x,r=t.y,i=t.z;if(!this.blocked)for(this.smokeIn-=e;this.smokeIn<=0;)this.smokeIn+=Cs,this.debris.puff(n,r,i,.34,1,ws)}stop(){this.reflection?.stop(),this.firing&&(this.firing=!1,this.beam.visible=!1,this.flare.visible=!1,this.heatCell=-1,this.heatPool=-1,this.heat=0,this.pending=-1,this.pendingAge=0,this.blocked=!1,this.impact.hit=!1,this.smokeIn=0,this.voice?.stop(),this.voice=null)}},js=F+`
uniform vec3 uStart;
uniform vec3 uEnd;
uniform float uRadius;
in vec3 aShape; // radial xy, distance along the beam (0..1)
out vec3 vWorld;
void main() {
    vec3 delta = uEnd - uStart;
    float reach = length(delta);
    vec3 axis = reach > 0.0001 ? delta / reach : vec3(0.0, 0.0, -1.0);
    vec3 ref = abs(axis.y) > 0.95 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
    vec3 right = normalize(cross(ref, axis));
    vec3 up = cross(axis, right);
    float radius = min(uRadius, reach * 0.12 + 0.025);
    // Circumscribe the analytic cylinder so the proxy cannot clip its edges.
    vWorld = uStart + delta * aShape.z + (right * aShape.x + up * aShape.y) * radius * 1.03;
    gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}
`,Ms=j+`
${N}
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform vec3 cameraPosition;
uniform vec3 uStart;
uniform vec3 uEnd;
uniform vec3 uCore;
uniform vec3 uEdge;
uniform float uRadius;
uniform float uPower;
uniform sampler2D uOpaqueDepth;
uniform bool uHasOpaqueDepth;
uniform vec2 uViewport;
uniform vec2 uClip;
in vec3 vWorld;
out vec4 fragColor;
void main() {
    vec3 delta = uEnd - uStart;
    float reach = length(delta);
    if (reach < 0.001) discard;
    vec3 axis = delta / reach;
    vec3 ray = normalize(vWorld - cameraPosition);
    vec3 origin = cameraPosition - uStart;
    float axialOrigin = dot(origin, axis), axialRay = dot(ray, axis);
    vec3 radialOrigin = origin - axis * axialOrigin;
    vec3 radialRay = ray - axis * axialRay;
    float radius = min(uRadius, reach * 0.12 + 0.025);
    float a = dot(radialRay, radialRay);
    float b = dot(radialOrigin, radialRay);
    float c = dot(radialOrigin, radialOrigin) - radius * radius;
    float enter = -1e6, leave = 1e6;
    if (a < 0.000001) {
        if (c > 0.0) discard;
    } else {
        float discriminant = b * b - a * c;
        if (discriminant <= 0.0) discard;
        float root = sqrt(discriminant);
        enter = (-b - root) / a;
        leave = (-b + root) / a;
    }
    if (abs(axialRay) < 0.000001) {
        if (axialOrigin < 0.0 || axialOrigin > reach) discard;
    } else {
        float t0 = -axialOrigin / axialRay;
        float t1 = (reach - axialOrigin) / axialRay;
        enter = max(enter, min(t0, t1));
        leave = min(leave, max(t0, t1));
    }
    float forward = max(0.0001, -(viewMatrix * vec4(ray, 0.0)).z);
    enter = max(enter, uClip.x / forward);
    if (uHasOpaqueDepth) {
        float depth = texture(uOpaqueDepth, gl_FragCoord.xy / uViewport).r;
        float distance = uClip.x * uClip.y / max(0.0001, uClip.y - depth * (uClip.y - uClip.x));
        leave = min(leave, distance / forward);
    }
    if (leave <= enter) discard;

    float pathLength = leave - enter;
    float coreLight = 0.0, haloLight = 0.0;
    float neck = max(0.001, min(0.18, reach * 0.2));
    // Denser samples near the muzzle avoid dotted highlights where the
    // beam is narrow, without spending those samples on its distant tail.
    for (int i = 0; i < 32; i++) {
        float t0 = float(i) / 32.0, t1 = float(i + 1) / 32.0;
        t0 *= t0; t1 *= t1;
        float stepSize = (t1 - t0) * pathLength;
        vec3 p = origin + ray * (enter + (t0 + t1) * 0.5 * pathLength);
        float along = dot(p, axis);
        float width = mix(min(0.035, radius), radius, smoothstep(0.0, neck, along));
        vec3 radial = p - axis * along;
        float r2 = dot(radial, radial) / (width * width);
        float edge = 1.0 - smoothstep(0.4, 1.0, r2);
        coreLight += exp(-r2 * 14.0) * edge * stepSize;
        haloLight += exp(-r2 * 4.0) * edge * stepSize;
    }
    float core = 1.0 - exp(-coreLight / pathLength * 4.0);
    float halo = 1.0 - exp(-haloLight / pathLength * 1.8);
    if (halo < 0.002) discard;
    vec3 color = uCore * core * 1.0 + uEdge * halo * 0.45;
    vec4 front = projectionMatrix * viewMatrix * vec4(cameraPosition + ray * enter, 1.0);
    gl_FragDepth = clamp(front.z / front.w * 0.5 + 0.5, 0.0, 1.0);
    fragColor = compositeThroughWater(colorGradeAdditive(vec4(color * uPower, 1.0)), 0.0);
}
`;function Ns(e){let t=[],n=[];for(let e of[0,1])for(let n=0;n<=16;n++){let r=n/16*Math.PI*2;t.push(Math.cos(r),Math.sin(r),e)}for(let e=0;e<16;e++){let t=e,r=e+16+1;n.push(t,t+1,r,t+1,r+1,r)}for(let e of[0,1]){let r=t.length/3,i=e*17;t.push(0,0,e);for(let t=0;t<16;t++)n.push(r,i+t+ +(e===0),i+t+(e===0?0:1))}return new X(e,{aShape:{size:3,data:new Float32Array(t)},index:{data:new Uint16Array(n)}})}function Ps(e){let t=e.gl,n=e.makeProgram({vertex:js,fragment:Ms,lit:!1,transparent:!0,depthWrite:!1,cullFace:t.FRONT,uniforms:{...e.waterPass.effectUniforms,uStart:{value:[0,0,0]},uEnd:{value:[0,0,0]},uRadius:{value:.45},uCore:{value:[1,.96,1]},uEdge:{value:[.42,.12,1]},uPower:{value:1},uOpaqueDepth:{value:e.waterPass.effectUniforms.uWaterDepth.value},uHasOpaqueDepth:{value:!1},uViewport:{value:[1,1]},uClip:{value:[.1,1e3]}}});n.setBlendFunc(t.ONE,t.ONE);let r=new A(t,{geometry:Ns(t),program:n,frustumCulled:!1});return r.onBeforeRender(({camera:r})=>{let i=n.uniforms;i.uViewport.value[0]=t.drawingBufferWidth,i.uViewport.value[1]=t.drawingBufferHeight,i.uClip.value[0]=r.near,i.uClip.value[1]=r.far,i.uHasOpaqueDepth.value=e.sceneDepth.capture(),i.uHasOpaqueDepth.value&&(i.uOpaqueDepth.value=e.sceneDepth.texture)}),r}var Fs=.08,Is=class extends As{createBeam(e){return Ps(e)}constructor(...e){super(...e),this.soundSemitones=-2,this.soundBass=!0,this.hitWater=!0,this.cooldown=0;for(let e of[this.beam,this.flare])e.program.uniforms.uCore.value=[1,.96,1],e.program.uniforms.uEdge.value=[.42,.12,1];this.beam.program.uniforms.uRadius.value=.45}update(e,...t){this.cooldown=Math.max(0,this.cooldown-e),super.update(e,...t)}burn(e,t){this.blocked=!1,this.heatPool=-1;let{x:n,y:r,z:i}=this.target;this.mark(n,r,i,t.nx,t.ny,t.nz),this.cooldown>0||(this.sim.explode(n,r,i,S.ultra_laser.radius,!1,8),this.destructionSmoke(n,r,i),this.cooldown=Fs)}draw(...e){super.draw(...e),this.beam.program.uniforms.uPower.value=1,this.flare.program.uniforms.uSize.value*=1.25,this.flare.program.uniforms.uPower.value*=.5}effects(e){this.target.body&&super.effects(e)}destructionSmoke(e,t,n){let r=e-this.muzzle.x,i=t-this.muzzle.y,a=n-this.muzzle.z,o=Math.hypot(r,i,a),s=o>0?r/o:0,c=o>0?i/o:0,l=o>0?a/o:1,u=S.ultra_laser.radius-.3;for(let r=0;r<5;r++){let r=Math.random()*2-1,i=Math.random()*Math.PI*2,a=Math.sqrt(1-r*r),o=Math.cos(i)*a,d=r,f=Math.sin(i)*a;o*s+d*c+f*l<0&&(o=-o,d=-d,f=-f),o+=s,d+=c,f+=l;let p=u/Math.hypot(o,d,f);this.debris.puff(e+o*p,t+d*p,n+f*p,0,1,.7,.2,R.ultra_smoke)}}stop(){super.stop(),this.cooldown=0}};function Ls(){return p.value!==`menu`&&!E.value&&!ie.value&&!be.value&&!l.value&&!s.value&&!pe.value&&!y.value&&!T.value&&_e.value!==`flying`&&(p.value!==`campaign`||ke.value===`active`)}function Rs(e){return e===`laser`||!!S[e]?.beam}function zs(e,t,n,r){return!Rs(e)||!t||!Ls()?!1:w.value===`touch`?r.heldFor(e,!C.value):n}var Bs=class{constructor(e,t,n,{range:r=140,radius:i=16}={}){this.world=e,this.sim=t,this.visual=n,this.range=r,this.radius=i,this.origin={x:0,y:0,z:0},this.direction={x:0,y:0,z:-1},this.muzzle={x:0,y:0,z:0},this.target={x:0,y:0,z:0};for(let e of[n.beam,n.flare])e.program.uniforms.uCore.value=[.65,1,1],e.program.uniforms.uEdge.value=[.05,.6,1];n.beam.program.uniforms.uRadius.value=.1}trace(e,t){let n=Math.hypot(t.x,t.y,t.z);if(!n)return this.hasHit=!1,null;Object.assign(this.origin,e);let r=this.direction;r.x=t.x/n,r.y=t.y/n,r.z=t.z/n;let i=an(this.world,e.x,e.y,e.z,r.x,r.y,r.z,this.range,!0);this.reach=i?i.dist:this.range;let a=this.target;return a.x=e.x+r.x*this.reach,a.y=e.y+r.y*this.reach,a.z=e.z+r.z*this.reach,this.hasHit=!!i,a}draw(e,t){let n=this.origin,r=this.direction,i=this.muzzle,a=t?t.x-n.x:r.x*.5,o=t?t.y-n.y:r.y*.5,s=t?t.z-n.z:r.z*.5,c=a*r.x+o*r.y+s*r.z,l=this.reach*.5,u=c>l?l/c:1;i.x=n.x+a*u,i.y=n.y+o*u,i.z=n.z+s*u,this.visual.draw(e,i,this.target.x,this.target.y,this.target.z,this.hasHit),this.visual.voice?.update(i.x,i.y,i.z,this.hasHit)}update(e,t,n){t?(this.hasHit&&this.sim.restore(this.target.x,this.target.y,this.target.z,this.radius),this.visual.firing=!0,this.draw(e,n)):this.stop()}stop(){this.visual.stop()}},Vs=class{constructor(){this.clear()}clear(){this.rounds=new Map,this.weapon=null,this.reload=null}select(e){this.weapon?.key!==e?.key&&(this.reload=null),this.weapon=e,e&&!this.rounds.has(e.key)&&this.rounds.set(e.key,e.magazine)}get loaded(){return this.weapon?this.rounds.get(this.weapon.key):0}get ready(){return!!this.weapon&&!this.reload&&this.loaded>0}startReload(){let e=this.weapon;if(!e||this.reload||this.loaded>=e.magazine)return!1;let t=e.magazine-this.loaded;return this.reload={key:e.key,elapsed:0,duration:e.reloadTime+(e.reloadPerRound||0)*t,rounds:t,style:e.reloadStyle||`magazine`},!0}spend(){return this.ready?(this.rounds.set(this.weapon.key,this.loaded-1),!0):!1}update(e){!this.reload||e<=0||(this.reload.elapsed=Math.min(this.reload.duration,this.reload.elapsed+e),this.reload.elapsed+1e-8<this.reload.duration||(this.rounds.set(this.weapon.key,this.weapon.magazine),this.reload=null))}},Hs=m;function Us(e){return Hs[f[e]?.profile||e]||null}var Ws=256,Gs=8,Ks=240,qs=3,Js=1.15,Ys=64,Xs=8,Zs=.055,Qs=.4,$s=F+`
uniform vec3 cameraPosition;
in vec2 aSide;      // x: 0 at the tail, 1 at the head; y: -1/+1 across
in vec4 iLine1;     // xyz: tail point, w: world half-width
in vec4 iLine2;     // xyz: head point, w: brightness, 0..1

out float vAcross;
out float vLife;
out float vAlong;

void main() {
    vec3 a = iLine1.xyz, b = iLine2.xyz;
    vec3 p = mix(a, b, aSide.x);
    vec3 seg = b - a;
    float len = length(seg);
    vec3 along = len > 1e-5 ? seg / len : vec3(0.0, 1.0, 0.0);
    vec3 toCam = cameraPosition - p;
    float dist = length(toCam);
    vec3 side = cross(along, dist > 1e-5 ? toCam / dist : vec3(0.0, 0.0, 1.0));
    float sl = length(side);
    // Dead on down the barrel the cross product collapses and the quad has no
    // width to expand along. There is nothing to draw in that case — the streak
    // is a point — so pick any perpendicular and let the width take care of it.
    side = sl > 1e-4 ? side / sl : vec3(1.0, 0.0, 0.0);

    // A tracer forty blocks away is a hairline, and a hairline is a flickering
    // dotted line rather than a streak: it lands on a different subpixel every
    // frame. So the width has a FLOOR IN SCREEN SPACE — it grows with distance
    // just fast enough to stay about a pixel and a half wide however far off it
    // is, which is what a real tracer does to a camera as well.
    float w = max(iLine1.w, dist * 0.0018);
    p += side * aSide.y * w;

    vAcross = aSide.y;
    vAlong = aSide.x;
    vLife = iLine2.w;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,ec=j+`
${N}
in float vAcross;
in float vLife;
in float vAlong;
out vec4 fragColor;
void main() {
    // Across the streak: a hot core with a soft shoulder. Squared rather than
    // pow()'d, which is the same curve for a quarter of the cost.
    float e = 1.0 - abs(vAcross);
    float core = e * e;
    // Along it: the HEAD is the bullet and the tail is what it left behind, so
    // this runs the other way from the streak this used to draw. Cubed, so the
    // dim end is genuinely dim — a tail that merely dims reads as a rod with a
    // bright tip, and what makes this a round in flight is that the front of it
    // is the only part with real weight.
    float t = vAlong * vAlong * vAlong;
    float taper = mix(0.06, 1.0, t);
    vec3 hot = mix(vec3(1.0, 0.62, 0.22), vec3(1.0, 0.96, 0.82), core * t);
    fragColor = colorGradeAdditive(vec4(hot * core * taper * vLife * 1.7, 1.0));
    fragColor = compositeThroughWater(fragColor, 0.0);
}
`;function tc(e){return new X(e,{aSide:{size:2,data:new Float32Array([0,-1,0,1,1,-1,1,1])}})}var nc=F+`
in vec2 aCorner;    // -1/+1 on both axes
in vec4 iFlash1;    // xyz: the muzzle, w: radius in blocks
in vec4 iFlash2;    // x: brightness 0..1, y: petal rotation, zw: unused

out vec2 vUv;
out float vBright;
out float vRot;

void main() {
    // The camera's right and up in WORLD space. The view matrix's upper 3x3 is
    // the transpose of the camera's rotation, so its rows — read as [col][row]
    // in column-major GLSL — are exactly those two axes.
    vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
    vec3 up    = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
    vec3 p = iFlash1.xyz + (right * aCorner.x + up * aCorner.y) * iFlash1.w;
    vUv = aCorner;
    vBright = iFlash2.x;
    vRot = iFlash2.y;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,rc=j+`
${N}
in vec2 vUv;
in float vBright;
in float vRot;
out vec4 fragColor;
void main() {
    float r = length(vUv);
    if (r > 1.0) discard;
    float a = atan(vUv.y, vUv.x) + vRot;
    // The core is most of the light and almost all of the white.
    float core = exp(-r * 7.0);
    // TWO ORDERS OF PETALS, turned against each other. One order alone is a
    // plus sign or a six-pointed star — a shape, and a shape is what a flash
    // must not read as. Two coprime orders at an offset interfere into
    // something lopsided, which is what a bang looks like.
    float p1 = pow(max(0.0, cos(a * 2.0)), 10.0);
    float p2 = pow(max(0.0, cos(a * 3.0 + 0.9)), 6.0);
    float petals = (p1 + p2 * 0.7) * exp(-r * 2.4);
    // The quad's own edge, faded so the corners never show as a square.
    float edge = 1.0 - smoothstep(0.7, 1.0, r);
    float i = (core * 1.7 + petals * 0.8) * edge * vBright;
    vec3 col = mix(vec3(1.0, 0.40, 0.08), vec3(1.0, 0.97, 0.86), min(1.0, core * 1.9));
    fragColor = compositeThroughWater(colorGradeAdditive(vec4(col * i, 1.0)), 0.0);
}
`,ic=class{constructor(e,t,n){let r=e.gl;this.list=[],this.geometry=new X(r,{aCorner:{size:2,data:new Float32Array([-1,-1,-1,1,1,-1,1,1])}}),this.inst=new Je(r,this.geometry,[`iFlash1`,`iFlash2`],Xs,Ys);let i=e.makeProgram({vertex:nc,fragment:rc,uniforms:e.waterPass.effectUniforms,lit:!1,transparent:!0,depthWrite:!1,depthTest:!0,cullFace:!1});i.setBlendFunc(r.ONE,r.ONE),this.mesh=new A(r,{geometry:this.geometry,program:i,mode:r.TRIANGLE_STRIP,frustumCulled:!1,renderOrder:n}),t&&D(r,this.mesh),this.mesh.visible=!1,this.mesh.setParent(e.scene)}add(e,t,n,r){this.list.length>=Ys&&this.list.shift(),this.list.push({x:e,y:t,z:n,size:r,life:Zs,rot:Math.random()*Math.PI*2})}clear(){this.list.length=0}update(e){let t=this.inst.data;for(let t=this.list.length-1;t>=0;t--){let n=this.list[t];n.life-=e,n.life<=0&&(this.list[t]=this.list[this.list.length-1],this.list.pop())}let n=0;for(let e=0;e<this.list.length&&n<Ys;e++){let r=this.list[e],i=r.life/Zs,a=n*Xs;t[a]=r.x,t[a+1]=r.y,t[a+2]=r.z,t[a+3]=r.size*(1+Qs*(1-i)),t[a+4]=i*i,t[a+5]=r.rot,t[a+6]=0,t[a+7]=0,n++}this.inst.upload(n),this.mesh.visible=n>0}},ac=class{constructor(e){let t=e.gl;this.list=[],this.geometry=tc(t),this.inst=new Je(t,this.geometry,[`iLine1`,`iLine2`],Gs,Ws);let n=e.makeProgram({vertex:$s,fragment:ec,uniforms:e.waterPass.effectUniforms,lit:!1,transparent:!0,depthWrite:!1,cullFace:!1});n.setBlendFunc(t.ONE,t.ONE),this.mesh=new A(t,{geometry:this.geometry,program:n,mode:t.TRIANGLE_STRIP,frustumCulled:!1}),this.mesh.visible=!1,this.mesh.setParent(e.scene),this.onArrive=null}add(e,t,n,r,i,a,o){this.list.length>=Ws&&this.list.shift();let s=r-e,c=i-t,l=a-n,u=Math.hypot(s,c,l),d=u>1e-5?1/u:0,f={ax:e,ay:t,az:n,dx:s*d,dy:c*d,dz:l*d,dist:u,width:o,head:0,arrived:!1,ignite:-1,playerLit:!1,spark:0,snx:0,sny:0,snz:0};return this.list.push(f),f}clear(){this.list.length=0}update(e){let t=this.inst.data,n=Ks*e,r=Math.max(qs,n*Js);for(let e=this.list.length-1;e>=0;e--){let t=this.list[e];t.head+=n,!t.arrived&&t.head>=t.dist&&(t.arrived=!0,this.onArrive&&this.onArrive(t)),t.head-r>=t.dist&&(this.list[e]=this.list[this.list.length-1],this.list.pop())}let i=0;for(let e=0;e<this.list.length&&i<Ws;e++){let n=this.list[e];if(n.head<0)continue;let a=n.head<n.dist?n.head:n.dist,o=n.head-r>0?n.head-r:0,s=i*Gs;t[s]=n.ax+n.dx*o,t[s+1]=n.ay+n.dy*o,t[s+2]=n.az+n.dz*o,t[s+3]=n.width,t[s+4]=n.ax+n.dx*a,t[s+5]=n.ay+n.dy*a,t[s+6]=n.az+n.dz*a,t[s+7]=n.head<=n.dist?1:(n.dist-o)/r,i++}this.inst.upload(i),this.mesh.visible=i>0}},oc={x:0,y:0,z:0};function sc(e,t,n,r,i){let a=Math.hypot(e,n),o,s;a>1e-5?(o=-n/a,s=e/a):(o=1,s=0);let c=t*s,l=n*o-e*s,u=-t*o,d=Math.tan(r)*Math.sqrt(Math.random()),f=Math.random()*Math.PI*2,p=Math.cos(f)*d,m=Math.sin(f)*d,h=e+o*p+c*m,g=t+l*m,_=n+s*p+u*m,v=1/Math.hypot(h,g,_);i.x=h*v,i.y=g*v,i.z=_*v}var cc=class{constructor(e,t,n,r,i,a){this.gfx=e,this.sim=t,this.world=n,this.npc=r,this.entities=i,this.debris=a,this.tracers=new ac(e),this.tracers.onArrive=e=>{e.ignite>=0&&this.sim.ignite(e.ignite,!1,e.playerLit,!0),e.spark&&this.debris.spark(e.ax+e.dx*e.dist,e.ay+e.dy*e.dist,e.az+e.dz*e.dist,e.snx,e.sny,e.snz)},this.flashView=new ic(e,!0,45),this.flashWorld=new ic(e,!1,0),this.magazines=new Vs,this.onReload=null,this.cooldown=0,this.spin=0,this.wasHeld=!1,this.scoped=!1,this.aiming=!1,this.velocity=null,this.onRecoil=null,this.canFire=null,this.onFired=null,this.muzzle=null}prepare(e,t,n=!0){this.magazines.select(Us(t)),this.magazines.update(e),n&&this.magazines.weapon&&this.magazines.loaded===0&&this.reload(t)}reload(e){return this.magazines.select(Us(e)),this.magazines.startReload()?(this.onReload?.(),!0):!1}update(e,t,n,r,i){let a=Us(t);if(this.cooldown-=e,!a||!n){this.cooldown=Math.max(0,this.cooldown),this.spin=Math.max(0,this.spin-e*2.2),this.wasHeld=!1,this.drawUpdate(e);return}let o=a.auto??a.rate<.34,s=o||!this.wasHeld;this.wasHeld||(this.cooldown=Math.max(0,this.cooldown)),this.wasHeld=!0,a.spinUp>0&&(this.spin=Math.min(1,this.spin+e/a.spinUp),this.spin<1)||s&&(a.rate===0||this.cooldown<=1e-8)&&this.fire(a,r,i)&&(this.cooldown=a.rate+(o?Math.max(-e,this.cooldown):0)),this.drawUpdate(e)}drawUpdate(e){this.tracers.update(e),this.flashView.update(e),(this.aiming||this.scoped)&&this.flashView.mesh&&(this.flashView.mesh.visible=!1),this.flashWorld.update(e)}fire(e,t,n){if(this.magazines.select(e),this.magazines.reload||this.canFire&&!this.canFire())return!1;if(!this.magazines.ready)return this.reload(e.key),!1;let r,i,a,o=(this.aiming||this.scoped)&&(e.scope||e.zoom);if(o)r=t.x+n.x*.6,i=t.y+n.y*.6,a=t.z+n.z*.6;else if(this.muzzle)r=this.muzzle.x,i=this.muzzle.y,a=this.muzzle.z;else{let e=Math.hypot(n.x,n.z)||1,o=-n.z/e,s=n.x/e;r=t.x+o*.3+n.x*.6,i=t.y-.22+n.y*.6,a=t.z+s*.3+n.z*.6}let s=o?e.scope?.spread??e.scopedSpread:e.spread;if(e.projectile){sc(n.x,n.y,n.z,s,oc);let r=an(this.world,t.x,t.y,t.z,oc.x,oc.y,oc.z,1.2),i=r?Math.min(.9,Math.max(0,r.dist-.26)):.9,a=t.x+oc.x*i,o=t.y+oc.y*i,c=t.z+oc.z*i;if(!this.entities.spawnGrenade(a,o,c,oc.x,oc.y,oc.z,this.velocity||{},e.projectile))return!1}else for(let o=0;o<e.pellets;o++)sc(n.x,n.y,n.z,s,oc),this.round(e,t,oc,r,i,a);return o||this.flashView.add(r,i,a,e.flash),dr(e.sound||e.key),this.onRecoil&&this.onRecoil(e.recoil,(Math.random()-.5)*2*e.drift),this.magazines.spend(),this.onFired?.(),this.magazines.loaded===0&&this.reload(e.key),!0}round(e,t,n,r,i,a,o=!1,s=0){let c=this.npc.sweepAny(t.x,t.y,t.z,n.x,n.y,n.z,e.range),l=this.entities.pick(t.x,t.y,t.z,n.x,n.y,n.z,e.range),u=an(this.world,t.x,t.y,t.z,n.x,n.y,n.z,e.range),d=c?c.dist:1/0,f=l?l.dist:1/0,p=u?u.dist:1/0,m=e.range,h=-1,g=0,_=!1,v=0,y=0,b=0;d<=f&&d<=p&&c?(m=d,this.npc.shoot(c.body,c.slot,c.gen,e.damage),_=!o&&this.npc.verity?.reflects(c),g=1,v=_?c.nx:-n.x,y=_?c.ny:-n.y,b=_?c.nz:-n.z):f<=p&&l?(m=f,l.entity.detonate()):u&&(m=p,h=ut(u.x,u.y,u.z),g=1,v=u.nx,y=u.ny,b=u.nz);let x=this.tracers.add(r,i,a,t.x+n.x*m,t.y+n.y*m,t.z+n.z*m,e.width);if(x.ignite=h,x.playerLit=!o,x.spark=g,x.snx=v,x.sny=y,x.snz=b,x.head=-s*Ks,_){let o=t.x+n.x*m,s=t.y+n.y*m,l=t.z+n.z*m,u=xn(o-r,s-i,l-a,c.nx,c.ny,c.nz),d={x:o+c.nx*.04,y:s+c.ny*.04,z:l+c.nz*.04};this.round(e,d,u,o,s,l,!0,x.dist/Ks)}}remoteShot(e,t,n,r,i,a,o,s){let c=this.tracers.add(e,t,n,r,i,a,.032);o===1&&(c.ignite=ut(Math.floor(r+c.dx*.001),Math.floor(i+c.dy*.001),Math.floor(a+c.dz*.001))),c.spark=+!!s,c.snx=-c.dx,c.sny=-c.dy,c.snz=-c.dz,this.flashWorld.add(e,t,n,.3),rr(e,t,n,`rifle`)}clear(){this.magazines.clear(),this.cooldown=this.spin=0,this.wasHeld=this.aiming=!1,this.tracers.clear(),this.flashView.clear(),this.flashWorld.clear()}},lc=class{constructor(e){this.camera=e,this.key=null,this.held=this.toggled=this.active=!1,this.amount=0,this.baseFov=null,this.sensitivity=1}select(e){this.key!==e&&(this.cancel(),this.key=e)}setHeld(e){this.held=e}toggle(){this.toggled=!this.toggled}cancel(){this.held=this.toggled=this.active=!1,this.amount=0,this.sensitivity=1,this.baseFov!==null&&this.camera.perspective({fov:this.baseFov}),this.baseFov=null}update(e,t,n,r){if(this.select(t),!r||!n)return this.cancel(),!1;this.active=this.held||this.toggled,this.active&&this.baseFov===null&&(this.baseFov=this.camera.fov);let i=+!!this.active;if(this.amount+=(i-this.amount)*(1-Math.exp(-e*22)),Math.abs(i-this.amount)<.002&&(this.amount=i),this.sensitivity=1/(1+(n.zoom-1)*this.amount),this.baseFov!==null){let e=Math.atan(Math.tan(this.baseFov*Math.PI/360)*this.sensitivity)*360/Math.PI;this.camera.perspective({fov:this.amount?e:this.baseFov}),this.amount||(this.baseFov=null)}return this.amount>.05}},uc=class{constructor(){this.clear()}press(e,t){return this.pointerId!==null||e==null||!t?!1:(this.pointerId=e,this.key=t,!0)}release(e){if(e!=null&&e!==this.pointerId)return!1;let t=this.pointerId!==null;return this.clear(),t}clear(){this.pointerId=this.key=null}heldFor(e,t=!0){return t&&this.pointerId!==null&&e===this.key}},dc=e=>Math.max(0,Math.min(1,e)),fc=(e,t,n)=>{let r=dc((e-t)/(n-t));return r*r*(3-2*r)},pc=(e,t,n,r,i)=>fc(e,t,n)*(1-fc(e,r,i));function mc(e,t){if(t.fill(0),!e)return t;let n=dc(e.elapsed/e.duration),r=pc(n,0,.16,.82,1),i=pc(n,.62,.67,.69,.75);if(e.style===`shell`){let i=Math.sin(dc((n-.16)/.64)*Math.PI*2*e.rounds);t[0]=-.06*r,t[1]=.085*r+.008*i*r,t[2]=-.04*r,t[3]=.18*r,t[5]=-.85*r}else e.style===`belt`?(t[0]=-.09*r,t[1]=.06*r+.014*i,t[2]=-.05*r,t[3]=.3*r,t[4]=-.15*r,t[5]=-.55*r):e.style===`drum`?(t[0]=-.07*r,t[1]=.06*r+.01*i,t[2]=-.04*r,t[3]=.35*r,t[5]=-.55*r):(t[0]=-.055*r,t[1]=.05*r+.014*i,t[2]=-.04*r,t[3]=.2*r,t[4]=-.12*r,t[5]=(e.style===`bolt`?-.38:-.55)*r);return t}function hc(e,t){let n={positions:[],normals:[],uvs:[],indices:[]},r=new Map;for(let i of t)r.has(i)||(r.set(i,r.size),n.positions.push(...e.positions.slice(i*3,i*3+3)),n.normals.push(...e.normals.slice(i*3,i*3+3)),n.uvs.push(...e.uvs.slice(i*2,i*2+2))),n.indices.push(r.get(i));return n}function gc(e){return[0,1,2].map(t=>{let n=e.positions.filter((e,n)=>n%3===t);return(Math.min(...n)+Math.max(...n))/2})}var _c=class{constructor(e){this.parts=[{name:`pump`,node:new Ye,geometry:hc(e,e.groups.pump)}],this.travel=e.scale*3.5,this.reset()}fire(){this.age=0}reset(){this.age=.55,this.parts[0].node.position.z=0}update(e){this.age=Math.min(.55,this.age+e);let t=Math.max(0,Math.min(1,(this.age-.07)/.48));this.parts[0].node.position.z=t===1?0:Math.sin(t*Math.PI)*this.travel}},vc=class{constructor(e,t){let n=Object.keys(e.groups).filter(e=>/^bullet__\d+$/.test(e)).sort((e,t)=>Number(e.slice(8))-Number(t.slice(8))).map(n=>{let r=hc(e,e.groups[n]),i=gc(r),a=t.elements.find(e=>e.name===n).transform;return{name:n,geometry:r,pivot:i,angle:Math.atan2(a[4],a[0])}}),r=n[0],i=n[n.length-1];this.path=[{pivot:[r.pivot[0]-.2*e.scale,r.pivot[1]-1.8*e.scale,r.pivot[2]],angle:r.angle},...n,{pivot:[i.pivot[0]+1.2*e.scale,i.pivot[1]-.2*e.scale,i.pivot[2]],angle:i.angle}],this.parts=[r,...n].map((e,t)=>{let n={...e.geometry,positions:e.geometry.positions.map((t,n)=>t-e.pivot[n%3])};return{name:t===0?`belt-spare`:e.name,geometry:n,node:new Ye,slot:t,angle:e.angle}}),this.duration=m.aplok_m249.rate,this.reset()}fire(){this.target++}reset(){this.step=this.target=0,this.pose()}update(e){this.step=Math.min(this.target,this.step+e/this.duration),this.pose()}pose(){for(let e of this.parts){let t=(e.slot+this.step)%this.parts.length,n=Math.floor(t),r=t-n,i=this.path[n],a=this.path[n+1];e.node.position.set(...i.pivot.map((e,t)=>e+(a.pivot[t]-e)*r));let o=Math.atan2(Math.sin(a.angle-i.angle),Math.cos(a.angle-i.angle));e.node.rotation.z=i.angle+o*r-e.angle,e.node.visible=t>.15&&t<this.parts.length-.15}}};function yc(e,t){let n=e===`v2_uzi`?{mag:[21],bolt:[7,8,9,13,14]}:e===`scifi_grenadelauncher`?{drum:[9,10,11,12,13,23,24]}:null;return n?{...t,elements:t.elements.map((e,t)=>{let r=Object.keys(n).find(e=>n[e].includes(t));return r?{...e,name:r}:e})}:t}var bc=class{constructor(e,t,n){this.asset=e,this.cycle=n,this.scale=t.scale,this.parts=[...n?.parts||[]],this.reloadParts=[];let r=(e,n)=>{let r=n.flatMap(e=>t.groups[e]||[]);if(!r.length)return;let i=hc(t,r),a=gc(i);e===`cover`&&(a[2]=Math.min(...i.positions.filter((e,t)=>t%3==2))),i.positions=i.positions.map((e,t)=>e-a[t%3]);let o={name:e,sourceNames:n,geometry:i,pivot:a,node:new Ye};this.parts.push(o),this.reloadParts.push(o)};r(`magazine`,[`mag`,`bullet_0`,`bullet_1`]),r(`bolt`,[`bolt`,`pull_back`,`lock`,`sideHandle`]),r(`cover`,[`bodyCover`]),r(`drum`,[`drum`]),r(`shell`,[`shell`]);let i=new Set(this.parts.flatMap(e=>(e.sourceNames||[e.name]).flatMap(e=>t.groups[e]||[])));this.body=hc(t,t.indices.filter(e=>!i.has(e))),this.reset()}fire(){this.cycle?.fire()}reset(){this.cycle?.reset(),this.wasReloading=!1,this.restore()}restore(){for(let e of this.reloadParts)e.node.position.set(...e.pivot),e.node.rotation.set(0,0,0),e.node.visible=!0}update(e,t){if(this.wasReloading&&!t&&this.cycle?.reset(),this.wasReloading=!!t,this.cycle?.update(t?0:e),this.restore(),!t)return;let n=t.elapsed/t.duration,r=this.scale,i=pc(n,.16,.34,.5,.68),a=pc(n,.72,.79,.84,.92);for(let e of this.reloadParts){let o=e.node;if(e.name===`magazine`)o.position.y-=i*r*(t.style===`belt`?5:7),o.position.x-=i*r*2,o.rotation.z=-.2*i,o.visible=n<.35||n>.49;else if(e.name===`bolt`)o.position.z+=a*r*2.5,t.style===`bolt`&&(o.rotation.z=-.6*pc(n,.68,.74,.88,.94));else if(e.name===`cover`)o.rotation.x=-1.2*pc(n,.1,.23,.7,.83);else if(e.name===`drum`)o.position.x-=i*r*4,o.rotation.z=Math.PI*2*fc(n,.32,.6);else if(e.name===`shell`){let e=Math.max(0,Math.min(1,(n-.16)/.64))*t.rounds%1,i=1-fc(e,.12,.8);n>.16&&n<.8&&(o.position.x-=i*r*3,o.position.y-=i*r*2,o.rotation.z=-.3*i,o.visible=e<.85)}}if(t.style===`belt`)for(let e of this.cycle?.parts||[])e.node.visible=n<.25||n>.68;else if(t.style===`shell`){let e=this.cycle?.parts[0];e&&(e.node.position.z=a*this.cycle.travel)}}};function xc(e,t,n){let r=null;return e===`aplok_mossberg`?r=new _c(t):e===`aplok_m249`&&(r=new vc(t,n)),new bc(e,t,r)}var Sc=F+`
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
in vec3 position;
in vec3 normal;
in vec2 uv;
out vec3 vNormal;
out vec3 vWorld;
centroid out vec2 vUv;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNormal = mat3(modelMatrix) * normal;
  vUv = uv;
  // Mesh computes modelViewMatrix on the CPU before uploading floats. Going
  // through world-space wp loses the tiny magazine/stock insets far from the
  // origin, even though their source faces are already separated.
  gl_Position = projectionMatrix * (modelViewMatrix * vec4(position, 1.0));
}`,Cc=j+M+`
in vec3 vNormal;
in vec3 vWorld;
// MSAA may cover a triangle only at a pixel's samples, outside its centre.
// Keep UV interpolation inside the covered triangle so atlas neighbours with
// zero alpha cannot discard that edge pixel and expose the world as a seam.
centroid in vec2 vUv;
uniform sampler2D uModelMap;
out vec4 fragColor;
void main() {
  vec4 texel = texture(uModelMap, vUv);
  if (texel.a < 0.3) discard;
  vec3 light = diffuseLightFree(vNormal, vWorld) + vec3(0.12);
  fragColor = colorGrade(vec4(gammaOut(texel.rgb * light), 1.0));
}`;async function wc(e,t){let[n,r]=await P(t),i=e.gl,a=yc(t.asset,n),o=Ge(a,t.length),s=xc(t.asset,o,a),c=new O(i,{image:r,internalFormat:i.SRGB8_ALPHA8,generateMipmaps:!1,magFilter:i.NEAREST,minFilter:i.NEAREST}),l=e.makeProgram({vertex:Sc,fragment:Cc,uniforms:{uModelMap:{value:c}},transparent:!0});l.setBlendFunc(i.ONE,i.ZERO);let u=e=>J(i,e.positions,e.normals,e.uvs,e.indices);if(s)for(let e of s.parts)e.geometry=u(e.geometry);return{geometry:u(s?.body||o),motion:s,program:l,muzzle:o.muzzle,use:`kick`}}var Tc=.265,Ec=-.165,Dc=-.26,Oc=.75,kc=.45,Ac=[{tile:`metal`,sx:.122,sy:.122,sz:.024,x:0,y:.024,z:.118},{tile:`metal`,sx:.102,sy:.102,sz:.042,x:0,y:.024,z:.09},{tile:`rocket_side`,sx:.084,sy:.084,sz:.126,x:0,y:.024,z:.01},{tile:`rocket_side`,sx:.102,sy:.102,sz:.076,x:0,y:.024,z:-.084},{tile:`gun_wood`,sx:.096,sy:.096,sz:.096,x:0,y:.024,z:-.168},{tile:`rocket_side`,sx:.082,sy:.082,sz:.086,x:0,y:.024,z:-.252},{tile:`metal`,sx:.09,sy:.09,sz:.016,x:0,y:.024,z:-.3},{tile:`rocket_engine`,sx:.036,sy:.036,sz:.052,x:0,y:.024,z:-.33},{tile:`rocket_tip`,sx:.086,sy:.086,sz:.086,x:0,y:.024,z:-.392},{tile:`rocket_tip`,sx:.046,sy:.046,sz:.046,x:0,y:.024,z:-.456},{tile:`gun_body`,sx:.048,sy:.106,sz:.064,x:0,y:-.062,z:-.028,rx:-.32},{tile:`metal`,sx:.036,sy:.01,sz:.046,x:0,y:-.02,z:-.054},{tile:`gun_body`,sx:.042,sy:.086,sz:.05,x:0,y:-.052,z:-.186,rx:-.1},{tile:`gun_rail`,sx:.028,sy:.038,sz:.024,x:-.046,y:.048,z:-.124},{tile:`gun_body`,sx:.034,sy:.044,sz:.096,x:-.06,y:.076,z:-.124},{tile:`laser_cell`,sx:.026,sy:.028,sz:.01,x:-.06,y:.076,z:-.174},{tile:`gun_rail`,sx:.022,sy:.026,sz:.014,x:-.06,y:.076,z:-.072}],jc=[...Ac.filter((e,t)=>t<7||t>9).map(e=>({...e,tile:e.tile===`rocket_side`?`hole_launcher_body`:e.tile===`gun_wood`?`gun_body`:e.tile})),{tile:`rocket_engine`,sx:.078,sy:.078,sz:.024,x:0,y:.024,z:-.32},...[-1,1].flatMap(e=>[{tile:`gun_body`,sx:.024,sy:.132,sz:.09,x:e*.066,y:.024,z:-.348},{tile:`gun_body`,sx:.108,sy:.024,sz:.09,x:0,y:.024+e*.066,z:-.348}])],Mc=[-1,1].flatMap(e=>[{tile:`hole_launcher_coil`,sx:.012,sy:.1,sz:.018,x:e*.066,y:.024,z:-.397},{tile:`hole_launcher_coil`,sx:.1,sy:.012,sz:.018,x:0,y:.024+e*.066,z:-.397},{tile:`hole_launcher_coil`,sx:.006,sy:.05,sz:.072,x:e*.045,y:.024,z:-.254}]),Nc=[{tile:`grenade_body`,sx:.095,sy:.125,sz:.095,x:0,y:0,z:0},{tile:`grenade_metal`,sx:.045,sy:.03,sz:.045,x:0,y:.072,z:0},{tile:`grenade_metal`,sx:.014,sy:.075,sz:.016,x:.048,y:.03,z:0}],Pc=[{tile:`sticky_body`,sx:.14,sy:.14,sz:.055,x:0,y:0,z:0},{tile:`sticky_panel`,sx:.098,sy:.098,sz:.014,x:0,y:0,z:.032},{sx:.056,sy:.03,sz:.008,x:0,y:.014,z:.042,faces:{pz:`sticky_screen`,nz:`sticky_panel`,px:`sticky_panel`,nx:`sticky_panel`,py:`sticky_panel`,ny:`sticky_panel`}}],Fc=[{tile:`radio_shell`,sx:.094,sy:.23,sz:.052,x:0,y:0,z:0},{tile:`radio_shell`,sx:.102,sy:.07,sz:.058,x:0,y:-.098,z:0},{tile:`radio_grille`,sx:.078,sy:.058,sz:.01,x:0,y:.064,z:.03},{tile:`radio_panel`,sx:.08,sy:.118,sz:.01,x:0,y:-.038,z:.03},{tile:`metal`,sx:.016,sy:.13,sz:.016,x:-.03,y:.182,z:0},{tile:`gun_body`,sx:.026,sy:.028,sz:.026,x:-.03,y:.126,z:0},{tile:`rust`,sx:.024,sy:.028,sz:.024,x:.008,y:.128,z:0},{tile:`rust`,sx:.02,sy:.024,sz:.02,x:.036,y:.126,z:0},{tile:`gun_body`,sx:.014,sy:.052,sz:.028,x:-.052,y:.026,z:0},{tile:`metal`,sx:.034,sy:.084,sz:.01,x:0,y:-.03,z:-.03}],Ic=[{tile:`gun_body`,sx:.11,sy:.09,sz:.075,x:0,y:0,z:0},{tile:`metal`,sx:.116,sy:.01,sz:.081,x:0,y:.05,z:0},{tile:`hazard`,sx:.08,sy:.04,sz:.006,x:0,y:-.006,z:.04}],Lc=[{tile:`metal`,sx:.016,sy:.086,sz:.016,x:0,y:.094,z:0},{tile:`gun_wood`,sx:.092,sy:.022,sz:.026,x:0,y:.146,z:0}],Rc=[0,0,0],zc=[{tile:`metal`,sx:.05,sy:.05,sz:.018,x:0,y:0,z:.112},{tile:`gun_body`,sx:.012,sy:.03,sz:.022,x:0,y:0,z:.13},{tile:`gun_body`,sx:.044,sy:.044,sz:.15,x:0,y:0,z:.03},{tile:`basalt`,sx:.049,sy:.049,sz:.012,x:0,y:0,z:.086},{tile:`basalt`,sx:.049,sy:.049,sz:.012,x:0,y:0,z:.056},{tile:`basalt`,sx:.049,sy:.049,sz:.012,x:0,y:0,z:.026},{tile:`basalt`,sx:.049,sy:.049,sz:.012,x:0,y:0,z:-.004},{tile:`metal`,sx:.052,sy:.052,sz:.034,x:0,y:0,z:-.06},{tile:`gun_mag`,sx:.022,sy:.012,sz:.022,x:0,y:.03,z:-.06},{tile:`gun_body`,sx:.058,sy:.058,sz:.02,x:0,y:0,z:-.087},{tile:`gun_body`,sx:.068,sy:.068,sz:.02,x:0,y:0,z:-.105},{tile:`metal`,sx:.08,sy:.08,sz:.036,x:0,y:0,z:-.132},{tile:`gun_rail`,sx:.088,sy:.088,sz:.014,x:0,y:0,z:-.156}],Bc=[{tile:`snow`,sx:.066,sy:.066,sz:.004,x:0,y:0,z:-.162}],Vc=[.235,-.235,-.42],Hc={...fr,igniter:{parts:Ic,at:[.24,-.265,-.42],rot:[.12,-.38,.04],use:`plunge`,action:Lc,actionAt:Rc,kind:`plunge`,order:51},plane:{parts:Fc,at:[.235,-.255,-.4],rot:[.16,-.52,.1],use:`flick`},airstrike:{parts:Fc,at:[.235,-.255,-.4],rot:[.16,-.52,.1],use:`flick`},flashlight:{parts:zc,glow:Bc,at:[.215,-.205,-.34],rot:[.05,-.1,.12],use:`flick`},rocket:{parts:Ac,tile:`rocket_side`,at:[.23,-.15,-.3],use:`kick`},water_sponge:{parts:[{tile:`water_sponge`,sx:.13,sy:.13,sz:.13,x:0,y:0,z:0}],at:Vc,rot:[.05,-.3,.1],use:`throw`},recovery_gun:pr,water_balloon:{parts:ma.map(e=>({...e,sx:e.sx*.4,sy:e.sy*.4,sz:e.sz*.4,x:e.x*.4,y:e.y*.4,z:e.z*.4})),at:Vc,rot:[.05,-.3,.1],use:`throw`},hole_launcher:{parts:jc,glow:Mc,at:[.23,-.15,-.3],use:`kick`},grenade:{parts:Nc,at:Vc,rot:[.05,-.3,.1],use:`throw`},sticky:{parts:Pc,at:Vc,rot:[.1,-.45,.08],use:`throw`}},Uc=.185,Wc=[.245,-.235,-.42],Gc=[.28,-.62,0],Kc=.235,qc=[.25,-.23,-.44],Jc=[.3,-.58,0],Yc=.255,Xc=[.24,-.225,-.44],Zc=[.1,3.3,.05],Qc=F+`
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
in vec3 position;
in vec3 normal;
in vec2 uv;
out vec3 vNormal;
out vec3 vWorld;
out vec2 vUv;
flat out float vLayer;
void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorld = wp.xyz;
    vNormal = mat3(modelMatrix) * normal;
    vec2 tileUv = uv * vec2(${8 .toFixed(1)}, ${Qe.toFixed(1)});
    vec2 tile = floor(tileUv);
    vLayer = tile.y * ${8 .toFixed(1)} + tile.x;
    vUv = fract(tileUv);
    // Keep fine viewmodel geometry in camera space; a world-space float round
    // trip can collapse neighbouring surfaces on large maps.
    gl_Position = projectionMatrix * (modelViewMatrix * vec4(position, 1.0));
}
`;function $c(e){return j+M+`
in vec3 vNormal;
in vec3 vWorld;
in vec2 vUv;
flat in float vLayer;
uniform sampler2DArray uAtlas;
out vec4 fragColor;
void main() {
    vec2 dx = dFdx(vUv), dy = dFdy(vUv);
    // Match voxelgpu.js: crisp interiors with a one-screen-pixel transition
    // at texel boundaries. Keep unsnapped gradients for mip selection.
    vec2 pixel = vUv * ${16 .toFixed(1)};
    vec2 footprint = clamp((abs(dx) + abs(dy)) * ${16 .toFixed(1)}, vec2(0.00001), vec2(1.0));
    vec2 boundary = floor(pixel + 0.5);
    vec2 filteredUv = (boundary + clamp((pixel - boundary) / footprint, -0.5, 0.5)) / ${16 .toFixed(1)};
    vec3 t = vec3(filteredUv, vLayer);
    vec4 texel = textureGrad(uAtlas, t, dx, dy);
${e?`    if (texel.a < 0.004) discard;
    float cover = texel.a;`:`    if (textureLod(uAtlas, t, 0.0).a < 0.3) discard;
    float cover = 1.0;`}
    vec3 env = uBackroomsLighting > 0.5 ? heldBackroomsLighting(normalize(vNormal)) : diffuseLightFree(vNormal, vWorld) + vec3(0.12);
    vec3 lit = texel.rgb * env;
    fragColor = colorGrade(vec4(gammaOut(lit), cover));
}
`}var el=j+M+`
in vec3 vNormal;
in vec3 vWorld;
in vec2 vUv;
flat in float vLayer;
uniform sampler2DArray uAtlas;
uniform vec3 uGlow;
out vec4 fragColor;
void main() {
    vec4 texel = texture(uAtlas, vec3(vUv, vLayer));
    vec3 env = uBackroomsLighting > 0.5 ? heldBackroomsLighting(normalize(vNormal)) : diffuseLightFree(vNormal, vWorld) + vec3(0.12);
    fragColor = colorGrade(vec4(gammaOut(texel.rgb * (uGlow + env)), 1.0));
}
`,tl=.34,nl=11,rl=.055,il=.013,al=.2,ol=26e-5,sl=.055,cl=9,ll=.9,ul=.01,dl=.016,fl=.046,pl=.03,ml=.2,hl=1.35,gl=.0045,_l=.062,vl=.18,yl=.26,bl=.95,xl=12,Sl=.055,Cl=26,wl=.0035,Tl=.3,El=.34,Dl=.85,Ol=-.7,kl=.368,Al={place:Tl,throw:.42,flick:.22,plunge:.3};function jl(e){return e>sl?sl:e<-.055?-.055:e}function Ml(e){return e<=0?0:e>=1?1:e*e*(3-2*e)}function Nl(e){return e<=0?0:e>=1?1:e}var Pl=[0,0,0,0,0,0];function Fl(e,t,n,r){if(r[0]=0,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=0,e===`place`){let e=Math.sqrt(t),i=El,a=Math.sin(e*Math.PI)*i;r[0]=-.12*n[0]*a,r[1]=-.385*n[1]*Math.sin(e*2*Math.PI)*i,r[2]=Dl*n[2]*a,r[3]=Ol*a,r[5]=kl*a}else if(e===`throw`){let e=Ml(t/.28),n=t<.28?0:Nl((t-.28)/.28),i=t<.56?0:(t-.56)/.44,a=(e-2*n)*(1-i);r[1]=.07*a,r[2]=.105*a,r[3]=-.8*a}else if(e===`flick`){let e=Math.sin(Math.PI*t);r[1]=.02*e,r[5]=.46*e}else if(e===`plunge`){let e=Math.sin(Math.PI*t);r[1]=-.03*e,r[3]=.22*e}}function Il(e){let t=1/0,n=1/0,r=1/0,i=-1/0,a=-1/0,o=-1/0;for(let s=0;s<e.length;s++){let c=e[s];c.x-c.sx/2<t&&(t=c.x-c.sx/2),c.y-c.sy/2<n&&(n=c.y-c.sy/2),c.z-c.sz/2<r&&(r=c.z-c.sz/2),c.x+c.sx/2>i&&(i=c.x+c.sx/2),c.y+c.sy/2>a&&(a=c.y+c.sy/2),c.z+c.sz/2>o&&(o=c.z+c.sz/2)}return[t,n,r,i,a,o]}function Ll(e,t){let n=[];if(e===`spider`)return In;if(e===`creeper`){for(let e=0;e<Br.length;e++){let t=Br[e];n.push({sx:t[1],sy:t[2],sz:t[3],x:t[4],y:t[5],z:t[6],tile:t[0],head:t[0]===`head`})}return n}let r=e===`villager`||e===`zombie`?Xr:ii;for(let i=0;i<r.length;i++){let a=r[i];a.wear||a.muzzle||a.zombieOnly&&e!==`zombie`||e===`zombie`&&(a.humanOnly||a.villagerOnly)||a.team&&a.team!==t+1||n.push({sx:a.sx,sy:a.sy,sz:a.sz,x:a.x,y:a.y,z:a.z,rx:a.rx,ry:a.ry,rz:a.rz,tile:e===`zombie`&&a.tile===`robe`?a.leg?`pants`:`shirt`:a.tile,head:e===`soldier`?a.tile===`helmet`&&a.sy>.2:a.tile===`head`})}return n}function Rl(e,t,n){if(e===`zombie`){let e=R.zombie_skin;return n.head?{px:e,nx:e,py:e,ny:e,pz:e,nz:R.zombie_face}:n.tile===`shirt`?R.zombie_shirt:n.tile===`pants`?R.zombie_pants:e}if(e===`spider`)return di(n);if(e===`creeper`){let e=R.creeper_skin;return n.head?{px:e,nx:e,py:e,ny:e,pz:e,nz:R.creeper_face}:e}if(e===`villager`){let e=R.villager_skin;return n.head?{px:e,nx:e,py:e,ny:e,pz:e,nz:R.villager_face}:n.tile===`skin`?e:R.villager_robe}let r=t===0?`red`:`blue`,i=R[`soldier_${r}_helmet`];return n.tile===`helmet`?n.head?{px:i,nx:i,py:i,ny:i,pz:i,nz:R[`soldier_${r}_face`]}:i:n.tile===`vest`?R[`soldier_${r}_vest`]:n.tile===`glove`?R.gun_mag:n.tile===`gun`?R.gun_body:R.soldier_fatigue}var zl=class{constructor(e,t){this.gfx=e,this.gl=e.gl,this.rig=new Ye,this.rig.setParent(e.scene),this.coverage=this.gl.getParameter(this.gl.SAMPLES)>0,this.program=e.makeProgram({fog:!1,vertex:Qc,fragment:$c(this.coverage),uniforms:{uAtlas:{value:t}},transparent:!0,depthTest:!0,depthWrite:!0}),this.program.setBlendFunc(this.gl.ONE,this.gl.ZERO),this.glowProgram=e.makeProgram({vertex:Qc,fragment:el,uniforms:{uAtlas:{value:t},uGlow:{value:[.25,.25,.25]}},transparent:!0,depthTest:!0,depthWrite:!0}),this.built={},this.current=null,this.currentKey=null,this.muzzle={x:0,y:0,z:0},this.hasMuzzle=!1,this.kick=0,this.act=0,this.actKind=``,this.equip=0,this.beam=0,this.beamOn=!1,this.swayX=0,this.swayY=0,this.idle=0,this.buzz=0,this.lastYaw=null,this.lastPitch=0}installItem(e,t){this.built[e]||(this.built[e]=t,this.currentKey===e&&(this.currentKey=null,this.setItem(e)))}piece(e,t,n,r){let i=D(this.gl,new A(this.gl,{geometry:e,program:r||this.program,frustumCulled:!1,renderOrder:n}));if(this.coverage){let e=this.gl;i.onBeforeRender(()=>e.renderer.enable(e.SAMPLE_ALPHA_TO_COVERAGE)),i.onAfterRender(()=>e.renderer.disable(e.SAMPLE_ALPHA_TO_COVERAGE))}return i.setParent(t),i}build(e,t,n=!1){return qt(this.gl,e,e=>{let r;if(e.faces){r={};for(let t in e.faces)r[t]=R[e.faces[t]]}else r=R[e.tile||t];return q(r,e.sx,e.sy,e.sz,n?Math.max(e.sx,e.sy,e.sz):0)})}blockItem(e){let t=tt[e];if(!t)return null;let n=nt[t.id];if(!n)return null;let r={py:n[0],ny:n[2],px:n[1],nx:n[1],pz:n[1],nz:n[1]};return{geometry:qt(this.gl,[{x:0,y:0,z:0}],()=>q(r,Uc,Uc,Uc)),at:Wc,rot:Gc,use:`place`}}structureItem(e){let t=Ut[e];if(!t)return null;let n=Jt(t,e=>nt[tt[e].id]),r=n.positions;if(r.length===0)return null;let i=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];for(let e=0;e<r.length;e++){let t=e%3;r[e]<i[t]&&(i[t]=r[e]),r[e]>a[t]&&(a[t]=r[e])}let o=Kc/(Math.max(a[0]-i[0],Math.max(a[1]-i[1],a[2]-i[2]))||1);for(let e=0;e<r.length;e+=3)r[e]=(r[e]-(i[0]+a[0])/2)*o,r[e+1]=(r[e+1]-(i[1]+a[1])/2)*o,r[e+2]=(r[e+2]-(i[2]+a[2])/2)*o;return{geometry:J(this.gl,n.positions,n.normals,n.uvs,n.indices),at:qc,rot:Jc,use:`place`}}mobItem(e,t){let n=Ll(e,t);if(n.length===0)return null;let r=Il(n),i=e===`spider`?.32/Math.max(r[3]-r[0],r[5]-r[2]):Yc/(r[4]-r[1]),a=(r[1]+r[4])/2,o=(r[0]+r[3])/2,s=(r[2]+r[5])/2,c=[];for(let e=0;e<n.length;e++){let t=n[e];c.push({sx:t.sx*i,sy:t.sy*i,sz:t.sz*i,x:(t.x-o)*i,y:(t.y-a)*i,z:(t.z-s)*i,rx:t.rx,ry:t.ry,rz:t.rz,tile:t.tile,head:t.head})}return{geometry:qt(this.gl,c,n=>{let r=Rl(e,t,n);return q(r,n.sx,n.sy,n.sz)}),at:Xc,rot:Zc,use:`place`}}derivedItem(e){return e.indexOf(`structure:`)===0?this.structureItem(e.slice(10)):e===`creeper`?this.mobItem(`creeper`,0):e===`villager`?this.mobItem(`villager`,0):e===`zombie`?this.mobItem(`zombie`,0):e===`spider`?this.mobItem(`spider`,0):e===`soldier_red`?this.mobItem(`soldier`,0):e===`soldier_blue`?this.mobItem(`soldier`,1):this.blockItem(e)}modelFor(e){if(!e)return null;if(this.built[e]!==void 0)return this.built[e];if(f[e])return this.built[e]=null,wc(this.gfx,f[e]).then(t=>{this.installItem(e,this.derivedModel(t))}).catch(t=>{delete this.built[e],console.error(`Failed to load held weapon:`,t)}),null;let t=Hc[e],n=null;if(t){let e=t.at||[Tc,Ec,Dc],r=t.rot||[0,0,0],i=new Ye;i.setParent(this.rig),i.visible=!1,this.piece(this.build(t.parts,t.tile,t.proportionalUV),i,50),t.glow&&this.piece(this.build(t.glow,t.tile,t.proportionalUV),i,50,this.glowProgram);let a=null;t.action&&(a=new Ye,a.setParent(i),a.position.set(t.actionAt[0],t.actionAt[1],t.actionAt[2]),this.piece(this.build(t.action,t.tile,t.proportionalUV),a,t.order)),n={holder:i,action:a,kind:t.kind,rest:t.actionAt,muzzle:t.muzzle||null,use:t.use||`place`,at:e,rot:r}}else{let t=this.derivedItem(e);t&&(n=this.derivedModel(t))}return this.built[e]=n,n}derivedModel(e){let t=new Ye;if(t.setParent(this.rig),t.visible=!1,this.piece(e.geometry,t,50,e.program),e.motion)for(let n of e.motion.parts)n.node.setParent(t),this.piece(n.geometry,n.node,50,e.program);return{holder:t,action:null,kind:null,rest:null,muzzle:e.muzzle||null,motion:e.motion,use:e.use,at:e.at||[Tc,Ec,Dc],rot:e.rot||[0,0,0]}}setItem(e){if(e===this.currentKey)return;let t=this.modelFor(e);this.currentKey=e,this.current!==t&&(this.current&&(this.current.motion?.reset(),this.current.holder.visible=!1),this.current=t,this.kick=0,this.act=0,this.beam=0,this.hasMuzzle=!1,t&&(t.motion?.reset(),t.holder.visible=!0,this.equip=1))}setGlow(e){let t=this.glowProgram.uniforms.uGlow.value;if(this.currentKey===`recovery_gun`){t[0]=.1,t[1]=.8,t[2]=1.8;return}if(this.currentKey===`ultra_laser`){t[0]=1.1,t[1]=.2,t[2]=1.8;return}if(S[this.currentKey]?.hole){t[0]=.8,t[1]=.3,t[2]=1.8;return}let n=e?1.6:0;t[0]=n,t[1]=n*.96,t[2]=n*.82}fired(e){this.kick=Math.min(1,this.kick+e*tl),this.current?.motion?.fire()}acted(){let e=this.current;e&&(e.use===`kick`?this.fired(1):(this.actKind=e.use,this.act=Al[e.use]||Tl))}setBeam(e){this.beamOn=e}update(e,t,n,r,i,a,o=null){let s=this.current;if(!s){this.hasMuzzle=!1,this.beamOn=!1;return}this.lastYaw===null&&(this.lastYaw=n,this.lastPitch=r);let c=n-this.lastYaw;(c>90||c<-90)&&(c=0);let l=r-this.lastPitch;this.lastYaw=n,this.lastPitch=r;let u=e>1e-5?1/e:0,d=jl(c*u*ol),f=jl(-l*u*ol),p=Math.min(1,e*cl);this.swayX+=(d-this.swayX)*p,this.swayY+=(f-this.swayY)*p,this.kick-=this.kick*Math.min(1,e*nl),this.kick<.001&&(this.kick=0),s.motion?.update(e,o),this.act>0&&(this.act=Math.max(0,this.act-e)),this.equip>0&&(this.equip=Math.max(0,this.equip-e/vl));let m=+!!this.beamOn;this.beam+=(m-this.beam)*Math.min(1,e*xl),this.beamOn=!1,this.idle=(this.idle+e*hl)%(Math.PI*2),this.buzz=(this.buzz+e*Cl)%(Math.PI*2);let h=this.rig;h.position.copy(t.position),h.quaternion.copy(t.quaternion);let g=Math.tan(t.fov*(Math.PI/360))*kc*t.aspect,_=Math.min(s.at[0],g*Oc),v=Math.sin(i)*ul*a,y=-Math.abs(Math.sin(i))*dl*a,b=Math.abs(Math.sin(i-ml))*pl*a,x=(1-a)*gl;if(o)mc(o,Pl);else if(this.act>0){let e=Al[this.actKind]||Tl;Fl(this.actKind,1-this.act/e,s.at,Pl)}else Pl[0]=0,Pl[1]=0,Pl[2]=0,Pl[3]=0,Pl[4]=0,Pl[5]=0;let S=this.equip*this.equip,ee=Math.sin(this.buzz*7.3)*wl*this.beam,C=s.holder;if(C.position.set(_+this.swayX+v+Math.cos(this.idle)*x*.6+Pl[0],s.at[1]+this.swayY+y+Math.sin(this.idle)*x+this.kick*il+Pl[1]-yl*S+ee,s.at[2]+this.kick*rl+Pl[2]-Sl*this.beam),C.rotation.set(s.rot[0]+this.kick*al+this.swayY*ll+Pl[3]+bl*S-.1*this.beam+b,s.rot[1]-this.swayX*ll+Pl[4],s.rot[2]+Math.sin(i)*fl*a+Pl[5]),s.action&&s.kind===`plunge`){let e=Al.plunge,t=this.act>0&&this.actKind===`plunge`?1-this.act/e:0;s.action.position.y=s.rest[1]-Math.sin(Math.PI*t)*_l}this.refreshMuzzle()}refreshMuzzle(){let e=this.current;if(this.rig.updateMatrixWorld(),!e||!e.muzzle){this.hasMuzzle=!1;return}let t=e.holder.worldMatrix,n=e.muzzle;this.muzzle.x=t[0]*n[0]+t[4]*n[1]+t[8]*n[2]+t[12],this.muzzle.y=t[1]*n[0]+t[5]*n[1]+t[9]*n[2]+t[13],this.muzzle.z=t[2]*n[0]+t[6]*n[1]+t[10]*n[2]+t[14],this.hasMuzzle=!0}},Bl=`#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`,Vl=`
uniform sampler2D uDepth;
uniform vec2 uSize;
uniform vec2 uLowSize;
uniform sampler2D uWaterDepth;
uniform bool uWaterActive;
ivec2 lowPixel(ivec2 p) { return clamp(p, ivec2(0), ivec2(uLowSize) - 1); }
float sceneDepth(ivec2 p) {
    ivec2 source = ivec2((vec2(lowPixel(p)) + 0.5) * uSize / uLowSize);
    return texelFetch(uDepth, source, 0).r;
}
float edgeDepth(ivec2 source) {
    float depth = texelFetch(uDepth, source, 0).r;
    if (uWaterActive) depth = min(depth, texture(uWaterDepth, (vec2(source) + 0.5) / uSize).r);
    return depth;
}
float lowEdgeDepth(ivec2 p) {
    return edgeDepth(ivec2((vec2(lowPixel(p)) + 0.5) * uSize / uLowSize));
}
`,Hl=`#version 300 es
precision highp float;
precision highp sampler2D;
${Vl}
out vec4 fragColor;
void main() {
    gl_FragDepth = sceneDepth(ivec2(gl_FragCoord.xy));
    fragColor = vec4(0.0);
}
`,Ul=`#version 300 es
precision highp float;
precision highp sampler2D;
uniform sampler2D uSmoke;
${Vl}
uniform vec2 uClip;
out vec4 fragColor;
void main() {
    vec2 uv = gl_FragCoord.xy / uSize;
    vec2 p = uv * uLowSize - 0.5;
    vec2 f = fract(p);
    ivec2 a = ivec2(floor(p));
    ivec2 b = a + ivec2(1, 0), c = a + ivec2(0, 1), d = a + ivec2(1, 1);
    float depth = edgeDepth(ivec2(gl_FragCoord.xy));
    float remaining = uClip.y / (uClip.y - uClip.x) - depth;
    // A 1% relative distance tolerance, expressed in buffer depth so the four
    // neighbouring samples need no linearization. Keep it relative even at
    // the near plane, where a world-unit minimum would admit distant smoke.
    float tolerance = remaining * 0.01;
    vec4 neighbors = vec4(lowEdgeDepth(a), lowEdgeDepth(b), lowEdgeDepth(c), lowEdgeDepth(d));
    vec4 keep = 1.0 - smoothstep(vec4(tolerance), vec4(tolerance * 2.0), abs(neighbors - depth));
    // Most pixels lie on one surface or the sky. Hardware filtering is enough
    // there; only silhouettes need four colour taps and renormalized weights.
    if (all(greaterThan(keep, vec4(0.999)))) {
        fragColor = texture(uSmoke, uv);
        return;
    }
    // Bilinear reconstruction, excluding taps from the other side of a wall
    // or terrain silhouette. Plain linear filtering leaks smoke onto them.
    vec4 bilinear = vec4((1.0 - f.x) * (1.0 - f.y), f.x * (1.0 - f.y),
        (1.0 - f.x) * f.y, f.x * f.y);
    vec4 weights = bilinear * keep;
    float total = dot(weights, vec4(1.0));
    // At grazing angles even adjacent ground pixels can differ by more than
    // the depth tolerance. Rejecting all four makes alternate rows transparent.
    // Fall back to the nearest depth on the camera side of this pixel's
    // surface: its smoke already passed a stricter occlusion test. A thin
    // foreground object with no such sample still stays clear of distant smoke.
    if (total <= 0.0001) {
        vec4 delta = depth - neighbors;
        vec4 candidates = mix(vec4(2.0), delta, step(vec4(0.0), delta));
        float closest = min(min(candidates.x, candidates.y), min(candidates.z, candidates.w));
        if (closest == 2.0) { fragColor = vec4(0.0); return; }
        weights = bilinear * vec4(equal(candidates, vec4(closest)));
        total = dot(weights, vec4(1.0));
    }
    vec4 color = texelFetch(uSmoke, lowPixel(a), 0) * weights.x + texelFetch(uSmoke, lowPixel(b), 0) * weights.y
        + texelFetch(uSmoke, lowPixel(c), 0) * weights.z + texelFetch(uSmoke, lowPixel(d), 0) * weights.w;
    fragColor = total > 0.0001 ? color / total : vec4(0.0);
}
`;function Wl(e,t){return new O(e,{generateMipmaps:!1,minFilter:e.NEAREST,magFilter:e.NEAREST,flipY:!1,width:1,height:1,...t})}var Gl=class{constructor(e){this.gfx=e,this.gl=e.gl,this.enabled=!0,this.supported=null,this.width=this.height=0,this.sceneDepth=e.sceneDepth,e.renderer.addRestoreHandler(()=>this.restore())}restore(){if(!this.supported)return;let e=this.gl,t=e.renderer;this.colorBuffer=e.createFramebuffer(),t.bindFramebuffer({buffer:this.colorBuffer}),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.color.texture,0),this.lowDepth=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,this.lowDepth),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT24,this.lowWidth||1,this.lowHeight||1),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this.lowDepth),e.bindRenderbuffer(e.RENDERBUFFER,null),t.bindFramebuffer()}worthwhile(e,t){let n=e.geometry.attributes,r=n.aCenter.data,i=n.aShape.data,a=t.viewMatrix,o=t.projectionMatrix,s=e.lowResolution?2.5:3,c=0;for(let n=0;n<e.geometry.instancedCount*4;n+=4){let e=r[n],l=r[n+1],u=r[n+2],d=-(a[2]*e+a[6]*l+a[10]*u+a[14]);if(d<t.near||d>t.far||i[n+2]<.003)continue;let f=r[n+3]*Math.max(1,i[n]),p=f*o[0]/d,m=f*o[5]/d,h=(a[0]*e+a[4]*l+a[8]*u+a[12])*o[0]/d,g=(a[1]*e+a[5]*l+a[9]*u+a[13])*o[5]/d;if(c+=Math.max(0,Math.min(1,h+p)-Math.max(-1,h-p))*Math.max(0,Math.min(1,g+m)-Math.max(-1,g-m))*.25,c>=s)return!0}return!1}init(){let e=this.gl,t=e.renderer;if(this.supported=!1,!t.isWebgl2||!t.getExtension(`EXT_color_buffer_float`)||!this.sceneDepth.capture())return;if(this.color=Wl(e,{internalFormat:e.RGBA16F,type:e.HALF_FLOAT,minFilter:e.LINEAR,magFilter:e.LINEAR}),this.color.update(),this.colorBuffer=e.createFramebuffer(),t.bindFramebuffer({buffer:this.colorBuffer}),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.color.texture,0),this.lowDepth=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,this.lowDepth),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT24,1,1),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this.lowDepth),e.bindRenderbuffer(e.RENDERBUFFER,null),this.supported=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE,t.bindFramebuffer(),!this.supported){e.deleteFramebuffer(this.colorBuffer),this.color.remove(),e.deleteRenderbuffer(this.lowDepth);return}this.uniforms={uSmoke:{value:this.color},uDepth:{value:this.sceneDepth.texture},uWaterDepth:{value:this.gfx.waterPass.depth},uWaterActive:{value:!1},uSize:{value:[1,1]},uLowSize:{value:[1,1]},uClip:{value:[.1,600]}};let n=new Ie(e,{vertex:Bl,fragment:Ul,uniforms:this.uniforms,transparent:!0,depthTest:!1,depthWrite:!1,cullFace:!1});n.setBlendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA);let r=new X(e,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])}});this.composite=new A(e,{program:n,geometry:r}),this.downsample=new A(e,{geometry:r,program:new Ie(e,{vertex:Bl,fragment:Hl,uniforms:this.uniforms,depthFunc:e.ALWAYS,cullFace:!1})})}resize(e,t){if(e===this.width&&t===this.height)return;this.width=e,this.height=t,this.lowWidth=Math.ceil(e/2),this.lowHeight=Math.ceil(t/2),this.color.width=this.lowWidth,this.color.height=this.lowHeight,this.color.needsUpdate=!0,this.color.update();let n=this.gl;n.bindRenderbuffer(n.RENDERBUFFER,this.lowDepth),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT24,this.lowWidth,this.lowHeight),n.bindRenderbuffer(n.RENDERBUFFER,null),this.uniforms.uSize.value[0]=e,this.uniforms.uSize.value[1]=t,this.uniforms.uLowSize.value[0]=this.lowWidth,this.uniforms.uLowSize.value[1]=this.lowHeight}draw(e,t){let n=this.gl,r=n.renderer,i=n.drawingBufferWidth,a=n.drawingBufferHeight,o=r.state.viewport;e.lowResolution=this.enabled&&this.supported!==!1&&t&&r.state.framebuffer===null&&o.x===0&&o.y===0&&o.width===i&&o.height===a&&this.worthwhile(e,t),e.lowResolution&&this.supported===null&&this.init(),!e.lowResolution||!this.supported?(e.lowResolution=!1,e.program.uniforms.uWaterTargetSize.value[0]=i,e.program.uniforms.uWaterTargetSize.value[1]=a,A.prototype.draw.call(e,{camera:t})):(this.resize(i,a),this.sceneDepth.capture(),r.bindFramebuffer({buffer:this.colorBuffer}),r.setViewport(this.lowWidth,this.lowHeight),this.downsample.draw(),e.program.uniforms.uWaterTargetSize.value[0]=this.lowWidth,e.program.uniforms.uWaterTargetSize.value[1]=this.lowHeight,A.prototype.draw.call(e,{camera:t}),r.bindFramebuffer(),r.setViewport(i,a),this.uniforms.uClip.value[0]=t.near,this.uniforms.uClip.value[1]=t.far,this.uniforms.uWaterActive.value=this.gfx.waterPass.active,this.composite.draw())}};function Kl(e,t,n,r,i,a){e[t]=n,e[t+1]=r,e[t+2]=i,e[t+3]=a}var ql=F+`
in vec2 position;
in vec4 aCenter; // xyz, radius
in vec4 aShape;  // vertical aspect, heat, opacity, seed
in vec4 aMotion; // age, kind, screen-space rotation, unused
out vec2 vUv;
out vec4 vShape;
out vec2 vMotion;
void main() {
    vUv = position;
    vShape = aShape;
    vMotion = aMotion.xy;
    vec4 center = viewMatrix * vec4(aCenter.xyz, 1.0);
    vec2 corner = position * aCenter.w * vec2(1.0, aShape.x);
    float c = cos(aMotion.z), s = sin(aMotion.z);
    center.xy += mat2(c, s, -s, c) * corner;
    gl_Position = projectionMatrix * center;
}
`,Jl=j+`
uniform sampler2D uNoise;
${N}
in vec2 vUv;
in vec4 vShape;
in vec2 vMotion;
out vec4 fragColor;
float noise3(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    vec2 uv = i.xy + vec2(37.0, 17.0) * i.z + f.xy + 0.5;
    return mix(texture(uNoise, uv / 128.0).r,
        texture(uNoise, (uv + vec2(37.0, 17.0)) / 128.0).r, f.z);
}
float turbulence(vec3 p) {
    return noise3(p) * 0.56 + noise3(p * 2.07 + 11.7) * 0.28
        + noise3(p * 4.13 + 23.1) * 0.16;
}
vec4 smokeColor(vec4 color) {
    vec4 graded = colorGradePremultiplied(color);
    return compositeThroughWater(graded, graded.a);
}
void main() {
    float r2 = dot(vUv, vUv);
    if (r2 > 1.0) discard;
    float age = vMotion.x, kind = vMotion.y;
    // Broad additive glow has no opaque centre; it spills around the fireball.
    if (kind > 3.5 && kind < 4.5) {
        float glow = exp(-r2 * 5.5) * (1.0 - smoothstep(0.6, 1.0, r2));
        fragColor = smokeColor(vec4(vec3(1.0, 0.35, 0.055) * glow * vShape.z, 0.0));
        return;
    }
    // The nozzle is also visible end-on, where a longitudinal flame ribbon
    // projects to a line. A white core sits inside its broader orange glow.
    if (kind > 9.5 && kind < 10.5) {
        float core = exp(-r2 * 9.0);
        float edge = 1.0 - smoothstep(0.12, 1.0, r2);
        vec3 color = mix(vec3(1.0, 0.25, 0.02), vec3(1.0, 0.98, 0.83), core);
        float a = edge * vShape.z;
        fragColor = smokeColor(vec4(color * a * (1.0 + core), a * 0.45));
        return;
    }
    float z = sqrt(max(0.0, 1.0 - r2));
    vec3 p = vec3(vUv * 2.7, z * 1.8) + vec3(vShape.w, -age * 0.33, age * 0.18);
    float n = turbulence(p);
    float fine = noise3(p * 7.0 + n * 2.0);
    float edge = 1.0 - smoothstep(0.55 + n * 0.32, 0.95, sqrt(r2));
    float density = smoothstep(0.12, 0.74, n + z * 0.24);
    float alpha = edge * density * vShape.z;
    if (alpha < 0.003) discard;
    // A rounded lobe with dark folds and a sunlit upper rim. Colour is already
    // display-space, like the sky and the other translucent effect shaders.
    float light = clamp(0.46 + vUv.y * 0.24 + z * 0.27 + (n - 0.5) * 0.7, 0.0, 1.0);
    vec3 smoke = mix(vec3(0.075, 0.065, 0.060), vec3(0.49, 0.45, 0.39), light);
    if (kind > 10.5) {
        smoke = mix(vec3(0.035, 0.15, 0.018), vec3(0.40, 0.95, 0.085), light);
        smoke += vec3(0.08, 0.18, 0.015) * fine;
        fragColor = smokeColor(vec4(smoke * alpha, alpha));
        return;
    }
    if ((kind > 1.5 && kind < 2.5) || (kind > 6.5 && kind < 7.5))
        smoke = mix(vec3(0.20, 0.15, 0.105), vec3(0.59, 0.49, 0.34), light);
    if (kind > 4.5 && kind < 5.5) smoke = mix(vec3(0.62, 0.65, 0.67), vec3(0.96, 0.95, 0.88), light);
    if (kind > 7.5 && kind < 8.5) smoke = mix(vec3(0.055, 0.04, 0.03), vec3(0.27, 0.22, 0.17), light);
    if (kind > 8.5) smoke = mix(vec3(0.22, 0.23, 0.24), vec3(0.73, 0.75, 0.74), light);
    // Hot fissures keep opening inside the cooling cap as the lobes roll.
    float pulse = (kind < 0.5 ? sin(age * 3.4 + vShape.w) * 0.12 : 0.0);
    float heat = clamp(vShape.y * (0.62 + n * 0.65 + pulse) - (1.0 - n) * 0.22, 0.0, 1.0);
    vec3 fire = mix(vec3(0.7, 0.065, 0.008), vec3(1.0, 0.43, 0.025), smoothstep(0.05, 0.55, heat));
    fire = mix(fire, vec3(1.0, 0.91, 0.56), smoothstep(0.54, 0.9, heat));
    fire = mix(fire, vec3(1.0, 0.99, 0.91), smoothstep(0.9, 1.0, heat));
    fire *= 0.84 + fine * 0.25;
    vec3 color = mix(smoke, fire, smoothstep(0.02, 0.44, heat));
    fragColor = smokeColor(vec4(color * alpha + fire * heat * heat * edge * vShape.z * 0.12, alpha));
}
`,Yl=new WeakMap;function Xl(e){if(Yl.has(e))return Yl.get(e);let t=new Uint8Array(16384),n=2654435769;for(let e=0;e<t.length;e++)n^=n<<13,n^=n>>>17,n^=n<<5,t[e]=n&255;let r=new O(e,{image:t,width:128,height:128,format:e.RED,internalFormat:e.R8,generateMipmaps:!1,minFilter:e.LINEAR,magFilter:e.LINEAR,wrapS:e.REPEAT,wrapT:e.REPEAT,flipY:!1});return Yl.set(e,r),r}function Zl(e,t,n,r,i,a={},o=A){let s=e.gl,c=new X(s,{position:{size:2,data:t},aCenter:{size:4,data:new Float32Array(n*4),instanced:1,usage:s.DYNAMIC_DRAW},aShape:{size:4,data:new Float32Array(n*4),instanced:1,usage:s.DYNAMIC_DRAW},...r===ql?{aMotion:{size:4,data:new Float32Array(n*4),instanced:1,usage:s.DYNAMIC_DRAW}}:{}}),l=e.makeProgram({vertex:r,fragment:i,uniforms:{...e.waterPass.effectUniforms,...a},lit:!1,transparent:!0,depthWrite:!1,cullFace:!1});l.setBlendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA);let u=new o(s,{geometry:c,program:l,mode:s.TRIANGLE_STRIP,frustumCulled:!1});return u.visible=!1,u.setParent(e.scene),u}var Ql=class extends A{draw({camera:e}={}){this.prepare?.(e),this.smokePass.draw(this,e)}},$l=new WeakMap;function eu(e,t){let n=Zl(e,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t,ql,Jl,{uNoise:{value:Xl(e.gl)},...e.waterPass.effectUniforms,uWaterTargetSize:{value:[1,1]}},Ql);return $l.has(e)||$l.set(e,new Gl(e)),n.smokePass=$l.get(e),n.renderOrder=1,n}var tu=20,nu=6,ru=224,iu=768,au=2112,ou=Math.PI*2,su=e=>Math.max(0,Math.min(1,e)),cu=e=>(e=su(e),e*e*(3-2*e)),lu=F+`
in vec2 position;
in vec4 aCenter;
in vec4 aShape; // height, opacity, spherical flag, age
out vec2 vUv;
out float vAlpha;
out float vShell;
out float vAge;
out vec3 vNormal;
out vec3 vWorld;
void main() {
    float angle = position.x * 6.28318530718;
    vec3 radial = vec3(cos(angle), 0.0, sin(angle));
    vec3 world;
    if (aShape.z > 0.5) {
        float polar = position.y * 3.14159265359;
        vNormal = radial * sin(polar) + vec3(0.0, cos(polar), 0.0);
        world = aCenter.xyz + vNormal * aCenter.w;
    } else {
        float radius = aCenter.w * (1.0 - position.y * 0.045);
        vNormal = radial;
        world = aCenter.xyz + radial * radius + vec3(0.0, position.y * aShape.x, 0.0);
    }
    vWorld = world;
    vUv = position;
    vAlpha = aShape.y;
    vShell = aShape.z;
    vAge = aShape.w;
    gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}
`,uu=j+`
${N}
uniform vec3 cameraPosition;
in vec2 vUv;
in float vAlpha;
in float vShell;
in float vAge;
in vec3 vNormal;
in vec3 vWorld;
out vec4 fragColor;
void main() {
    float crest;
    if (vShell > 0.5) {
        vec3 view = normalize(cameraPosition - vWorld);
        float rim = 1.0 - abs(dot(normalize(vNormal), view));
        float bands = pow(0.5 + 0.5 * sin(vUv.y * 130.0 - vAge * 19.0
            + sin(vUv.x * 79.0) * 2.0), 8.0);
        crest = pow(rim, 5.0) * 0.78 + bands * pow(rim, 2.0) * 0.12;
    } else {
        crest = exp(-vUv.y * 5.0) + pow(vUv.y, 22.0) * 0.45;
    }
    float breakup = 0.84 + 0.16 * sin(vUv.x * 240.0 + vUv.y * 9.0 - vAge * 7.0);
    float a = crest * vAlpha * breakup;
    vec3 color = mix(vec3(1.0, 0.67, 0.28), vec3(0.83, 0.91, 1.0), vShell);
    fragColor = colorGradePremultiplied(vec4(color * a, a * 0.64));
    fragColor = compositeThroughWater(fragColor, fragColor.a);
}
`;function du(){let e=new Float32Array(36864),t=0;for(let n=0;n<32;n++)for(let r=0;r<96;r++){let i=r/96,a=(r+1)/96,o=n/32,s=(n+1)/32;e.set([i,o,a,o,a,s,i,o,a,s,i,s],t),t+=12}return e}var fu=class{constructor(e,t,n,r){this.gfx=e,this.world=t,this.effects=n,this.npc=r,this.list=[],this.fronts=[],this.ashes=[],this.draw=[],this.pyro=eu(e,au);let i=new Float32Array(516);for(let e=0;e<=128;e++)i.set([e/128,0,e/128,1],e*4);this.wave=Zl(e,i,nu,lu,uu),this.dome=Zl(e,du(),nu,lu,uu),this.dome.mode=e.gl.TRIANGLES,this.dome.program.cullFace=e.gl.BACK,this.pyro.prepare=e=>this.pack(e)}open(e,t,n,r){this.list.length===nu&&this.list.shift();let i=zn(r),a=Math.min(G-1,Math.floor(t));for(;a>0&&!this.world.solidAt(Math.floor(e),a,Math.floor(n));)a--;let o={x:e,y:t,z:n,power:r,scale:i,ground:a+1.08,age:0,hit:!1,puffs:[]};this.fronts.push({x:e,y:t,z:n,power:r,age:0});for(let r=0;r<ru;r++){let i=r<64?0:r<104?1:r<140?2:r<151?3:r===151?4:r<184?5:7,a=i===2?(r-104)/36*ou:i===5?(r-152)/32*ou:i===7?(r-184)/40*ou:Math.random()*ou;o.puffs.push({kind:i,i:r,a,q:Math.random(),seed:Math.random()*90,jitter:Math.random(),x:e,y:t,z:n,radius:0,aspect:1,heat:0,alpha:0,age:0,depth:0,dx:0,dy:0,dz:0})}this.list.push(o)}clear(){this.list.length=0,this.fronts.length=0,this.ashes.length=0,this.draw.length=0,this.pyro.visible=this.wave.visible=this.dome.visible=!1,this.pyro.geometry.instancedCount=this.wave.geometry.instancedCount=this.dome.geometry.instancedCount=0,this.gfx.lightUniforms.uBlastPower.value.fill(0),h.value=0}update(e){for(let t=this.fronts.length-1;t>=0;t--){let n=this.fronts[t],r=Q(n.power,n.age);n.age+=e;let i=Q(n.power,n.age);i>r&&this.npc?.shockwave(n.x,n.y,n.z,r,i),n.age>=5&&this.fronts.splice(t,1)}let t=this.gfx.lightUniforms.uBlastPower.value,n=this.gfx.lightUniforms.uBlastCenters.value;t.fill(0),this.draw.length=0;let r=0,i=0,a=0,o=this.wave.geometry.attributes,s=this.dome.geometry.attributes,c=this.gfx.camera.position;for(let l=this.list.length-1;l>=0;l--){let u=this.list[l];if(u.age+=e,u.age>=tu){this.list.splice(l,1);continue}let d=u.age,f=u.scale,p=43*(1-Math.exp(-d*.27)),m=2+18*(1-Math.exp(-d*.42)),h=cu(d/2.4),g=1-cu((d-12)/8),_=Q(u.power,d),v=Math.hypot(c.x-u.x,c.y-u.y,c.z-u.z);!u.hit&&d<=5&&v<=_&&e>0&&(u.hit=!0,this.effects.shakeAmp=Math.min(3,this.effects.shakeAmp+3.8/(1+v/(f*95)))),u.hit&&d<7&&e>0&&(this.effects.shakeAmp=Math.min(3,this.effects.shakeAmp+e*2.3*Math.exp(-d*.37)/(1+v/(f*100))));let y=(Math.exp(-d*16)*.98+Math.exp(-(((d-.3)/.18)**2))*.52)/(1+(v/(f*110))**2);a=Math.max(a,y);let b=this.list.length-1-l;b<4&&(Kl(n,b*4,u.x,u.y+p*f*.4,u.z,f*100),t[b]=(9*Math.exp(-d*5)+3.5*Math.exp(-d*.55))*g);let x=1-cu((d-3.8)/(5-3.8)),S=Math.sqrt(Math.max(0,_**2-(u.y-u.ground)**2));_>0&&d<5&&(Kl(s.aCenter.data,i*4,u.x,u.y,u.z,_),Kl(s.aShape.data,i*4,0,x*.7,1,d),i++,S>0&&(Kl(o.aCenter.data,r*4,u.x,u.ground,u.z,S),Kl(o.aShape.data,r*4,f*(2.5+d*1.8),x*.7,0,d),r++));for(let e of u.puffs){let t,n,r,i=1,a,o;if(e.kind===0){let s=d*.7+e.q*ou,c=e.i<40;t=c?m+Math.cos(s)*(1.2+h*2.2):m*Math.sqrt(e.q)*.72,t*=.18+h*.82,n=2+p+(c?Math.sin(s)*2.8:3+e.jitter*3.5)*h,r=(2.1+e.jitter*1.7+m*.22)*(.3+cu(d/.75)*.7),i=c?.9:1.06,a=Math.exp(-d*(.23+e.q*.12))*1.8,o=g*(.78+e.q*.15)}else if(e.kind===1){let s=(e.i-64)/40,c=s*1.5,l=Math.max(0,d-c);t=(1.1+e.q*2.2+l*.12)*(.4+s*.7),n=1+s*p,r=(2.4+e.jitter*1.5+s*1.2)*(.5+cu(l)*.5),i=1.35,a=Math.exp(-d*.58)*(.7+s*.65),o=cu(l*2)*g*.65}else if(e.kind===2){let s=Math.max(0,d-.18);t=3+28*(1-Math.exp(-s*.55))+e.q*4,n=(u.ground-u.y)/f+.6+e.jitter*(1+s*.35),r=2.1+s*.95+e.q*1.5,i=.5+e.jitter*.25,a=Math.exp(-d*1.7)*.3,o=cu(s*3)*(1-cu((d-4)/6))*.58}else if(e.kind===3)t=(1-Math.exp(-d*2))*(3+e.q*4),n=1.6+d*2.6+e.jitter*3,r=(1-Math.exp(-d*6))*(4+e.jitter*3+d*.7),a=1.8*Math.exp(-d*.46),o=(1-cu((d-1.1)/3))*.9;else if(e.kind===4)t=0,n=3+p*.5,r=12+32*(1-Math.exp(-d*2.5)),a=1,o=Math.exp(-d*.95)*.75;else if(e.kind===5){let s=Math.max(0,d-.35);t=5+s*18,n=7+s*5,r=2.4+s*2+e.q,i=.24+e.jitter*.12,a=0,o=cu(s*4)*(1-cu(s/2.2))*.55}else t=S/f*(.96-e.q*.035),n=(u.ground-u.y)/f+.8+e.jitter*2,r=1.4+t*.075,i=.55+e.jitter*.3,a=Math.exp(-d*1.4)*.4,o=S>0?cu(d*3)*x*.52:0;let s=e.a+(e.kind===1?d*.22:0);e.x=u.x+Math.cos(s)*t*f+(e.kind===7?0:Math.max(0,d-3)*f*.32),e.y=u.y+n*f,e.z=u.z+Math.sin(s)*t*f,e.radius=r*f,e.aspect=i,e.heat=a,e.alpha=o,e.age=d,o>.005&&r>.01&&this.draw.push(e)}}this.updateAsh(e),this.pyro.visible=this.draw.length>0,h.value=a,this.wave.visible=r>0,this.wave.geometry.instancedCount=r,o.aCenter.needsUpdate=o.aShape.needsUpdate=r>0,this.dome.visible=i>0,this.dome.geometry.instancedCount=i,s.aCenter.needsUpdate=s.aShape.needsUpdate=i>0}disintegrate(e,t,n,r,i,a){let o=Math.min(12,iu-this.ashes.length);for(let s=0;s<o;s++){let o=8+Math.random()*18;this.ashes.push({kind:8,age:0,life:1.1+Math.random()*1.1,ox:e+(Math.random()-.5)*.55,oy:t+(Math.random()-.5)*1.7,oz:n+(Math.random()-.5)*.55,dx:r*o+(Math.random()-.5)*3,dy:i*o*.4+2+Math.random()*5,dz:a*o+(Math.random()-.5)*3,seed:Math.random()*90,size:.12+Math.random()*.15,x:e,y:t,z:n,radius:0,aspect:1,heat:1,alpha:1,depth:0})}}updateAsh(e){for(let t=this.ashes.length-1;t>=0;t--){let n=this.ashes[t];if(n.age+=e,n.age>=n.life){this.ashes[t]=this.ashes[this.ashes.length-1],this.ashes.pop();continue}let r=n.age,i=(1-Math.exp(-r*1.3))/1.3;n.x=n.ox+n.dx*i,n.y=n.oy+n.dy*i-r*r*1.6,n.z=n.oz+n.dz*i,n.radius=n.size*(1+r*2.8),n.aspect=1.6+(1-cu(r/n.life))*3,n.heat=1.8*Math.exp(-r*6),n.alpha=(1-cu(r/n.life))*.85,this.draw.push(n)}}pack(e){let t=e.viewMatrix;for(let e of this.draw)e.depth=t[2]*e.x+t[6]*e.y+t[10]*e.z;this.draw.sort((e,t)=>e.depth-t.depth);let n=this.pyro.geometry.attributes;for(let e=0;e<this.draw.length;e++){let r=this.draw[e],i=e*4;Kl(n.aCenter.data,i,r.x,r.y,r.z,r.radius),Kl(n.aShape.data,i,r.aspect,r.heat,r.alpha,r.seed);let a=r.kind===8?Math.atan2(-(t[0]*r.dx+t[4]*r.dy+t[8]*r.dz),t[1]*r.dx+t[5]*r.dy+t[9]*r.dz):0;Kl(n.aMotion.data,i,r.age,r.kind,a,0)}n.aCenter.needsUpdate=n.aShape.needsUpdate=n.aMotion.needsUpdate=!0,this.pyro.geometry.instancedCount=this.draw.length}},pu=2048,mu=1024,hu=128,gu=.3,_u=Math.PI*2,vu=e=>Math.max(0,Math.min(1,e)),yu=e=>(e=vu(e),e*e*(3-2*e)),bu=F+`
in vec2 position; // distance behind the nozzle, transverse offset
in vec4 aTail;    // xyz, width
in vec4 aAxis;    // flight direction, flame length
in vec4 aPhase;   // time, random phase
out vec2 vUv;
out float vTime;
out float vSeed;
void main() {
    vec3 axis = mat3(viewMatrix) * -aAxis.xyz;
    vec2 side = vec2(-axis.y, axis.x);
    side = length(side) > 0.001 ? normalize(side) : vec2(1.0, 0.0);
    vec4 p = viewMatrix * vec4(aTail.xyz, 1.0);
    p.xyz += axis * position.x * aAxis.w;
    p.xy += side * position.y * aTail.w;
    vUv = position;
    vTime = aPhase.x;
    vSeed = aPhase.y;
    gl_Position = projectionMatrix * p;
}
`,xu=j+`
${N}
in vec2 vUv;
in float vTime;
in float vSeed;
out vec4 fragColor;
void main() {
    float t = vUv.x;
    float ripple = sin(t * 34.0 - vTime * 110.0 + vSeed) * 0.09
        + sin(t * 79.0 - vTime * 173.0) * 0.045;
    float width = (0.27 + sin(pow(t, 0.7) * 3.14159) * 0.63)
        * pow(1.0 - t, 0.42) * (1.0 + ripple);
    float edge = 1.0 - smoothstep(width * 0.45, width, abs(vUv.y));
    float core = 1.0 - smoothstep(width * 0.10, width * 0.52, abs(vUv.y));
    float diamonds = pow(0.5 + 0.5 * cos(t * 44.0 - vTime * 12.0), 8.0);
    vec3 outer = mix(vec3(0.24, 0.48, 1.0), vec3(1.0, 0.20, 0.012), smoothstep(0.02, 0.38, t));
    vec3 color = mix(outer, vec3(1.0, 0.96, 0.72), core * (0.82 + diamonds * 0.18));
    float fade = (1.0 - smoothstep(0.62, 1.0, t));
    float alpha = edge * fade * 0.88;
    fragColor = colorGradePremultiplied(vec4(color * alpha * (1.1 + diamonds * core * 0.35), alpha * 0.38));
    fragColor = compositeThroughWater(fragColor, fragColor.a);
}
`;function Su(){return{alive:!1,kind:9,age:0,life:1,seed:0,ox:0,oy:0,oz:0,dx:0,dy:0,dz:0,size:1,grow:0,ax:0,ay:0,az:0,drag:1,gravity:0,heat0:0,cool:0,opacity:1,stretch:1,x:0,y:0,z:0,radius:0,aspect:1,heat:0,alpha:0,depth:0}}var Cu=class{constructor(e){this.gfx=e,this.pool=Array.from({length:3072},Su),this.motors=Array.from({length:256},Su),this.activeCount=0,this.trailNext=0,this.impactNext=pu,this.draw=[],this.pyro=eu(e,this.pool.length+this.motors.length),this.pyro.prepare=e=>this.pack(e);let t=e.gl,n=new X(t,{position:{size:2,data:new Float32Array([0,-1,1,-1,0,1,1,1])},aTail:{size:4,data:new Float32Array(512),instanced:1,usage:t.DYNAMIC_DRAW},aAxis:{size:4,data:new Float32Array(512),instanced:1,usage:t.DYNAMIC_DRAW},aPhase:{size:4,data:new Float32Array(512),instanced:1,usage:t.DYNAMIC_DRAW}}),r=e.makeProgram({vertex:bu,fragment:xu,uniforms:e.waterPass.effectUniforms,lit:!1,transparent:!0,depthWrite:!1,cullFace:!1});r.setBlendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),this.flames=new A(t,{geometry:n,program:r,mode:t.TRIANGLE_STRIP,frustumCulled:!1}),this.flames.visible=!1,this.flames.setParent(e.scene)}spawn(e,t,n,r,i,a,o,s,c,l,u=0){let d=this.pool[e?this.trailNext:this.impactNext];return d.alive||this.activeCount++,e?this.trailNext=(this.trailNext+1)%pu:this.impactNext=pu+(this.impactNext-pu+1)%mu,d.alive=!0,d.kind=t,d.age=0,d.life=l,d.seed=Math.random()*90,d.ox=n,d.oy=r,d.oz=i,d.dx=a,d.dy=o,d.dz=s,d.size=c,d.grow=.5,d.drag=1.8,d.gravity=0,d.heat0=u,d.cool=5,d.opacity=.6,d.stretch=1,d}trail(e,t){let n=Math.max(.001,Math.hypot(e.vx,e.vy,e.vz)),r=e.vx/n,i=e.vy/n,a=e.vz/n,o=e.x-r*.7,s=e.y-i*.7,c=e.z-a*.7,l=o-e.trailX,u=s-e.trailY,d=c-e.trailZ,f=Math.hypot(l,u,d),p=e.trailCarry+f,m=Math.min(64,Math.floor(p/gu));for(let n=0;n<m;n++){let o=vu((gu-e.trailCarry+n*gu)/Math.max(f,.001)),s=this.spawn(!0,9,e.trailX+l*o,e.trailY+u*o,e.trailZ+d*o,-r*1.3+(Math.random()-.5)*.55,-i*1.3+.65+Math.random()*.45,-a*1.3+(Math.random()-.5)*.55,.24+Math.random()*.1,2+Math.random()*.7,.65);s.age=-o*t,s.grow=.46,s.opacity=.46,s.cool=13,s.stretch=1.45,s.ax=r,s.ay=i,s.az=a}e.trailCarry=p%gu,e.trailX=o,e.trailY=s,e.trailZ=c}impact(e,t,n,r,i){let a=Math.max(.6,Math.sqrt(r/3.5)),o=i.nx,s=i.ny,c=i.nz;for(let r=0;r<54;r++){let l=Math.random()*2-1,u=Math.random()*2-1,d=Math.random()*2-1,f=Math.max(.001,Math.hypot(l,u,d));l/=f,u/=f,d/=f;let p=l*o+u*s+d*c;i.surface&&p<0&&(l-=2*p*o,u-=2*p*s,d-=2*p*c);let m=r<18,h=r>=18&&r<36,g=(m?4+Math.random()*5:h?5+Math.random()*7:12+Math.random()*14)*a,_=this.spawn(!1,m?3:h?2:8,e+o*.15,t+s*.15,n+c*.15,l*g,u*g+(m?1.8:.5),d*g,(m?.65+Math.random()*.65:h?.3+Math.random()*.45:.035+Math.random()*.045)*a,m?1.8+Math.random()*1.4:h?1.5+Math.random()*1.7:.45+Math.random()*.7,m?2.35:h?.24:2.5);_.drag=m?3.2:h?2:.45,_.grow=m?.95*a:h?.85*a:.01,_.cool=m?3:h?4:.9,_.opacity=m?.86:h?.6:.95,_.gravity=m?.9:h?-.65:-12,_.stretch=r>=36?5:1,h&&(_.age=-.05-Math.random()*.1)}let l=this.spawn(!1,4,e,t,n,0,0,0,4.5*a,.42,1);l.grow=10*a,l.opacity=.75;for(let r=0;r<20;r++){let i=r/20*_u,l=Math.abs(s)<.9?-c:1,u=Math.abs(s)<.9?o:0,d=Math.max(.001,Math.hypot(l,u)),f=l/d,p=u/d,m=s*p,h=c*f-o*p,g=-s*f,_=f*Math.cos(i)+m*Math.sin(i),v=0*Math.cos(i)+h*Math.sin(i),y=p*Math.cos(i)+g*Math.sin(i),b=this.spawn(!1,5,e+o*.22,t+s*.22,n+c*.22,_*17*a,v*17*a,y*17*a,.25*a,.28,0);b.grow=2*a,b.opacity=.32,b.drag=.4}}update(e,t){if(this.draw.length=0,this.activeCount===0&&t.length===0){this.pyro.visible=this.flames.visible=!1,this.pyro.geometry.instancedCount=this.flames.geometry.instancedCount=0;return}for(let t of this.pool){if(!t.alive)continue;if(t.age+=e,t.age>=t.life){t.alive=!1,this.activeCount--;continue}if(t.age<0)continue;let n=Math.max(0,t.age),r=n/t.life,i=(1-Math.exp(-n*t.drag))/t.drag;t.x=t.ox+t.dx*i,t.y=t.oy+t.dy*i+t.gravity*n*n*.5,t.z=t.oz+t.dz*i,t.radius=t.size+t.grow*n,t.aspect=t.stretch,t.heat=t.heat0*Math.exp(-n*t.cool),t.alpha=t.opacity*(1-yu(r))*(t.kind===9?yu(n*24):1),t.alpha>.003&&this.draw.push(t)}let n=this.flames.geometry.attributes,r=Math.min(t.length,hu);for(let e=0;e<r;e++){let r=t[e],i=Math.max(.001,Math.hypot(r.vx,r.vy,r.vz)),a=r.vx/i,o=r.vy/i,s=r.vz/i,c=r.x-a*.66,l=r.y-o*.66,u=r.z-s*.66,d=1+Math.sin(r.age*71+r.exhaustSeed)*.09;Kl(n.aTail.data,e*4,c,l,u,.42*d),Kl(n.aAxis.data,e*4,a,o,s,(2.3+Math.min(i,80)*.012)*d),Kl(n.aPhase.data,e*4,r.age,r.exhaustSeed,0,0);let f=this.motors[e];f.x=c,f.y=l,f.z=u,f.radius=.85*d,f.kind=4,f.alpha=.65,f.heat=1,f.aspect=1,f.age=r.age,f.seed=r.exhaustSeed,this.draw.push(f);let p=this.motors[e+hu];p.x=c,p.y=l,p.z=u,p.radius=.3*d,p.kind=10,p.alpha=.9,p.heat=1,p.aspect=1,p.age=r.age,this.draw.push(p)}n.aTail.needsUpdate=n.aAxis.needsUpdate=n.aPhase.needsUpdate=r>0,this.flames.geometry.instancedCount=r,this.flames.visible=r>0,this.pyro.visible=this.draw.length>0,this.pyro.geometry.instancedCount=this.draw.length}pack(e){let t=e.viewMatrix;for(let e of this.draw)e.depth=t[2]*e.x+t[6]*e.y+t[10]*e.z;this.draw.sort((e,t)=>e.depth-t.depth);let n=this.pyro.geometry.attributes;for(let e=0;e<this.draw.length;e++){let r=this.draw[e],i=e*4,a=r.stretch>1?Math.atan2(-(t[0]*r.dx+t[4]*r.dy+t[8]*r.dz),t[1]*r.dx+t[5]*r.dy+t[9]*r.dz):0,o=r.alpha;if(r.kind===9){let e=t[2]*r.ax+t[6]*r.ay+t[10]*r.az;o*=(.12+.88*(1-e*e))*yu((-r.depth-t[14]-.3)/1.7)}Kl(n.aCenter.data,i,r.x,r.y,r.z,r.radius),Kl(n.aShape.data,i,r.aspect,r.heat,o,r.seed),Kl(n.aMotion.data,i,Math.max(0,r.age),r.kind,a,0)}n.aCenter.needsUpdate=n.aShape.needsUpdate=n.aMotion.needsUpdate=!0}clear(){for(let e of this.pool)e.alive=!1;this.draw.length=0,this.activeCount=0,this.trailNext=0,this.impactNext=pu,this.pyro.visible=this.flames.visible=!1,this.pyro.geometry.instancedCount=this.flames.geometry.instancedCount=0}},wu=12,Tu=96,Eu=64,Du=Math.PI*2,Ou=class{constructor(e,t){this.npc=t,this.fronts=[],this.list=[],this.draw=[],this.pyro=eu(e,1152),this.pyro.prepare=e=>this.pack(e)}open(e,t,n,r){this.list.length>=wu&&this.list.shift();let i={x:e,y:t,z:n,power:r,age:0,puffs:[]};this.fronts.push({x:e,y:t,z:n,power:r,age:0});for(let r=0;r<Tu;r++){let a=r<Eu,o=a?r:r-Eu,s=a?Eu:32,c=r*2.399963229728653,l=1-2*(o+.5)/s,u=Math.sqrt(1-l*l);i.puffs.push({dx:Math.cos(c)*u,dy:l,dz:Math.sin(c)*u,shell:a,band:a?1:.85*Math.cbrt((o+.5)/s),size:.8+Math.random()*.6,seed:Math.random()*100,rotation:Math.random()*Du,x:e,y:t,z:n,radius:0,alpha:0,age:0})}this.list.push(i),this.update(0)}update(e){if(e>0)for(let t=this.fronts.length-1;t>=0;t--){let n=this.fronts[t];n.age=Math.min(4,n.age+e),this.npc.jackohWave(n.x,n.y,n.z,n.power,n.age),n.age>=4&&this.fronts.splice(t,1)}this.draw.length=0;for(let t=this.list.length-1;t>=0;t--){let n=this.list[t];if(n.age+=e,n.age>=4){this.list.splice(t,1);continue}let r=Vn(n.power,n.age),i=Math.sqrt(n.power/5),a=(1-n.age/4)**1.4;for(let e of n.puffs){let t=r*e.band;e.x=n.x+e.dx*t,e.y=n.y+e.dy*t,e.z=n.z+e.dz*t,e.radius=(.8+n.age*1.25)*e.size*i,e.alpha=a*(e.shell?.62:.38),e.age=n.age,this.draw.push(e)}}this.pyro.geometry.instancedCount=this.draw.length,this.pyro.visible=this.draw.length>0}pack(e){let t=e.viewMatrix;for(let e of this.draw)e.depth=t[2]*e.x+t[6]*e.y+t[10]*e.z;this.draw.sort((e,t)=>e.depth-t.depth);let n=this.pyro.geometry.attributes;for(let e=0;e<this.draw.length;e++){let t=this.draw[e],r=e*4;Kl(n.aCenter.data,r,t.x,t.y,t.z,t.radius),Kl(n.aShape.data,r,1.1,0,t.alpha,t.seed),Kl(n.aMotion.data,r,t.age,11,t.rotation,0)}n.aCenter.needsUpdate=n.aShape.needsUpdate=n.aMotion.needsUpdate=!0}clear(){this.fronts.length=0,this.list.length=this.draw.length=0,this.pyro.geometry.instancedCount=0,this.pyro.visible=!1}},ku=e({startGame:()=>Iu}),Au=Math.PI/180,ju=180/Math.PI,Mu=2.5*Au;function Nu(e,t){let n,r,i,a=Math.hypot(e.x,e.z);a>1e-5?(n=-e.z/a,r=0,i=e.x/a):(n=1,r=0,i=0);let o=e.y*i-e.z*r,s=e.z*n-e.x*i,c=e.x*r-e.y*n,l=Math.tan(t)*Math.sqrt(Math.random()),u=Math.random()*Math.PI*2,d=Math.cos(u)*l,f=Math.sin(u)*l,p=e.x+n*d+o*f,m=e.y+r*d+s*f,h=e.z+i*d+c*f,g=1/Math.hypot(p,m,h);return{x:p*g,y:m*g,z:h*g}}var Pu=j+M+`
${N}
in vec3 vNormal;
in vec3 vWorld;
in vec2 vUv;
uniform vec3 uDiffuse;
uniform vec3 uEmissive;
uniform float uOpacity;
out vec4 fragColor;
void main() {
    vec3 c = uDiffuse * diffuseLight(vNormal, vWorld) + uEmissive;
    fragColor = compositeThroughWater(colorGrade(vec4(gammaOut(c), uOpacity)), 1.0);
}
`,Fu=j+M+`
${N}
in vec3 vNormal;
in vec3 vWorld;
in vec2 vUv;
uniform sampler2D uAtlas;
uniform vec3 uDiffuse;
uniform vec3 uEmissive;
uniform float uOpacity;
out vec4 fragColor;
void main() {
    vec3 t = texture(uAtlas, vUv).rgb;
    vec3 c = uDiffuse * t * diffuseLightUnshadowed(vNormal) + t * uEmissive;
    fragColor = compositeThroughWater(colorGrade(vec4(gammaOut(c), uOpacity)), 1.0);
}
`;async function Iu(e){let o=new Ke(e);t(()=>o.setPerformanceSettings(te.value));let m=o.gl,h=o.camera,{canvas:_,layers:fe}=ot();$e();let xe=ze(m,_),Ne=Fe(m,fe,16,{texelAA:!0}),D=new _r,O=D.world,Ie=new Ve(o,Ne),Le=new xr(o,O,Ie,Ue);D.onRecords=(e,t,n,r,i,a,o)=>Ie.update(e,t,n,r,i,a,o),o.renderer.addRestoreHandler(()=>D.restoreRecords()),D.init();let k=new Pr(o,xe);k.init();let j=new Qi(o,xe);D.addRelay(j),j.init(),t(()=>{let e=g.value;D.sendGameRules(e),k.sendGameRules(e),j.sendGameRules(e)});let M={x:0,y:0,z:0,vx:0,vy:0,vz:0,halfW:.3,height:1.8,eye:1.62,onGround:!1,inWater:!1,fly:!1,noclip:!1},N={shakeAmp:0,blast(e,t,n,r,i=!1){let a=h.position,o=Math.hypot(a.x-e,a.y-t,a.z-n),s=Math.max(0,1-o/Math.max(1,r*8)),c=Math.max(0,1-o/Math.max(1,r*32)),l=Math.min(1,1.3*s**1.8),u=Math.min(1,1.3*c**1.8),d=(.8+r*.12)*u;this.shakeAmp=Math.min(3,this.shakeAmp+d*(i?.16:1));let f=(r>=14?1:.06+r*.022)*l;i||(v.value=Math.min(1,Math.max(v.value,f)));let p=M.x-e,m=M.y+.9-t,g=M.z-n,_=Math.max(1,Math.hypot(p,m,g));if(_<r*2.2){let e=Math.min(34,r*12/(_*_*.4+2));M.vx+=p/_*e,M.vy+=m/_*e+e*.35,M.vz+=g/_*e,M.onGround=!1}}},P=new ea(D,k,N,j),Ge=new fu(o,O,N,j);P.nukes=Ge,P.rockets=new Cu(o),P.jackoh=new Ou(o,j);let F=new Oo(o,O,P,xe,j);j.threatSource=(e,t,n,r)=>F.writeThreats(e,t,n,r),j.onBoom=(e,t,n,r)=>{I.npcKilled(`creeper`,e,t,n),I.creeperExploded(e,t,n,r),P.explode(e,t,n,r,{damageScenery:g.peek().creepersDamageScenery})},j.onPlayerAttack=(e,t,n,r)=>I.playerAttacked(e===3?`spider`:`zombie`,t,n,r),j.onInfected=(e,t,n,r)=>I.npcInfected(e===2?`soldier`:`villager`,t,n,r),j.onPoof=(e,t,n,r,i)=>{i!==4&&I.npcKilled(i===5?`zombie`:i===3?`spider`:i===2?`soldier`:i===0?`creeper`:`villager`,e,t,n),k.poof(e,t,n,r)},j.onShockDeath=(e,t,n,r,i,a,o)=>{I.npcKilled(o===5?`zombie`:o===2?`soldier`:o===0?`creeper`:`villager`,e,t,n),Ge.disintegrate(e,t,n,r,i,a)},j.onIgnited=(e,t,n,r)=>{I.fuseLit(e,t,n),$n(r,e,t,n)},j.onShot=(e,t,n,r,i,a,o)=>z.remoteShot(e,t,n,r,i,a,o,o===1);let Je=new Xi(o),Ye=new pa(o,M);P.singularity=Ye,F.holes=Ye.list;let I=new We({sim:D,boom:P,npc:j,player:M,gfx:o,atlasTexture:xe,moveRespawn:e=>nn(e),respawn:()=>rn()}),L=new is(o,O,xe);F.plane=L;let Xe=new ms(o,O,xe),Ze=new As(o,D,O,k,j),Qe=new Is(o,D,O,k,j),et=new As(o,D,O,k,j),rt=new Bs(O,D,et,S.recovery_gun),z=new cc(o,D,O,j,F,k),B=new zl(o,Ne),lt=mr(j,B,{gfx:o,sim:D,world:O,entities:F,debris:k,singularities:Ye,player:M}),H=new lc(h);z.velocity=M,z.onReload=()=>{H.cancel(),he.value=!1,z.aiming=!1},z.canFire=()=>p.value!==`campaign`||I.canUse(oe.value),z.onFired=()=>{let e=dt()[oe.value];e?.key&&(p.value===`campaign`?I.spend(oe.value,e.key):vr(gr(e)))},z.onRecoil=(e,t)=>{J=Math.max(-89,Math.min(89,J+e)),q+=t,B.fired(e)};let dt=()=>p.value===`campaign`?De.value:we.value,pt=o.makeProgram({vertex:qe,fragment:Pu,transparent:!0,depthWrite:!1,uniforms:{...o.waterPass.effectUniforms,uWaterAbsorption:{value:!1},uDiffuse:{value:He([1,1,1])},uEmissive:{value:He([.9,.85,.4])},uOpacity:{value:.3}}}),W=new A(m,{geometry:Zt(m,R.spark),program:pt,frustumCulled:!1});W.scale.set(1.03,1.03,1.03),W.visible=!1,W.setParent(o.scene);let mt=o.makeProgram({vertex:qe,fragment:Fu,transparent:!0,depthWrite:!1,uniforms:{...o.waterPass.effectUniforms,uWaterAbsorption:{value:!1},uAtlas:{value:xe},uDiffuse:{value:He([1,1,1])},uEmissive:{value:He([.35,.35,.35])},uOpacity:{value:.45}}}),ht={diffuse:He([1,1,1]),emissive:He([.35,.35,.35])},gt={diffuse:He([1,.25,.2]),emissive:He([.5,.08,.06])},_t=new Map,vt=null,yt=!1,bt=new A(m,{geometry:W.geometry,program:mt,frustumCulled:!1});bt.visible=!1,bt.setParent(o.scene);function xt(e,t,n,r,i,a=0,o=1){if(vt!==e.key){let t=_t.get(e.key);t||(t=Xt(m,e,e=>nt[tt[e].id]),_t.set(e.key,t)),bt.geometry=t,vt=e.key}if(Re(bt.quaternion,0,a,0),bt.scale.set(o,o,o),i!==yt){yt=i;let e=i?gt:ht;mt.uniforms.uDiffuse.value=e.diffuse,mt.uniforms.uEmissive.value=e.emissive}bt.position.set(t,n,r),bt.visible=!0}let St=jt.range,Ct=kt;function wt(){o.fitWorldCamera(V,G,U)}function Tt(e){let t=D.epoch,n=p.value,r=D.mapIdx;l.value=Ot[r].name,Promise.all([D.loaded,D.meshed,Mt(r)]).then(()=>{D.epoch===t&&p.value===n&&(e&&e(),l.value=``)})}function Dt(e){let t=St;D.generate(t,Ct),wt(),Tt(()=>{let r=Ot[t],i=r.spawn();Z.x=i.x,Z.y=i.y,Z.z=i.z,Z.lookX=i.lookX,Z.lookY=i.lookY,Z.lookZ=i.lookZ;let a=r.creepers(Kt(Ct^2654435769)),o=new Float32Array(a.length*2);for(let e=0;e<a.length;e++)o[e*2]=a[e][0],o[e*2+1]=a[e][1];let s=Math.max(16,Math.min(120,Math.round(Math.sqrt(V*U)/9)));j.populate(Ct,s,0,st,i.x,i.z,o),j.populateBats(Ct+St*7919),e&&e(),n.beginSandbox(r.key)})}let K={index:0,phase:`reveal`,timer:2.2,drift:0},Ft=new jo(h);function Vt(){H.cancel(),Object.assign(K,{index:0,phase:`reveal`,timer:2.2,drift:0}),D.generate(jt.menu,1),wt(),Tt(),D.stamp(At[0],160,st+1,160,2),Ft.enter()}function Wt(){K.phase=`settle`,K.timer=4}function qt(){It(O),K.index=(K.index+1)%At.length,D.stamp(At[K.index],160,st+1,160,2),k.puff(160,st+1.2,160,6,22),K.phase=`reveal`,K.timer=2.8}function Jt(e){if(K.phase===`reveal`&&(K.drift+=e),Ft.update(K.drift),K.timer-=e,!(K.timer>0)){if(K.phase===`reveal`){let e=Ut[At[K.index]];F.spawnFused(tt.mega.id,160.5,st+e.size[1]+5,160.5,{fuse:1.8,vx:0,vy:0,vz:0}),K.phase=`fuse`}else K.phase===`settle`&&!D.staged&&!D.inFlight&&qt()}}P.onExplode=Wt,Vt();let q=32,J=-10,Y=new Set,Yt=0,X=0,Qt=!1,$t=!1,en=new uc;function tn(){en.release()&&(z.wasHeld=!1)}let Z={x:V/2+24,z:U/2+38,lookX:V/2,lookZ:U/2};function nn(e){Z.x=e.x,Z.z=e.z,Z.y=e.y,Z.lookY=e.lookTowardY,Z.lookX=e.lookTowardX===void 0?e.x:e.lookTowardX,Z.lookZ=e.lookTowardZ===void 0?e.z-1:e.lookTowardZ}function rn(){for(M.x=Z.x,M.y=Z.y??st+1,M.z=Z.z;M.y<G-3&&kn(M.x,M.y,M.z);)M.y++;M.vx=0,M.vy=0,M.vz=0,M.fly=!1,b.value=!1,M.noclip=!1,M.onGround=!1,c.moveX=0,c.moveZ=0,c.jump=!1,c.descend=!1,tn(),c.throttleUp=!1,c.throttleDown=!1,q=Math.atan2(-(Z.lookX-Z.x),-(Z.lookZ-Z.z))*ju,J=Z.lookY==null?-10:Math.atan2(Z.lookY-(M.y+M.eye),Math.hypot(Z.lookX-M.x,Z.lookZ-M.z))*ju,h.position.set(M.x,M.y+M.eye,M.z),Re(h.quaternion,J,q,0),h.updateMatrixWorld()}rn();let on=0,sn=0,cn=()=>p.value===`campaign`&&re(),ln=()=>w.value===`mouse`&&p.value!==`menu`&&!s.value&&!T.value&&!E.value&&!ie.value&&!pe.value&&!y.value&&document.hasFocus()&&!cn();function un(){if(cn()||s.value||y.value||T.value||w.value!==`mouse`||document.pointerLockElement===e)return;let t=e.requestPointerLock();t&&t.catch&&t.catch(()=>{let e=performance.now();if(e>=sn)return;let t=Math.max(100,fn+1300-e);clearTimeout(on),on=setTimeout(()=>{ln()&&un()},t)})}function dn(){sn=performance.now()+3e3,un()}d.lockPointer=dn,e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`mousedown`,t=>{if(w.value!==`touch`&&(qn(),!(p.value===`menu`||E.value||l.value)&&!(pe.value||y.value)&&!T.value)){if(document.pointerLockElement!==e)dn();else if(p.value!==`campaign`||ke.value===`active`){if(L.boarded)ur();else if(t.button===0)$t=!0,yr();else if(t.button===2){let e=Fr();Us(e)?.scope?(H.select(e),H.setHeld(!0)):br()}}}}),window.addEventListener(`mouseup`,e=>{e.button===0&&($t=!1),e.button===2&&H.setHeld(!1)});let fn=0,pn=1/0,mn=!1;function gn(){clearTimeout(on),sn=0,yn=!1,document.pointerLockElement===e&&!mn&&(mn=!0,document.exitPointerLock())}function _n(){ln()&&(Y.has(`Escape`)?yn=!0:dn())}d.toggleInventory=()=>{if(p.value!==`sandbox`||E.value||ie.value)return;if(!ne.value){ae.value=!0,ne.value=!0;return}let e=or(pn);ne.value=!1,e.then(()=>{mn||_n()})};let vn=0,yn=!1;document.addEventListener(`pointerlockchange`,()=>{let t=document.pointerLockElement===e;if(t!==de.peek()||mn){if(de.value=t,t){if(T.value){gn();return}sn=0,yn=!1}else H.cancel(),mn?(mn=!1,T.value||_n()):(fn=performance.now(),T.value||w.value===`mouse`&&(p.value===`menu`||E.value||ie.value||pe.value||y.value||p.value===`campaign`&&re()||(Y.has(`Escape`)?yn=!0:performance.now()-vn<400?dn():E.value=!0)))}});let bn=!1,xn=!1;window.addEventListener(`mousemove`,t=>{let n=document.pointerLockElement===e,r=!l.value&&!T.value&&!cn()&&(n||performance.now()<sn&&ln()),i=r&&xn&&n===bn;bn=n,xn=r,i&&(Math.abs(t.movementX)>400||Math.abs(t.movementY)>400||(q-=t.movementX*.22*H.sensitivity,J-=t.movementY*.22*H.sensitivity,J=Math.max(-89,Math.min(89,J))))});let Sn=!1;t(()=>{let e=T.value;e!==Sn&&(Sn=e,bn=xn=!1,e?gn():mn||_n())}),window.addEventListener(`wheel`,e=>{if(cn()||p.value===`menu`||E.value||T.value||pe.value||y.value||l.value)return;let t=dt(),n=e.deltaY>0?1:-1,r=p.value===`campaign`,i=oe.value;for(let e=0;e<t.length&&(i=(i+n+t.length)%t.length,!(!r||!I.isSealed(i)&&t[i].key));e++);oe.value=i}),window.addEventListener(`keydown`,e=>{if(ue.value){e.code===`Escape`&&!e.repeat&&(e.preventDefault(),ue.value=!1),Y.clear();return}if(pe.value||y.value){Y.clear(),$t=!1,tn(),Qt=!1;return}if(e.repeat||p.value===`menu`||l.value||cn())return;Y.add(e.code);let t=[`Digit1`,`Digit2`,`Digit3`,`Digit4`,`Digit5`,`Digit6`,`Digit7`,`Digit8`,`Digit9`,`Digit0`].indexOf(e.code);if(t>=0&&t<dt().length&&(p.value===`campaign`&&I.isSealed(t)?I.offerAd(t):(p.value!==`campaign`||dt()[t].key)&&(oe.value=t)),e.code===`Escape`){if(!T.value&&performance.now()-fn<150)return;T.value?d.toggleInventory():E.value?d.resumeGame():E.value=!0}if((e.code===`AltLeft`||e.code===`AltRight`)&&e.preventDefault(),e.code===`KeyE`&&!E.value&&(p.value===`campaign`?d.interact():ie.value||(d.toggleInventory(),$t=!1,tn(),Y.clear())),T.value)Y.clear();else{if(e.code===`KeyG`&&!E.value&&p.value===`sandbox`&&er(),e.code!==`KeyY`||E.value||p.value===`campaign`&&ke.value!==`active`||d.detonateC4(),e.code===`KeyR`&&!E.value&&d.reloadWeapon(),e.code===`KeyF`&&!E.value&&(p.value===`campaign`?d.restartLevel():d.resetRange()),e.code===`Space`){let e=performance.now();p.value===`sandbox`&&!M.noclip&&e-Yt<300?(M.fly=!M.fly,M.vy=0,b.value=M.fly,cr(),Yt=0):Yt=e}if(e.code===`KeyW`||e.code===`ArrowUp`){let e=performance.now();g.peek().allowSprinting?e-X<300?(Qt=!0,X=0):X=e:(Qt=!1,X=0)}}}),window.addEventListener(`keyup`,e=>{Y.delete(e.code),e.code!==`KeyW`&&e.code!==`ArrowUp`||Y.has(`KeyW`)||Y.has(`ArrowUp`)||(Qt=!1),e.code===`Escape`&&yn&&(yn=!1,p.value!==`menu`&&!E.value&&dn()),(e.code===`AltLeft`||e.code===`AltRight`)&&e.preventDefault()}),window.addEventListener(`blur`,()=>{H.cancel(),Y.clear(),$t=!1,tn(),Qt=!1,yn=!1}),t(()=>{(T.value||cn())&&(H.cancel(),Y.clear(),$t=Qt=!1,tn(),c.moveX=c.moveZ=0,c.jump=c.descend=!1,c.throttleUp=c.throttleDown=!1,cn()&&(yn=!1,sn=0,clearTimeout(on),Yt=X=0))}),t(()=>{s.value&&(H.cancel(),Y.clear(),$t=Qt=yn=!1,tn(),clearTimeout(on),c.moveX=c.moveZ=0,c.jump=c.descend=!1,c.throttleUp=c.throttleDown=!1)}),document.addEventListener(`visibilitychange`,()=>{document.hidden&&tn()});function Cn(t){w.value!==t&&(H.cancel(),tn(),w.value=t,t===`touch`&&document.pointerLockElement===e&&document.exitPointerLock())}window.addEventListener(`pointerdown`,e=>Cn(e.pointerType===`touch`?`touch`:`mouse`),!0),window.addEventListener(`pointermove`,e=>{e.pointerType===`mouse`&&Cn(`mouse`)},!0);let wn=ir();Cn(wn===`mobile`||wn===`tablet`||wn===null&&window.matchMedia(`(pointer: coarse)`).matches?`touch`:`mouse`);function Tn(e,t){q-=e*.28*H.sensitivity,J=Math.max(-89,Math.min(89,J-t*.28*H.sensitivity))}let En=new Map;t(()=>{if(s.value||T.value||cn()){for(let t of En.keys())e.hasPointerCapture(t)&&e.releasePointerCapture(t);En.clear()}}),e.addEventListener(`pointerdown`,t=>{if(t.pointerType!==`touch`||t.defaultPrevented||(qn(),p.value===`menu`||E.value||l.value||pe.value||y.value)||p.value===`campaign`&&ke.value!==`active`)return;e.setPointerCapture(t.pointerId);let n=zr(!1),r={lastX:t.clientX,lastY:t.clientY,startX:t.clientX,startY:t.clientY,startT:performance.now(),moved:!1,aimOnly:!!Us(n)||Rs(n)};En.set(t.pointerId,r)}),e.addEventListener(`pointermove`,e=>{let t=En.get(e.pointerId);t&&(Math.hypot(e.clientX-t.startX,e.clientY-t.startY)>10&&(t.moved=!0),Tn(e.clientX-t.lastX,e.clientY-t.lastY),t.lastX=e.clientX,t.lastY=e.clientY)});function Dn(e){let t=En.get(e.pointerId);if(!t||(En.delete(e.pointerId),t.aimOnly||e.type!==`pointerup`))return;let n=zr(!1);Us(n)||Rs(n)||t.moved||performance.now()-t.startT>=250||p.value===`menu`||E.value||ie.value||l.value||T.value||pe.value||y.value||(p.value!==`campaign`||ke.value===`active`)&&(L.boarded?ur():yr(e.clientX,e.clientY),Ae.x=e.clientX,Ae.y=e.clientY,Oe.value++)}e.addEventListener(`pointerup`,Dn),e.addEventListener(`pointercancel`,Dn),e.addEventListener(`lostpointercapture`,Dn);let On=(e,t)=>o.screenRay(e,t);function kn(e,t,n){return Tr(O,M,e,t,n)}function An(e,t,n){let r=M.halfW;return e+1>M.x-r&&e<M.x+r&&t+1>M.y&&t<M.y+M.height&&n+1>M.z-r&&n<M.z+r}function jn(e){let t=e.x+e.nx,n=e.y+e.ny,r=e.z+e.nz;return!O.inBounds(t,n,r)||O.solidAt(t,n,r)||O.solidAt(t,n+1,r)?null:{x:t+.5,y:n,z:r+.5}}function Mn(e,t,n,r,i){let a=zt(e,t,r,i),o=!1;return e.build((t,r,s)=>{An(a.x+Lt(e,i,t,s),n+r,a.z+Ht(e,i,t,s))&&(o=!0)}),o}function Nn(e){g.peek().allowSprinting||(Qt=!1,X=0);let t=q*Au,n=-Math.sin(t),r=-Math.cos(t),i=Math.cos(t),a=-Math.sin(t),o=0,s=0;(Y.has(`KeyW`)||Y.has(`ArrowUp`))&&(o+=n,s+=r),(Y.has(`KeyS`)||Y.has(`ArrowDown`))&&(o-=n,s-=r),(Y.has(`KeyD`)||Y.has(`ArrowRight`))&&(o+=i,s+=a),(Y.has(`KeyA`)||Y.has(`ArrowLeft`))&&(o-=i,s-=a),o+=n*c.moveZ+i*c.moveX,s+=r*c.moveZ+a*c.moveX;let l=Math.hypot(o,s);l>1&&(o/=l,s/=l);let u=Y.has(`Space`)||c.jump,d=Y.has(`ShiftLeft`)||Y.has(`ShiftRight`)||c.descend;Er(O,Ie,M,o,s,u,d,Qt,e),!M.noclip&&M.y<-20&&rn()}let Pn={yaw:0,pitch:0,throttleUp:!1,throttleDown:!1,roll:0},Fn={x:0,y:0,z:0},Q={x:0,y:0,z:0},In={vx:0,vy:0,vz:0,straight:!0},Ln=!1,Rn=0,zn=1;function Bn(e){let t=q*Au,n=J*Au,r=Math.cos(n);return e.x=-Math.sin(t)*r,e.y=Math.sin(n),e.z=-Math.cos(t)*r,e}function Vn(e,t,n){let r=Math.max(1,Math.min(G-8,Math.floor(n)));for(;r>1&&!O.solidAt(e|0,r-1,t|0);)r--;for(;r<G-8&&O.solidAt(e|0,r,t|0);)r++;return r}let Hn={x:0,y:0,z:0,yaw:0,fits:!1};function Un(e,t){let{o:n,d:r}=On(e,t),i=an(O,n.x,n.y,n.z,r.x,r.y,r.z,140),a,o,s;i?(a=i.x+.5,o=i.z+.5,s=i.y+1):(Bn(Q),a=M.x+Q.x*16,o=M.z+Q.z*16,s=M.y+4),a=Math.max(9,Math.min(V-9,a)),o=Math.max(9,Math.min(U-9,o)),s=Vn(a,o,s+2);let c=Math.atan2(-(a-M.x),-(o-M.z))*ju;Hn.x=a,Hn.z=o,Hn.yaw=c;for(let e=0;e<=5;e++)if(Hn.y=s+3.2+e,!L.hullHits(a,Hn.y,o,0,c,0))return Hn.fits=!0,Hn;return Hn.fits=!1,Hn}function Wn(){let e=Un();return e.fits?(L.place(e.x,e.y,e.z,e.yaw),_e.value=`parked`,lr(),!0):(Qn(),!1)}function Gn(e,t){let{o:n,d:r}=On(e,t);return an(O,n.x,n.y,n.z,r.x,r.y,r.z,Math.hypot(V,U,G))}function Jn(e,t){if(Xe.busy)return Qn(),!1;let n=Gn(e,t);if(!n)return Qn(),!1;let r=Math.max(2,Math.min(V-2,n.x+.5)),i=Math.max(2,Math.min(U-2,n.z+.5));return Xe.launch(r,n.y+1,i),Me.value=!0,cr(),!0}function Zn(e){if(!Xe.active)return;let t=Xe.update(e);t&&F.spawnFused(tt.mega.id,t.x,t.y,t.z,{fuse:t.fuse,power:t.power,size:t.size,vx:t.vx,vy:t.vy,vz:t.vz,bomb:!0}),Me.value=Xe.busy}function er(){p.value!==`menu`&&L.alive&&(L.boarded?tr():L.distanceTo(M.x,M.y+.9,M.z)>7||L.board()&&(M.fly=!1,b.value=!1,M.noclip=!1,M.vx=0,M.vy=0,M.vz=0,_e.value=`flying`,a.value=!1,Ln=!1,cr()))}function tr(){if(!L.boarded)return;let e=L.vx,t=L.vy,n=L.vz;nr(L.x,L.y,L.z),M.vx=e*.5,M.vy=Math.max(0,t*.4),M.vz=n*.5,L.leave(),_e.value=`parked`,Ln=!1,cr()}function nr(e,t,n){for(M.x=Math.max(1,Math.min(V-1,e)),M.z=Math.max(1,Math.min(U-1,n)),M.y=Math.max(1,t);M.y<G-3&&kn(M.x,M.y,M.z);)M.y++;M.onGround=!1}function rr(e){let t=e.x,n=e.y,r=e.z;L.forward(Q);let i=Q.x,o=Q.y,s=Q.z;L.boarded&&nr(L.x,L.y+1,L.z),L.remove(),_e.value=`none`,a.value=!1,Ln=!1,P.explode(t,n,r,9);for(let e=1;e<=3;e++)P.explode(t+i*e*2.5,Math.max(1,n+o*e*2.5),r+s*e*2.5,5)}function ur(){if(!L.boarded||Rn>0)return;Rn=.28,L.forward(Q);let e=Q.x,t=Q.y,n=Q.z;zn=-zn,L.hardpoint(Q,zn);let r=Q.x,i=Q.y,a=Q.z;In.vx=L.vx,In.vy=L.vy,In.vz=L.vz,F.spawnRocket(r,i,a,e,t,n,In)&&Xn(r,i,a)}function dr(e){let t=c.moveX,n=c.moveZ;if(t===0&&n===0)return;q-=t*92*e,J+=n*74*e,J=Math.max(-89,Math.min(89,J));let r=(q-L.yaw+540)%360-180;r>25?q=L.yaw+25:r<-25&&(q=L.yaw-25),J=Math.max(L.pitch-25,Math.min(L.pitch+25,J))}function fr(e){Rn=Math.max(0,Rn-e),w.value===`touch`&&dr(e),Pn.yaw=q,Pn.pitch=J,Pn.throttleUp=Y.has(`KeyW`)||Y.has(`ArrowUp`)||c.throttleUp,Pn.throttleDown=Y.has(`KeyS`)||Y.has(`ArrowDown`)||c.throttleDown,Pn.roll=(Y.has(`KeyD`)||Y.has(`ArrowRight`)?1:0)-(Y.has(`KeyA`)||Y.has(`ArrowLeft`)?1:0);let t=L.update(e,Pn);if(t&&t.crash){rr(t);return}se.value=Math.round(L.speed),x.value=Math.round(L.y),Se.value=Math.round(L.throttle*10),Te.value=L.speed<10&&L.y>3,Bn(Q);let n=18,r=an(O,L.x,L.y+1,L.z,-Q.x,-Q.y,-Q.z,19);r&&(n=Math.max(9,r.dist-1));let i=L.x-Q.x*n,a=L.y-Q.y*n+3,o=L.z-Q.z*n;if(!Ln)Fn.x=i,Fn.y=a,Fn.z=o,Ln=!0;else{let t=1-Math.exp(-11*e);Fn.x+=(i-Fn.x)*t,Fn.y+=(a-Fn.y)*t,Fn.z+=(o-Fn.z)*t}h.position.set(Fn.x,Math.max(.5,Fn.y),Fn.z),Pe(h.quaternion,J,q,L.roll*.33),M.x=L.x,M.y=L.y,M.z=L.z,M.vx=L.vx,M.vy=L.vy,M.vz=L.vz}function pr(){L.remove(),Xe.stop(),_e.value=`none`,a.value=!1,Me.value=!1,Ln=!1}d.boardPlane=er,d.fireRocket=ur;function hr(e,t,n,r=!1){let i=an(O,e.x,e.y,e.z,t.x,t.y,t.z,n+.3,r),a=i?Math.min(n,Math.max(0,i.dist-.26)):n;return{x:e.x+t.x*a,y:e.y+t.y*a,z:e.z+t.z*a}}function gr(e){return e.item&&e.key!==`structure`&&e.key!==`block`?e.item:e.key}function vr(e){if(p.value!==`sandbox`)return;let t=ge[e];n.toolUsed(e,t?r(t):null)}function yr(e,t){let{o:r,d:i}=he.value?On():On(e,t),a=oe.value,o=dt()[a];if(!o||!o.key)return;let s=gr(o),c=p.value===`campaign`,l=()=>!c||I.spend(a,s);if(c&&!I.canUse(a))return;if(s===`plane`){Wn()&&(l(),vr(s),B.acted());return}if(s===`airstrike`){Jn(e,t)&&(l(),vr(s),B.acted());return}if(s===`igniter`){if(!l())return;br(e,t),B.acted();return}if(s===`flashlight`||s===`hint`){l()&&B.acted();return}if(Rs(s))return p.value===`sandbox`&&me(s)?void 0:l();if(f[s]||p.value===`sandbox`&&me(s===`structure`?le.value:s))return;if(S[s]){if(F.rocketCount>=128||!l())return;let{x:e,y:t,z:n}=hr(r,i,.9),a=S[s].spread,o=a?Nu(i,a):i;F.spawnLauncher(s,e,t,n,o.x,o.y,o.z,M)&&(vr(s),Xn(e,t,n),B.acted());return}if(s===`sticky`){if(!l())return;let e=hr(r,i,.75);F.spawnSticky(e.x,e.y,e.z,i.x,i.y,i.z,M)&&(vr(s),ar(e.x,e.y,e.z),B.acted());return}if(s===`grenade`||s===`water_sponge`||s===`water_balloon`){if(!l())return;let{x:e,y:t,z:n}=hr(r,i,.75,s===`water_balloon`),a=Nu(i,Mu);(s===`water_sponge`?F.spawnWaterSponge(e,t,n,a.x,a.y,a.z,M):s===`water_balloon`?F.spawnWaterBalloon(e,t,n,a.x,a.y,a.z,M):F.spawnGrenade(e,t,n,a.x,a.y,a.z,M))&&(vr(s),ar(e,t,n),B.acted());return}let u=an(O,r.x,r.y,r.z,i.x,i.y,i.z,140);if(s===`spider`){if(!u||!O.inBounds(u.x+u.nx,u.y+u.ny,u.z+u.nz)||!l())return;j.spawnSpider(u.x,u.y,u.z,u.nx,u.ny,u.nz),vr(s),lr(),B.acted();return}if(s===`creeper`){if(!u)return;let e=jn(u);if(!e||!l())return;j.spawnCreeper(e.x,e.y,e.z),vr(s),lr(),B.acted();return}if(s===`soldier_red`||s===`soldier_blue`){if(!u)return;let e=jn(u);if(!e||!l())return;j.spawnSoldier(e.x,e.y,e.z,s===`soldier_red`?0:1),vr(s),lr(),B.acted();return}if(s===`verity`){if(!u||p.value!==`sandbox`)return;let e=jn(u);if(!e||!lt.spawn(e.x,e.y,e.z))return;vr(s),lr(),B.acted();return}if(s===`villager`||s===`zombie`){if(!u)return;let e=jn(u);if(!e||!l())return;s===`zombie`?j.spawnZombie(e.x,e.y,e.z):j.spawnVillager(e.x,e.y,e.z,hn()),vr(s),lr(),B.acted();return}if(s===`structure`){if(!u)return;let e=Ut[le.value],t=Rt(q),n=Bt(e,u,O,t);if(Mn(e,n.cx,n.baseY,n.cz,t)||!l())return;D.stamp(le.value,n.cx,n.baseY,n.cz,t),vr(le.value),lr(),B.acted();return}if(!u)return;let d=u.x+u.nx,m=u.y+u.ny,h=u.z+u.nz;if(!O.inBounds(d,m,h)||An(d,m,h))return;let g=s===`block`?Ee.value:s,_=tt[g];_&&l()&&(O.set(d,m,h,_.id),p.value===`campaign`&&I.blockPlaced(d,m,h,g),vr(g),_.explosive&&n.onboarding(`placed-explosive`),lt.blockPlaced(g,d+.5,m+.5,h+.5),j.water(d,h,g===`water`),lr(),B.acted())}function br(e,t){let{o:n,d:r}=On(e,t),i=F.pick(n.x,n.y,n.z,r.x,r.y,r.z,140),a=j.pickCreeper(n.x,n.y,n.z,r.x,r.y,r.z,140),o=an(O,n.x,n.y,n.z,r.x,r.y,r.z,140),s=i?i.dist:1/0,c=a?a.dist:1/0,l=o?o.dist:1/0;if(s<c&&s<l)return;if(a&&c<l){j.ignite(a.slot,a.gen),cr();return}if(!o)return;let u=ut(o.x,o.y,o.z),d=p.value===`sandbox`;D.ignite(u,d,!0);let f=D.idAt(u);!d||at(f)?cr():f!==tt.bedrock.id&&Qn()}d.detonateC4=()=>{let e=tt.c4.id,t=[];if(O.explosives.forEach((n,r)=>{n===e&&t.push(r)}),t.length!==0){for(let e=0;e<t.length;e++)I.fuseLit(Et(t[e])+.5,ct(t[e])+.5,ft(t[e])+.5);cr();for(let n=0;n<t.length;n++){let r=t[n];setTimeout(()=>{O.explosives.get(r)===e&&(lt.interceptC4(r)||(O.setByIndex(r,0),P.explode(Et(r)+.5,ct(r)+.5,ft(r)+.5,it[e].explosive.power)))},n*90)}}},d.toggleFly=()=>{p.value!==`sandbox`||M.noclip||(M.fly=!M.fly,M.vy=0,b.value=M.fly,cr())},d.resetWorld=()=>{F.clear(),rt.stop(),Qe.stop(),j.clear(),k.clear(),z.clear(),P.abort(),pr(),pn=1/0,Dt(()=>{rn(),pn=performance.now()}),ye.value=0,lr()};function Sr(e,t){if(be.value)return Promise.resolve();be.value=!0,t&&t(),qn();let n=()=>i(()=>{try{e()}finally{be.value=!1}});return sr().then(n,n)}function Cr(e){Ft.leave(),E.value=!1,p.value=`sandbox`,lt.enter(),Ot[e]&&Ot[e].listed!==!1&&(St=e),I.end(),P.onDamage=null,P.onExplode=null,F.onFuseLit=null,Y.clear(),oe.value=1,ne.value=!1,ae.value=!1,Ot[St].key===`sound`&&ce(1,`explosive`,`water_sponge`),Ot[St].key===`badlands`&&ce(4,`creatures`,`verity`),d.resetWorld(),dn()}let wr=0;function Dr(e){Ft.leave(),E.value=!1,p.value=`campaign`,ke.value=`loading`,je.value=e,I.end(),P.onDamage=I.blockDamaged,P.onExplode=I.explosion,F.onFuseLit=I.fuseLit,Y.clear(),F.clear(),rt.stop(),Qe.stop(),j.clear(),k.clear(),z.clear(),P.abort(),pr(),ye.value=0;let t=++wr,n=Nt[e];l.value=n.name,I.load(e).then(n=>{if(t!==wr||p.value!==`campaign`)return;D.generateMission(e,n.layout.worldBounds,1),wt();let r=n.layout.playerSpawn;Z.x=r.x,Z.y=r.y,Z.z=r.z,Z.lookX=r.lookTowardX,Z.lookY=r.lookTowardY,Z.lookZ=r.lookTowardZ,Promise.all([D.loaded,D.meshed]).then(()=>{t===wr&&p.value===`campaign`&&(wt(),rn(),j.populateBats(1+e*7919),I.begin(e,n.logic),l.value=``)})}),lr(),dn()}d.unlockBonus=e=>I.offerAd(e),d.interact=()=>{p.value!==`campaign`||E.value||l.value||ie.value||s.value||I.interact()},d.startSandbox=e=>Sr(()=>Cr(e),()=>n.leaveRun(`switch`)),d.startCampaign=(e,t=`switch`)=>!Nt[e]||!Be(Nt[e].category)?Promise.resolve():Sr(()=>Dr(e),()=>{t===`restart`&&n.resultChoice(`retry`),t===`next`&&n.resultChoice(`next`),n.leaveRun(t)}),d.restartLevel=()=>d.startCampaign(je.value,`restart`),d.nextLevel=()=>{let e=Pt(je.value);if(e>=0)return d.startCampaign(e,`next`);d.exitToMenu()},d.resumeGame=()=>Sr(()=>{E.value=!1,vn=performance.now(),dn()}),d.resetRange=()=>Sr(()=>{d.resetWorld(),E.value=!1,dn()},()=>n.resetSandbox()),d.exitToMenu=()=>{n.resultChoice(`menu`),n.leaveRun(`quit`),n.resetVisibility(`menu`),i(()=>{E.value=!1,p.value=`menu`}),wr++,I.end(),F.clear(),rt.stop(),Qe.stop(),j.clear(),k.clear(),z.clear(),P.abort(),pr(),P.onDamage=null,P.onExplode=Wt,F.onFuseLit=null,Y.clear(),Vt()};let Or=0,kr=0;o.on(`update`,t=>{if(t=Math.min(t,.05),l.value||D.loading){H.cancel(),he.value=!1,Ce.value=null,ve.value=null,u.value=null,ee.value=``,tn(),W.visible=!1,bt.visible=!1,D.flush();return}let n=p.value===`menu`,r=(E.value||ie.value)&&!n,i=zr(n);en.heldFor(i,w.value===`touch`&&Ir()&&!C.value)||tn(),z.prepare(Ir()?t:0,Us(i)?i:null,Ir()),Rr(t,n,r),document.pointerLockElement===e&&(n||r||p.value===`campaign`&&re())&&document.exitPointerLock();let s=0,c=0,d=0,f=0,m=0,g=0;if(N.shakeAmp>.001){let e=N.shakeAmp;s=(Math.random()-.5)*e*.5,c=(Math.random()-.5)*e*.5,d=(Math.random()-.5)*e*.5,f=(Math.random()-.5)*e*.9,m=(Math.random()-.5)*e*.9,g=(Math.random()-.5)*e*.5,N.shakeAmp*=.012**t,N.shakeAmp<.001&&(N.shakeAmp=0)}if(n)Jt(t);else if(!r&&!cn()&&L.boarded)fr(t);else if(!r&&!cn()){Nn(t);let e=Math.hypot(M.vx,M.vz),n=!M.fly&&!M.inWater&&M.onGround&&e>.4?Math.min(1,e/4.6):0;kr+=(n-kr)*Math.min(1,t*8),n>0&&(Or+=e*t*1.7);let r=1-H.amount*.9,i=Math.sin(Or)*.028*kr*r,a=Math.sin(Or*2)*.042*kr*r;Re(h.quaternion,J+f,q+m,Math.sin(Or)*.45*kr*r+g);let o=q*Au;h.position.set(M.x+s+Math.cos(o)*i,M.y+M.eye+c+a,M.z+d-Math.sin(o)*i)}if(L.alive&&!L.boarded&&!r){let e=L.update(t,Pn);e&&e.crash?rr(e):a.value=L.distanceTo(M.x,M.y+.9,M.z)<=7}r||Zn(t);{let e=h.position,t=o.cameraForward(),r=o.cameraUp();Yn(e.x,e.y,e.z,t.x,t.y,t.z,r.x,r.y,r.z),j.setPlayer(M.x,M.y,M.z,t.x,t.y,t.z,!n,e.y)}v.value>0&&(v.value=Math.max(0,v.value-t*1.6));let _=r?0:t;lt.beforeProjectiles(_),F.update(_),Ge.update(_),P.jackoh.update(_),r||j.update(t,1),lt.update(_),Je.update(_),Ye.update(_),r||k.update(t,1),k.updateShadows(!r),!r&&p.value===`campaign`&&I.update(_),Vr(_,n,r),Br(t,n,r),Lr(),jr(t,n,r),jr(t,n,r,Qe,`ultra_laser`),Mr(t,n,r),r||D.flush()});function Ar(e,t,n=null){let r=zr(e);if(n&&r!==n)return!1;let i=zs(r,!t&&(p.value!==`campaign`||I.canUse(oe.value))&&(p.value!==`sandbox`||!me(r)),$t,en);return!i&&Rs(en.key)&&tn(),i}function jr(e,t,n,r=Ze,i=`laser`){if(!Ar(t,n,i)){r.stop();return}let{o:a,d:o}=On(),s=r.trace(a,o);r.update(e,!0,a,o,B.hasMuzzle?B.muzzle:null,s),vr(i)}function Mr(e,t,n){if(!Ar(t,n,`recovery_gun`)){rt.stop();return}let{o:r,d:i}=On();if(!rt.trace(r,i)){rt.stop();return}let a=!et.firing;rt.update(e,!0,B.hasMuzzle?B.muzzle:null),vr(`recovery_gun`),a&&(et.voice=Kn(rt.muzzle.x,rt.muzzle.y,rt.muzzle.z))}function Nr(){return p.value===`sandbox`&&me(Fr())}function Fr(){let e=dt()[oe.value],t=e?.key?gr(e):null;return f[t]?t:null}function Ir(){return Ls()&&!D.loading&&!L.boarded&&(!Fr()||!Nr())}d.reloadWeapon=()=>{let e=Fr();e&&Ir()&&z.reload(e)};function Lr(){let e=z.magazines,t=e.weapon;if(!t){u.value=null;return}let n=e.reload,r={loaded:e.loaded,capacity:t.magazine,reloading:!!n,progress:n?Math.floor(n.elapsed/n.duration*100)/100:0},i=u.peek();(!i||Object.keys(r).some(e=>r[e]!==i[e]))&&(u.value=r)}d.toggleScope=()=>{let e=Fr();Ir()&&!z.magazines.reload&&Us(e)?.scope&&(H.select(e),H.toggle())},d.beginFire=e=>{let t=zr(!1);if(w.value!==`touch`||C.value||!Ir()||!(Us(t)||Rs(t))||!en.press(e,t))return!1;if(Rs(t)){if(!yr())return tn(),!1}else{z.wasHeld=!1;let{o:e,d:n}=On();z.update(0,t,!0,e,n)}return!0},d.endFire=e=>{en.release(e)&&(z.wasHeld=!1)},d.moveFire=(e,t,n)=>en.pointerId!==e||w.value!==`touch`||C.value||!Ir()||!en.heldFor(zr(!1))?!1:(Tn(t,n),!0);function Rr(t,n,r){let i=Fr(),a=Us(i),o=zr(n);ve.value=Us(o)?`gun`:Rs(o)?`laser`:null,Ce.value=!n&&!L.boarded&&!Nr()&&f[i]||null;let s=!n&&!r&&!z.magazines.reload&&Ir()&&(w.value===`touch`||document.pointerLockElement===e);he.value=H.update(t,i,a?.scope,s),z.aiming=H.active}function zr(e){if(e||L.boarded)return null;let t=dt()[oe.value];if(!t?.key||p.value===`campaign`&&(!t.key||I.isSealed(oe.value)))return null;let n=gr(t);return f[n]&&Nr()?null:t.key===`block`?Ee.value:n===`structure`?`structure:`+le.value:n}function Br(e,t,n){let r=dt()[oe.value],i=r&&r.key?gr(r):null,a=!!i&&f[i]&&!Nr();if(B.setItem(zr(t)),B.rig.visible=!C.value&&!he.value,Ar(t,n)&&B.setBeam(!0),B.setGlow(I.torchLit),B.update(n?0:e,h,q,J,Or,kr,z.magazines.reload),z.muzzle=B.hasMuzzle?B.muzzle:null,!((w.value===`touch`?en.heldFor(i,!C.value):$t)&&a&&!t&&!n&&Ir())){z.update(e,null,!1);return}let{o,d:s}=On();z.update(e,i,!0,o,s)}function Vr(e,t,n){if(t||n||L.boarded||p.value===`campaign`&&ke.value!==`active`||w.value===`touch`){W.visible=!1,bt.visible=!1;return}let r=dt()[oe.value],i=r?gr(r):null;if(!i||S[i]||i===`grenade`||i===`water_sponge`||i===`water_balloon`||i===`sticky`||i===`laser`||f[i]||i===`flashlight`||i===`hint`){W.visible=!1,bt.visible=!1;return}if(i===`airstrike`){bt.visible=!1;let e=Gn();W.visible=!!e,e&&W.position.set(e.x+.5,e.y+.5,e.z+.5);return}if(i===`plane`){W.visible=!1;let e=Un();xt(zo,e.x,e.y,e.z,!e.fits,e.yaw,Io);return}let{o:a,d:o}=On(),s=an(O,a.x,a.y,a.z,o.x,o.y,o.z,140);if(s&&D.aim(ut(s.x,s.y,s.z)),s&&i===`structure`){W.visible=!1;let e=Ut[le.value],t=Rt(q),n=Bt(e,s,O,t),r=Gt(e,t);xt(e,n.ox+r.x,n.baseY,n.oz+r.z,Mn(e,n.cx,n.baseY,n.cz,t),-90*t)}else bt.visible=!1,s&&i===`igniter`?(W.visible=at(D.idAt(ut(s.x,s.y,s.z))),W.position.set(s.x+.5,s.y+.5,s.z+.5)):s?(W.visible=!0,W.position.set(s.x+.5+s.nx,s.y+.5+s.ny,s.z+.5+s.nz)):W.visible=!1}return o.start(),D.flush(),await D.meshed,{gfx:o,sim:D,world:O,voxels:Ie,underwater:Le,boom:P,entities:F,npc:j,debris:k,player:M,plane:L,bomber:Xe}}export{As as n,Iu as startGame,ku as t};