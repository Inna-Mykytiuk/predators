import{n as t,r,j as i}from"./index-f99c2efe.js";import{k as s,C as c}from"./index.esm-468959d7.js";import{R as d,g,h as f,B as h,G as a,i as m,j as w,k as u}from"./Navigation.styled-9ba894bd.js";const b="/predators/assets/waspHero-bd929eaa.png",j=t.div`
  display: flex;
  background: url(${b});
  /* linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ), */

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
`,k=t.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px 0 30px;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    padding: 30px 0 30px;
    gap: 20px;
  }
  @media (min-width: 1440px) {
    padding: 50px 0 50px;
    gap: 30px;
    width: 100%;
  }
`,y=t.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  margin-left: auto;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
  @media (min-width: 1440px) {
    align-items: flex-end;
  }
`,z=t.h1`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  color: #ff6000;
  font-family: "Antonio", sans-serif;

  font-weight: bold;
  font-size: 48px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px #181717;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 80px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    margin-bottom: 40px;
    font-size: 120px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1.2;
  }
`,v=s`
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`,R=t.h2`
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  line-height: 1.2;
  background: linear-gradient(90deg, #ff6000, #a40007, #ff6000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear infinite;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  animation: ${v} 4s linear infinite;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,W=t.p`
  color: #99360f;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  max-width: 350px;
  text-align: center;
  margin-left: auto;
  text-shadow: 1px 1px 2px #181717;
  text-align: start;

  @media (min-width: 768px) {
    text-align: end;
    font-size: 16px;
    max-width: 450px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    max-width: 500px;
  }
`,S=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 10px;

  @media (min-width: 768px) {
    align-items: flex-end;
    margin-top: 20px;
  }
`,B=t.div`
  display: flex;
  gap: 10px;
`,H=t.h3`
  font-size: 22px;
  font-weight: bold;
  color: #ff6000;
  font-family: "Antonio", sans-serif;
`,I=s`
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }

`,L=s`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`,G=t.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  max-width: 400px;

  color: #fff;
  -webkit-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  animation: ${({isVisible:n})=>n?I:L} 2s ease;

  @media (min-width: 768px) {
    font-size: 28px;
    text-align: end;
  }
`,e=t.li`
  color: #99360f;
  font-family: "Antonio", sans-serif;
  font-size: 12px;
  font-weight: normal;
  text-align: start;

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  @media (min-width: 768px) {
    font-size: 16px;
    text-align: end;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`,T=()=>{const[n,p]=r.useState(!1),[o,l]=r.useState(!1),x=()=>{p(!n),l(!o)};return i.jsx(j,{children:i.jsx(k,{children:i.jsx(c,{children:i.jsxs(y,{children:[i.jsx(z,{children:"Wasp"}),i.jsx(R,{children:"Nature's Architects and Stingers"}),i.jsx(W,{children:"Enter the intricate world of wasps, where social structures, stingers, and vital ecological roles converge in a dance of precision and purpose."}),i.jsxs(S,{children:[i.jsxs(B,{children:[i.jsx(H,{children:"Danger rating 5/10"}),i.jsx(d,{onClick:x,children:o?i.jsx(g,{}):i.jsx(f,{})})]}),n&&i.jsxs(G,{isVisible:n,children:[i.jsx(e,{children:"Some wasps are social, forming intricate colonies with specialized roles for individuals."}),i.jsx(e,{children:"Social wasps, like yellow jackets, can form large colonies with hierarchical structures."}),i.jsx(e,{children:"Wasps possess a venomous sting used for hunting and defense against predators."}),i.jsx(e,{children:"Certain wasp species exhibit parasitic behavior, laying eggs on or inside other insects."}),i.jsx(e,{children:"Pollination is another essential role of certain wasp species, contributing to plant diversity."}),i.jsx(e,{children:"Wasps communicate through chemical signals, coordinating activities within their colonies."}),i.jsx(e,{children:"Mimicry is a common defense mechanism among wasps, imitating the appearance of more dangerous species."})]})]}),i.jsxs(h,{children:[i.jsx(a,{to:"/",children:i.jsx(m,{})}),i.jsx(a,{to:"/",children:i.jsx(w,{})}),i.jsx(a,{to:"/hawk",children:i.jsx(u,{})})]})]})})})})},E=()=>i.jsx(T,{});export{E as default};
