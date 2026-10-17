import * as THREE from './vendor/three.module.js';
let texture;
export function smokeCloud(position,count=56,tint=0xaaa99f){
 texture??=new THREE.TextureLoader().load('assets/particles/smoke_cloud.png');
 texture.userData.shared=true;
 const plane=new THREE.PlaneGeometry(1,1),g=new THREE.InstancedBufferGeometry();g.index=plane.index;g.attributes=plane.attributes;
 const offsets=[],sizes=[],seeds=[];
 for(let i=0;i<count;i++){const a=i*2.39996,r=Math.sqrt((i+.5)/count)*2.3;offsets.push(Math.cos(a)*r,.4+(i%7)/7*2.3,Math.sin(a)*r);sizes.push(2.4+(i%5)*.16);seeds.push(i*.73);}
 g.setAttribute('offset',new THREE.InstancedBufferAttribute(new Float32Array(offsets),3));g.setAttribute('size',new THREE.InstancedBufferAttribute(new Float32Array(sizes),1));g.setAttribute('seed',new THREE.InstancedBufferAttribute(new Float32Array(seeds),1));g.instanceCount=count;
 const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,depthTest:true,uniforms:{cloud:{value:texture},age:{value:0},growth:{value:.05},opacity:{value:0},tint:{value:new THREE.Color(tint)}},vertexShader:`attribute vec3 offset;attribute float size;attribute float seed;uniform float age;uniform float growth;varying vec2 vUv;varying float vSeed;void main(){vUv=uv;vSeed=seed;vec3 p=offset*growth;p.x+=sin(age*.2+seed)*.12*growth;p.z+=cos(age*.17+seed)*.12*growth;vec4 mv=modelViewMatrix*vec4(p,1.);mv.xy+=position.xy*size*growth;gl_Position=projectionMatrix*mv;}`,fragmentShader:`uniform sampler2D cloud;uniform float opacity;uniform float age;uniform vec3 tint;varying vec2 vUv;varying float vSeed;void main(){vec2 p=vUv-.5;float a=vSeed+age*.025;vec2 q=mat2(cos(a),-sin(a),sin(a),cos(a))*p+.5;float radial=1.-smoothstep(.2,.5,length(p));vec3 noise=texture2D(cloud,clamp(q,.01,.99)).rgb;float density=radial*(.5+noise.r*.5)*opacity;if(density<.005)discard;gl_FragColor=vec4(tint*(.83+noise.r*.23),density);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`});
 const mesh=new THREE.Mesh(g,material);mesh.frustumCulled=false;mesh.position.copy(position);mesh.renderOrder=2;return mesh;
}
export function animateCloud(mesh,age,fade=1,fast=false){const u=mesh.material.uniforms;u.age.value=age;u.growth.value=Math.min(1,age/(fast?.3:1.25));u.opacity.value=(fast?.34:.64)*Math.min(1,age*3)*fade;}
