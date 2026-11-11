import{C as e,T as t,b as n,d as r,f as i,l as a,p as o,u as s,v as c,w as l,y as u}from"./texture-CbT-jdHU.js";import{i as d}from"./starterYardLayout-B-YSEyTX.js";import{$t as f,Bt as p,Cn as m,Ct as h,Dt as g,Gt as _,Ht as v,Jt as y,Nt as b,Vt as x,Wt as S,Yt as C,at as w,ct as T,en as E,ft as D,lt as O,nt as k,pt as A,qt as j,rt as M,tt as N,ut as P}from"./index-BOiBfbo8.js";import{C as F,E as I,S as L,n as R,t as z}from"./meadowGroundingShadowMaterial-Bw0OL5JI.js";function B(e){let t=(t,n=1)=>{let r=F(e,{name:t});return r.emissiveVertexColor=!0,r.emissiveIntensity=n,A(r),r.update(),r};return{shell:t(`Unlit Bomb • Painted Charcoal Iron`,4),collar:t(`Unlit Bomb • Worn Iron Collar`),rope:t(`Unlit Bomb • Twisted Flax Fibers`),spark:j(y(`Bomb golden fuse spark`,[1,.92,.37],[1,.22,.015],[1,.63,.055],[1,.39,.025]),{opacity:.9}),core:j(y(`Bomb spark cream core`,[1,1,.85],[1,.76,.2],[1,.98,.64],[1,.9,.39]))}}function V(e){let t=F(e,{name:`Unlit Tools • Oak, Steel, Enamel & Leather`});return t.emissiveVertexColor=!0,A(t),t.update(),t}function H(e){let t=F(e,{name:`Unlit Backpack • Canvas & Leather`});return t.emissiveVertexColor=!0,A(t),t.update(),t}function U(e){let t=t=>{let n=F(e,{name:t});return n.emissiveVertexColor=!0,A(n),n.update(),n};return{body:t(`Unlit Vacuum • Painted Red Enamel`),trim:t(`Unlit Vacuum • Painted Cream Enamel`),rubber:t(`Unlit Vacuum • Soft Charcoal Rubber`)}}var W=`
${_?g:``}
varying vec3 vLampLight;
attribute vec3 vertex_position;
attribute vec3 vertex_normal;
attribute vec2 vertex_texCoord0;
attribute vec2 vertex_texCoord1;
attribute vec3 vertex_texCoord2;
attribute vec4 vertex_color;
#ifdef INSTANCING
attribute vec4 instance_cartCenter;
attribute vec4 instance_cartRotation;
attribute vec4 instance_cartSize;
attribute vec4 instance_cartVariation;
attribute vec4 instance_cartSurface;
vec3 rotateStraw(vec3 value) {
    vec4 q = instance_cartRotation;
    return value + 2.0 * cross(q.xyz, cross(q.xyz, value) + q.w * value);
}
#endif
uniform mat4 matrix_model;
uniform mat4 matrix_viewProjection;
uniform vec4 uCartMotion;
uniform vec4 uCartImpact;
uniform vec3 uSunDirection;
varying vec2 vUv;
varying vec2 vFaceUv;
varying vec4 vVariation;
varying vec2 vLight;
varying float vSkyExposure;
varying float vBirth;

void main(void) {
    vBirth = vertex_texCoord1.x;
    vec3 position = vertex_position;
    vec3 localNormal = vertex_normal;
    vec3 localSurface = vertex_texCoord2;
    vec4 variation = vertex_color;
    float strawLength = vertex_texCoord1.y;
#ifdef INSTANCING
    vBirth = instance_cartCenter.w;
    position = rotateStraw(vertex_position * instance_cartSize.xyz) + instance_cartCenter.xyz;
    localNormal = rotateStraw(vertex_normal);
    localSurface = instance_cartSurface.xyz;
    variation = vec4(instance_cartVariation.xyz, instance_cartSize.w);
    strawLength = instance_cartSize.z;
#endif
    float span = max(0.0001, uCartMotion.y - uCartMotion.x);
    float fraction = clamp((vBirth - uCartMotion.x) / span, 0.0, 1.0);
    float bornAt = uCartMotion.w * (1.0 - sqrt(1.0 - fraction));
    float age = uCartMotion.z - bornAt;
    if (vBirth > uCartMotion.x && vBirth <= uCartMotion.y) {
        float settling = pow(1.0 - clamp(age / 0.28, 0.0, 1.0), 2.0);
        position.y += settling * (position.y < 0.75 ? 0.035 : 0.075);
        position.xz += vec2(sin(vBirth * 4.7), cos(vBirth * 3.1)) * settling * 0.014;
    }
    float distanceToImpact = length(position.xz - uCartImpact.xz);
    float wave = clamp((uCartMotion.z - distanceToImpact * 0.07) / 0.42, 0.0, 1.0);
    float nearby = max(0.0, 1.0 - distanceToImpact / 0.65)
        * max(0.0, 1.0 - abs(position.y - uCartImpact.y) / 0.32);
    if (vBirth <= uCartMotion.x) position.y -= sin(wave * 3.14159) * nearby * uCartImpact.w * 0.014;
    vec3 normal = normalize(mat3(matrix_model) * localNormal);
    vec3 surfaceNormal = normalize(mat3(matrix_model) * localSurface);
    float wrapped = dot(normal, uSunDirection) * 0.5 + 0.5;
    vLight = vec2(${_?`max(0.0, dot(normal, uSunDirection))`:`wrapped * wrapped`},
        mix(0.72, 1.0, max(0.0, dot(surfaceNormal, uSunDirection))));
    vSkyExposure = ${_?`mix(${S.skyExposure.toFixed(2)}, 1.0, max(0.0, normal.y))`:`1.0`};
    vLampLight = ${_?`halloweenLampLight((matrix_model * vec4(position, 1.0)).xyz, normal)`:`vec3(0.0)`};
    vVariation = variation;
    vFaceUv = vertex_texCoord0;
    vUv = vertex_texCoord0 * vec2(0.18, strawLength * ${k.textureDensity.toFixed(2)})
        + fract(variation.gb * vec2(37.719, 91.533));
    gl_Position = matrix_viewProjection * matrix_model * vec4(position, 1.0);
}
`,G=`
#include "gammaPS"
varying vec3 vLampLight;
uniform sampler2D uHayTexture;
uniform float uCartProgress;
uniform vec3 uShadowTint;
uniform vec3 uSunTint;
varying vec2 vUv;
varying vec2 vFaceUv;
varying vec4 vVariation;
varying vec2 vLight;
varying float vSkyExposure;
varying float vBirth;
${T}
${O}
${_?h:``}
void main(void) {
    // Entire stems appear together. There is no alpha fade or screen-door mask.
    if (vBirth > uCartProgress) discard;
    vec3 strawColor = strawSurfaceColor(texture2D(uHayTexture, vUv).rgb, vVariation.xyz,
        0.0, ${k.textureContrast}, ${k.textureValueCenter});
    float edge = 1.0 - smoothstep(0.015, ${k.edgeWidth}, min(vFaceUv.x, 1.0 - vFaceUv.x));
    vec3 surface = gammaCorrectInput(strawColor) * (1.0 - edge * ${k.edgeDarkening});
    vec3 light = mix(uShadowTint, uSunTint, vLight.x)
        * (${k.ambientStrength} * vSkyExposure + ${k.sunStrength} * vLight.x) * vLight.y
        + vLampLight * vLight.y;
    vec3 color = surface * light * vVariation.a;
    ${_?`color = autumnSurfaceColor(color);`:``}
    gl_FragColor = vec4(gammaCorrectOutput(clamp(color, 0.0, 1.0)), 1.0);
}
`;function K(d){let f=new m({uniqueName:`OpaqueCollectedHay`,vertexGLSL:W,fragmentGLSL:G,attributes:{vertex_position:n,vertex_normal:u,vertex_texCoord0:e,vertex_texCoord1:l,vertex_texCoord2:t,vertex_color:c,instance_cartCenter:a,instance_cartRotation:s,instance_cartSize:r,instance_cartVariation:i,instance_cartSurface:o}});f.name=`Unlit Hay Cart • Opaque Collected Straw`,_&&b(f),f.setParameter(`uHayTexture`,d),f.setParameter(`uCartProgress`,100),f.setParameter(`uCartMotion`,[-1,-1,999,1]),f.setParameter(`uCartImpact`,[0,0,0,0]),f.setParameter(`uShadowTint`,[...k.shadowTint]),f.setParameter(`uSunTint`,[...k.sunTint]);let p=Math.hypot(...k.sunDirection);return f.setParameter(`uSunDirection`,k.sunDirection.map(e=>e/p)),f.update(),f}function q(e){return{paint:J(e.cartPaint,`Unlit Hay Cart • Warm Barn Red`,_?I.barnRed:[1,1,1]),wood:J(e.cartWood,`Unlit Hay Cart • Honey Timber`,_?I.timber:[1,1,1]),straw:K(e.hay[0]),sign:J(e.cartSign,`Unlit Hay Cart • Sell Hay Sign`,_?I.ivory:[1,1,1]),iron:J(e.shedMetal,`Unlit Hay Cart • Charcoal Iron`,_?I.iron:[.28,.29,.3]),cream:J(e.shedIvory,`Unlit Hay Cart • Warm Ivory Enamel`,_?I.ivory:[1,.97,.9])}}function J(e,t,n=[1,1,1]){let r=F(e,{name:t,tint:n});return r.emissiveVertexColor=!0,A(r),r.update(),r}function Y(e){return{backwall:X(e.shedIvory,`Unlit Shed • Oatmeal Painted Interior`,_?[.95,.85,.65]:[.91,.89,.84]),wood:X(e.shedTimber,`Unlit Shed • Quiet Honey Wood`,_?I.timber:[1.1,1.025,.91],90),trim:X(e.shedIvory,`Unlit Shed • Buttery Ivory Frame`,_?I.ivory:[1,1,1]),boards:X(e.shedPaint,`Unlit Shed • Warm Barn Red`,_?I.barnRed:[1.38,1.3,1.23]),roof:X(e.shedMetal,`Unlit Shed • Painted Roof`,_?I.plum:[1,1,1]),endgrain:X(e.shedEndgrain,`Unlit Shed • Sawn Honey Wood`,_?I.endgrain:[1.12,1.13,1.08]),emblem:X(e.shedIvory,`Unlit Shed • Ivory Painted Emblem`,_?I.gold:[1,1,1]),hardware:X(e.shedMetal,`Unlit Shed • Warm Charcoal Metal`,I.iron)}}function X(e,t,n=[1,1,1],r=0){let i=F(e,{name:t,tint:n});return i.emissiveVertexColor=!0,i.emissiveMapRotation=r,A(i),i.update(),i}function Z(e){return _?[y(`Autumn • copper`,[.68,.15,.025],[.12,.018,.045],[.48,.075,.015],[.28,.035,.035]),y(`Autumn • honey`,[.76,.43,.035],[.14,.06,.018],[.56,.26,.02],[.33,.13,.018])].map(t=>{let n=e.clone();return n.name=t.name,C(n,t),n.update(),n}):[]}function Q(e,t,n,r,i){let a=D(e,t),{createGradient:o,createSurfaceMaterial:s}=a,c=i??N(e,t,n,r),l=z([.3,.235,.105],.3),u=w(r,`grass`),m=w(r,`mown`);a.own(u),a.own(m);let h=s(P.treeFoliage,r.treeFoliage,p.treeFoliage),g={...c,tool:V(r.toolAtlas),backpack:H(r.backpackAtlas),vacuum:U(r.vacuumAtlas),bomb:B(r.bombAtlas),stumpEndgrain:L(r.stumpEndgrain),diamondWell:R(r.diamondWellAtlas),hayCart:q(r),workshop:Y(r),accent:o(P.accent),basketWood:o(P.basketWood),dockWood:s(P.dockWood,r.wood,p.dockWood),dockWoodAlternate:s(P.dockWoodAlternate,r.wood,p.dockWoodAlternate),groundSurface:s(P.ground,r.grass,p.islandGround,{colorZones:d,side:{averageColor:v.dirt,colorScale:1.3,texture:r.dirt}}),hayLight:o(P.hayLight),movingSupport:o(P.movingSupport),meadowDistantSurface:c.groundTerrainSurface,meadowGrassSurface:u,meadowGrass:o(P.meadowGrass),meadowDirtPatchSurface:s(x,r.dirt,p.yardDirtOverlay,{vertexColorBlend:[.34,.18,.045]}),meadowGrassRoadSurface:m,meadowGroundingShadow:l,obstacle:o(P.obstacle),outerFoliage:s(P.outerFoliage,r.treeFoliage,p.outerFoliage,{vertexColorBlend:[.055,.1,.035]}),treeBark:s(P.treeBark,r.treeBark,p.treeBark),treeDistantBark:s(P.treeDistantBark,r.treeBark,p.distantTreeBark),treeDistantFoliage:s(P.treeDistantFoliage,r.treeFoliage,p.distantTreeFoliage),treeFoliage:h,treeFoliageAccents:Z(h).map(a.own)},_=f(g),y=r.onTextureReplaced((e,t)=>{for(let n of _)E(n,e,t)});for(let e of[g.groundSurface,g.meadowGrassSurface,g.meadowGrass,g.meadowGrassRoadSurface,g.meadowDirtPatchSurface])M(e);return[g.tool,g.backpack,...Object.values(g.vacuum),...Object.values(g.bomb),g.stumpEndgrain,g.diamondWell,...Object.values(g.hayCart),...Object.values(g.workshop),g.meadowGroundingShadow].forEach(a.own),{...g,destroy:()=>{y(),a.destroy(),i||c.destroy()}}}export{Q as createGameMaterials};