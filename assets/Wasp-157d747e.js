import{n as e,r as o,j as i}from"./index-30b2cd1d.js";import{k as r,C as p}from"./index.esm-308ab81a.js";import{R as l,g as x,h as d,B as c,G as a,i as h,j as g,k as m}from"./Navigation.styled-430f39ac.js";const f="/predators/assets/waspHero-bd929eaa.png",w=e.div`
  display: flex;
  background: url(${f});
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
`,u=e.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 60px 0 60px;
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
`,b=e.div`
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
`,j=e.h1`
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
`,y=e.h2`
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
`,z=e.p`
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
`,v=e.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 10px;

  @media (min-width: 768px) {
    align-items: flex-end;
    margin-top: 20px;
  }
`,W=e.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 0 20px 0;
`,R=e.h3`
  font-size: 22px;
  font-weight: bold;
  color: #ff6000;
  font-family: "Antonio", sans-serif;
`,S=e.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
  max-width: 400px;
  opacity: 0;

  color: #fff;
  -webkit-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transform: translateY(0);
  opacity: ${({isVisible:t})=>t?1:0};
  transform: ${({isVisible:t})=>t?"translateY(0)":"translateY(-20px)"};
  transition: all 0.5s;

  @media (min-width: 768px) {
    font-size: 28px;
    text-align: end;
  }
`,n=e.li`
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
`,B=()=>{const[t,s]=o.useState(!1);return i.jsx(w,{children:i.jsx(u,{children:i.jsx(p,{children:i.jsxs(b,{children:[i.jsx(j,{children:"Wasp"}),i.jsx(y,{children:"Nature's Architects and Stingers"}),i.jsx(z,{children:"Enter the intricate world of wasps, where social structures, stingers, and vital ecological roles converge in a dance of precision and purpose."}),i.jsxs(v,{children:[i.jsxs(W,{children:[i.jsx(R,{children:"Danger rating 5/10"}),i.jsx(l,{onClick:()=>s(!t),children:t?i.jsx(x,{}):i.jsx(d,{})})]}),i.jsxs(S,{isVisible:t,children:[i.jsx(n,{children:"Some wasps are social, forming intricate colonies with specialized roles for individuals."}),i.jsx(n,{children:"Social wasps, like yellow jackets, can form large colonies with hierarchical structures."}),i.jsx(n,{children:"Wasps possess a venomous sting used for hunting and defense against predators."}),i.jsx(n,{children:"Certain wasp species exhibit parasitic behavior, laying eggs on or inside other insects."}),i.jsx(n,{children:"Pollination is another essential role of certain wasp species, contributing to plant diversity."}),i.jsx(n,{children:"Wasps communicate through chemical signals, coordinating activities within their colonies."}),i.jsx(n,{children:"Mimicry is a common defense mechanism among wasps, imitating the appearance of more dangerous species."})]})]}),i.jsxs(c,{children:[i.jsx(a,{to:"/",children:i.jsx(h,{})}),i.jsx(a,{to:"/",children:i.jsx(g,{})}),i.jsx(a,{to:"/hawk",children:i.jsx(m,{})})]})]})})})})},T=()=>i.jsx(B,{});export{T as default};
