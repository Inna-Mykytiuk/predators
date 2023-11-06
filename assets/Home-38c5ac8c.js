import{s as F,n as i,j as a,R as f,N as $}from"./index-e44fabfe.js";var T={exports:{}},r={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=typeof Symbol=="function"&&Symbol.for,z=o?Symbol.for("react.element"):60103,k=o?Symbol.for("react.portal"):60106,m=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,h=o?Symbol.for("react.profiler"):60114,g=o?Symbol.for("react.provider"):60109,b=o?Symbol.for("react.context"):60110,C=o?Symbol.for("react.async_mode"):60111,y=o?Symbol.for("react.concurrent_mode"):60111,w=o?Symbol.for("react.forward_ref"):60112,v=o?Symbol.for("react.suspense"):60113,R=o?Symbol.for("react.suspense_list"):60120,S=o?Symbol.for("react.memo"):60115,j=o?Symbol.for("react.lazy"):60116,W=o?Symbol.for("react.block"):60121,B=o?Symbol.for("react.fundamental"):60117,Z=o?Symbol.for("react.responder"):60118,V=o?Symbol.for("react.scope"):60119;function l(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case z:switch(e=e.type,e){case C:case y:case m:case h:case u:case v:return e;default:switch(e=e&&e.$$typeof,e){case b:case w:case j:case S:case g:return e;default:return t}}case k:return t}}}function O(e){return l(e)===y}r.AsyncMode=C;r.ConcurrentMode=y;r.ContextConsumer=b;r.ContextProvider=g;r.Element=z;r.ForwardRef=w;r.Fragment=m;r.Lazy=j;r.Memo=S;r.Portal=k;r.Profiler=h;r.StrictMode=u;r.Suspense=v;r.isAsyncMode=function(e){return O(e)||l(e)===C};r.isConcurrentMode=O;r.isContextConsumer=function(e){return l(e)===b};r.isContextProvider=function(e){return l(e)===g};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===z};r.isForwardRef=function(e){return l(e)===w};r.isFragment=function(e){return l(e)===m};r.isLazy=function(e){return l(e)===j};r.isMemo=function(e){return l(e)===S};r.isPortal=function(e){return l(e)===k};r.isProfiler=function(e){return l(e)===h};r.isStrictMode=function(e){return l(e)===u};r.isSuspense=function(e){return l(e)===v};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===m||e===y||e===h||e===u||e===v||e===R||typeof e=="object"&&e!==null&&(e.$$typeof===j||e.$$typeof===S||e.$$typeof===g||e.$$typeof===b||e.$$typeof===w||e.$$typeof===B||e.$$typeof===Z||e.$$typeof===V||e.$$typeof===W)};r.typeOf=l;T.exports=r;var q=T.exports,N=q,D={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},G={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},P={};P[N.ForwardRef]=D;P[N.Memo]=G;function Y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return F(t)}var J=function(){var t=Y.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const K=i.div`
  width: 320px;
  padding: 0 10px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 20px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 0 20px;
    margin: 0 auto;
  }
`,Q=({children:e})=>a.jsx(K,{children:e}),U="/predators/assets/predatorHero-abfa1583.png",X=i.div`
  display: flex;
  background:
  /* linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ), */ url(${U});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`,ee=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  gap: 10px;
  width: 450px;
  height: 100%;
  margin-right: auto;
  align-items: center;

  @media (min-width: 768px) {
    gap: 20px;
    width: 500px;
    align-items: flex-start;
  }
  @media (min-width: 1440px) {
    gap: 30px;
    width: 800px;
    align-items: flex-start;
  }
`,te=i.h1`
  margin: 0;

  /* color: #a40007; */
  text-transform: uppercase;

  font-weight: bold;
  font-size: 42px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px #181717;

  @media (min-width: 768px) {
    font-size: 58px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    font-size: 120px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1.2;
  }
`,re=i.h2`
  color: #770409;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  width: 450px;
  text-align: center;
  margin: 0 auto;
  text-shadow: 1px 1px 2px #181717;

  /* @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  } */
  /* @media (min-width: 1440px) {
    font-size: 14px;
    line-height: 1.6;
  } */
`,ne=J`
  0% {
    opacity: 0.5;
    text-shadow: 2px 2px 10px #a40007;
  }
  100% {
    opacity: 1;
    text-shadow: 2px 2px 20px #a40007;
  }
`,ie=i.div`
  font-style: bold;
  font-size: 40px;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: #df8080;
  -webkit-text-stroke-width: 1px;
  text-shadow: 2px 2px 10px $blue;
  transition: all 0.5s ease-in-out;
  text-align: center;
  letter-spacing: 0.2em;
  animation: ${ne} 0.5s ease-in-out infinite alternate;

  &:hover {
    color: #fff;
  }
`,oe=({color:e,children:t})=>a.jsx(te,{style:{color:e},children:t});var H={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E=f.createContext&&f.createContext(H),d=globalThis&&globalThis.__assign||function(){return d=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++){t=arguments[n];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e},d.apply(this,arguments)},ae=globalThis&&globalThis.__rest||function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(e);c<s.length;c++)t.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(e,s[c])&&(n[s[c]]=e[s[c]]);return n};function I(e){return e&&e.map(function(t,n){return f.createElement(t.tag,d({key:n},t.attr),I(t.child))})}function L(e){return function(t){return f.createElement(se,d({attr:d({},e.attr)},t),I(e.child))}}function se(e){var t=function(n){var s=e.attr,c=e.size,M=e.title,A=ae(e,["attr","size","title"]),_=c||n.size||"1em",x;return n.className&&(x=n.className),e.className&&(x=(x?x+" ":"")+e.className),f.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,A,{className:x,style:d(d({color:e.color||n.color},n.style),e.style),height:_,width:_,xmlns:"http://www.w3.org/2000/svg"}),M&&f.createElement("title",null,M),e.children)};return E!==void 0?f.createElement(E.Consumer,null,function(n){return t(n)}):t(H)}function le(e){return L({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"}}]})(e)}function ce(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(e)}const pe=i.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,de=i.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`,fe=i.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 30px;
  }
  @media (min-width: 1440px) {
    gap: 30px;
  }
