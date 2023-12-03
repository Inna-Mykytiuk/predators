import{r as o,j as i}from"./index-8bdedf44.js";import{n as t,k as r,C as p}from"./index.esm-965f1437.js";import{R as l,g as x,h as d,B as c,G as a,i as h,j as m}from"./Navigation.styled-116facc7.js";const f="/predators/assets/waspHero-9e1391d1.png",g=t.div`
  display: flex;
  background: url(${f});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`,w=t.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`,u=t.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 30px 0 30px;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    gap: 20px;
  }
  @media (min-width: 1440px) {
    padding: 50px 0 50px;
    gap: 30px;
    width: 100%;
  }
`,b=t.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  overflow-y: ${({isVisible:e})=>e?"hidden":"auto"};

  width: 100%;
  /* height: 100%; */
  margin-left: auto;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
  @media (min-width: 1440px) {
    align-items: flex-end;
  }
`,j=t.h1`
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
`,k=r`
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`,y=t.h2`
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
  animation: ${k} 4s linear infinite;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,v=t.p`
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
`,z=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 10px;
  /* margin-bottom: auto; */

  @media (min-width: 768px) {
    align-items: flex-end;
    margin-top: 20px;
  }
`,W=t.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 0 20px 0;
`,R=t.h3`
  font-size: 22px;
  font-weight: bold;
  color: #ff6000;
  font-family: "Antonio", sans-serif;
`,$=t.ul`
  display: flex;
  flex-direction: column;
  gap: ${({isVisible:e})=>e?"10px":"0"};
  padding: ${({isVisible:e})=>e?"0 10px":"0"};
  max-width: 400px;
  opacity: 0;

  color: #fff;
  -webkit-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transform: translateY(0);
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateY(0)":"translateY(-20px)"};
  height: ${({isVisible:e})=>e?"100%":"30px"};
  /* overflow: ${({isVisible:e})=>e?"scroll":"hidden"}; */
  margin-bottom: ${({isVisible:e})=>e?"20px":"0"};
  transition: all 0.5s;

  @media (min-width: 768px) {
    font-size: 28px;
    text-align: end;
  }
`,n=t.li`
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
`,S=()=>{const[e,s]=o.useState(!1);return i.jsx(g,{children:i.jsx(u,{children:i.jsx(p,{children:i.jsxs(w,{children:[i.jsxs(b,{isVisible:!e,children:[i.jsx(j,{children:"Wasp"}),i.jsx(y,{children:"Nature's Architects and Stingers"}),i.jsx(v,{children:"Enter the intricate world of wasps, where social structures, stingers, and vital ecological roles converge in a dance of precision and purpose."}),i.jsxs(z,{children:[i.jsxs(W,{children:[i.jsx(R,{children:"Danger rating 5/10"}),i.jsx(l,{onClick:()=>s(!e),children:e?i.jsx(x,{}):i.jsx(d,{})})]}),i.jsxs($,{isVisible:e,children:[i.jsx(n,{children:"Some wasps are social, forming intricate colonies with specialized roles for individuals."}),i.jsx(n,{children:"Social wasps, like yellow jackets, can form large colonies with hierarchical structures."}),i.jsx(n,{children:"Wasps possess a venomous sting used for hunting and defense against predators."}),i.jsx(n,{children:"Certain wasp species exhibit parasitic behavior, laying eggs on or inside other insects."}),i.jsx(n,{children:"Pollination is another essential role of certain wasp species, contributing to plant diversity."}),i.jsx(n,{children:"Wasps communicate through chemical signals, coordinating activities within their colonies."}),i.jsx(n,{children:"Mimicry is a common defense mechanism among wasps, imitating the appearance of more dangerous species."})]})]})]}),i.jsxs(c,{children:[i.jsx(a,{to:"/",children:i.jsx(h,{})}),i.jsx(a,{to:"/hawk",children:i.jsx(m,{})})]})]})})})})},T=()=>i.jsx(S,{});export{T as default};
