import{s as z,n as a,j as w}from"./index-5c82dd9a.js";var S={exports:{}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=typeof Symbol=="function"&&Symbol.for,h=r?Symbol.for("react.element"):60103,g=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,p=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,f=r?Symbol.for("react.provider"):60109,m=r?Symbol.for("react.context"):60110,b=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,u=r?Symbol.for("react.suspense"):60113,M=r?Symbol.for("react.suspense_list"):60120,x=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,T=r?Symbol.for("react.block"):60121,k=r?Symbol.for("react.fundamental"):60117,_=r?Symbol.for("react.responder"):60118,E=r?Symbol.for("react.scope"):60119;function o(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case h:switch(e=e.type,e){case b:case l:case s:case c:case p:case u:return e;default:switch(e=e&&e.$$typeof,e){case m:case d:case y:case x:case f:return e;default:return n}}case g:return n}}}function $(e){return o(e)===l}t.AsyncMode=b;t.ConcurrentMode=l;t.ContextConsumer=m;t.ContextProvider=f;t.Element=h;t.ForwardRef=d;t.Fragment=s;t.Lazy=y;t.Memo=x;t.Portal=g;t.Profiler=c;t.StrictMode=p;t.Suspense=u;t.isAsyncMode=function(e){return $(e)||o(e)===b};t.isConcurrentMode=$;t.isContextConsumer=function(e){return o(e)===m};t.isContextProvider=function(e){return o(e)===f};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===h};t.isForwardRef=function(e){return o(e)===d};t.isFragment=function(e){return o(e)===s};t.isLazy=function(e){return o(e)===y};t.isMemo=function(e){return o(e)===x};t.isPortal=function(e){return o(e)===g};t.isProfiler=function(e){return o(e)===c};t.isStrictMode=function(e){return o(e)===p};t.isSuspense=function(e){return o(e)===u};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===s||e===l||e===c||e===p||e===u||e===M||typeof e=="object"&&e!==null&&(e.$$typeof===y||e.$$typeof===x||e.$$typeof===f||e.$$typeof===m||e.$$typeof===d||e.$$typeof===k||e.$$typeof===_||e.$$typeof===E||e.$$typeof===T)};t.typeOf=o;S.exports=t;var P=S.exports,v=P,j={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},A={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},C={};C[v.ForwardRef]=j;C[v.Memo]=A;function F(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return z(n)}var I=function(){var n=F.apply(void 0,arguments),i="animation-"+n.name;return{name:i,styles:"@keyframes "+i+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const R=a.div`
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
`,q=({children:e})=>w.jsx(R,{children:e}),H="/predators/assets/predatorHero-abfa1583.png",D=a.div`
  display: flex;
  background:
  /* linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ), */ url(${H});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`,V=a.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  gap: 10px;
  width: 100%;
  height: 100%;
  margin-right: auto;
  align-items: center;

  @media (min-width: 768px) {
    gap: 20px;
    width: 500px;
    align-items: center;
  }
  @media (min-width: 1440px) {
    gap: 30px;
    width: 800px;
    align-items: center;
  }
`,O=a.h1`
  margin: 0;
  text-align: center;
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
`,Y=a.h2`
  color: #770409;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  /* width: 450px; */
  text-align: center;
  margin: 0 auto;
  text-shadow: 1px 1px 2px #181717;
  margin-top: 20px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 14px;
    line-height: 1.6;
  }
`,L=I`
  0% {
    opacity: 0.5;
    text-shadow: 2px 2px 10px #a40007;
  }
  100% {
    opacity: 1;
    text-shadow: 2px 2px 20px #a40007;
  }
`,B=a.div`
  font-style: bold;
  font-size: 24px;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: #df8080;
  -webkit-text-stroke-width: 1px;
  text-shadow: 2px 2px 10px $blue;
  transition: all 0.5s ease-in-out;
  text-align: center;
  letter-spacing: 0.2em;
  animation: ${L} 0.5s ease-in-out infinite alternate;

  &:hover {
    color: #fff;
  }

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 40px;
    line-height: 1.6;
  }
`,G=({color:e,children:n})=>w.jsx(O,{style:{color:e},children:n});export{q as C,Y as H,B as T,V as a,G as b,D as c};
