import * as THREE from './vendor/three.module.js';

// The visible sun and the map's shadow light share exactly the same direction.
export const SUN_DIRECTION = new THREE.Vector3(-.45,1,.3).normalize();

export function createAtmosphere(renderer){
 const scene=new THREE.Scene();
 const material=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,toneMapped:false,
  uniforms:{sunDirection:{value:SUN_DIRECTION.clone()}},
  vertexShader:`varying vec3 skyDirection;
   void main(){skyDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader:`precision highp float;
   varying vec3 skyDirection;uniform vec3 sunDirection;
   float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
   float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
    return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.)),f.x),f.y);}
   float cloudNoise(vec2 p){float v=0.,a=.5;mat2 turn=mat2(.8,-.6,.6,.8);
    for(int i=0;i<5;i++){v+=a*noise(p);p=turn*p*2.03+vec2(17.3,9.2);a*=.5;}return v;}
   void main(){
    vec3 d=normalize(skyDirection);float elevation=max(d.y,0.);
    float clearAir=pow(smoothstep(0.,.85,elevation),.42);
    // Linear radiance: a blue upper sky and pale mineral haze at street level.
    vec3 sky=mix(vec3(.42,.49,.51),vec3(.13,.245,.335),clearAir);
    float facing=max(dot(d,sunDirection),0.);
    // Broad, restrained atmospheric haze and a small solar disc; no screen bloom.
    sky+=vec3(.065,.051,.033)*pow(facing,12.);
    sky+=vec3(.14,.12,.085)*pow(facing,700.);
    float disk=smoothstep(cos(.0058),cos(.0043),facing);
    sky+=vec3(2.2,1.95,1.55)*disk;
    // A continuous cloud plane produces matching edges on all six cube faces.
    vec2 p=d.xz/max(d.y,.10)*2.1+vec2(5.8,11.3);
    float shape=cloudNoise(p),detail=cloudNoise(p*3.1+19.);
    float cloud=smoothstep(.51,.72,shape+.09*(detail-.5));
    cloud*=smoothstep(.055,.24,d.y);
    float depth=cloudNoise(p+sunDirection.xz*.32);
    vec3 cloudColor=mix(vec3(.37,.43,.47),vec3(.64,.68,.69),smoothstep(.38,.65,depth));
    cloudColor+=vec3(.05,.038,.022)*pow(facing,8.);
    sky=mix(sky,cloudColor,cloud*.79);
    // Warm ground bounce in reflections, fading into the same hazy horizon.
    if(d.y<0.)sky=mix(vec3(.16,.145,.125),vec3(.42,.49,.51),exp(d.y*15.));
    gl_FragColor=vec4(sky,1.);
   }`});
 const sphere=new THREE.Mesh(new THREE.SphereGeometry(1,32,16),material);scene.add(sphere);
 const target=new THREE.WebGLCubeRenderTarget(512,{type:THREE.HalfFloatType,generateMipmaps:false,minFilter:THREE.LinearFilter});
 const camera=new THREE.CubeCamera(.1,5,target),previous=renderer.getRenderTarget();
 try{camera.update(renderer,scene);}finally{renderer.setRenderTarget(previous);sphere.geometry.dispose();material.dispose();}
 const generator=new THREE.PMREMGenerator(renderer);let environment;
 try{environment=generator.fromCubemap(target.texture);}finally{generator.dispose();}
 return {texture:target.texture,environment:environment.texture,dispose(){environment.dispose();target.dispose();}};
}
