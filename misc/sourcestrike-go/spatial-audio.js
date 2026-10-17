// Each event owns a source: simultaneous shots never rewind another sound.
export class SpatialAudio {
  constructor(){this.buffers=new Map();this.voices=new Set();this.epoch=0;}
  unlock(){
    const Context=globalThis.AudioContext||globalThis.webkitAudioContext;if(!Context)return;
    if(!this.context){this.context=new Context();this.master=this.context.createGain();this.master.gain.value=.6;const limiter=this.context.createDynamicsCompressor();limiter.threshold.value=-8;limiter.knee.value=6;limiter.ratio.value=8;this.master.connect(limiter);limiter.connect(this.context.destination);}
    if(this.context.state==='suspended')this.context.resume().catch(()=>{});
  }
  load(name){if(!this.context)return Promise.resolve(null);if(!this.buffers.has(name))this.buffers.set(name,fetch(`assets/sounds/${name}.wav?v=4`).then(r=>{if(!r.ok)throw Error(name);return r.arrayBuffer();}).then(b=>this.context.decodeAudioData(b)).catch(()=>null));return this.buffers.get(name);}
  listener(position,forward,up,volume){if(!this.context)return;const c=this.context,l=c.listener,t=c.currentTime;this.master.gain.setTargetAtTime(volume,t,.025);if(l.positionX){for(const [prefix,v]of [['position',position],['forward',forward],['up',up]])for(const [axis,key]of [['X','x'],['Y','y'],['Z','z']])l[prefix+axis].setValueAtTime(v[key],t);}else{l.setPosition(position.x,position.y,position.z);l.setOrientation(forward.x,forward.y,forward.z,up.x,up.y,up.z);}}
  async play(name,volume,position=null,occluded=false){
    this.unlock();if(!this.context)return;const epoch=this.epoch,buffer=await this.load(name);if(!buffer||epoch!==this.epoch||this.context.state!=='running'||this.voices.size>=64)return;
    const c=this.context,source=c.createBufferSource(),gain=c.createGain(),nodes=[source,gain];source.buffer=buffer;gain.gain.value=volume*(occluded?.55:1);source.connect(gain);let tail=gain;
    if(position){const filter=c.createBiquadFilter();filter.type='lowpass';filter.frequency.value=occluded?1600:18000;tail.connect(filter);const pan=c.createPanner();pan.panningModel='HRTF';pan.distanceModel='inverse';pan.refDistance=4;pan.maxDistance=75;pan.rolloffFactor=1.3;pan.channelCount=1;pan.channelCountMode='explicit';pan.positionX.value=position.x;pan.positionY.value=position.y;pan.positionZ.value=position.z;filter.connect(pan);tail=pan;nodes.push(filter,pan);}
    tail.connect(this.master);this.voices.add(source);source.onended=()=>{this.voices.delete(source);for(const n of nodes)n.disconnect();};source.start();
  }
  stop(){this.epoch++;for(const source of this.voices){source.stop();source.onended?.();}this.voices.clear();}
}
