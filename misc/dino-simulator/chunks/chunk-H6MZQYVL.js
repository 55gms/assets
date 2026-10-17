import{a as Ou}from"./chunk-IHRIUEAN.js";var Cd=0,Pc=1,Rd=2;var xs=1,Id=2,cr=3,hr=0,Bt=1,pn=2,Pn=0,ys=1,Dc=2,Lc=3,Nc=4,Pd=5,ur=100,Dd=101,Ld=102,Nd=103,Ud=104,Fd=200,Od=201,Bd=202,kd=203,zd=204,Gd=205,Vd=206,Hd=207,Wd=208,Xd=209,jd=210,qd=211,Yd=212,Jd=213,Zd=214,Mo=0,wo=1,To=2,Ss=3,Eo=4,Ao=5,Co=6,Ro=7,Kd=0,$d=1,Qd=2,tn=0,Uc=1,Fc=2,Oc=3,Bc=4,kc=5,zc=6,Gc=7,jl="attached",ep="detached",Vc=300,dr=301,xi=302,Io=303,Po=304,bs=306,Ea=1e3,zn=1001,Aa=1002,Xt=1003,tp=1004;var Ms=1005;var St=1006,Do=1007;var yi=1008;var kt=1009,Hc=1010,Wc=1011,pr=1012,Lo=1013,Dn=1014,zt=1015,mn=1016,No=1017,Uo=1018,mr=1020,Xc=35902,jc=35899,np=1021,ip=1022,qt=1023,jn=1026,Si=1027,Fo=1028,Oo=1029,fr=1030,qc=1031;var Yc=1033,Bo=33776,ko=33777,zo=33778,Go=33779,Jc=35840,Zc=35841,Kc=35842,$c=35843,Qc=36196,eh=37492,th=37496,nh=37488,ih=37489,rh=37490,sh=37491,ah=37808,oh=37809,lh=37810,ch=37811,hh=37812,uh=37813,dh=37814,ph=37815,mh=37816,fh=37817,gh=37818,_h=37819,vh=37820,xh=37821,yh=36492,Sh=36494,bh=36495,Mh=36283,wh=36284,Th=36285,Eh=36286,ef=2200,tf=2201;var Vr=2300,Ca=2301,Ta=2302,ai=2400,oi=2401,Hr=2402,rp=2500,Ah=2501,nf=0,rf=1,sf=2;var sp=0,ap=1,bi="",Pt="srgb",ci="srgb-linear",Wr="linear",Xe="srgb";var si=7680;var op=512,lp=513,cp=514,Vo=515,hp=516,up=517,Ho=518,dp=519,Ra=35044,af=35048;var Ch="300 es",In=2e3,Xr=2001;function Rh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function pp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Zi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mp(){let r=Zi("canvas");return r.style.display="block",r}var Bu={},Ki=null;function jr(...r){let e="THREE."+r.shift();Ki?Ki("log",e,...r):console.log(e,...r)}function _e(...r){let e="THREE."+r.shift();Ki?Ki("warn",e,...r):console.warn(e,...r)}function xe(...r){let e="THREE."+r.shift();Ki?Ki("error",e,...r):console.error(e,...r)}function $i(...r){let e=r.join(" ");e in Bu||(Bu[e]=!0,_e(...r))}function fp(r,e,t){return new Promise(function(n,i){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}var dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=1234567,Yi=Math.PI/180,hi=180/Math.PI;function Wt(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(gt[255&r]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]+"-"+gt[255&e]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[63&t|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[255&n]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function Ne(r,e,t){return Math.max(e,Math.min(t,r))}function ql(r,e){return(r%e+e)%e}function kr(r,e,t){return(1-t)*r+t*e}function en(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function je(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var of={DEG2RAD:Yi,RAD2DEG:hi,generateUUID:Wt,clamp:Ne,euclideanModulo:ql,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:kr,damp:function(r,e,t,n){return kr(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(ql(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(ku=r);let e=ku+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Yi},radToDeg:function(r){return r*hi},isPowerOfTwo:function(r){return!(r&r-1)&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*p,o*h,o*c);break;default:_e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:je,denormalize:en},ie=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ne(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],m=s[a+2],_=s[a+3];if(o<=0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o>=1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=_);if(u!==_||l!==d||c!==p||h!==m){let f=l*d+c*p+h*m+u*_;f<0&&(d=-d,p=-p,m=-m,_=-_,f=-f);let v=1-o;if(f<.9995){let g=Math.acos(f),x=Math.sin(g);v=Math.sin(v*g)/x,l=l*v+d*(o=Math.sin(o*g)/x),c=c*v+p*o,h=h*v+m*o,u=u*v+_*o}else{l=l*v+d*o,c=c*v+p*o,h=h*v+m*o,u=u*v+_*o;let g=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=g,c*=g,h*=g,u*=g}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:_e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ne(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ml=new A,zu=new xt,Pe=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],_=i[0],f=i[3],v=i[6],g=i[1],x=i[4],S=i[7],w=i[2],T=i[5],I=i[8];return s[0]=a*_+o*g+l*w,s[3]=a*f+o*x+l*T,s[6]=a*v+o*S+l*I,s[1]=c*_+h*g+u*w,s[4]=c*f+h*x+u*T,s[7]=c*v+h*S+u*I,s[2]=d*_+p*g+m*w,s[5]=d*f+p*x+m*T,s[8]=d*v+p*S+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,m=t*u+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fl.makeScale(e,t)),this}rotate(e){return this.premultiply(fl.makeRotation(-e)),this}translate(e,t){return this.premultiply(fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fl=new Pe,Gu=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vu=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lf(){let r={enabled:!0,workingColorSpace:ci,spaces:{},convert:function(i,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Xe&&(i.r=Rn(i.r),i.g=Rn(i.g),i.b=Rn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Xe&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?Wr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return $i("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return $i("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ci]:{primaries:e,whitePoint:n,transfer:Wr,toXYZ:Gu,fromXYZ:Vu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:Xe,toXYZ:Gu,fromXYZ:Vu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),r}var He=lf();function Rn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Ji(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Pi,Ia=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pi===void 0&&(Pi=Zi("canvas")),Pi.width=e.width,Pi.height=e.height;let i=Pi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Pi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*Rn(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Rn(t[n]/255)):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}return _e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cf=0,Qi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Wt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(gl(i[a].image)):s.push(gl(i[a]))}else s=gl(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function gl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ia.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(_e("Texture: Unable to serialize Texture."),{})}var hf=0,_l=new A,yt=class r extends dn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Wt(),this.name="",this.source=new Qi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){_e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n:_e(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ea:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ea:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yt.DEFAULT_IMAGE=null,yt.DEFAULT_MAPPING=Vc,yt.DEFAULT_ANISOTROPY=1;var Ze=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],_=l[2],f=l[6],v=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+f)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,S=(p+1)/2,w=(v+1)/2,T=(h+d)/4,I=(u+_)/4,F=(m+f)/4;return x>S&&x>w?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=I/n):S>w?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=T/i,s=F/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=I/s,i=F/s),this.set(n,i,s,t),this}let g=Math.sqrt((f-m)*(f-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(f-m)/g,this.y=(u-_)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this.w=Ne(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this.w=Ne(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pa=class extends dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new yt(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Qi(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dt=class extends Pa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qr=class extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Lt=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(s,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(e.matrixWorld),this.union(qs)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),Ys.subVectors(this.max,Cr),Di.subVectors(e.a,Cr),Li.subVectors(e.b,Cr),Ni.subVectors(e.c,Cr),Nn.subVectors(Li,Di),Un.subVectors(Ni,Li),ti.subVectors(Di,Ni);let t=[0,-Nn.z,Nn.y,0,-Un.z,Un.y,0,-ti.z,ti.y,Nn.z,0,-Nn.x,Un.z,0,-Un.x,ti.z,0,-ti.x,-Nn.y,Nn.x,0,-Un.y,Un.x,0,-ti.y,ti.x,0];return!!vl(t,Di,Li,Ni,Ys)&&(t=[1,0,0,0,1,0,0,0,1],!!vl(t,Di,Li,Ni,Ys)&&(Js.crossVectors(Nn,Un),t=[Js.x,Js.y,Js.z],vl(t,Di,Li,Ni,Ys)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Kt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yn=[new A,new A,new A,new A,new A,new A,new A,new A],Kt=new A,qs=new Lt,Di=new A,Li=new A,Ni=new A,Nn=new A,Un=new A,ti=new A,Cr=new A,Ys=new A,Js=new A,ni=new A;function vl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ni.fromArray(r,s);let o=i.x*Math.abs(ni.x)+i.y*Math.abs(ni.y)+i.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var uf=new Lt,Rr=new A,xl=new A,Nt=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):uf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Rr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(xl)),this.expandByPoint(Rr.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sn=new A,yl=new A,Zs=new A,Fn=new A,Sl=new A,Ks=new A,bl=new A,Gn=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yl.copy(e).add(t).multiplyScalar(.5),Zs.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(yl);let s=.5*e.distanceTo(t),a=-this.direction.dot(Zs),o=Fn.dot(this.direction),l=-Fn.dot(Zs),c=Fn.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(yl).addScaledVector(Zs,d),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);let n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,i,s){Sl.subVectors(t,e),Ks.subVectors(n,e),bl.crossVectors(Sl,Ks);let a,o=this.direction.dot(bl);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Fn.subVectors(this.origin,e);let l=a*this.direction.dot(Ks.crossVectors(Fn,Ks));if(l<0)return null;let c=a*this.direction.dot(Sl.cross(Fn));if(c<0||l+c>o)return null;let h=-a*Fn.dot(bl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,m,_,f){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,m,_,f)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,m,_,f){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=d,v[3]=p,v[7]=m,v[11]=_,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ui.setFromMatrixColumn(e,0).length(),s=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,_=c*u;t[0]=d+_*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,_=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,p=a*c,m=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(df,e,pf)}lookAt(e,t,n){let i=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),On.crossVectors(n,Rt),On.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),On.crossVectors(n,Rt)),On.normalize(),$s.crossVectors(Rt,On),i[0]=On.x,i[4]=$s.x,i[8]=Rt.x,i[1]=On.y,i[5]=$s.y,i[9]=Rt.y,i[2]=On.z,i[6]=$s.z,i[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],_=n[6],f=n[10],v=n[14],g=n[3],x=n[7],S=n[11],w=n[15],T=i[0],I=i[4],F=i[8],R=i[12],G=i[1],V=i[5],B=i[9],H=i[13],O=i[2],Z=i[6],j=i[10],X=i[14],le=i[3],ve=i[7],de=i[11],ue=i[15];return s[0]=a*T+o*G+l*O+c*le,s[4]=a*I+o*V+l*Z+c*ve,s[8]=a*F+o*B+l*j+c*de,s[12]=a*R+o*H+l*X+c*ue,s[1]=h*T+u*G+d*O+p*le,s[5]=h*I+u*V+d*Z+p*ve,s[9]=h*F+u*B+d*j+p*de,s[13]=h*R+u*H+d*X+p*ue,s[2]=m*T+_*G+f*O+v*le,s[6]=m*I+_*V+f*Z+v*ve,s[10]=m*F+_*B+f*j+v*de,s[14]=m*R+_*H+f*X+v*ue,s[3]=g*T+x*G+S*O+w*le,s[7]=g*I+x*V+S*Z+w*ve,s[11]=g*F+x*B+S*j+w*de,s[15]=g*R+x*H+S*X+w*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],m=e[3],_=e[7],f=e[11],v=e[15],g=l*p-c*d,x=o*p-c*u,S=o*d-l*u,w=a*p-c*h,T=a*d-l*h,I=a*u-o*h;return t*(_*g-f*x+v*S)-n*(m*g-f*w+v*T)+i*(m*x-_*w+v*I)-s*(m*S-_*T+f*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],_=e[13],f=e[14],v=e[15],g=u*f*c-_*d*c+_*l*p-o*f*p-u*l*v+o*d*v,x=m*d*c-h*f*c-m*l*p+a*f*p+h*l*v-a*d*v,S=h*_*c-m*u*c+m*o*p-a*_*p-h*o*v+a*u*v,w=m*u*l-h*_*l-m*o*d+a*_*d+h*o*f-a*u*f,T=t*g+n*x+i*S+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return e[0]=g*I,e[1]=(_*d*s-u*f*s-_*i*p+n*f*p+u*i*v-n*d*v)*I,e[2]=(o*f*s-_*l*s+_*i*c-n*f*c-o*i*v+n*l*v)*I,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*I,e[4]=x*I,e[5]=(h*f*s-m*d*s+m*i*p-t*f*p-h*i*v+t*d*v)*I,e[6]=(m*l*s-a*f*s-m*i*c+t*f*c+a*i*v-t*l*v)*I,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*I,e[8]=S*I,e[9]=(m*u*s-h*_*s-m*n*p+t*_*p+h*n*v-t*u*v)*I,e[10]=(a*_*s-m*o*s+m*n*c-t*_*c-a*n*v+t*o*v)*I,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*I,e[12]=w*I,e[13]=(h*_*i-m*u*i+m*n*d-t*_*d-h*n*f+t*u*f)*I,e[14]=(m*o*i-a*_*i-m*n*l+t*_*l+a*n*f-t*o*f)*I,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*I,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,m=s*u,_=a*h,f=a*u,v=o*u,g=l*c,x=l*h,S=l*u,w=n.x,T=n.y,I=n.z;return i[0]=(1-(_+v))*w,i[1]=(p+S)*w,i[2]=(m-x)*w,i[3]=0,i[4]=(p-S)*T,i[5]=(1-(d+v))*T,i[6]=(f+g)*T,i[7]=0,i[8]=(m+x)*I,i[9]=(f-g)*I,i[10]=(1-(d+_))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Ui.set(i[0],i[1],i[2]).length(),a=Ui.set(i[4],i[5],i[6]).length(),o=Ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),$t.copy(this);let l=1/s,c=1/a,h=1/o;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=c,$t.elements[5]*=c,$t.elements[6]*=c,$t.elements[8]*=h,$t.elements[9]*=h,$t.elements[10]*=h,t.setFromRotationMatrix($t),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i),m,_;if(l)m=s/(a-s),_=a*s/(a-s);else if(o===In)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else{if(o!==Xr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);m=-a/(a-s),_=-a*s/(a-s)}return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i),m,_;if(l)m=1/(a-s),_=a/(a-s);else if(o===In)m=-2/(a-s),_=-(a+s)/(a-s);else{if(o!==Xr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=-1/(a-s),_=-s/(a-s)}return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ui=new A,$t=new Ce,df=new A(0,0,0),pf=new A(1,1,1),On=new A,$s=new A,Rt=new A,Hu=new Ce,Wu=new xt,jt=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:_e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jt.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},mf=0,Xu=new A,Fi=new xt,bn=new Ce,Qs=new A,Ir=new A,ff=new A,gf=new xt,ju=new A(1,0,0),qu=new A(0,1,0),Yu=new A(0,0,1),Ju={type:"added"},_f={type:"removed"},Oi={type:"childadded",child:null},Ml={type:"childremoved",child:null},rt=class r extends dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Wt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new A,t=new jt,n=new xt,i=new A(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Pe}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(ju,e)}rotateY(e){return this.rotateOnAxis(qu,e)}rotateZ(e){return this.rotateOnAxis(Yu,e)}translateOnAxis(e,t){return Xu.copy(e).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ju,e)}translateY(e){return this.translateOnAxis(qu,e)}translateZ(e){return this.translateOnAxis(Yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Ir,Qs,this.up):bn.lookAt(Qs,Ir,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(bn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ju),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_f),Ml.child=e,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ju),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,ff),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};rt.DEFAULT_UP=new A(0,1,0),rt.DEFAULT_MATRIX_AUTO_UPDATE=!0,rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=new A,Mn=new A,wl=new A,wn=new A,Bi=new A,ki=new A,Zu=new A,Tl=new A,El=new A,Al=new A,Cl=new Ze,Rl=new Ze,Il=new Ze,cn=class r{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qt.subVectors(e,t),i.cross(Qt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Qt.subVectors(i,t),Mn.subVectors(n,t),wl.subVectors(e,t);let a=Qt.dot(Qt),o=Qt.dot(Mn),l=Qt.dot(wl),c=Mn.dot(Mn),h=Mn.dot(wl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wn)!==null&&wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Cl.setScalar(0),Rl.setScalar(0),Il.setScalar(0),Cl.fromBufferAttribute(e,t),Rl.fromBufferAttribute(e,n),Il.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Cl,s.x),a.addScaledVector(Rl,s.y),a.addScaledVector(Il,s.z),a}static isFrontFacing(e,t,n,i){return Qt.subVectors(n,t),Mn.subVectors(e,t),Qt.cross(Mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),.5*Qt.cross(Mn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Bi.subVectors(i,n),ki.subVectors(s,n),Tl.subVectors(e,n);let l=Bi.dot(Tl),c=ki.dot(Tl);if(l<=0&&c<=0)return t.copy(n);El.subVectors(e,i);let h=Bi.dot(El),u=ki.dot(El);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Bi,a);Al.subVectors(e,s);let p=Bi.dot(Al),m=ki.dot(Al);if(m>=0&&p<=m)return t.copy(s);let _=p*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(ki,o);let f=h*m-p*u;if(f<=0&&u-h>=0&&p-m>=0)return Zu.subVectors(s,i),o=(u-h)/(u-h+(p-m)),t.copy(i).addScaledVector(Zu,o);let v=1/(f+_+d);return a=_*v,o=d*v,t.copy(n).addScaledVector(Bi,a).addScaledVector(ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Pl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=He.workingColorSpace){if(e=ql(e,1),t=Ne(t,0,1),n=Ne(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Pl(a,s,e+1/3),this.g=Pl(a,s,e),this.b=Pl(a,s,e-1/3)}return He.colorSpaceToWorking(this,i),this}setStyle(e,t=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&_e("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:_e("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);_e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=gp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):_e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return He.workingToColorSpace(_t.copy(this),e),65536*Math.round(Ne(255*_t.r,0,255))+256*Math.round(Ne(255*_t.g,0,255))+Math.round(Ne(255*_t.b,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(_t.copy(this),t);let n=_t.r,i=_t.g,s=_t.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Pt){He.workingToColorSpace(_t.copy(this),e);let t=_t.r,n=_t.g,i=_t.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(ea);let n=kr(Bn.h,ea.h,t),i=kr(Bn.s,ea.s,t),s=kr(Bn.l,ea.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_t=new Ee;Ee.NAMES=gp;var vf=0,Ut=class extends dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Wt(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){_e(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:_e(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Yr=class extends Ut{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},P_=xf();function xf(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var at=new A,ta=new ie,yf=0,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ra,this.updateRanges=[],this.gpuType=zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ta.fromBufferAttribute(this,t),ta.applyMatrix3(e),this.setXY(t,ta.x,ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=en(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=en(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=en(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=en(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=en(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ra&&(e.usage=this.usage),e}};var Jr=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Zr=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Se=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sf=0,Ht=new Ce,Dl=new rt,zi=new A,It=new Lt,Pr=new Lt,pt=new A,Ye=class r extends dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Wt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rh(e)?Zr:Jr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Se(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&_e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new A,1/0);if(e){let n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Pr.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(It.min,Pr.min),It.expandByPoint(pt),pt.addVectors(It.max,Pr.max),It.expandByPoint(pt)):(It.expandByPoint(Pr.min),It.expandByPoint(Pr.max))}It.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pt.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(e,c),pt.add(zi)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new A,l[F]=new A;let c=new A,h=new A,u=new A,d=new ie,p=new ie,m=new ie,_=new A,f=new A;function v(F,R,G){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,G),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,G),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let V=1/(p.x*m.y-m.x*p.y);isFinite(V)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(V),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(V),o[F].add(_),o[R].add(_),o[G].add(_),l[F].add(f),l[R].add(f),l[G].add(f))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let F=0,R=g.length;F<R;++F){let G=g[F],V=G.start;for(let B=V,H=V+G.count;B<H;B+=3)v(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let x=new A,S=new A,w=new A,T=new A;function I(F){w.fromBufferAttribute(i,F),T.copy(w);let R=o[F];x.copy(R),x.sub(w.multiplyScalar(w.dot(R))).normalize(),S.crossVectors(T,R);let G=S.dot(l[F])<0?-1:1;a.setXYZW(F,x.x,x.y,x.z,G)}for(let F=0,R=g.length;F<R;++F){let G=g[F],V=G.start;for(let B=V,H=V+G.count;B<H;B+=3)I(e.getX(B+0)),I(e.getX(B+1)),I(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new A,s=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let _=0,f=l.length;_<f;_++){p=o.isInterleavedBufferAttribute?l[_]*o.data.stride+o.offset:l[_]*h;for(let v=0;v<h;v++)d[m++]=c[p++]}return new Et(d,h,u)}if(this.index===null)return _e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ku=new Ce,ii=new Gn,na=new Nt,$u=new A,ia=new A,ra=new A,sa=new A,Ll=new A,aa=new A,Qu=new A,oa=new A,lt=class extends rt{constructor(e=new Ye,t=new Yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){aa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Ll.fromBufferAttribute(u,e),a?aa.addScaledVector(Ll,h):aa.addScaledVector(Ll.sub(t),h))}t.add(aa)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),ii.copy(e.ray).recast(e.near),na.containsPoint(ii.origin)===!1&&(ii.intersectSphere(na,$u)===null||ii.origin.distanceToSquared($u)>(e.far-e.near)**2))return;Ku.copy(s).invert(),ii.copy(e.ray).applyMatrix4(Ku),n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,ii)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let f=d[m],v=a[f.materialIndex];for(let g=Math.max(f.start,p.start),x=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));g<x;g+=3)i=la(this,v,e,n,c,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);m<_;m+=3)i=la(this,a,e,n,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),i&&(i.faceIndex=Math.floor(m/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let f=d[m],v=a[f.materialIndex];for(let g=Math.max(f.start,p.start),x=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));g<x;g+=3)i=la(this,v,e,n,c,h,u,g,g+1,g+2),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=f.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);m<_;m+=3)i=la(this,a,e,n,c,h,u,m,m+1,m+2),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}};function la(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ia),r.getVertexPosition(l,ra),r.getVertexPosition(c,sa);let h=(function(u,d,p,m,_,f,v,g){let x;if(x=d.side===1?m.intersectTriangle(v,f,_,!0,g):m.intersectTriangle(_,f,v,d.side===0,g),x===null)return null;oa.copy(g),oa.applyMatrix4(u.matrixWorld);let S=p.ray.origin.distanceTo(oa);return S<p.near||S>p.far?null:{distance:S,point:oa.clone(),object:u}})(r,e,t,n,ia,ra,sa,Qu);if(h){let u=new A;cn.getBarycoord(Qu,ia,ra,sa,u),i&&(h.uv=cn.getInterpolatedAttribute(i,o,l,c,u,new ie)),s&&(h.uv1=cn.getInterpolatedAttribute(s,o,l,c,u,new ie)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new A,materialIndex:0};cn.getNormal(ia,ra,sa,d.normal),h.face=d,h.barycoord=u}return h}var ui=class r extends Ye{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function m(_,f,v,g,x,S,w,T,I,F,R){let G=S/I,V=w/F,B=S/2,H=w/2,O=T/2,Z=I+1,j=F+1,X=0,le=0,ve=new A;for(let de=0;de<j;de++){let ue=de*V-H;for(let be=0;be<Z;be++){let ee=be*G-B;ve[_]=ee*g,ve[f]=ue*x,ve[v]=O,c.push(ve.x,ve.y,ve.z),ve[_]=0,ve[f]=0,ve[v]=T>0?1:-1,h.push(ve.x,ve.y,ve.z),u.push(be/I),u.push(1-de/F),X+=1}}for(let de=0;de<F;de++)for(let ue=0;ue<I;ue++){let be=d+ue+Z*de,ee=d+ue+Z*(de+1),se=d+(ue+1)+Z*(de+1),oe=d+(ue+1)+Z*de;l.push(be,ee,oe),l.push(ee,se,oe),le+=6}o.addGroup(p,le,R),p+=le,d+=X}m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Mi(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(_e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bt(r){let e={};for(let t=0;t<r.length;t++){let n=Mi(r[t]);for(let i in n)e[i]=n[i]}return e}function Ih(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}var _p={clone:Mi,merge:bt},Ft=class extends Ut{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},tr=class extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kn=new A,ed=new ie,td=new ie,vt=class extends tr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*hi*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Yi*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*hi*Math.atan(Math.tan(.5*Yi*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kn.x,kn.y).multiplyScalar(-e/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-e/kn.z)}getViewSize(e,t){return this.getViewBounds(e,ed,td),t.subVectors(td,ed)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Yi*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gi=-90,La=class extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new vt(Gi,1,e,t);i.layers=this.layers,this.add(i);let s=new vt(Gi,1,e,t);s.layers=this.layers,this.add(s);let a=new vt(Gi,1,e,t);a.layers=this.layers,this.add(a);let o=new vt(Gi,1,e,t);o.layers=this.layers,this.add(o);let l=new vt(Gi,1,e,t);l.layers=this.layers,this.add(l);let c=new vt(Gi,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Xr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Kr=class extends yt{constructor(e=[],t=301,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$r=class extends Dt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Kr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ui(5,5,5),s=new Ft({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new lt(i,s),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=St),new La(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Cn=class extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},bf={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let f=t.getJointPose(_,n),v=this._getHandJoint(c,_);f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=f.radius),v.visible=f!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Yl=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Jl=class extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ra,this.updateRanges=[],this.version=0,this.uuid=Wt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tt=new A,es=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=en(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=en(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=en(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=en(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=en(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Na=class extends Ut{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vi,Dr=new A,Hi=new A,Wi=new A,Xi=new ie,Lr=new ie,vp=new Ce,ca=new A,Nr=new A,ha=new A,nd=new ie,Nl=new ie,id=new ie,Zl=class extends rt{constructor(e=new Na){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new Ye;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qr(t,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new es(n,3,0,!1)),Vi.setAttribute("uv",new es(n,2,3,!1))}this.geometry=Vi,this.material=e,this.center=new ie(.5,.5),this.count=1}raycast(e,t){e.camera===null&&xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),vp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Wi.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;ua(ca.set(-.5,-.5,0),Wi,a,Hi,i,s),ua(Nr.set(.5,-.5,0),Wi,a,Hi,i,s),ua(ha.set(.5,.5,0),Wi,a,Hi,i,s),nd.set(0,0),Nl.set(1,0),id.set(1,1);let o=e.ray.intersectTriangle(ca,Nr,ha,!1,Dr);if(o===null&&(ua(Nr.set(-.5,.5,0),Wi,a,Hi,i,s),Nl.set(0,1),o=e.ray.intersectTriangle(ca,ha,Nr,!1,Dr),o===null))return;let l=e.ray.origin.distanceTo(Dr);l<e.near||l>e.far||t.push({distance:l,point:Dr.clone(),uv:cn.getInterpolation(Dr,ca,Nr,ha,nd,Nl,id,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ua(r,e,t,n,i,s){Xi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Lr.x=s*Xi.x-i*Xi.y,Lr.y=i*Xi.x+s*Xi.y):Lr.copy(Xi),r.copy(e),r.x+=Lr.x,r.y+=Lr.y,r.applyMatrix4(vp)}var D_=new A,L_=new A;var rd=new A,sd=new Ze,ad=new Ze,Mf=new A,od=new Ce,da=new A,Ul=new Nt,ld=new Ce,Fl=new Gn,Kl=class extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jl,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Lt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingBox.expandByPoint(da)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingSphere.expandByPoint(da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ul.copy(this.boundingSphere),Ul.applyMatrix4(i),e.ray.intersectsSphere(Ul)!==!1&&(ld.copy(i).invert(),Fl.copy(e.ray).applyMatrix4(ld),this.boundingBox!==null&&Fl.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,Fl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ep?this.bindMatrixInverse.copy(this.bindMatrix).invert():_e("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;sd.fromBufferAttribute(i.attributes.skinIndex,e),ad.fromBufferAttribute(i.attributes.skinWeight,e),rd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=ad.getComponent(s);if(a!==0){let o=sd.getComponent(s);od.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Mf.copy(rd).applyMatrix4(od),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ua=class extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ir=class extends yt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cd=new Ce,wf=new Ce,$l=class r{constructor(e=[],t=[]){this.uuid=Wt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){_e("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:wf;cd.multiplyMatrices(o,t[s]),cd.toArray(n,16*s)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ir(t,e,e,qt,zt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(_e("Skeleton: No bone found with UUID:",s),a=new Ua),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},ts=class extends Et{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ji=new Ce,hd=new Ce,pa=[],ud=new Lt,Tf=new Ce,Ur=new lt,Fr=new Nt,Ql=class extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Tf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Lt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),ud.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(ud)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Fr.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=i[s+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ji),hd.multiplyMatrices(n,ji),Ur.matrixWorld=hd,Ur.raycast(e,pa);for(let a=0,o=pa.length;a<o;a++){let l=pa[a];l.instanceId=s,l.object=this,t.push(l)}pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ir(new Float32Array(i*this.count),i,this.count,Fo,zt));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ol=new A,Ef=new A,Af=new Pe,ln=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ol.subVectors(n,t).cross(Ef.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ol),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Af.getNormalMatrix(e),i=this.coplanarPoint(Ol).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ri=new Nt,Cf=new ie(.5,.5),ma=new A,Vn=class{constructor(e=new ln,t=new ln,n=new ln,i=new ln,s=new ln,a=new ln){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],p=s[7],m=s[8],_=s[9],f=s[10],v=s[11],g=s[12],x=s[13],S=s[14],w=s[15];if(i[0].setComponents(c-a,p-h,v-m,w-g).normalize(),i[1].setComponents(c+a,p+h,v+m,w+g).normalize(),i[2].setComponents(c+o,p+u,v+_,w+x).normalize(),i[3].setComponents(c-o,p-u,v-_,w-x).normalize(),n)i[4].setComponents(l,d,f,S).normalize(),i[5].setComponents(c-l,p-d,v-f,w-S).normalize();else if(i[4].setComponents(c-l,p-d,v-f,w-S).normalize(),t===In)i[5].setComponents(c+l,p+d,v+f,w+S).normalize();else{if(t!==Xr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(l,d,f,S).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);let t=Cf.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ma.x=i.normal.x>0?e.max.x:e.min.x,ma.y=i.normal.y>0?e.max.y:e.min.y,ma.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},an=new Ce,on=new Vn,Fa=class r{constructor(){this.coordinateSystem=In}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(an.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),on.setFromProjectionMatrix(an,i.coordinateSystem,i.reversedDepth),on.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(an.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),on.setFromProjectionMatrix(an,i.coordinateSystem,i.reversedDepth),on.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(an.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),on.setFromProjectionMatrix(an,i.coordinateSystem,i.reversedDepth),on.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(an.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),on.setFromProjectionMatrix(an,i.coordinateSystem,i.reversedDepth),on.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(an.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),on.setFromProjectionMatrix(an,i.coordinateSystem,i.reversedDepth),on.containsPoint(e))return!0}return!1}clone(){return new r}};var ec=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},N_=new Ce,U_=new Ee(1,1,1),F_=new Vn,O_=new Fa,B_=new Lt,k_=new Nt,z_=new A,G_=new A,V_=new A,H_=new ec,W_=new lt;var Oa=class extends Ut{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ba=new A,ka=new A,dd=new Ce,Or=new Gn,fa=new Nt,Bl=new A,pd=new A,ns=class extends rt{constructor(e=new Ye,t=new Oa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ba.fromBufferAttribute(t,i-1),ka.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ba.distanceTo(ka);e.setAttribute("lineDistance",new Se(n,1))}else _e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(i),fa.radius+=s,e.ray.intersectsSphere(fa)===!1)return;dd.copy(i).invert(),Or.copy(e.ray).applyMatrix4(dd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=d,_=p-1;m<_;m+=c){let f=h.getX(m),v=h.getX(m+1),g=ga(this,e,Or,l,f,v,m);g&&t.push(g)}if(this.isLineLoop){let m=h.getX(p-1),_=h.getX(d),f=ga(this,e,Or,l,m,_,p-1);f&&t.push(f)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=d,_=p-1;m<_;m+=c){let f=ga(this,e,Or,l,m,m+1,m);f&&t.push(f)}if(this.isLineLoop){let m=ga(this,e,Or,l,p-1,d,p-1);m&&t.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function ga(r,e,t,n,i,s,a){let o=r.geometry.attributes.position;if(Ba.fromBufferAttribute(o,i),ka.fromBufferAttribute(o,s),t.distanceSqToSegment(Ba,ka,Bl,pd)>n)return;Bl.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(Bl);return l<e.near||l>e.far?void 0:{distance:l,point:pd.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var md=new A,fd=new A,tc=class extends ns{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)md.fromBufferAttribute(t,i),fd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+md.distanceTo(fd);e.setAttribute("lineDistance",new Se(n,1))}else _e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},nc=class extends ns{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},za=class extends Ut{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gd=new Ce,ic=new Gn,_a=new Nt,va=new A,rc=class extends rt{constructor(e=new Ye,t=new za){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(i),_a.radius+=s,e.ray.intersectsSphere(_a)===!1)return;gd.copy(i).invert(),ic.copy(e.ray).applyMatrix4(gd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);va.fromBufferAttribute(h,p),_d(va,p,l,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)va.fromBufferAttribute(h,u),_d(va,u,l,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function _d(r,e,t,n,i,s,a){let o=ic.distanceSqToPoint(r);if(o<t){let l=new A;ic.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var sc=class extends yt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hn=class extends yt{constructor(e,t,n=1014,i,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==jn&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ga=class extends Hn{constructor(e,t=1014,n=301,i,s,a=1003,o=1003,l,c=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},is=class extends yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Va=class r extends Ye{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,m=2*n+s,_=i+1,f=new A,v=new A;for(let g=0;g<=m;g++){let x=0,S=0,w=0,T=0;if(g<=n){let R=g/n,G=R*Math.PI/2;S=-h-e*Math.cos(G),w=e*Math.sin(G),T=-e*Math.cos(G),x=R*u}else if(g<=n+s){let R=(g-n)/s;S=R*t-h,w=e,T=0,x=u+R*d}else{let R=(g-n-s)/n,G=R*Math.PI/2;S=h+e*Math.sin(G),w=e*Math.cos(G),T=e*Math.sin(G),x=u+d+R*u}let I=Math.max(0,Math.min(1,x/p)),F=0;g===0?F=.5/i:g===m&&(F=-.5/i);for(let R=0;R<=i;R++){let G=R/i,V=G*Math.PI*2,B=Math.sin(V),H=Math.cos(V);v.x=-w*H,v.y=S,v.z=w*B,o.push(v.x,v.y,v.z),f.set(-w*H,T,w*B),f.normalize(),l.push(f.x,f.y,f.z),c.push(G+F,I)}if(g>0){let R=(g-1)*_;for(let G=0;G<i;G++){let V=R+G,B=R+G+1,H=g*_+G,O=g*_+G+1;a.push(V,B,H),a.push(B,O,H)}}}this.setIndex(a),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ha=class r extends Ye{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new A,h=new ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},di=class r extends Ye{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],m=0,_=[],f=n/2,v=0;function g(x){let S=m,w=new ie,T=new A,I=0,F=x===!0?e:t,R=x===!0?1:-1;for(let V=1;V<=i;V++)u.push(0,f*R,0),d.push(0,R,0),p.push(.5,.5),m++;let G=m;for(let V=0;V<=i;V++){let B=V/i*l+o,H=Math.cos(B),O=Math.sin(B);T.x=F*O,T.y=f*R,T.z=F*H,u.push(T.x,T.y,T.z),d.push(0,R,0),w.x=.5*H+.5,w.y=.5*O*R+.5,p.push(w.x,w.y),m++}for(let V=0;V<i;V++){let B=S+V,H=G+V;x===!0?h.push(H,H+1,B):h.push(H+1,H,B),I+=3}c.addGroup(v,I,x===!0?1:2),v+=I}(function(){let x=new A,S=new A,w=0,T=(t-e)/n;for(let I=0;I<=s;I++){let F=[],R=I/s,G=R*(t-e)+e;for(let V=0;V<=i;V++){let B=V/i,H=B*l+o,O=Math.sin(H),Z=Math.cos(H);S.x=G*O,S.y=-R*n+f,S.z=G*Z,u.push(S.x,S.y,S.z),x.set(O,T,Z).normalize(),d.push(x.x,x.y,x.z),p.push(B,1-R),F.push(m++)}_.push(F)}for(let I=0;I<i;I++)for(let F=0;F<s;F++){let R=_[F][I],G=_[F+1][I],V=_[F+1][I+1],B=_[F][I+1];(e>0||F!==0)&&(h.push(R,G,B),w+=3),(t>0||F!==s-1)&&(h.push(G,V,B),w+=3)}c.addGroup(v,w,0),v+=w})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wa=class r extends di{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wn=class r extends Ye{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(p,m,_,f){let v=f+1,g=[];for(let x=0;x<=v;x++){g[x]=[];let S=p.clone().lerp(_,x/v),w=m.clone().lerp(_,x/v),T=v-x;for(let I=0;I<=T;I++)g[x][I]=I===0&&x===v?S:S.clone().lerp(w,I/T)}for(let x=0;x<v;x++)for(let S=0;S<2*(v-x)-1;S++){let w=Math.floor(S/2);S%2==0?(l(g[x][w+1]),l(g[x+1][w]),l(g[x][w])):(l(g[x][w+1]),l(g[x+1][w+1]),l(g[x+1][w]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,m){let _=3*p;m.x=e[_+0],m.y=e[_+1],m.z=e[_+2]}function h(p,m,_,f){f<0&&p.x===1&&(a[m]=p.x-1),_.x===0&&_.z===0&&(a[m]=f/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let m=new A,_=new A,f=new A;for(let v=0;v<t.length;v+=3)c(t[v+0],m),c(t[v+1],_),c(t[v+2],f),o(m,_,f,p)})(i),(function(p){let m=new A;for(let _=0;_<s.length;_+=3)m.x=s[_+0],m.y=s[_+1],m.z=s[_+2],m.normalize().multiplyScalar(p),s[_+0]=m.x,s[_+1]=m.y,s[_+2]=m.z})(n),(function(){let p=new A;for(let m=0;m<s.length;m+=3){p.x=s[m+0],p.y=s[m+1],p.z=s[m+2];let _=u(p)/2/Math.PI+.5,f=d(p)/Math.PI+.5;a.push(_,1-f)}(function(){let m=new A,_=new A,f=new A,v=new A,g=new ie,x=new ie,S=new ie;for(let w=0,T=0;w<s.length;w+=9,T+=6){m.set(s[w+0],s[w+1],s[w+2]),_.set(s[w+3],s[w+4],s[w+5]),f.set(s[w+6],s[w+7],s[w+8]),g.set(a[T+0],a[T+1]),x.set(a[T+2],a[T+3]),S.set(a[T+4],a[T+5]),v.copy(m).add(_).add(f).divideScalar(3);let I=u(v);h(g,T+0,m,I),h(x,T+2,_,I),h(S,T+4,f,I)}})(),(function(){for(let m=0;m<a.length;m+=6){let _=a[m+0],f=a[m+2],v=a[m+4],g=Math.max(_,f,v),x=Math.min(_,f,v);g>.9&&x<.1&&(_<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),v<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new Se(s,3)),this.setAttribute("normal",new Se(s.slice(),3)),this.setAttribute("uv",new Se(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}},Xa=class r extends Wn{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},xa=new A,ya=new A,kl=new A,Sa=new cn,ja=class extends Ye{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Yi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:_,b:f,c:v}=Sa;if(_.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),v.fromBufferAttribute(o,c[2]),Sa.getNormal(kl),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,u[2]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let x=(g+1)%3,S=u[g],w=u[x],T=Sa[h[g]],I=Sa[h[x]],F=`${S}_${w}`,R=`${w}_${S}`;R in d&&d[R]?(kl.dot(d[R].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(I.x,I.y,I.z)),d[R]=null):F in d||(d[F]={index0:c[g],index1:c[x],normal:kl.clone()})}}for(let m in d)if(d[m]){let{index0:_,index1:f}=d[m];xa.fromBufferAttribute(o,_),ya.fromBufferAttribute(o,f),p.push(xa.x,xa.y,xa.z),p.push(ya.x,ya.y,ya.z)}this.setAttribute("position",new Se(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ot=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){_e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new ie:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new A,i=[],s=[],a=[],o=new A,l=new Ce;for(let p=0;p<=e;p++){let m=p/e;i[p]=this.getTangentAt(m,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ne(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Ne(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],p*m)),a[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},rr=class extends Ot{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},qa=class extends rr{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ph(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var ba=new A,zl=new Ph,Gl=new Ph,Vl=new Ph,Ya=class extends Ot{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(ba.subVectors(i[0],i[1]).add(i[0]),o=ba);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(ba.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=ba),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(l),p);_<1e-4&&(_=1),m<1e-4&&(m=_),f<1e-4&&(f=_),zl.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,_,f),Gl.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,_,f),Vl.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,_,f)}else this.curveType==="catmullrom"&&(zl.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Gl.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Vl.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(zl.calc(h),Gl.calc(h),Vl.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vd(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function zr(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function Gr(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var rs=class extends Ot{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Gr(e,i.x,s.x,a.x,o.x),Gr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ja=class extends Ot{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Gr(e,i.x,s.x,a.x,o.x),Gr(e,i.y,s.y,a.y,o.y),Gr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ss=class extends Ot{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends Ot{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},as=class extends Ot{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(zr(e,i.x,s.x,a.x),zr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},os=class extends Ot{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(zr(e,i.x,s.x,a.x),zr(e,i.y,s.y,a.y),zr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ls=class extends Ot{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(vd(o,l.x,c.x,h.x,u.x),vd(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ie().fromArray(i))}return this}},Ka=Object.freeze({__proto__:null,ArcCurve:qa,CatmullRomCurve3:Ya,CubicBezierCurve:rs,CubicBezierCurve3:Ja,EllipseCurve:rr,LineCurve:ss,LineCurve3:Za,QuadraticBezierCurve:as,QuadraticBezierCurve3:os,SplineCurve:ls}),$a=class extends Ot{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ka[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ka[i.type]().fromJSON(i))}return this}},cs=class extends $a{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ss(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new as(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new rs(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ls(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new rr(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},hs=class extends cs{constructor(e){super(e),this.uuid=Wt(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new cs().fromJSON(i))}return this}};function Rf(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=xd(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=(function(h,u,d,p){let m=[];for(let _=0,f=u.length;_<f;_++){let v=xd(h,u[_]*p,_<f-1?u[_+1]*p:h.length,p,!1);v===v.next&&(v.steiner=!0),m.push(Of(v))}m.sort(Nf);for(let _=0;_<m.length;_++)d=Uf(m[_],d);return d})(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let h=o,u=l;for(let d=t;d<i;d+=t){let p=r[d],m=r[d+1];p<o&&(o=p),m<l&&(l=m),p>h&&(h=p),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return us(s,a,t,o,l,c,0),a}function xd(r,e,t,n,i){let s;if(i===(function(a,o,l,c){let h=0;for(let u=o,d=l-c;u<l;u+=c)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=yd(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=yd(a/n|0,r[a],r[a+1],s);return s&&sr(s,s.next)&&(ps(s),s=s.next),s}function pi(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!sr(n,n.next)&&nt(n.prev,n,n.next)!==0)n=n.next;else{if(ps(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function us(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(l,c,h,u){let d=l;do d.z===0&&(d.z=ac(d.x,d.y,c,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==l);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let m,_=1;do{let f,v=p;p=null;let g=null;for(m=0;v;){m++;let x=v,S=0;for(let T=0;T<_&&(S++,x=x.nextZ,x);T++);let w=_;for(;S>0||w>0&&x;)S!==0&&(w===0||!x||v.z<=x.z)?(f=v,v=v.nextZ,S--):(f=x,x=x.nextZ,w--),g?g.nextZ=f:p=f,f.prevZ=g,g=f;v=x}g.nextZ=null,_*=2}while(m>1)})(d)})(r,n,i,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?Pf(r,n,i,s):If(r))e.push(l.i,r.i,c.i),ps(r),r=c.next,o=c.next;else if((r=c)===o){a?a===1?us(r=Df(pi(r),e),e,t,n,i,s,2):a===2&&Lf(r,e,t,n,i,s):us(pi(r),e,t,n,i,s,1);break}}}function If(r){let e=r.prev,t=r,n=r.next;if(nt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,a),u=Math.min(o,l,c),d=Math.max(i,s,a),p=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&Br(i,o,s,l,a,c,m.x,m.y)&&nt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Pf(r,e,t,n){let i=r.prev,s=r,a=r.next;if(nt(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=Math.min(o,l,c),m=Math.min(h,u,d),_=Math.max(o,l,c),f=Math.max(h,u,d),v=ac(p,m,e,t,n),g=ac(_,f,e,t,n),x=r.prevZ,S=r.nextZ;for(;x&&x.z>=v&&S&&S.z<=g;){if(x.x>=p&&x.x<=_&&x.y>=m&&x.y<=f&&x!==i&&x!==a&&Br(o,h,l,u,c,d,x.x,x.y)&&nt(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=_&&S.y>=m&&S.y<=f&&S!==i&&S!==a&&Br(o,h,l,u,c,d,S.x,S.y)&&nt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=v;){if(x.x>=p&&x.x<=_&&x.y>=m&&x.y<=f&&x!==i&&x!==a&&Br(o,h,l,u,c,d,x.x,x.y)&&nt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=g;){if(S.x>=p&&S.x<=_&&S.y>=m&&S.y<=f&&S!==i&&S!==a&&Br(o,h,l,u,c,d,S.x,S.y)&&nt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Df(r,e){let t=r;do{let n=t.prev,i=t.next.next;!sr(n,i)&&yp(n,t,t.next,i)&&ds(n,i)&&ds(i,n)&&(e.push(n.i,t.i,i.i),ps(t),ps(t.next),t=r=i),t=t.next}while(t!==r);return pi(t)}function Lf(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bf(a,o)){let l=Sp(a,o);return a=pi(a,a.next),l=pi(l,l.next),us(a,e,t,n,i,s,0),void us(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function Nf(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Uf(r,e){let t=(function(i,s){let a=s,o=i.x,l=i.y,c,h=-1/0;if(sr(i,a))return a;do{if(sr(i,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let _=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(_<=o&&_>h&&(h=_,c=a.x<a.next.x?a:a.next,_===o))return c}a=a.next}while(a!==s);if(!c)return null;let u=c,d=c.x,p=c.y,m=1/0;a=c;do{if(o>=a.x&&a.x>=d&&o!==a.x&&xp(l<p?o:h,l,d,p,l<p?h:o,l,a.x,a.y)){let _=Math.abs(l-a.y)/(o-a.x);ds(a,i)&&(_<m||_===m&&(a.x>c.x||a.x===c.x&&Ff(c,a)))&&(c=a,m=_)}a=a.next}while(a!==u);return c})(r,e);if(!t)return e;let n=Sp(t,r);return pi(n,n.next),pi(t,t.next)}function Ff(r,e){return nt(r.prev,r,e.prev)<0&&nt(e.next,r,r.next)<0}function ac(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Of(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function xp(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Br(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&xp(r,e,t,n,i,s,a,o)}function Bf(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&yp(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(ds(r,e)&&ds(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(nt(r.prev,r,e.prev)||nt(r,e.prev,e))||sr(r,e)&&nt(r.prev,r,r.next)>0&&nt(e.prev,e,e.next)>0)}function nt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function sr(r,e){return r.x===e.x&&r.y===e.y}function yp(r,e,t,n){let i=wa(nt(r,e,t)),s=wa(nt(r,e,n)),a=wa(nt(t,n,r)),o=wa(nt(t,n,e));return i!==s&&a!==o||!(i!==0||!Ma(r,t,e))||!(s!==0||!Ma(r,n,e))||!(a!==0||!Ma(t,r,n))||!(o!==0||!Ma(t,e,n))}function Ma(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function wa(r){return r>0?1:r<0?-1:0}function ds(r,e){return nt(r.prev,r,r.next)<0?nt(r,e,r.next)>=0&&nt(r,r.prev,e)>=0:nt(r,e,r.prev)<0||nt(r,r.next,e)<0}function Sp(r,e){let t=oc(r.i,r.x,r.y),n=oc(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function yd(r,e,t,n){let i=oc(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ps(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function oc(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var lc=class{static triangulate(e,t,n=2){return Rf(e,t,n)}},hn=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Sd(e),bd(n,e);let a=e.length;t.forEach(Sd);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,bd(n,t[l]);let o=lc.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Sd(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function bd(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Qa=class r extends Ye{constructor(e=new hs([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:kf,x,S,w,T,I,F=!1;if(v){x=v.getSpacedPoints(h),F=!0,d=!1;let P=!!v.isCatmullRomCurve3&&v.closed;S=v.computeFrenetFrames(h,P),w=new A,T=new A,I=new A}d||(f=0,p=0,m=0,_=0);let R=o.extractPoints(c),G=R.shape,V=R.holes;if(!hn.isClockWise(G)){G=G.reverse();for(let P=0,y=V.length;P<y;P++){let C=V[P];hn.isClockWise(C)&&(V[P]=C.reverse())}}function B(P){let y=10000000000000001e-36,C=P[0];for(let D=1;D<=P.length;D++){let N=D%P.length,Y=P[N],J=Y.x-C.x,z=Y.y-C.y,Q=J*J+z*z,K=Math.max(Math.abs(Y.x),Math.abs(Y.y),Math.abs(C.x),Math.abs(C.y));Q<=y*K*K?(P.splice(N,1),D--):C=Y}}B(G),V.forEach(B);let H=V.length,O=G;for(let P=0;P<H;P++){let y=V[P];G=G.concat(y)}function Z(P,y,C){return y||xe("ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(y,C)}let j=G.length;function X(P,y,C){let D,N,Y,J=P.x-y.x,z=P.y-y.y,Q=C.x-P.x,K=C.y-P.y,ne=J*J+z*z,te=J*K-z*Q;if(Math.abs(te)>Number.EPSILON){let ae=Math.sqrt(ne),Me=Math.sqrt(Q*Q+K*K),Fe=y.x-z/ae,Ve=y.y+J/ae,We=((C.x-K/Me-Fe)*K-(C.y+Q/Me-Ve)*Q)/(J*K-z*Q);D=Fe+J*We-P.x,N=Ve+z*We-P.y;let pe=D*D+N*N;if(pe<=2)return new ie(D,N);Y=Math.sqrt(pe/2)}else{let ae=!1;J>Number.EPSILON?Q>Number.EPSILON&&(ae=!0):J<-Number.EPSILON?Q<-Number.EPSILON&&(ae=!0):Math.sign(z)===Math.sign(K)&&(ae=!0),ae?(D=-z,N=J,Y=Math.sqrt(ne)):(D=J,N=z,Y=Math.sqrt(ne/2))}return new ie(D/Y,N/Y)}let le=[];for(let P=0,y=O.length,C=y-1,D=P+1;P<y;P++,C++,D++)C===y&&(C=0),D===y&&(D=0),le[P]=X(O[P],O[C],O[D]);let ve=[],de,ue,be=le.concat();for(let P=0,y=H;P<y;P++){let C=V[P];de=[];for(let D=0,N=C.length,Y=N-1,J=D+1;D<N;D++,Y++,J++)Y===N&&(Y=0),J===N&&(J=0),de[D]=X(C[D],C[Y],C[J]);ve.push(de),be=be.concat(de)}if(f===0)ue=hn.triangulateShape(O,V);else{let P=[],y=[];for(let C=0;C<f;C++){let D=C/f,N=p*Math.cos(D*Math.PI/2),Y=m*Math.sin(D*Math.PI/2)+_;for(let J=0,z=O.length;J<z;J++){let Q=Z(O[J],le[J],Y);ye(Q.x,Q.y,-N),D===0&&P.push(Q)}for(let J=0,z=H;J<z;J++){let Q=V[J];de=ve[J];let K=[];for(let ne=0,te=Q.length;ne<te;ne++){let ae=Z(Q[ne],de[ne],Y);ye(ae.x,ae.y,-N),D===0&&K.push(ae)}D===0&&y.push(K)}}ue=hn.triangulateShape(P,y)}let ee=ue.length,se=m+_;for(let P=0;P<j;P++){let y=d?Z(G[P],be[P],se):G[P];F?(T.copy(S.normals[0]).multiplyScalar(y.x),w.copy(S.binormals[0]).multiplyScalar(y.y),I.copy(x[0]).add(T).add(w),ye(I.x,I.y,I.z)):ye(y.x,y.y,0)}for(let P=1;P<=h;P++)for(let y=0;y<j;y++){let C=d?Z(G[y],be[y],se):G[y];F?(T.copy(S.normals[P]).multiplyScalar(C.x),w.copy(S.binormals[P]).multiplyScalar(C.y),I.copy(x[P]).add(T).add(w),ye(I.x,I.y,I.z)):ye(C.x,C.y,u/h*P)}for(let P=f-1;P>=0;P--){let y=P/f,C=p*Math.cos(y*Math.PI/2),D=m*Math.sin(y*Math.PI/2)+_;for(let N=0,Y=O.length;N<Y;N++){let J=Z(O[N],le[N],D);ye(J.x,J.y,u+C)}for(let N=0,Y=V.length;N<Y;N++){let J=V[N];de=ve[N];for(let z=0,Q=J.length;z<Q;z++){let K=Z(J[z],de[z],D);F?ye(K.x,K.y+x[h-1].y,x[h-1].x+C):ye(K.x,K.y,u+C)}}}function oe(P,y){let C=P.length;for(;--C>=0;){let D=C,N=C-1;N<0&&(N=P.length-1);for(let Y=0,J=h+2*f;Y<J;Y++){let z=j*Y,Q=j*(Y+1);M(y+D+z,y+N+z,y+N+Q,y+D+Q)}}}function ye(P,y,C){l.push(P),l.push(y),l.push(C)}function Ie(P,y,C){b(P),b(y),b(C);let D=i.length/3,N=g.generateTopUV(n,i,D-3,D-2,D-1);U(N[0]),U(N[1]),U(N[2])}function M(P,y,C,D){b(P),b(y),b(D),b(y),b(C),b(D);let N=i.length/3,Y=g.generateSideWallUV(n,i,N-6,N-3,N-2,N-1);U(Y[0]),U(Y[1]),U(Y[3]),U(Y[1]),U(Y[2]),U(Y[3])}function b(P){i.push(l[3*P+0]),i.push(l[3*P+1]),i.push(l[3*P+2])}function U(P){s.push(P.x),s.push(P.y)}(function(){let P=i.length/3;if(d){let y=0,C=j*y;for(let D=0;D<ee;D++){let N=ue[D];Ie(N[2]+C,N[1]+C,N[0]+C)}y=h+2*f,C=j*y;for(let D=0;D<ee;D++){let N=ue[D];Ie(N[0]+C,N[1]+C,N[2]+C)}}else{for(let y=0;y<ee;y++){let C=ue[y];Ie(C[2],C[1],C[0])}for(let y=0;y<ee;y++){let C=ue[y];Ie(C[0]+j*h,C[1]+j*h,C[2]+j*h)}}n.addGroup(P,i.length/3-P,0)})(),(function(){let P=i.length/3,y=0;oe(O,y),y+=O.length;for(let C=0,D=V.length;C<D;C++){let N=V[C];oe(N,y),y+=N.length}n.addGroup(P,i.length/3-P,1)})()}this.setAttribute("position",new Se(i,3)),this.setAttribute("uv",new Se(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ka[i.type]().fromJSON(i)),new r(n,e.options)}},kf={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new ie(s,a),new ie(o,l),new ie(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],m=e[3*i+2],_=e[3*s],f=e[3*s+1],v=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ie(a,1-l),new ie(c,1-u),new ie(d,1-m),new ie(_,1-v)]:[new ie(o,1-l),new ie(h,1-u),new ie(p,1-m),new ie(f,1-v)]}},eo=class r extends Wn{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},to=class r extends Ye{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ne(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new A,d=new ie,p=new A,m=new A,_=new A,f=0,v=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:f=e[g+1].x-e[g].x,v=e[g+1].y-e[g].y,p.x=1*v,p.y=-f,p.z=0*v,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:f=e[g+1].x-e[g].x,v=e[g+1].y-e[g].y,p.x=1*v,p.y=-f,p.z=0*v,m.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(m)}for(let g=0;g<=t;g++){let x=n+g*h*i,S=Math.sin(x),w=Math.cos(x);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*S,u.y=e[T].y,u.z=e[T].x*w,a.push(u.x,u.y,u.z),d.x=g/t,d.y=T/(e.length-1),o.push(d.x,d.y);let I=l[3*T+0]*S,F=l[3*T+1],R=l[3*T+0]*w;c.push(I,F,R)}}for(let g=0;g<t;g++)for(let x=0;x<e.length-1;x++){let S=x+g*e.length,w=S,T=S+e.length,I=S+e.length+1,F=S+1;s.push(w,T,F),s.push(I,F,T)}this.setIndex(s),this.setAttribute("position",new Se(a,3)),this.setAttribute("uv",new Se(o,2)),this.setAttribute("normal",new Se(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},no=class r extends Wn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ar=class r extends Ye{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],_=[],f=[];for(let v=0;v<h;v++){let g=v*d-a;for(let x=0;x<c;x++){let S=x*u-s;m.push(S,-g,0),_.push(0,0,1),f.push(x/o),f.push(1-v/l)}}for(let v=0;v<l;v++)for(let g=0;g<o;g++){let x=g+c*v,S=g+c*(v+1),w=g+1+c*(v+1),T=g+1+c*v;p.push(x,S,T),p.push(S,w,T)}this.setIndex(p),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},io=class r extends Ye{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new A,m=new ie;for(let _=0;_<=i;_++){for(let f=0;f<=n;f++){let v=s+f/n*a;p.x=u*Math.cos(v),p.y=u*Math.sin(v),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<i;_++){let f=_*(n+1);for(let v=0;v<n;v++){let g=v+f,x=g,S=g+n+1,w=g+n+2,T=g+1;o.push(x,S,T),o.push(S,w,T)}}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},ro=class r extends Ye{constructor(e=new hs([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;hn.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,v=m.length;f<v;f++){let g=m[f];hn.isClockWise(g)===!0&&(m[f]=g.reverse())}let _=hn.triangulateShape(p,m);for(let f=0,v=m.length;f<v;f++){let g=m[f];p=p.concat(g)}for(let f=0,v=p.length;f<v;f++){let g=p[f];i.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let f=0,v=_.length;f<v;f++){let g=_[f],x=g[0]+u,S=g[1]+u,w=g[2]+u;n.push(x,S,w),l+=3}}this.setIndex(n),this.setAttribute("position",new Se(i,3)),this.setAttribute("normal",new Se(s,3)),this.setAttribute("uv",new Se(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},or=class r extends Ye{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,d=new A,p=[],m=[],_=[],f=[];for(let v=0;v<=n;v++){let g=[],x=v/n,S=0;v===0&&a===0?S=.5/t:v===n&&l===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){let T=w/t;u.x=-e*Math.cos(i+T*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+T*s)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(T+S,1-x),g.push(c++)}h.push(g)}for(let v=0;v<n;v++)for(let g=0;g<t;g++){let x=h[v][g+1],S=h[v][g],w=h[v+1][g],T=h[v+1][g+1];(v!==0||a>0)&&p.push(x,S,T),(v!==n-1||l<Math.PI)&&p.push(S,w,T)}this.setIndex(p),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},so=class r extends Wn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ao=class r extends Ye{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new A,u=new A,d=new A;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let _=m/i*s,f=p/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(_),u.y=(e+t*Math.cos(f))*Math.sin(_),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let _=(i+1)*p+m-1,f=(i+1)*(p-1)+m-1,v=(i+1)*(p-1)+m,g=(i+1)*p+m;a.push(_,f,g),a.push(f,v,g)}this.setIndex(a),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},oo=class r extends Ye{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new A,d=new A,p=new A,m=new A,_=new A,f=new A,v=new A;for(let x=0;x<=n;++x){let S=x/n*s*Math.PI*2;g(S,s,a,e,p),g(S+.01,s,a,e,m),f.subVectors(m,p),v.addVectors(m,p),_.crossVectors(f,v),v.crossVectors(_,f),_.normalize(),v.normalize();for(let w=0;w<=i;++w){let T=w/i*Math.PI*2,I=-t*Math.cos(T),F=t*Math.sin(T);u.x=p.x+(I*v.x+F*_.x),u.y=p.y+(I*v.y+F*_.y),u.z=p.z+(I*v.z+F*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(w/i)}}for(let x=1;x<=n;x++)for(let S=1;S<=i;S++){let w=(i+1)*(x-1)+(S-1),T=(i+1)*x+(S-1),I=(i+1)*x+S,F=(i+1)*(x-1)+S;o.push(w,T,F),o.push(T,I,F)}function g(x,S,w,T,I){let F=Math.cos(x),R=Math.sin(x),G=w/S*x,V=Math.cos(G);I.x=T*(2+V)*.5*F,I.y=T*(2+V)*R*.5,I.z=T*Math.sin(G)*.5}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},lo=class r extends Ye{constructor(e=new os(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new ie,h=new A,u=[],d=[],p=[],m=[];function _(f){h=e.getPointAt(f/t,h);let v=a.normals[f],g=a.binormals[f];for(let x=0;x<=i;x++){let S=x/i*Math.PI*2,w=Math.sin(S),T=-Math.cos(S);l.x=T*v.x+w*g.x,l.y=T*v.y+w*g.y,l.z=T*v.z+w*g.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)_(f);_(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let v=0;v<=i;v++)c.x=f/t,c.y=v/i,p.push(c.x,c.y)})(),(function(){for(let f=1;f<=t;f++)for(let v=1;v<=i;v++){let g=(i+1)*(f-1)+(v-1),x=(i+1)*f+(v-1),S=(i+1)*f+v,w=(i+1)*(f-1)+v;m.push(g,x,w),m.push(x,S,w)}})()})(),this.setIndex(m),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Ka[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},co=class extends Ye{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new A,s=new A;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let _=0;_<3;_++){let f=o.getX(p+_),v=o.getX(p+(_+1)%3);i.fromBufferAttribute(a,f),s.fromBufferAttribute(a,v),Md(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Md(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Se(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Md(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var X_=Object.freeze({__proto__:null,BoxGeometry:ui,CapsuleGeometry:Va,CircleGeometry:Ha,ConeGeometry:Wa,CylinderGeometry:di,DodecahedronGeometry:Xa,EdgesGeometry:ja,ExtrudeGeometry:Qa,IcosahedronGeometry:eo,LatheGeometry:to,OctahedronGeometry:no,PlaneGeometry:ar,PolyhedronGeometry:Wn,RingGeometry:io,ShapeGeometry:ro,SphereGeometry:or,TetrahedronGeometry:so,TorusGeometry:ao,TorusKnotGeometry:oo,TubeGeometry:lo,WireframeGeometry:co}),cc=class extends Ut{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ee(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},ho=class extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},uo=class extends Ut{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hc=class extends uo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ms=class extends Ut{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},po=class extends Ut{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mo=class extends Ut{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function li(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}function bp(r){let e=r.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(function(n,i){return r[n]-r[i]}),t}function uc(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Dh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var dc=class{static convertArray(e,t){return li(e,t)}static isTypedArray(e){return pp(e)}static getKeyframeOrder(e){return bp(e)}static sortedArray(e,t,n){return uc(e,t,n)}static flattenJSON(e,t,n,i){Dh(e,t,n,i)}static subclip(e,t,n,i,s=30){return(function(a,o,l,c,h=30){let u=a.clone();u.name=o;let d=[];for(let m=0;m<u.tracks.length;++m){let _=u.tracks[m],f=_.getValueSize(),v=[],g=[];for(let x=0;x<_.times.length;++x){let S=_.times[x]*h;if(!(S<l||S>=c)){v.push(_.times[x]);for(let w=0;w<f;++w)g.push(_.values[x*f+w])}}v.length!==0&&(_.times=li(v,_.times.constructor),_.values=li(g,_.values.constructor),d.push(_))}u.tracks=d;let p=1/0;for(let m=0;m<u.tracks.length;++m)p>u.tracks[m].times[0]&&(p=u.tracks[m].times[0]);for(let m=0;m<u.tracks.length;++m)u.tracks[m].shift(-1*p);return u.resetDuration(),u})(e,t,n,i,s)}static makeClipAdditive(e,t=0,n=e,i=30){return(function(s,a=0,o=s,l=30){l<=0&&(l=30);let c=o.tracks.length,h=a/l;for(let u=0;u<c;++u){let d=o.tracks[u],p=d.ValueTypeName;if(p==="bool"||p==="string")continue;let m=s.tracks.find(function(T){return T.name===d.name&&T.ValueTypeName===p});if(m===void 0)continue;let _=0,f=d.getValueSize();d.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(_=f/3);let v=0,g=m.getValueSize();m.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(v=g/3);let x=d.times.length-1,S;if(h<=d.times[0]){let T=_,I=f-_;S=d.values.slice(T,I)}else if(h>=d.times[x]){let T=x*f+_,I=T+f-_;S=d.values.slice(T,I)}else{let T=d.createInterpolant(),I=_,F=f-_;T.evaluate(h),S=T.resultBuffer.slice(I,F)}p==="quaternion"&&new xt().fromArray(S).normalize().conjugate().toArray(S);let w=m.times.length;for(let T=0;T<w;++T){let I=T*g+v;if(p==="quaternion")xt.multiplyQuaternionsFlat(m.values,I,S,0,m.values,I);else{let F=g-2*v;for(let R=0;R<F;++R)m.values[I+R]-=S[R]}}}return s.blendMode=Ah,s})(e,t,n,i)}},mi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fo=class extends mi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ai,endingEnd:ai}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case oi:s=e,o=2*t-n;break;case Hr:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case oi:a=e,l=2*n-t;break;case Hr:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),_=m*m,f=_*m,v=-d*f+2*d*_-d*m,g=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*m+1,x=(-1-p)*f+(1.5+p)*_+.5*m,S=p*f-p*_;for(let w=0;w!==o;++w)s[w]=v*a[h+w]+g*a[c+w]+x*a[l+w]+S*a[u+w];return s}},fs=class extends mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},go=class extends mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ct=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=li(t,this.TimeBufferType),this.values=li(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:li(e.times,Array),values:li(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vr:t=this.InterpolantFactoryMethodDiscrete;break;case Ca:t=this.InterpolantFactoryMethodLinear;break;case Ta:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return _e("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return Ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&pp(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ta,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Ct.prototype.ValueTypeName="",Ct.prototype.TimeBufferType=Float32Array,Ct.prototype.ValueBufferType=Float32Array,Ct.prototype.DefaultInterpolation=Ca;var En=class extends Ct{constructor(e,t,n){super(e,t,n)}};En.prototype.ValueTypeName="bool",En.prototype.ValueBufferType=Array,En.prototype.DefaultInterpolation=Vr,En.prototype.InterpolantFactoryMethodLinear=void 0,En.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends Ct{constructor(e,t,n,i){super(e,t,n,i)}};gs.prototype.ValueTypeName="color";var fi=class extends Ct{constructor(e,t,n,i){super(e,t,n,i)}};fi.prototype.ValueTypeName="number";var _o=class extends mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)xt.slerpFlat(s,0,a,c-o,a,c,l);return s}},gi=class extends Ct{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new _o(this.times,this.values,this.getValueSize(),e)}};gi.prototype.ValueTypeName="quaternion",gi.prototype.InterpolantFactoryMethodSmooth=void 0;var An=class extends Ct{constructor(e,t,n){super(e,t,n)}};An.prototype.ValueTypeName="string",An.prototype.ValueBufferType=Array,An.prototype.DefaultInterpolation=Vr,An.prototype.InterpolantFactoryMethodLinear=void 0,An.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends Ct{constructor(e,t,n,i){super(e,t,n,i)}};_i.prototype.ValueTypeName="vector";var _s=class{constructor(e="",t=-1,n=[],i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Wt(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(zf(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Ct.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=bp(l);l=uc(l,1,h),c=uc(c,1,h),i||l[0]!==0||(l.push(s),c.push(c[0])),a.push(new fi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(_e("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return xe("AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,p,m){if(d.length!==0){let _=[],f=[];Dh(d,_,f,p),_.length!==0&&m.push(new h(u,_,f))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let m=0;m<u[p].morphTargets.length;m++)d[u[p].morphTargets[m]]=-1;for(let m in d){let _=[],f=[];for(let v=0;v!==u[p].morphTargets.length;++v){let g=u[p];_.push(g.time),f.push(g.morphTarget===m?1:0)}i.push(new fi(".morphTargetInfluence["+m+"]",_,f))}l=d.length*a}else{let d=".bones["+t[h].name+"]";n(_i,d+".position",u,"pos",i),n(gi,d+".quaternion",u,"rot",i),n(_i,d+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){let i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function zf(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=(function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fi;case"vector":case"vector2":case"vector3":case"vector4":return _i;case"color":return gs;case"quaternion":return gi;case"bool":case"boolean":return En;case"string":return An}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)})(r.type);if(r.times===void 0){let t=[],n=[];Dh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var un={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},vo=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ws=new vo,Xn=class{constructor(e){this.manager=e!==void 0?e:ws,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tn={},pc=class extends Error{constructor(e,t){super(e),this.response=t}},mc=class extends Xn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=un.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Tn[e]!==void 0)return void Tn[e].push({onLoad:t,onProgress:n,onError:i});Tn[e]=[],Tn[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&_e("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Tn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,m=p!==0,_=0,f=new ReadableStream({start(v){(function g(){u.read().then(({done:x,value:S})=>{if(x)v.close();else{_+=S.byteLength;let w=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:p});for(let T=0,I=h.length;T<I;T++){let F=h[T];F.onProgress&&F.onProgress(w)}v.enqueue(S),g()}},x=>{v.error(x)})})()}});return new Response(f)}throw new pc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{un.add(`file:${e}`,c);let h=Tn[e];delete Tn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Tn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Tn[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var qi=new WeakMap,xo=class extends Xn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=un.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=qi.get(a);u===void 0&&(u=[],qi.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=Zi("img");function l(){h(),t&&t(this);let u=qi.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}qi.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),un.remove(`image:${e}`);let d=qi.get(this)||[];for(let p=0;p<d.length;p++){let m=d[p];m.onError&&m.onError(u)}qi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),un.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var fc=class extends Xn{constructor(e){super(e)}load(e,t,n,i){let s=new yt,a=new xo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},vi=class extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Hl=new Ce,wd=new A,Td=new A,vs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=kt,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vn,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;wd.setFromMatrixPosition(e.matrixWorld),t.position.copy(wd),Td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Td),t.updateMatrixWorld(),Hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gc=class extends vs{constructor(){super(new vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=2*hi*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;n===t.fov&&i===t.aspect&&s===t.far||(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},_c=class extends vi{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new gc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},vc=class extends vs{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0}},xc=class extends vi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vc}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},lr=class extends tr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},yc=class extends vs{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sc=class extends vi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new yc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},bc=class extends vi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Mc=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},wc=class extends Ye{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Wl=new WeakMap,Tc=class extends Xn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&_e("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&_e("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=un.get(`image-bitmap:${e}`);if(a!==void 0)return s.manager.itemStart(e),a.then?void a.then(c=>{if(Wl.has(a)!==!0)return t&&t(c),s.manager.itemEnd(e),c;i&&i(Wl.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)}):(setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return un.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Wl.set(l,c),un.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});un.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var j_=new Ce,q_=new Ce,Y_=new Ce;var yo=class extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ec=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},J_=new A,Z_=new xt,K_=new A,$_=new A,Q_=new A;var ev=new A,tv=new xt,nv=new A,iv=new A;var So=class{constructor(e,t,n){let i,s,a;switch(this.binding=e,this.valueSize=n,t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){xt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let a=this._workIndex*s;xt.multiplyQuaternionsFlat(e,a,e,t,e,n),xt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Lh="\\[\\]\\.:\\/",Gf=new RegExp("["+Lh+"]","g"),Xl="[^"+Lh+"]",Vf="[^"+Lh.replace("\\.","")+"]",Hf=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Xl)+/(WCOD+)?/.source.replace("WCOD",Vf)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl)+"$"),Wf=["material","materials","bones","map"],Je=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gf,"")}static parseTrackName(e){let t=Hf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Wf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void _e("PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void xe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void xe("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void xe("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0)return void xe("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+i+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Je.Composite=class{constructor(r,e,t){let n=t||Je.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray],Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bo=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,a=s.length,o=new Array(a),l={endingStart:ai,endingEnd:ai};for(let c=0;c!==a;++c){let h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled)return void this._updateWeight(e);let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;if(this.blendMode===Ah)for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,a=n===2202;if(e===0)return s===-1||!a||1&~s?i:t-i;if(n===2200){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else{if(!(i<0)){this.time=i;break e}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&!(1&~s))return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=oi,i.endingEnd=oi):(i.endingStart=e?this.zeroSlopeAtStart?oi:ai:Hr,i.endingEnd=t?this.zeroSlopeAtEnd?oi:ai:Hr)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}},Xf=new Float32Array(1),Ac=class extends dn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let d=i[u],p=d.name,m=h[p];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,p));continue}let _=t&&t._propertyBindings[u].binding.parsedPath;m=new So(Je.create(n,p,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,p),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new fs(new Float32Array(2),new Float32Array(2),1,Xf),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,a=typeof e=="string"?_s.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(n=a!==null?a.blendMode:rp),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new bo(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?_s.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let s in n){let a=n[s].actionByRoot[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let i=this._bindingsByRootAndName[t];if(i!==void 0)for(let s in i){let a=i[s];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Cc=class extends Qr{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Ed=new Ce,Rc=class{constructor(e,t,n=0,i=1/0){this.ray=new Gn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ed.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ed),this}intersectObject(e,t=!0,n=[]){return Ic(e,this,n,t),n.sort(Ad),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ic(e[i],this,n,t);return n.sort(Ad),n}};function Ad(r,e){return r.distance-e.distance}function Ic(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Ic(s[a],e,t,!0)}}var rv=new ie;var sv=new A,av=new A,ov=new A,lv=new A,cv=new A,hv=new A,uv=new A;var dv=new A;var pv=new A,mv=new Ce,fv=new Ce;var gv=new A,_v=new Ee,vv=new Ee;var xv=new A,yv=new A,Sv=new A;var bv=new A,Mv=new tr;var wv=new Lt;var Tv=new A;function Nh(r,e,t,n){let i=(function(s){switch(s){case kt:case Hc:return{byteLength:1,components:1};case pr:case Wc:case mn:return{byteLength:2,components:1};case No:case Uo:return{byteLength:2,components:4};case Dn:case Lo:case zt:return{byteLength:4,components:1};case Xc:case jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case 1021:return r*e;case Fo:case Oo:return r*e/i.components*i.byteLength;case 1030:case 1031:return r*e*2/i.components*i.byteLength;case 1022:return r*e*3/i.components*i.byteLength;case qt:case 1033:return r*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}})),typeof window<"u"&&(window.__THREE__?_e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function jp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function qf(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=r.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var Ue={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ce={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},gn={basic:{uniforms:bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:bt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:bt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:bt([ce.points,ce.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:bt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:bt([ce.common,ce.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:bt([ce.sprite,ce.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:bt([ce.common,ce.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:bt([ce.lights,ce.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};gn.physical={uniforms:bt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var Wo={r:0,b:0,g:0},wi=new jt,Yf=new Ce;function Jf(r,e,t,n,i,s,a){let o=new Ee(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function m(f){let v=f.isScene===!0?f.background:null;return v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v}function _(f,v){f.getRGB(Wo,Ih(r)),n.buffers.color.setClear(Wo.r,Wo.g,Wo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(f,v=1){o.set(f),h=v,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,_(o,h)},render:function(f){let v=!1,g=m(f);g===null?_(o,h):g&&g.isColor&&(_(g,1),v=!0);let x=r.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(f,v){let g=m(v);g&&(g.isCubeTexture||g.mapping===bs)?(c===void 0&&(c=new lt(new ui(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:Mi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),wi.copy(v.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yf.makeRotationFromEuler(wi)),c.material.toneMapped=He.getTransfer(g.colorSpace)!==Xe,u===g&&d===g.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=g,d=g.version,p=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new lt(new ar(2,2),new Ft({name:"BackgroundMaterial",uniforms:Mi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=He.getTransfer(g.colorSpace)!==Xe,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),u===g&&d===g.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=g,d=g.version,p=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}}}function Zf(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,a=!1;function o(v){return r.bindVertexArray(v)}function l(v){return r.deleteVertexArray(v)}function c(v){let g=[],x=[],S=[];for(let w=0;w<t;w++)g[w]=0,x[w]=0,S[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:x,attributeDivisors:S,object:v,attributes:{},index:null}}function h(){let v=s.newAttributes;for(let g=0,x=v.length;g<x;g++)v[g]=0}function u(v){d(v,0)}function d(v,g){let x=s.newAttributes,S=s.enabledAttributes,w=s.attributeDivisors;x[v]=1,S[v]===0&&(r.enableVertexAttribArray(v),S[v]=1),w[v]!==g&&(r.vertexAttribDivisor(v,g),w[v]=g)}function p(){let v=s.newAttributes,g=s.enabledAttributes;for(let x=0,S=g.length;x<S;x++)g[x]!==v[x]&&(r.disableVertexAttribArray(x),g[x]=0)}function m(v,g,x,S,w,T,I){I===!0?r.vertexAttribIPointer(v,g,x,w,T):r.vertexAttribPointer(v,g,x,S,w,T)}function _(){f(),a=!0,s!==i&&(s=i,o(s.object))}function f(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(v,g,x,S,w){let T=!1,I=(function(F,R,G){let V=G.wireframe===!0,B=n[F.id];B===void 0&&(B={},n[F.id]=B);let H=B[R.id];H===void 0&&(H={},B[R.id]=H);let O=H[V];return O===void 0&&(O=c(r.createVertexArray()),H[V]=O),O})(S,x,g);s!==I&&(s=I,o(s.object)),T=(function(F,R,G,V){let B=s.attributes,H=R.attributes,O=0,Z=G.getAttributes();for(let j in Z)if(Z[j].location>=0){let X=B[j],le=H[j];if(le===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(le=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(le=F.instanceColor)),X===void 0||X.attribute!==le||le&&X.data!==le.data)return!0;O++}return s.attributesNum!==O||s.index!==V})(v,S,x,w),T&&(function(F,R,G,V){let B={},H=R.attributes,O=0,Z=G.getAttributes();for(let j in Z)if(Z[j].location>=0){let X=H[j];X===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(X=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(X=F.instanceColor));let le={};le.attribute=X,X&&X.data&&(le.data=X.data),B[j]=le,O++}s.attributes=B,s.attributesNum=O,s.index=V})(v,S,x,w),w!==null&&e.update(w,r.ELEMENT_ARRAY_BUFFER),(T||a)&&(a=!1,(function(F,R,G,V){h();let B=V.attributes,H=G.getAttributes(),O=R.defaultAttributeValues;for(let Z in H){let j=H[Z];if(j.location>=0){let X=B[Z];if(X===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(X=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(X=F.instanceColor)),X!==void 0){let le=X.normalized,ve=X.itemSize,de=e.get(X);if(de===void 0)continue;let ue=de.buffer,be=de.type,ee=de.bytesPerElement,se=be===r.INT||be===r.UNSIGNED_INT||X.gpuType===Lo;if(X.isInterleavedBufferAttribute){let oe=X.data,ye=oe.stride,Ie=X.offset;if(oe.isInstancedInterleavedBuffer){for(let M=0;M<j.locationSize;M++)d(j.location+M,oe.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let M=0;M<j.locationSize;M++)u(j.location+M);r.bindBuffer(r.ARRAY_BUFFER,ue);for(let M=0;M<j.locationSize;M++)m(j.location+M,ve/j.locationSize,be,le,ye*ee,(Ie+ve/j.locationSize*M)*ee,se)}else{if(X.isInstancedBufferAttribute){for(let oe=0;oe<j.locationSize;oe++)d(j.location+oe,X.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let oe=0;oe<j.locationSize;oe++)u(j.location+oe);r.bindBuffer(r.ARRAY_BUFFER,ue);for(let oe=0;oe<j.locationSize;oe++)m(j.location+oe,ve/j.locationSize,be,le,ve*ee,ve/j.locationSize*oe*ee,se)}}else if(O!==void 0){let le=O[Z];if(le!==void 0)switch(le.length){case 2:r.vertexAttrib2fv(j.location,le);break;case 3:r.vertexAttrib3fv(j.location,le);break;case 4:r.vertexAttrib4fv(j.location,le);break;default:r.vertexAttrib1fv(j.location,le)}}}}p()})(v,g,x,S),w!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))},reset:_,resetDefaultState:f,dispose:function(){_();for(let v in n){let g=n[v];for(let x in g){let S=g[x];for(let w in S)l(S[w].object),delete S[w];delete g[x]}delete n[v]}},releaseStatesOfGeometry:function(v){if(n[v.id]===void 0)return;let g=n[v.id];for(let x in g){let S=g[x];for(let w in S)l(S[w].object),delete S[w];delete g[x]}delete n[v.id]},releaseStatesOfProgram:function(v){for(let g in n){let x=n[g];if(x[v.id]===void 0)continue;let S=x[v.id];for(let w in S)l(S[w].object),delete S[w];delete x[v.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Kf(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)i(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function $f(r,e,t,n){let i;function s(l){if(l==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);return o!==a&&(_e("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o),{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let l=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(l){return l===qt||n.convert(l)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(l){let c=l===mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(l!==kt&&n.convert(l)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&l!==zt&&!c)},precision:a,logarithmicDepthBuffer:t.logarithmicDepthBuffer===!0,reversedDepthBuffer:t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),maxTextures:r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:r.getParameter(r.MAX_SAMPLES),samples:r.getParameter(r.SAMPLES)}}function Qf(r){let e=this,t=null,n=0,i=!1,s=!1,a=new ln,o=new Pe,l={value:null,needsUpdate:!1};function c(h,u,d,p){let m=h!==null?h.length:0,_=null;if(m!==0){if(_=l.value,p!==!0||_===null){let f=d+4*m,v=u.matrixWorldInverse;o.getNormalMatrix(v),(_===null||_.length<f)&&(_=new Float32Array(f));for(let g=0,x=d;g!==m;++g,x+=4)a.copy(h[g]).applyMatrix4(v,o),a.normal.toArray(_,x),_[x+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,_=h.clipShadows,f=r.get(h);if(!i||p===null||p.length===0||s&&!_)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let v=s?0:n,g=4*v,x=f.clippingState||null;l.value=x,x=c(p,u,g,d);for(let S=0;S!==g;++S)x[S]=t[S];f.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}}}function eg(r){let e=new WeakMap;function t(i,s){return s===Io?i.mapping=dr:s===Po&&(i.mapping=xi),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===Io||s===Po){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new $r(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Mp=[.125,.215,.35,.446,.526,.582],Ts=20,Es=new lr,wp=new Ee,Uh=null,Fh=0,Oh=0,Bh=!1,tg=new A,jo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=tg}=s;Uh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,Fh,Oh),this._renderer.xr.enabled=Bh,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:mn,format:qt,colorSpace:ci,depthBuffer:!1},i=Tp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tp(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Mp.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);o.push(p);let m=1/p;d>a-4?m=Mp[d-a+4-1]:d===0&&(m=0),l.push(m);let _=1/(p-2),f=-_,v=1+_,g=[f,f,v,f,v,v,f,f,v,v,f,v],x=6,S=6,w=3,T=2,I=1,F=new Float32Array(w*S*x),R=new Float32Array(T*S*x),G=new Float32Array(I*S*x);for(let B=0;B<x;B++){let H=B%3*2/3-1,O=B>2?0:-1,Z=[H,O,0,H+2/3,O,0,H+2/3,O+1,0,H,O,0,H+2/3,O+1,0,H,O+1,0];F.set(Z,w*S*B),R.set(g,T*S*B);let j=[B,B,B,B,B,B];G.set(j,I*S*B)}let V=new Ye;V.setAttribute("position",new Et(F,w)),V.setAttribute("uv",new Et(R,T)),V.setAttribute("faceIndex",new Et(G,I)),c.push(new lt(V,null)),h>4&&h--}return{lodMeshes:c,sizeLods:o,sigmas:l}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Ts),h=new A(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,l){return new Ft({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new lt(new Ye,e);this._renderer.compile(t,Es)}_sceneToCubeUV(e,t,n,i,s){let a=new vt(90,1,t,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(wp),c.toneMapping=tn,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(i),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new ui,new Yr({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,p=d.material,m=!1,_=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(wp),m=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(a.up.set(0,o[f],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[f],s.y,s.z)):v===1?(a.up.set(0,0,o[f]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[f],s.z)):(a.up.set(0,o[f],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[f]));let g=this._cubeSize;gr(i,v*g,f>2?g:0,g,g),c.setRenderTarget(i),m&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=h,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===dr||e.mapping===xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;gr(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Es)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h)*(0+1.25*c),{_lodMax:d}=this,p=this._sizeLods[n],m=3*p*(n>d-4?n-d+4:0),_=4*(this._cubeSize-p);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=d-t,gr(s,m,_,3*p,2*p),i.setRenderTarget(s),i.render(o,Es),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=d-n,gr(e,m,_,3*p,2*p),i.setRenderTarget(e),i.render(o,Es)}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&xe("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[i];h.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,m=s/p,_=isFinite(s)?1+Math.floor(3*m):Ts;_>Ts&&_e(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let f=[],v=0;for(let S=0;S<Ts;++S){let w=S/m,T=Math.exp(-w*w/2);f.push(T),S===0?v+=T:S<_&&(v+=2*T)}for(let S=0;S<f.length;S++)f[S]=f[S]/v;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-n;let x=this._sizeLods[i];gr(t,3*x*(i>g-4?i-g+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,Es)}};function Tp(r,e,t){let n=new Dt(r,e,t);return n.texture.mapping=bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ep(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ap(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ng(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===Io||s===Po,o=s===dr||s===xi;if(a||o){let l=e.get(i),c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new jo(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let m=0;m<p;m++)u[m]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new jo(r)),l=a?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function ig(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&$i("WebGLRenderer: "+n+" extension not supported."),i}}}function rg(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let _=h.array;d=h.version;for(let f=0,v=_.length;f<v;f+=3){let g=_[f+0],x=_[f+1],S=_[f+2];c.push(g,x,x,S,S,g)}}else{if(u===void 0)return;{let _=u.array;d=u.version;for(let f=0,v=_.length/3-1;f<v;f+=3){let g=f+0,x=f+1,S=f+2;c.push(g,x,x,S,S,g)}}}let p=new(Rh(c)?Zr:Jr)(c,1);p.version=d;let m=s.get(l);m&&e.remove(m),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function sg(r,e,t){let n,i,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(n,l,i,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(n,l,i,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,i,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function ag(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:xe("WebGLInfo: Unknown draw mode:",n)}}}}function og(r,e,t){let n=new WeakMap,i=new Ze;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let F=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],g=0;d===!0&&(g=1),p===!0&&(g=2),m===!0&&(g=3);let x=a.attributes.position.count*g,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*S*4*h),T=new qr(w,x,S,h);T.type=zt,T.needsUpdate=!0;let I=4*g;for(let R=0;R<h;R++){let G=_[R],V=f[R],B=v[R],H=x*S*4*R;for(let O=0;O<G.count;O++){let Z=O*I;d===!0&&(i.fromBufferAttribute(G,O),w[H+Z+0]=i.x,w[H+Z+1]=i.y,w[H+Z+2]=i.z,w[H+Z+3]=0),p===!0&&(i.fromBufferAttribute(V,O),w[H+Z+4]=i.x,w[H+Z+5]=i.y,w[H+Z+6]=i.z,w[H+Z+7]=0),m===!0&&(i.fromBufferAttribute(B,O),w[H+Z+8]=i.x,w[H+Z+9]=i.y,w[H+Z+10]=i.z,w[H+Z+11]=B.itemSize===4?i.w:1)}}u={count:h,texture:T,size:new ie(x,S)},n.set(a,u),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let m=0;m<l.length;m++)d+=l[m];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function lg(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var cg={[Uc]:"LINEAR_TONE_MAPPING",[Fc]:"REINHARD_TONE_MAPPING",[Oc]:"CINEON_TONE_MAPPING",[Bc]:"ACES_FILMIC_TONE_MAPPING",[zc]:"AGX_TONE_MAPPING",[Gc]:"NEUTRAL_TONE_MAPPING",[kc]:"CUSTOM_TONE_MAPPING"};function hg(r,e,t,n,i){let s=new Dt(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Dt(e,t,{type:mn,depthBuffer:!1,stencilBuffer:!1}),o=new Ye;o.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Se([0,2,0,0,2,0],2));let l=new ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new lt(o,l),h=new lr(-1,1,1,-1,0,1),u,d=null,p=null,m=!1,_=null,f=[],v=!1;this.setSize=function(g,x){s.setSize(g,x),a.setSize(g,x);for(let S=0;S<f.length;S++){let w=f[S];w.setSize&&w.setSize(g,x)}},this.setEffects=function(g){f=g,v=f.length>0&&f[0].isRenderPass===!0;let x=s.width,S=s.height;for(let w=0;w<f.length;w++){let T=f[w];T.setSize&&T.setSize(x,S)}},this.begin=function(g,x){if(m||g.toneMapping===tn&&f.length===0)return!1;if(_=x,x!==null){let S=x.width,w=x.height;s.width===S&&s.height===w||this.setSize(S,w)}return v===!1&&g.setRenderTarget(s),u=g.toneMapping,g.toneMapping=tn,!0},this.hasRenderPass=function(){return v},this.end=function(g,x){g.toneMapping=u,m=!0;let S=s,w=a;for(let T=0;T<f.length;T++){let I=f[T];if(I.enabled!==!1&&(I.render(g,w,S,x),I.needsSwap!==!1)){let F=S;S=w,w=F}}if(d!==g.outputColorSpace||p!==g.toneMapping){d=g.outputColorSpace,p=g.toneMapping,l.defines={},He.getTransfer(d)===Xe&&(l.defines.SRGB_TRANSFER="");let T=cg[p];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,g.setRenderTarget(_),g.render(c,h),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var qp=new yt,Gh=new Hn(1,1),Yp=new qr,Jp=new Da,Zp=new Kr,Cp=[],Rp=[],Ip=new Float32Array(16),Pp=new Float32Array(9),Dp=new Float32Array(4);function vr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Cp[i];if(s===void 0&&(s=new Float32Array(i),Cp[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ht(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Yo(r,e){let t=Rp[e];t===void 0&&(t=new Int32Array(e),Rp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ug(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function dg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2fv(this.addr,e),ht(t,e)}}function pg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;r.uniform3fv(this.addr,e),ht(t,e)}}function mg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4fv(this.addr,e),ht(t,e)}}function fg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;Dp.set(n),r.uniformMatrix2fv(this.addr,!1,Dp),ht(t,n)}}function gg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;Pp.set(n),r.uniformMatrix3fv(this.addr,!1,Pp),ht(t,n)}}function _g(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;Ip.set(n),r.uniformMatrix4fv(this.addr,!1,Ip),ht(t,n)}}function vg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function xg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2iv(this.addr,e),ht(t,e)}}function yg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3iv(this.addr,e),ht(t,e)}}function Sg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4iv(this.addr,e),ht(t,e)}}function bg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Mg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2uiv(this.addr,e),ht(t,e)}}function wg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3uiv(this.addr,e),ht(t,e)}}function Tg(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4uiv(this.addr,e),ht(t,e)}}function Eg(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(Gh.compareFunction=t.isReversedDepthBuffer()?Ho:Vo,s=Gh):s=qp,t.setTexture2D(e||s,i)}function Ag(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jp,i)}function Cg(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Zp,i)}function Rg(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yp,i)}function Ig(r,e){r.uniform1fv(this.addr,e)}function Pg(r,e){let t=vr(e,this.size,2);r.uniform2fv(this.addr,t)}function Dg(r,e){let t=vr(e,this.size,3);r.uniform3fv(this.addr,t)}function Lg(r,e){let t=vr(e,this.size,4);r.uniform4fv(this.addr,t)}function Ng(r,e){let t=vr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ug(r,e){let t=vr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Fg(r,e){let t=vr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Og(r,e){r.uniform1iv(this.addr,e)}function Bg(r,e){r.uniform2iv(this.addr,e)}function kg(r,e){r.uniform3iv(this.addr,e)}function zg(r,e){r.uniform4iv(this.addr,e)}function Gg(r,e){r.uniform1uiv(this.addr,e)}function Vg(r,e){r.uniform2uiv(this.addr,e)}function Hg(r,e){r.uniform3uiv(this.addr,e)}function Wg(r,e){r.uniform4uiv(this.addr,e)}function Xg(r,e,t){let n=this.cache,i=e.length,s=Yo(t,i),a;ct(n,s)||(r.uniform1iv(this.addr,s),ht(n,s)),a=this.type===r.SAMPLER_2D_SHADOW?Gh:qp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function jg(r,e,t){let n=this.cache,i=e.length,s=Yo(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Jp,s[a])}function qg(r,e,t){let n=this.cache,i=e.length,s=Yo(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Zp,s[a])}function Yg(r,e,t){let n=this.cache,i=e.length,s=Yo(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ht(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Yp,s[a])}var Vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return ug;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return fg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return vg;case 35667:case 35671:return xg;case 35668:case 35672:return yg;case 35669:case 35673:return Sg;case 5125:return bg;case 36294:return Mg;case 36295:return wg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Rg}})(t.type)}},Hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return Ig;case 35664:return Pg;case 35665:return Dg;case 35666:return Lg;case 35674:return Ng;case 35675:return Ug;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return kg;case 35669:case 35673:return zg;case 5125:return Gg;case 36294:return Vg;case 36295:return Hg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}})(t.type)}},Wh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},kh=/(\w+)(\])?(\[|\.)?/g;function Lp(r,e){r.seq.push(e),r.map[e.id]=e}function Jg(r,e,t){let n=r.name,i=n.length;for(kh.lastIndex=0;;){let s=kh.exec(n),a=kh.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){Lp(t,c===void 0?new Vh(o,r,e):new Hh(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Wh(o),Lp(t,h)),t=h}}}var _r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a);Jg(o,e.getUniformLocation(t,o.name),this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Np(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Zg=0,Up=new Pe;function Fp(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=(r.getShaderInfoLog(e)||"").trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===l?">":" "} ${m}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function Kg(r,e){let t=(function(n){He._getMatrix(Up,He.workingColorSpace,n);let i=`mat3( ${Up.elements.map(s=>s.toFixed(4))} )`;switch(He.getTransfer(n)){case Wr:return[i,"LinearTransferOETF"];case Xe:return[i,"sRGBTransferOETF"];default:return _e("WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var $g={[Uc]:"Linear",[Fc]:"Reinhard",[Oc]:"Cineon",[Bc]:"ACESFilmic",[zc]:"AgX",[Gc]:"Neutral",[kc]:"Custom"};function Qg(r,e){let t=$g[e];return t===void 0?(_e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xo=new A;function e0(){return He.getLuminanceCoefficients(Xo),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Xo.x.toFixed(4)}, ${Xo.y.toFixed(4)}, ${Xo.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function As(r){return r!==""}function Op(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var t0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(r){return r.replace(t0,i0)}var n0=new Map;function i0(r,e){let t=Ue[e];if(t===void 0){let n=n0.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ue[n],_e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Xh(t)}var r0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kp(r){return r.replace(r0,s0)}function s0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var a0={[xs]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"},o0={[dr]:"ENVMAP_TYPE_CUBE",[xi]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE_UV"},l0={[xi]:"ENVMAP_MODE_REFRACTION"},c0={[Kd]:"ENVMAP_BLENDING_MULTIPLY",[$d]:"ENVMAP_BLENDING_MIX",[Qd]:"ENVMAP_BLENDING_ADD"};function h0(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(V){return a0[V.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),c=(function(V){return V.envMap===!1?"ENVMAP_TYPE_CUBE":o0[V.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(V){return V.envMap===!1?"ENVMAP_MODE_REFLECTION":l0[V.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),u=(function(V){return V.envMap===!1?"ENVMAP_BLENDING_NONE":c0[V.combine]||"ENVMAP_BLENDING_NONE"})(t),d=(function(V){let B=V.envMapCubeUVHeight;if(B===null)return null;let H=Math.log2(B)-2,O=1/B;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:O,maxMip:H}})(t),p=(function(V){return[V.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",V.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)})(t),m=(function(V){let B=[];for(let H in V){let O=V[H];O!==!1&&B.push("#define "+H+" "+O)}return B.join(`
`)})(s),_=i.createProgram(),f,v,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(As).join(`
`),f.length>0&&(f+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(As).join(`
`),v.length>0&&(v+=`
`)):(f=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),v=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tn?"#define TONE_MAPPING":"",t.toneMapping!==tn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==tn?Qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Kg("linearToOutputTexel",t.outputColorSpace),e0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),a=Xh(a),a=Op(a,t),a=Bp(a,t),o=Xh(o),o=Op(o,t),o=Bp(o,t),a=kp(a),o=kp(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",t.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let x=g+f+a,S=g+v+o,w=Np(i,i.VERTEX_SHADER,x),T=Np(i,i.FRAGMENT_SHADER,S);function I(V){if(r.debug.checkShaderErrors){let B=i.getProgramInfoLog(_)||"",H=i.getShaderInfoLog(w)||"",O=i.getShaderInfoLog(T)||"",Z=B.trim(),j=H.trim(),X=O.trim(),le=!0,ve=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(le=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,w,T);else{let de=Fp(i,w,"vertex"),ue=Fp(i,T,"fragment");xe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Z+`
`+de+`
`+ue)}else Z!==""?_e("WebGLProgram: Program Info Log:",Z):j!==""&&X!==""||(ve=!1);ve&&(V.diagnostics={runnable:le,programLog:Z,vertexShader:{log:j,prefix:f},fragmentShader:{log:X,prefix:v}})}i.deleteShader(w),i.deleteShader(T),F=new _r(i,_),R=(function(B,H){let O={},Z=B.getProgramParameter(H,B.ACTIVE_ATTRIBUTES);for(let j=0;j<Z;j++){let X=B.getActiveAttrib(H,j),le=X.name,ve=1;X.type===B.FLOAT_MAT2&&(ve=2),X.type===B.FLOAT_MAT3&&(ve=3),X.type===B.FLOAT_MAT4&&(ve=4),O[le]={type:X.type,location:B.getAttribLocation(H,le),locationSize:ve}}return O})(i,_)}let F,R;i.attachShader(_,w),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),this.getUniforms=function(){return F===void 0&&I(this),F},this.getAttributes=function(){return R===void 0&&I(this),R};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=i.getProgramParameter(_,37297)),G},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}var u0=0,jh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qh(e),t.set(e,n)),n}},qh=class{constructor(e){this.id=u0++,this.code=e,this.usedTimes=0}};function d0(r,e,t,n,i,s,a){let o=new er,l=new jh,c=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(f){return c.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,v,g,x,S){let w=x.fog,T=S.geometry,I=f.isMeshStandardMaterial?x.environment:null,F=(f.isMeshStandardMaterial?t:e).get(f.envMap||I),R=F&&F.mapping===bs?F.image.height:null,G=m[f.type];f.precision!==null&&(p=i.getMaxPrecision(f.precision),p!==f.precision&&_e("WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let V=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,B=V!==void 0?V.length:0,H,O,Z,j,X=0;if(T.morphAttributes.position!==void 0&&(X=1),T.morphAttributes.normal!==void 0&&(X=2),T.morphAttributes.color!==void 0&&(X=3),G){let Qe=gn[G];H=Qe.vertexShader,O=Qe.fragmentShader}else H=f.vertexShader,O=f.fragmentShader,l.update(f),Z=l.getVertexShaderID(f),j=l.getFragmentShaderID(f);let le=r.getRenderTarget(),ve=r.state.buffers.depth.getReversed(),de=S.isInstancedMesh===!0,ue=S.isBatchedMesh===!0,be=!!f.map,ee=!!f.matcap,se=!!F,oe=!!f.aoMap,ye=!!f.lightMap,Ie=!!f.bumpMap,M=!!f.normalMap,b=!!f.displacementMap,U=!!f.emissiveMap,P=!!f.metalnessMap,y=!!f.roughnessMap,C=f.anisotropy>0,D=f.clearcoat>0,N=f.dispersion>0,Y=f.iridescence>0,J=f.sheen>0,z=f.transmission>0,Q=C&&!!f.anisotropyMap,K=D&&!!f.clearcoatMap,ne=D&&!!f.clearcoatNormalMap,te=D&&!!f.clearcoatRoughnessMap,ae=Y&&!!f.iridescenceMap,Me=Y&&!!f.iridescenceThicknessMap,Fe=J&&!!f.sheenColorMap,Ve=J&&!!f.sheenRoughnessMap,We=!!f.specularMap,pe=!!f.specularColorMap,we=!!f.specularIntensityMap,qe=z&&!!f.transmissionMap,ut=z&&!!f.thicknessMap,me=!!f.gradientMap,De=!!f.alphaMap,ke=f.alphaTest>0,ft=!!f.alphaHash,Kn=!!f.extensions,wt=tn;f.toneMapped&&(le!==null&&le.isXRRenderTarget!==!0||(wt=r.toneMapping));let dt={shaderID:G,shaderType:f.type,shaderName:f.name,vertexShader:H,fragmentShader:O,defines:f.defines,customVertexShaderID:Z,customFragmentShaderID:j,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:ue,batchingColor:ue&&S._colorsTexture!==null,instancing:de,instancingColor:de&&S.instanceColor!==null,instancingMorph:de&&S.morphTexture!==null,outputColorSpace:le===null?r.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ci,alphaToCoverage:!!f.alphaToCoverage,map:be,matcap:ee,envMap:se,envMapMode:se&&F.mapping,envMapCubeUVHeight:R,aoMap:oe,lightMap:ye,bumpMap:Ie,normalMap:M,displacementMap:b,emissiveMap:U,normalMapObjectSpace:M&&f.normalMapType===ap,normalMapTangentSpace:M&&f.normalMapType===sp,metalnessMap:P,roughnessMap:y,anisotropy:C,anisotropyMap:Q,clearcoat:D,clearcoatMap:K,clearcoatNormalMap:ne,clearcoatRoughnessMap:te,dispersion:N,iridescence:Y,iridescenceMap:ae,iridescenceThicknessMap:Me,sheen:J,sheenColorMap:Fe,sheenRoughnessMap:Ve,specularMap:We,specularColorMap:pe,specularIntensityMap:we,transmission:z,transmissionMap:qe,thicknessMap:ut,gradientMap:me,opaque:f.transparent===!1&&f.blending===ys&&f.alphaToCoverage===!1,alphaMap:De,alphaTest:ke,alphaHash:ft,combine:f.combine,mapUv:be&&_(f.map.channel),aoMapUv:oe&&_(f.aoMap.channel),lightMapUv:ye&&_(f.lightMap.channel),bumpMapUv:Ie&&_(f.bumpMap.channel),normalMapUv:M&&_(f.normalMap.channel),displacementMapUv:b&&_(f.displacementMap.channel),emissiveMapUv:U&&_(f.emissiveMap.channel),metalnessMapUv:P&&_(f.metalnessMap.channel),roughnessMapUv:y&&_(f.roughnessMap.channel),anisotropyMapUv:Q&&_(f.anisotropyMap.channel),clearcoatMapUv:K&&_(f.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(f.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&_(f.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&_(f.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(f.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&_(f.sheenRoughnessMap.channel),specularMapUv:We&&_(f.specularMap.channel),specularColorMapUv:pe&&_(f.specularColorMap.channel),specularIntensityMapUv:we&&_(f.specularIntensityMap.channel),transmissionMapUv:qe&&_(f.transmissionMap.channel),thicknessMapUv:ut&&_(f.thicknessMap.channel),alphaMapUv:De&&_(f.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(M||C),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!T.attributes.uv&&(be||De),fog:!!w,useFog:f.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:f.flatShading===!0&&f.wireframe===!1,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:S.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:X,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&g.length>0,shadowMapType:r.shadowMap.type,toneMapping:wt,decodeVideoTexture:be&&f.map.isVideoTexture===!0&&He.getTransfer(f.map.colorSpace)===Xe,decodeVideoTextureEmissive:U&&f.emissiveMap.isVideoTexture===!0&&He.getTransfer(f.emissiveMap.colorSpace)===Xe,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===pn,flipSided:f.side===Bt,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:Kn&&f.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kn&&f.extensions.multiDraw===!0||ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt},getProgramCacheKey:function(f){let v=[];if(f.shaderID?v.push(f.shaderID):(v.push(f.customVertexShaderID),v.push(f.customFragmentShaderID)),f.defines!==void 0)for(let g in f.defines)v.push(g),v.push(f.defines[g]);return f.isRawShaderMaterial===!1&&((function(g,x){g.push(x.precision),g.push(x.outputColorSpace),g.push(x.envMapMode),g.push(x.envMapCubeUVHeight),g.push(x.mapUv),g.push(x.alphaMapUv),g.push(x.lightMapUv),g.push(x.aoMapUv),g.push(x.bumpMapUv),g.push(x.normalMapUv),g.push(x.displacementMapUv),g.push(x.emissiveMapUv),g.push(x.metalnessMapUv),g.push(x.roughnessMapUv),g.push(x.anisotropyMapUv),g.push(x.clearcoatMapUv),g.push(x.clearcoatNormalMapUv),g.push(x.clearcoatRoughnessMapUv),g.push(x.iridescenceMapUv),g.push(x.iridescenceThicknessMapUv),g.push(x.sheenColorMapUv),g.push(x.sheenRoughnessMapUv),g.push(x.specularMapUv),g.push(x.specularColorMapUv),g.push(x.specularIntensityMapUv),g.push(x.transmissionMapUv),g.push(x.thicknessMapUv),g.push(x.combine),g.push(x.fogExp2),g.push(x.sizeAttenuation),g.push(x.morphTargetsCount),g.push(x.morphAttributeCount),g.push(x.numDirLights),g.push(x.numPointLights),g.push(x.numSpotLights),g.push(x.numSpotLightMaps),g.push(x.numHemiLights),g.push(x.numRectAreaLights),g.push(x.numDirLightShadows),g.push(x.numPointLightShadows),g.push(x.numSpotLightShadows),g.push(x.numSpotLightShadowsWithMaps),g.push(x.numLightProbes),g.push(x.shadowMapType),g.push(x.toneMapping),g.push(x.numClippingPlanes),g.push(x.numClipIntersection),g.push(x.depthPacking)})(v,f),(function(g,x){o.disableAll(),x.instancing&&o.enable(0),x.instancingColor&&o.enable(1),x.instancingMorph&&o.enable(2),x.matcap&&o.enable(3),x.envMap&&o.enable(4),x.normalMapObjectSpace&&o.enable(5),x.normalMapTangentSpace&&o.enable(6),x.clearcoat&&o.enable(7),x.iridescence&&o.enable(8),x.alphaTest&&o.enable(9),x.vertexColors&&o.enable(10),x.vertexAlphas&&o.enable(11),x.vertexUv1s&&o.enable(12),x.vertexUv2s&&o.enable(13),x.vertexUv3s&&o.enable(14),x.vertexTangents&&o.enable(15),x.anisotropy&&o.enable(16),x.alphaHash&&o.enable(17),x.batching&&o.enable(18),x.dispersion&&o.enable(19),x.batchingColor&&o.enable(20),x.gradientMap&&o.enable(21),g.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),g.push(o.mask)})(v,f),v.push(r.outputColorSpace)),v.push(f.customProgramCacheKey),v.join()},getUniforms:function(f){let v=m[f.type],g;if(v){let x=gn[v];g=_p.clone(x.uniforms)}else g=f.uniforms;return g},acquireProgram:function(f,v){let g=u.get(v);return g!==void 0?++g.usedTimes:(g=new h0(r,v,f,s),h.push(g),u.set(v,g)),g},releaseProgram:function(f){if(--f.usedTimes===0){let v=h.indexOf(f);h[v]=h[h.length-1],h.pop(),u.delete(f.cacheKey),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function p0(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function m0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Gp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Vp(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||m0),n.length>1&&n.sort(o||Gp),i.length>1&&i.sort(o||Gp)}}}function f0(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new Vp,r.set(e,[i])):t>=n.length?(i=new Vp,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function g0(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ee};break;case"SpotLight":t={position:new A,direction:new A,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new A,halfWidth:new A,halfHeight:new A}}return r[e.id]=t,t}}}var _0=0;function v0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function x0(r){let e=new g0,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new A);let i=new A,s=new Ce,a=new Ce;return{setup:function(o){let l=0,c=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let u=0,d=0,p=0,m=0,_=0,f=0,v=0,g=0,x=0,S=0,w=0;o.sort(v0);for(let I=0,F=o.length;I<F;I++){let R=o[I],G=R.color,V=R.intensity,B=R.distance,H=null;if(R.shadow&&R.shadow.map&&(H=R.shadow.map.texture.format===fr?R.shadow.map.texture:R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)l+=G.r*V,c+=G.g*V,h+=G.b*V;else if(R.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(R.sh.coefficients[O],V);w++}else if(R.isDirectionalLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Z=R.shadow,j=t.get(R);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.directionalShadow[u]=j,n.directionalShadowMap[u]=H,n.directionalShadowMatrix[u]=R.shadow.matrix,f++}n.directional[u]=O,u++}else if(R.isSpotLight){let O=e.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(G).multiplyScalar(V),O.distance=B,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,n.spot[p]=O;let Z=R.shadow;if(R.map&&(n.spotLightMap[x]=R.map,x++,Z.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[p]=Z.matrix,R.castShadow){let j=t.get(R);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.spotShadow[p]=j,n.spotShadowMap[p]=H,g++}p++}else if(R.isRectAreaLight){let O=e.get(R);O.color.copy(G).multiplyScalar(V),O.halfWidth.set(.5*R.width,0,0),O.halfHeight.set(0,.5*R.height,0),n.rectArea[m]=O,m++}else if(R.isPointLight){let O=e.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),O.distance=R.distance,O.decay=R.decay,R.castShadow){let Z=R.shadow,j=t.get(R);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,n.pointShadow[d]=j,n.pointShadowMap[d]=H,n.pointShadowMatrix[d]=R.shadow.matrix,v++}n.point[d]=O,d++}else if(R.isHemisphereLight){let O=e.get(R);O.skyColor.copy(R.color).multiplyScalar(V),O.groundColor.copy(R.groundColor).multiplyScalar(V),n.hemi[_]=O,_++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let T=n.hash;T.directionalLength===u&&T.pointLength===d&&T.spotLength===p&&T.rectAreaLength===m&&T.hemiLength===_&&T.numDirectionalShadows===f&&T.numPointShadows===v&&T.numSpotShadows===g&&T.numSpotMaps===x&&T.numLightProbes===w||(n.directional.length=u,n.spot.length=p,n.rectArea.length=m,n.point.length=d,n.hemi.length=_,n.directionalShadow.length=f,n.directionalShadowMap.length=f,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=f,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=g+x-S,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,T.directionalLength=u,T.pointLength=d,T.spotLength=p,T.rectAreaLength=m,T.hemiLength=_,T.numDirectionalShadows=f,T.numPointShadows=v,T.numSpotShadows=g,T.numSpotMaps=x,T.numLightProbes=w,n.version=_0++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,m=l.matrixWorldInverse;for(let _=0,f=o.length;_<f;_++){let v=o[_];if(v.isDirectionalLight){let g=n.directional[c];g.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(i),g.direction.transformDirection(m),c++}else if(v.isSpotLight){let g=n.spot[u];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(i),g.direction.transformDirection(m),u++}else if(v.isRectAreaLight){let g=n.rectArea[d];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),g.halfWidth.set(.5*v.width,0,0),g.halfHeight.set(0,.5*v.height,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),d++}else if(v.isPointLight){let g=n.point[h];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){let g=n.hemi[p];g.direction.setFromMatrixPosition(v.matrixWorld),g.direction.transformDirection(m),p++}}},state:n}}function Hp(r){let e=new x0(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function y0(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new Hp(r),e.set(t,[s])):n>=i.length?(s=new Hp(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}var S0=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],b0=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Wp=new Ce,Cs=new A,zh=new A;function M0(r,e,t){let n=new Vn,i=new ie,s=new ie,a=new Ze,o=new po,l=new mo,c={},h=t.maxTextureSize,u={[hr]:Bt,[Bt]:hr,[pn]:pn},d=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ye;m.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new lt(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xs;let v=this.type;function g(T,I){let F=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Dt(i.x,i.y,{format:fr,type:mn})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(I,null,F,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(I,null,F,p,_,null)}function x(T,I,F,R){let G=null,V=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)G=V;else if(G=F.isPointLight===!0?l:o,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let B=G.uuid,H=I.uuid,O=c[B];O===void 0&&(O={},c[B]=O);let Z=O[H];Z===void 0&&(Z=G.clone(),O[H]=Z,I.addEventListener("dispose",w)),G=Z}return G.visible=I.visible,G.wireframe=I.wireframe,G.side=R===cr?I.shadowSide!==null?I.shadowSide:I.side:I.shadowSide!==null?I.shadowSide:u[I.side],G.alphaMap=I.alphaMap,G.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,G.map=I.map,G.clipShadows=I.clipShadows,G.clippingPlanes=I.clippingPlanes,G.clipIntersection=I.clipIntersection,G.displacementMap=I.displacementMap,G.displacementScale=I.displacementScale,G.displacementBias=I.displacementBias,G.wireframeLinewidth=I.wireframeLinewidth,G.linewidth=I.linewidth,F.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(r.properties.get(G).light=F),G}function S(T,I,F,R,G){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&G===cr)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);let B=e.update(T),H=T.material;if(Array.isArray(H)){let O=B.groups;for(let Z=0,j=O.length;Z<j;Z++){let X=O[Z],le=H[X.materialIndex];if(le&&le.visible){let ve=x(T,le,R,G);T.onBeforeShadow(r,T,I,F,B,ve,X),r.renderBufferDirect(F,null,B,ve,T,X),T.onAfterShadow(r,T,I,F,B,ve,X)}}}else if(H.visible){let O=x(T,H,R,G);T.onBeforeShadow(r,T,I,F,B,O,null),r.renderBufferDirect(F,null,B,O,T,null),T.onAfterShadow(r,T,I,F,B,O,null)}}let V=T.children;for(let B=0,H=V.length;B<H;B++)S(V[B],I,F,R,G)}function w(T){T.target.removeEventListener("dispose",w);for(let I in c){let F=c[I],R=T.target.uuid;R in F&&(F[R].dispose(),delete F[R])}}this.render=function(T,I,F){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;T.type===Id&&(_e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=xs);let R=r.getRenderTarget(),G=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Pn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=v!==this.type;H&&I.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(Z=>Z.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,Z=T.length;O<Z;O++){let j=T[O],X=j.shadow;if(X===void 0){_e("WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let le=X.getFrameExtents();if(i.multiply(le),s.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/le.x),i.x=s.x*le.x,X.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/le.y),i.y=s.y*le.y,X.mapSize.y=s.y)),X.map===null||H===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===cr){if(j.isPointLight){_e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Dt(i.x,i.y,{format:fr,type:mn,minFilter:St,magFilter:St,generateMipmaps:!1}),X.map.texture.name=j.name+".shadowMap",X.map.depthTexture=new Hn(i.x,i.y,zt),X.map.depthTexture.name=j.name+".shadowMapDepth",X.map.depthTexture.format=jn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xt,X.map.depthTexture.magFilter=Xt}else{j.isPointLight?(X.map=new $r(i.x),X.map.depthTexture=new Ga(i.x,Dn)):(X.map=new Dt(i.x,i.y),X.map.depthTexture=new Hn(i.x,i.y,Dn)),X.map.depthTexture.name=j.name+".shadowMap",X.map.depthTexture.format=jn;let de=r.state.buffers.depth.getReversed();this.type===xs?(X.map.depthTexture.compareFunction=de?Ho:Vo,X.map.depthTexture.minFilter=St,X.map.depthTexture.magFilter=St):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xt,X.map.depthTexture.magFilter=Xt)}X.camera.updateProjectionMatrix()}let ve=X.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<ve;de++){if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,de),r.clear();else{de===0&&(r.setRenderTarget(X.map),r.clear());let ue=X.getViewport(de);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),B.viewport(a)}if(j.isPointLight){let ue=X.camera,be=X.matrix,ee=j.distance||ue.far;ee!==ue.far&&(ue.far=ee,ue.updateProjectionMatrix()),Cs.setFromMatrixPosition(j.matrixWorld),ue.position.copy(Cs),zh.copy(ue.position),zh.add(S0[de]),ue.up.copy(b0[de]),ue.lookAt(zh),ue.updateMatrixWorld(),be.makeTranslation(-Cs.x,-Cs.y,-Cs.z),Wp.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Wp,ue.coordinateSystem,ue.reversedDepth)}else X.updateMatrices(j);n=X.getFrustum(),S(I,F,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===cr&&g(X,F),X.needsUpdate=!1}v=this.type,f.needsUpdate=!1,r.setRenderTarget(R,G,V)}}var w0={[Mo]:wo,[To]:Co,[Eo]:Ro,[Ss]:Ao,[wo]:Mo,[Co]:To,[Ro]:Eo,[Ao]:Ss};function T0(r,e){let t=new function(){let y=!1,C=new Ze,D=null,N=new Ze(0,0,0,0);return{setMask:function(Y){D===Y||y||(r.colorMask(Y,Y,Y,Y),D=Y)},setLocked:function(Y){y=Y},setClear:function(Y,J,z,Q,K){K===!0&&(Y*=Q,J*=Q,z*=Q),C.set(Y,J,z,Q),N.equals(C)===!1&&(r.clearColor(Y,J,z,Q),N.copy(C))},reset:function(){y=!1,D=null,N.set(-1,0,0,0)}}},n=new function(){let y=!1,C=!1,D=null,N=null,Y=null;return{setReversed:function(J){if(C!==J){let z=e.get("EXT_clip_control");J?z.clipControlEXT(z.LOWER_LEFT_EXT,z.ZERO_TO_ONE_EXT):z.clipControlEXT(z.LOWER_LEFT_EXT,z.NEGATIVE_ONE_TO_ONE_EXT),C=J;let Q=Y;Y=null,this.setClear(Q)}},getReversed:function(){return C},setTest:function(J){J?se(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(J){D===J||y||(r.depthMask(J),D=J)},setFunc:function(J){if(C&&(J=w0[J]),N!==J){switch(J){case Mo:r.depthFunc(r.NEVER);break;case wo:r.depthFunc(r.ALWAYS);break;case To:r.depthFunc(r.LESS);break;case Ss:r.depthFunc(r.LEQUAL);break;case Eo:r.depthFunc(r.EQUAL);break;case Ao:r.depthFunc(r.GEQUAL);break;case Co:r.depthFunc(r.GREATER);break;case Ro:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}N=J}},setLocked:function(J){y=J},setClear:function(J){Y!==J&&(C&&(J=1-J),r.clearDepth(J),Y=J)},reset:function(){y=!1,D=null,N=null,Y=null,C=!1}}},i=new function(){let y=!1,C=null,D=null,N=null,Y=null,J=null,z=null,Q=null,K=null;return{setTest:function(ne){y||(ne?se(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(ne){C===ne||y||(r.stencilMask(ne),C=ne)},setFunc:function(ne,te,ae){D===ne&&N===te&&Y===ae||(r.stencilFunc(ne,te,ae),D=ne,N=te,Y=ae)},setOp:function(ne,te,ae){J===ne&&z===te&&Q===ae||(r.stencilOp(ne,te,ae),J=ne,z=te,Q=ae)},setLocked:function(ne){y=ne},setClear:function(ne){K!==ne&&(r.clearStencil(ne),K=ne)},reset:function(){y=!1,C=null,D=null,N=null,Y=null,J=null,z=null,Q=null,K=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,m=null,_=null,f=null,v=null,g=null,x=null,S=new Ee(0,0,0),w=0,T=!1,I=null,F=null,R=null,G=null,V=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,O=0,Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=O>=1):Z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=O>=2);let j=null,X={},le=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),de=new Ze().fromArray(le),ue=new Ze().fromArray(ve);function be(y,C,D,N){let Y=new Uint8Array(4),J=r.createTexture();r.bindTexture(y,J),r.texParameteri(y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let z=0;z<D;z++)y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?r.texImage3D(C,0,r.RGBA,1,1,N,0,r.RGBA,r.UNSIGNED_BYTE,Y):r.texImage2D(C+z,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Y);return J}let ee={};function se(y){o[y]!==!0&&(r.enable(y),o[y]=!0)}function oe(y){o[y]!==!1&&(r.disable(y),o[y]=!1)}ee[r.TEXTURE_2D]=be(r.TEXTURE_2D,r.TEXTURE_2D,1),ee[r.TEXTURE_CUBE_MAP]=be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[r.TEXTURE_2D_ARRAY]=be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ee[r.TEXTURE_3D]=be(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),se(r.DEPTH_TEST),n.setFunc(Ss),b(!1),U(Pc),se(r.CULL_FACE),M(Pn);let ye={[ur]:r.FUNC_ADD,[Dd]:r.FUNC_SUBTRACT,[Ld]:r.FUNC_REVERSE_SUBTRACT};ye[Nd]=r.MIN,ye[Ud]=r.MAX;let Ie={[Fd]:r.ZERO,[Od]:r.ONE,[Bd]:r.SRC_COLOR,[zd]:r.SRC_ALPHA,[jd]:r.SRC_ALPHA_SATURATE,[Wd]:r.DST_COLOR,[Vd]:r.DST_ALPHA,[kd]:r.ONE_MINUS_SRC_COLOR,[Gd]:r.ONE_MINUS_SRC_ALPHA,[Xd]:r.ONE_MINUS_DST_COLOR,[Hd]:r.ONE_MINUS_DST_ALPHA,[qd]:r.CONSTANT_COLOR,[Yd]:r.ONE_MINUS_CONSTANT_COLOR,[Jd]:r.CONSTANT_ALPHA,[Zd]:r.ONE_MINUS_CONSTANT_ALPHA};function M(y,C,D,N,Y,J,z,Q,K,ne){if(y!==Pn){if(d===!1&&(se(r.BLEND),d=!0),y===Pd)Y=Y||C,J=J||D,z=z||N,C===m&&Y===v||(r.blendEquationSeparate(ye[C],ye[Y]),m=C,v=Y),D===_&&N===f&&J===g&&z===x||(r.blendFuncSeparate(Ie[D],Ie[N],Ie[J],Ie[z]),_=D,f=N,g=J,x=z),Q.equals(S)!==!1&&K===w||(r.blendColor(Q.r,Q.g,Q.b,K),S.copy(Q),w=K),p=y,T=!1;else if(y!==p||ne!==T){if(m===ur&&v===ur||(r.blendEquation(r.FUNC_ADD),m=ur,v=ur),ne)switch(y){case ys:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dc:r.blendFunc(r.ONE,r.ONE);break;case Lc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:xe("WebGLState: Invalid blending: ",y)}else switch(y){case ys:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Lc:xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xe("WebGLState: Invalid blending: ",y)}_=null,f=null,g=null,x=null,S.set(0,0,0),w=0,p=y,T=ne}}else d===!0&&(oe(r.BLEND),d=!1)}function b(y){I!==y&&(y?r.frontFace(r.CW):r.frontFace(r.CCW),I=y)}function U(y){y!==Cd?(se(r.CULL_FACE),y!==F&&(y===Pc?r.cullFace(r.BACK):y===Rd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),F=y}function P(y,C,D){y?(se(r.POLYGON_OFFSET_FILL),G===C&&V===D||(r.polygonOffset(C,D),G=C,V=D)):oe(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:se,disable:oe,bindFramebuffer:function(y,C){return l[y]!==C&&(r.bindFramebuffer(y,C),l[y]=C,y===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=C),y===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=C),!0)},drawBuffers:function(y,C){let D=h,N=!1;if(y){D=c.get(C),D===void 0&&(D=[],c.set(C,D));let Y=y.textures;if(D.length!==Y.length||D[0]!==r.COLOR_ATTACHMENT0){for(let J=0,z=Y.length;J<z;J++)D[J]=r.COLOR_ATTACHMENT0+J;D.length=Y.length,N=!0}}else D[0]!==r.BACK&&(D[0]=r.BACK,N=!0);N&&r.drawBuffers(D)},useProgram:function(y){return u!==y&&(r.useProgram(y),u=y,!0)},setBlending:M,setMaterial:function(y,C){y.side===pn?oe(r.CULL_FACE):se(r.CULL_FACE);let D=y.side===Bt;C&&(D=!D),b(D),y.blending===ys&&y.transparent===!1?M(Pn):M(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),n.setFunc(y.depthFunc),n.setTest(y.depthTest),n.setMask(y.depthWrite),t.setMask(y.colorWrite);let N=y.stencilWrite;i.setTest(N),N&&(i.setMask(y.stencilWriteMask),i.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),i.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),P(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:b,setCullFace:U,setLineWidth:function(y){y!==R&&(H&&r.lineWidth(y),R=y)},setPolygonOffset:P,setScissorTest:function(y){y?se(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=r.TEXTURE0+B-1),j!==y&&(r.activeTexture(y),j=y)},bindTexture:function(y,C,D){D===void 0&&(D=j===null?r.TEXTURE0+B-1:j);let N=X[D];N===void 0&&(N={type:void 0,texture:void 0},X[D]=N),N.type===y&&N.texture===C||(j!==D&&(r.activeTexture(D),j=D),r.bindTexture(y,C||ee[y]),N.type=y,N.texture=C)},unbindTexture:function(){let y=X[j];y!==void 0&&y.type!==void 0&&(r.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(y){xe("WebGLState:",y)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(y){xe("WebGLState:",y)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(y){xe("WebGLState:",y)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(y){xe("WebGLState:",y)}},updateUBOMapping:function(y,C){let D=a.get(C);D===void 0&&(D=new WeakMap,a.set(C,D));let N=D.get(y);N===void 0&&(N=r.getUniformBlockIndex(C,y.name),D.set(y,N))},uniformBlockBinding:function(y,C){let D=a.get(C).get(y);s.get(C)!==D&&(r.uniformBlockBinding(C,D,y.__bindingPointIndex),s.set(C,D))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(y){xe("WebGLState:",y)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(y){xe("WebGLState:",y)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(y){xe("WebGLState:",y)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(y){xe("WebGLState:",y)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(y){xe("WebGLState:",y)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(y){xe("WebGLState:",y)}},scissor:function(y){de.equals(y)===!1&&(r.scissor(y.x,y.y,y.z,y.w),de.copy(y))},viewport:function(y){ue.equals(y)===!1&&(r.viewport(y.x,y.y,y.z,y.w),ue.copy(y))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},j=null,X={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,m=null,_=null,f=null,v=null,g=null,x=null,S=new Ee(0,0,0),w=0,T=!1,I=null,F=null,R=null,G=null,V=null,de.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function E0(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,b){return p?new OffscreenCanvas(M,b):Zi("canvas")}function _(M,b,U){let P=1,y=Ie(M);if((y.width>U||y.height>U)&&(P=U/Math.max(y.width,y.height)),P<1){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let C=Math.floor(P*y.width),D=Math.floor(P*y.height);u===void 0&&(u=m(C,D));let N=b?m(C,D):u;return N.width=C,N.height=D,N.getContext("2d").drawImage(M,0,0,C,D),_e("WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+C+"x"+D+")."),N}return"data"in M&&_e("WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),M}return M}function f(M){return M.generateMipmaps}function v(M){r.generateMipmap(M)}function g(M){return M.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?r.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(M,b,U,P,y=!1){if(M!==null){if(r[M]!==void 0)return r[M];_e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let C=b;if(b===r.RED&&(U===r.FLOAT&&(C=r.R32F),U===r.HALF_FLOAT&&(C=r.R16F),U===r.UNSIGNED_BYTE&&(C=r.R8)),b===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(C=r.R8UI),U===r.UNSIGNED_SHORT&&(C=r.R16UI),U===r.UNSIGNED_INT&&(C=r.R32UI),U===r.BYTE&&(C=r.R8I),U===r.SHORT&&(C=r.R16I),U===r.INT&&(C=r.R32I)),b===r.RG&&(U===r.FLOAT&&(C=r.RG32F),U===r.HALF_FLOAT&&(C=r.RG16F),U===r.UNSIGNED_BYTE&&(C=r.RG8)),b===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(C=r.RG8UI),U===r.UNSIGNED_SHORT&&(C=r.RG16UI),U===r.UNSIGNED_INT&&(C=r.RG32UI),U===r.BYTE&&(C=r.RG8I),U===r.SHORT&&(C=r.RG16I),U===r.INT&&(C=r.RG32I)),b===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(C=r.RGB8UI),U===r.UNSIGNED_SHORT&&(C=r.RGB16UI),U===r.UNSIGNED_INT&&(C=r.RGB32UI),U===r.BYTE&&(C=r.RGB8I),U===r.SHORT&&(C=r.RGB16I),U===r.INT&&(C=r.RGB32I)),b===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(C=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(C=r.RGBA16UI),U===r.UNSIGNED_INT&&(C=r.RGBA32UI),U===r.BYTE&&(C=r.RGBA8I),U===r.SHORT&&(C=r.RGBA16I),U===r.INT&&(C=r.RGBA32I)),b===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&(C=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&(C=r.R11F_G11F_B10F)),b===r.RGBA){let D=y?Wr:He.getTransfer(P);U===r.FLOAT&&(C=r.RGBA32F),U===r.HALF_FLOAT&&(C=r.RGBA16F),U===r.UNSIGNED_BYTE&&(C=D===Xe?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(C=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(C=r.RGB5_A1)}return C!==r.R16F&&C!==r.R32F&&C!==r.RG16F&&C!==r.RG32F&&C!==r.RGBA16F&&C!==r.RGBA32F||e.get("EXT_color_buffer_float"),C}function S(M,b){let U;return M?b===null||b===Dn||b===mr?U=r.DEPTH24_STENCIL8:b===zt?U=r.DEPTH32F_STENCIL8:b===pr&&(U=r.DEPTH24_STENCIL8,_e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Dn||b===mr?U=r.DEPTH_COMPONENT24:b===zt?U=r.DEPTH_COMPONENT32F:b===pr&&(U=r.DEPTH_COMPONENT16),U}function w(M,b){return f(M)===!0||M.isFramebufferTexture&&M.minFilter!==Xt&&M.minFilter!==St?Math.log2(Math.max(b.width,b.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?b.mipmaps.length:1}function T(M){let b=M.target;b.removeEventListener("dispose",T),(function(U){let P=n.get(U);if(P.__webglInit===void 0)return;let y=U.source,C=d.get(y);if(C){let D=C[P.__cacheKey];D.usedTimes--,D.usedTimes===0&&F(U),Object.keys(C).length===0&&d.delete(y)}n.remove(U)})(b),b.isVideoTexture&&h.delete(b)}function I(M){let b=M.target;b.removeEventListener("dispose",I),(function(U){let P=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(P.__webglFramebuffer[C]))for(let D=0;D<P.__webglFramebuffer[C].length;D++)r.deleteFramebuffer(P.__webglFramebuffer[C][D]);else r.deleteFramebuffer(P.__webglFramebuffer[C]);P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer[C])}else{if(Array.isArray(P.__webglFramebuffer))for(let C=0;C<P.__webglFramebuffer.length;C++)r.deleteFramebuffer(P.__webglFramebuffer[C]);else r.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&r.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let C=0;C<P.__webglColorRenderbuffer.length;C++)P.__webglColorRenderbuffer[C]&&r.deleteRenderbuffer(P.__webglColorRenderbuffer[C]);P.__webglDepthRenderbuffer&&r.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let y=U.textures;for(let C=0,D=y.length;C<D;C++){let N=n.get(y[C]);N.__webglTexture&&(r.deleteTexture(N.__webglTexture),a.memory.textures--),n.remove(y[C])}n.remove(U)})(b)}function F(M){let b=n.get(M);r.deleteTexture(b.__webglTexture);let U=M.source;delete d.get(U)[b.__cacheKey],a.memory.textures--}let R=0;function G(M,b){let U=n.get(M);if(M.isVideoTexture&&(function(P){let y=a.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())})(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&U.__version!==M.version){let P=M.image;if(P===null)_e("WebGLRenderer: Texture marked for update but no image data found.");else{if(P.complete!==!1)return void X(U,M,b);_e("WebGLRenderer: Texture marked for update but image is incomplete")}}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+b)}let V={[Ea]:r.REPEAT,[zn]:r.CLAMP_TO_EDGE,[Aa]:r.MIRRORED_REPEAT},B={[Xt]:r.NEAREST,[tp]:r.NEAREST_MIPMAP_NEAREST,[Ms]:r.NEAREST_MIPMAP_LINEAR,[St]:r.LINEAR,[Do]:r.LINEAR_MIPMAP_NEAREST,[yi]:r.LINEAR_MIPMAP_LINEAR},H={[op]:r.NEVER,[dp]:r.ALWAYS,[lp]:r.LESS,[Vo]:r.LEQUAL,[cp]:r.EQUAL,[Ho]:r.GEQUAL,[hp]:r.GREATER,[up]:r.NOTEQUAL};function O(M,b){if(b.type!==zt||e.has("OES_texture_float_linear")!==!1||b.magFilter!==St&&b.magFilter!==Do&&b.magFilter!==Ms&&b.magFilter!==yi&&b.minFilter!==St&&b.minFilter!==Do&&b.minFilter!==Ms&&b.minFilter!==yi||_e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(M,r.TEXTURE_WRAP_S,V[b.wrapS]),r.texParameteri(M,r.TEXTURE_WRAP_T,V[b.wrapT]),M!==r.TEXTURE_3D&&M!==r.TEXTURE_2D_ARRAY||r.texParameteri(M,r.TEXTURE_WRAP_R,V[b.wrapR]),r.texParameteri(M,r.TEXTURE_MAG_FILTER,B[b.magFilter]),r.texParameteri(M,r.TEXTURE_MIN_FILTER,B[b.minFilter]),b.compareFunction&&(r.texParameteri(M,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(M,r.TEXTURE_COMPARE_FUNC,H[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xt||b.minFilter!==Ms&&b.minFilter!==yi||b.type===zt&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(M,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Z(M,b){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,b.addEventListener("dispose",T));let P=b.source,y=d.get(P);y===void 0&&(y={},d.set(P,y));let C=(function(D){let N=[];return N.push(D.wrapS),N.push(D.wrapT),N.push(D.wrapR||0),N.push(D.magFilter),N.push(D.minFilter),N.push(D.anisotropy),N.push(D.internalFormat),N.push(D.format),N.push(D.type),N.push(D.generateMipmaps),N.push(D.premultiplyAlpha),N.push(D.flipY),N.push(D.unpackAlignment),N.push(D.colorSpace),N.join()})(b);if(C!==M.__cacheKey){y[C]===void 0&&(y[C]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,U=!0),y[C].usedTimes++;let D=y[M.__cacheKey];D!==void 0&&(y[M.__cacheKey].usedTimes--,D.usedTimes===0&&F(b)),M.__cacheKey=C,M.__webglTexture=y[C].texture}return U}function j(M,b,U){return Math.floor(Math.floor(M/U)/b)}function X(M,b,U){let P=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(P=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(P=r.TEXTURE_3D);let y=Z(M,b),C=b.source;t.bindTexture(P,M.__webglTexture,r.TEXTURE0+U);let D=n.get(C);if(C.version!==D.__version||y===!0){t.activeTexture(r.TEXTURE0+U);let N=He.getPrimaries(He.workingColorSpace),Y=b.colorSpace===bi?null:He.getPrimaries(b.colorSpace),J=b.colorSpace===bi||N===Y?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let z=_(b.image,!1,i.maxTextureSize);z=ye(b,z);let Q=s.convert(b.format,b.colorSpace),K=s.convert(b.type),ne,te=x(b.internalFormat,Q,K,b.colorSpace,b.isVideoTexture);O(P,b);let ae=b.mipmaps,Me=b.isVideoTexture!==!0,Fe=D.__version===void 0||y===!0,Ve=C.dataReady,We=w(b,z);if(b.isDepthTexture)te=S(b.format===Si,b.type),Fe&&(Me?t.texStorage2D(r.TEXTURE_2D,1,te,z.width,z.height):t.texImage2D(r.TEXTURE_2D,0,te,z.width,z.height,0,Q,K,null));else if(b.isDataTexture)if(ae.length>0){Me&&Fe&&t.texStorage2D(r.TEXTURE_2D,We,te,ae[0].width,ae[0].height);for(let pe=0,we=ae.length;pe<we;pe++)ne=ae[pe],Me?Ve&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ne.width,ne.height,Q,K,ne.data):t.texImage2D(r.TEXTURE_2D,pe,te,ne.width,ne.height,0,Q,K,ne.data);b.generateMipmaps=!1}else Me?(Fe&&t.texStorage2D(r.TEXTURE_2D,We,te,z.width,z.height),Ve&&(function(pe,we,qe,ut){let me=pe.updateRanges;if(me.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,we.width,we.height,qe,ut,we.data);else{me.sort((wt,dt)=>wt.start-dt.start);let De=0;for(let wt=1;wt<me.length;wt++){let dt=me[De],Qe=me[wt],Gt=dt.start+dt.count,vn=j(Qe.start,we.width,4),L=j(dt.start,we.width,4);Qe.start<=Gt+1&&vn===L&&j(Qe.start+Qe.count-1,we.width,4)===vn?dt.count=Math.max(dt.count,Qe.start+Qe.count-dt.start):(++De,me[De]=Qe)}me.length=De+1;let ke=r.getParameter(r.UNPACK_ROW_LENGTH),ft=r.getParameter(r.UNPACK_SKIP_PIXELS),Kn=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,we.width);for(let wt=0,dt=me.length;wt<dt;wt++){let Qe=me[wt],Gt=Math.floor(Qe.start/4),vn=Math.ceil(Qe.count/4),L=Gt%we.width,Er=Math.floor(Gt/we.width),Hs=vn;r.pixelStorei(r.UNPACK_SKIP_PIXELS,L),r.pixelStorei(r.UNPACK_SKIP_ROWS,Er),t.texSubImage2D(r.TEXTURE_2D,0,L,Er,Hs,1,qe,ut,we.data)}pe.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ke),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),r.pixelStorei(r.UNPACK_SKIP_ROWS,Kn)}})(b,z,Q,K)):t.texImage2D(r.TEXTURE_2D,0,te,z.width,z.height,0,Q,K,z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Me&&Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,We,te,ae[0].width,ae[0].height,z.depth);for(let pe=0,we=ae.length;pe<we;pe++)if(ne=ae[pe],b.format!==qt)if(Q!==null)if(Me){if(Ve)if(b.layerUpdates.size>0){let qe=Nh(ne.width,ne.height,b.format,b.type);for(let ut of b.layerUpdates){let me=ne.data.subarray(ut*qe/ne.data.BYTES_PER_ELEMENT,(ut+1)*qe/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,ut,ne.width,ne.height,1,Q,me)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ne.width,ne.height,z.depth,Q,ne.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,te,ne.width,ne.height,z.depth,0,ne.data,0,0);else _e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?Ve&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,ne.width,ne.height,z.depth,Q,K,ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,te,ne.width,ne.height,z.depth,0,Q,K,ne.data)}else{Me&&Fe&&t.texStorage2D(r.TEXTURE_2D,We,te,ae[0].width,ae[0].height);for(let pe=0,we=ae.length;pe<we;pe++)ne=ae[pe],b.format!==qt?Q!==null?Me?Ve&&t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,ne.width,ne.height,Q,ne.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,te,ne.width,ne.height,0,ne.data):_e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?Ve&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,ne.width,ne.height,Q,K,ne.data):t.texImage2D(r.TEXTURE_2D,pe,te,ne.width,ne.height,0,Q,K,ne.data)}else if(b.isDataArrayTexture)if(Me){if(Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,We,te,z.width,z.height,z.depth),Ve)if(b.layerUpdates.size>0){let pe=Nh(z.width,z.height,b.format,b.type);for(let we of b.layerUpdates){let qe=z.data.subarray(we*pe/z.data.BYTES_PER_ELEMENT,(we+1)*pe/z.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,we,z.width,z.height,1,Q,K,qe)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,Q,K,z.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,te,z.width,z.height,z.depth,0,Q,K,z.data);else if(b.isData3DTexture)Me?(Fe&&t.texStorage3D(r.TEXTURE_3D,We,te,z.width,z.height,z.depth),Ve&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,Q,K,z.data)):t.texImage3D(r.TEXTURE_3D,0,te,z.width,z.height,z.depth,0,Q,K,z.data);else if(b.isFramebufferTexture){if(Fe)if(Me)t.texStorage2D(r.TEXTURE_2D,We,te,z.width,z.height);else{let pe=z.width,we=z.height;for(let qe=0;qe<We;qe++)t.texImage2D(r.TEXTURE_2D,qe,te,pe,we,0,Q,K,null),pe>>=1,we>>=1}}else if(ae.length>0){if(Me&&Fe){let pe=Ie(ae[0]);t.texStorage2D(r.TEXTURE_2D,We,te,pe.width,pe.height)}for(let pe=0,we=ae.length;pe<we;pe++)ne=ae[pe],Me?Ve&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Q,K,ne):t.texImage2D(r.TEXTURE_2D,pe,te,Q,K,ne);b.generateMipmaps=!1}else if(Me){if(Fe){let pe=Ie(z);t.texStorage2D(r.TEXTURE_2D,We,te,pe.width,pe.height)}Ve&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q,K,z)}else t.texImage2D(r.TEXTURE_2D,0,te,Q,K,z);f(b)&&v(P),D.__version=C.version,b.onUpdate&&b.onUpdate(b)}M.__version=b.version}function le(M,b,U,P,y,C){let D=s.convert(U.format,U.colorSpace),N=s.convert(U.type),Y=x(U.internalFormat,D,N,U.colorSpace),J=n.get(b),z=n.get(U);if(z.__renderTarget=b,!J.__hasExternalTextures){let Q=Math.max(1,b.width>>C),K=Math.max(1,b.height>>C);y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?t.texImage3D(y,C,Y,Q,K,b.depth,0,D,N,null):t.texImage2D(y,C,Y,Q,K,0,D,N,null)}t.bindFramebuffer(r.FRAMEBUFFER,M),oe(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,P,y,z.__webglTexture,0,se(b)):(y===r.TEXTURE_2D||y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,P,y,z.__webglTexture,C),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(M,b,U){if(r.bindRenderbuffer(r.RENDERBUFFER,M),b.depthBuffer){let P=b.depthTexture,y=P&&P.isDepthTexture?P.type:null,C=S(b.stencilBuffer,y),D=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;oe(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se(b),C,b.width,b.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,se(b),C,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,C,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,D,r.RENDERBUFFER,M)}else{let P=b.textures;for(let y=0;y<P.length;y++){let C=P[y],D=s.convert(C.format,C.colorSpace),N=s.convert(C.type),Y=x(C.internalFormat,D,N,C.colorSpace);oe(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se(b),Y,b.width,b.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,se(b),Y,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Y,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function de(M,b,U){let P=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,M),!b.depthTexture||!b.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let y=n.get(b.depthTexture);if(y.__renderTarget=b,y.__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),P){if(y.__webglInit===void 0&&(y.__webglInit=!0,b.depthTexture.addEventListener("dispose",T)),y.__webglTexture===void 0){y.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,y.__webglTexture),O(r.TEXTURE_CUBE_MAP,b.depthTexture);let J=s.convert(b.depthTexture.format),z=s.convert(b.depthTexture.type),Q;b.depthTexture.format===jn?Q=r.DEPTH_COMPONENT24:b.depthTexture.format===Si&&(Q=r.DEPTH24_STENCIL8);for(let K=0;K<6;K++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Q,b.width,b.height,0,J,z,null)}}else G(b.depthTexture,0);let C=y.__webglTexture,D=se(b),N=P?r.TEXTURE_CUBE_MAP_POSITIVE_X+U:r.TEXTURE_2D,Y=b.depthTexture.format===Si?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===jn)oe(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,N,C,0,D):r.framebufferTexture2D(r.FRAMEBUFFER,Y,N,C,0);else{if(b.depthTexture.format!==Si)throw new Error("Unknown depthTexture format");oe(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,N,C,0,D):r.framebufferTexture2D(r.FRAMEBUFFER,Y,N,C,0)}}function ue(M){let b=n.get(M),U=M.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==M.depthTexture){let P=M.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),P){let y=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,P.removeEventListener("dispose",y)};P.addEventListener("dispose",y),b.__depthDisposeCallback=y}b.__boundDepthTexture=P}if(M.depthTexture&&!b.__autoAllocateDepthBuffer)if(U)for(let P=0;P<6;P++)de(b.__webglFramebuffer[P],M,P);else{let P=M.texture.mipmaps;P&&P.length>0?de(b.__webglFramebuffer[0],M,0):de(b.__webglFramebuffer,M,0)}else if(U){b.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[P]),b.__webglDepthbuffer[P]===void 0)b.__webglDepthbuffer[P]=r.createRenderbuffer(),ve(b.__webglDepthbuffer[P],M,!1);else{let y=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,C=b.__webglDepthbuffer[P];r.bindRenderbuffer(r.RENDERBUFFER,C),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,C)}}else{let P=M.texture.mipmaps;if(P&&P.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),ve(b.__webglDepthbuffer,M,!1);else{let y=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,C=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,C),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,C)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let be=[],ee=[];function se(M){return Math.min(i.maxSamples,M.samples)}function oe(M){let b=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ye(M,b){let U=M.colorSpace,P=M.format,y=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||U!==ci&&U!==bi&&(He.getTransfer(U)===Xe?P===qt&&y===kt||_e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xe("WebGLTextures: Unsupported texture color space:",U)),b}function Ie(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=function(){let M=R;return M>=i.maxTextures&&_e("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),R+=1,M},this.resetTextureUnits=function(){R=0},this.setTexture2D=G,this.setTexture2DArray=function(M,b){let U=n.get(M);M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version?X(U,M,b):(M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null),t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+b))},this.setTexture3D=function(M,b){let U=n.get(M);M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version?X(U,M,b):t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+b)},this.setTextureCube=function(M,b){let U=n.get(M);M.isCubeDepthTexture!==!0&&M.version>0&&U.__version!==M.version?(function(P,y,C){if(y.image.length!==6)return;let D=Z(P,y),N=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+C);let Y=n.get(N);if(N.version!==Y.__version||D===!0){t.activeTexture(r.TEXTURE0+C);let J=He.getPrimaries(He.workingColorSpace),z=y.colorSpace===bi?null:He.getPrimaries(y.colorSpace),Q=y.colorSpace===bi||J===z?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let K=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,te=[];for(let me=0;me<6;me++)te[me]=K||ne?ne?y.image[me].image:y.image[me]:_(y.image[me],!0,i.maxCubemapSize),te[me]=ye(y,te[me]);let ae=te[0],Me=s.convert(y.format,y.colorSpace),Fe=s.convert(y.type),Ve=x(y.internalFormat,Me,Fe,y.colorSpace),We=y.isVideoTexture!==!0,pe=Y.__version===void 0||D===!0,we=N.dataReady,qe,ut=w(y,ae);if(O(r.TEXTURE_CUBE_MAP,y),K){We&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ut,Ve,ae.width,ae.height);for(let me=0;me<6;me++){qe=te[me].mipmaps;for(let De=0;De<qe.length;De++){let ke=qe[De];y.format!==qt?Me!==null?We?we&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,ke.width,ke.height,Me,ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,Ve,ke.width,ke.height,0,ke.data):_e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,0,0,ke.width,ke.height,Me,Fe,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De,Ve,ke.width,ke.height,0,Me,Fe,ke.data)}}}else{if(qe=y.mipmaps,We&&pe){qe.length>0&&ut++;let me=Ie(te[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ut,Ve,me.width,me.height)}for(let me=0;me<6;me++)if(ne){We?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,te[me].width,te[me].height,Me,Fe,te[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ve,te[me].width,te[me].height,0,Me,Fe,te[me].data);for(let De=0;De<qe.length;De++){let ke=qe[De].image[me].image;We?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,ke.width,ke.height,Me,Fe,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,Ve,ke.width,ke.height,0,Me,Fe,ke.data)}}else{We?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Me,Fe,te[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ve,Me,Fe,te[me]);for(let De=0;De<qe.length;De++){let ke=qe[De];We?we&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,0,0,Me,Fe,ke.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,De+1,Ve,Me,Fe,ke.image[me])}}}f(y)&&v(r.TEXTURE_CUBE_MAP),Y.__version=N.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version})(U,M,b):t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+b)},this.rebindTextures=function(M,b,U){let P=n.get(M);b!==void 0&&le(P.__webglFramebuffer,M,M.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&ue(M)},this.setupRenderTarget=function(M){let b=M.texture,U=n.get(M),P=n.get(b);M.addEventListener("dispose",I);let y=M.textures,C=M.isWebGLCubeRenderTarget===!0,D=y.length>1;if(D||(P.__webglTexture===void 0&&(P.__webglTexture=r.createTexture()),P.__version=b.version,a.memory.textures++),C){U.__webglFramebuffer=[];for(let N=0;N<6;N++)if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer[N]=[];for(let Y=0;Y<b.mipmaps.length;Y++)U.__webglFramebuffer[N][Y]=r.createFramebuffer()}else U.__webglFramebuffer[N]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){U.__webglFramebuffer=[];for(let N=0;N<b.mipmaps.length;N++)U.__webglFramebuffer[N]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(D)for(let N=0,Y=y.length;N<Y;N++){let J=n.get(y[N]);J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture(),a.memory.textures++)}if(M.samples>0&&oe(M)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let N=0;N<y.length;N++){let Y=y[N];U.__webglColorRenderbuffer[N]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[N]);let J=s.convert(Y.format,Y.colorSpace),z=s.convert(Y.type),Q=x(Y.internalFormat,J,z,Y.colorSpace,M.isXRRenderTarget===!0),K=se(M);r.renderbufferStorageMultisample(r.RENDERBUFFER,K,Q,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+N,r.RENDERBUFFER,U.__webglColorRenderbuffer[N])}r.bindRenderbuffer(r.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(U.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(C){t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture),O(r.TEXTURE_CUBE_MAP,b);for(let N=0;N<6;N++)if(b.mipmaps&&b.mipmaps.length>0)for(let Y=0;Y<b.mipmaps.length;Y++)le(U.__webglFramebuffer[N][Y],M,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+N,Y);else le(U.__webglFramebuffer[N],M,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);f(b)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(D){for(let N=0,Y=y.length;N<Y;N++){let J=y[N],z=n.get(J),Q=r.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Q=M.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,z.__webglTexture),O(Q,J),le(U.__webglFramebuffer,M,J,r.COLOR_ATTACHMENT0+N,Q,0),f(J)&&v(Q)}t.unbindTexture()}else{let N=r.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(N=M.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(N,P.__webglTexture),O(N,b),b.mipmaps&&b.mipmaps.length>0)for(let Y=0;Y<b.mipmaps.length;Y++)le(U.__webglFramebuffer[Y],M,b,r.COLOR_ATTACHMENT0,N,Y);else le(U.__webglFramebuffer,M,b,r.COLOR_ATTACHMENT0,N,0);f(b)&&v(N),t.unbindTexture()}M.depthBuffer&&ue(M)},this.updateRenderTargetMipmap=function(M){let b=M.textures;for(let U=0,P=b.length;U<P;U++){let y=b[U];if(f(y)){let C=g(M),D=n.get(y).__webglTexture;t.bindTexture(C,D),v(C),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(M){if(M.samples>0){if(oe(M)===!1){let b=M.textures,U=M.width,P=M.height,y=r.COLOR_BUFFER_BIT,C=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,D=n.get(M),N=b.length>1;if(N)for(let J=0;J<b.length;J++)t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer);let Y=M.texture.mipmaps;Y&&Y.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,D.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let J=0;J<b.length;J++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(y|=r.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(y|=r.STENCIL_BUFFER_BIT)),N){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,D.__webglColorRenderbuffer[J]);let z=n.get(b[J]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,z,0)}r.blitFramebuffer(0,0,U,P,0,0,U,P,y,r.NEAREST),l===!0&&(be.length=0,ee.length=0,be.push(r.COLOR_ATTACHMENT0+J),M.depthBuffer&&M.resolveDepthBuffer===!1&&(be.push(C),ee.push(C),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ee)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),N)for(let J=0;J<b.length;J++){t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,D.__webglColorRenderbuffer[J]);let z=n.get(b[J]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.TEXTURE_2D,z,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let b=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}},this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=le,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function A0(r,e){return{convert:function(t,n=bi){let i,s=He.getTransfer(n);if(t===kt)return r.UNSIGNED_BYTE;if(t===No)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Uo)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Xc)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===jc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(t===Hc)return r.BYTE;if(t===Wc)return r.SHORT;if(t===pr)return r.UNSIGNED_SHORT;if(t===Lo)return r.INT;if(t===Dn)return r.UNSIGNED_INT;if(t===zt)return r.FLOAT;if(t===mn)return r.HALF_FLOAT;if(t===np)return r.ALPHA;if(t===ip)return r.RGB;if(t===qt)return r.RGBA;if(t===jn)return r.DEPTH_COMPONENT;if(t===Si)return r.DEPTH_STENCIL;if(t===Fo)return r.RED;if(t===Oo)return r.RED_INTEGER;if(t===fr)return r.RG;if(t===qc)return r.RG_INTEGER;if(t===Yc)return r.RGBA_INTEGER;if(t===Bo||t===ko||t===zo||t===Go)if(s===Xe){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===Bo)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===ko)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===zo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Go)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===Bo)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===ko)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===zo)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Go)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Jc||t===Zc||t===Kc||t===$c){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===Jc)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Zc)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Kc)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===$c)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Qc||t===eh||t===th||t===nh||t===ih||t===rh||t===sh){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===Qc||t===eh)return s===Xe?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===th)return s===Xe?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(t===nh)return i.COMPRESSED_R11_EAC;if(t===ih)return i.COMPRESSED_SIGNED_R11_EAC;if(t===rh)return i.COMPRESSED_RG11_EAC;if(t===sh)return i.COMPRESSED_SIGNED_RG11_EAC}if(t===ah||t===oh||t===lh||t===ch||t===hh||t===uh||t===dh||t===ph||t===mh||t===fh||t===gh||t===_h||t===vh||t===xh){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===ah)return s===Xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===oh)return s===Xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===lh)return s===Xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===ch)return s===Xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===hh)return s===Xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===uh)return s===Xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===dh)return s===Xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===ph)return s===Xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===mh)return s===Xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===fh)return s===Xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===gh)return s===Xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===_h)return s===Xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===vh)return s===Xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===xh)return s===Xe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===yh||t===Sh||t===bh){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===yh)return s===Xe?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Sh)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===bh)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Mh||t===wh||t===Th||t===Eh){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Mh)return i.COMPRESSED_RED_RGTC1_EXT;if(t===wh)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Th)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Eh)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===mr?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var Yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new is(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ft({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new ar(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jh=class extends dn{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,_=typeof XRWebGLBinding<"u",f=new Yh,v={},g=t.getContextAttributes(),x=null,S=null,w=[],T=[],I=new ie,F=null,R=new vt;R.viewport=new Ze;let G=new vt;G.viewport=new Ze;let V=[R,G],B=new yo,H=null,O=null;function Z(ee){let se=T.indexOf(ee.inputSource);if(se===-1)return;let oe=w[se];oe!==void 0&&(oe.update(ee.inputSource,ee.frame,c||a),oe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function j(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",X);for(let ee=0;ee<w.length;ee++){let se=T[ee];se!==null&&(T[ee]=null,w[ee].disconnect(se))}H=null,O=null,f.reset();for(let ee in v)delete v[ee];e.setRenderTarget(x),p=null,d=null,u=null,i=null,S=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}function X(ee){for(let se=0;se<ee.removed.length;se++){let oe=ee.removed[se],ye=T.indexOf(oe);ye>=0&&(T[ye]=null,w[ye].disconnect(oe))}for(let se=0;se<ee.added.length;se++){let oe=ee.added[se],ye=T.indexOf(oe);if(ye===-1){for(let M=0;M<w.length;M++){if(M>=T.length){T.push(oe),ye=M;break}if(T[M]===null){T[M]=oe,ye=M;break}}if(ye===-1)break}let Ie=w[ye];Ie&&Ie.connect(oe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let se=w[ee];return se===void 0&&(se=new nr,w[ee]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ee){let se=w[ee];return se===void 0&&(se=new nr,w[ee]=se),se.getGripSpace()},this.getHand=function(ee){let se=w[ee];return se===void 0&&(se=new nr,w[ee]=se),se.getHandSpace()},this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&_e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&_e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",j),i.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,oe=null,ye=null;g.depth&&(ye=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=g.stencil?Si:jn,oe=g.stencil?mr:Dn);let Ie={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Dt(d.textureWidth,d.textureHeight,{format:qt,type:kt,depthTexture:new Hn(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let se={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Dt(p.framebufferWidth,p.framebufferHeight,{format:qt,type:kt,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};let le=new A,ve=new A;function de(ee,se){se===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(se.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;let se=ee.near,oe=ee.far;f.texture!==null&&(f.depthNear>0&&(se=f.depthNear),f.depthFar>0&&(oe=f.depthFar)),B.near=G.near=R.near=se,B.far=G.far=R.far=oe,H===B.near&&O===B.far||(i.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,O=B.far),B.layers.mask=6|ee.layers.mask,R.layers.mask=3&B.layers.mask,G.layers.mask=5&B.layers.mask;let ye=ee.parent,Ie=B.cameras;de(B,ye);for(let M=0;M<Ie.length;M++)de(Ie[M],ye);Ie.length===2?(function(M,b,U){le.setFromMatrixPosition(b.matrixWorld),ve.setFromMatrixPosition(U.matrixWorld);let P=le.distanceTo(ve),y=b.projectionMatrix.elements,C=U.projectionMatrix.elements,D=y[14]/(y[10]-1),N=y[14]/(y[10]+1),Y=(y[9]+1)/y[5],J=(y[9]-1)/y[5],z=(y[8]-1)/y[0],Q=(C[8]+1)/C[0],K=D*z,ne=D*Q,te=P/(-z+Q),ae=te*-z;if(b.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(ae),M.translateZ(te),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert(),y[10]===-1)M.projectionMatrix.copy(b.projectionMatrix),M.projectionMatrixInverse.copy(b.projectionMatrixInverse);else{let Me=D+te,Fe=N+te,Ve=K-ae,We=ne+(P-ae),pe=Y*N/Fe*Me,we=J*N/Fe*Me;M.projectionMatrix.makePerspective(Ve,We,pe,we,Me,Fe),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}})(B,R,G):B.projectionMatrix.copy(R.projectionMatrix),(function(M,b,U){U===null?M.matrix.copy(b.matrixWorld):(M.matrix.copy(U.matrixWorld),M.matrix.invert(),M.matrix.multiply(b.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(b.projectionMatrix),M.projectionMatrixInverse.copy(b.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=2*hi*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)})(ee,B,ye)},this.getCamera=function(){return B},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(B)},this.getCameraTexture=function(ee){return v[ee]};let ue=null,be=new jp;be.setAnimationLoop(function(ee,se){if(h=se.getViewerPose(c||a),m=se,h!==null){let oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ye=!1;oe.length!==B.cameras.length&&(B.cameras.length=0,ye=!0);for(let M=0;M<oe.length;M++){let b=oe[M],U=null;if(p!==null)U=p.getViewport(b);else{let y=u.getViewSubImage(d,b);U=y.viewport,M===0&&(e.setRenderTargetTextures(S,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(S))}let P=V[M];P===void 0&&(P=new vt,P.layers.enable(M),P.viewport=new Ze,V[M]=P),P.matrix.fromArray(b.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(b.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(U.x,U.y,U.width,U.height),M===0&&(B.matrix.copy(P.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ye===!0&&B.cameras.push(P)}let Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let M=u.getDepthInformation(oe[0]);M&&M.isValid&&M.texture&&f.init(M,i.renderState)}if(Ie&&Ie.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let M=0;M<oe.length;M++){let b=oe[M].camera;if(b){let U=v[b];U||(U=new is,v[b]=U);let P=u.getCameraImage(b);U.sourceTexture=P}}}}for(let oe=0;oe<w.length;oe++){let ye=T[oe],Ie=w[oe];ye!==null&&Ie!==void 0&&Ie.update(ye,se,c||a)}ue&&ue(ee,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}),this.setAnimationLoop=function(ee){ue=ee},this.dispose=function(){}}},Ti=new jt,C0=new Ce;function R0(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===Bt&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===Bt&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,Ti.copy(l),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),i.envMapRotation.value.setFromMatrix4(C0.makeRotationFromEuler(Ti)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Ih(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Bt&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function I0(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,m){let _=u.value,f=d+"_"+p;if(m[f]===void 0)return m[f]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let v=m[f];if(typeof _=="number"||typeof _=="boolean"){if(v!==_)return m[f]=_,!0}else if(v.equals(_)===!1)return v.copy(_),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?_e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):_e("WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(f){let v=f.uniforms,g=0,x=16;for(let w=0,T=v.length;w<T;w++){let I=Array.isArray(v[w])?v[w]:[v[w]];for(let F=0,R=I.length;F<R;F++){let G=I[F],V=Array.isArray(G.value)?G.value:[G.value];for(let B=0,H=V.length;B<H;B++){let O=c(V[B]),Z=g%x,j=Z%O.boundary,X=Z+j;g+=j,X!==0&&x-X<O.storage&&(g+=x-X),G.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=g,g+=O.storage}}}let S=g%x;S>0&&(g+=x-S),f.__size=g,f.__cache={}})(u),p=(function(f){let v=(function(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=v;let g=r.createBuffer(),x=f.__size,S=f.usage;return r.bindBuffer(r.UNIFORM_BUFFER,g),r.bufferData(r.UNIFORM_BUFFER,x,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,g),g})(u),i[u.id]=p,u.addEventListener("dispose",h));let m=d.program;n.updateUBOMapping(u,m);let _=e.render.frame;s[u.id]!==_&&((function(f){let v=i[f.id],g=f.uniforms,x=f.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let S=0,w=g.length;S<w;S++){let T=Array.isArray(g[S])?g[S]:[g[S]];for(let I=0,F=T.length;I<F;I++){let R=T[I];if(l(R,S,I,x)===!0){let G=R.__offset,V=Array.isArray(R.value)?R.value:[R.value],B=0;for(let H=0;H<V.length;H++){let O=V[H],Z=c(O);typeof O=="number"||typeof O=="boolean"?(R.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,G+B,R.__data)):O.isMatrix3?(R.__data[0]=O.elements[0],R.__data[1]=O.elements[1],R.__data[2]=O.elements[2],R.__data[3]=0,R.__data[4]=O.elements[3],R.__data[5]=O.elements[4],R.__data[6]=O.elements[5],R.__data[7]=0,R.__data[8]=O.elements[6],R.__data[9]=O.elements[7],R.__data[10]=O.elements[8],R.__data[11]=0):(O.toArray(R.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=_)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var P0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fn=null,Xp=class{constructor(e={}){let{canvas:t=mp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=kt}=e,m;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=p,f=new Set([Yc,qc,Oo]),v=new Set([kt,Dn,pr,mr,No,Uo]),g=new Uint32Array(4),x=new Int32Array(4),S=null,w=null,T=[],I=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,G=!1;this._outputColorSpace=Pt;let V=0,B=0,H=null,O=-1,Z=null,j=new Ze,X=new Ze,le=null,ve=new Ee(0),de=0,ue=t.width,be=t.height,ee=1,se=null,oe=null,ye=new Ze(0,0,ue,be),Ie=new Ze(0,0,ue,be),M=!1,b=new Vn,U=!1,P=!1,y=new Ce,C=new A,D=new Ze,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Y=!1;function J(){return H===null?ee:1}let z,Q,K,ne,te,ae,Me,Fe,Ve,We,pe,we,qe,ut,me,De,ke,ft,Kn,wt,dt,Qe,Gt,vn,L=n;function Er(E,k){return t.getContext(E,k)}try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",Su,!1),t.addEventListener("webglcontextrestored",bu,!1),t.addEventListener("webglcontextcreationerror",Mu,!1),L===null){let k="webgl2";if(L=Er(k,E),L===null)throw Er(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw xe("WebGLRenderer: "+E.message),E}function Hs(){z=new ig(L),z.init(),Qe=new A0(L,z),Q=new $f(L,z,e,Qe),K=new T0(L,z),Q.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),ne=new ag(L),te=new p0,ae=new E0(L,z,K,te,Q,Qe,ne),Me=new eg(R),Fe=new ng(R),Ve=new qf(L),Gt=new Zf(L,Ve),We=new rg(L,Ve,ne,Gt),pe=new lg(L,We,Ve,ne),Kn=new og(L,Q,ae),De=new Qf(te),we=new d0(R,Me,Fe,z,Q,Gt,De),qe=new R0(R,te),ut=new f0,me=new y0(z),ft=new Jf(R,Me,Fe,K,pe,m,l),ke=new M0(R,pe,Q),vn=new I0(L,ne,Q,K),wt=new Kf(L,z,ne),dt=new sg(L,z,ne),ne.programs=we.programs,R.capabilities=Q,R.extensions=z,R.properties=te,R.renderLists=ut,R.shadowMap=ke,R.state=K,R.info=ne}Hs(),_!==kt&&(F=new hg(_,t.width,t.height,i,s));let it=new Jh(R,L);function Su(E){E.preventDefault(),jr("WebGLRenderer: Context Lost."),G=!0}function bu(){jr("WebGLRenderer: Context Restored."),G=!1;let E=ne.autoReset,k=ke.enabled,q=ke.autoUpdate,$=ke.needsUpdate,W=ke.type;Hs(),ne.autoReset=E,ke.enabled=k,ke.autoUpdate=q,ke.needsUpdate=$,ke.type=W}function Mu(E){xe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function wu(E){let k=E.target;k.removeEventListener("dispose",wu),(function(q){(function($){let W=te.get($).programs;W!==void 0&&(W.forEach(function(re){we.releaseProgram(re)}),$.isShaderMaterial&&we.releaseShaderCache($))})(q),te.remove(q)})(k)}function Tu(E,k,q){E.transparent===!0&&E.side===pn&&E.forceSinglePass===!1?(E.side=Bt,E.needsUpdate=!0,Xs(E,k,q),E.side=hr,E.needsUpdate=!0,Xs(E,k,q),E.side=pn):Xs(E,k,q)}this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=z.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=z.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(ue,be,!1))},this.getSize=function(E){return E.set(ue,be)},this.setSize=function(E,k,q=!0){it.isPresenting?_e("WebGLRenderer: Can't change size while VR device is presenting."):(ue=E,be=k,t.width=Math.floor(E*ee),t.height=Math.floor(k*ee),q===!0&&(t.style.width=E+"px",t.style.height=k+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,E,k))},this.getDrawingBufferSize=function(E){return E.set(ue*ee,be*ee).floor()},this.setDrawingBufferSize=function(E,k,q){ue=E,be=k,ee=q,t.width=Math.floor(E*q),t.height=Math.floor(k*q),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(_!==kt){if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(E||[])}else console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(ye)},this.setViewport=function(E,k,q,$){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,k,q,$),K.viewport(j.copy(ye).multiplyScalar(ee).round())},this.getScissor=function(E){return E.copy(Ie)},this.setScissor=function(E,k,q,$){E.isVector4?Ie.set(E.x,E.y,E.z,E.w):Ie.set(E,k,q,$),K.scissor(X.copy(Ie).multiplyScalar(ee).round())},this.getScissorTest=function(){return M},this.setScissorTest=function(E){K.setScissorTest(M=E)},this.setOpaqueSort=function(E){se=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,q=!0){let $=0;if(E){let W=!1;if(H!==null){let re=H.texture.format;W=f.has(re)}if(W){let re=H.texture.type,he=v.has(re),fe=ft.getClearColor(),ge=ft.getClearAlpha(),Ae=fe.r,Le=fe.g,Te=fe.b;he?(g[0]=Ae,g[1]=Le,g[2]=Te,g[3]=ge,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Ae,x[1]=Le,x[2]=Te,x[3]=ge,L.clearBufferiv(L.COLOR,0,x))}else $|=L.COLOR_BUFFER_BIT}k&&($|=L.DEPTH_BUFFER_BIT),q&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Su,!1),t.removeEventListener("webglcontextrestored",bu,!1),t.removeEventListener("webglcontextcreationerror",Mu,!1),ft.dispose(),ut.dispose(),me.dispose(),te.dispose(),Me.dispose(),Fe.dispose(),pe.dispose(),Gt.dispose(),vn.dispose(),we.dispose(),it.dispose(),it.removeEventListener("sessionstart",Eu),it.removeEventListener("sessionend",Au),$n.stop()},this.renderBufferDirect=function(E,k,q,$,W,re){k===null&&(k=N);let he=W.isMesh&&W.matrixWorld.determinant()<0,fe=(function(Ge,et,mt,Be,Re){et.isScene!==!0&&(et=N),ae.resetTextureUnits();let Yt=et.fog,cl=Be.isMeshStandardMaterial?et.environment:null,js=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ci,Ln=(Be.isMeshStandardMaterial?Fe:Me).get(Be.envMap||cl),nn=Be.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,Ri=!!mt.attributes.tangent&&(!!Be.normalMap||Be.anisotropy>0),xn=!!mt.morphAttributes.position,hl=!!mt.morphAttributes.normal,Ii=!!mt.morphAttributes.color,Lu=tn;Be.toneMapped&&(H!==null&&H.isXRRenderTarget!==!0||(Lu=R.toneMapping));let Nu=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,$m=Nu!==void 0?Nu.length:0,ze=te.get(Be),Qn=w.state.lights;if(U===!0&&(P===!0||Ge!==Z)){let Vt=Ge===Z&&Be.id===O;De.setState(Be,Ge,Vt)}let Jt=!1;Be.version===ze.__version?ze.needsLights&&ze.lightsStateVersion!==Qn.state.version||ze.outputColorSpace!==js||Re.isBatchedMesh&&ze.batching===!1?Jt=!0:Re.isBatchedMesh||ze.batching!==!0?Re.isBatchedMesh&&ze.batchingColor===!0&&Re.colorTexture===null||Re.isBatchedMesh&&ze.batchingColor===!1&&Re.colorTexture!==null||Re.isInstancedMesh&&ze.instancing===!1?Jt=!0:Re.isInstancedMesh||ze.instancing!==!0?Re.isSkinnedMesh&&ze.skinning===!1?Jt=!0:Re.isSkinnedMesh||ze.skinning!==!0?Re.isInstancedMesh&&ze.instancingColor===!0&&Re.instanceColor===null||Re.isInstancedMesh&&ze.instancingColor===!1&&Re.instanceColor!==null||Re.isInstancedMesh&&ze.instancingMorph===!0&&Re.morphTexture===null||Re.isInstancedMesh&&ze.instancingMorph===!1&&Re.morphTexture!==null||ze.envMap!==Ln||Be.fog===!0&&ze.fog!==Yt?Jt=!0:ze.numClippingPlanes===void 0||ze.numClippingPlanes===De.numPlanes&&ze.numIntersection===De.numIntersection?(ze.vertexAlphas!==nn||ze.vertexTangents!==Ri||ze.morphTargets!==xn||ze.morphNormals!==hl||ze.morphColors!==Ii||ze.toneMapping!==Lu||ze.morphTargetsCount!==$m)&&(Jt=!0):Jt=!0:Jt=!0:Jt=!0:Jt=!0:(Jt=!0,ze.__version=Be.version);let ei=ze.currentProgram;Jt===!0&&(ei=Xs(Be,et,Re));let Uu=!1,Ar=!1,ul=!1,tt=ei.getUniforms(),rn=ze.uniforms;if(K.useProgram(ei.program)&&(Uu=!0,Ar=!0,ul=!0),Be.id!==O&&(O=Be.id,Ar=!0),Uu||Z!==Ge){K.buffers.depth.getReversed()&&Ge.reversedDepth!==!0&&(Ge._reversedDepth=!0,Ge.updateProjectionMatrix()),tt.setValue(L,"projectionMatrix",Ge.projectionMatrix),tt.setValue(L,"viewMatrix",Ge.matrixWorldInverse);let Vt=tt.map.cameraPosition;Vt!==void 0&&Vt.setValue(L,C.setFromMatrixPosition(Ge.matrixWorld)),Q.logarithmicDepthBuffer&&tt.setValue(L,"logDepthBufFC",2/(Math.log(Ge.far+1)/Math.LN2)),(Be.isMeshPhongMaterial||Be.isMeshToonMaterial||Be.isMeshLambertMaterial||Be.isMeshBasicMaterial||Be.isMeshStandardMaterial||Be.isShaderMaterial)&&tt.setValue(L,"isOrthographic",Ge.isOrthographicCamera===!0),Z!==Ge&&(Z=Ge,Ar=!0,ul=!0)}if(ze.needsLights&&(Qn.state.directionalShadowMap.length>0&&tt.setValue(L,"directionalShadowMap",Qn.state.directionalShadowMap,ae),Qn.state.spotShadowMap.length>0&&tt.setValue(L,"spotShadowMap",Qn.state.spotShadowMap,ae),Qn.state.pointShadowMap.length>0&&tt.setValue(L,"pointShadowMap",Qn.state.pointShadowMap,ae)),Re.isSkinnedMesh){tt.setOptional(L,Re,"bindMatrix"),tt.setOptional(L,Re,"bindMatrixInverse");let Vt=Re.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),tt.setValue(L,"boneTexture",Vt.boneTexture,ae))}Re.isBatchedMesh&&(tt.setOptional(L,Re,"batchingTexture"),tt.setValue(L,"batchingTexture",Re._matricesTexture,ae),tt.setOptional(L,Re,"batchingIdTexture"),tt.setValue(L,"batchingIdTexture",Re._indirectTexture,ae),tt.setOptional(L,Re,"batchingColorTexture"),Re._colorsTexture!==null&&tt.setValue(L,"batchingColorTexture",Re._colorsTexture,ae));let dl=mt.morphAttributes;dl.position===void 0&&dl.normal===void 0&&dl.color===void 0||Kn.update(Re,mt,ei),(Ar||ze.receiveShadow!==Re.receiveShadow)&&(ze.receiveShadow=Re.receiveShadow,tt.setValue(L,"receiveShadow",Re.receiveShadow)),Be.isMeshGouraudMaterial&&Be.envMap!==null&&(rn.envMap.value=Ln,rn.flipEnvMap.value=Ln.isCubeTexture&&Ln.isRenderTargetTexture===!1?-1:1),Be.isMeshStandardMaterial&&Be.envMap===null&&et.environment!==null&&(rn.envMapIntensity.value=et.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=(fn===null&&(fn=new ir(P0,16,16,fr,mn),fn.name="DFG_LUT",fn.minFilter=St,fn.magFilter=St,fn.wrapS=zn,fn.wrapT=zn,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn)),Ar&&(tt.setValue(L,"toneMappingExposure",R.toneMappingExposure),ze.needsLights&&(Zt=ul,(sn=rn).ambientLightColor.needsUpdate=Zt,sn.lightProbe.needsUpdate=Zt,sn.directionalLights.needsUpdate=Zt,sn.directionalLightShadows.needsUpdate=Zt,sn.pointLights.needsUpdate=Zt,sn.pointLightShadows.needsUpdate=Zt,sn.spotLights.needsUpdate=Zt,sn.spotLightShadows.needsUpdate=Zt,sn.rectAreaLights.needsUpdate=Zt,sn.hemisphereLights.needsUpdate=Zt),Yt&&Be.fog===!0&&qe.refreshFogUniforms(rn,Yt),qe.refreshMaterialUniforms(rn,Be,ee,be,w.state.transmissionRenderTarget[Ge.id]),_r.upload(L,Pu(ze),rn,ae));var sn,Zt;if(Be.isShaderMaterial&&Be.uniformsNeedUpdate===!0&&(_r.upload(L,Pu(ze),rn,ae),Be.uniformsNeedUpdate=!1),Be.isSpriteMaterial&&tt.setValue(L,"center",Re.center),tt.setValue(L,"modelViewMatrix",Re.modelViewMatrix),tt.setValue(L,"normalMatrix",Re.normalMatrix),tt.setValue(L,"modelMatrix",Re.matrixWorld),Be.isShaderMaterial||Be.isRawShaderMaterial){let Vt=Be.uniformsGroups;for(let pl=0,Qm=Vt.length;pl<Qm;pl++){let Fu=Vt[pl];vn.update(Fu,ei),vn.bind(Fu,ei)}}return ei})(E,k,q,$,W);K.setMaterial($,he);let ge=q.index,Ae=1;if($.wireframe===!0){if(ge=We.getWireframeAttribute(q),ge===void 0)return;Ae=2}let Le=q.drawRange,Te=q.attributes.position,Oe=Le.start*Ae,Ke=(Le.start+Le.count)*Ae;re!==null&&(Oe=Math.max(Oe,re.start*Ae),Ke=Math.min(Ke,(re.start+re.count)*Ae)),ge!==null?(Oe=Math.max(Oe,0),Ke=Math.min(Ke,ge.count)):Te!=null&&(Oe=Math.max(Oe,0),Ke=Math.min(Ke,Te.count));let ot=Ke-Oe;if(ot<0||ot===1/0)return;let st;Gt.setup(W,$,fe,q,ge);let $e=wt;if(ge!==null&&(st=Ve.get(ge),$e=dt,$e.setIndex(st)),W.isMesh)$.wireframe===!0?(K.setLineWidth($.wireframeLinewidth*J()),$e.setMode(L.LINES)):$e.setMode(L.TRIANGLES);else if(W.isLine){let Ge=$.linewidth;Ge===void 0&&(Ge=1),K.setLineWidth(Ge*J()),W.isLineSegments?$e.setMode(L.LINES):W.isLineLoop?$e.setMode(L.LINE_LOOP):$e.setMode(L.LINE_STRIP)}else W.isPoints?$e.setMode(L.POINTS):W.isSprite&&$e.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)$i("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))$e.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ge=W._multiDrawStarts,et=W._multiDrawCounts,mt=W._multiDrawCount,Be=ge?Ve.get(ge).bytesPerElement:1,Re=te.get($).currentProgram.getUniforms();for(let Yt=0;Yt<mt;Yt++)Re.setValue(L,"_gl_DrawID",Yt),$e.render(Ge[Yt]/Be,et[Yt])}else if(W.isInstancedMesh)$e.renderInstances(Oe,ot,W.count);else if(q.isInstancedBufferGeometry){let Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,et=Math.min(q.instanceCount,Ge);$e.renderInstances(Oe,ot,et)}else $e.render(Oe,ot)},this.compile=function(E,k,q=null){q===null&&(q=E),w=me.get(q),w.init(k),I.push(w),q.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),E!==q&&E.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights();let $=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let re=W.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){let fe=re[he];Tu(fe,q,W),$.add(fe)}else Tu(re,q,W),$.add(re)}),w=I.pop(),$},this.compileAsync=function(E,k,q=null){let $=this.compile(E,k,q);return new Promise(W=>{function re(){$.forEach(function(he){te.get(he).currentProgram.isReady()&&$.delete(he)}),$.size!==0?setTimeout(re,10):W(E)}z.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let ol=null;function Eu(){$n.stop()}function Au(){$n.start()}let $n=new jp;function ll(E,k,q,$){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||b.intersectsSprite(E)){$&&D.setFromMatrixPosition(E.matrixWorld).applyMatrix4(y);let re=pe.update(E),he=E.material;he.visible&&S.push(E,re,he,q,D.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||b.intersectsObject(E))){let re=pe.update(E),he=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),D.copy(E.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),D.copy(re.boundingSphere.center)),D.applyMatrix4(E.matrixWorld).applyMatrix4(y)),Array.isArray(he)){let fe=re.groups;for(let ge=0,Ae=fe.length;ge<Ae;ge++){let Le=fe[ge],Te=he[Le.materialIndex];Te&&Te.visible&&S.push(E,re,Te,q,D.z,Le)}}else he.visible&&S.push(E,re,he,q,D.z,null)}}let W=E.children;for(let re=0,he=W.length;re<he;re++)ll(W[re],k,q,$)}function Cu(E,k,q,$){let{opaque:W,transmissive:re,transparent:he}=E;w.setupLightsView(q),U===!0&&De.setGlobalState(R.clippingPlanes,q),$&&K.viewport(j.copy($)),W.length>0&&Ws(W,k,q),re.length>0&&Ws(re,k,q),he.length>0&&Ws(he,k,q),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Ru(E,k,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){let Te=z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new Dt(1,1,{generateMipmaps:!0,type:Te?mn:kt,minFilter:yi,samples:Q.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace})}let W=w.state.transmissionRenderTarget[$.id],re=$.viewport||j;W.setSize(re.z*R.transmissionResolutionScale,re.w*R.transmissionResolutionScale);let he=R.getRenderTarget(),fe=R.getActiveCubeFace(),ge=R.getActiveMipmapLevel();R.setRenderTarget(W),R.getClearColor(ve),de=R.getClearAlpha(),de<1&&R.setClearColor(16777215,.5),R.clear(),Y&&ft.render(q);let Ae=R.toneMapping;R.toneMapping=tn;let Le=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),U===!0&&De.setGlobalState(R.clippingPlanes,$),Ws(E,q,$),ae.updateMultisampleRenderTarget(W),ae.updateRenderTargetMipmap(W),z.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Oe=0,Ke=k.length;Oe<Ke;Oe++){let ot=k[Oe],{object:st,geometry:$e,material:Ge,group:et}=ot;if(Ge.side===pn&&st.layers.test($.layers)){let mt=Ge.side;Ge.side=Bt,Ge.needsUpdate=!0,Iu(st,q,$,$e,Ge,et),Ge.side=mt,Ge.needsUpdate=!0,Te=!0}}Te===!0&&(ae.updateMultisampleRenderTarget(W),ae.updateRenderTargetMipmap(W))}R.setRenderTarget(he,fe,ge),R.setClearColor(ve,de),Le!==void 0&&($.viewport=Le),R.toneMapping=Ae}function Ws(E,k,q){let $=k.isScene===!0?k.overrideMaterial:null;for(let W=0,re=E.length;W<re;W++){let he=E[W],{object:fe,geometry:ge,group:Ae}=he,Le=he.material;Le.allowOverride===!0&&$!==null&&(Le=$),fe.layers.test(q.layers)&&Iu(fe,k,q,ge,Le,Ae)}}function Iu(E,k,q,$,W,re){E.onBeforeRender(R,k,q,$,W,re),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(R,k,q,$,E,re),W.transparent===!0&&W.side===pn&&W.forceSinglePass===!1?(W.side=Bt,W.needsUpdate=!0,R.renderBufferDirect(q,k,$,W,E,re),W.side=hr,W.needsUpdate=!0,R.renderBufferDirect(q,k,$,W,E,re),W.side=pn):R.renderBufferDirect(q,k,$,W,E,re),E.onAfterRender(R,k,q,$,W,re)}function Xs(E,k,q){k.isScene!==!0&&(k=N);let $=te.get(E),W=w.state.lights,re=w.state.shadowsArray,he=W.state.version,fe=we.getParameters(E,W.state,re,k,q),ge=we.getProgramCacheKey(fe),Ae=$.programs;$.environment=E.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(E.isMeshStandardMaterial?Fe:Me).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",wu),Ae=new Map,$.programs=Ae);let Le=Ae.get(ge);if(Le!==void 0){if($.currentProgram===Le&&$.lightsStateVersion===he)return Du(E,fe),Le}else fe.uniforms=we.getUniforms(E),E.onBeforeCompile(fe,R),Le=we.acquireProgram(fe,ge),Ae.set(ge,Le),$.uniforms=fe.uniforms;let Te=$.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Te.clippingPlanes=De.uniform),Du(E,fe),$.needsLights=(function(Oe){return Oe.isMeshLambertMaterial||Oe.isMeshToonMaterial||Oe.isMeshPhongMaterial||Oe.isMeshStandardMaterial||Oe.isShadowMaterial||Oe.isShaderMaterial&&Oe.lights===!0})(E),$.lightsStateVersion=he,$.needsLights&&(Te.ambientLightColor.value=W.state.ambient,Te.lightProbe.value=W.state.probe,Te.directionalLights.value=W.state.directional,Te.directionalLightShadows.value=W.state.directionalShadow,Te.spotLights.value=W.state.spot,Te.spotLightShadows.value=W.state.spotShadow,Te.rectAreaLights.value=W.state.rectArea,Te.ltc_1.value=W.state.rectAreaLTC1,Te.ltc_2.value=W.state.rectAreaLTC2,Te.pointLights.value=W.state.point,Te.pointLightShadows.value=W.state.pointShadow,Te.hemisphereLights.value=W.state.hemi,Te.directionalShadowMap.value=W.state.directionalShadowMap,Te.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Te.spotShadowMap.value=W.state.spotShadowMap,Te.spotLightMatrix.value=W.state.spotLightMatrix,Te.spotLightMap.value=W.state.spotLightMap,Te.pointShadowMap.value=W.state.pointShadowMap,Te.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=Le,$.uniformsList=null,Le}function Pu(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=_r.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Du(E,k){let q=te.get(E);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}$n.setAnimationLoop(function(E){ol&&ol(E)}),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(E){ol=E,it.setAnimationLoop(E),E===null?$n.stop():$n.start()},it.addEventListener("sessionstart",Eu),it.addEventListener("sessionend",Au),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0)return void xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(G===!0)return;let q=it.enabled===!0&&it.isPresenting===!0,$=F!==null&&(H===null||q)&&F.begin(R,H);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),it.enabled!==!0||it.isPresenting!==!0||F!==null&&F.isCompositing()!==!1||(it.cameraAutoUpdate===!0&&it.updateCamera(k),k=it.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,k,H),w=me.get(E,I.length),w.init(k),I.push(w),y.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),b.setFromProjectionMatrix(y,In,k.reversedDepth),P=this.localClippingEnabled,U=De.init(this.clippingPlanes,P),S=ut.get(E,T.length),S.init(),T.push(S),it.enabled===!0&&it.isPresenting===!0){let re=R.xr.getDepthSensingMesh();re!==null&&ll(re,k,-1/0,R.sortObjects)}ll(E,k,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(se,oe),Y=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Y&&ft.addToRenderList(S,E),this.info.render.frame++,U===!0&&De.beginShadows();let W=w.state.shadowsArray;if(ke.render(W,E,k),U===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&F.hasRenderPass())===!1){let re=S.opaque,he=S.transmissive;if(w.setupLights(),k.isArrayCamera){let fe=k.cameras;if(he.length>0)for(let ge=0,Ae=fe.length;ge<Ae;ge++)Ru(re,he,E,fe[ge]);Y&&ft.render(E);for(let ge=0,Ae=fe.length;ge<Ae;ge++){let Le=fe[ge];Cu(S,E,Le,Le.viewport)}}else he.length>0&&Ru(re,he,E,k),Y&&ft.render(E),Cu(S,E,k)}H!==null&&B===0&&(ae.updateMultisampleRenderTarget(H),ae.updateRenderTargetMipmap(H)),$&&F.end(R),E.isScene===!0&&E.onAfterRender(R,E,k),Gt.resetDefaultState(),O=-1,Z=null,I.pop(),I.length>0?(w=I[I.length-1],U===!0&&De.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,T.pop(),S=T.length>0?T[T.length-1]:null},this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(E,k,q){let $=te.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),te.get(E.texture).__webglTexture=k,te.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let q=te.get(E);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};let Jm=L.createFramebuffer();this.setRenderTarget=function(E,k=0,q=0){H=E,V=k,B=q;let $=null,W=!1,re=!1;if(E){let he=te.get(E);if(he.__useDefaultFramebuffer!==void 0)return K.bindFramebuffer(L.FRAMEBUFFER,he.__webglFramebuffer),j.copy(E.viewport),X.copy(E.scissor),le=E.scissorTest,K.viewport(j),K.scissor(X),K.setScissorTest(le),void(O=-1);if(he.__webglFramebuffer===void 0)ae.setupRenderTarget(E);else if(he.__hasExternalTextures)ae.rebindTextures(E,te.get(E.texture).__webglTexture,te.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ae=E.depthTexture;if(he.__boundDepthTexture!==Ae){if(Ae!==null&&te.has(Ae)&&(E.width!==Ae.image.width||E.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(E)}}let fe=E.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(re=!0);let ge=te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=Array.isArray(ge[k])?ge[k][q]:ge[k],W=!0):$=E.samples>0&&ae.useMultisampledRTT(E)===!1?te.get(E).__webglMultisampledFramebuffer:Array.isArray(ge)?ge[q]:ge,j.copy(E.viewport),X.copy(E.scissor),le=E.scissorTest}else j.copy(ye).multiplyScalar(ee).floor(),X.copy(Ie).multiplyScalar(ee).floor(),le=M;if(q!==0&&($=Jm),K.bindFramebuffer(L.FRAMEBUFFER,$)&&K.drawBuffers(E,$),K.viewport(j),K.scissor(X),K.setScissorTest(le),W){let he=te.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,he.__webglTexture,q)}else if(re){let he=k;for(let fe=0;fe<E.textures.length;fe++){let ge=te.get(E.textures[fe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+fe,ge.__webglTexture,q,he)}}else if(E!==null&&q!==0){let he=te.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,he.__webglTexture,q)}O=-1},this.readRenderTargetPixels=function(E,k,q,$,W,re,he,fe=0){if(!E||!E.isWebGLRenderTarget)return void xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){K.bindFramebuffer(L.FRAMEBUFFER,ge);try{let Ae=E.textures[fe],Le=Ae.format,Te=Ae.type;if(!Q.textureFormatReadable(Le))return void xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Te))return void xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");k>=0&&k<=E.width-$&&q>=0&&q<=E.height-W&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),L.readPixels(k,q,$,W,Qe.convert(Le),Qe.convert(Te),re))}finally{let Ae=H!==null?te.get(H).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,k,q,$,W,re,he,fe=0){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){if(k>=0&&k<=E.width-$&&q>=0&&q<=E.height-W){K.bindFramebuffer(L.FRAMEBUFFER,ge);let Ae=E.textures[fe],Le=Ae.format,Te=Ae.type;if(!Q.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Oe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Oe),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),L.readPixels(k,q,$,W,Qe.convert(Le),Qe.convert(Te),0);let Ke=H!==null?te.get(H).__webglFramebuffer:null;K.bindFramebuffer(L.FRAMEBUFFER,Ke);let ot=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await fp(L,ot,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Oe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(Oe),L.deleteSync(ot),re}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,q=0){let $=Math.pow(2,-q),W=Math.floor(E.image.width*$),re=Math.floor(E.image.height*$),he=k!==null?k.x:0,fe=k!==null?k.y:0;ae.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,he,fe,W,re),K.unbindTexture()};let Zm=L.createFramebuffer(),Km=L.createFramebuffer();this.copyTextureToTexture=function(E,k,q=null,$=null,W=0,re=null){let he,fe,ge,Ae,Le,Te,Oe,Ke,ot;re===null&&(W!==0?($i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=W,W=0):re=0);let st=E.isCompressedTexture?E.mipmaps[re]:E.image;if(q!==null)he=q.max.x-q.min.x,fe=q.max.y-q.min.y,ge=q.isBox3?q.max.z-q.min.z:1,Ae=q.min.x,Le=q.min.y,Te=q.isBox3?q.min.z:0;else{let nn=Math.pow(2,-W);he=Math.floor(st.width*nn),fe=Math.floor(st.height*nn),ge=E.isDataArrayTexture?st.depth:E.isData3DTexture?Math.floor(st.depth*nn):1,Ae=0,Le=0,Te=0}$!==null?(Oe=$.x,Ke=$.y,ot=$.z):(Oe=0,Ke=0,ot=0);let $e=Qe.convert(k.format),Ge=Qe.convert(k.type),et;k.isData3DTexture?(ae.setTexture3D(k,0),et=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ae.setTexture2DArray(k,0),et=L.TEXTURE_2D_ARRAY):(ae.setTexture2D(k,0),et=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);let mt=L.getParameter(L.UNPACK_ROW_LENGTH),Be=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Re=L.getParameter(L.UNPACK_SKIP_PIXELS),Yt=L.getParameter(L.UNPACK_SKIP_ROWS),cl=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,st.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),L.pixelStorei(L.UNPACK_SKIP_ROWS,Le),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Te);let js=E.isDataArrayTexture||E.isData3DTexture,Ln=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let nn=te.get(E),Ri=te.get(k),xn=te.get(nn.__renderTarget),hl=te.get(Ri.__renderTarget);K.bindFramebuffer(L.READ_FRAMEBUFFER,xn.__webglFramebuffer),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,hl.__webglFramebuffer);for(let Ii=0;Ii<ge;Ii++)js&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,te.get(E).__webglTexture,W,Te+Ii),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,te.get(k).__webglTexture,re,ot+Ii)),L.blitFramebuffer(Ae,Le,he,fe,Oe,Ke,he,fe,L.DEPTH_BUFFER_BIT,L.NEAREST);K.bindFramebuffer(L.READ_FRAMEBUFFER,null),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||te.has(E)){let nn=te.get(E),Ri=te.get(k);K.bindFramebuffer(L.READ_FRAMEBUFFER,Zm),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,Km);for(let xn=0;xn<ge;xn++)js?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,nn.__webglTexture,W,Te+xn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,nn.__webglTexture,W),Ln?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ri.__webglTexture,re,ot+xn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ri.__webglTexture,re),W!==0?L.blitFramebuffer(Ae,Le,he,fe,Oe,Ke,he,fe,L.COLOR_BUFFER_BIT,L.NEAREST):Ln?L.copyTexSubImage3D(et,re,Oe,Ke,ot+xn,Ae,Le,he,fe):L.copyTexSubImage2D(et,re,Oe,Ke,Ae,Le,he,fe);K.bindFramebuffer(L.READ_FRAMEBUFFER,null),K.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ln?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(et,re,Oe,Ke,ot,he,fe,ge,$e,Ge,st.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(et,re,Oe,Ke,ot,he,fe,ge,$e,st.data):L.texSubImage3D(et,re,Oe,Ke,ot,he,fe,ge,$e,Ge,st):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,re,Oe,Ke,he,fe,$e,Ge,st.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,re,Oe,Ke,st.width,st.height,$e,st.data):L.texSubImage2D(L.TEXTURE_2D,re,Oe,Ke,he,fe,$e,Ge,st);L.pixelStorei(L.UNPACK_ROW_LENGTH,mt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Be),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Re),L.pixelStorei(L.UNPACK_SKIP_ROWS,Yt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,cl),re===0&&k.generateMipmaps&&L.generateMipmap(et),K.unbindTexture()},this.initRenderTarget=function(E){te.get(E).__webglFramebuffer===void 0&&ae.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ae.setTextureCube(E,0):E.isData3DTexture?ae.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ae.setTexture2DArray(E,0):ae.setTexture2D(E,0),K.unbindTexture()},this.resetState=function(){V=0,B=0,H=null,K.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}};var D0=new Set([429,500,502,503,504]),L0=[300,900,2e3,4e3,8e3],N0=.25;function U0(r,{delays:e=L0,wait:t=i=>new Promise(s=>setTimeout(s,i)),random:n=Math.random}={}){return async(i,s)=>{if((s?.method??i?.method??"GET").toUpperCase()!=="GET")return r(i,s);for(let o=0;;o++){let l=null,c=null;try{if(l=await r(i,s),!D0.has(l.status))return l}catch(u){c=u}let h=(s?.signal??i?.signal)?.aborted;if(o>=e.length||h){if(c)throw c;return l}await t(e[o]*(1+N0*(n()*2-1)))}}}function Kp(){if(typeof window>"u"||typeof window.fetch!="function"||window.fetch.retrying)return;let r=U0(window.fetch.bind(window)),e=n=>{try{return new URL(n?.url??n,location.href).origin===location.origin}catch{return!1}},t=window.fetch.bind(window);window.fetch=Object.assign((n,i)=>e(n)?r(n,i):t(n,i),{retrying:!0})}var ky="nocache";function Is(r){return typeof window<"u"&&window.__NOCACHE_URL?.(r)||r}ws.setURLModifier(Is);Kp();var Ei=0,Zh=[],Kh=[],Rs=ws,{itemStart:F0,itemEnd:O0}=Rs;Rs.itemStart=r=>{Ei++,F0.call(Rs,r)};Rs.itemEnd=r=>{Ei=Math.max(0,Ei-1),O0.call(Rs,r);for(let e of Kh)e();if(Ei===0){let e=Zh;Zh=[],Kh=[];for(let t of e)t()}};function zy(r=null){if(Ei===0)return Promise.resolve();let e=Ei;return r&&Kh.push(()=>r(Math.min(1,(e-Ei)/e))),new Promise(t=>Zh.push(t))}function Gy(){document.getElementById("initial-loading")?.remove()}var $h=class{constructor(){this.entries=new Map,this.shared=new Map}get(e,t,n){let i=`${e}:${t}`;return this.shared.has(i)||this.shared.set(i,n()),this.shared.get(i)}load(e,t,n){let i=`${e}:${t}`;if(this.entries.has(i))return this.entries.get(i);let s=Promise.resolve().then(n);return this.entries.set(i,s),s.catch(()=>{this.entries.get(i)===s&&this.entries.delete(i)}),s}},Qp=new $h;function em(r){return globalThis.document?.baseURI?new URL(r,document.baseURI).href:r.replace(/^\.\//,"")}async function tm(r){let e=await fetch(Is(r));if(!e.ok)throw new Error(`${r}: HTTP ${e.status}`);return e}var Wy=r=>Qp.load("json",em(r),async()=>(await tm(r)).json()),nm=r=>Qp.load("bytes",em(r),async()=>(await tm(r)).arrayBuffer());function $p(r){return Array.isArray(r)?r.map($p):r&&typeof r=="object"?Object.fromEntries(Object.entries(r).map(([e,t])=>[e,$p(t)])):r}var Ps=(r,e,t)=>Number.isFinite(r+e+t),im=1e-6,Jo=["pointerdown","pointerup","keydown","touchstart","touchend","click"],B0=24,k0=2,z0=.08,G0=60,V0=.02,H0=10,W0=.55,X0=1.6,j0=900,rm=2e4,sm=.35,Qh=400,eu=(r,e)=>Promise.race([r,new Promise(t=>setTimeout(t,e))]),tu=class{constructor(){this.context=null,this.masterGain=null,this.sfxGain=null,this.ambientGain=null,this.limiter=null,this.outputGain=null,this.sfxEnabled=!0,this.ambientEnabled=!0,this.muted=!1,this._buffers=new Map,this._bufferBytes=new Map,this._failedPaths=new Set,this._active=0,this._voices=[],this._denied=0,this._lastUsed=new Map,this._keepResident=()=>!1,this._evicted=0,this._nextSweep=0,this._streams=new Set,this._inCave=!1,this._emitters=new Set,this._runningWaiters=[],this._unlockBound=null,this._resumeAttempts=0,this._forward=new A,this._listenerPosition=new A,this._listenerWritten=new A(NaN,NaN,NaN),this._forwardWritten=new A(NaN,NaN,NaN),this._gameplayFocus=new A,this._hasGameplayFocus=!1}_ensureContext(){if(this.context)return this.context;let e=globalThis.AudioContext??globalThis.webkitAudioContext;return e?(this.context=new e,this.masterGain=this.context.createGain(),this.limiter=this.context.createDynamicsCompressor(),this.limiter.threshold.value=-3,this.limiter.knee.value=0,this.limiter.ratio.value=20,this.limiter.attack.value=.003,this.limiter.release.value=.18,this.outputGain=this.context.createGain(),this.outputGain.gain.value=.85,this.masterGain.connect(this.limiter),this.limiter.connect(this.outputGain),this.outputGain.connect(this.context.destination),this.sfxGain=this.context.createGain(),this.sfxGain.connect(this.masterGain),this.ambientGain=this.context.createGain(),this.ambientFilter=this.context.createBiquadFilter(),this.ambientFilter.type="lowpass",this.ambientFilter.frequency.value=rm,this.ambientGain.connect(this.ambientFilter),this.ambientFilter.connect(this.masterGain),this.reverbSend=this.context.createGain(),this.reverbSend.gain.value=0,this.reverb=this.context.createConvolver(),this.sfxGain.connect(this.reverbSend),this.reverbSend.connect(this.reverb),this.reverb.connect(this.masterGain),this._applyGains(),this.context.addEventListener("statechange",()=>{let t=this._contextState;this._syncContextState(),t!==this.context.state&&!this.muted&&!this._resumeAttempts&&(this.context.state==="suspended"||this.context.state==="interrupted")&&this.resume()}),this._syncContextState(),this.context):null}bindPageLifecycle(e,t){let n=s=>{!e.hidden&&Jo.includes(s?.type)&&(this.sfxEnabled||this.ambientEnabled)&&this._ensureContext();let a=this.muted;this.setMuted(e.hidden,"focus"),!e.hidden&&a===this.muted&&this.resume()},i=()=>this.setMuted(!0,"focus");e.addEventListener("visibilitychange",n),t.addEventListener("focus",n),t.addEventListener("pageshow",n),t.addEventListener("blur",i),t.addEventListener("pagehide",i);for(let s of Jo)t.addEventListener(s,n,{passive:!0,capture:!0});this.setMuted(e.hidden||!e.hasFocus(),"focus")}_armUnlock(){if(!this._unlockBound){this._unlockBound=()=>this.resume();for(let e of Jo)window.addEventListener(e,this._unlockBound,{passive:!0,capture:!0})}}async resume(){let e=this.context;if(e&&(this._syncContextState(),!(this.muted||e.state==="closed"))){for(let t of this._streams)t.play();if(e.state!=="running"){this._resumeAttempts++;try{if(await eu(e.resume(),Qh),e.state==="interrupted"&&(await eu(e.suspend(),Qh),await eu(e.resume(),Qh)),!this.muted)for(let t of this._streams)t.play()}catch{}finally{this._resumeAttempts--,this._syncContextState()}}}}_syncContextState(){let e=this.context;if(this._contextState=e.state,e.state==="running"){this._removeUnlock();let t=this._runningWaiters.splice(0);for(let n of t)n(!0)}else if(e.state==="closed"){this._removeUnlock();for(let t of this._runningWaiters.splice(0))t(!1)}else this._armUnlock()}_waitForRunning(){let e=this.context;return!e||e.state==="running"?Promise.resolve(!0):e.state==="closed"?Promise.resolve(!1):new Promise(t=>this._runningWaiters.push(t))}_removeUnlock(){if(this._unlockBound){for(let e of Jo)window.removeEventListener(e,this._unlockBound,!0);this._unlockBound=null}}setSfxEnabled(e){this.sfxEnabled=e,this._applyGains()}setAmbient(e){this.ambientEnabled=e,this._applyGains()}setGameplayFocus(e){!e||!Ps(e.x,e.y,e.z)||(this._gameplayFocus.set(e.x,e.y,e.z),this._hasGameplayFocus=!0)}setMuted(e,t="default"){let n=this.muted;if(this._muteReasons??(this._muteReasons=new Set),e?this._muteReasons.add(t):this._muteReasons.delete(t),this.muted=this._muteReasons.size>0,this._applyGains(),this.muted!==n)for(let i of this._streams)i.setPaused(this.muted);n&&!this.muted&&this.resume()}_applyGains(){this.masterGain&&(this.masterGain.gain.value=this.muted?0:1,this.sfxGain.gain.value=this.sfxEnabled?1:0,this.ambientGain.gain.value=this.ambientEnabled?1:0)}async _buffer(e){if(this._lastUsed.set(e,performance.now()),!this._buffers.has(e)){let t=this._ensureContext();this._buffers.set(e,nm(e).then(n=>t.decodeAudioData(n.slice(0))).then(n=>(this._bufferBytes.set(e,n.length*n.numberOfChannels*4),n)).catch(n=>(this._failedPaths.add(e),console.warn(`could not load sound ${e}:`,n),null)))}return this._buffers.get(e)}preload(e){this.muted||this._buffer(e)}async playOnce(e,{volume:t=1,loop:n=!1,playbackRate:i=1,bus:s="sfx"}={}){if(s!=="ambient"&&!this.sfxEnabled||this.muted)return null;let a=this._ensureContext();if(!a||!n&&a.state!=="running")return null;let o=s==="ambient"?this.ambientGain:this.sfxGain,l=await this._buffer(e);if(!l)return null;if(n){if(!await this._waitForRunning())return null}else if(a.state!=="running")return null;if(s!=="ambient"&&!this.sfxEnabled||this.muted||!n&&!this._admit(e,0,null))return null;let c=a.createBufferSource();c.buffer=l,c.loop=n,c.playbackRate.value=i;let h=a.createGain();return h.gain.value=t,c.connect(h),h.connect(o),c.start(),this._track(c,n?null:{path:e,distance:0,position:null}),{source:c,gain:h,stop:()=>c.stop()}}_track(e,t=null){this._active++;let n=t&&{source:e,path:t.path,distance:t.distance,at:this.context.currentTime,x:t.position?.x,y:t.position?.y,z:t.position?.z};n&&this._voices.push(n),e.addEventListener("ended",()=>{if(this._active--,!n)return;let i=this._voices.indexOf(n);i>=0&&this._voices.splice(i,1)})}_admit(e,t,n){let i=this.context.currentTime;for(let a of this._voices){if(a.path!==e||i-a.at>z0)continue;if(!n||a.x===void 0||Math.hypot(n.x-a.x,n.y-a.y,n.z-a.z)<k0)return this._denied++,!1}if(this._voices.length<B0)return!0;let s=null;for(let a of this._voices)(!s||a.distance>s.distance)&&(s=a);if(t>=s.distance)return this._denied++,!1;this._voices.splice(this._voices.indexOf(s),1);try{s.source.stop()}catch{}return!0}setCave(e){if(e===this._inCave||!this.context)return;this._inCave=e,e&&!this.reverb.buffer&&(this.reverb.buffer=this._caveImpulse());let t=this.context.currentTime;this.reverbSend.gain.setTargetAtTime(e?W0:0,t,sm/3),this.ambientFilter.frequency.setTargetAtTime(e?j0:rm,t,sm/3)}_caveImpulse(){let e=this.context.sampleRate,t=Math.round(e*X0),n=this.context.createBuffer(2,t,e);for(let i=0;i<2;i++){let s=n.getChannelData(i),a=0;for(let o=0;o<t;o++){let l=o/t,c=.2+.75*l;a=a*c+(Math.random()*2-1)*(1-c),s[o]=a*Math.pow(1-l,3)*2.2}}return n}keepResident(e){this._keepResident=e}_sweep(e){if(!(e<this._nextSweep)){this._nextSweep=e+H0*1e3;for(let[t,n]of this._lastUsed)e-n<G0*1e3||this._keepResident(t)||[...this._streams].some(i=>i.seamless&&i.path===t)||(this._lastUsed.delete(t),this._buffers.delete(t),this._bufferBytes.delete(t)&&this._evicted++)}}playStream(e,{volume:t=1,bus:n="ambient",seamless:i=!1}={}){let s=this._ensureContext();if(!s)return null;let a=s.createGain();a.gain.value=t,a.connect(n==="ambient"?this.ambientGain:this.sfxGain);let o=this._stream(e,a,{seamless:i});return{gain:a,stop:()=>o.stop()}}_stream(e,t,{seamless:n=!1}={}){if(n)return this._bufferLoop(e,t);let i=new Audio(Is(e));i.loop=!0,i.preload="auto";let s=this.context.createMediaElementSource(i);s.connect(t);let a=()=>{i.paused&&i.play().catch(()=>{})},o={path:e,play:a,setPaused:l=>{l?i.pause():a()},stop:()=>{i.pause(),i.removeAttribute("src"),i.load(),s.disconnect(),this._streams.delete(o)}};return this._streams.add(o),this.muted||this._waitForRunning().then(l=>{l&&this._streams.has(o)&&!this.muted&&a()}),o}_bufferLoop(e,t){let n=this.context,i=null,s=null,a=0,o=0,l=!1,c=this.muted,h=()=>{s&&(a=(a+n.currentTime-o)%i.duration,s.stop(),s.disconnect(),s=null)},u=()=>{l||c||this.muted||s||!i||n.state!=="running"||(s=n.createBufferSource(),s.buffer=i,s.loop=!0,s.connect(t),o=n.currentTime,s.start(0,a),this._track(s))},d={path:e,seamless:!0,play:u,setPaused:p=>{c=p,p?h():u()},stop:()=>{l||(l=!0,h(),i=null,this._streams.delete(d))}};return this._streams.add(d),Promise.all([this._buffer(e),this._waitForRunning()]).then(([p,m])=>{l||(i=p,m&&u())}),d}stats(){let e=this.context,t=[...this._bufferBytes.entries()].sort((n,i)=>i[1]-n[1]);return{state:e?.state??"none",muted:[...this._muteReasons??[]],sfx:this.sfxEnabled,ambient:this.ambientEnabled,gains:e?[this.masterGain,this.sfxGain,this.ambientGain].map(n=>n.gain.value):[],sampleRate:e?.sampleRate??0,latency:[e?.baseLatency??0,e?.outputLatency??0],buffers:t.length,bytes:t.reduce((n,[,i])=>n+i,0),biggest:t.slice(0,3),failed:[...this._failedPaths],active:this._active,voices:this._voices.length,denied:this._denied,evicted:this._evicted,streams:this._streams.size,cave:this._inCave,emitters:this._emitters.size}}static dbToGain(e){return Math.pow(10,e/20)}createEmitter({maxDistance:e=20,unitSize:t=1,bus:n="sfx"}={}){let i=new nu(this,{maxDistance:e,unitSize:t,bus:n});return this._emitters.add(i),i}removeEmitter(e){e._disconnect(),this._emitters.delete(e)}async playAt(e,t,n={}){if(!this.sfxEnabled||this.muted||!Ps(t.x,t.y,t.z)||!this._ensureContext())return null;let{matchGameplayFocus:i=null,...s}=n,a=this.createEmitter(s);a.setPosition(t.x,t.y,t.z);let o=s.volume??1;if(i&&this._hasGameplayFocus){let c=Math.max(1,this._listenerPosition.distanceTo(this._gameplayFocus)),h=Math.max(1,this._listenerPosition.distanceTo(t)),u=i.radius??8;t.distanceTo(this._gameplayFocus)<=u&&(o=(i.targetGain??o)*h/c)}let l=await a.play(e,{...s,volume:o,onEnded:()=>this.removeEmitter(a)});return l||this.removeEmitter(a),l}updateListener(e){let t=this.context;if(!t)return;this._sweep(performance.now());let n=e.position;if(!Ps(n.x,n.y,n.z))return;this._listenerPosition.copy(n),e.getWorldDirection(this._forward);let i=this._forward;if(!Ps(i.x,i.y,i.z))return;let s=!(this._listenerWritten.distanceToSquared(n)<im),a=!(this._forwardWritten.distanceToSquared(i)<im);if(!s&&!a)return;let o=t.listener;o.positionX?(s&&(o.positionX.value=n.x,o.positionY.value=n.y,o.positionZ.value=n.z),a&&(o.forwardX.value=i.x,o.forwardY.value=i.y,o.forwardZ.value=i.z),this._forwardWritten.x!==this._forwardWritten.x&&(o.upX.value=0,o.upY.value=1,o.upZ.value=0)):(s&&o.setPosition(n.x,n.y,n.z),a&&o.setOrientation(i.x,i.y,i.z,0,1,0)),s&&this._listenerWritten.copy(n),a&&this._forwardWritten.copy(i)}},nu=class{constructor(e,{maxDistance:t,unitSize:n,bus:i="sfx"}){this.world=e,this.bus=i;let s=e._ensureContext();this.panner=s.createPanner(),this.panner.panningModel="equalpower",this.panner.distanceModel="inverse",this.panner.refDistance=n,this.panner.maxDistance=t,this.panner.rolloffFactor=1,this.gain=s.createGain(),this.panner.connect(this.gain),this.gain.connect(i==="ambient"?e.ambientGain:e.sfxGain),this._source=null,this._stream=null,this.position=null}setPosition(e,t,n){if(!Ps(e,t,n))return;this.position?this.position.set(e,t,n):this.position=new A(e,t,n);let i=this.panner;i.positionX?(i.positionX.value=e,i.positionY.value=t,i.positionZ.value=n):i.setPosition(e,t,n)}follow(e){return this._follow=e,this}updateFollow(){if(this._follow){let e=this._follow.position;this.setPosition(e.x,e.y,e.z)}}async play(e,{volume:t=1,loop:n=!1,playbackRate:i=1,onEnded:s=null,scheduleWhenMuted:a=!1}={}){let o=()=>(this.bus!=="ambient"&&!this.world.sfxEnabled||this.world.muted)&&!a;if(o())return null;let l=await this.world._buffer(e);if(!l||!await this.world._waitForRunning()||o())return null;let c=this.position?this.position.distanceTo(this.world._listenerPosition):0;if(!n&&!this.world._admit(e,c,this.position))return null;this.stop();let h=this.world.context.createBufferSource();h.buffer=l,h.loop=n,h.playbackRate.value=i;let u=this.world.context.createGain();return h.connect(u),u.connect(this.panner),h.addEventListener("ended",()=>u.disconnect()),this.gain.gain.value=t,s&&(h.onended=s),h.start(),this.world._track(h,n?null:{path:e,distance:c,position:this.position}),this._source=h,this._voice=u,{source:h,stop:()=>h.stop(),fadeOut:(d=.12)=>{let p=this.world.context.currentTime,m=p+Math.max(.01,d);this.gain.gain.cancelScheduledValues(p),this.gain.gain.setValueAtTime(this.gain.gain.value,p),this.gain.gain.linearRampToValueAtTime(0,m);try{h.stop(m)}catch{}}}}stream(e,{volume:t=1,seamless:n=!1}={}){return this.stop(),this.gain.gain.value=t,this._stream=this.world._stream(e,this.panner,{seamless:n}),this._stream}get playing(){return this._source!==null||this._stream!==null}stop(){if(this._stream&&(this._stream.stop(),this._stream=null),this._source){this._source.onended=null;let e=this.world.context.currentTime+V0,t=this._voice.gain;t.setValueAtTime(t.value,this.world.context.currentTime),t.linearRampToValueAtTime(0,e);try{this._source.stop(e)}catch{}this._source=null,this._voice=null}}_disconnect(){this.stop(),this.panner.disconnect(),this.gain.disconnect()}},Jy=()=>({gain:.88+Math.random()*.24,pitch:.93+Math.random()*.14}),iu=new tu;var q0=["storygiantgames.com","mibbon.com"],am=["localhost","127.0.0.1","::1","[::1]",""];function Ky(r){return typeof r=="string"&&am.includes(r)}function Zo(r){return typeof r!="string"?!1:am.includes(r)?!0:q0.some(e=>r===e||r.endsWith(`.${e}`))}var Ai=r=>`dino.${r}`;var su=["pack_a","pack_b","pack_c"],Y0=Ai("pack");function J0(){try{return localStorage.getItem(Y0)||null}catch{return null}}var Ci=typeof window<"u"&&window.__PACK||J0()||su[0];function au(r){let e=typeof document<"u"?new URL(r,document.baseURI):new URL(`../../${r}`,import.meta.url);return typeof window<"u"&&window.__NOCACHE_URL?.(e.href)||e.href}var xr=null,ru=new Map;async function Z0(r){if(!ru.has(r)){let e=await import(au(`${r}/pack.js`));ru.set(r,e.default)}return ru.get(r)}async function t1(){xr||(xr=await Z0(Ci))}function Ko(){return xr?.dinos}function n1(){return xr.colors}function i1(){return xr.viewDistance??1}function r1(){return xr?.pokiGame??""}var $o=new Map,K0=r=>au(`${Ci}/${r}/dinoCode.js`);async function o1(r=Ko()){if(!r)throw new Error("loadDinoCode: the pack has not been loaded yet");return await Promise.all(r.map(async e=>{let t=await import(K0(e));$o.set(e,t.default)})),$o}function qn(r){let e=$o.get(r);if(!e)throw new Error(`no dinoCode for "${r}" -- ${Ci}/${r}/dinoCode.js did not load`);return e}function Ds(r){return $o.has(r)}function om(r,e,t){return Math.min(t,Math.max(e,r))}function c1(r,e,t){return r+(e-r)*t}function h1(r,e,t){return Math.abs(e-r)<=t?e:r+Math.sign(e-r)*t}function Ls(r,e,t,n,i){let s=Math.min(Math.max((r-e)/(t-e),0),1);return n+(i-n)*s}function u1(r,e,t){return t>0?t>=1?1:r+(e-r)*t:0}function d1(r,e){return r+Math.random()*(e-r)}function p1(r,e=2){let t=om(r,0,1);return t<.5?.5*Math.pow(2*t,e):1-.5*Math.pow(2-2*t,e)}function $0(r,e=1,t=.3){let n=om(r,0,1);if(n===0||n===1)return n;let i=t||1e-4;return Math.pow(2,-10*n)*Math.sin((n-i/4)*(2*Math.PI)/i)*e+1}var m1={linear:r=>r,quadIn:r=>r*r,quadOut:r=>r*(2-r),quadInOut:r=>r<.5?2*r*r:-1+(4-2*r)*r,cubicIn:r=>r*r*r,cubicOut:r=>1+--r*r*r,cubicInOut:r=>r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1,sineOut:r=>Math.sin(r*Math.PI/2),sineInOut:r=>-(Math.cos(Math.PI*r)-1)/2,backOut:r=>1+(1.70158+1)*Math.pow(r-1,3)+1.70158*Math.pow(r-1,2),backIn:r=>(1.70158+1)*r*r*r-1.70158*r*r,elasticOut:$0,bounceOut:r=>r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375};function lm(r,e=-Math.PI,t=Math.PI){if(!Number.isFinite(r))return e;let n=t-e;if(!(Number.isFinite(n)&&n>0))return e;let i=r;for(;i<e;)i+=n;for(;i>t;)i-=n;return i}function cm(r,e){return lm(e-r)}function f1(r,e){return r+lm(e-r)}function g1(r,e,t){return r+cm(r,e)*Math.min(t,1)}function _1(r,e,t){let n=cm(r,e);return r+Math.sign(n)*Math.min(Math.abs(n),t)}function v1(r,e,t,n=null){let i=r.x+(n?.left??0),s=r.y+(n?.top??0),a=r.x+r.width-(n?.right??0),o=r.y+r.height-(n?.bottom??0);return e>=i&&e<=a&&t>=s&&t<=o}function ou(r,e){let t=r.x-e.x,n=r.y-e.y,i=r.z-e.z;return t*t+n*n+i*i}function x1(r,e,t,n){let i=(c,h,u,d,p,m)=>(u-c)*(m-h)-(d-h)*(p-c),s=i(t.x,t.z,n.x,n.z,r.x,r.z),a=i(t.x,t.z,n.x,n.z,e.x,e.z),o=i(r.x,r.z,e.x,e.z,t.x,t.z),l=i(r.x,r.z,e.x,e.z,n.x,n.z);return s>0!=a>0&&o>0!=l>0}function y1(r,e,t,n){let i=e.x-r.x,s=e.y-r.y,a=e.z-r.z,o=n.x-t.x,l=n.y-t.y,c=n.z-t.z,h=r.x-t.x,u=r.y-t.y,d=r.z-t.z,p=i*i+s*s+a*a,m=i*o+s*l+a*c,_=o*o+l*l+c*c,f=i*h+s*u+a*d,v=o*h+l*u+c*d,g=p*_-m*m,x=0,S=0;g>1e-8&&(x=Math.max(0,Math.min(1,(m*v-_*f)/g))),S=_>1e-8?Math.max(0,Math.min(1,(m*x+v)/_)):0,p>1e-8&&(x=Math.max(0,Math.min(1,(m*S-f)/p)));let w=h+i*x-o*S,T=u+s*x-l*S,I=d+a*x-c*S;return w*w+T*T+I*I}function S1(r,e){return(r%e+e)%e}function b1(r,e,t,n){let i=e-r.x,s=n-r.z;if(Math.abs(t-r.y)>r.height/2)return!1;let a=Math.cos(r.yaw??0),o=Math.sin(r.yaw??0);return Math.abs(a*i-o*s)<=r.width/2&&Math.abs(o*i+a*s)<=r.depth/2}var hm=3,Q0=5,E1=.2,yr=0,um=.35,lu={JUVENILE:0,TEEN:1,ADULT:2},e_={walkSpeed:6,runSpeed:6,swimDepthJuvenile:-.2,swimDepthTeen:-.6,swimDepthAdult:-1,acceleration:4,friction:15,rotationSpeed:4,runThresholdPercent:.75,maxHealth:5,attackDamage:1,eatDamage:1,consumeValue:10,waterValue:1,isFoodType:0,eatsFoodType:0},t_={NONE:0,VEG:1,MEAT:2},n_=(r,e)=>(r&e)!==0,A1=r=>qn(r).glb,C1=r=>(Ds(r)?qn(r).uiArtFrom:null)??r,R1=r=>qn(r).protectTexture,i_={eat:r=>n_(r_(r).eatsFoodType,t_.MEAT)?"meat":null};function I1(r,e){let t=null;try{t=qn(e)?.[`${r}Icon`]??i_[r]?.(e)??null}catch{}return`textures/ui/actions/${r}${t?`_${t}`:""}.webp`}function r_(r){return{...e_,...qn(r).stats}}function P1(r){let e=Q0*(hm-1);return Math.floor(r*e)/e}function D1(r){let e=1/hm;return r<e*1?lu.JUVENILE:r<e*2?lu.TEEN:lu.ADULT}function L1(r,e){return e<=.5?Ls(e,0,.5,r.swimDepthJuvenile,r.swimDepthTeen):Ls(e,.5,1,r.swimDepthTeen,r.swimDepthAdult)}var hu={returning_update_seen:"rn",egg_fix_seen:"ef",dino_type:"dt",last_played_dino:"lp",growth:"g",grown_up:"gu",half_grown:"hg",mp_unlocked:"mu",first_baby_hatched:"fb",mp_intro_seconds:"mn",mp_portal_entered:"mo",mp_play_seconds:"ms",special_missions:"sm",race_best_times:"rb",race_stats:"rs",powerups_bought:"pb",achievements:"ac",dinos_played:"dp",first_dino_started:"fd",touched:"t",prestige:"pr",dead:"de",health:"h",water:"w",food:"f",energy:"e",egg:"eg",brood:"br",baby_skeletons:"bk",selected_styles:"ss",bought_styles:"bs",coins:"c",missions:"mi",visits:"vi",visit_days:"vd",last_visit_day:"lv",versions_played:"vp",mission_cycle:"mc",missions_finished:"mf",powerups:"pu",ambient:"am",sfx:"sf",gore:"go",high_quality:"hq",high_quality_manually_toggled:"hm",view_distance_locked:"vl",capture_mouse_cursor:"cm",quality:"ql",drain_warning:"dw",eog_shown:"eo",egg_shown:"ex",area_gateway_unlocked:"ag",area_gateways_unlocked:"ax",missions_hint:"mh",powerup_hint:"ph",run_chase_hint:"rc",run_unrun_hint:"ru",first_achievement_hint:"fa",carnivore_food_hint_count:"cf",language:"la",azerty:"az",player_id:"pi",mp_show_name:"sn",name_parts:"np",recent_emotes:"re",last_room:"lr",day_hour:"dh",weather:"wt"},Qo=Object.fromEntries(Object.entries(hu).map(([r,e])=>[e,r])),cu=/^(.*#)(\d+)$/;function dm(r){if(!Array.isArray(r)||r.length<2)return r;let e=cu.exec(r[0])?.[1];return e===void 0||!r.every(t=>cu.exec(t)?.[1]===e)?r:{p:e,n:r.map(t=>+cu.exec(t)[2])}}var pm=r=>r?.p===void 0?r:r.n.map(e=>r.p+e),Sr=(r,e)=>r&&typeof r=="object"?Object.fromEntries(Object.entries(r).map(([t,n])=>[t,e(n)])):r,mm={completed:"c"},fm=(r,e)=>Object.fromEntries(Object.entries(r).map(([t,n])=>[e[t]??t,n])),s_=r=>Object.fromEntries(Object.entries(r).map(([e,t])=>[t,e])),el={missions:{pack:r=>Sr(r,e=>e?.completed===!0&&Object.keys(e).length===1?1:fm(e??{},mm)),unpack:r=>Sr(r,e=>e===1?{completed:!0}:fm(e,s_(mm)))},touched:{pack:r=>Sr(r,dm),unpack:r=>Sr(r,pm)},special_missions:{pack:r=>Sr(r,e=>{let t={};return e.started&&(t.s=1),e.unlocked&&(t.u=1),t.c=dm(e.collected),t}),unpack:r=>Sr(r,e=>({started:e.s===1,collected:pm(e.c),unlocked:e.u===1}))}},gm=r=>typeof r=="number"?Math.round(r*1e4)/1e4:r;function _m(r,e){let t={v:1};for(let[n,i]of Object.entries(hu)){if(!(n in r))continue;let s=n==="brood"?r.brood.map(gm):el[n]?el[n].pack(r[n]):gm(r[n]);JSON.stringify(s)!==e[n]&&(t[i]=s)}return t}var vm=r=>Object.fromEntries(Object.entries(r).map(([e,t])=>[e,JSON.stringify(t)]));function xm(r,e){if(r?.v!==1)return r;let t={};for(let n of Object.keys(hu))t[n]=structuredClone(e[n]);for(let[n,i]of Object.entries(r))n in Qo&&(t[Qo[n]]=el[Qo[n]]?el[Qo[n]].unpack(i):i);return t}var uu=typeof location>"u"?!1:Zo(location.hostname),mu=Ai(Ci),wm=Ai("save"),nl=Ai("debug"),du=Ci===su[0],a_=[mu,wm,nl],ym=Ai("godot_probe"),o_=4e3,Yn=.75,tl=.5,Fs=()=>({returning_update_seen:!0,egg_fix_seen:!0,dino_type:"",last_played_dino:"",growth:0,grown_up:!1,half_grown:!1,mp_unlocked:!1,first_baby_hatched:!1,mp_intro_seconds:0,mp_portal_entered:!1,mp_play_seconds:0,special_missions:{},race_best_times:{},race_stats:{},powerups_bought:{},achievements:{},dinos_played:[],first_dino_started:!1,touched:{},prestige:0,dead:!1,health:Yn,water:Yn,food:Yn,energy:Yn,egg:0,brood:[],baby_skeletons:[],selected_styles:{},bought_styles:{},coins:0,missions:{},visits:0,visit_days:0,last_visit_day:"",versions_played:[],mission_cycle:0,missions_finished:0,powerups:{},ambient:!0,sfx:!0,gore:!0,high_quality:!0,high_quality_manually_toggled:!1,view_distance_locked:null,capture_mouse_cursor:!1,quality:null,drain_warning:!1,eog_shown:!1,egg_shown:!1,area_gateway_unlocked:!1,area_gateways_unlocked:{},missions_hint:!1,powerup_hint:!1,run_chase_hint:!1,run_unrun_hint:!1,first_achievement_hint:!1,carnivore_food_hint_count:0,language:"",azerty:!1,player_id:"",mp_show_name:!1,name_parts:null,recent_emotes:[],last_room:null,day_hour:null,weather:null}),l_=Object.keys(Fs()),c_=vm(Fs()),Tm=r=>xm(JSON.parse(r),Fs()),h_=Object.freeze({shadow_strength:.6,sun_brightness:1.25,ambient_brightness:1}),Sm={use_atlas:!1,skip_egg_click:!1,skip_wake:!1,speedy:!1,ignore_energy:!1,run_drag_actions:!1,no_food:!1,ignore_damage:!1,infanticide:!1,save_position:!1,saved_position:null,view_extra:0,hide_ui:!1,test_long_ads:!1,visualize_ads:!0,force_ui:"",fps:uu,show_player_pos:!1,show_day_clock:uu,show_version:uu,gfx_stats:!1,copy_dump:!0,park_babies:!1,no_warm:!1,load_trace:!1,parallel_compile:!1,race_tools:!1,slowdown_icon:!1,mp_client_indicators:!0,mp_hide_peer_names:!1,show_triggers:!1,show_collision:!1,show_nav:!1,show_paths:!1,render_scale:1,day_cycle_speed:1,day_cycle_hour:null,weather_type:"auto",shadow_quality:null,...h_};function V1(){return At.debug.force_ui==="touch"?!0:At.debug.force_ui==="desktop"||typeof window>"u"?!1:(navigator.maxTouchPoints??0)>0||"ontouchstart"in window}var u_=1,bm=()=>(typeof performance>"u"?Date.now():performance.now())/1e3,fu=class{constructor(){Ou(this,"powerupGrants",{});Object.assign(this,Fs()),this.debug={...Sm},this._savedAt=null,this._dirty=!1,this._urgent=!1,this._watching=!1,this.returningPlayer=!1}get babies(){return this.brood.length}addBaby(e=yr){this.brood.push(Ns(e))}removeBaby(e=yr){if(!this.brood.length)return;let t=this.brood.indexOf(Ns(e));this.brood.splice(t>=0?t:this.brood.length-1,1)}regrowBaby(e,t){let n=this.brood.indexOf(Ns(e));n>=0&&(this.brood[n]=Ns(t))}async load(){var i,s;let e=!1,t=null;try{t=localStorage.getItem(mu),!t&&du&&(t=localStorage.getItem(wm),t&&(e=!0,console.info("Adopted an existing save from before this build")))}catch{this._storageBroken=!0}let n=!1;if(du)try{n=localStorage.getItem(ym)!==null}catch{}if(!this._storageBroken&&du&&!n&&(!t||!Mm(t))){let a=await Promise.race([p_().then(o=>({settled:!0,found:o})).catch(()=>({settled:!1})),new Promise(o=>setTimeout(()=>o({settled:!1}),o_))]);if(a.settled)try{localStorage.setItem(ym,a.found?"adopted":"none")}catch{}a.found&&(t=a.found,e=!0,console.info("Adopted an existing save from a Godot build. Wow! Early adopter!"))}if(t)try{let a=Tm(t);this.returningPlayer=!0,this.returning_update_seen=a.returning_update_seen??!1,this.egg_fix_seen=a.egg_fix_seen??!1;for(let o of Object.keys(Fs()))o in a&&(this[o]=a[o]);this.brood=Array.isArray(a.brood)?a.brood.map(Ns):Array.from({length:Us(a)},()=>yr),"first_dino_started"in a||(this.first_dino_started=Mm(t)),!("grown_up"in a)&&((a.growth??0)>=1||Us(a)>0||(a.egg??0)>0)&&(this.grown_up=!0),"half_grown"in a||(this.half_grown=(a.growth??0)>=d_||this.grown_up===!0||Us(a)>0||(a.egg??0)>0),"first_baby_hatched"in a||(this.first_baby_hatched=Us(a)>0||(a.achievements?.counts?.hatch_egg??0)>0||a.mp_unlocked===!0)}catch{}if(!this._storageBroken)try{let a=JSON.parse(localStorage.getItem(nl))??{};for(let o of Object.keys(this.debug))o in a&&(this.debug[o]=a[o])}catch{}for(let a of["dino_type","last_played_dino"])this[a]==="compi"&&(this[a]="compy");if(Array.isArray(this.dinos_played)&&(this.dinos_played=this.dinos_played.map(a=>a==="compi"?"compy":a)),this.missions&&typeof this.missions=="object")for(let a of Object.keys(this.missions))a.startsWith("compi_")&&((i=this.missions)[s=`compy_${a.slice(6)}`]??(i[s]=this.missions[a]),delete this.missions[a]);for(let a of[this.selected_styles,this.bought_styles])a?.compi&&!a.compy&&(a.compy=a.compi),a&&delete a.compi;!this.last_played_dino&&this.dino_type&&(this.last_played_dino=this.dino_type),this.dead&&this.resetOnDie(""),e&&this.save()}clearSaved(){this._cleared=!0;try{for(let e of a_)localStorage.removeItem(e)}catch{}}save(){if(this._storageBroken||this._cleared)return;let e={};for(let t of l_)e[t]=this[t];try{let t=JSON.stringify(_m(e,c_));t!==this._savedText&&(localStorage.setItem(mu,t),this._savedText=t),this._saveDebugFlags()}catch{this._storageBroken=!0}}_saveDebugFlags(){let e={};for(let[n,i]of Object.entries(Sm))this.debug[n]!==i&&(e[n]=this.debug[n]);let t=Object.keys(e).length===0?"":JSON.stringify(e);t!==this._savedDebugText&&(this._savedDebugText=t,t===""?localStorage.removeItem(nl):localStorage.setItem(nl,t))}requestSave(){this._dirty=!0}saveNow(){this._dirty=!0,this._urgent=!0}update(){if(!this._dirty)return;let e=bm();this._savedAt===null&&(this._savedAt=e),!(!this._urgent&&e-this._savedAt<u_)&&this.flush()}flush(){this._dirty&&(this._savedAt=bm(),this._dirty=!1,this._urgent=!1,this.save())}watchPage(){this._watching||typeof document>"u"||(this._watching=!0,document.addEventListener("visibilitychange",()=>{document.hidden&&this.flush()}),typeof window<"u"&&window.addEventListener("pagehide",()=>this.flush()))}clearSavedPosition(){this.debug.saved_position=null}resetOnDie(e){this.clearSavedPosition(),this.dead=!1,this.growth=0,this.brood=[],this.baby_skeletons=[],this.egg=0,this.missions={},this.mission_cycle=0,this.missions_finished=0,this.powerups=this.powerups.mission_arrow?{mission_arrow:this.powerups.mission_arrow}:{},this.health=Yn,this.food=Yn,this.water=Yn,this.energy=Yn,this.dino_type=e,e&&(this.last_played_dino=e),this.save()}revive(){this.health=tl,this.food=tl,this.water=tl,this.energy=tl,this.dead=!1,this.save()}get displayCoins(){return this.coins-(this.flying_coins??0)}onCoinsChanged(e){return(this._coinListeners??(this._coinListeners=new Set)).add(e),()=>this._coinListeners.delete(e)}_setCoins(e){let t=this.displayCoins;this.coins=e;for(let n of this._coinListeners??[])n(this.displayCoins,t);this.save()}setCoins(e){this._setCoins(e)}addCoins(e,{flying:t=!1,source:n="",report:i=!0}={}){i&&n&&_n.measure("coins",n,pu.earned),t&&(this.flying_coins=(this.flying_coins??0)+e),this._setCoins(this.coins+e)}payCoins(e,t=""){t&&_n.measure("coins",t,pu.spent),this._setCoins(this.coins-e)}flyingCoinArrives(e=1){let t=this.displayCoins;this.flying_coins=(this.flying_coins??0)-e;for(let n of this._coinListeners??[])n(this.displayCoins,t)}hasPowerup(e){return!!this.powerups[e]?.length}givePowerup(e,t,n,{aura:i=!1,eggs:s=null,target:a=null}={}){this.powerups[e]||(this.powerups[e]=[]);let o={timer:t,strength:n,aura:i};s&&(o.eggs=s),a&&(o.target=a),this.powerups[e].push(o),this.powerups[e].sort((l,c)=>c.strength-l.strength),this.powerupGrants[e]=(this.powerupGrants[e]??0)+1,this.save()}buyPowerup(e,t,n,i){this.powerups_bought={...this.powerups_bought,[e]:!0},this.givePowerup(e,t,n,i)}powerupHasAura(e){return!!this.powerups[e]?.some(t=>t.aura)}getPowerupStrength(e){return this.powerups[e]?.[0]?.strength??1}getPowerupDuration(e){return(this.powerups[e]??[]).reduce((t,n)=>t+n.timer,0)}updatePowerups(e){for(let t of Object.keys(this.powerups)){let n=this.powerups[t];if(!n?.length){delete this.powerups[t];continue}n[0].timer-=e,n[0].timer<=0&&(n.shift(),n.length===0&&delete this.powerups[t])}}getSelectedStyleId(e,t){return this.selected_styles?.[e]?.[t]??""}getSelectedStyle(e,t){return this.getSelectedStyleId(e,t)}setSelectedStyle(e,t,n){if(this.selected_styles[e]||(this.selected_styles[e]={}),this.selected_styles[e][t]!==n){this.selected_styles[e][t]=n,this.save();for(let i of this._styleListeners??[])i(e,t)}}onStyleChanged(e){return(this._styleListeners??(this._styleListeners=new Set)).add(e),()=>this._styleListeners.delete(e)}isStyleBought(e,t,n){let i=this.bought_styles?.[e]?.[t];return Array.isArray(i)&&i.includes(n)}markStyleBought(e,t,n){this.isStyleBought(e,t,n)||(this.bought_styles[e]||(this.bought_styles[e]={}),Array.isArray(this.bought_styles[e][t])||(this.bought_styles[e][t]=[]),this.bought_styles[e][t].push(n),this.save())}isStyleAvailable(e,t,n){return(n?.cost??0)<=0?!0:this.isStyleBought(e,t,n.id)}};function H1(){return At.first_baby_hatched===!0||At.mp_unlocked===!0}var d_=.5;function Us(r){if(Array.isArray(r?.brood))return r.brood.length;let e=Number(r?.babies);return Number.isFinite(e)&&e>0?Math.floor(e):0}function Ns(r){let e=Number(r);return Number.isFinite(e)?Math.min(um,Math.max(yr,e)):yr}function Mm(r){try{let e=Tm(r);return(e.coins??0)>0||(e.growth??0)>0||Us(e)>0?!0:Object.values(e.bought_styles??{}).some(t=>Object.values(t??{}).some(n=>(n?.length??0)>0))}catch{return!1}}function p_(){return new Promise((r,e)=>{if(typeof indexedDB>"u")return r(null);let t=indexedDB.open("/userfs"),n=!0;t.onupgradeneeded=()=>{n=!1,t.transaction.abort()},t.onerror=()=>r(null),t.onsuccess=()=>{let i=t.result;if(!n||!i.objectStoreNames.contains("FILE_DATA"))return i.close(),r(null);try{let o=i.transaction("FILE_DATA","readonly").objectStore("FILE_DATA").openCursor();o.onerror=()=>{i.close(),r(null)},o.onsuccess=()=>{let l=o.result;if(!l)return i.close(),r(null);if(String(l.key).endsWith("global_settings.json")){let c=l.value?.contents;i.close(),r(c?new TextDecoder().decode(c):null);return}l.continue()}}catch(s){i.close(),e(s)}}})}var At=new fu;var gu="emoji:\u{1F6E0}\uFE0F";var j1=["body","belly","pattern","eyes","horns"];var q1={expire:90,biteMax:100,value(r){return Math.round(5+95*Math.max(0,Math.min(1,Number(r)||0)))}};var m_=1e4,Jn=()=>typeof window<"u"?window.PokiSDK:void 0;function br(r,...e){let t=Jn();if(!(!t||typeof t[r]!="function"))try{return t[r](...e)}catch(n){console.warn(`PokiSDK.${r} failed:`,n);return}}var Bs=!1,Os=new Set,il=!1,_u=!1,pu={start:"start",complete:"complete",fail:"fail",visible:"visible",interact:"interact",earned:"earned",spent:"spent"},ks=[];function Rm(){if(Bs||ks.length===0)return;let r=Jn();for(let[e,t,n]of ks)!r||typeof r.measure!="function"?console.log(`[POKI] measure: [${e}] ${t} => ${n}`):br("measure",e,t,n);ks.length=0}function Mr(){return typeof location>"u"?!1:Zo(location.hostname)}var f_=r=>new Promise(e=>setTimeout(e,r)),Em="rgba(255, 0, 255, 0.85)",Im=`linear-gradient(${Em}, ${Em})`,g_=`FAKE REWARDED BREAK
Grant the reward?`;async function __(r){if(At.debug.visualize_ads===!1)return console.log(`[POKI] ${r} (not visualized, auto-success)`),!0;console.log(`[POKI] ${r}`);let e=document.createElement("div");e.style.cssText=`position:fixed;inset:0;background:${Im};z-index:128;padding:24px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px`,document.body.appendChild(e);try{if(r!=="rewardedBreak"){e.style.pointerEvents="none";let i=document.createElement("div");return i.textContent="AD",i.style.cssText="color:white;font:900 28vmin 'SN Pro',Arial,sans-serif;line-height:1;letter-spacing:0.06em;text-shadow:0 4px 16px rgba(0,0,0,0.45)",e.appendChild(i),await f_(At.debug.test_long_ads?1e4:250),!0}let t=document.createElement("div");t.textContent=g_,t.style.cssText="color:white;font:700 22px 'SN Pro',Arial,sans-serif;text-shadow:0 2px 4px rgba(0,0,0,0.6);text-align:center;white-space:pre-line;max-width:min(90vw,520px)",e.appendChild(t);let n=(i,s,a,o)=>{let l=document.createElement("button");return l.textContent=i,l.style.cssText="font:700 24px 'SN Pro',Arial,sans-serif;padding:14px 48px;border:none;border-radius:12px;cursor:pointer;background:"+s+";color:white",l.addEventListener("click",()=>o(a)),l};return await new Promise(i=>{e.appendChild(n("Cancel","#59606b","cancel",i));let s=document.createElement("div");s.style.cssText="display:flex;gap:24px",s.append(n("No","#a12626",!1,i),n("Yes","#2b8a3e",!0,i)),e.appendChild(s)})}finally{e.remove()}}var Pm="dino.dev_fake_user";function Dm(){try{let r=localStorage.getItem(Pm);return r?Object.assign(JSON.parse(r),{profilePictureUrl:gu}):null}catch{return null}}async function v_(){console.log("[POKI] login");let r=document.createElement("div");r.style.cssText=`position:fixed;inset:0;background:${Im};z-index:128;padding:24px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:20px;overflow:auto;color-scheme:light dark;forced-color-adjust:none`,document.body.appendChild(r);try{let e=document.createElement("div");e.textContent=`FAKE POKI LOGIN
What is your username?`,e.style.cssText="color:white;font:700 22px 'SN Pro',Arial,sans-serif;text-shadow:0 2px 4px rgba(0,0,0,0.6);text-align:center;white-space:pre-line;max-width:min(90vw,520px)",r.appendChild(e);let t=document.createElement("input");t.type="text",t.maxLength=32,t.autocomplete="off",t.value=Dm()?.username??"Dev Rex",t.style.cssText="font:700 24px 'SN Pro',Arial,sans-serif;padding:12px 18px;border:2px solid white;border-radius:12px;background:#ffffff;color:#111111;text-align:center;outline:none;width:min(80vw,360px);color-scheme:light dark;forced-color-adjust:none;filter:none !important",r.appendChild(t);let n=document.createElement("div");return n.style.cssText="display:flex;gap:24px",r.appendChild(n),await new Promise(i=>{let s=a=>i(a&&t.value.trim().slice(0,32)||null);for(let[a,o]of[["Cancel",!1],["Log in",!0]]){let l=document.createElement("button");l.textContent=a,l.style.cssText="font:700 24px 'SN Pro',Arial,sans-serif;padding:14px 48px;border:none;border-radius:12px;cursor:pointer;background:"+(o?"#2b8a3e":"#a12626")+";color:white",l.addEventListener("click",()=>s(o)),n.appendChild(l)}t.addEventListener("keydown",a=>{a.key==="Enter"&&s(!0)}),t.focus(),t.select()})}finally{r.remove()}}var vu="ad",x_="start",y_="success",S_="unavailable",b_=1e3;async function Am(r,e,t=""){if(Bs)return e;let n=Mr(),i=Jn(),s=i&&typeof i[r]=="function";if(!n&&!s)return t&&await Cm(t),e;let a=performance.now();t&&_n.measure(vu,t,x_),Bs=!0,iu.setMuted(!0,"ad"),_n.onAdBusyChanged?.(!0);let o=e,l=!1;try{if(n){let c=await __(r);l=c==="cancel",o=l?!1:c}else o=await i[r]()}catch{o=e}finally{Bs=!1,iu.setMuted(!1,"ad"),_n.onAdBusyChanged?.(!1),Rm()}return t&&o===!0?_n.measure(vu,t,y_):t&&!(n?l:performance.now()-a>=b_)&&await Cm(t),o}async function Cm(r){_n.measure(vu,r,S_),await _n.onAdUnavailable?.()}var _n={onAdBusyChanged:null,onAdUnavailable:null,async init(){let r=Jn();if(!r)return console.warn("PokiSDK not loaded; continuing without it"),!1;try{let e=r.init();if(!Mr())return await e,!0;let t=0,n=await Promise.race([e.then(()=>!0),new Promise(i=>{t=setTimeout(()=>i(!1),m_)})]);return clearTimeout(t),n||console.warn("PokiSDK.init did not settle in time; continuing without it"),n}catch(e){return console.warn("PokiSDK.init failed; continuing without it:",e),!1}},gameLoadingFinished(){_u||(_u=!0,br("gameLoadingFinished"))},get isLoadingFinished(){return _u},gameplayStart(){il||(il=!0,br("gameplayStart"))},gameplayStop(){il&&(il=!1,br("gameplayStop"))},get isAdBusy(){return Bs},rewardedBreak(r){if(!r||typeof r!="string")throw new Error("poki.rewardedBreak needs a placement name");return Am("rewardedBreak",!1,r)},shouldSkipCommercialBreak:null,commercialBreak(){if(Os.size){console.log(`[POKI] commercialBreak held back: ${[...Os].map(r=>r.reason).join(", ")}`);return}if(!_n.shouldSkipCommercialBreak?.())return Am("commercialBreak",void 0)},holdBreaks(r){if(!r)throw new Error("poki.holdBreaks needs a reason");let e={reason:r};return Os.add(e),()=>{Os.delete(e)}},get breakHolds(){return[...Os].map(r=>r.reason)},captureError:r=>br("captureError",r),measure(r,e,t){let n=o=>String(o).replace(/[^A-Za-z0-9 _:.+|\-]/g,"_"),i=0,s=o=>n(o).replace(/\d+/g,l=>++i>2?"n":l),a=[s(r),s(e),s(t)];i>2&&Mr()&&console.warn(`[POKI] measure: more than two numbers in [${r}] ${e} => ${t}; sent as`,a),ks.push(a),Rm()},get pendingMeasures(){return ks.length},async shareableURL(r){let e=Jn();if(Mr()||!e||typeof e.shareableURL!="function")return null;try{let t=await e.shareableURL(r);return typeof t=="string"&&t?t:null}catch(t){return console.warn("PokiSDK.shareableURL failed:",t),null}},urlParam(r){let e=Jn();if(e&&typeof e.getURLParam=="function")try{let t=e.getURLParam(r);if(t)return String(t)}catch(t){console.warn("PokiSDK.getURLParam failed:",t)}return typeof location>"u"?"":new URLSearchParams(location.search).get(r)||""},async user(){if(Mr())return Dm();let r=Jn();if(!r||typeof r.getUser!="function")return null;try{return await r.getUser()||null}catch{return null}},async login(){if(Mr()){let e=await v_();if(!e)return null;let t={username:e,profilePictureUrl:gu};try{localStorage.setItem(Pm,JSON.stringify(t))}catch{}return t}let r=Jn();if(!r||typeof r.login!="function")return null;At.save();try{return await r.login()||null}catch{return null}},getLanguage(){let r=br("getLanguage");return typeof r=="string"?r:""}};var zs={spino_egg:{menuGroup:"decoration",mesh:"mesh/island/iguano_egg.glb",material:"foliage",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1,hueShift:.18},spino_guide:{class:"npc",species:"spino",colliderType:"spino",mesh:"pack_a/npc/spino/spino.glb",texture:"pack_a/spino/textures/texture.webp",behavior:"trex",data:{dinoName:33,walkSpeed:1,runSpeed:3,swimDepthJuvenile:-.24,swimDepthTeen:-.6,swimDepthAdult:-.8,acceleration:6,rotationSpeed:1,stealthThreshold:0,maxHealth:200,attackDamage:60,consumeValue:70,waterValue:1,isFoodType:2,eatsFoodType:2,respawnInterval:240,fightsBack:!0,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.5,offset:[0,.491217301,.08004597]},stayPutMission:!0,audioType:"spino",playableSkin:"spino"},stego_egg:{menuGroup:"decoration",mesh:"mesh/island/iguano_egg.glb",material:"foliage",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1,hueShift:-.34},stego_guide:{class:"npc",species:"stego",colliderType:"stego",mesh:"pack_a/npc/stego/stego.glb",texture:"pack_a/stego/textures/texture.webp",behavior:"ankylo",data:{dinoName:34,walkSpeed:.6,runSpeed:1.8,swimDepthJuvenile:-.16,swimDepthTeen:-.35,swimDepthAdult:-.6,acceleration:4,rotationSpeed:.5,stealthThreshold:0,maxHealth:300,attackDamage:90,consumeValue:50,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:240,fightsBack:!0,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.5,offset:[0,.399176301,.08004597]},stayPutMission:!0,audioType:"stego",playableSkin:"stego"},deinosuchus:{class:"npc",confinedToWater:!0,mesh:"pack_a/npc/deinosuchus/deinosuchus.glb",texture:"pack_a/npc/deinosuchus/deinosuchus_texture.webp",behavior:"deinosuchus",data:{dinoName:36,walkSpeed:.35,runSpeed:.7,aquaticSurfaceDepth:.55,swimDepthJuvenile:-.4,swimDepthTeen:-.4,swimDepthAdult:-.4,acceleration:2,rotationSpeed:1.2,stealthThreshold:0,maxHealth:100,attackDamage:25,consumeValue:80,waterValue:1,isFoodType:2,eatsFoodType:2,respawnInterval:180,fightsBack:!1,detectionRangeEnter:0,detectionRangeExit:0,fleeDistance:0},food:{radius:.55,offset:[0,0,0]},hitSpots:[{forward:0,right:0,height:.15,radius:.55,verticalScale:.6},{forward:.8,right:0,height:.366,radius:.432}],audioType:"deinosuchus"},iguano:{class:"npc",skinType:"iguano",audioType:"iguano",mesh:"pack_a/npc/iguano/iguano.glb",texture:"pack_a/iguano/textures/texture.webp",behavior:"triceratops",data:{dinoName:32,walkSpeed:.6,runSpeed:1.8,swimDepthJuvenile:-.16,swimDepthTeen:-.35,swimDepthAdult:-.6,acceleration:4,rotationSpeed:.5,stealthThreshold:0,maxHealth:100,attackDamage:15,consumeValue:70,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:240,fightsBack:!0,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.4,offset:[0,.399176301,.08004597]}},proto:{class:"npc",mesh:"pack_a/npc/proto/proto.glb",texture:"pack_a/npc/proto/proto_texture.webp",behavior:"nodosaurus",data:{dinoName:29,walkSpeed:.3,runSpeed:1,swimDepthJuvenile:-.15,swimDepthTeen:-.15,swimDepthAdult:-.15,acceleration:2,rotationSpeed:1.5,stealthThreshold:4,maxHealth:5,attackDamage:1,consumeValue:20,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:180,fightsBack:!1,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10,takesCover:!0},food:{radius:.35,offset:[0,.180426301,0]},audioType:"proto"},diplo:{class:"npc",colliderType:"diplo",mesh:"pack_a/npc/diplo/diplo.glb",texture:"pack_a/npc/diplo/diplo_texture.webp",behavior:"diplo",data:{dinoName:35,walkSpeed:.5,runSpeed:1.8,swimDepthJuvenile:-.2,swimDepthTeen:-.6,swimDepthAdult:-1,acceleration:2,rotationSpeed:.5,stealthThreshold:4,maxHealth:340,attackDamage:20,consumeValue:100,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:300,fightsBack:!1,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.7,offset:[0,.6670596010000001,0]},hitSpots:[{forward:.9,right:-.38},{forward:.9,right:.38},{forward:-.9,right:-.38},{forward:-.9,right:.38}],audioType:"diplo"},cerato:{missionTarget:"cerato",class:"npc",mesh:"pack_a/npc/cerato/cerato.glb",texture:"pack_a/npc/cerato/cerato_texture.webp",behavior:"agroraptor",agro:{warningRadius:6,warningInterval:1.6,chaseAfterCalls:3,latchAfterCalls:3,attackRange:.75,attackInterval:1.15,latchAdults:!1,attacksBeforeWarning:1,postAttackPauseAnimation:"notice",postAttackPauseDuration:2,postAttackWarningDelay:0,suppressCounterAttackRoar:!0,separationDistance:.9,escapeDistance:6},data:{dinoName:0,walkSpeed:.7,runSpeed:3,swimDepthJuvenile:-.15,swimDepthTeen:-.25,swimDepthAdult:-.35,acceleration:4,rotationSpeed:3,stealthThreshold:0,maxHealth:45,attackDamage:15,consumeValue:35,waterValue:1,isFoodType:2,eatsFoodType:2,respawnInterval:180,fightsBack:!0,detectionRangeEnter:6,detectionRangeExit:7,fleeDistance:10},food:{radius:.5,offset:[0,.3,0]},audioType:"cerato"},iguano_egg:{menuGroup:"decoration",mesh:"mesh/island/iguano_egg.glb",material:"foliage",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},agroraptor:{missionTarget:"agroraptor",class:"npc",mesh:"pack_a/npc/raptor/raptor.glb",texture:"pack_a/npc/raptor/raptor_texture2.webp",data:{dinoName:11,walkSpeed:.5,runSpeed:2,swimDepthJuvenile:0,swimDepthTeen:0,swimDepthAdult:-.3,acceleration:2,rotationSpeed:4,stealthThreshold:4,maxHealth:40,attackDamage:35,consumeValue:20,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:180,fightsBack:!0,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.5,offset:[0,.167242701,0]}},alcione:{class:"npc",mesh:"pack_a/npc/alcione/alcione.glb",texture:"pack_a/npc/alcione/texture.webp",data:{dinoName:27,walkSpeed:.35,runSpeed:1.5,swimDepthJuvenile:-.15,swimDepthTeen:-.15,swimDepthAdult:-.15,acceleration:2,rotationSpeed:2.5,stealthThreshold:4,maxHealth:5,attackDamage:0,consumeValue:20,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:180,fightsBack:!1,detectionRangeEnter:5,detectionRangeExit:7,fleeDistance:10},food:{radius:.3,offset:[0,.16,0]}},ankylo:{class:"npc",mesh:"pack_a/npc/ankylo/ankylo.glb",texture:"pack_a/npc/ankylo/ankylo_texture.webp",data:{dinoName:22,walkSpeed:.6,runSpeed:1.8,swimDepthJuvenile:-.16,swimDepthTeen:-.35,swimDepthAdult:-.6,acceleration:4,rotationSpeed:.5,stealthThreshold:0,maxHealth:300,attackDamage:90,consumeValue:50,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:240,fightsBack:!0,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.5,offset:[0,.399176301,.08004597]}},bananatree:{menuGroup:"food",mesh:"mesh/foliage/bananatree.glb",material:"foliage",meshTransform:null,food:{radius:.202817562,offset:[0,.24196488,0]},obstacles:[],plant:{maxHealth:3,isFoodType:1,respawnInterval:120,dinoName:2},walkable:!1},bone:{menuGroup:"decoration",mesh:"mesh/foliage/bone.glb",material:"foliage",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},bridge:{menuGroup:"terrain",mesh:"mesh/foliage/bridge.glb",material:"rock",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!0},bridge_dark:{menuGroup:"terrain",mesh:"mesh/foliage/bridge.glb",material:"rock_dark",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!0},bridge_red:{menuGroup:"terrain",mesh:"mesh/foliage/bridge.glb",material:"rock_red",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!0},bush:{menuGroup:"foliage",mesh:"mesh/foliage/bush.glb",material:"foliage",meshTransform:[1,0,0,0,1,0,0,0,1,0,.05670078098773956,2.3430261611938477],food:null,obstacles:[],plant:null,walkable:!1,cover:[{kind:"circle",offset:[0,0,0],radius:.5,height:.55}]},bushcluster:{menuGroup:"foliage",mesh:"mesh/foliage/bushcluster.glb",material:"foliage",meshTransform:[1,0,0,0,1,0,0,0,1,0,.05670078098773956,2.3430261611938477],food:null,obstacles:[],plant:null,walkable:!1,cover:[{kind:"circle",offset:[-.7846348547693691,0,-.49964390125409586],radius:.6,height:.6},{kind:"circle",offset:[1.0220913839167851,0,.252089852228746],radius:.6,height:.58},{kind:"circle",offset:[-.07173754159456744,0,.24156173138757064],radius:.61,height:.5},{kind:"circle",offset:[.5142947980075738,0,.9387611097685011],radius:.48,height:.5},{kind:"circle",offset:[1.6263007789258301,0,.9260753656978593],radius:.46,height:.5},{kind:"circle",offset:[-.9330465867768483,0,.3666965371974631],radius:.4,height:.5},{kind:"circle",offset:[-1.2337969911330469,0,-1.3212735561234046],radius:.41,height:.5}]},bushfruit:{menuGroup:"food",mesh:"mesh/foliage/bushfruit.glb",material:"foliage",meshTransform:[1,0,0,0,1,0,0,0,1,0,.05426441883526062,2.2423491500469375],food:{radius:.5,offset:[0,-.07699418,0]},obstacles:[],plant:{maxHealth:5,isFoodType:1,respawnInterval:120,dinoName:3},walkable:!1,cover:[{kind:"circle",offset:[0,0,0],radius:.45,height:.45}]},circular_slope:{menuGroup:"terrain",mesh:"mesh/vegetation/circular_slope.glb",material:"rock",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!0},circular_slope_dark:{menuGroup:"terrain",mesh:"mesh/vegetation/circular_slope.glb",material:"rock_dark",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!0},circular_slope_red:{menuGroup:"terrain",mesh:"mesh/vegetation/circular_slope.glb",material:"rock_red",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!0},coelacanth:{class:"npc",mesh:"pack_b/npc/coelacanth/coelacanth.glb",texture:"pack_b/npc/coelacanth/coelacanth_texture.webp",behavior:"aquaticFish",data:{dinoName:0,walkSpeed:.55,runSpeed:1.1,swimDepthJuvenile:-.4,swimDepthTeen:-.4,swimDepthAdult:-.4,acceleration:2,rotationSpeed:1.5,stealthThreshold:0,maxHealth:25,attackDamage:0,consumeValue:25,waterValue:1,isFoodType:2,eatsFoodType:2,respawnInterval:120,fightsBack:!1,detectionRangeEnter:0,detectionRangeExit:0,fleeDistance:0},food:{radius:.4,offset:[0,0,0]}},compy:{class:"npc",mesh:"pack_a/npc/compy/compy.glb",texture:"pack_a/npc/compy/compy_texture.webp",data:{dinoName:7,walkSpeed:.5,runSpeed:1,swimDepthJuvenile:-.2,swimDepthTeen:-.6,swimDepthAdult:-.14,acceleration:1,rotationSpeed:4,stealthThreshold:4,maxHealth:1,attackDamage:1,consumeValue:5,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:120,fightsBack:!1,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10,skittish:!0,scatterRange:2,scatterSeconds:1.5},food:{radius:.14208984,offset:[0,.17159159999999996,0]}},hypsi:{class:"npc",mesh:"mesh/npc/hypsi/hypsi.glb",texture:"mesh/npc/hypsi/hypsi_texture.webp",data:{dinoName:7,walkSpeed:.5,runSpeed:1,swimDepthJuvenile:-.2,swimDepthTeen:-.6,swimDepthAdult:-.14,acceleration:1,rotationSpeed:4,stealthThreshold:4,maxHealth:1,attackDamage:1,consumeValue:5,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:120,fightsBack:!1,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10,takesCover:!0},food:{radius:.14208984,offset:[0,.17159159999999996,0]}},deadtree:{menuGroup:"foliage",mesh:"mesh/vegetation/deadtree.glb",material:"foliage",meshTransform:null,food:null,obstacles:[{kind:"capsule",offset:[.04,.47,-.12],radius:.4,height:2,rotation:[0,0,0]}],plant:null,walkable:!1},dilopho:{class:"npc",mesh:"pack_b/npc/dilopho/dilopho.glb",texture:"pack_b/npc/dilopho/dilopho_texture.webp",behavior:"raptor",data:{dinoName:31,walkSpeed:.5,runSpeed:2,swimDepthJuvenile:0,swimDepthTeen:0,swimDepthAdult:-.3,acceleration:2,rotationSpeed:4,stealthThreshold:4,maxHealth:30,attackDamage:20,consumeValue:20,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:180,fightsBack:!0,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.5,offset:[0,.167242701,0]}},dimetrodon:{class:"npc",mesh:"pack_a/npc/dimetrodon/dimetrodon.glb",texture:"pack_a/npc/dimetrodon/dimetrodon_texture.webp",data:{dinoName:8,walkSpeed:.2,runSpeed:.5,swimDepthJuvenile:-.2,swimDepthTeen:-.6,swimDepthAdult:-1,acceleration:2,rotationSpeed:1.5,stealthThreshold:4,maxHealth:2,attackDamage:1,consumeValue:15,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:120,fightsBack:!1,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10,takesCover:!0},food:{radius:.25,offset:[0,.233648951,.005340576]}},driftwood:{menuGroup:"foliage",mesh:"mesh/foliage/driftwood.glb",material:"foliage",meshTransform:[.46950015,0,0,0,.46950015,0,0,0,.46950015,3310514379295526e-23,9763127892942203e-26,-25552715610110965e-24],food:null,obstacles:[{kind:"box",offset:[-.13,.14,.31],half:[.72,.13,.19],rotation:[0,23,0]}],plant:null,walkable:!1},dunkleo:{class:"npc",confinedToWater:!0,mesh:"pack_a/npc/dunkleo/dunkleo.glb",texture:"pack_a/npc/dunkleo/texture.webp",data:{dinoName:28,walkSpeed:.65,runSpeed:.65,swimDepthJuvenile:-.4,swimDepthTeen:-.4,swimDepthAdult:-.4,acceleration:2,rotationSpeed:1.5,stealthThreshold:0,maxHealth:35,attackDamage:0,consumeValue:40,waterValue:1,isFoodType:2,eatsFoodType:2,respawnInterval:120,fightsBack:!1,detectionRangeEnter:0,detectionRangeExit:0,fleeDistance:0},food:{radius:.5,offset:[0,0,0]}},edgeplant:{menuGroup:"foliage",mesh:"mesh/vegetation/edgeplant.glb",material:"foliage",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},fallentree:{menuGroup:"foliage",mesh:"mesh/vegetation/fallentree.glb",material:"foliage",meshTransform:null,food:null,obstacles:[{kind:"capsule",offset:[-.41,.29,.02],radius:.2,height:6,rotation:[0,0,90]}],plant:null,walkable:!1},ferntree:{menuGroup:"foliage",mesh:"mesh/foliage/ferntree.glb",material:"foliage",meshTransform:[.9204561114311218,0,0,0,.9204561114311218,0,0,0,.9204561114311218,.012212500087066059,-.00741226838182514,.5226711678287623],food:null,obstacles:[],plant:null,walkable:!1},flowergate:{class:"racegate",mesh:"mesh/island/flowergate.glb",material:"foliage",meshTransform:null,food:null,obstacles:[{kind:"circle",offset:[.04,0,-.83],radius:.14},{kind:"circle",offset:[.04,0,.83],radius:.14}],plant:null,walkable:!1,menuGroup:"gameplay"},flowers:{menuGroup:"food",mesh:"mesh/foliage/flowers.glb",material:"foliage",meshTransform:[.9204561114311218,0,0,0,.9204561114311218,0,0,0,.9204561114311218,-.007069468554723748,-.0021084472705531635,-1.9359882032608489],food:{radius:.27115685,offset:[0,-.022864342,0]},obstacles:[],plant:{maxHealth:1,isFoodType:1,respawnInterval:180,dinoName:18},walkable:!1},flowers_2:{menuGroup:"food",mesh:"mesh/foliage/flowers2.glb",material:"foliage",meshTransform:[.9204561,0,0,0,.9204561,0,0,0,.9204561,.01705476820526823,-.003316608708702573,-2.914266842014616],food:{radius:.25,offset:[0,.1012355,0]},obstacles:[],plant:{maxHealth:1,isFoodType:1,respawnInterval:180,dinoName:19},walkable:!1},galli:{class:"npc",missionTarget:"galli",mesh:"mesh/npc/galli.glb",texture:"textures/npc/galli.webp",behavior:"raptor",runFootfalls:2,data:{dinoName:35,walkSpeed:.6,runSpeed:2.6,swimDepthJuvenile:0,swimDepthTeen:0,swimDepthAdult:-.3,acceleration:2,rotationSpeed:4,stealthThreshold:4,maxHealth:20,attackDamage:10,consumeValue:20,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:180,fightsBack:!0,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.5,offset:[0,.35,0]}},grass:{menuGroup:"foliage",mesh:"mesh/foliage/grass.glb",material:"foliage",meshTransform:[.9204561114311218,0,0,0,.9204561114311218,0,0,0,.9204561114311218,.03782709349771882,.0011593967315792122,1.4519003761538898],food:null,obstacles:[],plant:null,walkable:!1},hidebush:{menuGroup:"foliage",mesh:"mesh/foliage/hidebush.glb",material:"foliage",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1,cover:[{kind:"circle",offset:[0,0,0],radius:1.3,height:1.5}]},hollowtrunk:{menuGroup:"foliage",mesh:"mesh/foliage/hollowtrunk.glb",material:"foliage",meshTransform:null,food:null,obstacles:[{kind:"box",offset:[.1168359990039951,.6,.5430505197342149],half:[2.035,.5,.195],rotation:[0,0,0]},{kind:"box",offset:[.13910925533981566,.6,-.6092189619494448],half:[2.025,.5,.195],rotation:[0,0,0]},{kind:"box",offset:[.13049883475211255,1.09,-.03745924120523969],half:[2.125,.1,.5],rotation:[0,0,0]}],plant:null,walkable:!1,cover:[{kind:"capsule",offset:[.12,.48,0],rotation:[0,0,-90],radius:.64,height:4.64}]},iguano_guide:{class:"npc",species:"iguano",stayPutMission:!0,skinType:"iguano",mesh:"pack_a/npc/iguano/iguano.glb",texture:"pack_a/iguano/textures/texture.webp",behavior:"triceratops",data:{dinoName:32,walkSpeed:.6,runSpeed:1.8,swimDepthJuvenile:-.16,swimDepthTeen:-.35,swimDepthAdult:-.6,acceleration:4,rotationSpeed:.5,stealthThreshold:0,maxHealth:100,attackDamage:15,consumeValue:70,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:240,fightsBack:!0,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.4,offset:[0,.399176301,.08004597]}},melon:{menuGroup:"food",mesh:"mesh/foliage/melon.glb",material:"foliage",meshTransform:[.4402490229108062,14266500487913891e-24,27252947643399694e-24,-30248671857233123e-25,-7655850012278087e-23,.4402489738025851,18529963854985176e-24,-.44024903982520547,-10939692444977833e-23,0,0,0],food:{radius:.22754899,offset:[.02353593,.0260185,.011812985]},obstacles:[],plant:{maxHealth:1,isFoodType:1,respawnInterval:180,dinoName:1},walkable:!1},lava:{menuGroup:"gameplay",mesh:"mesh/lava.gltf",material:"lava",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},lava_large:{menuGroup:"gameplay",mesh:"mesh/lava_large.gltf",material:"lava",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},waterplane:{menuGroup:"terrain",mesh:"mesh/waterplane.gltf",material:"waterfallriver",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},lavaaudio:{menuGroup:"scenery",mesh:null,material:null,meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1,audio:{path:"audio/lava.ogg",maxDistance:20,unitSize:2.5,volume:.8}},nuts:{menuGroup:"food",mesh:"mesh/foliage/nuts.glb",material:"foliage",food:{radius:.22754899,offset:[.02353593,.0260185,.011812985]},obstacles:[],plant:{maxHealth:1,isFoodType:1,respawnInterval:180,dinoName:1},walkable:!1},mudpool:{menuGroup:"scenery",mesh:"mesh/island/mudpool.glb",material:"mud",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},nest:{menuGroup:"gameplay",mesh:"mesh/foliage/nest.glb",material:"foliage",meshTransform:[1,0,0,0,1,0,0,0,1,0,0,0],food:null,obstacles:[],plant:null,walkable:!1},nodosaurus:{class:"npc",mesh:"pack_a/npc/nodosaurus/nodosaurus.glb",texture:"pack_a/npc/nodosaurus/nodosaurus_texture.webp",data:{dinoName:9,walkSpeed:.3,runSpeed:1,swimDepthJuvenile:-.15,swimDepthTeen:-.15,swimDepthAdult:-.15,acceleration:2,rotationSpeed:1.5,stealthThreshold:4,maxHealth:5,attackDamage:1,consumeValue:20,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:180,fightsBack:!1,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10,takesCover:!0},food:{radius:.35,offset:[0,.180426301,0]}},oaktree:{menuGroup:"foliage",mesh:"mesh/vegetation/oaktree.glb",material:"foliage",meshTransform:null,food:null,obstacles:[{kind:"capsule",offset:[0,1.8,0],radius:.5,height:5,rotation:[0,0,0]}],plant:null,walkable:!1},pachy:{class:"npc",mesh:"pack_a/npc/pachy/pachy.glb",texture:"pack_a/npc/pachy/pachy_texture.webp",appendageColliders:[{forward:.3,height:.37,radius:.14}],data:{dinoName:17,walkSpeed:.5,runSpeed:2,swimDepthJuvenile:0,swimDepthTeen:0,swimDepthAdult:-.35,acceleration:2,rotationSpeed:4,stealthThreshold:4,maxHealth:40,attackDamage:32,consumeValue:35,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:240,fightsBack:!0,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.5,offset:[0,.205755891,-.028127268]}},palmbush:{menuGroup:"foliage",mesh:"mesh/foliage/palmbush.glb",material:"foliage",meshTransform:[.9204561114311218,0,0,0,.9204561114311218,0,0,0,.9204561114311218,.02101502959143513,-.005888074689931925,.998047599319511],food:null,obstacles:[],plant:null,walkable:!1},parasaurus:{class:"npc",mesh:"pack_a/npc/parasaurus/parasaurus.glb",texture:"pack_a/npc/parasaurus/parasaurus_texture.webp",appendageColliders:[{forward:.5,height:.52,radius:.2}],data:{dinoName:10,walkSpeed:.4,runSpeed:2,swimDepthJuvenile:-.1,swimDepthTeen:-.3,swimDepthAdult:-.5,acceleration:2,rotationSpeed:1.5,stealthThreshold:4,maxHealth:35,attackDamage:1,consumeValue:40,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:120,fightsBack:!1,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.5,offset:[0,.301275901,.05331257]}},pineapple:{menuGroup:"food",mesh:"mesh/foliage/pineapple.glb",material:"foliage",meshTransform:[.44024903,0,0,0,.44024903,0,0,0,.44024903,0,0,0],food:{radius:.24511719,offset:[0,.11686915,0]},obstacles:[],plant:{maxHealth:2,isFoodType:1,respawnInterval:120,dinoName:4},walkable:!1},pinetree:{menuGroup:"foliage",mesh:"mesh/vegetation/pinetree.glb",material:"foliage",meshTransform:null,food:null,obstacles:[{kind:"capsule",offset:[0,.49,.08],radius:.15,height:1.5,rotation:[0,0,0]}],plant:null,walkable:!1},plateau:{menuGroup:"terrain",mesh:"mesh/vegetation/plateau.glb",material:"rock",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!0},plateau_dark:{menuGroup:"terrain",mesh:"mesh/vegetation/plateau.glb",material:"rock_dark",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!0},plateau_red:{menuGroup:"terrain",mesh:"mesh/vegetation/plateau.glb",material:"rock_red",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!0},psittaco:{class:"npc",mesh:"pack_c/npc/psittaco/psittaco.glb",texture:"pack_c/npc/psittaco/psittaco_texture.webp",behavior:"nodosaurus",data:{dinoName:29,walkSpeed:.3,runSpeed:1,swimDepthJuvenile:-.15,swimDepthTeen:-.15,swimDepthAdult:-.15,acceleration:2,rotationSpeed:1.5,stealthThreshold:4,maxHealth:5,attackDamage:1,consumeValue:20,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:180,fightsBack:!1,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10,takesCover:!0},food:{radius:.35,offset:[0,.180426301,0]}},pteranodon:{class:"npc",mesh:"pack_a/npc/pteranodon/pteranodon.glb",texture:"pack_a/npc/pteranodon/texture.webp",data:{dinoName:26,walkSpeed:.3,runSpeed:1,swimDepthJuvenile:-.15,swimDepthTeen:-.15,swimDepthAdult:-.15,acceleration:2,rotationSpeed:1.5,stealthThreshold:4,maxHealth:5,attackDamage:1,consumeValue:20,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:180,fightsBack:!1,detectionRangeEnter:5,detectionRangeExit:7,fleeDistance:10},food:{radius:.35,offset:[0,.180426301,0]}},raptor:{class:"npc",code:"pack_a/npc/raptor/night_hunt.js",mesh:"pack_a/npc/raptor/raptor.glb",texture:"pack_a/npc/raptor/raptor_texture.webp",data:{dinoName:11,walkSpeed:.5,runSpeed:2,swimDepthJuvenile:0,swimDepthTeen:0,swimDepthAdult:-.3,acceleration:2,rotationSpeed:4,stealthThreshold:4,maxHealth:30,attackDamage:35,consumeValue:20,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:180,fightsBack:!0,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.425,offset:[0,.167242701,0]}},reed:{menuGroup:"foliage",mesh:"mesh/vegetation/reed.glb",material:"foliage",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},rhampho:{class:"npc",mesh:"pack_b/npc/rhampho/rhampho.glb",texture:"pack_b/npc/rhampho/rhampho_texture.webp",behavior:"alcione",data:{dinoName:30,walkSpeed:.35,runSpeed:1.5,swimDepthJuvenile:-.15,swimDepthTeen:-.15,swimDepthAdult:-.15,acceleration:2,rotationSpeed:2.5,stealthThreshold:4,maxHealth:5,attackDamage:0,consumeValue:20,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:180,fightsBack:!1,detectionRangeEnter:5,detectionRangeExit:7,fleeDistance:10},food:{radius:.3,offset:[0,.16,0]}},rib:{menuGroup:"decoration",mesh:"mesh/foliage/rib.glb",material:"foliage",meshTransform:null,food:null,obstacles:[{kind:"capsule",offset:[.07,.53,.05],radius:.25,height:1.54,rotation:[0,0,0]}],plant:null,walkable:!1},ribcage:{menuGroup:"decoration",mesh:"mesh/foliage/ribcage.glb",material:"foliage",meshTransform:null,food:null,obstacles:[{kind:"box",offset:[.74,.64,-.28],half:[.2,.745,.99],rotation:[0,6,0]},{kind:"box",offset:[-.69,.62,0],half:[.23,.75,1.25],rotation:[0,0,0]},{kind:"capsule",offset:[.6764613625931534,.18,.8354320727817273],radius:.19,height:1,rotation:[0,32,90],scale:[1,1,1]}],plant:null,walkable:!1},rock_01:{menuGroup:"scenery",mesh:"mesh/vegetation/rock_01.glb",material:"rock",meshTransform:null,food:null,obstacles:[{kind:"cubecapsule",offset:[0,.04,0],rotation:[0,0,-7],half:[.09,.02,.0525],radius:.0175}],plant:null,walkable:!1},rock_01_dark:{menuGroup:"scenery",mesh:"mesh/vegetation/rock_01.glb",material:"rock_dark",meshTransform:null,food:null,obstacles:[{kind:"cubecapsule",offset:[0,.04,0],rotation:[0,0,-7],half:[.09,.02,.0525],radius:.0175}],plant:null,walkable:!1},rock_01_red:{menuGroup:"scenery",mesh:"mesh/vegetation/rock_01.glb",material:"rock_red",meshTransform:null,food:null,obstacles:[{kind:"cubecapsule",offset:[0,.04,0],rotation:[0,0,-7],half:[.09,.02,.0525],radius:.0175}],plant:null,walkable:!1},rock_1:{menuGroup:"scenery",mesh:"mesh/foliage/rock1.glb",material:"rock",meshTransform:[.5209538340568542,0,0,0,.5209538340568542,0,0,0,.5209538340568542,0,0,0],food:null,obstacles:[{kind:"cubecapsule",offset:[.3834713406292112,.08,.20368133421338752],rotation:[0,-6,0],half:[.27,.03,.275],radius:.1},{kind:"cubecapsule",offset:[.11111382403187858,.11,-.1277216008096963],rotation:[0,8,5],half:[.41,.095,.3275],radius:.1125},{kind:"cubecapsule",offset:[-.5584683435271891,.06,-.13694565487569468],rotation:[-3,17,3],half:[.1925,.06,.2125],radius:.0575},{kind:"cubecapsule",offset:[-.4067242539833039,.07,.06903883363274999],rotation:[0,-24,-90],half:[.055,.22,.135],radius:.08}],plant:null,walkable:!1},rock_1_dark:{menuGroup:"scenery",mesh:"mesh/foliage/rock1.glb",material:"rock_dark",meshTransform:[.5209538340568542,0,0,0,.5209538340568542,0,0,0,.5209538340568542,0,0,0],food:null,obstacles:[{kind:"cubecapsule",offset:[.3834713406292112,.08,.20368133421338752],rotation:[0,-6,0],half:[.27,.03,.275],radius:.1},{kind:"cubecapsule",offset:[.11111382403187858,.11,-.1277216008096963],rotation:[0,8,5],half:[.41,.095,.3275],radius:.1125},{kind:"cubecapsule",offset:[-.5584683435271891,.06,-.13694565487569468],rotation:[-3,17,3],half:[.1925,.06,.2125],radius:.0575},{kind:"cubecapsule",offset:[-.4067242539833039,.07,.06903883363274999],rotation:[0,-24,-90],half:[.055,.22,.135],radius:.08}],plant:null,walkable:!1},rock_1_red:{menuGroup:"scenery",mesh:"mesh/foliage/rock1.glb",material:"rock_red",meshTransform:[.5209538340568542,0,0,0,.5209538340568542,0,0,0,.5209538340568542,0,0,0],food:null,obstacles:[{kind:"cubecapsule",offset:[.3834713406292112,.08,.20368133421338752],rotation:[0,-6,0],half:[.27,.03,.275],radius:.1},{kind:"cubecapsule",offset:[.11111382403187858,.11,-.1277216008096963],rotation:[0,8,5],half:[.41,.095,.3275],radius:.1125},{kind:"cubecapsule",offset:[-.5584683435271891,.06,-.13694565487569468],rotation:[-3,17,3],half:[.1925,.06,.2125],radius:.0575},{kind:"cubecapsule",offset:[-.4067242539833039,.07,.06903883363274999],rotation:[0,-24,-90],half:[.055,.22,.135],radius:.08}],plant:null,walkable:!1},rock_2:{menuGroup:"scenery",mesh:"mesh/foliage/rock2.glb",material:"rock",meshTransform:[1,0,0,0,1,0,0,0,1,0,0,0],food:null,obstacles:[{kind:"capsule",offset:[.02,.89,-.09],radius:1.25,height:3.36,rotation:[0,0,90]}],plant:null,walkable:!1},rock_2_dark:{menuGroup:"scenery",mesh:"mesh/foliage/rock2.glb",material:"rock_dark",meshTransform:[1,0,0,0,1,0,0,0,1,0,0,0],food:null,obstacles:[{kind:"capsule",offset:[.02,.89,-.09],radius:1.25,height:3.36,rotation:[0,0,90]}],plant:null,walkable:!1},rock_2_red:{menuGroup:"scenery",mesh:"mesh/foliage/rock2.glb",material:"rock_red",meshTransform:[1,0,0,0,1,0,0,0,1,0,0,0],food:null,obstacles:[{kind:"capsule",offset:[.02,.89,-.09],radius:1.25,height:3.36,rotation:[0,0,90]}],plant:null,walkable:!1},rock_3:{menuGroup:"scenery",mesh:"mesh/foliage/rock3.glb",material:"rock",meshTransform:null,food:null,obstacles:[{kind:"capsule",offset:[-.26,.43,0],radius:1.79,height:8.14,rotation:[0,0,90]}],plant:null,walkable:!1},rock_3_dark:{menuGroup:"scenery",mesh:"mesh/foliage/rock3.glb",material:"rock_dark",meshTransform:null,food:null,obstacles:[{kind:"capsule",offset:[-.26,.43,0],radius:1.79,height:8.14,rotation:[0,0,90]}],plant:null,walkable:!1},rock_3_red:{menuGroup:"scenery",mesh:"mesh/foliage/rock3.glb",material:"rock_red",meshTransform:null,food:null,obstacles:[{kind:"capsule",offset:[-.26,.43,0],radius:1.79,height:8.14,rotation:[0,0,90]}],plant:null,walkable:!1},rock_cliff_03:{menuGroup:"scenery",mesh:"mesh/vegetation/rock_cliff_03.glb",material:"rock",meshTransform:[1,0,0,0,1,0,0,0,1,0,0,0],food:null,obstacles:[{kind:"cubecapsule",offset:[-.19,.43,.04],rotation:[0,-7,0],scale:[.9272445933534177,.4841233385392969,.7165549976969147],half:[.895,.465,.225],radius:.181839},{kind:"cubecapsule",offset:[.63,.39,.02],rotation:[0,13.999999999999998,0],scale:[.9361426519825851,.41259447205215594,.7988521988537473],half:[.38,.46,.38],radius:.12},{kind:"capsule",offset:[-.91,.39,.09],radius:.19,height:.88,rotation:[0,0,0],scale:[1,1,1]},{kind:"capsule",offset:[.33,.43,-.17],radius:.3,height:.97,rotation:[0,0,0]},{kind:"capsule",offset:[.11,.43,.15],radius:.3,height:.95,rotation:[0,0,0],scale:[1,1,1]}],plant:null,walkable:!1},rock_cliff_03_dark:{menuGroup:"scenery",mesh:"mesh/vegetation/rock_cliff_03.glb",material:"rock_dark",meshTransform:[1,0,0,0,1,0,0,0,1,0,0,0],food:null,obstacles:[{kind:"cubecapsule",offset:[-.19,.43,.04],rotation:[0,-7,0],scale:[.9272445933534177,.4841233385392969,.7165549976969147],half:[.895,.465,.225],radius:.181839},{kind:"cubecapsule",offset:[.63,.39,.02],rotation:[0,13.999999999999998,0],scale:[.9361426519825851,.41259447205215594,.7988521988537473],half:[.38,.46,.38],radius:.12},{kind:"capsule",offset:[-.91,.39,.09],radius:.19,height:.88,rotation:[0,0,0],scale:[1,1,1]},{kind:"capsule",offset:[.33,.43,-.17],radius:.3,height:.97,rotation:[0,0,0]},{kind:"capsule",offset:[.11,.43,.15],radius:.3,height:.95,rotation:[0,0,0],scale:[1,1,1]}],plant:null,walkable:!1},rock_cliff_03_red:{menuGroup:"scenery",mesh:"mesh/vegetation/rock_cliff_03.glb",material:"rock_red",meshTransform:[1,0,0,0,1,0,0,0,1,0,0,0],food:null,obstacles:[{kind:"cubecapsule",offset:[-.19,.43,.04],rotation:[0,-7,0],scale:[.9272445933534177,.4841233385392969,.7165549976969147],half:[.895,.465,.225],radius:.181839},{kind:"cubecapsule",offset:[.63,.39,.02],rotation:[0,13.999999999999998,0],scale:[.9361426519825851,.41259447205215594,.7988521988537473],half:[.38,.46,.38],radius:.12},{kind:"capsule",offset:[-.91,.39,.09],radius:.19,height:.88,rotation:[0,0,0],scale:[1,1,1]},{kind:"capsule",offset:[.33,.43,-.17],radius:.3,height:.97,rotation:[0,0,0]},{kind:"capsule",offset:[.11,.43,.15],radius:.3,height:.95,rotation:[0,0,0],scale:[1,1,1]}],plant:null,walkable:!1},rockwaterfall:{menuGroup:"terrain",mesh:"mesh/vegetation/rockwaterfall.glb",material:"rock",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!0},roots:{menuGroup:"foliage",mesh:"mesh/vegetation/roots.glb",material:"foliage",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},salamander:{class:"npc",missionTarget:"salamander",mesh:"mesh/npc/salamander/salamander.glb",texture:"mesh/npc/salamander/salamander_texture.webp",behavior:"salamander",data:{dinoName:8,walkSpeed:.2,runSpeed:.5,swimSpeedMultiplier:3,grazeDescentSpeed:.1,swimDepthJuvenile:-.2,swimDepthTeen:-.6,swimDepthAdult:-1,acceleration:2,rotationSpeed:1.5,stealthThreshold:4,maxHealth:2,attackDamage:1,consumeValue:15,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:120,fightsBack:!1,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10,takesCover:!0},food:{radius:.25,offset:[0,.233648951,.005340576]}},seaweed:{menuGroup:"foliage",mesh:"mesh/vegetation/seaweed.glb",material:"foliage",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},sharpenrock:{menuGroup:"gameplay",mesh:"mesh/island/sharpenrock.glb",material:"sharpenrock",meshTransform:null,food:null,obstacles:[{kind:"box",half:[1.255,1.69735,.84],offset:[.05198070588262804,1.37685,.043890860059164205],rotation:[0,0,0]}],plant:null,walkable:!1,sharpen:{radius:1.6,spotOffset:[0,0,3]}},shrooms:{menuGroup:"food",mesh:"mesh/foliage/shrooms.glb",material:"foliage",meshTransform:[1,0,0,0,1,0,0,0,1,.15348169207572937,-.013721082359552383,-3.4117987155914307],food:{radius:.33494717,offset:[0,.013496608,0]},obstacles:[],plant:{maxHealth:1,isFoodType:1,respawnInterval:180,dinoName:5},walkable:!1},skull:{menuGroup:"decoration",mesh:"mesh/foliage/skull.glb",material:"foliage",meshTransform:null,food:null,obstacles:[{radius:.37416118,offset:[0,.10103929,0]}],plant:null,walkable:!1},spino:{class:"npc",mesh:"pack_b/npc/spino/spino.glb",texture:"pack_b/spino/textures/texture.webp",behavior:"trex",data:{dinoName:33,walkSpeed:1,runSpeed:3,swimDepthJuvenile:-.24,swimDepthTeen:-.6,swimDepthAdult:-.8,acceleration:6,rotationSpeed:1,stealthThreshold:0,maxHealth:200,attackDamage:60,consumeValue:70,waterValue:1,isFoodType:2,eatsFoodType:2,respawnInterval:240,fightsBack:!0,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.5,offset:[0,.491217301,.08004597]}},stego:{class:"npc",mesh:"pack_b/npc/stego/stego.glb",texture:"pack_b/stego/textures/texture.webp",behavior:"ankylo",data:{dinoName:34,walkSpeed:.6,runSpeed:1.8,swimDepthJuvenile:-.16,swimDepthTeen:-.35,swimDepthAdult:-.6,acceleration:4,rotationSpeed:.5,stealthThreshold:0,maxHealth:300,attackDamage:90,consumeValue:50,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:240,fightsBack:!0,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.5,offset:[0,.399176301,.08004597]}},superfruit:{menuGroup:"food",mesh:"mesh/foliage/superfruit.glb",material:"foliage",meshTransform:[.4402490229108062,14266500487913891e-24,27252947643399694e-24,-30248671857233123e-25,-7655850012278087e-23,.4402489738025851,18529963854985176e-24,-.44024903982520547,-10939692444977833e-23,0,0,0],food:{radius:.302667,offset:[0,.14187455,0]},obstacles:[],plant:{maxHealth:5,isFoodType:1,respawnInterval:300,dinoName:6,consumeValue:50,waterValue:10},walkable:!1},supermeat:{menuGroup:"food",mesh:"mesh/foliage/superfruit.glb",material:"foliage",meshTransform:[.4402490229108062,14266500487913891e-24,27252947643399694e-24,-30248671857233123e-25,-7655850012278087e-23,.4402489738025851,18529963854985176e-24,-.44024903982520547,-10939692444977833e-23,0,0,0],food:{radius:.302667,offset:[0,.14187455,0]},obstacles:[],plant:{maxHealth:100,isFoodType:2,respawnInterval:300,dinoName:16,consumeValue:50,waterValue:10},walkable:!1},superpumpkin:{menuGroup:"food",mesh:"mesh/foliage/superfruit.glb",material:"foliage",meshTransform:[.4402490229108062,14266500487913891e-24,27252947643399694e-24,-30248671857233123e-25,-7655850012278087e-23,.4402489738025851,18529963854985176e-24,-.44024903982520547,-10939692444977833e-23,0,0,0],food:{radius:.302667,offset:[0,.14187455,0]},obstacles:[],plant:{maxHealth:1,isFoodType:1,consumeValue:50,waterValue:10,respawnInterval:300,dinoName:20},walkable:!1},supersteak:{menuGroup:"food",mesh:"mesh/foliage/supersteak.glb",material:"foliage",meshTransform:null,food:{radius:.302667,offset:[0,.14187455,0]},obstacles:[],plant:{maxHealth:55,isFoodType:2,consumeValue:50,waterValue:10,respawnInterval:300,dinoName:16},walkable:!1},titano:{class:"npc",mesh:"pack_a/npc/titano/titano.glb",texture:"pack_a/npc/titano/titano_texture.webp",data:{dinoName:12,walkSpeed:.5,runSpeed:1.8,swimDepthJuvenile:-.2,swimDepthTeen:-.6,swimDepthAdult:-1,acceleration:2,rotationSpeed:.5,stealthThreshold:4,maxHealth:340,attackDamage:1,consumeValue:100,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:300,fightsBack:!1,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.7,offset:[0,.6670596010000001,0]}},tortoise:{class:"npc",mesh:"pack_a/npc/tortoise/tortoise.glb",texture:"pack_a/npc/tortoise/tortoise_texture.webp",data:{dinoName:13,wanderChance:.75,walkSpeed:.05,runSpeed:.1,swimDepthJuvenile:-.2,swimDepthTeen:-.6,swimDepthAdult:-.1,acceleration:1,rotationSpeed:1,stealthThreshold:4,maxHealth:1,attackDamage:1,consumeValue:20,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:120,fightsBack:!1,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.15,offset:[0,.102301301,0]}},treemedium:{menuGroup:"foliage",mesh:"mesh/foliage/treemedium.glb",material:"foliage",meshTransform:[.9204561,0,0,0,.9204561,0,0,0,.9204561,28092581212668666e-26,-4712202520545938e-25,-.9709767656010894],food:null,obstacles:[{radius:.1303711,offset:[-.060849667,.28,0]}],plant:null,walkable:!1},treetall:{menuGroup:"foliage",mesh:"mesh/foliage/treetall.glb",material:"foliage",meshTransform:[.9204561,0,0,0,.9204561,0,0,0,.9204561,-.03607312,.0025307108,.03182715],food:null,obstacles:[{radius:.17236328,offset:[-.07426131,.14,0]}],plant:null,walkable:!1},treetallcluster:{menuGroup:"foliage",mesh:"mesh/foliage/treetallcluster.glb",material:"foliage",meshTransform:[.9204561114311218,0,0,0,.9204561114311218,0,0,0,.9204561114311218,0,0,0],food:null,obstacles:[{radius:.16748047,offset:[-.59125376,.31,.51562864]},{radius:.16748047,offset:[.86625576,.35,.30250221]},{radius:.16748047,offset:[.013750315,.29,-.7287547]}],plant:null,walkable:!1},trunk:{class:"destructible",menuGroup:"gameplay",mesh:"mesh/island/trunk.glb",material:"foliage",maxHealth:15,triggerRadius:1.1,obstacles:[{kind:"capsule",offset:[.03,.16,0],radius:.25,height:1.43,rotation:[0,0,90]}],plant:null,food:null,walkable:!1},trex:{class:"npc",mesh:"pack_a/npc/trex/trex.glb",texture:"pack_a/trex/textures/texture.webp",data:{dinoName:14,walkSpeed:1,runSpeed:3,swimDepthJuvenile:-.24,swimDepthTeen:-.6,swimDepthAdult:-.8,acceleration:6,rotationSpeed:1,stealthThreshold:0,maxHealth:200,attackDamage:60,consumeValue:70,waterValue:1,isFoodType:2,eatsFoodType:2,respawnInterval:240,fightsBack:!0,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.5,offset:[0,.491217301,.08004597]}},triceratops:{class:"npc",mesh:"pack_a/npc/triceratops/triceratops.glb",texture:"pack_a/trike/textures/texture.webp",data:{dinoName:15,walkSpeed:.6,runSpeed:1.8,swimDepthJuvenile:-.16,swimDepthTeen:-.35,swimDepthAdult:-.6,acceleration:4,rotationSpeed:.5,stealthThreshold:0,maxHealth:180,attackDamage:45,consumeValue:70,waterValue:1,isFoodType:2,eatsFoodType:1,respawnInterval:240,fightsBack:!0,detectionRangeEnter:4,detectionRangeExit:7,fleeDistance:10},food:{radius:.4,offset:[0,.399176301,.08004597]}},vertibrate:{menuGroup:"decoration",mesh:"mesh/foliage/vertibrate.glb",material:"foliage",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},waterfall:{menuGroup:"scenery",mesh:"mesh/vegetation/waterfall.glb",material:"waterfall",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},waterfallaudio:{menuGroup:"scenery",mesh:null,material:null,meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1,audio:{path:"audio/waterfall.ogg",maxDistance:30,unitSize:2.5,volume:.8}},waterfallfoam:{menuGroup:"scenery",mesh:null,material:null,meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1,effect:"waterfallfoam"},waterfallriver:{menuGroup:"scenery",mesh:"mesh/vegetation/waterfallriver.glb",material:"waterfallriver",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},waterplant:{menuGroup:"foliage",mesh:"mesh/vegetation/waterplant.glb",material:"foliage",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},packc_edgeplant:{menuGroup:"foliage",mesh:"pack_c/mesh/edgeplant.glb",material:"foliage",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},packc_reed:{menuGroup:"foliage",mesh:"pack_c/mesh/reed.glb",material:"foliage",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},packc_roots:{menuGroup:"foliage",mesh:"pack_c/mesh/roots.glb",material:"foliage",meshTransform:null,food:null,obstacles:[{kind:"box",offset:[-.07,.18,0],half:[.895,.405,.145],rotation:[0,0,0]}],plant:null,walkable:!1},packc_seaweed:{menuGroup:"foliage",mesh:"pack_c/mesh/seaweed.glb",material:"foliage",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},packc_waterfall:{menuGroup:"scenery",mesh:"pack_c/mesh/waterfall.glb",material:"waterfall",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},packc_waterplant:{menuGroup:"foliage",mesh:"pack_c/mesh/waterplant.glb",material:"foliage",meshTransform:null,food:null,obstacles:[],plant:null,walkable:!1},zwam:{menuGroup:"food",mesh:"mesh/foliage/zwam.glb",material:"foliage",meshTransform:null,food:{radius:.302667,offset:[0,.14187455,0]},obstacles:[],plant:{maxHealth:1,isFoodType:3,respawnInterval:300,dinoName:21,speedBoost:1.15,consumeValue:-20},walkable:!1}};var rl=r=>zs[r]?.species??r;var Mt=null,al=new Map;function lS(){let r=new Map(al);return al.clear(),r}function cS(r){al.clear(),Mt=r??null,xu.clear(),sl=null}function Lm(r){return!r||!Ds(r)?null:qn(r).mating?.counterpart??null}var Nm=()=>Lm(At.dino_type);function Gs(r){return Mt?r==="fossil"?(Mt.fossils??[]).map(wr):r==="mud"?(Mt.mud??[]).map(wr):r==="sharpen"?(Mt.props??[]).map((e,t)=>zs[e.type]?.sharpen?wr(e,t):null).filter(e=>e!==null):r==="shroom"?(Mt.props??[]).map((e,t)=>(zs[e.type]?.plant?.speedBoost??0)>0?wr(e,t):null).filter(e=>e!==null):r==="kin"?Um(Nm()):r==="lick"?M_():[]:[]}function hS(r,e){if(!Mt)return null;let t=0;for(let[n,i]of(Mt.props??[]).entries())if(i.type===r&&t++===e)return wr(i,n);return null}function M_(){return Mt?[...new Set((Mt.npcs??[]).map(r=>rl(r.type)))]:[]}function Um(r){if(!r||!Mt)return[];let e=[];return(Mt.npcs??[]).forEach((t,n)=>{rl(t.type)===rl(r)&&e.push(String(n))}),e}var xu=new Map;function Tr(r,e){let t=xu.get(r);return t||(t=new Set(e()),xu.set(r,t)),t}var w_=()=>Tr("fossil",()=>Gs("fossil")),T_=()=>Tr("mud",()=>Gs("mud")),E_=()=>Tr("sharpen",()=>Gs("sharpen")),A_=()=>Tr("shroom",()=>Gs("shroom")),Fm=r=>Tr(`kin:${r}`,()=>Um(r)),C_=()=>Tr("lick",()=>Gs("lick")),Om=r=>r==="fossil"?w_():r==="mud"?T_():r==="sharpen"?E_():r==="shroom"?A_():r==="lick"?C_():null,sl=null;function Bm(){if(sl)return sl;let r=Ko()??[],e=r.map(Lm),t=[...new Set(e.filter(n=>n&&Fm(n).size>0))];return Mt&&r.length&&r.every(Ds)&&(sl=t),t}function uS(r){return r==="kin"?Bm().length:Om(r)?.size??0}function km(r){if(r!=="kin")return r;let e=Nm();return e?`kin:${e}`:null}function zm(){return(!At.touched||typeof At.touched!="object")&&(At.touched={}),At.touched}function dS(r,e){let t=km(r);if(!t||e===null||e===void 0)return!1;let n=zm(),i=Array.isArray(n[t])?n[t]:n[t]=[],s=String(e);if(i.includes(s))return!1;i.push(s);let o=(r==="fossil"?Mt?.fossils:r==="mud"?Mt?.mud:r==="sharpen"||r==="shroom"?Mt?.props:null)?.find((c,h)=>wr(c,h)===s),l=o?.transform?.slice(9,12)??(o?[o.x,o.y,o.z]:null);return l?.length===3&&l.every(Number.isFinite)&&al.set(r==="fossil"?"all_fossils":r==="shroom"?"magic":`all_${r}`,{x:l[0],y:l[1]+.5,z:l[2]}),At.requestSave(),!0}function pS(r){let e=zm();if(r==="kin"){let a=0;for(let o of Bm()){let l=e[`kin:${o}`];Array.isArray(l)&&l.some(c=>Fm(o).has(c))&&a++}return a}let t=km(r);if(!t)return 0;let n=e[t];if(!Array.isArray(n)||!n.length)return 0;let i=Om(r);if(!i)return 0;let s=0;for(let a of n)i.has(a)&&s++;return s}function wr(r,e){return String(r?.name??e)}var gS={FOOD:"food",WATER:"water",NOT_WATER:"not_water",LAVA:"lava",MUD:"mud",FOSSIL:"fossil",SHARPEN:"sharpen",MP_LOCK:"mp_lock",PLAYER:"player",TREX:"trex",ENEMY:"enemy"};function Gm(r,e,t){if(e.shape!=="box"){if(e.verticalScale===1)return ou(r.position,e.position)<=t*t;let d=Math.max(0,t-r.radius)*e.verticalScale+r.radius,p=r.position.x-e.position.x,m=r.position.y-e.position.y,_=r.position.z-e.position.z;return(p*p+_*_)/(t*t)+m*m/(d*d)<=1}let n=r.position.x-e.position.x,i=r.position.z-e.position.z,s=Math.cos(e.yaw),a=Math.sin(e.yaw),o=n*s-i*a,l=n*a+i*s,c=e.halfExtents.x+r.radius,h=e.halfExtents.z+r.radius;return Math.abs(o)<=c&&Math.abs(l)<=h}var Vm=class{constructor({position:e,radius:t,exitRadius:n=t,groups:i=[],owner:s=null,enabled:a=!0,shape:o="sphere",halfExtents:l=null,yaw:c=0,verticalScale:h=1,dynamic:u=null}){this.position=e,this.radius=t,this.exitRadius=Math.max(n,t),this.groups=new Set(i),this.owner=s,this.enabled=a,this.shape=o,this.halfExtents=l,this.yaw=c,this.verticalScale=Math.max(.01,h),this.dynamic=u??!!(s?.isNpc||s?.isGhost),this.cells=[]}isInGroup(e){return this.groups.has(e)}},Hm=class{constructor({position:e,radius:t,groups:n=[],owner:i=null,enabled:s=!0,onEnter:a=null,onExit:o=null}){this.position=e,this.radius=t,this.groups=new Set(n),this.owner=i,this.enabled=s,this.onEnter=a,this.onExit=o,this.overlapping=new Set}},Zn=8,Wm=new Set,Xm=(r,e)=>(r+32768)*65536+(e+32768);function R_(r){return r.shape!=="box"?r.exitRadius:Math.max(r.exitRadius,Math.hypot(r.halfExtents.x,r.halfExtents.z))}var jm=class{constructor(){this.triggers=new Set,this.probes=new Set,this.dynamic=new Set,this.cells=new Map,this.byGroup=new Map,this.byType=new Map,this._held=[]}add(e){if(this.triggers.has(e))return e;this.triggers.add(e);for(let n of e.groups)this._index(this.byGroup,n,e);let t=e.owner?.type;return t!=null&&this._index(this.byType,t,e),e.dynamic?this.dynamic.add(e):this._bucket(e),e}_index(e,t,n){let i=e.get(t);i||e.set(t,i=new Set),i.add(n)}_unindex(e,t,n){let i=e.get(t);i&&i.delete(n)&&i.size===0&&e.delete(t)}_bucket(e){let t=R_(e),n=e.position,i=Math.floor((n.x-t)/Zn),s=Math.floor((n.x+t)/Zn),a=Math.floor((n.z-t)/Zn),o=Math.floor((n.z+t)/Zn);for(let l=i;l<=s;l++)for(let c=a;c<=o;c++){let h=Xm(l,c),u=this.cells.get(h);u||this.cells.set(h,u=new Set),u.add(e),e.cells.push(h)}}_unbucket(e){for(let t of e.cells)this._unindex(this.cells,t,e);e.cells.length=0}moved(e){e.dynamic||!this.triggers.has(e)||(this._unbucket(e),this._bucket(e))}inGroup(e){return this.byGroup.get(e)??Wm}ofType(e){return this.byType.get(e)??Wm}remove(e){if(!this.triggers.delete(e))return;for(let n of e.groups)this._unindex(this.byGroup,n,e);let t=e.owner?.type;t!=null&&this._unindex(this.byType,t,e),e.dynamic?this.dynamic.delete(e):this._unbucket(e);for(let n of this.probes)n.overlapping.delete(e)&&n.onExit?.(e,n)}addProbe(e){return this.probes.add(e),e}removeProbe(e){if(this.probes.delete(e))for(let t of[...e.overlapping])e.overlapping.delete(t),e.onExit?.(t,e)}update(){let e=this._held;for(let t of this.probes){e.length=0;for(let c of t.overlapping)e.push(c);if(!t.enabled){for(let c of e)t.overlapping.delete(c),t.onExit?.(c,t);continue}for(let c of e){if(!this.triggers.has(c)||!c.enabled){t.overlapping.delete(c),t.onExit?.(c,t);continue}let h=t.radius+c.exitRadius;Gm(t,c,h)||(t.overlapping.delete(c),t.onExit?.(c,t))}for(let c of this.dynamic)this._enter(t,c);let n=t.radius,i=t.position,s=Math.floor((i.x-n)/Zn),a=Math.floor((i.x+n)/Zn),o=Math.floor((i.z-n)/Zn),l=Math.floor((i.z+n)/Zn);for(let c=s;c<=a;c++)for(let h=o;h<=l;h++){let u=this.cells.get(Xm(c,h));if(u)for(let d of u)this._enter(t,d)}}e.length=0}_enter(e,t){!t.enabled||e.overlapping.has(t)||Gm(e,t,e.radius+t.radius)&&(e.overlapping.add(t),e.onEnter?.(t,e))}nearestInGroup(e,t,{filter:n=null,preferred:i=null}={}){let s=null,a=1/0,o=!1;for(let l of e.overlapping){if(t&&!l.isInGroup(t)||n&&!n(l))continue;let c=i?!!i(l):!1,h=ou(e.position,l.position);(s===null||c&&!o||c===o&&h<a)&&(s=l,a=h,o=c)}return s}standingIn(e,t,n,i=0,s=null){let a=null,o=1/0;for(let l of e?this.inGroup(e):this.triggers){if(!l.enabled||s!==null&&s>l.position.y+.1)continue;let c=t-l.position.x,h=n-l.position.z,u=c*c+h*h;if(u>=o)continue;let d;if(l.shape==="box"){let p=Math.cos(l.yaw),m=Math.sin(l.yaw),_=c*p-h*m,f=c*m+h*p;d=Math.abs(_)<=l.halfExtents.x+i&&Math.abs(f)<=l.halfExtents.z+i}else{let p=l.radius+i;d=u<=p*p}d&&(a=l,o=u)}return a}allInGroup(e,t){let n=[];if(t&&this.inGroup(t).size===0)return n;for(let i of e.overlapping)(!t||i.isInGroup(t))&&n.push(i);return n}anyInGroup(e,t){if(t&&this.inGroup(t).size===0)return!1;for(let n of e.overlapping)if(!t||n.isInGroup(t))return!0;return!1}};var I_=new A(0,1,0),Vs=.14,yu=.055,Ym=.22,yS=Vs+yu+Ym;function SS(r){return r<Vs?Math.sin(r/Vs*Math.PI/2):r<Vs+yu?1:Math.max(0,1-(r-Vs-yu)/Ym)}var qm=class{constructor(e){this.root=new Cn,this.root.name="compy-tongue",this.root.visible=!1,this.material=new ms({color:15043459}),this.geometry=new di(.00637,.00637,1,6),this.tipGeometry=new or(.01029,8,6),this.segments=Array.from({length:32},()=>{let t=new lt(this.geometry,this.material);return this.root.add(t),t}),this.tip=new lt(this.tipGeometry,this.material),this.root.add(this.tip),e.add(this.root),this.tipPosition=new A,this._previous=new A,this._point=new A,this._direction=new A}draw(e,t,n,i=.16){this.tipPosition.copy(e).lerp(t,n),this.tip.position.copy(this.tipPosition),this._previous.copy(e);for(let s=0;s<this.segments.length;s++){let a=(s+1)/this.segments.length;this._point.copy(e).lerp(this.tipPosition,a);let o=Math.sin(Ls(a,.25,1,0,1)*Math.PI)**2;this._point.y+=o*Math.sin(n*Math.PI)*i,this._direction.subVectors(this._point,this._previous);let l=this.segments[s];l.position.copy(this._previous).add(this._point).multiplyScalar(.5),l.scale.y=Math.max(.001,this._direction.length()),l.quaternion.setFromUnitVectors(I_,this._direction.normalize()),this._previous.copy(this._point)}return this.tipPosition}destroy(){this.root.removeFromParent(),this.material.dispose(),this.geometry.dispose(),this.tipGeometry.dispose()}};export{xs as a,hr as b,Bt as c,pn as d,ys as e,Dc as f,Pd as g,ur as h,Od as i,kd as j,tn as k,Oc as l,Ea as m,zn as n,Aa as o,Xt as p,tp as q,Ms as r,St as s,Do as t,yi as u,Dn as v,qt as w,Fo as x,ef as y,tf as z,Vr as A,Ca as B,Ah as C,nf as D,rf as E,sf as F,Pt as G,ci as H,af as I,of as J,ie as K,xt as L,A as M,He as N,yt as O,Ze as P,Dt as Q,Lt as R,Nt as S,Ce as T,jt as U,rt as V,Ee as W,Ut as X,Yr as Y,Et as Z,Se as _,Ye as $,lt as aa,ui as ba,_p as ca,Ft as da,tr as ea,vt as fa,Kr as ga,Cn as ha,Yl as ia,Jl as ja,Qr as ka,es as la,Na as ma,Zl as na,Kl as oa,Ua as pa,ir as qa,$l as ra,ts as sa,Ql as ta,Vn as ua,Oa as va,ns as wa,tc as xa,nc as ya,za,rc as Aa,sc as Ba,Hn as Ca,Ha as Da,Ya as Ea,ar as Fa,or as Ga,ao as Ha,cc as Ia,uo as Ja,hc as Ka,ms as La,po as Ma,dc as Na,mi as Oa,fi as Pa,gi as Qa,_i as Ra,_s as Sa,Xn as Ta,mc as Ua,xo as Va,fc as Wa,_c as Xa,xc as Ya,lr as Za,Sc as _a,bc as $a,Mc as ab,wc as bb,Tc as cb,Ec as db,Je as eb,Ac as fb,Cc as gb,Rc as hb,Ue as ib,ce as jb,Xp as kb,ky as lb,Is as mb,zy as nb,Gy as ob,Qp as pb,em as qb,Wy as rb,nm as sb,$p as tb,tu as ub,Jy as vb,iu as wb,q0 as xb,Ky as yb,Zo as zb,gu as Ab,j1 as Bb,q1 as Cb,pu as Db,Mr as Eb,_n as Fb,Ai as Gb,Ci as Hb,au as Ib,t1 as Jb,Ko as Kb,n1 as Lb,i1 as Mb,r1 as Nb,o1 as Ob,qn as Pb,Ds as Qb,om as Rb,c1 as Sb,h1 as Tb,Ls as Ub,u1 as Vb,d1 as Wb,p1 as Xb,m1 as Yb,cm as Zb,f1 as _b,g1 as $b,_1 as ac,v1 as bc,x1 as cc,y1 as dc,S1 as ec,b1 as fc,hm as gc,E1 as hc,yr as ic,um as jc,lu as kc,t_ as lc,n_ as mc,A1 as nc,C1 as oc,R1 as pc,I1 as qc,r_ as rc,P1 as sc,D1 as tc,L1 as uc,V1 as vc,H1 as wc,d_ as xc,At as yc,zs as zc,rl as Ac,lS as Bc,cS as Cc,hS as Dc,uS as Ec,dS as Fc,pS as Gc,wr as Hc,gS as Ic,Vm as Jc,Hm as Kc,jm as Lc,Vs as Mc,yS as Nc,SS as Oc,qm as Pc};
