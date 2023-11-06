import{s as A,n as o,j as e,R as u,N as _}from"./index-d41990a5.js";var T={exports:{}},r={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=typeof Symbol=="function"&&Symbol.for,S=a?Symbol.for("react.element"):60103,M=a?Symbol.for("react.portal"):60106,h=a?Symbol.for("react.fragment"):60107,g=a?Symbol.for("react.strict_mode"):60108,b=a?Symbol.for("react.profiler"):60114,y=a?Symbol.for("react.provider"):60109,w=a?Symbol.for("react.context"):60110,$=a?Symbol.for("react.async_mode"):60111,v=a?Symbol.for("react.concurrent_mode"):60111,L=a?Symbol.for("react.forward_ref"):60112,z=a?Symbol.for("react.suspense"):60113,F=a?Symbol.for("react.suspense_list"):60120,j=a?Symbol.for("react.memo"):60115,C=a?Symbol.for("react.lazy"):60116,G=a?Symbol.for("react.block"):60121,W=a?Symbol.for("react.fundamental"):60117,V=a?Symbol.for("react.responder"):60118,Z=a?Symbol.for("react.scope"):60119;function l(t){if(typeof t=="object"&&t!==null){var n=t.$$typeof;switch(n){case S:switch(t=t.type,t){case $:case v:case h:case b:case g:case z:return t;default:switch(t=t&&t.$$typeof,t){case w:case L:case C:case j:case y:return t;default:return n}}case M:return n}}}function O(t){return l(t)===v}r.AsyncMode=$;r.ConcurrentMode=v;r.ContextConsumer=w;r.ContextProvider=y;r.Element=S;r.ForwardRef=L;r.Fragment=h;r.Lazy=C;r.Memo=j;r.Portal=M;r.Profiler=b;r.StrictMode=g;r.Suspense=z;r.isAsyncMode=function(t){return O(t)||l(t)===$};r.isConcurrentMode=O;r.isContextConsumer=function(t){return l(t)===w};r.isContextProvider=function(t){return l(t)===y};r.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===S};r.isForwardRef=function(t){return l(t)===L};r.isFragment=function(t){return l(t)===h};r.isLazy=function(t){return l(t)===C};r.isMemo=function(t){return l(t)===j};r.isPortal=function(t){return l(t)===M};r.isProfiler=function(t){return l(t)===b};r.isStrictMode=function(t){return l(t)===g};r.isSuspense=function(t){return l(t)===z};r.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===h||t===v||t===b||t===g||t===z||t===F||typeof t=="object"&&t!==null&&(t.$$typeof===C||t.$$typeof===j||t.$$typeof===y||t.$$typeof===w||t.$$typeof===L||t.$$typeof===W||t.$$typeof===V||t.$$typeof===Z||t.$$typeof===G)};r.typeOf=l;T.exports=r;var q=T.exports,N=q,D={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Y={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},P={};P[N.ForwardRef]=D;P[N.Memo]=Y;function J(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return A(n)}var K=function(){var n=J.apply(void 0,arguments),i="animation-"+n.name;return{name:i,styles:"@keyframes "+i+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const Q=o.div`
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
`,U=({children:t})=>e.jsx(Q,{children:t}),X="/predators/assets/predatorHero-abfa1583.png",t1=o.div`
  display: flex;
  background:
  /* linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ), */ url(${X});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`,e1=o.div`
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
    align-items: center;
  }
  @media (min-width: 1440px) {
    gap: 30px;
    width: 800px;
    align-items: center;
  }
`,r1=o.h1`
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
`,n1=o.h2`
  color: #770409;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  width: 450px;
  text-align: center;
  margin: 0 auto;
  text-shadow: 1px 1px 2px #181717;
  margin-top: 20px;

  /* @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  } */
  /* @media (min-width: 1440px) {
    font-size: 14px;
    line-height: 1.6;
  } */
`,i1=K`
  0% {
    opacity: 0.5;
    text-shadow: 2px 2px 10px #a40007;
  }
  100% {
    opacity: 1;
    text-shadow: 2px 2px 20px #a40007;
  }
`,o1=o.div`
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
  animation: ${i1} 0.5s ease-in-out infinite alternate;

  &:hover {
    color: #fff;
  }
`,a1=({color:t,children:n})=>e.jsx(r1,{style:{color:t},children:n});var B={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},E=u.createContext&&u.createContext(B),m=globalThis&&globalThis.__assign||function(){return m=Object.assign||function(t){for(var n,i=1,c=arguments.length;i<c;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},m.apply(this,arguments)},c1=globalThis&&globalThis.__rest||function(t,n){var i={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&n.indexOf(c)<0&&(i[c]=t[c]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,c=Object.getOwnPropertySymbols(t);s<c.length;s++)n.indexOf(c[s])<0&&Object.prototype.propertyIsEnumerable.call(t,c[s])&&(i[c[s]]=t[c[s]]);return i};function H(t){return t&&t.map(function(n,i){return u.createElement(n.tag,m({key:i},n.attr),H(n.child))})}function d(t){return function(n){return u.createElement(l1,m({attr:m({},t.attr)},n),H(t.child))}}function l1(t){var n=function(i){var c=t.attr,s=t.size,k=t.title,R=c1(t,["attr","size","title"]),I=s||i.size||"1em",f;return i.className&&(f=i.className),t.className&&(f=(f?f+" ":"")+t.className),u.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,c,R,{className:f,style:m(m({color:t.color||i.color},i.style),t.style),height:I,width:I,xmlns:"http://www.w3.org/2000/svg"}),k&&u.createElement("title",null,k),t.children)};return E!==void 0?u.createElement(E.Consumer,null,function(i){return n(i)}):n(B)}function s1(t){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M220.41 35.389c-.584-.175-9.216 1.425-18.76 7.976-8.948 6.143-18.914 15.31-27.283 25.137l.34.268c-6.134 7.797-13.129 16.816-17.613 25.767-4.485 8.951-6.294 17.19-3.989 24.71l-17.209 5.274c-4.144-13.518-.522-26.817 5.104-38.046 2.208-4.408 4.753-8.587 7.398-12.52C105.378 74.11 62.33 71.25 18 66.748v409.828a264.891 264.891 0 0 1 24.8-19.922l1.901-1.345 2.313-.254c24.034-2.65 55.821-6.651 84.908-15.803 29.086-9.152 54.934-23.401 68.633-45.191l2.558-4.073 4.809-.134c91.21-2.547 140.126-19.862 193.652-50.153.126-.095.252-.199.377-.295-6.874-.376-14.493-.65-22.334-.617-20.444.086-42.1 3.08-51.367 8.973l-9.658-15.188c16.106-10.242 39.29-11.694 60.949-11.785 15.73-.066 30.683 1.026 40.254 1.797 6.938-7.739 13.533-16.503 19.18-25.514 5.066-8.086 9.33-16.386 12.537-24.177-3.821-.55-7.395-1.642-10.633-3.258-8.283-4.134-14.026-11.447-16.754-19.596-3.827-11.432-2.087-24.798 5.268-35.777l-64.641-23.35.277-6.598c.396-9.422-6.387-27.053-14.601-34.712-21.568-20.112-46.91-21.58-78.06-33.93l-3.554-1.408-1.453-3.536c-10.662-25.924-17.06-44.024-23.47-55.5-6.412-11.475-11.574-16.287-23.48-19.841zm-5.808 20.82l9.84 15.072c-29.07 18.978-29.771 34.937-31.23 51.65l-17.93-1.562c1.5-17.208 5.882-43.33 39.32-65.16zM119.6 135.473l8.119 16.064c-42.266 21.357-60.741 47.237-65.88 70.451 14.366-11.279 29.7-17.184 50.218-16.46l15.238.538-7.834 13.08c-17.268 28.834-22.552 42.534-26.24 59.696 4.017-1.528 8.007-2.635 12.119-2.979 9.78-.818 19.142 2.28 29.105 7.746l9.5 5.211-6.869 8.383c-9.978 12.178-13.966 20.02-15.224 27.56-.477 2.856-.454 5.974-.198 9.333 2.711-2.798 5.58-5.305 8.942-7.198 9.125-5.137 19.745-5.825 33.097-4.632l-1.601 17.927c-11.9-1.063-18.132-.162-22.666 2.391-4.534 2.553-8.91 7.798-14.88 18.39l-11.05 19.614-5.516-21.826c-3.535-13.99-5.842-25.216-3.882-36.961 1.486-8.91 5.434-17.37 12.002-26.742-3.422-1.103-6.376-1.5-9.258-1.258-5.244.439-11.572 3.057-20.965 9.203l-17.365 11.361 3.572-20.441c4.283-24.513 7.539-40.242 23.588-69.49-14.037 2.56-23.415 10.322-37.408 25.492l-13.442 14.57-2.12-19.709c-3.829-35.558 16.816-78.954 76.898-109.314zm143.707 26.976c17.788 7.852 39.24 14.301 56.859 16.617l3.707 17.616c-3.852.81-7.24.644-10.861.07-1.363 9.026-9.537 15.736-18.74 15.736-10.089 0-18.946-8.06-18.946-18.396 0-2.45.511-4.766 1.404-6.883-8.85-3.702-23.717-6.978-28.798-14.723 5.796-2.514 14.755-10.553 15.375-10.037zM443.633 225.4c-3.758 6.287-4.294 13.381-2.438 18.928 1.396 4.17 3.941 7.317 7.721 9.203 2.142 1.07 4.803 1.797 8.147 1.823.303-1.51.546-2.968.707-4.348-.926-6.793-6.555-16.61-14.137-25.606z"}}]})(t)}function d1(t){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M281.28 15.28l-4.655 7.5-56.28 90.44c-7.312-18.505-21.67-30.9-37.126-30.44-.66.02-1.308.06-1.97.126-21.174 2.14-35.927 27.865-32.938 57.47 1.005 9.948 3.91 19.074 8.094 26.718-44.558 1.188-76.495 11.61-92.812 38.25 20.32 19.086 59.816 22.993 91.844 18.625l4.843 3.124.126.094 18.906 51.375-52.78 212.718h34.156l61.125-168.905L332 491.28h33.563L261.438 292.19l97.156 62.53c-.08.262-.17.52-.25.782.173-.202.328-.422.5-.625l6.937 4.47 9 5.78 4.533-9.656c32.03-68.4 40.24-134.49 25.843-192.064l23.938-4.812 6.187 23.812 55.408-46.656-73.875-24.313 7.562 29.032-24.563 4.968C381.796 93.172 343.996 49.38 289.033 19.5l-7.75-4.22zm3.408 29.907c31.818 30.565 54.66 66.986 69.093 106.094l-136.686 21.25c5.196-8.662 8.24-19.857 8.28-32.06l59.314-95.282zm77.5 132.688c13.773 51.64 13.89 106.532 1.562 157.906l-113.625-73.124-4.125-61.72 116.188-23.06z"}}]})(t)}function p1(t){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M43.66 18.375l77.942 83.28-103.56-52.25v20.933l110.624 55.814-110.623-18.687v18.955l104.29 17.615-104.29 12.373v18.82L126.19 162.4 18.042 204.95v20.083l113.16-44.525L19.496 256.43l-1.453-.793v21.217c65.806 34.34 132.51 46.543 179.203 32.154 3.824 12.527 9.197 23.717 15.95 33.09l-98.87 151.527h22.315l86.89-133.172-51.378 133.172h20.032l47.38-122.8-16.668 122.8h18.86l16.707-123.1 16.707 123.1h18.857l-16.666-122.8 47.38 122.8h20.033L293.527 360.8l86.666 132.825h22.313l-98.83-151.47c6.884-9.366 12.474-20.595 16.433-33.208 45.343 13.82 109.376 2.79 173.2-29.29v-24.466L383.425 180.51l109.887 43.236v-20.082l-104.87-41.264 104.87 12.442v-18.82l-101.013-11.985 101.014-17.062V108.02l-104.84 17.71 104.84-52.664V52.152L388.42 104.838l80.92-86.463h-25.596l-87.07 93.033 10.346 9.684 1.197 3.215c2.333 6.264 3.502 11.874 3.502 18.347 0 27.94-22.42 53.896-57.76 67.795-14.693-15.965-20.836-32.194-19.682-40.395.63-4.474 2.12-6.77 6.56-8.858 4.442-2.087 12.65-3.236 24.878-1.088l10.978 1.93-.014-11.147c-.03-20-4.383-35.828-14.752-46.682-10.37-10.852-25.516-15.307-43.395-15.79h-.005c-21.498-.587-47.89 4.298-80.78 12.54l-12.01 3.01 6.185 10.72c17.82 30.892 20.35 45.607 18.635 57.835-1.41 10.04-6.747 20.57-11.127 36.323-33.276-14.21-54.31-39.248-54.31-66.194 0-5.457 1.75-11.222 4.128-17.884l2.77-7.768c4.31-5.594 3.082-4.444 4.31-5.594l-87.07-93.033zm231.328 88.69c1.032-.002 2.043.01 3.03.037h.004c15.15.41 24.503 3.856 30.39 10.02 4.566 4.78 7.734 12.16 8.965 23.27-9.47-.514-17.64.672-24.49 3.89-7.2 3.385-12.52 9.362-15.278 16.282-8.773-10.16-11.91-19.657-13.213-30.957-30.474 13.652-38.452-12.414-13.153-20.542 8.877-1.28 16.82-1.978 23.744-2zm.412 64.958c-.395 14.73 6.987 30.445 19.77 45.592-27.713 8.296-55.653 9.176-78.88.162 3.84-15.15 9.727-25.68 12.27-39.562 12.53 3.915 33.24 3.23 46.84-6.192zm-131.336 22.34L77.098 281.68c-12.686-4.224-25.63-9.41-38.614-15.56zm226.5 0L477.04 266.73c-13.155 6.165-26.255 11.33-39.08 15.508zm-213.287 13.48l-29.925 85.85c-9.986-1.393-20.393-3.487-31.086-6.298zm200.077.005l61.345 79.988c-10.8 2.753-21.3 4.773-31.35 6.066zm-185.18 14.04l-1.494 73.176c-7.553.735-15.648.887-24.176.463zm170.28 0l25.67 73.637c-8.555.31-16.65.02-24.183-.857zm-151.665 3.776c3.903 1.71 7.927 3.273 12.052 4.678l5.54 1.887-1.448 53.043-7.024 2.942c-3.268 1.368-6.77 2.548-10.473 3.547zm133.07 1.133l1.312 64.123c-2.69-.806-5.263-1.713-7.71-2.723L307.288 284c-3.073-.493 1.872-51.797 1.872-51.797l5.438-1.87c3.153-1.083 6.238-2.27 9.26-3.536z"}}]})(t)}function x1(t){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M349.603 42.768c-31.36-1.053-234.946 205.685-280.595 309.828 26.998-7.923 58.257-15.23 82.4-13.004 22.594 2.083 40.82 15.274 57.844 26.603 17.023 11.33 32.575 20.703 48.654 20.416 16.378-.29 32.196-11.74 49.502-24.862 17.306-13.122 36.175-27.944 60.272-27.812 6.093.033 12.397.946 18.79 2.505-56.174-100.224-21.42-289.766-36.062-293.598-.255-.04-.523-.065-.805-.074zm21.586 312.37c-24.097-.13-42.966 14.69-60.272 27.813-17.306 13.123-33.124 24.573-49.502 24.864-16.08.287-31.63-9.086-48.654-20.416-17.023-11.33-35.25-24.52-57.844-26.603-25.39-2.34-58.66 5.86-86.557 14.234-27.895 8.372-50.07 17.28-50.07 17.28l6.706 16.702s21.492-8.624 48.54-16.743c27.047-8.12 60-15.37 79.73-13.55 16.277 1.5 32.278 12.186 49.523 23.663 17.244 11.476 36 23.838 58.946 23.43 24.043-.43 42.793-15.428 60.057-28.518 17.264-13.09 32.97-24.245 49.3-24.156 17.393.094 46.024 13.347 68.952 27.23 22.928 13.882 40.662 27.745 40.662 27.745l11.09-14.176s-18.476-14.464-42.43-28.967c-23.954-14.504-52.877-29.696-78.178-29.834zm1.91 41.12c-24.097-.132-42.966 14.69-60.272 27.812-17.306 13.122-33.124 24.572-49.502 24.864-16.08.286-31.63-9.087-48.654-20.416-17.023-11.33-35.25-24.52-57.844-26.604-25.39-2.34-58.66 5.86-86.557 14.234-27.895 8.374-50.07 17.28-50.07 17.28l6.708 16.703s21.49-8.623 48.537-16.74c27.048-8.12 60.002-15.37 79.73-13.552 16.28 1.5 32.28 12.187 49.524 23.664 17.244 11.477 36 23.84 58.946 23.43 24.044-.43 42.795-15.427 60.06-28.518 17.263-13.09 32.966-24.245 49.296-24.156 17.394.095 46.025 13.348 68.953 27.23 22.928 13.883 40.662 27.748 40.662 27.748l11.092-14.177s-18.476-14.464-42.43-28.968c-23.955-14.504-52.88-29.696-78.18-29.834z"}}]})(t)}function m1(t){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M301.563 20.22c-8.64-.033-17.075.304-25.22.968-200.737 0-184.708 197.468 0 226 184.71 28.53 137.485 190.906 9.907 190.906-84.162 0-140.85-19.887-181.03-64.156-42.064-46.34-12.496-99.594 44.28-51.938 57.026 47.867 100.32 83.576 171.813 28-89.54 29.698-124.626-42.73-188.313-81.875-60.388-37.117-138.036 38.746-86 121.25 43.402 68.815 152.713 107.78 243.344 107.78 220.645 0 259.324-271.296 63.094-301.936-69.28-10.818-119.376-23.398-143.688-61.907-17.817-28.226 32.672-85.843 97.656-59.688 9.406 15.75 13.877 35.578 15.375 65.47l83.5 39.53 3.22-5.438.063.125c8.535-4.49 14.952-14.657 20.906-26.03-10.923 4.674-23.103 4.475-34.69 1.468-2.788-1.817-5.497-3.827-8.092-6-23.392-19.585-28.737-45.978-11.938-58.97 12.435-9.615 33.52-9.19 53.125-.374 8.603 18.074 9.702 35.265 11.188 52.5 10.24-14.024 15.704-29.453 18.562-45.656l10.72-18.063C421.43 35.528 357.307 20.423 301.56 20.22zm42.812 22.06c13.64.758 28.504 1.625 41.72 9.407l-9.47 16.126c-8.187-4.822-19.96-6.137-33.28-6.876l1.03-18.656z"}}]})(t)}function u1(t){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M235.75 42.28c-.68.006-1.353.01-2.03.032-3.1.11-6.195.404-9.25.907-20.682 3.4-40.108 14.714-55.376 30.28-18.356-6.394-37.205-10.75-56.656-12.563-2.31-.215-4.59-.333-6.844-.343-.752-.004-1.507.012-2.25.03-20.82.524-38.94 9.602-52.53 23.063-15.533 15.385-25.624 36.27-29.658 57.907-4.033 21.638-2.052 44.237 8.125 62.906 10.178 18.67 29.117 32.835 55.532 36.094 36.828 4.544 70.415 5.794 103.72 4.594l.437.406.374-.438c27.815-1.036 55.45-3.77 84.625-7.78-.814 7.602.168 14.882 3.155 21.31 23.12 15.608 47.78 19.41 76.72 11.22 3.638-1.957 7.24-4.17 10.75-6.687 10.992-7.885 19.667-17.44 25.592-27.47-10.102-20.476-13.347-41.67-9.656-62.53-6.924-3.75-15.252-5.577-24.28-5.47-.715.008-1.433.06-2.156.094-16.59-32.33-35.69-63.26-60.063-95.563-15.846-21-37.24-30.144-58.28-30zm2.188 18.532c14.892.16 28.934 6.522 41.156 22.72 22.482 29.797 40.225 58.18 55.75 87.812-2.768.87-5.543 1.875-8.313 3.062-44.5-38.158-89.732-72.463-138.124-93.344 11.76-10.097 25.604-17.187 39.094-19.406 3.515-.578 7-.88 10.438-.843zm165 17.563l-6.625 17.47c30.865 11.68 52.434 36.81 64.5 67.25-27.754-32.927-66.408-55.983-109.563-56.19l-.094 18.72c27.147.13 52.99 11.29 74.688 29.125-10.274 5.33-19.327 12.764-27.094 22.438-3.192 18.115.078 35.896 10.406 54.562 21.263 21.66 46.337 33.562 76.25 33.094 6.106-18.483 7.41-34.1 5.344-47.656-2.258-58.64-30.98-117.305-87.813-138.813zm-291.782 1.188c69.776 6.655 133.8 50.255 197.97 104.593-.27.19-.545.37-.813.563-1.253.897-2.465 1.84-3.657 2.78l-191.03-67.22-2.47-40.718zM92.5 80.656l5.563 91.156-59.094-23.343c.17-1.15.348-2.292.56-3.44 3.39-18.177 12.1-35.84 24.44-48.06 8.12-8.044 17.597-13.812 28.53-16.314zm22.375 59.844l109.656 38.594-43.624 47.656c-8.55.216-17.118.268-25.78.125l-37.657-43.938-2.595-42.437zm-76.72 27.75l63.657 25.125 27.907 32.563c-13.784-.8-27.915-2.095-42.595-3.907-21.254-2.62-33.857-12.56-41.438-26.468-4.322-7.93-6.81-17.322-7.53-27.312zm397.5 4.813c.374-.02.75 0 1.126 0 12.082 0 21.876 9.794 21.876 21.875 0 12.082-9.794 21.875-21.875 21.875-12.08 0-21.874-9.795-21.874-21.875 0-11.703 9.193-21.29 20.75-21.875zM242.782 185.53l47.032 16.532c-4.065 5.014-7.425 10.27-10 15.594-25.21 3.637-48.96 6.376-72.468 7.906l36.094-39.437-.657-.594zm19 85.157c-22.023 3.702-40.202 14.834-53.28 30.063 13.942 16.114 30.9 26.48 51.47 31.78 24.453 6.303 54.333 5.188 89.624-3.905-1.118-13.518-6.158-25.815-20.72-36.125-24.175.564-46.892-6.817-67.093-21.813zM197.595 316.5c-9.088 16.403-13.382 35.462-11.844 54.5 31.95 24.294 61.132 35.617 87.625 35.156 25.832-.45 50.003-11.76 73.594-35.875.625-7.607 1.596-15.078 2.25-22.342-35.35 8.516-66.727 9.7-93.94 2.687-22.447-5.785-41.876-17.308-57.686-34.125zm149.562 78.97c-22.667 18.85-47.38 28.92-73.47 29.374-26.433.46-53.628-8.724-81.498-26.53 10.815 26.82 35.084 50.75 75.968 63.31 22.05 3.672 40.392 3.026 54.906-1.437 16.862-5.183 28.98-15.113 37.688-31.312-8.31-10.982-12.13-22.215-13.594-33.406zm150.406 12.655c-21.934 13.607-78.608 25.768-99.343 15.594-4.52 19.162-15.06 21.715-23.47 18.28-8.854 14.47-21.072 25.37-35.97 32.156 30.077 21.514 136.794 17.434 158.783-66.03z"}}]})(t)}function f1(t){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M179.3 38.94C154.7 77.7 142.7 139.7 168.4 185.9l-16.3 9.2c-6.7-11.9-11.2-24.4-13.9-37.2-34.5-6.3-69.42-7.5-104.98-2.1 34.07 10.1 52.77 23.7 76.68 46.7-26.82 9.7-60.25 30.2-92.93 70.2 35.47-8.8 64.83-11.5 89.43-6.3-36.94 22.5-64.06 56.1-88.34 114.1 35.9-17.2 64.89-18.8 102.94-18.8-23.07 32.7-35.27 77.2-36.31 112.8 24.51-26 57.61-60.2 87.21-79 3 29.9 15 58.3 35.9 85.3-.2-43.9 10.3-88.3 31.6-133.4-18.8 9-32.4 18.1-49.9 29.3 6.2-27.9 12.4-55.8 18.7-83.7-23.3 2.4-39 10-60.5 18.5 16.3-33.1 32.7-66.1 49.1-99.2l16.8 8.3-28.4 57.4c18.4-4.4 28.7-4.1 45.7-1.3-4.5 20.4-9 40.7-13.6 61 65.3-36.2 148.3-45.9 226.7-50 7.6-12.9 13.8-24.2 18.8-34.8l-6.3-24.4-24.4 30.8-7.8-27.5-22.5 29.2-7.5-26.1-23.9 31.5-7.7-28.2-23.8 31.4 1.2-41.1 22.6-42.7 7.6 28.3 23.9-31.5 7.6 28.2 23.5-30 6.5 26.9 24.5-30.8 7.8 27.5 24.6-32c2.3-10.8 4.6-22.4 7.4-35.7-55.5-3.7-106.3 4.8-154 9.8-38-20.8-80.8-26.8-121.9-18.5-13.6-29.69-27.2-59.38-40.9-89.06zM325.5 158.3c-4.5 14.2-13 18.3-24.7 20.6-16.1-4.4-28.3-15.5-34.4-30.2 20.4-3.8 42.4 3.4 59.1 9.6z"}}]})(t)}function h1(t){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.7163 1.94727L17.4506 3.38074L16.7339 5.2479L15.8003 4.88928L15.0539 6.83418C15.8328 7.29566 16.4983 7.92829 16.9986 8.68026L18.9014 7.83237L18.4947 6.91882L20.3218 6.10535L21.9487 9.75953L20.1216 10.573L19.7149 9.65946L17.8126 10.5069C17.9348 10.9842 17.9998 11.4844 17.9998 11.9998C17.9998 12.4061 17.9594 12.8029 17.8825 13.1865L19.8265 13.9325L20.1852 12.9996L22.0523 13.7163L20.6189 17.4506L18.7517 16.7339L19.1094 15.8007L17.1654 15.0539C16.7039 15.8328 16.0713 16.4983 15.3194 16.9986L16.1672 18.9014L17.0808 18.4947L17.8943 20.3218L14.2401 21.9487L13.4266 20.1216L14.3402 19.7149L13.4927 17.8126C13.0154 17.9348 12.5152 17.9998 11.9998 17.9998C11.5932 17.9998 11.196 17.9594 10.8121 17.8823L10.0662 19.827L11 20.1852L10.2833 22.0523L6.54897 20.6189L7.2657 18.7517L8.19803 19.1098L8.9457 17.1654C8.16683 16.7039 7.50133 16.0713 7.00097 15.3194L5.09818 16.1672L5.50492 17.0808L3.67782 17.8943L2.05088 14.2401L3.87797 13.4266L4.28379 14.3406L6.18702 13.4927C6.06479 13.0154 5.99981 12.5152 5.99981 11.9998C5.99981 11.5935 6.04018 11.1967 6.11714 10.8131L4.17174 10.0666L3.81443 11L1.94727 10.2833L3.38074 6.54897L5.2479 7.2657L4.88888 8.19844L6.83418 8.9457C7.29566 8.16683 7.92829 7.50133 8.68026 7.00097L7.83237 5.09818L6.91882 5.50492L6.10535 3.67782L9.75953 2.05088L10.573 3.87797L9.65946 4.28471L10.5069 6.18702C10.9842 6.06479 11.4844 5.99981 11.9998 5.99981C12.4061 5.99981 12.8029 6.04018 13.1865 6.11714L13.9321 4.17215L12.9996 3.81443L13.7163 1.94727ZM11.9998 7.99981C9.79067 7.99981 7.99981 9.79067 7.99981 11.9998C7.99981 14.2089 9.79067 15.9998 11.9998 15.9998C14.2089 15.9998 15.9998 14.2089 15.9998 11.9998C15.9998 9.79067 14.2089 7.99981 11.9998 7.99981ZM11.4998 12.8658C11.9781 13.142 12.142 13.7536 11.8658 14.2319C11.5897 14.7101 10.9781 14.874 10.4998 14.5979C10.0215 14.3217 9.85764 13.7101 10.1338 13.2319C10.4099 12.7536 11.0215 12.5897 11.4998 12.8658ZM13.9998 10.9998C14.5521 10.9998 14.9998 11.4475 14.9998 11.9998C14.9998 12.5521 14.5521 12.9998 13.9998 12.9998C13.4475 12.9998 12.9998 12.5521 12.9998 11.9998C12.9998 11.4475 13.4475 10.9998 13.9998 10.9998ZM11.8658 9.76776C12.142 10.246 11.9781 10.8576 11.4998 11.1338C11.0215 11.4099 10.4099 11.246 10.1338 10.7678C9.85764 10.2895 10.0215 9.67787 10.4998 9.40173C10.9781 9.12559 11.5897 9.28946 11.8658 9.76776Z"}}]})(t)}function g1(t){return d({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(t)}const b1=o.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`,y1=o.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`,w1=o.ul`
  /* display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media (min-width: 768px) {
    gap: 30px;
  }
  @media (min-width: 1440px) {
    gap: 30px;
  }
`,p=o.li`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;o(_)`
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
    fill: #770409;
  }

  /* &.active, */
  &:hover,
  &:focus {
    color: #a40007;

    svg {
      fill: #a40007;
      border: 3px solid #a40007;
      box-shadow: rgb(169 70 53) 10px 10px 15px;
    }
  }
`;o.button`
  position: relative;
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  color: #000;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 2px 2px 5px #000000;
  &:hover {
    color: #a40007;
  }
`;const x=o(_)`
  display: flex;
  font-family: "Montserrat", sans-serif;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #770409;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  svg {
    fill: #770409;
  }

  /* &.active, */
  &:hover,
  &:focus {
    color: #a40007;

    svg {
      fill: #a40007;
      border: 3px solid #a40007;
      box-shadow: rgb(225 85 91) 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`,v1=o(u1)`
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
`,L1=o(p1)`
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
`,z1=o(m1)`
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
`,j1=o(f1)`
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
`,C1=o(s1)`
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
`,S1=o(x1)`
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
`,M1=o(d1)`
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
`,$1=o(h1)`
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
`;o(g1)`
  width: 20px;
  height: 20px;
  margin-left: 10px;

  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;

  @media (min-width: 768px) {
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`;const k1=()=>e.jsx(b1,{children:e.jsx(y1,{children:e.jsxs(w1,{children:[e.jsx(p,{children:e.jsx(x,{to:"/",children:e.jsx(v1,{})})}),e.jsx(p,{children:e.jsx(x,{to:"/hawk",children:e.jsx(L1,{})})}),e.jsx(p,{children:e.jsx(x,{to:"/snake",children:e.jsx(z1,{})})}),e.jsx(p,{children:e.jsx(x,{to:"/wolf",children:e.jsx(j1,{})})}),e.jsx(p,{children:e.jsx(x,{to:"/bear",children:e.jsx(C1,{})})}),e.jsx(p,{children:e.jsx(x,{to:"/shark",children:e.jsx(S1,{})})}),e.jsx(p,{children:e.jsx(x,{to:"/human",children:e.jsx(M1,{})})}),e.jsx(p,{children:e.jsx(x,{to:"/virus",children:e.jsx($1,{})})})]})})}),I1=()=>e.jsx(U,{children:e.jsxs(e1,{children:[e.jsxs("div",{children:[e.jsx(a1,{color:"#a40007",children:"Predators"}),e.jsx(o1,{children:"-- of the Earth --"}),e.jsx(n1,{children:"Welcome to the captivating realm of Earth's most formidable and fascinating predators. In a world where each species unveils its unique prowess."})]}),e.jsx(k1,{})]})}),_1=()=>e.jsx(t1,{children:e.jsx(I1,{})});export{_1 as default};
