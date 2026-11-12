import{D as e,S as t,n,t as r}from"./game-events-CVGS72hs.js";import{f as i,g as a,n as o,r as s}from"./blocks-Bcsl3fEt.js";import{d as c,f as l,i as u,o as d,r as f,t as p,u as m}from"./cubemesh-C2vOGvU3.js";import{A as h,B as g,Bt as _,C as v,Dt as y,E as b,I as x,L as S,M as C,Mt as w,Nt as T,Ot as E,Pt as D,Rt as O,S as k,T as A,Vt as j,Z as ee,_ as te,a as ne,at as re,dt as M,g as ie,h as ae,i as oe,jt as se,kt as ce,m as le,mt as ue,ot as de,r as fe,v as N,w as pe,x as P,y as me,zt as he}from"./state-BHrB_j6I.js";import{t as ge}from"./gamerules-BK4wMfs2.js";import{A as _e,C as ve,D as ye,F as be,I as F,O as I,S as xe,a as Se,f as L,j as R,k as z,o as Ce,w as we}from"./world.proto-DWOiO6m7.js";import{t as Te}from"./reactive-BUzY1auv.js";import{n as Ee,s as De,t as Oe}from"./train.layout-uDLqut4n.js";import{B as ke,R as Ae,n as je}from"./trades-C9Y2ky99.js";import{a as Me,i as Ne,n as B,r as Pe,t as Fe}from"./campaign-CRUd2EzK.js";import{E as Ie,M as Le,T as Re,h as ze,j as Be,o as Ve,w as He}from"./poki-Qmq7_zbG.js";var Ue=1e-6;function We(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Ge(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=a,e[5]=o,e[6]=s,e[7]=c,e[8]=l,e[9]=u,e[10]=d,e[11]=f,e[12]=p,e[13]=m,e[14]=h,e[15]=g,e}function Ke(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function qe(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,A=v*k-y*O+b*D+x*E-S*T+C*w;return A?(A=1/A,e[0]=(s*k-c*O+l*D)*A,e[1]=(i*O-r*k-a*D)*A,e[2]=(h*C-g*S+_*x)*A,e[3]=(f*S-d*C-p*x)*A,e[4]=(c*E-o*k-l*T)*A,e[5]=(n*k-i*E+a*T)*A,e[6]=(g*b-m*C-_*y)*A,e[7]=(u*C-f*b+p*y)*A,e[8]=(o*O-s*E+l*w)*A,e[9]=(r*E-n*O-a*w)*A,e[10]=(m*S-h*b+_*v)*A,e[11]=(d*b-u*S-p*v)*A,e[12]=(s*T-o*D-c*w)*A,e[13]=(n*D-r*T+i*w)*A,e[14]=(h*y-m*x-g*v)*A,e[15]=(u*x-d*y+f*v)*A,e):null}function Je(e){let t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m;return _*(d*g-f*h)-v*D+y*E+b*T-x*w+S*C}function Ye(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=t[9],p=t[10],m=t[11],h=t[12],g=t[13],_=t[14],v=t[15],y=n[0],b=n[1],x=n[2],S=n[3];return e[0]=y*r+b*s+x*d+S*h,e[1]=y*i+b*c+x*f+S*g,e[2]=y*a+b*l+x*p+S*_,e[3]=y*o+b*u+x*m+S*v,y=n[4],b=n[5],x=n[6],S=n[7],e[4]=y*r+b*s+x*d+S*h,e[5]=y*i+b*c+x*f+S*g,e[6]=y*a+b*l+x*p+S*_,e[7]=y*o+b*u+x*m+S*v,y=n[8],b=n[9],x=n[10],S=n[11],e[8]=y*r+b*s+x*d+S*h,e[9]=y*i+b*c+x*f+S*g,e[10]=y*a+b*l+x*p+S*_,e[11]=y*o+b*u+x*m+S*v,y=n[12],b=n[13],x=n[14],S=n[15],e[12]=y*r+b*s+x*d+S*h,e[13]=y*i+b*c+x*f+S*g,e[14]=y*a+b*l+x*p+S*_,e[15]=y*o+b*u+x*m+S*v,e}function Xe(e,t,n){let r=n[0],i=n[1],a=n[2],o,s,c,l,u,d,f,p,m,h,g,_;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*a+t[12],e[13]=t[1]*r+t[5]*i+t[9]*a+t[13],e[14]=t[2]*r+t[6]*i+t[10]*a+t[14],e[15]=t[3]*r+t[7]*i+t[11]*a+t[15]):(o=t[0],s=t[1],c=t[2],l=t[3],u=t[4],d=t[5],f=t[6],p=t[7],m=t[8],h=t[9],g=t[10],_=t[11],e[0]=o,e[1]=s,e[2]=c,e[3]=l,e[4]=u,e[5]=d,e[6]=f,e[7]=p,e[8]=m,e[9]=h,e[10]=g,e[11]=_,e[12]=o*r+u*i+m*a+t[12],e[13]=s*r+d*i+h*a+t[13],e[14]=c*r+f*i+g*a+t[14],e[15]=l*r+p*i+_*a+t[15]),e}function Ze(e,t,n){let r=n[0],i=n[1],a=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function Qe(e,t,n,r){let i=r[0],a=r[1],o=r[2],s=Math.hypot(i,a,o),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;return Math.abs(s)<Ue?null:(s=1/s,i*=s,a*=s,o*=s,c=Math.sin(n),l=Math.cos(n),u=1-l,d=t[0],f=t[1],p=t[2],m=t[3],h=t[4],g=t[5],_=t[6],v=t[7],y=t[8],b=t[9],x=t[10],S=t[11],C=i*i*u+l,w=a*i*u+o*c,T=o*i*u-a*c,E=i*a*u-o*c,D=a*a*u+l,O=o*a*u+i*c,k=i*o*u+a*c,A=a*o*u-i*c,j=o*o*u+l,e[0]=d*C+h*w+y*T,e[1]=f*C+g*w+b*T,e[2]=p*C+_*w+x*T,e[3]=m*C+v*w+S*T,e[4]=d*E+h*D+y*O,e[5]=f*E+g*D+b*O,e[6]=p*E+_*D+x*O,e[7]=m*E+v*D+S*O,e[8]=d*k+h*A+y*j,e[9]=f*k+g*A+b*j,e[10]=p*k+_*A+x*j,e[11]=m*k+v*A+S*j,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function $e(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function et(e,t){let n=t[0],r=t[1],i=t[2],a=t[4],o=t[5],s=t[6],c=t[8],l=t[9],u=t[10];return e[0]=Math.hypot(n,r,i),e[1]=Math.hypot(a,o,s),e[2]=Math.hypot(c,l,u),e}function tt(e){let t=e[0],n=e[1],r=e[2],i=e[4],a=e[5],o=e[6],s=e[8],c=e[9],l=e[10],u=t*t+n*n+r*r,d=i*i+a*a+o*o,f=s*s+c*c+l*l;return Math.sqrt(Math.max(u,d,f))}var nt=(function(){let e=[1,1,1];return function(t,n){let r=e;et(r,n);let i=1/r[0],a=1/r[1],o=1/r[2],s=n[0]*i,c=n[1]*a,l=n[2]*o,u=n[4]*i,d=n[5]*a,f=n[6]*o,p=n[8]*i,m=n[9]*a,h=n[10]*o,g=s+d+h,_=0;return g>0?(_=Math.sqrt(g+1)*2,t[3]=.25*_,t[0]=(f-m)/_,t[1]=(p-l)/_,t[2]=(c-u)/_):s>d&&s>h?(_=Math.sqrt(1+s-d-h)*2,t[3]=(f-m)/_,t[0]=.25*_,t[1]=(c+u)/_,t[2]=(p+l)/_):d>h?(_=Math.sqrt(1+d-s-h)*2,t[3]=(p-l)/_,t[0]=(c+u)/_,t[1]=.25*_,t[2]=(f+m)/_):(_=Math.sqrt(1+h-s-d)*2,t[3]=(c-u)/_,t[0]=(p+l)/_,t[1]=(f+m)/_,t[2]=.25*_),t}})();function rt(e,t,n,r){let i=l([e[0],e[1],e[2]]),a=l([e[4],e[5],e[6]]),o=l([e[8],e[9],e[10]]);Je(e)<0&&(i=-i),n[0]=e[12],n[1]=e[13],n[2]=e[14];let s=e.slice(),c=1/i,u=1/a,d=1/o;s[0]*=c,s[1]*=c,s[2]*=c,s[4]*=u,s[5]*=u,s[6]*=u,s[8]*=d,s[9]*=d,s[10]*=d,nt(t,s),r[0]=i,r[1]=a,r[2]=o}function it(e,t,n,r){let i=e,a=t[0],o=t[1],s=t[2],c=t[3],l=a+a,u=o+o,d=s+s,f=a*l,p=a*u,m=a*d,h=o*u,g=o*d,_=s*d,v=c*l,y=c*u,b=c*d,x=r[0],S=r[1],C=r[2];return i[0]=(1-(h+_))*x,i[1]=(p+b)*x,i[2]=(m-y)*x,i[3]=0,i[4]=(p-b)*S,i[5]=(1-(f+_))*S,i[6]=(g+v)*S,i[7]=0,i[8]=(m+y)*C,i[9]=(g-v)*C,i[10]=(1-(f+h))*C,i[11]=0,i[12]=n[0],i[13]=n[1],i[14]=n[2],i[15]=1,i}function at(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n+n,s=r+r,c=i+i,l=n*o,u=r*o,d=r*s,f=i*o,p=i*s,m=i*c,h=a*o,g=a*s,_=a*c;return e[0]=1-d-m,e[1]=u+_,e[2]=f-g,e[3]=0,e[4]=u-_,e[5]=1-l-m,e[6]=p+h,e[7]=0,e[8]=f+g,e[9]=p-h,e[10]=1-l-d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function ot(e,t,n,r,i){let a=1/Math.tan(t/2),o=1/(r-i);return e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(i+r)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*i*r*o,e[15]=0,e}function st(e,t,n,r,i,a,o){let s=1/(t-n),c=1/(r-i),l=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*l,e[11]=0,e[12]=(t+n)*s,e[13]=(i+r)*c,e[14]=(o+a)*l,e[15]=1,e}function ct(e,t,n,r){let i=t[0],a=t[1],o=t[2],s=r[0],c=r[1],l=r[2],u=i-n[0],d=a-n[1],f=o-n[2],p=u*u+d*d+f*f;p===0?f=1:(p=1/Math.sqrt(p),u*=p,d*=p,f*=p);let m=c*f-l*d,h=l*u-s*f,g=s*d-c*u;return p=m*m+h*h+g*g,p===0&&(l?s+=1e-6:c?l+=1e-6:c+=1e-6,m=c*f-l*d,h=l*u-s*f,g=s*d-c*u,p=m*m+h*h+g*g),p=1/Math.sqrt(p),m*=p,h*=p,g*=p,e[0]=m,e[1]=h,e[2]=g,e[3]=0,e[4]=d*g-f*h,e[5]=f*m-u*g,e[6]=u*h-d*m,e[7]=0,e[8]=u,e[9]=d,e[10]=f,e[11]=0,e[12]=i,e[13]=a,e[14]=o,e[15]=1,e}function lt(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e[9]=t[9]+n[9],e[10]=t[10]+n[10],e[11]=t[11]+n[11],e[12]=t[12]+n[12],e[13]=t[13]+n[13],e[14]=t[14]+n[14],e[15]=t[15]+n[15],e}function ut(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e[9]=t[9]-n[9],e[10]=t[10]-n[10],e[11]=t[11]-n[11],e[12]=t[12]-n[12],e[13]=t[13]-n[13],e[14]=t[14]-n[14],e[15]=t[15]-n[15],e}function dt(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12]*n,e[13]=t[13]*n,e[14]=t[14]*n,e[15]=t[15]*n,e}var V=class extends Array{constructor(e=1,t=0,n=0,r=0,i=0,a=1,o=0,s=0,c=0,l=0,u=1,d=0,f=0,p=0,m=0,h=1){return super(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){return e.length?this.copy(e):(Ge(this,e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h),this)}translate(e,t=this){return Xe(this,t,e),this}rotate(e,t,n=this){return Qe(this,n,e,t),this}scale(e,t=this){return Ze(this,t,typeof e==`number`?[e,e,e]:e),this}add(e,t){return t?lt(this,e,t):lt(this,this,e),this}sub(e,t){return t?ut(this,e,t):ut(this,this,e),this}multiply(e,t){return e.length?t?Ye(this,e,t):Ye(this,this,e):dt(this,this,e),this}identity(){return Ke(this),this}copy(e){return We(this,e),this}fromPerspective({fov:e,aspect:t,near:n,far:r}={}){return ot(this,e,t,n,r),this}fromOrthogonal({left:e,right:t,bottom:n,top:r,near:i,far:a}){return st(this,e,t,n,r,i,a),this}fromQuaternion(e){return at(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return qe(this,e),this}compose(e,t,n){return it(this,e,t,n),this}decompose(e,t,n){return rt(this,e,t,n),this}getRotation(e){return nt(e,this),this}getTranslation(e){return $e(e,this),this}getScaling(e){return et(e,this),this}getMaxScaleOnAxis(){return tt(this)}lookAt(e,t,n){return ct(this,e,t,n),this}determinant(){return Je(this)}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this[3]=e[t+3],this[4]=e[t+4],this[5]=e[t+5],this[6]=e[t+6],this[7]=e[t+7],this[8]=e[t+8],this[9]=e[t+9],this[10]=e[t+10],this[11]=e[t+11],this[12]=e[t+12],this[13]=e[t+13],this[14]=e[t+14],this[15]=e[t+15],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e[t+4]=this[4],e[t+5]=this[5],e[t+6]=this[6],e[t+7]=this[7],e[t+8]=this[8],e[t+9]=this[9],e[t+10]=this[10],e[t+11]=this[11],e[t+12]=this[12],e[t+13]=this[13],e[t+14]=this[14],e[t+15]=this[15],e}};function ft(e,t,n=`YXZ`){return n===`XYZ`?(e[1]=Math.asin(Math.min(Math.max(t[8],-1),1)),Math.abs(t[8])<.99999?(e[0]=Math.atan2(-t[9],t[10]),e[2]=Math.atan2(-t[4],t[0])):(e[0]=Math.atan2(t[6],t[5]),e[2]=0)):n===`YXZ`?(e[0]=Math.asin(-Math.min(Math.max(t[9],-1),1)),Math.abs(t[9])<.99999?(e[1]=Math.atan2(t[8],t[10]),e[2]=Math.atan2(t[1],t[5])):(e[1]=Math.atan2(-t[2],t[0]),e[2]=0)):n===`ZXY`?(e[0]=Math.asin(Math.min(Math.max(t[6],-1),1)),Math.abs(t[6])<.99999?(e[1]=Math.atan2(-t[2],t[10]),e[2]=Math.atan2(-t[4],t[5])):(e[1]=0,e[2]=Math.atan2(t[1],t[0]))):n===`ZYX`?(e[1]=Math.asin(-Math.min(Math.max(t[2],-1),1)),Math.abs(t[2])<.99999?(e[0]=Math.atan2(t[6],t[10]),e[2]=Math.atan2(t[1],t[0])):(e[0]=0,e[2]=Math.atan2(-t[4],t[5]))):n===`YZX`?(e[2]=Math.asin(Math.min(Math.max(t[1],-1),1)),Math.abs(t[1])<.99999?(e[0]=Math.atan2(-t[9],t[5]),e[1]=Math.atan2(-t[2],t[0])):(e[0]=0,e[1]=Math.atan2(t[8],t[10]))):n===`XZY`&&(e[2]=Math.asin(-Math.min(Math.max(t[4],-1),1)),Math.abs(t[4])<.99999?(e[0]=Math.atan2(t[6],t[5]),e[1]=Math.atan2(t[8],t[0])):(e[0]=Math.atan2(-t[9],t[10]),e[1]=0)),e}var pt=new V,mt=class extends Array{constructor(e=0,t=e,n=e,r=`YXZ`){super(e,t,n),this.order=r,this.onChange=()=>{},this._target=this;let i=[`0`,`1`,`2`];return new Proxy(this,{set(e,t){let n=Reflect.set(...arguments);return n&&i.includes(t)&&e.onChange(),n}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,t=e,n=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=t,this._target[2]=n,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,t=this.order){return ft(this._target,e,t),this.onChange(),this}fromQuaternion(e,t=this.order,n){return pt.fromQuaternion(e),this._target.fromRotationMatrix(pt,t),n||this.onChange(),this}fromArray(e,t=0){return this._target[0]=e[t],this._target[1]=e[t+1],this._target[2]=e[t+2],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e}},H=class{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new V,this.worldMatrix=new V,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new c,this.quaternion=new ke,this.scale=new c(1),this.rotation=new mt,this.up=new c(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,t=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,t&&e&&e.addChild(this,!1)}addChild(e,t=!0){~this.children.indexOf(e)||this.children.push(e),t&&e.setParent(this,!1)}removeChild(e,t=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),t&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let t=0,n=this.children.length;t<n;t++)this.children[t].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let t=0,n=this.children.length;t<n;t++)this.children[t].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,t=!1){t?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}};function ht(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function gt(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=n+n,s=r+r,c=i+i,l=n*o,u=r*o,d=r*s,f=i*o,p=i*s,m=i*c,h=a*o,g=a*s,_=a*c;return e[0]=1-d-m,e[3]=u-_,e[6]=f+g,e[1]=u+_,e[4]=1-l-m,e[7]=p-h,e[2]=f-g,e[5]=p+h,e[8]=1-l-d,e}function _t(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function vt(e,t,n,r,i,a,o,s,c,l){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=a,e[5]=o,e[6]=s,e[7]=c,e[8]=l,e}function yt(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function bt(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=u*o-s*l,f=-u*a+s*c,p=l*a-o*c,m=n*d+r*f+i*p;return m?(m=1/m,e[0]=d*m,e[1]=(-u*r+i*l)*m,e[2]=(s*r-i*o)*m,e[3]=f*m,e[4]=(u*n-i*c)*m,e[5]=(-s*n+i*a)*m,e[6]=p*m,e[7]=(-l*n+r*c)*m,e[8]=(o*n-r*a)*m,e):null}function xt(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=n[0],p=n[1],m=n[2],h=n[3],g=n[4],_=n[5],v=n[6],y=n[7],b=n[8];return e[0]=f*r+p*o+m*l,e[1]=f*i+p*s+m*u,e[2]=f*a+p*c+m*d,e[3]=h*r+g*o+_*l,e[4]=h*i+g*s+_*u,e[5]=h*a+g*c+_*d,e[6]=v*r+y*o+b*l,e[7]=v*i+y*s+b*u,e[8]=v*a+y*c+b*d,e}function St(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=n[0],p=n[1];return e[0]=r,e[1]=i,e[2]=a,e[3]=o,e[4]=s,e[5]=c,e[6]=f*r+p*o+l,e[7]=f*i+p*s+u,e[8]=f*a+p*c+d,e}function Ct(e,t,n){let r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=t[6],u=t[7],d=t[8],f=Math.sin(n),p=Math.cos(n);return e[0]=p*r+f*o,e[1]=p*i+f*s,e[2]=p*a+f*c,e[3]=p*o-f*r,e[4]=p*s-f*i,e[5]=p*c-f*a,e[6]=l,e[7]=u,e[8]=d,e}function wt(e,t,n){let r=n[0],i=n[1];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function Tt(e,t){let n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12],h=t[13],g=t[14],_=t[15],v=n*s-r*o,y=n*c-i*o,b=n*l-a*o,x=r*c-i*s,S=r*l-a*s,C=i*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,k=f*_-p*g,A=v*k-y*O+b*D+x*E-S*T+C*w;return A?(A=1/A,e[0]=(s*k-c*O+l*D)*A,e[1]=(c*E-o*k-l*T)*A,e[2]=(o*O-s*E+l*w)*A,e[3]=(i*O-r*k-a*D)*A,e[4]=(n*k-i*E+a*T)*A,e[5]=(r*E-n*O-a*w)*A,e[6]=(h*C-g*S+_*x)*A,e[7]=(g*b-m*C-_*y)*A,e[8]=(m*S-h*b+_*v)*A,e):null}var Et=class extends Array{constructor(e=1,t=0,n=0,r=0,i=1,a=0,o=0,s=0,c=1){return super(e,t,n,r,i,a,o,s,c),this}set(e,t,n,r,i,a,o,s,c){return e.length?this.copy(e):(vt(this,e,t,n,r,i,a,o,s,c),this)}translate(e,t=this){return St(this,t,e),this}rotate(e,t=this){return Ct(this,t,e),this}scale(e,t=this){return wt(this,t,e),this}multiply(e,t){return t?xt(this,e,t):xt(this,this,e),this}identity(){return yt(this),this}copy(e){return _t(this,e),this}fromMatrix4(e){return ht(this,e),this}fromQuaternion(e){return gt(this,e),this}fromBasis(e,t,n){return this.set(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],n[2]),this}inverse(e=this){return bt(this,e),this}getNormalMatrix(e){return Tt(this,e),this}},Dt=0,U=class extends H{constructor(e,{geometry:t,program:n,mode:r=e.TRIANGLES,frustumCulled:i=!0,renderOrder:a=0}={}){super(),e.canvas||console.error(`gl not passed as first argument to Mesh`),this.gl=e,this.id=Dt++,this.geometry=t,this.program=n,this.mode=r,this.frustumCulled=i,this.renderOrder=a,this.modelViewMatrix=new V,this.normalMatrix=new Et,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(t=>t&&t({mesh:this,camera:e}));let t=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:t})&&(this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(t=>t&&t({mesh:this,camera:e})))}},Ot=new c,kt=1,At=class{constructor({canvas:e=document.createElement(`canvas`),width:t=300,height:n=150,dpr:r=1,alpha:i=!1,depth:a=!0,stencil:o=!1,antialias:s=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:l=!1,powerPreference:u=`default`,autoClear:d=!0,webgl:f=2}={}){let p={alpha:i,depth:a,stencil:o,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u};if(this.dpr=r,this.alpha=i,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=c,this.autoClear=d,this.id=kt++,this.contextLost=!1,this.contextGeneration=0,this.resources=new Set,this.restoreHandlers=new Set,this.contextListeners=new Map,e.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),this.contextLost=!0,this.contextGeneration++,this.emitContext(`lost`)}),e.addEventListener(`webglcontextrestored`,()=>this.restoreContext()),this.gl=e.getContext(f===2?`webgl2`:`webgl`,p),this.isWebgl2=f===2&&!!this.gl,!this.gl){let e=Error(`Unable to create WebGL${f===2?`2`:`1`} context`);throw e.code=f===2?`WEBGL2_UNAVAILABLE`:`WEBGL1_UNAVAILABLE`,e}this.gl.renderer=this,this.setSize(t,n),this.resetState(),this.initExtensions()}resetState(){this.state??={};for(let e of Object.keys(this.state))delete this.state[e];this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LESS,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.currentGeometry=null}invalidateState(){let e=this.state.uniformLocations;for(let e of Object.keys(this.state))delete this.state[e];this.state.blendFunc={},this.state.blendEquation={},this.state.viewport={},this.state.textureUnits=[],e.clear(),this.state.uniformLocations=e,this.currentGeometry=null}initExtensions(){this.extensions={},this.isWebgl2?(this.getExtension(`EXT_color_buffer_float`),this.getExtension(`OES_texture_float_linear`)):(this.getExtension(`OES_texture_float`),this.getExtension(`OES_texture_float_linear`),this.getExtension(`OES_texture_half_float`),this.getExtension(`OES_texture_half_float_linear`),this.getExtension(`OES_element_index_uint`),this.getExtension(`OES_standard_derivatives`),this.getExtension(`EXT_sRGB`),this.getExtension(`WEBGL_depth_texture`),this.getExtension(`WEBGL_draw_buffers`)),this.getExtension(`WEBGL_compressed_texture_astc`),this.getExtension(`EXT_texture_compression_bptc`),this.getExtension(`WEBGL_compressed_texture_s3tc`),this.getExtension(`WEBGL_compressed_texture_etc1`),this.getExtension(`WEBGL_compressed_texture_pvrtc`),this.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`),this.vertexAttribDivisor=this.getExtension(`ANGLE_instanced_arrays`,`vertexAttribDivisor`,`vertexAttribDivisorANGLE`),this.drawArraysInstanced=this.getExtension(`ANGLE_instanced_arrays`,`drawArraysInstanced`,`drawArraysInstancedANGLE`),this.drawElementsInstanced=this.getExtension(`ANGLE_instanced_arrays`,`drawElementsInstanced`,`drawElementsInstancedANGLE`),this.createVertexArray=this.getExtension(`OES_vertex_array_object`,`createVertexArray`,`createVertexArrayOES`),this.bindVertexArray=this.getExtension(`OES_vertex_array_object`,`bindVertexArray`,`bindVertexArrayOES`),this.deleteVertexArray=this.getExtension(`OES_vertex_array_object`,`deleteVertexArray`,`deleteVertexArrayOES`),this.drawBuffers=this.getExtension(`WEBGL_draw_buffers`,`drawBuffers`,`drawBuffersWEBGL`),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension(`EXT_texture_filter_anisotropic`)?this.gl.getParameter(this.getExtension(`EXT_texture_filter_anisotropic`).MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}registerResource(e){this.resources.add(new WeakRef(e))}onContext(e,t){let n=this.contextListeners.get(e);return n||this.contextListeners.set(e,n=new Set),n.add(t),()=>n.delete(t)}emitContext(e,t){for(let n of this.contextListeners.get(e)||[])n(t)}addRestoreHandler(e){return this.restoreHandlers.add(e),()=>this.restoreHandlers.delete(e)}async restoreContext(){let e=this.contextGeneration;try{if(this.resetState(),this.initExtensions(),this.emitContext(`before-restore`),e!==this.contextGeneration||this.gl.isContextLost())return;for(let t of this.resources){let n=t.deref();if(n&&!n.removed){if(n.restore(),e!==this.contextGeneration||this.gl.isContextLost())return}else this.resources.delete(t)}for(let t of this.restoreHandlers)if(await t(),e!==this.contextGeneration||this.gl.isContextLost())return;if(e!==this.contextGeneration||this.gl.isContextLost())return;this.contextLost=!1,this.emitContext(`restored`)}catch(t){e===this.contextGeneration&&!this.gl.isContextLost()&&this.emitContext(`error`,t)}}setSize(e,t){this.width=e,this.height=t,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=t*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+`px`,height:t+`px`})}setViewport(e,t,n=0,r=0){(this.state.viewport.width!==e||this.state.viewport.height!==t||this.state.viewport.x!==n||this.state.viewport.y!==r)&&(this.state.viewport.width=e,this.state.viewport.height=t,this.state.viewport.x=n,this.state.viewport.y=r,this.gl.viewport(n,r,e,t))}setScissor(e,t,n=0,r=0){this.gl.scissor(n,r,e,t)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,t,n,r){(this.state.blendFunc.src!==e||this.state.blendFunc.dst!==t||this.state.blendFunc.srcAlpha!==n||this.state.blendFunc.dstAlpha!==r)&&(this.state.blendFunc.src=e,this.state.blendFunc.dst=t,this.state.blendFunc.srcAlpha=n,this.state.blendFunc.dstAlpha=r,n===void 0?this.gl.blendFunc(e,t):this.gl.blendFuncSeparate(e,t,n,r))}setBlendEquation(e,t){e||=this.gl.FUNC_ADD,(this.state.blendEquation.modeRGB!==e||this.state.blendEquation.modeAlpha!==t)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=t,t===void 0?this.gl.blendEquation(e):this.gl.blendEquationSeparate(e,t))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,t,n){(this.state.stencilFunc!==e||this.state.stencilRef!==t||this.state.stencilFuncMask!==n)&&(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=t||0,this.state.stencilFuncMask=n||0,this.gl.stencilFunc(e||this.gl.ALWAYS,t||0,n||0))}setStencilOp(e,t,n){(this.state.stencilFail!==e||this.state.stencilDepthFail!==t||this.state.stencilDepthPass!==n)&&(this.state.stencilFail=e,this.state.stencilDepthFail=t,this.state.stencilDepthPass=n,this.gl.stencilOp(e,t,n))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:t=null}={}){this.state.framebuffer!==t&&(this.state.framebuffer=t,this.gl.bindFramebuffer(e,t))}getExtension(e,t,n){return t&&this.gl[t]?this.gl[t].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),t?this.extensions[e]?this.extensions[e][n].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,t){return e.renderOrder===t.renderOrder?e.program.id===t.program.id?e.zDepth===t.zDepth?t.id-e.id:e.zDepth-t.zDepth:e.program.id-t.program.id:e.renderOrder-t.renderOrder}sortTransparent(e,t){return e.renderOrder===t.renderOrder?e.zDepth===t.zDepth?t.id-e.id:t.zDepth-e.zDepth:e.renderOrder-t.renderOrder}sortUI(e,t){return e.renderOrder===t.renderOrder?e.program.id===t.program.id?t.id-e.id:e.program.id-t.program.id:e.renderOrder-t.renderOrder}getRenderList({scene:e,camera:t,frustumCull:n,sort:r}){let i=[];if(t&&n&&t.updateFrustum(),e.traverse(e=>{if(!e.visible)return!0;e.draw&&(n&&e.frustumCulled&&t&&!t.frustumIntersectsMesh(e)||i.push(e))}),r){let e=[],n=[],r=[];i.forEach(i=>{i.program.transparent?i.program.depthTest?n.push(i):r.push(i):e.push(i),i.zDepth=0,i.renderOrder===0&&i.program.depthTest&&t&&(i.worldMatrix.getTranslation(Ot),Ot.applyMatrix4(t.projectionViewMatrix),i.zDepth=Ot.z)}),e.sort(this.sortOpaque),n.sort(this.sortTransparent),r.sort(this.sortUI),i=e.concat(n,r)}return i}render({scene:e,camera:t,target:n=null,update:r=!0,sort:i=!0,frustumCull:a=!0,clear:o}){this.contextLost||this.gl.isContextLost()||(n===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(n),this.setViewport(n.width,n.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!n||n.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!n||n.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),t&&t.updateMatrixWorld(),this.getRenderList({scene:e,camera:t,frustumCull:a,sort:i}).forEach(e=>{e.draw({camera:t})}))}},jt=new V,Mt=new c,Nt=new c,Pt=class extends H{constructor(e,{near:t=.1,far:n=100,fov:r=45,aspect:i=1,left:a,right:o,bottom:s,top:l,zoom:u=1}={}){super(),Object.assign(this,{near:t,far:n,fov:r,aspect:i,left:a,right:o,bottom:s,top:l,zoom:u}),this.projectionMatrix=new V,this.viewMatrix=new V,this.projectionViewMatrix=new V,this.worldPosition=new c,this.type=a||o?`orthographic`:`perspective`,this.type===`orthographic`?this.orthographic():this.perspective()}perspective({near:e=this.near,far:t=this.far,fov:n=this.fov,aspect:r=this.aspect}={}){return Object.assign(this,{near:e,far:t,fov:n,aspect:r}),this.projectionMatrix.fromPerspective({fov:Math.PI/180*n,aspect:r,near:e,far:t}),this.type=`perspective`,this}orthographic({near:e=this.near,far:t=this.far,left:n=this.left||-1,right:r=this.right||1,bottom:i=this.bottom||-1,top:a=this.top||1,zoom:o=this.zoom}={}){return Object.assign(this,{near:e,far:t,left:n,right:r,bottom:i,top:a,zoom:o}),n/=o,r/=o,i/=o,a/=o,this.projectionMatrix.fromOrthogonal({left:n,right:r,bottom:i,top:a,near:e,far:t}),this.type=`orthographic`,this}updateMatrixWorld(){return super.updateMatrixWorld(),this.viewMatrix.inverse(this.worldMatrix),this.worldMatrix.getTranslation(this.worldPosition),this.projectionViewMatrix.multiply(this.projectionMatrix,this.viewMatrix),this}updateProjectionMatrix(){return this.type===`perspective`?this.perspective():this.orthographic()}lookAt(e){return super.lookAt(e,!0),this}project(e){return e.applyMatrix4(this.viewMatrix),e.applyMatrix4(this.projectionMatrix),this}unproject(e){return e.applyMatrix4(jt.inverse(this.projectionMatrix)),e.applyMatrix4(this.worldMatrix),this}updateFrustum(){this.frustum||=[new c,new c,new c,new c,new c,new c];let e=this.projectionViewMatrix;this.frustum[0].set(e[3]-e[0],e[7]-e[4],e[11]-e[8]).constant=e[15]-e[12],this.frustum[1].set(e[3]+e[0],e[7]+e[4],e[11]+e[8]).constant=e[15]+e[12],this.frustum[2].set(e[3]+e[1],e[7]+e[5],e[11]+e[9]).constant=e[15]+e[13],this.frustum[3].set(e[3]-e[1],e[7]-e[5],e[11]-e[9]).constant=e[15]-e[13],this.frustum[4].set(e[3]-e[2],e[7]-e[6],e[11]-e[10]).constant=e[15]-e[14],this.frustum[5].set(e[3]+e[2],e[7]+e[6],e[11]+e[10]).constant=e[15]+e[14];for(let e=0;e<6;e++){let t=1/this.frustum[e].distance();this.frustum[e].multiply(t),this.frustum[e].constant*=t}}frustumIntersectsMesh(e,t=e.worldMatrix){if(!e.geometry.attributes.position||(e.geometry.bounds&&e.geometry.bounds.radius!==1/0||e.geometry.computeBoundingSphere(),!e.geometry.bounds))return!0;let n=Mt;n.copy(e.geometry.bounds.center),n.applyMatrix4(t);let r=e.geometry.bounds.radius*t.getMaxScaleOnAxis();return this.frustumIntersectsSphere(n,r)}frustumIntersectsSphere(e,t){let n=Nt;for(let r=0;r<6;r++){let i=this.frustum[r];if(n.copy(i).dot(e)+i.constant<-t)return!1}return!0}},Ft=1,It={},Lt=class{constructor(e,{vertex:t,fragment:n,uniforms:r={},transparent:i=!1,cullFace:a=e.BACK,frontFace:o=e.CCW,depthTest:s=!0,depthWrite:c=!0,depthFunc:l=e.LEQUAL}={}){e.canvas||console.error(`gl not passed as first argument to Program`),this.gl=e,this.uniforms=r,this.id=Ft++,t||console.warn(`vertex shader not supplied`),n||console.warn(`fragment shader not supplied`),this.transparent=i,this.cullFace=a,this.frontFace=o,this.depthTest=s,this.depthWrite=c,this.depthFunc=l,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader);try{this.setShaders({vertex:t,fragment:n})}catch(e){throw this.remove(),e}e.renderer.registerResource(this)}setShaders({vertex:e,fragment:t}){if(e&&(this.vertex=e),t&&(this.fragment=t),this.linked=!1,this.uniformLocations=new Map,this.attributeLocations=new Map,this.attributeOrder=``,this.gl.renderer.state.currentProgram===this.id&&(this.gl.renderer.state.currentProgram=null),this.gl.isContextLost())return;if(e){if(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.isContextLost())return;this.gl.getShaderInfoLog(this.vertexShader)!==``&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}\nVertex Shader\n${zt(e)}`)}if(t){if(this.gl.shaderSource(this.fragmentShader,t),this.gl.compileShader(this.fragmentShader),this.gl.isContextLost())return;this.gl.getShaderInfoLog(this.fragmentShader)!==``&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}\nFragment Shader\n${zt(t)}`)}if(this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS)){if(this.gl.isContextLost())return;throw Error(`Unable to link shader program: ${this.gl.getProgramInfoLog(this.program)||`No program log`}\nVertex Shader: ${this.gl.getShaderInfoLog(this.vertexShader)||`No shader log`}\nFragment Shader: ${this.gl.getShaderInfoLog(this.fragmentShader)||`No shader log`}`)}let n=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let e=0;e<n;e++){let t=this.gl.getActiveUniform(this.program,e);if(this.gl.isContextLost())return;this.uniformLocations.set(t,this.gl.getUniformLocation(this.program,t.name));let n=t.name.match(/(\w+)/g);t.uniformName=n[0],t.nameComponents=n.slice(1)}let r=[],i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let e=0;e<i;e++){let t=this.gl.getActiveAttrib(this.program,e);if(this.gl.isContextLost())return;let n=this.gl.getAttribLocation(this.program,t.name);n!==-1&&(r[n]=t.name,this.attributeLocations.set(t,n))}this.gl.isContextLost()||(this.attributeOrder=r.join(``),this.linked=!0)}restore(){let e=this.gl;this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:this.vertex,fragment:this.fragment})}setBlendFunc(e,t,n,r){this.blendFunc.src=e,this.blendFunc.dst=t,this.blendFunc.srcAlpha=n,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,t){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=t}setStencilFunc(e,t,n){this.stencilRef=t,this.stencilFunc.func=e,this.stencilFunc.ref=t,this.stencilFunc.mask=n}setStencilOp(e,t,n){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=t,this.stencilOp.depthPass=n}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){if(!this.linked||this.gl.isContextLost())return!1;let t=-1;return this.gl.renderer.state.currentProgram!==this.id&&(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((e,n)=>{let r=this.uniforms[n.uniformName];for(let e of n.nameComponents){if(!r)break;if(e in r)r=r[e];else if(Array.isArray(r.value)||ArrayBuffer.isView(r.value))break;else{r=void 0;break}}if(!r)return Wt(`Active uniform ${n.name} has not been supplied`);if(r&&r.value===void 0)return Wt(`${n.name} uniform is missing a value parameter`);if(r.value.texture)return t+=1,r.value.update(t),Rt(this.gl,n.type,e,t);if(r.value.length&&r.value[0].texture){let i=[];return r.value.forEach(e=>{t+=1,e.update(t),i.push(t)}),Rt(this.gl,n.type,e,i)}Rt(this.gl,n.type,e,r.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW),!0}remove(){this.removed=!0,this.linked=!1,this.gl.deleteProgram(this.program),this.gl.deleteShader(this.vertexShader),this.gl.deleteShader(this.fragmentShader)}};function Rt(e,t,n,r){r=r.length?Bt(r):r;let i=e.renderer.state.uniformLocations.get(n);if(r.length){if(i===void 0||i.length!==r.length)e.renderer.state.uniformLocations.set(n,r.slice(0));else{if(Vt(i,r))return;i.set?i.set(r):Ht(i,r),e.renderer.state.uniformLocations.set(n,i)}}else{if(i===r)return;e.renderer.state.uniformLocations.set(n,r)}switch(t){case 5126:return r.length?e.uniform1fv(n,r):e.uniform1f(n,r);case 35664:return e.uniform2fv(n,r);case 35665:return e.uniform3fv(n,r);case 35666:return e.uniform4fv(n,r);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:case 35679:return r.length?e.uniform1iv(n,r):e.uniform1i(n,r);case 35671:case 35667:return e.uniform2iv(n,r);case 35672:case 35668:return e.uniform3iv(n,r);case 35673:case 35669:return e.uniform4iv(n,r);case 35674:return e.uniformMatrix2fv(n,!1,r);case 35675:return e.uniformMatrix3fv(n,!1,r);case 35676:return e.uniformMatrix4fv(n,!1,r)}}function zt(e){let t=e.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+`: `+t[e];return t.join(`
`)}function Bt(e){let t=e.length,n=e[0].length;if(n===void 0)return e;let r=t*n,i=It[r];i||(It[r]=i=new Float32Array(r));for(let r=0;r<t;r++)i.set(e[r],r*n);return i}function Vt(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ht(e,t){for(let n=0,r=e.length;n<r;n++)e[n]=t[n]}var Ut=0;function Wt(e){Ut>100||(console.warn(e),Ut++,Ut>100&&console.warn(`More than 100 program warnings - stopping logs.`))}var Gt=new Uint8Array(4);function Kt(e){return!(e&e-1)}var qt=1,W=class{constructor(e,{image:t,target:n=e.TEXTURE_2D,type:r=e.UNSIGNED_BYTE,format:i=e.RGBA,internalFormat:a=i,wrapS:o=e.CLAMP_TO_EDGE,wrapT:s=e.CLAMP_TO_EDGE,wrapR:c=e.CLAMP_TO_EDGE,generateMipmaps:l=n===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:u=l?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:d=e.LINEAR,premultiplyAlpha:f=!1,unpackAlignment:p=4,flipY:m=n==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:h=0,level:g=0,width:_,height:v=_,length:y=1}={}){this.gl=e,this.id=qt++,this.image=t,this.target=n,this.type=r,this.format=i,this.internalFormat=a,this.minFilter=u,this.magFilter=d,this.wrapS=o,this.wrapT=s,this.wrapR=c,this.generateMipmaps=l,this.premultiplyAlpha=f,this.unpackAlignment=p,this.flipY=m,this.anisotropy=Math.min(h,this.gl.renderer.parameters.maxAnisotropy),this.level=g,this.width=_,this.height=v,this.length=y,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0,this.gl.renderer.registerResource(this)}restore(){this.texture=this.gl.createTexture(),this.state={},this.store.image=null,this.needsUpdate=!0,this.update()}remove(){this.removed=!0,this.gl.deleteTexture(this.texture)}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){if(this.gl.isContextLost())return;let t=!(this.image===this.store.image&&!this.needsUpdate);if((t||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),t){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension(`EXT_texture_filter_anisotropic`).TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let e=0;e<6;e++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+e,this.level,this.internalFormat,this.format,this.type,this.image[e]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let e=0;e<this.image.length;e++)this.gl.compressedTexImage2D(this.target,e,this.internalFormat,this.image[e].width,this.image[e].height,0,this.image[e].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!Kt(this.image.width)||!Kt(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let e=0;e<6;e++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,Gt);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,Gt);this.store.image=this.image}}},Jt=class{constructor(e=8){this.limit=e,this.count=0,this.rects=new Float64Array((e+1)*4)}clear(){this.count=0}add(e,t,n,r){if(e>=n||t>=r)return;let i=this.rects,a=this.count++*4;for(i[a]=e,i[a+1]=t,i[a+2]=n,i[a+3]=r;;){let e=-1,t=-1,n=1/0;for(let r=0;r<this.count;r++){let a=r*4,o=(i[a+2]-i[a])*(i[a+3]-i[a+1]);for(let s=r+1;s<this.count;s++){let c=s*4,l=o+(i[c+2]-i[c])*(i[c+3]-i[c+1]),u=(Math.max(i[a+2],i[c+2])-Math.min(i[a],i[c]))*(Math.max(i[a+3],i[c+3])-Math.min(i[a+1],i[c+1])),d=u-l;(u<=l*1.2||this.count>this.limit)&&d<n&&(e=r,t=s,n=d)}}if(e<0)break;let r=e*4,o=t*4;i[r]=Math.min(i[r],i[o]),i[r+1]=Math.min(i[r+1],i[o+1]),i[r+2]=Math.max(i[r+2],i[o+2]),i[r+3]=Math.max(i[r+3],i[o+3]),a=--this.count*4,o!==a&&i.copyWithin(o,a,a+4)}}},G=1e-4,K=32,Yt=class{constructor(e){this.heads=new Int32Array(K),this.tails=new Int32Array(K),this.next=new Int32Array(e),this.groups=new Int32Array(e),this.count=0}reset(e,t){this.heads.fill(-1),this.count=0,this.enabled=t,this.camera=e.worldMatrix,this.scale=K/Math.max(1,e.far)}add(e,t){let n=0;if(this.enabled){let r=e*6,i=this.camera,a=-((t[r]+t[r+3])*.5-i[12])*i[8]-((t[r+1]+t[r+4])*.5-i[13])*i[9]-((t[r+2]+t[r+5])*.5-i[14])*i[10];n=Math.max(0,Math.min(31,Math.floor(a*this.scale)))}this.heads[n]<0?this.heads[n]=e:this.next[this.tails[n]]=e,this.tails[n]=e,this.next[e]=-1}finish(){for(let e=0;e<K;e++)for(let t=this.heads[e];t>=0;t=this.next[t])this.groups[this.count++]=t}},Xt=class{constructor(e){this.groups=Int32Array.from({length:e},(e,t)=>t),this.buckets=new Uint8Array(e).fill(K),this.dirty=!0,this.enabled=void 0,this.compare=(e,t)=>this.buckets[e]-this.buckets[t]||e-t}update(e,t,n,r,i,a){let o=K;if(a){let a=e*6,s=-(n[2]*(t[a]+t[a+3])*.5+n[6]*(t[a+1]+t[a+4])*.5+n[10]*(t[a+2]+t[a+5])*.5+n[14]);o=Math.max(0,Math.min(31,Math.floor((s-r)*K/Math.max(1,i-r))))}this.buckets[e]!==o&&(this.buckets[e]=o,this.dirty=!0)}get(e){if(this.dirty||this.enabled!==e){if(e)this.groups.sort(this.compare);else for(let e=0;e<this.groups.length;e++)this.groups[e]=e;this.dirty=!1,this.enabled=e}return this.groups}};function Zt(e,t,n,r,i){let a=63;return n<e[t]-G&&(a&=-2),n>e[t+3]+G&&(a&=-3),r<e[t+1]-G&&(a&=-5),r>e[t+4]+G&&(a&=-9),i<e[t+2]-G&&(a&=-17),i>e[t+5]+G&&(a&=-33),a}function Qt(e){let t=63;for(let n=0;n<3;n++)e[n]>G&&(t&=~(1<<n*2)),e[n]<-1e-4&&(t&=~(2<<n*2));return t}function $t(e,t,n,r,i){return i?n&&e[n-1]/4+t[n-1]===r?(t[n-1]+=i,n):(e[n]=r*4,t[n]=i,n+1):n}var q=4,en=256,tn=4,nn=.25,rn=8,an=2,on=`
uniform sampler2D uShadowNear; // level 0: the live map when entities are up
uniform sampler2D uShadowFar;  // the cascade atlas (levels 1+)
uniform mat4 uShadowView;      // world -> light view; XY spans the map, -Z is depth
uniform vec4 uLevelPos[4];     // element i: center.xy, 1/extent, cells per block
uniform vec4 uLevelUv[4];      // element i: uv scale, uv offset.xy, map px
uniform vec2 uShadowDepth;     // light-view z -> [0,1] map depth: scale, bias
uniform int uShadowLevels;
uniform float uShadowAtlasSize;

#ifdef SHADOW_PIXEL_FILTER
#define SHADOW_PIXEL_DERIVATIVES
// Water has no voxel-grid edge to preserve. Its caller evaluates these before
// discards, so even a cutout/early return cannot invalidate the derivatives.
vec3 shadowPixelX;
vec3 shadowPixelY;
#endif

// PCF tap radius, in cells: 1 = 3x3 (a two-cell stepped penumbra), 0 = a single
// tap, i.e. hard block-edged shadows.
#define SHADOW_PCF 1
const float SHADOW_TAPS = float((2 * SHADOW_PCF + 1) * (2 * SHADOW_PCF + 1));

// One level's 3x3, receiver-plane corrected. p/pz are the snapped lookup in
// texture uv and map depth; d1/d2/dz step one CELL per tap along the receiving
// face's tangents on world receivers. Water separates this receiving-plane
// basis from filterX/filterY, which span a pixel's coverage pattern instead.
//
// Receiver-plane depth: d1/d2 span the face in map space, so solving
// [d1; d2] g = dz gives how fast this surface's depth changes across the map.
// Each tap is then evaluated at the *centre* of the texel it reads, at the
// depth the surface actually has there — a lit face compares against its own
// stored depth exactly and cannot shadow itself. Removing that error is what
// lets the bias sit near zero, and bias is exactly what detaches a shadow from
// the corner it should be touching. The clamp guards faces edge-on to the sun,
// where the solve degenerates and ndl has already scaled the result to
// nothing.
//
// Taps are clamped half a texel inside the level's own region so the kernel
// can never read a neighbouring quadrant — the level select's margin keeps it
// away from the seam, the clamp makes it a certainty.
float shadowTaps(sampler2D map, vec2 p, float pz, vec2 d1, vec2 d2, vec2 dz, vec2 filterX, vec2 filterY, vec4 uvc, float gradMax) {
    float det = d1.x * d2.y - d1.y * d2.x;
    vec2 grad = abs(det) > 1e-12
        ? vec2(d2.y * dz.x - d1.y * dz.y, d1.x * dz.y - d2.x * dz.x) / det
        : vec2(0.0);
    grad = clamp(grad, vec2(-gradMax), vec2(gradMax));
    float px = uvc.w;
    vec2 lo = uvc.yz + 0.5 / px;
    vec2 hi = uvc.yz + vec2(uvc.x) - 0.5 / px;

    // All that is left to cover is depth quantization (1/2^24) and the float
    // error between our depth and the rasterizer's. This is deliberately near
    // the floor, and it only holds if the sampler is highp — see FS_HEAD. At
    // the ES 3.00 default of lowp this compare quantizes to ~4.9e-4, eighty
    // times the value below, and open lit ground bands on any driver that
    // honours precision qualifiers (the Android bug). A bigger bias also hides
    // that, which is the trap: check sampler precision first.
    float bias = 0.00006;
    float sum = 0.0;
    for (int y = -SHADOW_PCF; y <= SHADOW_PCF; y++) {
        for (int x = -SHADOW_PCF; x <= SHADOW_PCF; x++) {
            vec2 q = p + filterX * float(x) + filterY * float(y);
            // snap to the texel centre actually read; divide by the map size
            // rather than multiplying by a rounded reciprocal — the bias has
            // no room for the drift
            vec2 c = clamp((floor(q * px) + 0.5) / px, lo, hi);
#ifdef SHADOW_PIXEL_FILTER
            float z = pz + dot(grad, c - p);
#else
            float z = pz + dz.x * float(x) + dz.y * float(y) + dot(grad, c - q);
#endif
            sum += step(z - bias, texture(map, c).r);
        }
    }
    return sum / SHADOW_TAPS;
}

// The finest window that holds the point with enough margin for the kernel and
// the lookup's own displacement. Windows are concentric around the player, so
// this is a max-abs test per level and no matrix work until one is chosen. The
// point is the UNSNAPPED one — the margin is what covers the difference.
// Returns -1 for a point off the coarsest fit, i.e. off the world.
int shadowLevel(vec2 vxy) {
#ifdef SHADOW_PIXEL_FILTER
    vec2 pixelSpan = abs((mat3(uShadowView) * shadowPixelX).xy)
                   + abs((mat3(uShadowView) * shadowPixelY).xy);
#endif
    for (int i = 0; i < 4; i++) {
        if (i >= uShadowLevels) break;
        vec4 pos = uLevelPos[i];
        vec2 lc = abs(vxy - pos.xy) * pos.z;      // 0 at centre, 0.5 at the edge
        float margin = 0.5 - 2.5 * pos.z / pos.w; // kernel + snap stay inside
#ifdef SHADOW_PIXEL_FILTER
        if (i + 1 < uShadowLevels) margin -= 0.5 * max(pixelSpan.x, pixelSpan.y) * pos.z;
#endif
        if (max(lc.x, lc.y) < margin) return i;
    }
    return -1;
}

// Level 0's window inside the ATLAS: the first quadrant, always, whatever
// uLevelUv[0] currently says. That is the world-only copy of the level — the
// live map is this blitted and then stamped with entities — so it is what a
// caller wanting the voxel world's shadows alone reads. The atlas size is a
// uniform so resizing does not require relinking any materials.

// The sampling both entry points share, once they have settled where to look
// (sp, on the receiving surface), how the kernel steps across it (t1 and t2,
// world-space tangents one tap apart) and which copy of the level to read
// (uvc + useNear, which pick the texture between them — no backticks in here,
// this GLSL is a template literal and one would end the string). Everything
// here is level arithmetic: into the level's uv window, into map depth, and
// the tangents carried through the same transform so shadowTaps can solve the
// receiver plane in map space.
float shadowAt(int lvl, vec4 uvc, bool useNear, vec3 sp, vec3 t1, vec3 t2) {
    vec4 pos = uLevelPos[lvl];
    vec3 pv = (uShadowView * vec4(sp, 1.0)).xyz;
#ifdef SHADOW_PIXEL_FILTER
    vec3 pixelX = mat3(uShadowView) * shadowPixelX;
    vec3 pixelY = mat3(uShadowView) * shadowPixelY;
    // Scale the receiving-plane basis to world-sized vectors before solving
    // its gradient. Tiny close-up pixel derivatives must not trip the small
    // determinant guard. These also follow sloping water, unlike voxel axes.
    float scaleX = max(max(abs(shadowPixelX.x), abs(shadowPixelX.y)), max(abs(shadowPixelX.z), 1e-8));
    float scaleY = max(max(abs(shadowPixelY.x), abs(shadowPixelY.y)), max(abs(shadowPixelY.z), 1e-8));
    vec3 v1 = pixelX / scaleX;
    vec3 v2 = pixelY / scaleY;
#else
    vec3 v1 = mat3(uShadowView) * t1;
    vec3 v2 = mat3(uShadowView) * t2;
#endif

    vec2 p = ((pv.xy - pos.xy) * pos.z + 0.5) * uvc.x + uvc.yz;
    float pz = pv.z * uShadowDepth.x + uShadowDepth.y;
    if (pz > 1.0) return 1.0;
    vec2 d1 = v1.xy * pos.z * uvc.x;
    vec2 d2 = v2.xy * pos.z * uvc.x;
    vec2 dz = vec2(v1.z, v2.z) * uShadowDepth.x;
    vec2 filterX = d1, filterY = d2;
#ifdef SHADOW_PIXEL_FILTER
    // Rotated 3x3 coverage pattern, entirely inside ONE target pixel. Both
    // screen axes get nine distinct sample coordinates rather than three.
    // This averages subpixel edges, not a growing world-space penumbra; no
    // extra shadow samples, temporal history, or additional render targets.
    filterX = (pixelX.xy / 3.0 + pixelY.xy / 9.0) * pos.z * uvc.x;
    filterY = (pixelY.xy / 3.0 - pixelX.xy / 9.0) * pos.z * uvc.x;
#endif
    // receiver-slope ceiling: 8 units of depth per tangent unit, in map units
    float gradMax = 8.0 * -uShadowDepth.x / (pos.z * uvc.x);
    return useNear
        ? shadowTaps(uShadowNear, p, pz, d1, d2, dz, filterX, filterY, uvc, gradMax)
        : shadowTaps(uShadowFar, p, pz, d1, d2, dz, filterX, filterY, uvc, gradMax);
}

// BLOCK-ALIGNED clipmap PCF — the world, and everything else that sits on the
// voxel grid. The lookup is snapped to a fixed world grid of the chosen level's
// cells-per-block instead of using the fragment's exact position, so every
// fragment inside a cell reads the same texel and the shadow's pixel grid is
// the *world's* grid — sampling at wpos directly would expose the map's own
// texel grid, which is rotated into the sun's frame and lines up with nothing.
// Only the two axes tangent to the face are snapped (abs(n) is a 1-hot mask for
// the axis-aligned faces nearly everything here is made of), and the snapped
// point is slid back onto the face's plane so the lookup never leaves the
// surface.
//
// THE 1-HOT MASK IS THE WHOLE CONTRACT. Feed this a face at a free angle and
// the two ternaries below can pick the same axis (both fall to Y whenever
// |n.x| and |n.z| are each >= 0.5, i.e. any vertical face yawed into the
// 30..60 degree band), t1 and t2 come out identical, det in shadowTaps is
// exactly zero and the receiver-plane gradient is discarded. Losing that
// gradient is losing the reason the bias can sit near zero, and the surface
// bands. That is what sunShadowFree below exists for — do not widen this one.
float sunShadow(vec3 wpos, vec3 nn) {
    int lvl = shadowLevel((uShadowView * vec4(wpos, 1.0)).xy);
    if (lvl < 0) return 1.0; // off the world: lit
    vec4 pos = uLevelPos[lvl];
    float cell = 1.0 / pos.w;

    vec3 axis = abs(nn);
#ifdef SHADOW_PIXEL_FILTER
    vec3 sp = wpos;
#else
    vec3 snapped = (floor(wpos * pos.w) + 0.5) * cell;
    vec3 sp = snapped - nn * dot(snapped - wpos, nn);
#endif

    vec3 m = 1.0 - axis; // the two axes that were snapped
    vec3 t1 = (m.x > 0.5) ? vec3(cell, 0.0, 0.0) : vec3(0.0, cell, 0.0);
    vec3 t2 = (m.z > 0.5) ? vec3(0.0, 0.0, cell) : vec3(0.0, cell, 0.0);
    t1 -= nn * dot(t1, nn); // ditto for the kernel (a no-op on block faces)
    t2 -= nn * dot(t2, nn);

    // The world receives EVERYTHING, entities included: level 0 through
    // uShadowNear, which is the live map on any frame a caster moved.
    return shadowAt(lvl, uLevelUv[lvl], lvl == 0, sp, t1, t2);
}

// FREE-ANGLE PCF — bodies that rotate: creepers, villagers, the aeroplane, the
// tumbling ordnance and debris. Same maps, same taps, three things given up
// because none of them is true off the voxel grid:
//
// - No world-grid snap. The snap buys a shadow that steps on the world's own
//   grid, and it costs a lookup displaced by up to half a cell along the
//   surface. On a wall that is a fair trade; on a creeper's leg, 0.3 blocks
//   wide, the displaced lookup lands on the torso. A rotating body has no grid
//   to align to anyway — there is nothing to buy — so it samples at wpos.
//
// - Tangents from an orthonormal basis rather than an axis pick, which is what
//   keeps det well away from zero at every angle and is the actual fix for the
//   banding (see sunShadow's warning). The Y-vs-X guard is only for the
//   degenerate cross product at the poles.
//
// - Taps one TEXEL apart, not one cell. A cell is the world's quantum, and
//   refit sizes it at or above a texel by construction (cells is the power of
//   two under the level's texels-per-block), so stepping by cells can only ever
//   be the coarser of the two — equal at a 256 extent, ~2/3 of a cell on the
//   cap. That matters at this scale: a creeper's leg is 0.3 blocks wide, so
//   every tap the kernel can save from walking off it is one that reads the leg
//   instead of the ground behind. A texel is the finest spacing that still
//   reads nine distinct texels.
//
// - THE WORLD'S MAP ONLY, never the live one — the fourth thing given up, and
//   the one that is a choice rather than a consequence. These bodies still
//   CAST: they are stamped into the live copy of level 0 exactly as before, so
//   a creeper still darkens the ground it stands on and the aeroplane still
//   drags its shadow over a roof. They just do not READ that copy, so nothing
//   here is shadowed by an entity — not by itself, not by another.
//
//   The reason is that entity-on-entity shadow is what this kernel cannot
//   afford. A 3x3 still spans about half a creeper's leg however tight the
//   taps are, so a tap crossing onto a neighbouring limb nearer the sun reads
//   it and the receiver plane, which knows only the plane it was handed, has
//   no way to tell that tap from real occlusion. That was constant seam noise
//   across every leg and flank at close range, in exchange for a limb-scale
//   shadow that is a couple of texels wide and mostly invisible. Sampling the
//   world-only copy removes the whole class: the body is simply not in the map
//   it reads, so no fragment of it can be occluded by any part of it.
//
//   It also retires the one-texel normal offset this used to carry, which
//   existed for that same self-shadowing and cost a lookup displaced along the
//   surface. Shadow edges the world casts ACROSS a body now land where the
//   geometry actually is.
float sunShadowFree(vec3 wpos, vec3 nn) {
    int lvl = shadowLevel((uShadowView * vec4(wpos, 1.0)).xy);
    if (lvl < 0) return 1.0;
    vec4 pos = uLevelPos[lvl];
    // Level 0 from the atlas quadrant, whatever uLevelUv[0] says this frame.
    vec4 uvc = lvl == 0 ? vec4(0.5, 0.0, 0.0, uShadowAtlasSize) : uLevelUv[lvl];
    // one map texel in world units — the same count across the level, since
    // the atlas is twice the live map at half the uv scale, which is why it is
    // derived rather than passed in
    float texel = 1.0 / (uvc.w * pos.z * uvc.x);

    vec3 t1 = normalize(abs(nn.y) < 0.99
        ? cross(nn, vec3(0.0, 1.0, 0.0))
        : cross(nn, vec3(1.0, 0.0, 0.0)));
    vec3 t2 = cross(nn, t1);

    return shadowAt(lvl, uvc, false, wpos, t1 * texel, t2 * texel);
}
`;function sn(e,t){let n=new W(e,{width:t,height:t,format:e.DEPTH_COMPONENT,internalFormat:e.DEPTH_COMPONENT24,type:e.UNSIGNED_INT,generateMipmaps:!1,minFilter:e.NEAREST,magFilter:e.NEAREST,wrapS:e.CLAMP_TO_EDGE,wrapT:e.CLAMP_TO_EDGE,flipY:!1});n.update();let r={texture:n,fbo:{target:e.FRAMEBUFFER,buffer:null,width:t,height:t,depth:!0}},i=()=>{if(r.fbo.buffer=e.createFramebuffer(),e.renderer.bindFramebuffer(r.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,n.texture,0),e.drawBuffers([e.NONE]),e.readBuffer(e.NONE),!e.isContextLost()&&e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw Error(`Shadow framebuffer incomplete`);e.renderer.bindFramebuffer()};return i(),e.renderer.addRestoreHandler(i),r}var cn=class{constructor(e,t,n=E.shadowMapSize){this.renderer=e,this.gl=e.gl,this.sunDir=t,this.world=null,this.atlasSize=n,this.levelPx=n/2,this.atlas=sn(this.gl,this.atlasSize),this.live=sn(this.gl,this.levelPx),this.cams=[];for(let e=0;e<q;e++)this.cams.push(new Pt(this.gl,{left:-1,right:1,bottom:-1,top:1,near:1,far:2}));this.levels=1,this.extent=new Float64Array(q),this.cells=new Float64Array(q),this.centerX=new Float64Array(q),this.centerY=new Float64Array(q),this.fullDirty=new Uint8Array(q),this.levelChanged=new Uint8Array(q),this.rects=new Float32Array(z*4),this.rectValid=new Uint8Array(z),this.groupOrder=new Xt(z),this.sortShadows=new URLSearchParams(globalThis.location?.search??``).get(`shadowSort`)!==`0`,this.pending=new Jt,this.firsts=new Int32Array(z*6),this.instances=new Int32Array(z*6),this.stats={quads:0,draws:0,pixels:0,levels:0,rects:0,liveBlits:0},this.fitW=-1,this.fitD=-1,this.fitH=-1,this.near=0,this.far=1,this.liveActive=!1,this.uniforms={uShadowNear:{value:this.atlas.texture},uShadowFar:{value:this.atlas.texture},uShadowView:{value:new V},uLevelPos:{value:new Float32Array(16)},uLevelUv:{value:new Float32Array(16)},uShadowDepth:{value:new Float32Array(2)},uShadowLevels:{value:1},uShadowAtlasSize:{value:n}},this.refit(),e.addRestoreHandler(()=>{this.fullDirty.fill(1),this.liveActive=!1,this.applyLevelUv(0),this.uniforms.uShadowNear.value=this.atlas.texture})}setMapSize(e){if(e!==this.atlasSize){for(let[t,n]of[[this.atlas,e],[this.live,e/2]])t.texture.width=t.texture.height=n,t.texture.needsUpdate=!0,this.renderer.contextLost||t.texture.update(),t.fbo.width=t.fbo.height=n;this.atlasSize=e,this.levelPx=e/2,this.uniforms.uShadowAtlasSize.value=e,this.liveActive=!1,this.uniforms.uShadowNear.value=this.atlas.texture,this.refit()}}refit(){this.fitW=F,this.fitD=I,this.fitH=R;let e=F/2,t=R/2,n=I/2,r=.5*Math.hypot(F,R,I)+10,i=this.sunDir;for(let a=0;a<q;a++){let o=this.cams[a];o.position.set(e-i[0]*r,t-i[1]*r,n-i[2]*r),o.lookAt([e,t,n]),o.updateMatrixWorld()}let a=this.cams[0].viewMatrix;this.uniforms.uShadowView.value=a;let o=1/0,s=1/0,c=1/0,l=-1/0,u=-1/0,d=-1/0;for(let e=0;e<8;e++){let t=e&1?F:0,n=e&2?R:0,r=e&4?I:0,i=a[0]*t+a[4]*n+a[8]*r+a[12],f=a[1]*t+a[5]*n+a[9]*r+a[13],p=a[2]*t+a[6]*n+a[10]*r+a[14];o=Math.min(o,i),l=Math.max(l,i),s=Math.min(s,f),u=Math.max(u,f),c=Math.min(c,p),d=Math.max(d,p)}let f=Math.max(l-o,u-s)+8,p=1;for(;p<q&&f/(1<<p-1)>en;)p++;this.levels=p,this.uniforms.uShadowLevels.value=p,this.near=-d-tn,this.far=-c+tn;let m=this.uniforms.uShadowDepth.value;m[0]=-1/(this.far-this.near),m[1]=-this.near/(this.far-this.near);let h=(o+l)/2,g=(s+u)/2;for(let e=0;e<p;e++){let t=f/(1<<p-1-e);this.extent[e]=t;let n=this.levelPx/t,r=1;for(;r<rn&&r*2<=n;)r*=2;this.cells[e]=r;let i=t/this.levelPx;this.centerX[e]=Math.round(h/i)*i,this.centerY[e]=Math.round(g/i)*i,this.applyLevel(e),this.fullDirty[e]=1}this.pending.clear(),this.world&&this.recomputeRects()}applyLevel(e){let t=this.extent[e],n=this.centerX[e],r=this.centerY[e];this.cams[e].orthographic({left:n-t/2,right:n+t/2,bottom:r-t/2,top:r+t/2,near:this.near,far:this.far});let i=this.uniforms.uLevelPos.value;i[e*4]=n,i[e*4+1]=r,i[e*4+2]=1/t,i[e*4+3]=this.cells[e],this.applyLevelUv(e)}applyLevelUv(e){let t=this.uniforms.uLevelUv.value;e===0&&this.liveActive?(t[0]=1,t[1]=0,t[2]=0,t[3]=this.levelPx):(t[e*4]=.5,t[e*4+1]=e&1?.5:0,t[e*4+2]=e>>1?.5:0,t[e*4+3]=this.atlasSize)}attachWorld(e){this.world=e,this.recomputeRects()}computeRect(e){let t=this.world;if(this.groupOrder.update(e,t.shadowBounds,this.cams[0].viewMatrix,this.near,this.far,t.shadowCount[e]>0),t.shadowCount[e]===0){this.rectValid[e]=0;return}let n=t.shadowBounds,r=e*6,i=this.cams[0].viewMatrix,a=1/0,o=1/0,s=-1/0,c=-1/0;for(let e=0;e<8;e++){let t=n[r+(e&1?3:0)],l=n[r+1+(e&2?3:0)],u=n[r+2+(e&4?3:0)],d=i[0]*t+i[4]*l+i[8]*u+i[12],f=i[1]*t+i[5]*l+i[9]*u+i[13];a=Math.min(a,d),s=Math.max(s,d),o=Math.min(o,f),c=Math.max(c,f)}let l=e*4;this.rects[l]=a,this.rects[l+1]=o,this.rects[l+2]=s,this.rects[l+3]=c,this.rectValid[e]=1}recomputeRects(){for(let e=0;e<z;e++)this.computeRect(e)}invalidateSection(e){let t=e%64*16+8,n=(e/64|0)%64*16+8,r=(e/be|0)*16+8,i=this.cams[0].viewMatrix,a=i[0]*t+i[4]*r+i[8]*n+i[12],o=i[1]*t+i[5]*r+i[9]*n+i[13],s=8*(Math.abs(i[0])+Math.abs(i[4])+Math.abs(i[8])),c=8*(Math.abs(i[1])+Math.abs(i[5])+Math.abs(i[9]));this.pending.add(a-s,o-c,a+s,o+c)}worldChanged(e,t=!1){if(F!==this.fitW||I!==this.fitD||R!==this.fitH)return;if(!t&&e.length===1024&&e[0]===4294967295){t=!0;for(let n=1;n<e.length;n++)if(e[n]!==4294967295){t=!1;break}}if(t){this.recomputeRects(),this.fullDirty.fill(1),this.pending.clear();return}for(let e=0;e<z;e++)this.world.shadowGroupDirty[e]&&this.computeRect(e);let n=!0;for(let e=0;e<this.levels;e++)this.fullDirty[e]||(n=!1);if(!n)for(let t=0;t<e.length;t++){let n=e[t];for(;n;){let e=31-Math.clz32(n&-n);this.invalidateSection(t*32+e),n&=n-1}}}update(e,t,n){let r=this.stats;r.quads=r.draws=r.pixels=r.levels=r.rects=r.liveBlits=0,(F!==this.fitW||I!==this.fitD||R!==this.fitH)&&this.refit();let i=this.gl,a=this.renderer,o=this.cams[0].viewMatrix,s=e.position,c=o[0]*s.x+o[4]*s.y+o[8]*s.z+o[12],l=o[1]*s.x+o[5]*s.y+o[9]*s.z+o[13];for(let e=0;e<this.levels-1&&!this.fullDirty[e];e++){let t=this.extent[e];if(Math.abs(c-this.centerX[e])<=t*nn&&Math.abs(l-this.centerY[e])<=t*nn)continue;let n=t/this.levelPx;this.centerX[e]=Math.round(c/n)*n,this.centerY[e]=Math.round(l/n)*n,this.applyLevel(e),this.fullDirty[e]=1;break}let u=!1;for(let e=0;e<q;e++)this.levelChanged[e]=0;if(this.world)for(let e=0;e<this.levels;e++)(this.fullDirty[e]||this.pending.count!==0)&&(this.renderLevel(e)&&(this.levelChanged[e]=1,r.levels++,u=!0),this.fullDirty[e]=0);this.pending.clear(),u&&a.disable(i.SCISSOR_TEST);let d=!1,f=!1;for(let e=0;e<t.length;e++){let n=t[e];n.shadowDirty&&(n.shadowDirty=!1,f=!0),n.visible&&n.castShadow!==!1&&(d=!0)}if(d){if(f||this.levelChanged[0]||!this.liveActive){r.liveBlits++,n.updateMatrixWorld(),a.setDepthMask(!0),i.bindFramebuffer(i.READ_FRAMEBUFFER,this.atlas.fbo.buffer),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,this.live.fbo.buffer),i.blitFramebuffer(0,0,this.levelPx,this.levelPx,0,0,this.levelPx,this.levelPx,i.DEPTH_BUFFER_BIT,i.NEAREST),i.bindFramebuffer(i.FRAMEBUFFER,this.live.fbo.buffer),a.state.framebuffer=this.live.fbo.buffer,this.setViewport(0,0,this.levelPx,this.levelPx),a.enable(i.DEPTH_TEST);for(let e=0;e<t.length;e++){let n=t[e];if(!n.visible||n.castShadow===!1)continue;let r=n.program;n.program=n.depthProgram,n.draw({camera:this.cams[0]}),n.program=r}}this.liveActive||(this.liveActive=!0,this.applyLevelUv(0))}else this.liveActive&&(this.liveActive=!1,this.applyLevelUv(0));this.uniforms.uShadowNear.value=this.liveActive?this.live.texture:this.atlas.texture}renderLevel(e){let t=this.extent[e],n=this.centerX[e]-t/2,r=this.centerY[e]-t/2,i=t/this.levelPx,a=this.pending.rects,o=this.fullDirty[e]?1:this.pending.count,s=!1;for(let t=0;t<o;t++){let o=0,c=0,l=this.levelPx,u=this.levelPx;if(!this.fullDirty[e]){let e=t*4;if(o=Math.max(0,Math.floor((a[e]-n)/i)-an),c=Math.max(0,Math.floor((a[e+1]-r)/i)-an),l=Math.min(this.levelPx,Math.ceil((a[e+2]-n)/i)+an),u=Math.min(this.levelPx,Math.ceil((a[e+3]-r)/i)+an),o>=l||c>=u)continue}this.renderRegion(e,o,c,l,u,n,r,i),s=!0}return s}renderRegion(e,t,n,r,i,a,o,s){let c=a+t*s,l=o+n*s,u=a+r*s,d=o+i*s,f=this.world,p=this.rects,m=this.stats,h=Qt(this.sunDir),g=this.groupOrder.get(this.sortShadows),_=0;for(let e=0;e<z;e++){let t=g[e];if(!this.rectValid[t])continue;let n=t*4;if(p[n+2]<c||p[n]>u||p[n+3]<l||p[n+1]>d)continue;let r=f.shadowBase[t];for(let e of Se){let n=f.faceCounts[t*6+e];h&1<<e&&(_=$t(this.firsts,this.instances,_,r,n),m.quads+=n),r+=n}}m.draws+=_,m.pixels+=(r-t)*(i-n),m.rects++;let v=this.gl,y=this.renderer,b=e&1?this.levelPx:0,x=e>>1?this.levelPx:0;y.bindFramebuffer(this.atlas.fbo),y.enable(v.DEPTH_TEST),y.setDepthMask(!0),y.enable(v.SCISSOR_TEST),this.setViewport(b,x,this.levelPx,this.levelPx),v.scissor(b+t,x+n,r-t,i-n),v.clear(v.DEPTH_BUFFER_BIT),_>0&&f.drawShadow(this.cams[e],this.firsts,this.instances,_)}setViewport(e,t,n,r){let i=this.renderer.state.viewport;(i.x!==e||i.y!==t||i.width!==n||i.height!==r)&&(i.x=e,i.y=t,i.width=n,i.height=r,this.gl.viewport(e,t,n,r))}},ln=new Set,J=null;for(let e of[`keydown`,`keyup`,`mousemove`,`wheel`])window.addEventListener(e,e=>{g.value&&e.stopImmediatePropagation()},!0);function un(e){if(!J){J=document.createElement(`div`),J.id=`graphics-recovery`,J.setAttribute(`role`,`alert`),J.style.cssText=`position:fixed;inset:0;z-index:10000;display:flex;flex-direction:column;gap:20px;align-items:center;justify-content:center;padding:24px;background:#0b0d0eee;color:#fff;font:18px sans-serif;text-align:center;`;let e=document.createElement(`p`);J.appendChild(e);let t=document.createElement(`button`);t.textContent=`Reload game`,t.style.cssText=`padding:12px 24px;font:inherit;cursor:pointer;`,t.addEventListener(`click`,()=>location.reload()),J.appendChild(t),document.body.appendChild(J)}J.firstChild.textContent=e?`Graphics could not be restored. Reload the game to try again.`:`Graphics interrupted. Restoring your game…`}function dn(e,t){let n=e.onContext(`lost`,()=>{ln.add(e),g.value=!0,x.value!==`menu`&&(ee.value=!0),t.suspend(),un(),document.pointerLockElement&&document.exitPointerLock()}),r=e.onContext(`restored`,()=>{ln.delete(e),ln.size||(x.value!==`menu`&&(ee.value=!0),g.value=!1,J?.remove(),J=null,t.resume())}),i=e.onContext(`error`,e=>{console.error(`Failed to restore graphics:`,e),un(e)});return()=>{n(),r(),i(),ln.delete(e)}}var fn=Object.freeze({exposure:1.05,contrast:1.1,saturation:1.15}),pn=e(fn.exposure),mn=e(fn.contrast),hn=e(fn.saturation),gn={uColorGrade:{value:new Float32Array(3)},uWaterFog:{value:new Float32Array([0,.075,.1,600])},uDistanceFog:{value:new Float32Array(4)},uDistanceFogColor:{value:new Float32Array(3)}};t(()=>{gn.uColorGrade.value.set([pn.value,mn.value,hn.value])});var _n=`
uniform vec3 uColorGrade; // exposure, contrast, saturation

// Display-space grade, after gamma encoding. The contrast offset is scaled by
// coverage for premultiplied layers and omitted for additive contributions.
// Leave HDR values intact: the smoke target is float, and bright effects rely
// on values above 1 before blending. The final framebuffer clamps the result.
vec3 gradeColorRGB(vec3 rgb, float coverage) {
    if (all(equal(uColorGrade, vec3(1.0)))) return rgb;
    vec3 col = rgb * uColorGrade.x * uColorGrade.y
        + vec3(0.5 * (1.0 - uColorGrade.y) * coverage);
    float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
    return mix(vec3(luma), col, uColorGrade.z);
}
`,vn=ce+_n+`
uniform vec4 uWaterFog;
uniform sampler2D uWaterDepth;
uniform sampler2D uWaterExitDepth;
uniform bool uWaterActive;
uniform bool uWaterAbsorption;
uniform vec2 uWaterTargetSize;
uniform vec2 uWaterClip;
uniform vec2 uWaterRayScale;
uniform vec3 uWaterViewUp;

vec3 waterFog(vec3 rgb, float coverage) {
    if (uWaterFog.x <= 0.0) return rgb;
    float depth = uWaterFog.z * uWaterFog.w /
        max(uWaterFog.w - gl_FragCoord.z * (uWaterFog.w - uWaterFog.z), 0.0001);
    float fog = 1.0 - exp(-depth * uWaterFog.y);
    vec3 tinted = rgb * vec3(0.62, 0.88, 1.02);
    vec3 submerged = mix(tinted, vec3(0.025, 0.22, 0.30) * coverage, fog);
    return mix(rgb, submerged, uWaterFog.x);
}

float waterViewDepth(float depth) {
    return uWaterClip.x * uWaterClip.y /
        max(uWaterClip.y - depth * (uWaterClip.y - uWaterClip.x), 0.0001);
}
// Absorb each fragment using its own depth, before MSAA combines foreground
// and background coverage. Never infer background depth from a resolved edge.
vec3 absorbWater(vec3 rgb, float coverage, float surface) {
    if (gl_FragCoord.z <= surface + 0.0000001 || uWaterFog.x >= 1.0) return rgb;
    vec2 ray = (gl_FragCoord.xy / uWaterTargetSize * 2.0 - 1.0) * uWaterRayScale;
    vec3 viewRay = vec3(ray, -1.0);
    float rayLength = length(viewRay);
    // Looking down, continue to the fragment: a last sea surface or tiny slope
    // is not a reliable end to the water above a solid seabed. Retain the cap
    // toward the sky, blending over the last ~9 degrees below the horizon.
    float cap = smoothstep(-0.15, 0.0, dot(uWaterViewUp, viewRay) / rayLength);
    float endDepth = waterViewDepth(gl_FragCoord.z);
    if (cap > 0.0) {
        float exitDepth = texture(uWaterExitDepth, gl_FragCoord.xy / uWaterTargetSize).r;
        // A single boundary has no closing face; keep the fragment endpoint.
        if (exitDepth > surface) {
            endDepth = mix(endDepth, min(endDepth, waterViewDepth(exitDepth)), cap);
        }
    }
    float thickness = max(0.0, endDepth - waterViewDepth(surface)) * rayLength;
    float absorbed = (1.0 - exp(-0.12 * thickness)) * (1.0 - uWaterFog.x);
    return mix(rgb, gradeColorRGB(vec3(0.025, 0.13, 0.20), 1.0) * coverage, absorbed);
}
vec4 colorGrade(vec4 color) {
    vec3 rgb = waterFog(gradeColorRGB(distanceFog(color.rgb, 1.0), 1.0), 1.0);
    if (uWaterActive && uWaterAbsorption && uWaterFog.x < 1.0) {
        float surface = texture(uWaterDepth, gl_FragCoord.xy / uWaterTargetSize).r;
        rgb = absorbWater(rgb, 1.0, surface);
    }
    return vec4(rgb, color.a);
}
vec4 colorGradePremultiplied(vec4 color) {
    return vec4(waterFog(gradeColorRGB(distanceFog(color.rgb, color.a), color.a), color.a), color.a);
}
vec4 colorGradeAdditive(vec4 color) {
    return vec4(waterFog(gradeColorRGB(distanceFog(color.rgb, 0.0), 0.0), 0.0), color.a);
}
`;function yn(e){let t=pn.value,n=mn.value,r=hn.value,i=e.map(e=>e*t*n+.5*(1-n)),a=i[0]*.2126+i[1]*.7152+i[2]*.0722,o=gn.uWaterFog.value[0],s=[.025,.22,.3];return i.map((e,t)=>(a+(e-a)*r)*(1-o)+s[t]*o)}var bn=[-.369949,-.615661,-.695772],xn=[-.219846,-.766044,-.604023],Sn=[1,.96,.88],Cn=[.5,.6,.75],wn=.35,Tn=1.25,En=[.45,.5,.58],Dn=[.55,.72,.92],On=[.13,.08,.19],kn={ambient:[.34,.3,.43],moonColor:[.9,.93,1],moonIntensity:.65,fillColor:[.65,.58,.8],fillIntensity:.22,fillDir:[.664463,-.34202,.664463]};function Y(e,t=1){return[e[0]**2.2*t,e[1]**2.2*t,e[2]**2.2*t]}var X=`#version 300 es
precision highp float;
precision highp int;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
`,Z=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler2DArray;
precision highp sampler3D;
`+vn,An=`
uniform vec3 uAmbient;
uniform vec3 uSunColor;
uniform vec3 uSunDir;
uniform vec3 uFillColor;
uniform vec3 uFillDir;
uniform vec4 uBlastCenters[4]; // xyz, light radius
uniform vec4 uBlastPower;
uniform highp sampler2D uCloudMap;
uniform vec4 uCloudPlane; // layer height, drift, tile period, strength
uniform float uBackroomsLighting; // 1 for Backrooms lighting, 0 under the sun
uniform highp sampler3D uBackroomsLampVol; // per cell: 0 solid, else 1 + light * 170 (setBackroomsLampVolume)
uniform vec3 uBackroomsLampVolSize; // the volume's extent in cells: x, y, z
uniform vec3 uBackroomsLampColor; // a full-strength lamp, linear, flicker included
uniform vec3 uBackroomsAmbient; // what is left with every lamp out
uniform vec4 uBackroomsFlashPos; // the torch: the eye, and its strength in w (0 = off)
uniform vec3 uBackroomsFlashDir; // where it points, unit length
uniform float uTrainInterior;
uniform vec4 uTrainCars[6]; // front z, rear z, working lamps, spare
`+on+`
// BACKROOMS LIGHTING. Ceiling lamps baked per cell with line of sight and
// smooth distance falloff (backrooms-lighting.js, setBackroomsLampVolume),
// plus the player's torch.
//
// The lamp sample is taken half a cell out along the normal — at the centre of
// the air cell the face looks into, exactly, on the normal's axis — and blended
// across the face by hand: a trilinear filter over the eight cells round it
// that weighs AIR cells only and renormalises. Solid cells carry nothing, so a
// one-cell wall between a lit room and a dark one cannot hand the lit side's
// light to the dark side's corners and edges (hardware filtering needed the
// walls filled with their brightest neighbour, and that leaked along every
// seam). No threshold anywhere: the old stepped flood with a cut-off drew
// hard-edged blobs on every wall.
//
// The torch is a spot at the eye, and it needs no shadow: a light where the
// eye is can only reach what the eye can see. Its cone has a soft edge and a
// windowed falloff, and a little of it spills all round so the player never
// stands in pure black.
float backroomsLampAt(vec3 p) {
    vec3 q = p - 0.5;
    vec3 b = floor(q);
    vec3 f = q - b;
    ivec3 hi = ivec3(uBackroomsLampVolSize) - 1;
    float sum = 0.0, wsum = 0.0;
    for (int i = 0; i < 8; i++) {
        vec3 o = vec3(float(i & 1), float((i >> 1) & 1), float((i >> 2) & 1));
        ivec3 c = clamp(ivec3(b + o), ivec3(0), hi);
        float v = texelFetch(uBackroomsLampVol, c, 0).r * 255.0;
        if (v < 0.5) continue; // solid
        vec3 t = mix(1.0 - f, f, o);
        float w = t.x * t.y * t.z;
        sum += w * (v - 1.0);
        wsum += w;
    }
    return wsum > 1e-5 ? sum / (wsum * 170.0) : 0.0;
}

vec3 torchLight(vec3 nn, vec3 wpos) {
    vec3 L = wpos - uBackroomsFlashPos.xyz;
    float d = max(length(L), 1e-3);
    vec3 ld = L / d;
    float cone = smoothstep(0.87, 0.975, dot(ld, uBackroomsFlashDir));
    float win = clamp(1.0 - pow(d / 30.0, 4.0), 0.0, 1.0);
    float att = win * win / (1.0 + 0.04 * d * d);
    float ndl = 0.3 + 0.7 * max(dot(nn, -ld), 0.0);
    return vec3(1.0, 0.93, 0.8) * uBackroomsFlashPos.w * (cone * 2.4 + 0.12) * att * ndl;
}

vec3 backroomsLighting(vec3 nn, vec3 wpos) {
    float lamp = backroomsLampAt(wpos + nn * 0.5);
    return uBackroomsAmbient + uBackroomsLampColor * lamp + torchLight(nn, wpos);
}

bool inTrainInterior(vec3 nn, vec3 wpos) {
    vec3 p = wpos + nn * 0.03;
    return uTrainInterior > 0.5 && p.x > 37.0 && p.x < 44.0 && p.y > 25.0 && p.y < 30.0
        && p.z > uTrainCars[5].x && p.z < uTrainCars[0].y;
}

vec3 trainInteriorLighting(vec3 nn, vec3 wpos) {
    float light = 0.075; // vestibules
    for (int i = 0; i < 6; i++) {
        vec4 car = uTrainCars[i];
        if (wpos.z < car.x || wpos.z > car.y) continue;
        light = 0.0015; // a sealed car with failed lights
        if (car.z > 0.5) {
            vec3 a = vec3(40.5, 29.6, car.x + 4.5), b = vec3(40.5, 29.6, car.x + 10.5);
            float da = length(wpos - a), db = length(wpos - b);
            light = 0.12 + 1.6 / (1.0 + 0.09 * da * da) + 1.6 / (1.0 + 0.09 * db * db);
        }
    }
    return vec3(0.92, 0.96, 1.0) * light + torchLight(nn, wpos);
}

// Held items with Backrooms lighting: lit by the lamps where the eye is
// (the item is a hand's length from it, and sampling at its own surface
// would reach into the wall the player leans on), faces turned up a little
// brighter — and NOT by the torch, which shines away from its own body.
vec3 heldBackroomsLighting(vec3 nn) {
    float lamp = backroomsLampAt(uBackroomsFlashPos.xyz);
    return uBackroomsAmbient + uBackroomsLampColor * lamp * (0.65 + 0.35 * nn.y);
}

// How much of the sun reaches a world position through the cloud layer.
//
// NOT a shadow map, and it could not be one: the clouds have no geometry to
// render into it — the whole layer is raymarched off a single quad (clouds.js),
// so there is nothing for a depth pass to rasterize. What there IS is a 2D
// field at a known height, and that turns the question round: instead of the
// clouds finding their receivers, every receiver walks up its own sun ray to
// the layer and asks the field whether there is cloud at the crossing. One
// texture fetch, right for every surface in the world at once — terrain,
// entities, the aeroplane — and it drifts along with the sky for free because
// it reads the same offset the visible clouds do.
//
// The decode (128 bias, /8) is clouds.js's byte encoding, stated there in the
// generator and in its own shader. Three copies of one fact is two too many;
// it is here because this file may not import a game module.
float cloudShade(vec3 wpos) {
    if (uCloudPlane.w <= 0.0) return 1.0;
    float up = -uSunDir.y;
    if (up < 0.05) return 1.0;              // sun on the horizon: no sane crossing
    float t = (uCloudPlane.x - wpos.y) / up;
    if (t <= 0.0) return 1.0;               // already above the layer
    vec2 hit = wpos.xz - uSunDir.xz * t;
    float d = (texture(uCloudMap, (hit + vec2(uCloudPlane.y, 0.0)) / uCloudPlane.z).r * 255.0 - 128.0) / 8.0;
    // Soft over a few blocks. A hard edge would crawl visibly across open
    // ground as the field drifts, and cloud shadows have no hard edge anyway.
    return mix(1.0 - uCloudPlane.w, 1.0, smoothstep(-2.5, 2.5, d));
}

vec3 blastLight(vec3 n, vec3 wpos) {
    vec3 light = vec3(0.0);
    for (int i = 0; i < 4; i++) {
        if (uBlastPower[i] <= 0.001) continue;
        vec3 delta = uBlastCenters[i].xyz - wpos;
        float d = length(delta);
        float reach = max(0.0, 1.0 - d / uBlastCenters[i].w);
        float facing = 0.22 + 0.78 * max(dot(n, delta / max(d, 0.01)), 0.0);
        light += vec3(1.0, 0.47, 0.12) * uBlastPower[i] * reach * reach * facing;
    }
    return light;
}

vec3 diffuseLight(vec3 n, vec3 wpos) {
    vec3 nn = normalize(n);
    if (uBackroomsLighting > 0.5) return backroomsLighting(nn, wpos);
    if (inTrainInterior(nn, wpos)) return trainInteriorLighting(nn, wpos) + blastLight(nn, wpos);
    float ndl = max(dot(nn, -uSunDir), 0.0);
    vec3 lit = uAmbient + blastLight(nn, wpos);
    // The fetch sits inside the ndl gate on purpose: a surface facing away from
    // the sun is already unlit, and it should not pay for the sky.
    // TEMPORARY: cloud shadows are off while the layer is being tweaked. Put the
    // * cloudShade(wpos) back to re-enable — here AND in diffuseLightFree
    // below, which are the only two call sites, so with both gone cloudShade
    // and its two uniforms compile out as inactive and the field clouds.js
    // hands over is simply never read.
    if (ndl > 0.0) lit += uSunColor * ndl * sunShadow(wpos, nn) /* * cloudShade(wpos) */;
    lit += uFillColor * max(dot(nn, -uFillDir), 0.0);
    return lit;
}

// Same, for a surface that does NOT sit on the voxel grid — anything that
// yaws, rolls or tumbles. Identical but for the shadow lookup it reaches for:
// the block-snapped one is built around axis-aligned faces and bands on a
// rotated one, which is the whole argument in shadows.js. That lookup also
// reads the world-only shadow map, so a body lit through here CASTS a shadow
// but is shadowed by the voxel world alone — never by another body and never
// by itself. Every instanced body in the game (creepers, villagers, the
// aeroplane, ordnance, debris) wants this; the world, the placement highlight
// and anything else drawn on the grid want diffuseLight above.
vec3 diffuseLightFree(vec3 n, vec3 wpos) {
    vec3 nn = normalize(n);
    if (uBackroomsLighting > 0.5) return backroomsLighting(nn, wpos);
    if (inTrainInterior(nn, wpos)) return trainInteriorLighting(nn, wpos) + blastLight(nn, wpos);
    float ndl = max(dot(nn, -uSunDir), 0.0);
    vec3 lit = uAmbient + blastLight(nn, wpos);
    if (ndl > 0.0) lit += uSunColor * ndl * sunShadowFree(wpos, nn) /* * cloudShade(wpos) */;
    lit += uFillColor * max(dot(nn, -uFillDir), 0.0);
    return lit;
}

// Same, for the handful of surfaces that were flagged receiveShadows: false.
vec3 diffuseLightUnshadowed(vec3 n) {
    vec3 nn = normalize(n);
    if (uBackroomsLighting > 0.5) return uBackroomsAmbient + uBackroomsLampColor * 0.25;
    return uAmbient
        + uSunColor * max(dot(nn, -uSunDir), 0.0)
        + uFillColor * max(dot(nn, -uFillDir), 0.0);
}

vec3 gammaOut(vec3 c) {
    return pow(c, vec3(0.4545454545));
}
`,jn=X+`
uniform mat4 modelMatrix;
in vec3 position;
in vec3 normal;
in vec2 uv;
out vec3 vNormal;
out vec3 vWorld;
out vec2 vUv;
void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorld = wp.xyz;
    vNormal = mat3(modelMatrix) * normal;
    vUv = uv;
    gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Mn=`#version 300 es
precision highp float;
out vec4 fragColor;
void main() { fragColor = vec4(1.0); }
`,Nn=.1;function Pn(e,t){return t.onBeforeRender(()=>{e.depthRange(0,Nn)}),t.onAfterRender(()=>{e.depthRange(0,1)}),t}function Fn(e,t,n,r,i){return new W(e,{image:t,target:e.TEXTURE_3D,width:n,height:r,length:i,internalFormat:e.R8,format:e.RED,type:e.UNSIGNED_BYTE,generateMipmaps:!1,minFilter:e.NEAREST,magFilter:e.NEAREST,unpackAlignment:1,flipY:!1})}function In(e){return new W(e,{image:new Uint8Array([255,255]),width:1,height:1,internalFormat:e.RG8,format:e.RG,type:e.UNSIGNED_BYTE,generateMipmaps:!1,minFilter:e.LINEAR,magFilter:e.LINEAR,unpackAlignment:1,flipY:!1})}var Ln=new WeakMap;function Rn(e){return e.getContext(`2d`).getImageData(0,0,e.width,e.height)}function zn(e,t){let n=Ln.get(e),r=new W(e,{image:n===!1?Rn(t):t,internalFormat:e.SRGB8_ALPHA8,format:e.RGBA,type:e.UNSIGNED_BYTE,generateMipmaps:!1,minFilter:e.NEAREST,magFilter:e.NEAREST,wrapS:e.CLAMP_TO_EDGE,wrapT:e.CLAMP_TO_EDGE,flipY:!1});if(n===void 0)try{r.update(),e.isContextLost()||Ln.set(e,!0)}catch(n){if(!(n instanceof TypeError)||typeof OffscreenCanvas>`u`||!(t instanceof OffscreenCanvas))throw n;r.image=Rn(t),r.update(),Ln.set(e,!1)}return r}function Bn(e,t,n,{texelAA:r=!1}={}){let i=t.length,a=new Uint8Array(n*n*4*i),o=n*n*4;for(let e=0;e<i;e++){let r=t[e].getContext(`2d`).getImageData(0,0,n,n).data;a.set(r,e*o)}for(let e=3;e<a.length;e+=4)a[e]=a[e]>76?255:0;return new W(e,{image:a,target:e.TEXTURE_2D_ARRAY,width:n,height:n,length:i,internalFormat:e.SRGB8_ALPHA8,format:e.RGBA,type:e.UNSIGNED_BYTE,generateMipmaps:!0,minFilter:r?e.LINEAR_MIPMAP_LINEAR:e.NEAREST_MIPMAP_LINEAR,magFilter:r?e.LINEAR:e.NEAREST,anisotropy:r?4:0,wrapS:e.REPEAT,wrapT:e.REPEAT,wrapR:e.CLAMP_TO_EDGE,flipY:!1})}var Vn=class{constructor(e,t,n,r,i,a=!1){this.gl=e,this.geometry=t,this.names=n,this.floats=r,this.capacity=i,this.external=a,this.data=new Float32Array(a?0:i*r),this.u32=new Uint32Array(this.data.buffer),this.buffer=e.createBuffer(),this.alloc();for(let a=0;a<n.length;a++)t.addAttribute(n[a],{size:4,type:e.FLOAT,buffer:this.buffer,stride:r*4,offset:a*16,instanced:1,count:i});t.instancedCount=0,e.renderer.registerResource(this)}restore(){this.buffer=this.gl.createBuffer(),this.alloc();for(let e of this.names)this.geometry.attributes[e].buffer=this.buffer;this.external||this.upload(this.geometry.instancedCount)}alloc(){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,this.capacity*this.floats*4,e.DYNAMIC_DRAW),e.renderer.state.boundBuffer=this.buffer}grow(e){for(;this.capacity<e;)this.capacity*=2;this.external||(this.data=new Float32Array(this.capacity*this.floats),this.u32=new Uint32Array(this.data.buffer)),this.alloc()}upload(e){let t=this.gl;e>0&&(t.bindBuffer(t.ARRAY_BUFFER,this.buffer),t.renderer.state.boundBuffer=this.buffer,t.bufferSubData(t.ARRAY_BUFFER,0,this.data,0,e*this.floats)),this.geometry.instancedCount=e}uploadFrom(e,t){let n=this.gl;t>this.capacity&&this.grow(t),t>0&&(n.bindBuffer(n.ARRAY_BUFFER,this.buffer),n.renderer.state.boundBuffer=this.buffer,n.bufferSubData(n.ARRAY_BUFFER,0,e,0,t*this.floats)),this.geometry.instancedCount=t}},Hn=class{constructor(e){this.canvas=e,this.renderer=new At({canvas:e,dpr:1,antialias:!0,alpha:!1});let n=this.gl=this.renderer.gl;this.halloweenSkyActive=!1,this.stopColorGrade=t(()=>this.updateClearColor()),this.scene=new H;let r=globalThis.navigator?.deviceMemory;this._performanceSettings=Number.isFinite(r)&&r>0&&r<=2?w(E,{shadowMapSize:1024}):E,this.appliedPerformanceSettings=this._performanceSettings,this.worldFar=600,this.camera=new Pt(n,{fov:70,near:.1,far:this.worldFar,aspect:1}),this.viewCamera=this.camera,this.distanceFogUniforms={uDistanceFog:{value:new Float32Array(4)},uDistanceFogColor:{value:Dn}},this.updateDistanceFog(),this.casters=[],this.resize(),window.addEventListener(`resize`,()=>this.resize()),this.shadows=new cn(this.renderer,bn,this._performanceSettings.shadowMapSize),this.renderer.onContext(`lost`,()=>{if(!this.shadows)return;let e=this.shadows.atlasSize,t=Math.min(this._performanceSettings.shadowMapSize,e>1024?e/2:e);this.setPerformanceSettings({shadowMapSize:t})}),this.renderer.onContext(`before-restore`,()=>{if(!this.shadows)return;let e=Math.min(this._performanceSettings.shadowMapSize,this.shadows.atlasSize);this.setPerformanceSettings({shadowMapSize:e}),this.shadows.setMapSize(e),this.appliedPerformanceSettings=w(this.appliedPerformanceSettings,{shadowMapSize:e})}),this.lightUniforms={uAmbient:{value:Y(En)},uSunColor:{value:Y(Sn,Tn)},uSunDir:{value:bn},uFillColor:{value:Y(Cn,wn)},uFillDir:{value:xn},uBlastCenters:{value:new Float32Array(16)},uBlastPower:{value:new Float32Array(4)},uCloudMap:{value:In(n)},uCloudPlane:{value:[0,0,1536,0]},uBackroomsLighting:{value:0},uBackroomsLampVol:{value:Fn(n,new Uint8Array(1),1,1,1)},uBackroomsLampVolSize:{value:[1,1,1]},uBackroomsLampColor:{value:[0,0,0]},uBackroomsAmbient:{value:[0,0,0]},uBackroomsFlashPos:{value:[0,0,0,0]},uBackroomsFlashDir:{value:[0,0,-1]},uTrainInterior:{value:0},uTrainCars:{value:new Float32Array(24)}},Object.assign(this.lightUniforms,this.shadows.uniforms),this.updateHandlers=[],this.listeners=new Map,this.raf=0,this.lastTime=0,this.frameId=0,this.running=!1,this.renderingEnabled=!1,dn(this.renderer,this),this.renderer.addRestoreHandler(()=>{this.updateClearColor(),this.resize();for(let e of this.casters)e.shadowDirty=!0})}resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.camera.perspective({aspect:e/t}),this.viewCamera!==this.camera&&this.viewCamera.perspective({aspect:e/t})}freezeView(){if(this.viewCamera!==this.camera)return this.viewCamera;let e=this.camera,t=new Pt(this.gl,{fov:e.fov,near:e.near,far:e.far,aspect:e.aspect});return t.position.copy(e.position),t.quaternion.copy(e.quaternion),t.updateMatrixWorld(),this.viewCamera=t,t}unfreezeView(){this.viewCamera=this.camera}get viewFrozen(){return this.viewCamera!==this.camera}get performanceSettings(){return this._performanceSettings}setPerformanceSettings(e){return this._performanceSettings=w(this._performanceSettings,e),this._performanceSettings}fitWorldCamera(e,t,n){this.worldFar=T(e,t,n),this.updateRenderDistance()}updateRenderDistance(){let e=se(this.worldFar,this.appliedPerformanceSettings);this.camera.perspective({far:e}),this.viewCamera!==this.camera&&this.viewCamera.perspective({far:e}),this.updateDistanceFog()}applyPerformanceSettings(){let e=this._performanceSettings;e!==this.appliedPerformanceSettings&&(this.shadows?.setMapSize(e.shadowMapSize),this.appliedPerformanceSettings=e,this.updateRenderDistance())}updateDistanceFog(){let e=this.viewCamera;D(this.distanceFogUniforms.uDistanceFog.value,e.near,e.far,this.appliedPerformanceSettings)}makeProgram(e){let t=Object.assign({},gn,e.fog===!1?null:this.distanceFogUniforms,this.waterPass?.effectUniforms,{uWaterAbsorption:{value:!0}},e.lit===!1?null:this.lightUniforms,e.uniforms),n=new Lt(this.gl,{vertex:e.vertex,fragment:e.fragment,uniforms:t,transparent:!!e.transparent,depthWrite:e.depthWrite!==!1,depthTest:e.depthTest!==!1,depthFunc:e.depthFunc??this.gl.LEQUAL,cullFace:e.cullFace??this.gl.BACK});n.waterColor=!1;for(let e of n.uniformLocations.keys())if(e.uniformName===`uWaterColor`){n.waterColor=!0;break}return n}makeDepthProgram(e,t=Mn,n={}){return new Lt(this.gl,{vertex:e,fragment:t,uniforms:n,cullFace:this.gl.BACK})}updateClearColor(){let e=this.lightUniforms?.uBackroomsLighting.value>.5?[0,0,0]:this.halloweenSkyActive?On:Dn;this.gl.clearColor(...yn(e),1)}setHalloweenEnvironment(e){this.halloweenSkyActive=e;let t=this.lightUniforms,n=kn;t.uAmbient.value=Y(e?n.ambient:En),t.uSunColor.value=Y(e?n.moonColor:Sn,e?n.moonIntensity:Tn),t.uFillColor.value=Y(e?n.fillColor:Cn,e?n.fillIntensity:wn),t.uFillDir.value=e?n.fillDir:xn,this.distanceFogUniforms.uDistanceFogColor.value=e?On:Dn,this.updateClearColor()}setBackroomsLighting(e,t,n){let r=this.lightUniforms;r.uBackroomsLighting.value=+!!e,r.uBackroomsAmbient.value=e?Y(t):[0,0,0],this.backroomsLampColor=e?Y(n):[0,0,0],r.uBackroomsLampColor.value=this.backroomsLampColor.slice(),r.uBackroomsFlashPos.value[3]=0,this.updateClearColor()}setTrainInterior(e){let t=this.lightUniforms;t.uTrainInterior.value=+!!e,t.uTrainCars.value.fill(0),e?.forEach((e,n)=>t.uTrainCars.value.set([e.z,e.z+15,+!!e.lit,0],n*4)),e||(t.uBackroomsFlashPos.value[3]=0)}setTrainHeadlamp(e){e.updateMatrixWorld();let t=e.worldMatrix,n=this.lightUniforms;n.uBackroomsFlashPos.value=[t[12],t[13],t[14],1],n.uBackroomsFlashDir.value=[-t[8],-t[9],-t[10]]}setBackroomsLampVolume(e,t,n,r){let i=this.lightUniforms;this.gl.deleteTexture(i.uBackroomsLampVol.value.texture),i.uBackroomsLampVol.value=Fn(this.gl,e,t,n,r),i.uBackroomsLampVolSize.value=[t,n,r]}setBackroomsLightingFrame(e,t,n,r){let i=this.lightUniforms,a=i.uBackroomsFlashPos.value,o=i.uBackroomsFlashDir.value,s=i.uBackroomsLampColor.value,c=this.backroomsLampColor||[0,0,0];a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=n,o[0]=t[0],o[1]=t[1],o[2]=t[2],s[0]=c[0]*r,s[1]=c[1]*r,s[2]=c[2]*r}setCloudField(e,t,n,r,i){let a=this.lightUniforms;e&&(a.uCloudMap.value=e);let o=a.uCloudPlane.value;o[0]=t,o[1]=n,o[2]=r,o[3]=i}addCaster(e,t){e.depthProgram=t,e.shadowDirty=!0,this.casters.push(e)}on(e,t){if(e===`update`){this.updateHandlers.push(t);return}let n=this.listeners.get(e);n||this.listeners.set(e,n=[]),n.push(t)}emit(e,t){let n=this.listeners.get(e);if(n)for(let e=0;e<n.length;e++)n[e](t)}frame(e){if(g.value||this.gl.isContextLost())return;this.frameId++;let t=this.lastTime?Math.min((e-this.lastTime)/1e3,.1):0;if(this.lastTime=e,!this.renderingEnabled||y.value)for(let e=0;e<this.updateHandlers.length;e++)this.updateHandlers[e](t);else{this.emit(`frameupdate`);for(let e=0;e<this.updateHandlers.length;e++)this.updateHandlers[e](t);this.applyPerformanceSettings(),this.camera.updateMatrixWorld(),this.emit(`cull`,this.camera),this.shadows.update(this.camera,this.casters,this.scene),this.updateDistanceFog(),this.waterPass?.prepare(),this.renderer.render({scene:this.scene,camera:this.viewCamera,sort:!0,frustumCull:!1}),this.emit(`frameend`)}}start(){this.running||(this.running=!0,this.resume())}suspend(){cancelAnimationFrame(this.raf),this.raf=0,this.lastTime=0}resume(){if(!this.running||this.raf||g.value)return;let e=t=>{this.raf=0,!this.running||g.value||this.gl.isContextLost()||(this.raf=requestAnimationFrame(e),this.frame(t))};this.lastTime=0,this.raf=requestAnimationFrame(e)}screenRay(e,t){let n=this.renderer.width,r=this.renderer.height,i=e??n/2,a=t??r/2,o=i/n*2-1,s=1-a/r*2,c=Math.tan(this.camera.fov*Math.PI/360),l=o*c*this.camera.aspect,u=s*c,d=this.camera.worldMatrix,f=d[0]*l+d[4]*u-d[8],p=d[1]*l+d[5]*u-d[9],m=d[2]*l+d[6]*u-d[10],h=1/Math.hypot(f,p,m);f*=h,p*=h,m*=h;let g=this.camera.position;return{o:{x:g.x,y:g.y,z:g.z},d:{x:f,y:p,z:m}}}cameraForward(){let e=this.camera.worldMatrix;return{x:-e[8],y:-e[9],z:-e[10]}}cameraUp(){let e=this.camera.worldMatrix;return{x:e[4],y:e[5],z:e[6]}}};function Un(e,t,n,r){let i=Math.PI/180*.5,a=Math.sin(t*i),o=Math.cos(t*i),s=Math.sin(n*i),c=Math.cos(n*i),l=Math.sin(r*i),u=Math.cos(r*i);e.set(a*c*u+o*s*l,o*s*u-a*c*l,o*c*l-a*s*u,o*c*u+a*s*l)}function Wn(e,t,n,r){let i=Math.PI/180*.5;t*=i,n*=i,r*=i;let a=Math.sin(t),o=Math.cos(t),s=Math.sin(n),c=Math.cos(n),l=Math.sin(r),u=Math.cos(r);e.set(a*c*u-o*s*l,o*s*u+a*c*l,o*c*l-a*s*u,o*c*u+a*s*l)}var Gn=class{constructor(e){this.gfx=e,this.supported=null,this.frame=-1,this.width=this.height=0,e.renderer.addRestoreHandler(()=>this.restore())}restore(){if(this.frame=-1,!this.supported)return;let e=this.gfx.gl,t=e.renderer;this.buffer=e.createFramebuffer(),t.bindFramebuffer({buffer:this.buffer}),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,this.texture.texture,0),e.drawBuffers([e.NONE]),e.readBuffer(e.NONE),t.bindFramebuffer()}init(){let e=this.gfx.gl,t=e.renderer;this.supported=!1,this.buffer=e.createFramebuffer(),t.bindFramebuffer({buffer:this.buffer}),e.drawBuffers([e.NONE]),e.readBuffer(e.NONE),t.bindFramebuffer();let n=e.getParameter(e.DEPTH_BITS),r=n===16?[[e.DEPTH_COMPONENT16,e.DEPTH_COMPONENT,e.UNSIGNED_SHORT]]:n===32?[[e.DEPTH32F_STENCIL8,e.DEPTH_STENCIL,e.FLOAT_32_UNSIGNED_INT_24_8_REV],[e.DEPTH_COMPONENT32F,e.DEPTH_COMPONENT,e.FLOAT]]:[[e.DEPTH24_STENCIL8,e.DEPTH_STENCIL,e.UNSIGNED_INT_24_8],[e.DEPTH_COMPONENT24,e.DEPTH_COMPONENT,e.UNSIGNED_INT]];for(let[t,n,i]of r){let r=new W(e,{width:1,height:1,internalFormat:t,format:n,type:i,generateMipmaps:!1,minFilter:e.NEAREST,magFilter:e.NEAREST,flipY:!1});r.update(),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,this.buffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r.texture,0);let a=e.checkFramebufferStatus(e.DRAW_FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;a&&e.blitFramebuffer(0,0,1,1,0,0,1,1,e.DEPTH_BUFFER_BIT,e.NEAREST);let o=e.getError();if(e.bindFramebuffer(e.FRAMEBUFFER,null),a&&o===e.NO_ERROR){this.texture=r,this.supported=!0;return}r.remove()}e.deleteFramebuffer(this.buffer)}capture(){if(this.supported===null&&this.init(),!this.supported)return!1;let e=this.gfx.gl,t=e.drawingBufferWidth,n=e.drawingBufferHeight;return(t!==this.width||n!==this.height)&&(this.width=this.texture.width=t,this.height=this.texture.height=n,this.texture.needsUpdate=!0,this.texture.update(),this.frame=-1),this.frame!==this.gfx.frameId&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,this.buffer),e.blitFramebuffer(0,0,t,n,0,0,t,n,e.DEPTH_BUFFER_BIT,e.NEAREST),e.bindFramebuffer(e.FRAMEBUFFER,null),this.frame=this.gfx.frameId),!0}},Kn=`
uniform sampler2D uWaterColor;
// Colour is already graded. Coverage is alpha for premultiplied colour,
// zero for additive light, or one for straight-alpha colour.
// W + T * (C + (1-a) * B) == (T*C + a*W) + (1-a) * (W + T*B).
// Preserve the water contribution W when an effect darkens its background.
vec4 compositeThroughWater(vec4 color, float coverage) {
    if (!uWaterActive) return color;
    vec2 uv = gl_FragCoord.xy / uWaterTargetSize;
    float surface = texture(uWaterDepth, uv).r;
    if (gl_FragCoord.z <= surface + 0.0000001) return color;
    color.rgb = absorbWater(color.rgb, coverage, surface);
    vec4 water = texture(uWaterColor, uv); // capture stores premultiplied colour
    color.rgb = color.rgb * (1.0 - water.a) + coverage * water.rgb;
    return color;
}
`,qn=`
uniform sampler2D uWaterColor;
uniform bool uWaterReuseColor;
bool visibleWaterSurface(out bool captured) {
    vec2 size = vec2(textureSize(uWaterDepth, 0));
    ivec2 pixel = ivec2(gl_FragCoord.xy / uWaterTargetSize * size);
    float surface = texelFetch(uWaterDepth, pixel, 0).r;
    captured = surface < 1.0;
    vec2 samplePoint = (vec2(pixel) + 0.5) * uWaterTargetSize / size;
    vec2 slope = vec2(dFdx(gl_FragCoord.z), dFdy(gl_FragCoord.z));
    float projected = gl_FragCoord.z + dot(slope, samplePoint - gl_FragCoord.xy);
    // Leave room for MSAA's per-sample depth test and depth quantization.
    float tolerance = 0.5 * fwidth(gl_FragCoord.z) + 2.0 / 16777215.0;
    return surface == 1.0 || projected <= surface + tolerance;
}
`,Jn=`#version 300 es
precision highp float;
void main() {}
`,Yn=class{constructor(e){this.gfx=e,this.gl=e.gl,this.width=this.height=1,this.reuseColor=!0,this.needsColor=!0,this.clearColor=new Float32Array(4),this.clearFarDepth=new Float32Array([0]),this.sceneDepth=e.sceneDepth=new Gn(e);let t=this.gl;this.depth=new W(t,{width:1,height:1,internalFormat:t.DEPTH_COMPONENT24,format:t.DEPTH_COMPONENT,type:t.UNSIGNED_INT,minFilter:t.NEAREST,magFilter:t.NEAREST,generateMipmaps:!1,flipY:!1}),this.depth.update(),this.exitDepth=new W(t,{width:1,height:1,internalFormat:t.DEPTH_COMPONENT24,format:t.DEPTH_COMPONENT,type:t.UNSIGNED_INT,minFilter:t.NEAREST,magFilter:t.NEAREST,generateMipmaps:!1,flipY:!1}),this.exitDepth.update(),this.color=new W(t,{width:1,height:1,internalFormat:t.RGBA8,minFilter:t.LINEAR,magFilter:t.LINEAR,generateMipmaps:!1,flipY:!1}),this.color.update(),this.effectUniforms={uWaterDepth:{value:this.depth},uWaterColor:{value:this.color},uWaterExitDepth:{value:this.exitDepth},uWaterActive:{value:!1},uWaterTargetSize:{value:[1,1]},uWaterClip:{value:[.1,600]},uWaterRayScale:{value:[1,1]},uWaterViewUp:{value:[0,1,0]},uWaterReuseColor:{value:!0}},this.fallback=new W(t,{image:new Uint8Array([255,255,255,255]),width:1,height:1,generateMipmaps:!1,minFilter:t.NEAREST,magFilter:t.NEAREST}),this.captureUniforms={uWaterDepth:{value:this.fallback},uWaterActive:{value:!1},uWaterExitDepth:{value:this.fallback},uWaterAbsorption:{value:!1}},this.restore(),e.renderer.addRestoreHandler(()=>this.restore())}get active(){return this.effectUniforms.uWaterActive.value}set active(e){this.effectUniforms.uWaterActive.value=e}restore(){let e=this.gl,t=e.renderer;if(this.buffer=e.createFramebuffer(),t.bindFramebuffer({buffer:this.buffer}),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,this.depth.texture,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.color.texture,0),e.drawBuffers([e.COLOR_ATTACHMENT0]),this.colorEnabled=!0,!e.isContextLost()&&e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw Error(`Water surface framebuffer is incomplete`);if(this.exitBuffer=e.createFramebuffer(),t.bindFramebuffer({buffer:this.exitBuffer}),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,this.exitDepth.texture,0),e.drawBuffers([e.NONE]),e.readBuffer(e.NONE),!e.isContextLost()&&e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw Error(`Water exit framebuffer is incomplete`);t.bindFramebuffer()}attach(e,t,n){this.waterMesh=e,this.surfaceMesh=t,this.exitMesh=n,this.depthMesh=new U(this.gl,{geometry:t.geometry,mode:t.mode,frustumCulled:!1,program:this.gfx.makeProgram({vertex:t.program.vertex,fragment:Jn,uniforms:t.program.uniforms,lit:!1,cullFace:!1})}),e.renderOrder=-5,this.trigger=new U(this.gl,{geometry:e.geometry,program:t.program,frustumCulled:!1,renderOrder:-20}),this.trigger.draw=({camera:e})=>this.capture(e),this.trigger.visible=!1,this.trigger.setParent(this.gfx.scene)}prepare(){this.needsColor=this.reuseColor,this.active&&!this.needsColor&&this.gfx.scene.traverse(e=>{if(!e.visible)return!0;e!==this.waterMesh&&e.draw&&e.program?.waterColor&&(this.needsColor=!0)})}capture(e){let t=this.gl,n=t.renderer,r=t.drawingBufferWidth,i=t.drawingBufferHeight,a=Math.ceil(r/2),o=Math.ceil(i/2),s=this.effectUniforms;s.uWaterClip.value[0]=e.near,s.uWaterClip.value[1]=e.far,s.uWaterRayScale.value[0]=1/e.projectionMatrix[0],s.uWaterRayScale.value[1]=1/e.projectionMatrix[5];let c=s.uWaterViewUp.value,l=e.worldMatrix;c[0]=l[1],c[1]=l[5],c[2]=l[9];let u=s.uWaterRayScale.value,d=-c[2]+Math.abs(c[0])*u[0]+Math.abs(c[1])*u[1],f=gn.uWaterFog.value[0]<1&&(d>=0||d/Math.hypot(u[0],u[1],1)>-.15001);s.uWaterReuseColor.value=this.needsColor,(a!==this.width||o!==this.height)&&(this.width=this.depth.width=a,this.height=this.depth.height=o,this.depth.needsUpdate=!0,this.depth.update(),this.exitDepth.width=a,this.exitDepth.height=o,this.exitDepth.needsUpdate=!0,this.exitDepth.update(),this.color.width=a,this.color.height=o,this.color.needsUpdate=!0,this.color.update()),this.effectUniforms.uWaterTargetSize.value[0]=r,this.effectUniforms.uWaterTargetSize.value[1]=i,n.bindFramebuffer({buffer:this.buffer}),n.setViewport(a,o),n.setDepthMask(!0),this.colorEnabled!==this.needsColor&&(t.drawBuffers([this.needsColor?t.COLOR_ATTACHMENT0:t.NONE]),this.colorEnabled=this.needsColor),this.needsColor&&t.clearBufferfv(t.COLOR,0,this.clearColor),t.clear(t.DEPTH_BUFFER_BIT),(this.needsColor?this.surfaceMesh:this.depthMesh).draw({camera:e}),f&&(n.bindFramebuffer({buffer:this.exitBuffer}),n.setDepthMask(!0),t.clearBufferfv(t.DEPTH,0,this.clearFarDepth),this.exitMesh.draw({camera:e})),n.bindFramebuffer(),n.setViewport(r,i)}},Xn=[.42,.62,.8,1],Zn=class{constructor(e,t){this.gl=e,this.maxRows=e.getParameter(e.MAX_TEXTURE_SIZE),this.rows=Math.max(1,Math.ceil(t/L)),this.capacity=this.rows*L,this.warned=!1,this.uploadBytes=0,this.uploadCalls=0,this.reallocations=0,this.texture=new W(e,{width:L,height:this.rows,internalFormat:e.RG32UI,format:e.RG_INTEGER,type:e.UNSIGNED_INT,generateMipmaps:!1,minFilter:e.NEAREST,magFilter:e.NEAREST,wrapS:e.CLAMP_TO_EDGE,wrapT:e.CLAMP_TO_EDGE,flipY:!1}),this.texture.update()}ensure(e){if(this.maxRows||=this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE),!this.maxRows)return!1;let t=Math.ceil(e/L);if(t<=this.rows)return!1;let n=this.rows;for(;n<t;)n*=2;return n>this.maxRows&&(n=this.maxRows,this.warned||(this.warned=!0,console.warn(`voxel records past ${n*L}; the record texture is full`)),n<=this.rows)?!1:(this.rows=n,this.capacity=n*L,this.texture.height=n,this.texture.needsUpdate=!0,this.reallocations++,!0)}begin(){let e=this.gl;this.texture.update(0),e.renderer.activeTexture(0),e.bindTexture(e.TEXTURE_2D,this.texture.texture),e.renderer.state.textureUnits[0]=this.texture.id,e.renderer.state.flipY&&(e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.renderer.state.flipY=!1)}uploadChunk(e,t,n,r=t*2){if(n===0)return;let i=this.gl,a=Math.ceil(n/L);i.texSubImage2D(i.TEXTURE_2D,0,0,t>>11,L,a,i.RG_INTEGER,i.UNSIGNED_INT,e,r),this.uploadBytes+=a*L*2*4,this.uploadCalls++}},Qn=class extends m{restore(){super.restore(),this.multi=this.gl.getExtension(`WEBGL_multi_draw`)}constructor(e,t=256){super(e,{}),this.multi=e.getExtension(`WEBGL_multi_draw`),this.firsts=new Int32Array(t),this.vcounts=new Int32Array(t).fill(4),this.instances=new Int32Array(t),this.draws=0}draw({program:e,mode:t=this.gl.TRIANGLES}){if(this.draws===0)return;let n=this.gl,r=`${this.id}_${e.attributeOrder}`;if(n.renderer.currentGeometry!==r&&(this.VAOs[e.attributeOrder]||this.createVAO(e),n.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),n.renderer.currentGeometry=r),this.multi)this.multi.multiDrawArraysInstancedWEBGL(t,this.firsts,0,this.vcounts,0,this.instances,0,this.draws);else for(let e=0;e<this.draws;e++)n.renderer.drawArraysInstanced(t,this.firsts[e],4,this.instances[e])}};function $n(e){return 31-Math.clz32(e&-e)}function er(e){return 31-Math.clz32(e)}function tr(e,t,n,r,i){let a=xe(n),o=we(n),s=ve(n),c=t*6;e[c]=(r+$n(a))*16,e[c+1]=$n(s)*16,e[c+2]=(i+$n(o))*16,e[c+3]=(r+er(a)+1)*16,e[c+4]=(er(s)+1)*16,e[c+5]=(i+er(o)+1)*16}function nr(e,t,n){for(let r=0;r<6;r++){let i=e[r],a=i.x>0?t[n+3]:t[n],o=i.y>0?t[n+4]:t[n+1],s=i.z>0?t[n+5]:t[n+2];if(i.x*a+i.y*o+i.z*s+i.constant<0)return!1}return!0}var rr=[[1,0,0],[0,0,0],[0,1,0],[0,0,0],[0,0,1],[0,0,0]],ir=[[0,0,1],[0,0,1],[1,0,0],[1,0,0],[1,0,0],[1,0,0]],ar=[[0,1,0],[0,1,0],[0,0,1],[0,0,1],[0,1,0],[0,1,0]],or=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],sr=[[1,1],[0,1],[0,0],[0,0],[0,1],[1,1]],cr=[[-1,-1],[1,-1],[1,1],[1,1],[1,-1],[-1,-1]],lr=[[1,0],[0,0],[0,1],[1,1],[0,0],[1,0],[1,1],[0,1],[0,1],[1,1],[1,0],[0,0],[0,0],[1,0],[1,1],[0,1],[0,0],[1,0],[1,1],[0,1],[1,0],[0,0],[0,1],[1,1]],ur=e=>e.map(e=>`vec3(${e[0]}.0, ${e[1]}.0, ${e[2]}.0)`).join(`, `),dr=e=>e.map(e=>`vec2(${e[0]}.0, ${e[1]}.0)`).join(`, `);function fr(e){return X+`
precision highp usampler2D;

uniform usampler2D uRecords; // one texel = one 8-byte quad record
uniform int uWaterPass; // 0 = opaque/depth, 1 = water, 2 = debug outlines

out float vAO;
out vec2 vTileUv;
out float vTileLayer;
out vec3 vNormal;
out vec3 vWorld;

const float aoLevels[4] = float[4](${Xn.map(e=>e.toFixed(4)).join(`, `)});
const vec3 faceBase[6] = vec3[6](${ur(rr)});
const vec3 faceDu[6] = vec3[6](${ur(ir)});
const vec3 faceDv[6] = vec3[6](${ur(ar)});
const vec3 faceN[6] = vec3[6](${ur(or)});
const vec2 uvA[6] = vec2[6](${dr(sr)});
const vec2 uvB[6] = vec2[6](${dr(cr)});
const vec2 cornerQ[24] = vec2[24](${dr(lr)});
// how the four vertices walk the corner ring — see voxelVS. The strip's 0,1,3,2
// draws (0,1,3) then (3,1,2), which is the same two triangles and the same
// winding the indexed cube had.
const int vertCorner[4] = int[4](${e.join(`, `)});

void main() {
    int vid = gl_VertexID;
    int inst = gl_InstanceID;
    // vid runs 4*base .. 4*base+3 for the chunk being drawn (see the header),
    // so the high bits carry this sub-draw's record base and the low two the
    // corner. Both built-ins are read once, right here, and never inside a
    // function — that is an ANGLE/D3D11 crash on Firefox, not a style rule.
    int idx = (vid >> 2) + inst;
    uvec2 rec = texelFetch(uRecords, ivec2(idx & ${L-1}, idx >> 11), 0).xy;
    uint w0 = rec.x;
    uint w1 = rec.y;
    bool water = (w0 & (1u << 30u)) != 0u;
    if (water && uWaterPass == 0) {
        gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
        return;
    }

    int face = int((w0 >> 27u) & 7u);
    int corner = vertCorner[vid & 3];
    vec2 q = cornerQ[face * 4 + corner];
    vec2 size = vec2(float((w1 & 15u) + 1u), float(((w1 >> 4u) & 15u) + 1u));

    vec3 cell = vec3(float(w0 & 1023u), float((w0 >> 20u) & 127u), float((w0 >> 10u) & 1023u));
    vec3 wpos = cell + faceBase[face] + faceDu[face] * (q.x * size.x) + faceDv[face] * (q.y * size.y);

    if (water && (face == 2 || (face != 3 && q.y == 1.0))) {
        float height = float(((w1 >> uint(16 + corner * 4)) & 15u) + 1u) / 16.0;
        wpos.y -= 1.0 - height;
    }

    vAO = water ? 1.0 : aoLevels[int(((w1 >> 16u) >> uint(corner * 2)) & 3u)];
    vTileUv = (uvA[face] + uvB[face] * q) * size;
    // Clip the tile with the surface instead of squeezing a whole tile into
    // each shallow side. Mapping actual Y also keeps stacked waterfall rows
    // aligned, including the lowered top row and greedily merged full sides.
    if (water && face != 2 && face != 3) vTileUv.y = size.y - (wpos.y - cell.y);
    vTileLayer = float((w1 >> 8u) & 255u);
    vNormal = faceN[face]; // voxels are axis-aligned and never rotated
    vWorld = wpos;

    gl_Position = projectionMatrix * viewMatrix * vec4(wpos, 1.0);
}
`}var pr=fr([0,1,3,2]);function mr(e,t=!1,n=!1){return Z+(t?`#define SHADOW_PIXEL_FILTER
`:``)+An+`
${n?qn:``}
in float vAO;
in vec2 vTileUv;
in float vTileLayer;
in vec3 vNormal;
in vec3 vWorld;

uniform sampler2DArray uAtlas;
uniform vec3 cameraPosition;
out vec4 fragColor;

void main() {
    vec2 uv = vTileUv;
    vec2 dx = dFdx(uv), dy = dFdy(uv);
${t?`    // Before any discard/early return: integrate shadows over this
    // render target's pixel, including the half-resolution colour capture.
#ifdef SHADOW_PIXEL_DERIVATIVES
    shadowPixelX = dFdx(vWorld);
    shadowPixelY = dFdy(vWorld);
#endif`:``}
${n?`    vec4 captured = vec4(0.0);
    float reuseWeight = 0.0;
    float edgeDetail = 1.0;
    if (uWaterReuseColor) {
        captured = texture(uWaterColor, gl_FragCoord.xy / uWaterTargetSize);
        vec3 capturedRgb = captured.rgb / max(captured.a, 0.0001);
        // Before discard: a capture pixel cannot resolve a subpixel shadow
        // edge. Shade only these high-contrast pixels at full resolution.
        vec3 change = fwidth(capturedRgb);
        edgeDetail = smoothstep(0.015, 0.04, max(max(change.r, change.g), change.b));
    }
    bool hasCapture;
    if (!visibleWaterSurface(hasCapture)) discard;
    if (uWaterReuseColor && hasCapture) {
        // Thin silhouettes absent from the capture still shade at full
        // resolution, keeping the geometry's MSAA coverage intact.
        if (captured.a > 0.0) {
            float fresnel = pow(1.0 - abs(dot(normalize(cameraPosition - vWorld), vNormal)), 3.0);
            // Reconstruct colour, retaining full-resolution face coverage.
            if (edgeDetail == 0.0) {
                fragColor = vec4(captured.rgb / captured.a, mix(0.38, 0.62, fresnel));
                return;
            }
            reuseWeight = 1.0 - edgeDetail;
        }
    }`:``}
    // Snap texel interiors to their centers, blending within one screen pixel
    // of a boundary. At footprints >= one texel this becomes ordinary linear
    // sampling. Keep the continuous gradients for distance mip selection.
    vec2 pixel = uv * ${16 .toFixed(1)};
    vec2 footprint = clamp((abs(dx) + abs(dy)) * ${16 .toFixed(1)}, vec2(0.00001), vec2(1.0));
    vec2 boundary = floor(pixel + 0.5);
    vec2 filteredUv = (boundary + clamp((pixel - boundary) / footprint, -0.5, 0.5)) / ${16 .toFixed(1)};
    // Array layers isolate tiles; REPEAT handles the wrapped boundary taps.
    vec4 tex = textureGrad(uAtlas, vec3(filteredUv, vTileLayer), dx, dy);
${t?`    float fresnel = pow(1.0 - abs(dot(normalize(cameraPosition - vWorld), vNormal)), 3.0);
    float cover = mix(0.38, 0.62, fresnel);`:e?`    if (tex.a < 0.004) discard;
    float cover = tex.a;`:`    if (textureLod(uAtlas, vec3(filteredUv, vTileLayer), 0.0).a < 0.3) discard;
    float cover = 1.0;`}
    vec3 albedo = tex.rgb * (vAO * vAO);
    vec3 normal = gl_FrontFacing ? vNormal : -vNormal;
    vec3 color = gammaOut(albedo * diffuseLight(normal, vWorld));
${t?`    color = mix(color, vec3(0.62, 0.82, 0.92), fresnel * 0.28);`:``}
    fragColor = colorGrade(vec4(color, cover));
${n?`    fragColor.rgb = mix(fragColor.rgb, captured.rgb / max(captured.a, 0.0001), reuseWeight);`:``}
${t&&!n?`    fragColor.rgb *= fragColor.a; // filter safely beside empty capture pixels`:``}
}
`}var hr=class{constructor(e,t){this.gfx=e,this.gl=e.gl,this.geometry=new Qn(this.gl,z*6),this.records=new Zn(this.gl,Ce),this.waterChunks=new Map,this.waterBase=new Int32Array(256),this.waterCount=new Int32Array(256),this.waterCapacity=new Int32Array(256),this.waterDirty=new Uint8Array(256),this.waterBounds=new Float32Array(1536),this.waterWords=new Uint32Array(L*2),this.waterRecords=new Zn(this.gl,L),this.waterGeometry=new Qn(this.gl),this.waterPass=e.waterPass=new Yn(e),this.base=new Int32Array(256),this.count=new Int32Array(256),this.clipped=new Uint8Array(256),this.bounds=new Float32Array(1536),this.visible=new Uint8Array(256),this.shadowBase=new Int32Array(z),this.shadowCount=new Int32Array(z),this.shadowBounds=new Float32Array(z*6),this.shadowGroupDirty=new Uint8Array(z),this.faceCounts=new Int32Array(z*6),this.groupVisible=new Uint8Array(z),this.cameraGroupOrder=new Yt(z),this.sortTerrain=new URLSearchParams(globalThis.location?.search??``).get(`terrainSort`)!==`0`,this.mutationStats={updates:0,milliseconds:0},this.drawnQuads=0,this.totalQuads=0;let n=this.gl,r=n.getParameter(n.SAMPLES)>0,i=e.makeProgram({vertex:pr,fragment:mr(r),uniforms:{uAtlas:{value:t},uRecords:{value:this.records.texture},uWaterPass:{value:0}}});if(this.mesh=new U(this.gl,{geometry:this.geometry,program:i,mode:this.gl.TRIANGLE_STRIP,frustumCulled:!1}),this.mesh.visible=!1,this.mesh.setParent(e.scene),this.waterMesh=new U(n,{geometry:this.waterGeometry,program:e.makeProgram({vertex:pr,fragment:mr(!1,!0,!0),uniforms:{uRecords:{value:this.waterRecords.texture},uWaterPass:{value:1},uAtlas:{value:t},uWaterAbsorption:{value:!1},...this.waterPass.effectUniforms},transparent:!0,depthWrite:!1,cullFace:!1}),mode:n.TRIANGLE_STRIP,frustumCulled:!1}),this.waterMesh.visible=!1,this.waterMesh.setParent(e.scene),this.waterPass.attach(this.waterMesh,new U(n,{geometry:this.waterGeometry,mode:n.TRIANGLE_STRIP,frustumCulled:!1,program:e.makeProgram({vertex:pr,fragment:mr(!1,!0),cullFace:!1,uniforms:{uAtlas:{value:t},uRecords:{value:this.waterRecords.texture},uWaterPass:{value:1},...this.waterPass.captureUniforms}})}),new U(n,{geometry:this.waterGeometry,mode:n.TRIANGLE_STRIP,frustumCulled:!1,program:e.makeProgram({vertex:pr,fragment:Jn,lit:!1,cullFace:!1,depthFunc:n.GEQUAL,uniforms:{uRecords:{value:this.waterRecords.texture},uWaterPass:{value:1}}})})),r){let e=n.SAMPLE_ALPHA_TO_COVERAGE;this.mesh.onBeforeRender(({mesh:t})=>{t.program===i&&n.renderer.enable(e)}),this.mesh.onAfterRender(()=>n.renderer.disable(e))}this.depthProgram=e.makeDepthProgram(pr,Mn,{uRecords:{value:this.records.texture},uWaterPass:{value:0}}),e.shadows&&e.shadows.attachWorld(this),e.on(`cull`,e=>this.cull(e))}update(e,t,n,r,i=!1,a,o){let s=performance.now(),c=this.records.ensure(n)||i,l=this.records.capacity;this.totalQuads=t;let u=!1,d=!1,f=!1;for(let t=0;t<256;t++){let n=t*4,i=r[n+0],a=r[n+1],o=r[n+2],s=o>=l?0:Math.min(i,l-o);s>0&&(c||r[n+3])&&(u||=(this.records.begin(),!0),this.records.uploadChunk(e,o,s)),(c||r[n+3])&&(this.cacheWater(t,e,o,s)&&(d=!0),(this.clipped[t]||s<i)&&(f=!0)),this.clipped[t]=+(s<i),this.base[t]=o,this.count[t]=s,i!==0&&tr(this.bounds,t,a,t%16*4,(t/16|0)*4)}this.shadowGroupDirty.fill(0);for(let e=0;e<z;e++){let t=e%32,n=e/32|0,i=(t/2|0)+(n/2|0)*16;if(!c&&!r[i*4+3])continue;let o=e*9,s=a[o+2],u=a[o+0];this.shadowBase[e]=s;let d=s,f=0;for(let t of Se){let n=a[o+3+t],r=Math.max(0,Math.min(n,l-d));this.faceCounts[e*6+t]=r,f+=r,d+=n}this.shadowCount[e]=f,this.shadowGroupDirty[e]=1,u&&tr(this.shadowBounds,e,a[o+1],t*2,n*2)}this.gfx.shadows?.worldChanged(o,i||f),(d||i)&&this.uploadWater(i),this.mutationStats.updates++,this.mutationStats.milliseconds+=performance.now()-s}cacheWater(e,t,n,r){let i=this.waterChunks.get(e),a=(n+r)*2,o=0,s=!0;for(let e=n*2;e<a;e+=2)t[e]&1<<30&&(i&&t[e]===i[o]&&t[e+1]===i[o+1]||(s=!1),o+=2);if(s&&o===(i?.length??0))return!1;if(this.waterDirty[e]=1,this.waterCount[e]=o/2,!o)return this.waterChunks.delete(e),!0;let c=new Uint32Array(o),l=this.waterBounds,u=e*6;l[u]=l[u+1]=l[u+2]=1/0,l[u+3]=l[u+4]=l[u+5]=-1/0;let d=0;for(let e=n*2;e<a;e+=2){let n=t[e];if(!(n&1<<30))continue;let r=t[e+1],i=n>>>27&7;c[d++]=n,c[d++]=r;let a=n&1023,o=n>>>20&127,s=n>>>10&1023,f=(r&15)+1,p=(r>>>4&15)+1,m=ir[i],h=ar[i];l[u]=Math.min(l[u],a),l[u+1]=Math.min(l[u+1],o),l[u+2]=Math.min(l[u+2],s),l[u+3]=Math.max(l[u+3],a+Math.max(1,m[0]*f+h[0]*p)),l[u+4]=Math.max(l[u+4],o+Math.max(1,m[1]*f+h[1]*p)),l[u+5]=Math.max(l[u+5],s+Math.max(1,m[2]*f+h[2]*p))}return this.waterChunks.set(e,c),!0}uploadWater(e=!1){let t=!1;for(let[e,n]of this.waterChunks)n.length/2>this.waterCapacity[e]&&(t=!0);if(t){let e=0;for(let t=0;t<256;t++){this.waterBase[t]=e;let n=(this.waterChunks.get(t)?.length??0)/2;this.waterCapacity[t]=ye(n),e+=this.waterCapacity[t]}}let n=this.waterBase[255]+this.waterCapacity[255],r=this.waterRecords.ensure(n)||t||e,i=!1;for(let[e,t]of this.waterChunks){let n=this.waterBase[e],a=Math.max(0,Math.min(t.length/2,this.waterRecords.capacity-n));if(this.waterCount[e]=a,!a||!r&&!this.waterDirty[e])continue;let o=Math.ceil(a/L)*L*2;this.waterWords.length<o&&(this.waterWords=new Uint32Array(o)),this.waterWords.set(t.subarray(0,a*2)),i||=(this.waterRecords.begin(),!0),this.waterRecords.uploadChunk(this.waterWords,n,a,0)}this.waterDirty.fill(0)}waterHeight(e,t,n){let r=Math.floor(e/64)+Math.floor(n/64)*16,i=this.waterChunks.get(r);if(!i)return 1;for(let r=0;r<i.length;r+=2){let a=i[r],o=i[r+1];if((a>>>27&7)!=2||(a>>>20&127)!==t)continue;let s=a&1023,c=a>>>10&1023,l=(o&15)+1,u=(o>>>4&15)+1;if(e<s||e>=s+l||n<c||n>=c+u)continue;let d=(e-s)/l,f=(n-c)/u,p=(o>>>16&15)+1,m=(o>>>20&15)+1,h=(o>>>24&15)+1,g=(o>>>28&15)+1;return(d>=f?g+(h-g)*d+(m-h)*f:g+(m-p)*d+(p-g)*f)/16}return 1}drawShadow(e,t,n,r){let i=this.geometry,a=this.mesh,o=i.firsts,s=i.instances,c=i.draws;i.firsts=t,i.instances=n,i.draws=r;let l=a.program;a.program=this.depthProgram,a.draw({camera:e}),a.program=l,i.firsts=o,i.instances=s,i.draws=c}cull(e){e.updateFrustum();let t=e.frustum,n=e.worldMatrix,r=this.geometry,i=0,a=0;this.visible.fill(0),this.groupVisible.fill(0);let o=this.cameraGroupOrder;o.reset(e,this.sortTerrain);for(let e=0;e<256;e++){if(!this.count[e]||!nr(t,this.bounds,e*6))continue;let n=e%16*2,r=(e/16|0)*2;for(let e=0;e<2;e++)for(let i=0;i<2;i++){let a=n+i+(r+e)*32;this.shadowCount[a]&&nr(t,this.shadowBounds,a*6)&&o.add(a,this.shadowBounds)}}o.finish();for(let e=0;e<o.count;e++){let t=o.groups[e],s=Zt(this.shadowBounds,t*6,n[12],n[13],n[14]),c=this.shadowBase[t],l=0;for(let e of Se){let n=this.faceCounts[t*6+e];s&1<<e&&(i=$t(r.firsts,r.instances,i,c,n),l+=n),c+=n}if(l){this.groupVisible[t]=1;let e=Math.floor(t%32/2)+Math.floor(t/32/2)*16;this.visible[e]=1}a+=l}r.draws=i,this.drawnQuads=a,this.mesh.visible=i>0;let s=this.waterGeometry,c=0;for(let e=0;e<256;e++)this.waterCount[e]&&nr(t,this.waterBounds,e*6)&&(s.firsts[c]=this.waterBase[e]*4,s.instances[c++]=this.waterCount[e]);s.draws=c,this.waterMesh.visible=this.waterPass.trigger.visible=this.waterPass.active=c>0}},gr=X+`
in vec2 aCorner;
out vec3 vRay;
void main() {
  vRay = transpose(mat3(viewMatrix)) * vec3(aCorner.x / projectionMatrix[0][0], aCorner.y / projectionMatrix[1][1], -1.0);
  gl_Position = vec4(aCorner, 1.0, 1.0);
}`,_r=Z+`
in vec3 vRay;
out vec4 fragColor;
void main() {
  vec3 ray = normalize(vRay);
  vec3 color = mix(vec3(${On.join(`, `)}), vec3(0.012, 0.017, 0.045), smoothstep(0.0, 0.65, ray.y));
  vec3 grid = ray * 230.0;
  float seed = fract(sin(dot(floor(grid), vec3(127.1, 311.7, 74.7))) * 43758.5453);
  float star = step(0.996, seed) * pow(max(0.0, 1.0 - length(fract(grid) - 0.5) * 1.8), 3.0);
  color += vec3(star * smoothstep(0.05, 0.3, ray.y));
  float moon = dot(ray, normalize(vec3(${bn.map(e=>-e).join(`, `)})));
  float disk = smoothstep(0.9978, 0.9982, moon);
  float halo = exp((moon - 1.0) * 140.0) * 0.12;
  color += vec3(0.72, 0.74, 1.0) * (disk + halo);
  fragColor = colorGrade(vec4(color, 1.0));
}`,vr=class{constructor(e){this.gfx=e,this.geometry=new m(e.gl,{aCorner:{size:2,data:new Float32Array([-1,-1,-1,1,1,-1,1,1])}}),this.program=e.makeProgram({vertex:gr,fragment:_r,lit:!1,fog:!1,depthWrite:!1,cullFace:!1}),this.mesh=new U(e.gl,{geometry:this.geometry,program:this.program,mode:e.gl.TRIANGLE_STRIP,frustumCulled:!1,renderOrder:-10}),this.mesh.setParent(e.scene),e.setHalloweenEnvironment(!0)}dispose(){this.mesh.setParent(null),this.geometry.remove(),this.program.remove(),this.gfx.setHalloweenEnvironment(!1)}},yr=12,br=1.7,xr=.3,Sr=.35,Cr=6,wr=[.5,.5,.5,.2,.3,.8,.8,.7,.2,.3,.8,.25,.7,.2,.75],Tr=[0,0,.35,.35,-.35,-.35,-.35,.35,.35,-.35],Er=5;function Dr(e){let t=1-e/144;return t<=0?0:br*t*t/(1+.09*e)}var Or=class{constructor(e,t){this.gfx=e,this.world=t,this.on=!1,this.torch=!1,this.level=1,this.flickerLeft=0,this.flickerWait=4,this.flickerT=0,this.seed=49734321,this.eye=[0,0,0],this.dir=[0,0,-1]}rand(){let e=this.seed;return e^=e<<13,e^=e>>>17,e^=e<<5,this.seed=e>>>0,this.seed/4294967296}enable(e){let t=F,n=R,r=I,i=t*n,a=this.world,o=new Uint8Array(t*n*r);for(let e=0;e<r;e++)for(let r=0;r<n;r++)for(let n=0;n<t;n++)a.solidAt(n,r,e)&&(o[n+r*t+e*i]=1);let s=new Float32Array(t*n*r),c=e.lamps,l=yr;for(let e=0;e<c.length;e++){let a=c[e].x,u=c[e].z;if(a<0||u<0||a>=t||u>=r)continue;let d=c[e].y;for(;d>0&&o[a+d*t+u*i];)d--;if(d<=0)continue;let f=a+.5,p=d+.9,m=u+.5,h=Math.max(0,Math.floor(f-l)),g=Math.min(t-1,Math.floor(f+l)),_=Math.max(0,Math.floor(p-l)),v=Math.min(n-1,Math.floor(p+l)),y=Math.max(0,Math.floor(m-l)),b=Math.min(r-1,Math.floor(m+l));for(let e=y;e<=b;e++)for(let n=_;n<=v;n++)for(let r=h;r<=g;r++){let a=r+n*t+e*i;if(o[a])continue;let c=r+.5-f,l=n+.5-p,u=e+.5-m,d=c*c+l*l+u*u,h=Dr(d);if(h<=0)continue;let g=Math.max(2,Math.floor(Math.sqrt(d)/xr)),_=0;for(let a=0;a<Er;a++){let s=f+Tr[a*2],c=m+Tr[a*2+1],l=r+wr[a*3]-s,u=n+wr[a*3+1]-p,d=e+wr[a*3+2]-c,h=1;for(let e=1;e<g&&h;e++){let n=e/g;o[Math.floor(s+l*n)+Math.floor(p+u*n)*t+Math.floor(c+d*n)*i]&&(h=0)}_+=h}_>0&&(s[a]+=h*_/Er)}}let u=s,d=new Float32Array(t*n*r);for(let e=0;e<Cr;e++){for(let e=0;e<r;e++)for(let a=0;a<n;a++)for(let s=0;s<t;s++){let c=s+a*t+e*i;if(o[c])continue;let l=u[c],f=1;s>0&&!o[c-1]&&(l+=u[c-1],f++),s<t-1&&!o[c+1]&&(l+=u[c+1],f++),a>0&&!o[c-t]&&(l+=u[c-t],f++),a<n-1&&!o[c+t]&&(l+=u[c+t],f++),e>0&&!o[c-i]&&(l+=u[c-i],f++),e<r-1&&!o[c+i]&&(l+=u[c+i],f++),d[c]=l/f}let a=u;u=d,d=a,e===0&&(d=new Float32Array(t*n*r))}let f=new Uint8Array(t*n*r);for(let e=0;e<f.length;e++)o[e]||(f[e]=1+Math.min(254,Math.round((s[e]+Sr*u[e])*170)));this.gfx.setBackroomsLampVolume(f,t,n,r),this.gfx.setBackroomsLighting(!0,e.ambient,e.lampColor),this.on=!0,this.torch=!1,this.level=1}disable(){this.on&&(this.on=!1,this.torch=!1,this.gfx.setBackroomsLighting(!1),this.gfx.setBackroomsLampVolume(new Uint8Array(1),1,1,1))}frame(e,t){if(!this.on)return;this.flickerT+=e;let n=.96+.04*Math.sin(this.flickerT*37)*Math.sin(this.flickerT*11.3);this.flickerLeft>0?(this.flickerLeft-=e,this.rand()<.35&&(n*=.15+this.rand()*.4)):(this.flickerWait-=e,this.flickerWait<=0&&(this.flickerLeft=.25+this.rand()*.7,this.flickerWait=3+this.rand()*7)),this.level+=(n-this.level)*Math.min(1,e*40);let r=t.position,i=this.gfx.cameraForward();this.eye[0]=r.x,this.eye[1]=r.y-.15,this.eye[2]=r.z,this.dir[0]=i.x,this.dir[1]=i.y,this.dir[2]=i.z,this.gfx.setBackroomsLightingFrame(this.eye,this.dir,+!!this.torch,this.level)}},kr=1.3,Ar=3.4,jr=13,Mr=22,Nr=4.5,Pr=5,Fr=.85,Q=(e,t,n,r,i,a,o,s,c)=>({tile:e,sx:t,sy:n,sz:r,x:i,y:a,z:o,py:s,swing:c});function Ir(e,t,n){return[Q(e,.46,.95,.26,0,1.58,0,0,0),Q(n,.15,1.12,.15,-.13,.56,0,1.12,1),Q(n,.15,1.12,.15,.13,.56,0,1.12,-1),Q(t,.11,1.35,.11,-.28,1.36,0,2,-2),Q(t,.11,1.35,.11,.28,1.36,0,2,2)]}var Lr=[{parts:Ir(`obsidian`,`basalt`,`obsidian`).concat([Q(`basalt`,.36,.44,.34,0,2.27,-.04,2.05,3),Q(`snow`,.075,.05,.02,-.085,2.31,-.215,2.05,4),Q(`snow`,.075,.05,.02,.085,2.31,-.215,2.05,4)]),glow:[.95,.92,.8],tint:1},{parts:Ir(`asphalt`,`asphalt`,`asphalt`).concat([Q(`asphalt`,.36,.44,.34,0,2.27,-.04,2.05,3),Q(`snow`,.11,.035,.02,-.085,2.31,-.215,2.05,4),Q(`snow`,.11,.035,.02,.085,2.31,-.215,2.05,4),Q(`asphalt`,.08,.2,.08,-.1,2.56,-.02,2.05,3),Q(`asphalt`,.06,.3,.06,.07,2.6,.04,2.05,3),Q(`asphalt`,.05,.14,.05,-.02,2.72,-.08,2.05,3),Q(`asphalt`,.07,.14,.07,-.22,2.1,.02,0,0),Q(`asphalt`,.06,.2,.06,.21,2.12,-.03,0,0)]),glow:[1,1,1],tint:.2},{parts:Ir(`sandstone`,`asphalt`,`asphalt`).concat([Q(`metal`,.46,.2,.4,0,2.15,-.02,2.05,3),Q(`snow`,.4,.12,.02,0,2.15,-.215,2.05,4),Q(`scorched`,.04,.16,.04,.1,2.32,.02,2.05,3),Q(`scorched`,.04,.04,.12,.1,2.39,-.04,2.05,3)]),glow:[1,.95,.8],tint:.8}],Rr=1.35,zr=e=>X+`
uniform mat4 modelMatrix;
uniform vec4 uPlace[${e}];
uniform float uSwingKind[${e}];
uniform float uPhase;
uniform float uStride;
uniform float uReach;
in vec3 position;
in vec3 normal;
in vec2 uv;
in float part;
out vec3 vNormal;
out vec3 vWorld;
out vec2 vUv;
out float vGlow;
vec3 pitchAbout(vec3 p, float a) {
    float c = cos(a), s = sin(a);
    return vec3(p.x, p.y * c - p.z * s, p.y * s + p.z * c);
}
void main() {
    int i = int(part + 0.5);
    vec4 pl = uPlace[i];
    float kind = uSwingKind[i];
    vec3 p = position + pl.xyz;
    vec3 n = normal;
    float a = 0.0;
    float sw = sin(uPhase) * uStride;
    if (abs(kind) == 1.0) a = sign(kind) * sw * 0.7;
    else if (abs(kind) == 2.0) a = -sign(kind) * sw * 0.5 + uReach * 1.45;
    else if (kind >= 3.0) a = -0.25 * uReach + 0.12 * sin(uPhase * 0.5);
    if (a != 0.0) {
        vec3 piv = vec3(0.0, pl.w, 0.0);
        p = piv + pitchAbout(p - piv, a);
        n = pitchAbout(n, a);
    }
    vec4 wp = modelMatrix * vec4(p, 1.0);
    vWorld = wp.xyz;
    vNormal = mat3(modelMatrix) * n;
    vUv = uv;
    vGlow = kind == 4.0 ? 1.0 : 0.0;
    gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Br=Z+An+`
in vec3 vNormal;
in vec3 vWorld;
in vec2 vUv;
in float vGlow;
uniform sampler2D uAtlas;
uniform float uRage;
uniform vec3 uGlow;
uniform float uTint;
out vec4 fragColor;
void main() {
    vec3 albedo = texture(uAtlas, vUv).rgb * 0.55 * uTint;
    vec3 c = albedo * diffuseLightFree(normalize(vNormal), vWorld);
    // The eyes (or the lamp) carry their own light: pale in the dark,
    // turning red once it has seen you.
    if (vGlow > 0.5) c = mix(uGlow, vec3(1.0, 0.12, 0.05), uRage) * 1.6;
    fragColor = vec4(gammaOut(c), 1.0);
}
`,Vr=[1,-1,0,0],Hr=[0,0,1,-1],Ur=class{constructor(e,t,n){this.gfx=e,this.world=t,this.atlas=n,this.root=null,this.skins=null,this.list=[],this.nav=null,this.w=0,this.d=0,this.floorY=0,this.playerField=null,this.fieldAge=1e9,this.fieldCell=-1,this.queue=null,this.seed=5349827}rand(){let e=this.seed;return e^=e<<13,e^=e>>>17,e^=e<<5,this.seed=e>>>0,this.seed/4294967296}ensureGpu(){if(this.skins)return;let e=this.gfx.gl;this.root=new H,this.root.setParent(this.gfx.scene),this.skins=Lr.map(t=>{let n=t.parts,r=[],i=[];for(let e=0;e<n.length;e++){let t=n[e];r.push(t.x,t.y,t.z,t.py),i.push(t.swing)}return{geometry:d(e,n,e=>u(a[e.tile],e.sx,e.sy,e.sz,Rr)),program:this.gfx.makeProgram({vertex:zr(n.length),fragment:Br,uniforms:{uAtlas:{value:this.atlas},uPlace:{value:r},uSwingKind:{value:i},uPhase:{value:0},uStride:{value:0},uReach:{value:0},uRage:{value:0},uGlow:{value:t.glow},uTint:{value:t.tint}}})}})}buildNav(e){let t=F,n=I,r=this.world,i=new Uint8Array(t*n);for(let a=0;a<n;a++)for(let n=0;n<t;n++)!r.solidAt(n,e,a)&&!r.solidAt(n,e+1,a)&&r.solidAt(n,e-1,a)&&(i[n+a*t]=1);this.nav=i,this.w=t,this.d=n,this.floorY=e,this.queue=new Int32Array(t*n)}field(e,t){let n=this.w,r=this.d,i=this.nav,a=this.queue,o=t||new Uint16Array(n*r);if(o.fill(65535),e<0||!i[e])return o;let s=0,c=0;for(o[e]=0,a[c++]=e;s<c;){let e=a[s++],t=e%n,l=e/n|0,u=o[e]+1;for(let e=0;e<4;e++){let s=t+Vr[e],d=l+Hr[e];if(s<0||d<0||s>=n||d>=r)continue;let f=s+d*n;!i[f]||o[f]<=u||(o[f]=u,a[c++]=f)}}return o}cellNear(e,t){let n=Math.floor(e),r=Math.floor(t);for(let e=0;e<=2;e++)for(let t=-e;t<=e;t++)for(let i=-e;i<=e;i++){let e=n+i,a=r+t;if(!(e<0||a<0||e>=this.w||a>=this.d)&&this.nav[e+a*this.w])return e+a*this.w}return-1}start(e){this.clear(),this.ensureGpu(),this.buildNav(e.floorY),this.playerField=new Uint16Array(this.w*this.d),this.fieldAge=1e9,this.fieldCell=-1;for(let t=0;t<e.dens.length;t++)this.spawn(e.dens[t].x,e.dens[t].z)}spawn(e,t){let n=this.cellNear(e,t);if(n<0)return;let r=this.skins[Math.floor(Math.random()*this.skins.length)],i=new U(this.gfx.gl,{geometry:r.geometry,program:r.program,frustumCulled:!1}),a={mesh:i,x:n%this.w+.5,z:(n/this.w|0)+.5,homeX:0,homeZ:0,yaw:this.rand()*Math.PI*2,mode:`wander`,noticed:!1,target:-1,goal:new Uint16Array(this.w*this.d),phase:this.rand()*6,stride:0,reach:0,rage:0,lostFor:0,stepAt:0,growlIn:3+this.rand()*8,pause:this.rand()*2};a.homeX=a.x,a.homeZ=a.z,i.onBeforeRender(()=>{let e=r.program.uniforms;e.uPhase.value=a.phase,e.uStride.value=a.stride,e.uReach.value=a.reach,e.uRage.value=a.rage}),i.setParent(this.root),this.list.push(a),this.pickWander(a),this.place(a)}sendHome(){for(let e=0;e<this.list.length;e++){let t=this.list[e];t.x=t.homeX,t.z=t.homeZ,t.mode=`wander`,t.noticed=!1,t.rage=0,t.reach=0,t.pause=2+this.rand()*2,this.pickWander(t),this.place(t)}}clear(){for(let e=0;e<this.list.length;e++)this.list[e].mesh.setParent(null);this.list=[]}pickWander(e,t){let n=-1,r=this.cellNear(e.x,e.z);for(let r=0;r<40&&n<0;r++){let r;if(t!==void 0&&t>=0){let e=t%this.w+Math.floor((this.rand()-.5)*14),n=(t/this.w|0)+Math.floor((this.rand()-.5)*14);if(e<0||n<0||e>=this.w||n>=this.d)continue;r=e+n*this.w}else r=Math.floor(this.rand()*this.w*this.d);if(!this.nav[r])continue;let i=r%this.w-e.x,a=(r/this.w|0)-e.z;t===void 0&&i*i+a*a<400||(n=r)}n<0&&(n=r),e.target=n,this.field(n,e.goal),r>=0&&e.goal[r]===65535&&(e.target=r,this.field(r,e.goal))}sees(e,t,n,r){let i=n-e,a=r-t,o=Math.ceil(Math.hypot(i,a)*3);for(let n=1;n<o;n++){let r=n/o,s=Math.floor(e+i*r),c=Math.floor(t+a*r);if(s<0||c<0||s>=this.w||c>=this.d||this.world.solidAt(s,this.floorY+1,c))return!1}return!0}next(e,t){let n=Math.floor(e.x),r=Math.floor(e.z),i=n+r*this.w,a=-1,o=t[i];for(let e=0;e<4;e++){let i=n+Vr[e],s=r+Hr[e];if(i<0||s<0||i>=this.w||s>=this.d)continue;let c=i+s*this.w;t[c]<o&&(o=t[c],a=c)}if(a<0)return null;let s=a%this.w,c=a/this.w|0,l=s+.5,u=c+.5;for(let e=0;e<4;e++){let i=s+Vr[e],a=c+Hr[e];if(!(i<0||a<0||i>=this.w||a>=this.d)&&t[i+a*this.w]<o&&this.nav[i+r*this.w]&&this.nav[n+a*this.w]&&Math.abs(i-n)===1&&Math.abs(a-r)===1){l=i+.5,u=a+.5;break}}return{x:l,z:u}}place(e){e.mesh.position.set(e.x,this.floorY,e.z),e.mesh.rotation.y=e.yaw}update(e,t,n){if(this.list.length===0||e<=0)return null;let r=t.x,i=t.z,a=this.cellNear(r,i),o=Math.abs(t.y-this.floorY)<2.5;this.fieldAge+=e,a!==this.fieldCell&&this.fieldAge>.25&&(this.field(a,this.playerField),this.fieldCell=a,this.fieldAge=0);let s=!1;for(let t=0;t<this.list.length;t++){let c=this.list[t],l=r-c.x,u=i-c.z,d=Math.hypot(l,u),f=n?Mr:jr,p=!1;if(o&&a>=0){if(d<Nr)p=!0;else if(d<f&&this.sees(c.x,c.z,r,i)){let e=-Math.sin(c.yaw),t=-Math.cos(c.yaw);(n||(e*l+t*u)/d>.3)&&(p=!0)}}c.noticed=p,p?(c.mode!==`hunt`&&(c.growlIn=0,c.pause=.35),c.mode=`hunt`,c.lostFor=0):c.mode===`hunt`&&(c.lostFor+=e,c.lostFor>Pr&&(c.mode=`wander`,this.pickWander(c,a)));let m=c.mode===`hunt`;c.rage+=(+!!m-c.rage)*Math.min(1,e*3),c.reach+=(+!!m-c.reach)*Math.min(1,e*4);let h=0;if(c.pause>0)c.pause-=e;else{let t=m?this.playerField:c.goal,n=this.next(c,t);if(m&&d<1.6&&(n={x:r,z:i}),!n)m||(c.pause=1+this.rand()*3,this.pickWander(c));else{h=m?Ar:kr;let t=n.x-c.x,r=n.z-c.z,i=Math.hypot(t,r);if(i>1e-4){let n=Math.min(i,h*e);c.x+=t/i*n,c.z+=r/i*n;let a=Math.atan2(-t,-r)-c.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),c.yaw+=a*Math.min(1,e*(m?12:5))}}}if(c.stride+=((h>0?Math.min(1,h/3.5):0)-c.stride)*Math.min(1,e*6),c.phase+=e*(h>0?h*2.2:.8),this.place(c),h>0){let e=Math.floor(c.phase/Math.PI);e!==c.stepAt&&(c.stepAt=e,Ie(c.x,this.floorY,c.z))}c.growlIn-=e,c.growlIn<=0&&(He(c.x,this.floorY+2,c.z,m),c.growlIn=m?2.5+this.rand()*2:7+this.rand()*10),o&&d<Fr&&(s=!0)}return s?`caught`:null}nearest(e,t){let n=1/0;for(let r=0;r<this.list.length;r++){let i=Math.hypot(this.list[r].x-e,this.list[r].z-t);i<n&&(n=i)}return n}get hunting(){for(let e=0;e<this.list.length;e++)if(this.list[e].mode===`hunt`)return!0;return!1}get detecting(){return this.list.some(e=>e.noticed)}},Wr=4,Gr=.16,Kr=2.4,qr=.72,Jr=.13,Yr=.22,$=1024,Xr=.11,Zr=.18,Qr=.3,$r=[0,3,.9,.25,0],ei=$r.length-1,ti=[1,-1,0,0,1,1,-1,-1],ni=[0,0,1,-1,1,-1,1,-1],ri=X+`
in vec3 position;
in vec2 uv;
in float alpha;
out vec2 vUv;
out float vAlpha;
void main() {
    vUv = uv;
    vAlpha = alpha;
    gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0);
}
`,ii=Z+`
in vec2 vUv;
in float vAlpha;
out vec4 fragColor;
float blob(vec2 p, vec2 c, vec2 r) { vec2 d = (p - c) / r; return 1.0 - smoothstep(0.75, 1.0, dot(d, d)); }
void main() {
    vec2 p = vUv;
    float m = blob(p, vec2(0.52, 0.42), vec2(0.30, 0.22));   // ball of the foot
    m = max(m, blob(p, vec2(0.48, 0.64), vec2(0.20, 0.16))); // arch
    m = max(m, blob(p, vec2(0.47, 0.82), vec2(0.21, 0.14))); // heel
    m = max(m, blob(p, vec2(0.30, 0.13), vec2(0.09, 0.08)));
    m = max(m, blob(p, vec2(0.46, 0.10), vec2(0.07, 0.06)));
    m = max(m, blob(p, vec2(0.59, 0.12), vec2(0.06, 0.055)));
    m = max(m, blob(p, vec2(0.70, 0.16), vec2(0.05, 0.05)));
    m = max(m, blob(p, vec2(0.79, 0.22), vec2(0.045, 0.045)));
    float a = m * vAlpha;
    if (a < 0.01) discard;
    // additive: a glow on the carpet, never a dark decal
    fragColor = vec4(vec3(0.35, 1.0, 0.75) * a, a);
}
`;function ai(e,t,n){let r=e.length;for(e.push(n);r>0;){let i=r-1>>1;if(t[e[i]]<=t[n])break;e[r]=e[i],r=i}e[r]=n}function oi(e,t){let n=e[0],r=e.pop();if(e.length===0)return n;let i=0,a=e.length;for(;;){let n=2*i+1;if(n>=a)break;let o=n+1,s=o<a&&t[e[o]]<t[e[n]]?o:n;if(t[e[s]]>=t[r])break;e[i]=e[s],i=s}return e[i]=r,n}var si=class{constructor(e,t){this.gfx=e,this.grid=t,this.mesh=null,this.geometry=null,this.cost=null,this.goalX=0,this.goalZ=0,this.on=!1,this.waveIn=0,this.waves=[],this.prints=[]}ensureGpu(){if(this.mesh)return;let e=this.gfx.gl,t=new Uint32Array($*6);for(let e=0;e<$;e++){let n=e*4,r=e*6;t[r]=n,t[r+1]=n+2,t[r+2]=n+1,t[r+3]=n,t[r+4]=n+3,t[r+5]=n+2}this.geometry=new m(e,{position:{size:3,data:new Float32Array($*12),usage:e.DYNAMIC_DRAW},uv:{size:2,data:new Float32Array($*8),usage:e.DYNAMIC_DRAW},alpha:{size:1,data:new Float32Array($*4),usage:e.DYNAMIC_DRAW},index:{data:t}}),this.geometry.setDrawRange(0,0);let n=this.gfx.makeProgram({vertex:ri,fragment:ii,lit:!1,transparent:!0,depthWrite:!1,cullFace:!1});n.setBlendFunc(e.ONE,e.ONE),this.mesh=new U(e,{geometry:this.geometry,program:n,frustumCulled:!1}),this.mesh.visible=!1,this.mesh.setParent(this.gfx.scene)}start(e,t){let n=this.grid;n.nav&&(this.ensureGpu(),this.goalX=e,this.goalZ=t,this.buildCost(n.cellNear(e,t)),this.on=!0,this.waveIn=0,this.waves=[],this.prints=[],this.mesh.visible=!0)}stop(){this.on=!1,this.waves=[],this.prints=[],this.mesh&&(this.mesh.visible=!1,this.geometry.setDrawRange(0,0))}buildCost(e){let t=this.grid,n=t.w,r=t.d,i=t.nav,a=n*r,o=new Uint8Array(a).fill(ei),s=new Int32Array(a),c=0,l=0;for(let e=0;e<a;e++)i[e]||(o[e]=0,s[l++]=e);for(;c<l;){let e=s[c++],t=o[e]+1;if(t>=ei)continue;let i=e%n,a=e/n|0;for(let e=0;e<4;e++){let c=i+ti[e],u=a+ni[e];if(c<0||u<0||c>=n||u>=r)continue;let d=c+u*n;o[d]<=t||(o[d]=t,s[l++]=d)}}let u=new Float32Array(a).fill(1/0);if(this.cost=u,e<0)return;let d=[];u[e]=0,ai(d,u,e);let f=new Uint8Array(a);for(;d.length>0;){let e=oi(d,u);if(f[e])continue;f[e]=1;let t=e%n,a=e/n|0;for(let s=0;s<8;s++){let c=t+ti[s],l=a+ni[s];if(c<0||l<0||c>=n||l>=r)continue;let p=c+l*n;if(!i[p]||f[p]||s>=4&&(!i[c+a*n]||!i[t+l*n]))continue;let m=(s>=4?Math.SQRT2:1)*(1+$r[o[p]]),h=u[e]+m;h<u[p]&&(u[p]=h,ai(d,u,p))}}}plan(e,t){let n=this.grid,r=n.w,i=n.d,a=n.nav,o=this.cost,s=n.cellNear(e,t);if(s<0||o[s]===1/0)return[];let c=[{x:e,z:t}];for(let e=0;e<4e3&&o[s]>0;e++){let e=s%r,t=s/r|0,n=-1;for(let c=0;c<8;c++){let l=e+ti[c],u=t+ni[c];if(l<0||u<0||l>=r||u>=i)continue;let d=l+u*r;a[d]&&(c>=4&&(!a[l+t*r]||!a[e+u*r])||o[d]<o[s]&&(n<0||o[d]<o[n])&&(n=d))}if(n<0)break;s=n,c.push({x:s%r+.5,z:(s/r|0)+.5})}c.push({x:this.goalX,z:this.goalZ});let l=c;for(let e=0;e<3&&!(l.length<3);e++){let e=[l[0]];for(let t=0;t<l.length-1;t++){let n=l[t],r=l[t+1];e.push({x:n.x*.75+r.x*.25,z:n.z*.75+r.z*.25}),e.push({x:n.x*.25+r.x*.75,z:n.z*.25+r.z*.75})}e.push(l[l.length-1]),l=e}let u=[],d=qr*.5,f=0,p=0;for(let e=l.length-1;e>0;e--){let t=l[e],r=l[e-1],i=Math.hypot(r.x-t.x,r.z-t.z);if(i<1e-5)continue;let a=(r.x-t.x)/i,o=(r.z-t.z)/i,s=d;for(;s<=i;){let e=f+s,r=t.x+a*s,i=t.z+o*s,c=Yr*(Math.sin(e*.33)*.7+Math.sin(e*.81+1.7)*.3),l=n.cellNear(r,i);l>=0&&this.tight(l)&&(c*=.25);let d=(p&1)==1,m=(d?-.13:Jr)+c;u.push({x:r+o*m,z:i-a*m,yaw:Math.atan2(a,o),left:d}),p++,s+=qr}d=s-i,f+=i}return u.reverse(),u}tight(e){let t=this.grid,n=t.w,r=t.nav;return!r[e-1]||!r[e+1]||!r[e-n]||!r[e+n]}update(e,t){if(!this.on)return;if(this.waveIn-=e,this.waveIn<=0){this.waveIn+=Wr;let e=this.plan(t.x,t.z);e.length>0&&this.waves.push({trail:e,next:0,clock:Gr})}let n=0;for(let t=0;t<this.waves.length;t++){let r=this.waves[t];for(r.clock+=e;r.clock>=Gr&&r.next<r.trail.length;){r.clock-=Gr;let e=r.trail[r.next++];for(let t=0;t<this.prints.length;t++){let n=this.prints[t],r=n.x-e.x,i=n.z-e.z;r*r+i*i<Qr*Qr&&(n.age=3.4)}this.prints.length<$&&this.prints.push({x:e.x,z:e.z,yaw:e.yaw,left:e.left,age:0}),(r.next===1||r.next===5)&&ze(e.x,this.grid.floorY,e.z)}r.next<r.trail.length&&(this.waves[n++]=r)}this.waves.length=n;let r=this.grid.floorY+.02,i=this.geometry.attributes.position.data,a=this.geometry.attributes.uv.data,o=this.geometry.attributes.alpha.data,s=0;for(let t=0;t<this.prints.length;t++){let n=this.prints[t];if(n.age+=e,n.age>Kr)continue;this.prints[s]=n;let c=1-n.age/Kr,l=.55+.45*Math.cos(n.age*14),u=Math.min(1,n.age*12)*c*l,d=Math.cos(n.yaw),f=Math.sin(n.yaw),p=s*12,m=s*8,h=s*4;for(let e=0;e<4;e++){let t=e===0||e===3?-.11:Xr,s=e<2?-.18:Zr;i[p+e*3]=n.x+t*d+s*f,i[p+e*3+1]=r,i[p+e*3+2]=n.z-t*f+s*d;let c=e===0||e===3?0:1;a[m+e*2]=n.left?1-c:c,a[m+e*2+1]=e<2?0:1,o[h+e]=u}s++}this.prints.length=s,this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.uv.needsUpdate=!0,this.geometry.attributes.alpha.needsUpdate=!0,this.geometry.setDrawRange(0,s*6)}},ci=Z+An+`
in vec3 vNormal;
in vec3 vWorld;
in vec2 vUv;
uniform sampler2D uAtlas;
out vec4 fragColor;
void main() {
  vec3 albedo = texture(uAtlas, vUv).rgb;
  fragColor = colorGrade(vec4(gammaOut(albedo * diffuseLightFree(vNormal, vWorld)), 1.0));
}`,li=X+`
in vec3 position;
uniform mat4 modelMatrix;
void main() {
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,ui=Z+`
out vec4 fragColor;
void main() {
  fragColor = colorGrade(vec4(1.0, 0.769, 0.0, 1.0));
}`;function di(e){for(let t=0;t<24;t++){for(let n=37;n<=43;n++)e(n,20,t,n===38||n===42?`rail_z`:`planks`);for(let n of[34,46]){if(e(n,19,t,`rust`),e(n,25,t,`rust`),t%6==0)for(let r=20;r<25;r++)e(n,r,t,`rust`);e(n,20+t%6,t,`metal`)}}for(let t of[35,45])for(let n=3;n<20;n++)e(t,n,0,`concrete`),e(t,n,1,`concrete`)}function fi(e){for(let t=0;t<48;t++)for(let n=0;n<80;n++){if(n>20&&n<60){e(n,2,t,`glass_blue`);continue}let r=n<=20?20-n:n-60,i=12+Math.floor(r*.65)+ +(t%17<8);for(let r=2;r<=i;r++)e(n,r,t,r===i?`grass`:r>i-3?`dirt`:`stone`)}for(let t of[10,68])for(let n of[8,32]){for(let r=0;r<5;r++)e(t,20+r,n,`log`);for(let r=3;r<7;r++)for(let i=-2;i<=2;i++)for(let a=-2;a<=2;a++)Math.abs(i)+Math.abs(a)<4&&e(t+i,20+r,n+a,`leaves`)}}var pi=class{constructor(e,t,n){this.gfx=e,this.bridgeDistance=n,this.root=new H,this.root.setParent(e.scene),this.time=0,this.fallTime=0,this.audio=null,e.setTrainInterior(Ee),this.program=e.makeProgram({vertex:jn,fragment:ci,uniforms:{uAtlas:{value:t}}});let r=e=>s[o[e].id];this.geometries=[di,fi].map(t=>f(e.gl,{build:t},r)),this.bridge=this.instances(this.geometries[0],24,-192,312),this.canyon=this.instances(this.geometries[1],48,-192,288),this.arrowGeometry=new m(e.gl,{position:{size:3,data:new Float32Array([0,0,0,.55,.55,0,-.55,.55,0,-.17,.55,0,.17,.55,0,.17,1.35,0,-.17,.55,0,.17,1.35,0,-.17,1.35,0])}}),this.arrowProgram=e.makeProgram({vertex:li,fragment:ui,cullFace:!1}),this.brakeArrow=new U(e.gl,{geometry:this.arrowGeometry,program:this.arrowProgram,frustumCulled:!1}),this.brakeArrow.scale.set(.65,.65,.65),this.brakeArrow.setParent(this.root),this.update(0,{distance:0,speed:24,derailing:!1})}instances(e,t,n,r){let i=[];for(let a=n;a<=r;a+=t){let t=new U(this.gfx.gl,{geometry:e,program:this.program,frustumCulled:!1});t.setParent(this.root),i.push({mesh:t,z:a})}return i}update(e,{distance:t,speed:n,derailing:r,braking:i=!1,highlightBrake:a=!1}){this.time+=e,this.brakeArrow.visible=a&&!r&&!i,this.brakeArrow.position.set(Oe.x,Oe.y+.7+Math.sin(this.time*4)*.08,Oe.z),this.brakeArrow.quaternion.copy(this.gfx.camera.quaternion),r&&(this.fallTime+=e),this.root.position.y=Math.min(40,this.fallTime**2*8);let o=De-(this.bridgeDistance-t);for(let{mesh:e,z:n}of this.bridge){let r=n+t%24,i=r+24;e.visible=i>o,e.position.z=Math.max(r,o),e.scale.z=Math.max(.001,(i-Math.max(r,o))/24)}for(let{mesh:e,z:n}of this.canyon)e.position.z=n+t%48;if(this.gfx.setTrainHeadlamp(this.gfx.camera),e>0){this.audio||=Be(),this.audio?.update(n,i);let e=this.gfx.camera;e.position.y+=Math.sin(this.time*32)*.022*n/24,e.quaternion.rotateZ(this.fallTime?Math.min(.3,this.fallTime*.16):Math.sin(this.time*17)*.0015*n/24)}}stopAudio(){this.audio?.stop(),this.audio=null}dispose(){this.stopAudio(),this.gfx.setTrainInterior(null),this.root.setParent(null);for(let e of this.geometries)e.remove();this.arrowGeometry.remove(),this.arrowProgram.remove(),this.program.remove()}},mi=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20viewBox='0%200%2024%2024'%3e%3crect%20x='5'%20y='3'%20width='14'%20height='3'%20rx='1.2'%20fill='%23b08a4e'%20stroke='%235b6168'%20stroke-width='1'/%3e%3crect%20x='10.8'%20y='6'%20width='2.4'%20height='7'%20fill='%239aa3ab'%20stroke='%235b6168'%20stroke-width='0.8'/%3e%3crect%20x='5.5'%20y='12.5'%20width='13'%20height='9'%20rx='1'%20fill='%236f777e'%20stroke='%235b6168'%20stroke-width='1'/%3e%3crect%20x='7.5'%20y='15'%20width='9'%20height='4'%20fill='%23ffc14d'/%3e%3cpath%20d='M9.2%2019%20L11.2%2015%20M12.6%2019%20L14.6%2015'%20stroke='%231c1f22'%20stroke-width='1.3'%20fill='none'/%3e%3c/svg%3e`,hi=X+`
in vec3 position;
in vec3 normal;
in vec2 uv;
uniform mat4 modelMatrix;
out vec3 vLocal;
out vec3 vNormal;
out vec2 vUv;
void main() {
  vLocal = position;
  vNormal = normal;
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,gi=Z+An+`
in vec3 vLocal;
in vec3 vNormal;
in vec2 vUv;
uniform sampler2D uAtlas;
uniform float uOpacity;
out vec4 fragColor;
void main() {
  vec3 p = abs(vLocal);
  float edge = max(min(p.x, p.y), max(min(p.x, p.z), min(p.y, p.z)));
  float aa = max(fwidth(edge), 0.001);
  float outline = smoothstep(0.472 - aa, 0.472 + aa, edge);
  // The smallest coordinate runs along each edge. Its absolute value keeps
  // the dashes aligned across adjoining faces and joined at cube corners.
  float along = min(p.x, min(p.y, p.z)) * 6.0;
  float dashAA = max(fwidth(along), 0.001);
  float dash = 1.0 - smoothstep(0.3 - dashAA, 0.3 + dashAA, abs(fract(along + 0.5) - 0.5));
  outline *= dash;
  vec3 albedo = texture(uAtlas, vUv).rgb;
  vec3 color = gammaOut(albedo * (diffuseLightUnshadowed(vNormal) + 0.25));
  fragColor = colorGrade(vec4(mix(color, vec3(1.0, 0.94, 0.72), outline), mix(uOpacity, 0.95, outline)));
}`,_i=X+`
in vec3 position;
in vec3 color;
uniform mat4 modelMatrix;
out vec3 vColor;
void main() {
  vColor = color;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,vi=Z+`
in vec3 vColor;
out vec4 fragColor;
void main() { fragColor = colorGrade(vec4(vColor, 1.0)); }
`,yi=class{constructor(e,t,n,r,i,a){this.gfx=e,this.time=0,this.root=new H,this.root.position.set(r+.5,i+.5,a+.5),this.root.setParent(e.scene);let[c,l,u]=s[o[n].id];this.cubeGeometry=p(e.gl,{px:l,nx:l,py:c,ny:u,pz:l,nz:l}),this.cubeProgram=e.makeProgram({vertex:hi,fragment:gi,transparent:!0,depthWrite:!1,uniforms:{uAtlas:{value:t},uOpacity:{value:.32}}}),this.cube=new U(e.gl,{geometry:this.cubeGeometry,program:this.cubeProgram}),this.cube.setParent(this.root),this.arrowGeometry=new m(e.gl,{position:{size:3,data:new Float32Array([0,-.05,0,.405,.355,0,-.405,.355,0,-.125,.32,0,.125,.32,0,.125,.835,0,-.125,.32,0,.125,.835,0,-.125,.835,0,0,0,0,.32,.32,0,-.32,.32,0,-.09,.32,0,.09,.32,0,.09,.8,0,-.09,.32,0,.09,.8,0,-.09,.8,0])},color:{size:3,data:new Float32Array([...Array(9).fill([0,0,0]).flat(),...Array(9).fill([1,.9,.62]).flat()])}}),this.arrowProgram=e.makeProgram({vertex:_i,fragment:vi,depthWrite:!1,cullFace:!1}),this.arrow=new U(e.gl,{geometry:this.arrowGeometry,program:this.arrowProgram}),this.arrow.setParent(this.root),this.update(0)}update(e){this.time+=e;let t=Math.sin(this.time*2.4);this.cubeProgram.uniforms.uOpacity.value=.32-t*.12,this.arrow.position.y=.85+t*.07,this.arrow.quaternion.copy(this.gfx.camera.quaternion)}dispose(){this.root.setParent(null),this.cubeGeometry.remove(),this.cubeProgram.remove(),this.arrowGeometry.remove(),this.arrowProgram.remove()}},bi=X+`
in vec3 position;
in vec2 uv;
uniform mat4 modelMatrix;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}`,xi=Z+`
in vec2 vUv;
uniform sampler2D uIcon;
out vec4 fragColor;
void main() {
  vec4 icon = texture(uIcon, vUv);
  if (icon.a < 0.01) discard;
  fragColor = colorGrade(icon);
}`,Si=class{constructor(e,t,n,r){this.gfx=e,this.time=0,this.root=new H,this.root.position.set(t+.5,n+1.6,r+.5),this.root.setParent(e.scene),this.texture=new W(e.gl),this.geometry=new m(e.gl,{position:{size:3,data:new Float32Array([-.9,-.9,0,.9,-.9,0,.9,.45,0,-.9,.45,0])},uv:{size:2,data:new Float32Array([0,0,1,0,1,1,0,1])},index:{data:new Uint16Array([0,1,2,0,2,3])}}),this.program=e.makeProgram({vertex:bi,fragment:xi,transparent:!0,depthWrite:!1,cullFace:!1,uniforms:{uIcon:{value:this.texture}}}),this.icon=new U(e.gl,{geometry:this.geometry,program:this.program}),this.icon.visible=!1,this.icon.setParent(this.root),this.image=new Image,this.image.onload=()=>{let e=document.createElement(`canvas`);e.width=512,e.height=384;let t=e.getContext(`2d`);for(let e=0;e<8;e++){let n=e*Math.PI/4;t.drawImage(this.image,184+Math.cos(n)*5,Math.sin(n)*5,256,256)}t.globalCompositeOperation=`source-in`,t.fillStyle=`#000`,t.fillRect(0,0,e.width,e.height),t.globalCompositeOperation=`source-over`,t.drawImage(this.image,184,0,256,256);let n=-Math.PI-Math.PI/12,r=Math.cos(n),i=Math.sin(n),a=220+75*r,o=175+75*i;t.lineJoin=`round`,t.beginPath(),t.arc(220,175,85,-Math.PI/2,n,!0),t.lineTo(a+32*r,o+32*i),t.lineTo(a+46*i,o-46*r),t.lineTo(a-32*r,o-32*i),t.lineTo(220+65*r,175+65*i),t.arc(220,175,65,n,-Math.PI/2),t.closePath(),t.fillStyle=`#fff3b8`,t.fill(),t.strokeStyle=`#000`,t.lineWidth=6,t.stroke(),this.texture.image=e,this.icon.visible=!0},this.image.src=mi,this.update(0)}update(e){this.time+=e,this.icon.position.y=Math.sin(this.time*2.4)*.07,this.icon.quaternion.copy(this.gfx.camera.quaternion)}dispose(){this.image.onload=null,this.root.setParent(null),this.geometry.remove(),this.program.remove(),this.texture.remove()}},Ci=.5;function wi(e){return e>=.95?3:e>=.8?2:+(e>=.5)}var Ti=he({storage:()=>localStorage,missions:B,onChange(e,t){k.value=e,pe.value=t}});function Ei(){return j(k.peek())}function Di(e){return _(k.peek(),Fe.find(t=>t.key===e))}function Oi(e){return!!B[e]&&!!k.peek().missions[B[e].key]?.unlocked}function ki(e=`regular`){let t=-1;for(let n of Ne(e))Oi(n)&&(t=n);return t}function Ai(){return Ti.retry()}var ji={igniter:`Igniter`,laser:`Laser`,flashlight:`Flashlight`,hint:`Footprints`},Mi={igniter:`Light fuses`,laser:`Hold to cut`,flashlight:`Click: on / off`,hint:`Show the way out for a minute`};for(let e of[...oe,...ne,...fe])ji[e.key]=e.name,Mi[e.key]=e.desc;var Ni={mega:`MEGA`,cluster:`CLUSTER`,creeper:`BOOMER`,sticky:`STICKY`,hint:`WAY OUT`};function Pi(e){return ji[e]||o[e]?.name||e}function Fi(e){return e===`nuke`?`Power ${i(Math.max(F,I)).toFixed(0)}`:Mi[e]||`Building block`}var Ii=Object.freeze({key:null,amount:0,sealed:!1,sealedBehindAd:!1,adGroup:null,name:``,desc:``,short:``});function Li(e){if(e===`creeper`||e===`grenade`||O[e]||e===`sticky`||e===`airstrike`)return!0;let t=o[e];return!!(t&&t.explosive)}function Ri(e){let t={};for(let n=0;n<ge.length;n++){let r=ge[n];Object.defineProperty(t,r,{enumerable:!0,get:()=>S.peek()[r],set:t=>{e()&&ue(r,t)}})}return Object.seal(t)}var zi=.3,Bi=class{constructor(e){this.gfx=e.gfx,this.atlasTexture=e.atlasTexture,this.backroomsLighting=null,this.stalkers=null,this.footprints=null,this.torchOn=!1,this.sim=e.sim,this.world=e.sim.world,this.boom=e.boom,this.npc=e.npc,this.player=e.player,this.moveRespawn=e.moveRespawn,this.respawn=e.respawn,this.missionIdx=-1,this.scope=null,this.api=null,this.listeners=null,this.timers=[],this.interactions=[],this.trainRide=null,this.finishIn=-1,this.quietFor=0,this.quiet=!1,this.blockDamaged=this.blockDamaged.bind(this),this.explosion=this.explosion.bind(this),this.fuseLit=this.fuseLit.bind(this)}get mission(){return B[this.missionIdx]}load(e){return Promise.all([Pe(e),B[e].logicScript()]).then(e=>({layout:e[0],logic:e[1]}))}begin(e,t){if(this.end(),this.missionIdx=e,me.value=e,A.value=0,v.value=``,ie.value=-1,N.value=[],this.finishIn=-1,this.quiet=!1,this.quietFor=0,re(),this.scope=new Te(null),this.listeners={frame:[],damaged:[],explosion:[],fuse:[],tool:[],killed:[],infected:[],quiet:[],creeperExploded:[],caught:[],playerAttacked:[],placed:[]},this.timers=[],this.api=this.makeApi(this.scope),this.mission.category===`halloween`){let e=new vr(this.gfx);this.scope.add(()=>e.dispose())}P.value=`active`,M.value=0;let r=t.setup(this.api)||{};b.value={TopBar:t.TopBar,state:r,api:this.api},this.selectStocked(),n.beginMission(this.mission.key)}end(){this.clearBackroomsKit(),this.trainRide?.dispose(),this.trainRide=null,this.interactions=[],te.value=``,this.scope&&this.scope.dispose(),this.scope=null,this.listeners=null,this.timers=[],re(),b.value=null}clearBackroomsKit(){this.backroomsLighting&&this.backroomsLighting.disable(),this.stalkers&&this.stalkers.clear(),this.footprints&&this.footprints.stop(),this.torchOn=!1}ensureBackroomsKit(){this.backroomsLighting||(this.backroomsLighting=new Or(this.gfx,this.world),this.stalkers=new Ur(this.gfx,this.world,this.atlasTexture),this.footprints=new si(this.gfx,this.stalkers))}get torchLit(){if(!this.torchOn)return!1;let e=N.value[M.value];return!!e&&e.key===`flashlight`&&!e.sealed}get active(){return this.listeners!==null&&P.value===`active`}emit(e,t,n,r,i){let a=e.slice();for(let e=0;e<a.length;e++)a[e](t,n,r,i)}blockDamaged(e,t,n){this.active&&this.emit(this.listeners.damaged,e,t,n)}blockPlaced(e,t,n,r){this.active&&this.emit(this.listeners.placed,e,t,n,r)}explosion(e,t,n,r){this.active&&this.emit(this.listeners.explosion,e,t,n,r)}fuseLit(e,t,r){this.active&&(n.onboarding(`lit-fuse`),this.emit(this.listeners.fuse,e,t,r))}npcKilled(e,t,n,r){this.active&&this.emit(this.listeners.killed,e,t,n,r)}npcInfected(e,t,n,r){this.active&&this.emit(this.listeners.infected,e,t,n,r)}creeperExploded(e,t,n,r){this.active&&this.emit(this.listeners.creeperExploded,e,t,n,r)}playerAttacked(e,t,n,r){this.active&&this.emit(this.listeners.playerAttacked,e,t,n,r)}nearbyInteraction(){if(!this.active)return null;let e=this.player,t=null,n=1/0;for(let r of this.interactions){if(r.enabled&&!r.enabled())continue;let i=r.x-e.x,a=r.y-(e.y+1.2),o=r.z-e.z,s=Math.hypot(i,a,o);s>(r.reach??3)||s>=n||s>.1&&Ae(this.world,e.x,e.y+1.2,e.z,i/s,a/s,o/s,Math.max(0,s-.1))||(t=r,n=s)}return t}interact(){let e=this.nearbyInteraction();return e?(e.use(),te.value=this.nearbyInteraction()?.label??``,!0):!1}update(e){if(!this.active)return;let t=this.listeners;if(this.backroomsLighting&&this.backroomsLighting.on&&(this.backroomsLighting.torch=this.torchLit,this.backroomsLighting.frame(e,this.gfx.camera)),this.footprints&&this.footprints.update(e,this.player),this.stalkers&&this.stalkers.list.length>0&&(this.stalkers.update(e,this.player,this.torchLit)===`caught`&&this.emit(t.caught),!this.active))return;this.emit(t.frame,e),te.value=this.nearbyInteraction()?.label??``;let n=this.timers,r=n.length;for(let t=0;t<r&&this.active;t++){let r=n[t];r.dead||(r.left-=e,r.left>0||(r.every>0?r.left+=r.every:r.dead=!0,r.fn()))}this.active&&(this.timers=this.timers.filter(e=>!e.dead),this.checkQuiet(e),this.active&&this.finishIn>=0&&(this.finishIn-=e,this.finishIn<=0?this.finish():ie.value=this.finishIn))}checkQuiet(e){let t=N.value,n=!1;for(let e=0;e<t.length;e++){let r=t[e];if(r.key&&!r.sealed&&r.amount>0&&Li(r.key)){n=!0;break}}n||this.boom.pending>0||C.value>0||h.value>0||this.world.explosives.size>0?(this.quiet=!1,this.quietFor=0):this.quiet||(this.quietFor+=e,this.quietFor<zi||(this.quiet=!0,this.emit(this.listeners.quiet)))}finish(){if(!this.active)return;this.trainRide?.stopAudio(),te.value=``;let e=A.value,t=e>=Ci;n.finishMission(this.mission.key,t),this.finishIn=-1,ie.value=-1,P.value=t?`won`:`failed`,Ti.finish(this.mission.key,{score:e,line:v.value,won:t,medal:wi(e)})}slotAt(e){let t=N.value[e];return t&&t.key?t:null}canUse(e){let t=this.slotAt(e);return!!t&&!t.sealed&&t.amount>0&&P.value===`active`}isSealed(e){let t=this.slotAt(e);return!!t&&t.sealed}spend(e,t){if(!this.canUse(e))return!1;let i=this.slotAt(e);return n.toolUsed(t,i.sealedBehindAd?r(this.mission.key,i.adGroup,i.key):null),i.amount!==1/0&&this.writeSlot(e,Object.assign({},i,{amount:i.amount-1})),i.amount-1==0&&this.selectStocked(),this.emit(this.listeners.tool,e,t),!0}writeSlot(e,t){let n=N.value.slice();for(;n.length<=e;)n.push(Ii);for(n[e]=t;n.length>0&&!n[n.length-1].key;)n.pop();N.value=n}selectStocked(){let e=N.value,t=e[M.value];if(!(t&&t.key&&!t.sealed&&t.amount>0)){for(let t=0;t<e.length;t++){let n=e[t];if(n.key&&!n.sealed&&n.amount>0&&n.amount!==1/0){M.value=t;return}}for(let t=0;t<e.length;t++){let n=e[t];if(n.key&&!n.sealed&&n.amount>0){M.value=t;return}}M.value=0}}offerAd(e){let t=this.slotAt(e);if(!t||!t.sealed||!this.active)return;let n=this.mission.key,r=this.scope;return Ve(n,t.adGroup,t.key).then(n=>{n&&!r.disposed&&x.value===`campaign`&&(N.value=N.value.map(e=>e.sealedBehindAd&&e.adGroup===t.adGroup?Object.assign({},e,{sealed:!1}):e),M.value=e)})}makeApi(e){let i=this,a=this.listeners,s=()=>!e.disposed;function c(t,n){if(!s())return()=>{};t.push(n);let r=()=>{let e=t.indexOf(n);e>=0&&t.splice(e,1)};return e.add(r),r}function l(e,t,n){if(!s())return()=>{};let r={left:e,every:t,fn:n,dead:!1};return i.timers.push(r),()=>{r.dead=!0}}function u(n){let r=c(a.frame,e=>n.update(e)),i=t(()=>{n.root.visible=P.value===`active`}),o=!1;return e.add(()=>{o||(o=!0,r(),i(),n.dispose())})}return{onEveryFrame:e=>c(a.frame,e),onBlockDamaged:e=>c(a.damaged,e),onBlockPlaced:e=>c(a.placed,e),onExplosion:e=>c(a.explosion,e),onFuseLit:e=>c(a.fuse,e),onToolUse:e=>c(a.tool,e),onNpcKilled:e=>c(a.killed,e),onNpcInfected:e=>c(a.infected,e),onWorldQuiet:e=>c(a.quiet,e),onCreeperExploded:e=>c(a.creeperExploded,e),onPlayerAttacked:e=>c(a.playerAttacked,e),onCaught:e=>c(a.caught,e),runAfterSeconds:(e,t)=>l(e,0,t),runEverySeconds:(e,t)=>l(e,Math.max(.001,e),t),setScore(e){s()&&i.active&&(A.value=Math.max(0,Math.min(1,e)))},setResultLine(e){s()&&i.active&&(v.value=e)},startFinishCountdown(e){s()&&i.active&&(i.finishIn=e,ie.value=e)},cancelFinishCountdown(){s()&&(i.finishIn=-1,ie.value=-1)},finishNow(){s()&&i.finish()},getTaggedCells:e=>i.sim.tags[e]||new Uint32Array,gamerule:Ri(s),loadout:{set(e,t,n=1/0,r){if(!s())return;if(!t){i.writeSlot(e,Ii),i.selectStocked();return}let a=!!(r&&r.sealedBehindAd),o=r?.adGroup??e,c=Pi(t);i.writeSlot(e,Object.freeze({key:t,amount:n,sealedBehindAd:a,adGroup:o,sealed:a&&ae(i.mission.key,o),name:c,desc:Fi(t),short:Ni[t]||c.toUpperCase()})),i.selectStocked()},get(e){let t=i.slotAt(e);return t?{tool:t.key,amount:t.amount,sealedBehindAd:t.sealed}:null},reseal(e){if(!s())return;let t=i.slotAt(e);t&&t.sealedBehindAd&&(n.renewOffer(`campaign`,r(i.mission.key,t.adGroup,t.key)),de(le(i.mission.key,t.adGroup)),N.value=N.value.map(e=>e.sealedBehindAd&&e.adGroup===t.adGroup?Object.assign({},e,{sealed:!0}):e),i.selectStocked())},select(e){s()&&i.slotAt(e)&&(M.value=e)}},setBackroomsLighting(e){s()&&(i.ensureBackroomsKit(),i.backroomsLighting.enable(e),i.torchOn=!!e.torchOn)},setTorch(e){s()&&(i.torchOn=!!e,Le(!!e))},isTorchOn:()=>i.torchOn,spawnStalkers(e){s()&&(i.ensureBackroomsKit(),i.stalkers.start(e))},sendStalkersHome(){s()&&i.stalkers&&i.stalkers.sendHome()},nearestStalker(){return i.stalkers?i.stalkers.nearest(i.player.x,i.player.z):1/0},isHunted:()=>!!i.stalkers&&i.stalkers.hunting,isDetected:()=>!!i.stalkers&&i.stalkers.detecting,showFootprints(e,t){if(!s())return;i.ensureBackroomsKit(),i.footprints.start(e,t);let a=N.peek().find(e=>e.key===`hint`&&e.sealedBehindAd&&!e.sealed);a&&n.toolUsed(`hint`,r(i.mission.key,a.adGroup,a.key))},hideFootprints(){i.footprints&&i.footprints.stop()},playShriek(){s()&&Re()},spawnCreeper(e,t,n){if(!s())return;let r=n||{},a=r.huntPlayer?`player`:r.walkToward||null;i.npc.spawnCreeper(e,r.y===void 0?i.surfaceAt(e,t):r.y,t,a,r)},spawnVillager(e,t){s()&&i.npc.spawnVillager(e,i.surfaceAt(e,t),t,je())},spawnZombie(e,t,n){s()&&i.npc.spawnZombie(e,n?.y??i.surfaceAt(e,t),t,n)},spawnSpider(e,t,n,r=0,a=1,o=0,c){return!s()||!i.world.solidAt(e,t,n)||i.world.solidAt(e+r,t+a,n+o)?!1:(i.npc.spawnSpider(e,t,n,r,a,o,c),!0)},spawnSoldier(e,t,n){s()&&i.npc.spawnSoldier(e,i.surfaceAt(e,t),t,+(n===`blue`))},countLivingCreepers:()=>h.value,isDemolitionBusy:()=>i.boom.pending>0||C.value>0,isSupportedOpenCell:(e,t,n)=>i.world.inBounds(e,t,n)&&!i.world.solidAt(e,t,n)&&i.world.solidAt(e,t-1,n),setBatRoost(e){s()&&i.npc.bats.populateRoost(e)},setBlock(e,t,n,r){if(!s())return;let a=o[r];if(!a)throw Error(`unknown campaign block ${r}`);i.world.set(e,t,n,a.id)},addInteraction(t){s()&&(i.interactions.push(t),e.add(()=>{let e=i.interactions.indexOf(t);e>=0&&i.interactions.splice(e,1)}))},createTrainRide(e){if(!s())return{update(){}};i.trainRide?.dispose();let t=i.trainRide=new pi(i.gfx,i.atlasTexture,e);return{update(e,n){s()&&t.update(e,n)}}},stampStructure(e,t,n,r=0,a=_e+1){s()&&i.sim.stamp(e,t,a,n,r)},detonateAt(e,t,n,r){s()&&i.boom.explode(e,t,n,r)},showBlockHint(e,t,n,r){return s()?u(new yi(i.gfx,i.atlasTexture,e,t,n,r)):()=>{}},showIgniterHint(e,t,n){return s()?u(new Si(i.gfx,e,t,n)):()=>{}},getPlayerPosition:()=>({x:i.player.x,y:i.player.y,z:i.player.z}),setCheckpoint(e){s()&&i.moveRespawn(e)},respawnPlayer(){s()&&i.respawn()},getPersonalBest:()=>k.peek().missions[i.mission.key]?.best||null,missionKey:this.mission.key,missionName:this.mission.name,missionNumber:Me(this.missionIdx)}}surfaceAt(e,t){let n=Math.floor(e),r=Math.floor(t);for(let e=R-2;e>=0;e--)if(this.world.solidAt(n,e,r))return e+1;return _e+1}},Vi=new URL(`aplok_ak47-CiFwM_Bh.json`,import.meta.url).href,Hi=new URL(`aplok_awp-CQXoRPhE.json`,import.meta.url).href,Ui=new URL(`aplok_m249-CDOMd2wn.json`,import.meta.url).href,Wi=new URL(`aplok_m4a1-DBr-cMjM.json`,import.meta.url).href,Gi=new URL(`aplok_mossberg-BhZk9bto.json`,import.meta.url).href,Ki=new URL(`scifi_grenadelauncher-DuBtIQt_.json`,import.meta.url).href,qi=new URL(`v2_uzi-C-MUxmcq.json`,import.meta.url).href,Ji=`data:image/png;base64,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`,Yi=`data:image/png;base64,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`,Xi=new URL(`aplok_m249-RaZrZrQt.png`,import.meta.url).href,Zi=`data:image/png;base64,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`,Qi=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFEklEQVR4nOVbz08UMRTuTJogS8RdLrBrUAIkagwHI97UfwCPJh79Fzzp0bv/hYkHSTzKkQtwEyWRGDUBghJ2ITGAGFn2tOZb9m0etZ3t/OjMzvIlm87OtJ2+9vXr63sdTzjA7N3ZZuO0Ida/rHsiRTy8/6C5tLLsIT08POrcD2qHL/oIJ/X6udQG0kVDCoODAhqQJeqWnSBdNWDg0oBIG+j4sAPgu2jI8JVhkTVoALoNhO+qAVlPAVv4Lio9/n0ssgYNQLeB8Fy8HMsQmHj146rnqm4+5wmbm9ud66mpiXPP1DK0XErhiAPCLEVhcdRe45EOtgVSWb9arWmfoQMgPK6XVpY9Z6uAK/COhYCc5Or1RsAzvY0gRc5gM62mJ6ebEBi/ja0N78KtApVKWRRLxVYqLvoqkEkHnDgkwDDvt2mHL/oQ3CTOpAPGxkZFXiDzthkCw4PcoN6Y53iP6nuALwD3kcI3AU2AXcBBq4MUfaDmqqqXSsX/8vWNKcyB0eX/Te9De5CSBcghhQNwd1QasCE7E6RwAKhg1kuhrX/CIzWiXqTMZMyohXGfhONsj/sYeQiPXVm5MtohqSDjRCVLykP3eRkQHZEaV2lScT7t6B7a/35hoXXv0dxck+Sisp6IgZnbM00beztJQAika58+t/7v1nZivdvPm99vb28/UVPbj1sB7bnzCl/kDJj/STpd/TiFQVC2/vde9TjLvHFA0vDjqmPanZC0r0GKnCFpA8sXFxwyb76/pH0NftwK8k6EMk+7PnUvkgS8uN4ZpHH2AnyDott48fvqCmCzcVM3RIlqQLFUjM0BpobpNl50neTRG5kXDiAfQxznhw4SPavu2fFf9yI0AAFJjDye01ykbTHF43R+AHoOkPkcZupQwDWqKUzTlb/3anm8KW3UCU4IEhxC4DrKKbC1d09ajbjzeD7V02NqZ6Mz8H+3tmMXHS60hS6wEYyi+q+ffxC9AAwkQdoUgOph5MkXD0Qhv/GRwtnFlkgdGHUuOE0JaWt9/dj+2UrhkQmjAVB7jHxHeCHEs8nJ5tNX90R185eYe7GYynQw8Y20KQyhKQ2rAZ35vnVGlsQbiy+HOtdZwg9jfyO1PX6mA3eehC1PRk3S22HftQYQMPp8+XEdNbKFtMmEkf/29bu4PnEtNAcQTK4zdAzF8nRrvOrHV33+pvzqPsU03aRN40GAPHWxDUb0lqK6POoLqJ1Nq5EuPzra5mgMQVKkBZUSy/OUC024eetG6zk2Mjw/1cMtP+p5zsI8mIF80CwIQ1rChddpDq9fFR73oBlqONzYAY3TRudwsUo0JsLR5eP1hAE6plIpt1QaI6eL4KowqTN9J4D22JrZUj1TY0NypnxR9+lRzvknBWnqTQqa2q7VFLOz3d5yZLkiyKQqGrpcEn31xUiBbXdt8PfPocgjpOlB2PnYCxoQxUiTNhWa5jyExsiT8PNv33hqHr6M2vCJyfVFX6IF1cPvUz38oAWuVb6RUQOfNmSHPPx8PzVKJ4DaYNUjxU+DEUHryFM98cLl0Xm5PNjlusaPjJyZp7xBJEgQa6M+HI8Jy+xoeK26H+vEh+k0WFCHyaAK6cg5WVxph8LDHpWjAVKPz/G81lOg3q6Mf3jg0gPczdvLuSGoXFjylnEPGSWFbg0nT7Waz8Z0Tj083nAQMHVlLfouKo3CFVl9YeJFLagSDSdJ/vESB6YbX6ZInUn4gwN9sLVXpqnoR/wDp22HhfaXazsAAAAASUVORK5CYII=`,$i=`data:image/png;base64,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`,ea=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB1ElEQVRYhe2WMWvCQBTH/5F8AC85MlSEggYkZNBFaMdCl25FcfADdih0dREcW3DRqRRsQRA7hIv2G6TTu14uF6pnxvyWmIu597//e/cuTn8wzADA4xwAcBACBI0x1oSJ4/FHvrNeLR3jn/7BpSB60IMQUsxBCKPAKnBpQj2AKkwVo5OKBGEvshbQ8DjPBVuvlk4n7CKOI8RxBMaa6IRdpCKBxzlSkSAVSW6Szce7tQDXNPjy/JTL52gyzXweAADoSjyOxwCA/f470987BWc0mWbAX0Et5jPjJO32debzQK7e50EhTQDOLsaCA3f3D5k+qce5/E0OeJxjMZ85o8k0W769Yrfb2u0CfYAqXg3OWFPeq/nvD4YZOWdLQQDZSiJMu4Ke0TXsRdjtttUIKHOAVkoO6FdbGvqA6gAJ+tp8yudUiGW74lxcPYe6A0B+lSRMHbtERMEBEqEGCHuRbEJqUJ8HCHuR9TkAAI2yNkv7nGqAsSZ8HkhxagelA80GYyfUoTTpO6QKjCkA8jkmB9TTUUU/Uc+hcBwTw5tbWf2mXkD3ByFK2/cpGB1IRYJW6yp3ApIQqoFUJJWkofA9oFc7rc7U6Wy7n4qjf5JdYmdNTU1NTY0NvyrPC01962mSAAAAAElFTkSuQmCC`,ta=Object.assign({"../../../assets/aplok-guns/aplok_ak47.json":Vi,"../../../assets/aplok-guns/aplok_awp.json":Hi,"../../../assets/aplok-guns/aplok_m249.json":Ui,"../../../assets/aplok-guns/aplok_m4a1.json":Wi,"../../../assets/aplok-guns/aplok_mossberg.json":Gi,"../../../assets/weapon-catalog/scifi_grenadelauncher.json":Ki,"../../../assets/weapon-catalog/v2_uzi.json":qi}),na=Object.assign({"../../../assets/aplok-guns/aplok_ak47.png":Ji,"../../../assets/aplok-guns/aplok_awp.png":Yi,"../../../assets/aplok-guns/aplok_m249.png":Xi,"../../../assets/aplok-guns/aplok_m4a1.png":Zi,"../../../assets/aplok-guns/aplok_mossberg.png":Qi,"../../../assets/weapon-catalog/scifi_grenadelauncher.png":$i,"../../../assets/weapon-catalog/v2_uzi.png":ea}),ra=new Map;function ia(e){let t=ta[`../../../assets/${e.directory}/${e.asset}.json`];if(!t)return Promise.reject(Error(`Cannot find weapon model: ${e.name}`));if(!ra.has(t)){let n=fetch(t).then(t=>{if(!t.ok)throw Error(`Cannot load weapon model: ${e.name} (${t.status})`);return t.json()}).then(t=>{if(!Array.isArray(t?.elements)||!t.elements.length)throw Error(`Invalid weapon model: ${e.name}`);return t});ra.set(t,n),n.catch(()=>{ra.get(t)===n&&ra.delete(t)})}return ra.get(t)}function aa(e){return na[`../../../assets/${e.directory}/${e.asset}.png`]}var oa=new Map;function sa(e){let t=aa(e);if(!t)return Promise.reject(Error(`Cannot find weapon texture: ${e.name}`));if(!oa.has(t)){let n=new Promise((n,r)=>{let i=new Image;i.onload=()=>n(i),i.onerror=()=>r(Error(`Cannot load weapon texture: ${e.name}`)),i.src=t});oa.set(t,n),n.catch(()=>{oa.get(t)===n&&oa.delete(t)})}return oa.get(t)}function ca(e){return Promise.all([ia(e),sa(e)])}var la={north:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],south:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],east:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],west:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],up:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],down:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},ua={north:[`south`,2],south:[`north`,2],east:[`west`,0],west:[`east`,0],up:[`down`,1],down:[`up`,1]};function da(e,t){if(!t?.angle)return e;let n=`xyz`.indexOf(t.axis),r=(n+1)%3,i=(n+2)%3,a=t.origin||[8,8,8],o=t.angle*Math.PI/180,s=Math.cos(o),c=Math.sin(o),l=e[r]-a[r],u=e[i]-a[i],d=t.rescale?1/Math.abs(s):1;return e[r]=a[r]+(l*s-u*c)*d,e[i]=a[i]+(l*c+u*s)*d,e}function fa(e,t){return t?[0,4,8].map(n=>t[n]*e[0]+t[n+1]*e[1]+t[n+2]*e[2]+t[n+3]):e}var pa=(e,t)=>e.reduce((e,n,r)=>e+n*t[r],0),ma=(e,t)=>e.map((e,n)=>e-t[n]),ha=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]];function ga(e,t){for(let n of[e,t])for(let r=0;r<2;r++){let i=ma(n.points[r+1],n.points[r]),a=e.points.map(e=>pa(e,i)),o=t.points.map(e=>pa(e,i));if(Math.min(...a)>=Math.max(...o)-1e-10||Math.min(...o)>=Math.max(...a)-1e-10)return!1}return!0}function _a(e){for(let t=0;t<e.length;t++){let n=e[t];n.offset=0;for(let r=0;r<t;r++){let t=e[r];if(pa(n.normal,t.normal)<1-1e-10)continue;let i=pa(ma(t.points[0],n.points[0]),n.normal);Math.abs(i)>1e-4||!ga(n,t)||(n.offset=Math.max(n.offset,i+t.offset+.002))}}let t=new Map;for(let n of e)if(n.offset)for(let e of n.points){t.has(e)||t.set(e,[0,0,0]);let r=t.get(e);for(let e=0;e<3;e++)r[e]+=n.normal[e]*n.offset}for(let[e,n]of t)for(let t=0;t<3;t++)e[t]+=n[t]}function va(e,t=.66){let n=[],r=[],i=[],a=[],o=Object.create(null),s=[];for(let t of e.elements){let e=t.to.every((e,n)=>Math.abs(e-t.from[n])>=1e-8),n=new Map;for(let[r,i]of Object.entries(t.faces)){if(!i.texture||!la[r])continue;let a=la[r].map(r=>{let i=r.join(``);if(e&&n.has(i))return n.get(i);let a=fa(da(r.map((e,n)=>e?t.to[n]:t.from[n]),t.rotation),t.transform);return e&&n.set(i,a),a}),o=ha(ma(a[1],a[0]),ma(a[2],a[0])),c=Math.hypot(...o);if(c<1e-10)continue;let[l,u,d,f]=i.uv,p=[[l,f],[d,f],[d,u],[l,u]],m=o.map(e=>e/c),h=(i.rotation||0)/90,g=t.name||``;s.push({points:a,normal:m,tex:p,turn:h,part:g});let[_,v]=ua[r];Math.abs(t.to[v]-t.from[v])<1e-8&&!t.faces[_]?.texture&&s.push({points:a.map(e=>e.slice()).reverse(),normal:m.map(e=>-e),tex:a.map((e,t)=>p[(3-t+h)%4]),turn:0,part:g})}}_a(s);for(let{points:e,normal:t,tex:c,turn:l,part:u}of s){let s=n.length/3;for(let a=0;a<4;a++){n.push(...e[a]),r.push(...t);let o=c[(a+l)%4];i.push(o[0]/16,1-o[1]/16)}a.push(s,s+1,s+2,s,s+2,s+3),(o[u]||=[]).push(s,s+1,s+2,s,s+2,s+3)}let c=[1/0,1/0,1/0],l=[-1/0,-1/0,-1/0];for(let e=0;e<n.length;e++)c[e%3]=Math.min(c[e%3],n[e]),l[e%3]=Math.max(l[e%3],n[e]);let u=t/(l[2]-c[2]),d=[(c[0]+l[0])/2,(c[1]+l[1])/2,l[2]-.12/u];for(let e=0;e<n.length;e++)n[e]=(n[e]-d[e%3])*u;let f=[];for(let e=0;e<n.length;e+=3)n[e+2]<.12-t+1e-5&&f.push([n[e],n[e+1]]);return{positions:n,normals:r,uvs:i,indices:a,muzzle:[0,f.reduce((e,t)=>e+t[1],0)/f.length,.12-t],groups:o,scale:u}}export{Pn as A,V as B,bn as C,Un as D,Bn as E,W as F,Lt as I,At as L,gn as M,yn as N,Wn as O,dn as P,U as R,Sn as S,zn as T,Z as _,Di as a,An as b,ki as c,hr as d,Kn as f,wn as g,xn as h,Ei as i,_n as j,Y as k,Ai as l,Cn as m,ca as n,Oi as o,Dn as p,Bi as r,wi as s,va as t,Xn as u,Hn as v,X as w,jn as x,Vn as y,H as z};