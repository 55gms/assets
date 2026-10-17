import * as THREE from './vendor/three.module.js';

// One lightweight pass over the 3D image. HTML HUD and menus remain untouched.
export class CameraLook {
 constructor(renderer){
  this.size=new THREE.Vector2();this.enabled=true;
  this.target=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType,depthBuffer:true,samples:Math.min(2,renderer.capabilities.maxSamples)});
  this.material=new THREE.ShaderMaterial({depthTest:false,depthWrite:false,toneMapped:true,
   uniforms:{sceneImage:{value:this.target.texture},texel:{value:new THREE.Vector2(1,1)},strength:{value:1}},
   vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
   fragmentShader:`varying vec2 vUv;uniform sampler2D sceneImage;uniform vec2 texel;uniform float strength;
    void main(){
     vec3 center=texture2D(sceneImage,vUv).rgb;
     vec3 neighbors=(texture2D(sceneImage,vUv+vec2(texel.x,0.)).rgb+texture2D(sceneImage,vUv-vec2(texel.x,0.)).rgb+
       texture2D(sceneImage,vUv+vec2(0.,texel.y)).rgb+texture2D(sceneImage,vUv-vec2(0.,texel.y)).rgb)*.25;
     // Limit the sharpening correction so silhouettes do not acquire bright halos.
     vec3 detail=clamp(center-neighbors,vec3(-.07),vec3(.07));
     gl_FragColor=vec4(max(vec3(0.),center+detail*.22*strength),1.);
     #include <tonemapping_fragment>
     vec3 c=gl_FragColor.rgb;
     float luma=dot(c,vec3(.2126,.7152,.0722));
     // Shape luminance rather than each channel so painted walls retain their hue.
     float contrastLuma=mix(luma,luma*luma*(3.-2.*luma),.085);
     vec3 contrast=c*(contrastLuma/max(luma,.0001));
     // A restrained daylight balance, preserving blue paint and warm stone.
     contrast*=mix(vec3(.996,1.,1.006),vec3(1.004,1.,.994),smoothstep(.12,.8,luma));
     float edge=smoothstep(.30,.73,length(vUv-.5));
     contrast*=1.-edge*.07;
     gl_FragColor.rgb=mix(c,contrast,strength);
     #include <colorspace_fragment>
    }`});
  this.scene=new THREE.Scene();this.camera=new THREE.Camera();this.quad=new THREE.Mesh(new THREE.PlaneGeometry(2,2),this.material);this.quad.frustumCulled=false;this.scene.add(this.quad);
 }
 begin(renderer){renderer.getDrawingBufferSize(this.size);if(this.target.width!==this.size.x||this.target.height!==this.size.y){this.target.setSize(this.size.x,this.size.y);this.material.uniforms.texel.value.set(1/this.size.x,1/this.size.y);}renderer.setRenderTarget(this.target);}
 finish(renderer){renderer.setRenderTarget(null);this.material.uniforms.strength.value=this.enabled?1:0;renderer.render(this.scene,this.camera);}
 dispose(){this.target.dispose();this.material.dispose();this.quad.geometry.dispose();}
}