`,xe=i.li`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;i($)`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 0;
  margin-right: 10px;

  @media (min-width: 768px) {
    margin-left: 0;
  }
  @media (min-width: 1440px) {
    margin-left: 30px;
  }
  svg {
    fill: #7b9ed9;
  }

  &.active,
  &:hover,
  &:focus {
    color: #fff;

    svg {
      fill: white;
      border: 3px solid #fff;
      box-shadow: rgb(188 221 244) 0px 0px 15px;
    }
  }
`;i.button`
  position: relative;
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  color: #fff;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 2px 2px 5px #000000;
  &:hover {
    color: #ffffff;
  }
`;const me=i($)`
  display: flex;
  font-family: "Montserrat", sans-serif;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #7b9ed9;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  svg {
    fill: #7b9ed9;
  }

  &.active,
  &:hover,
  &:focus {
    color: #fff;

    svg {
      fill: white;
      border: 3px solid #fff;
      box-shadow: rgb(188 221 244) 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;i(le)`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 10px;

  color: #7b9ed9;
  border-radius: 50%;
  border: 3px solid #7b9ed9;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(188 221 244) 0px 0px 15px;
`;i(ce)`
  width: 20px;
  height: 20px;
  margin-left: 10px;

  padding: 10px;

  color: #7b9ed9;
  border-radius: 50%;
  border: 3px solid #7b9ed9;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(188 221 244) 0px 0px 15px;

  @media (min-width: 768px) {
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`;i.div`
  width: 110px;
  height: 40px;
  display: none;
  position: relative;
  @media (min-width: 1440px) {
    display: flex;
  }
`;i($)`
  display: flex;

  color: #7b9ed9;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;
  margin-left: auto;

  &.active,
  &:hover,
  &:focus {
    color: #fff;
  }
`;i.p`
  display: none;
  font-family: "Montserrat", sans-serif;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;

  @media (min-width: 768px) {
    display: block;
    top: -6px;
    right: -100px;
  }
  @media (min-width: 1440px) {
    display: block;
    position: absolute;
    top: -6px;
    right: -20px;
  }
`;const p="/predators/assets/bear-22c112ad.png",ue=[{to:"/wasp",label:"Wasp",imgSrc:p},{to:"/hawk",label:"Hawk",imgSrc:p},{to:"/snake",label:"Snake",imgSrc:p},{to:"/wolf",label:"Wolf",imgSrc:p},{to:"/bear",label:"Bear",imgSrc:p},{to:"/shark",label:"Shark",imgSrc:p},{to:"/human",label:"WHuman",imgSrc:p},{to:"/virus",label:"Virus",imgSrc:p}],he=()=>a.jsx(pe,{children:a.jsx(de,{children:a.jsx(fe,{children:ue.map((e,t)=>a.jsx(xe,{children:a.jsx(me,{to:e.to,children:a.jsx("img",{src:e.imgSrc,alt:`${e.label} Logo`,width:100,height:100})})},t))})})}),ge=()=>a.jsx(Q,{children:a.jsxs(ee,{children:[a.jsxs("div",{children:[a.jsx(oe,{color:"#a40007",children:"Predators"}),a.jsx(ie,{children:"-- of the Earth --"}),a.jsx(re,{children:"Welcome to the captivating realm of Earth's most formidable and fascinating predators. In a world where each species unveils its unique prowess."})]}),a.jsx(he,{})]})}),ye=()=>a.jsx(X,{children:a.jsx(ge,{})});export{ye as default};
