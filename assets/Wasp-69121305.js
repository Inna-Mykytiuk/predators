import{n as e,r,j as i}from"./index-77b65f48.js";import{k as s,C as d,R as c,g as f,h as g,i as h,G as a,j as m,l as w,m as u}from"./Navigation.styled-f1cff1f5.js";const b="/predators/assets/waspHero-bd929eaa.png",j=e.div`
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
  height: 100vh;
`,k=e.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px 0 30px;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    /* align-items: flex-end; */
    padding: 30px 0 40px;
    gap: 20px;
  }
  @media (min-width: 1440px) {
    /* align-items: flex-end; */
    padding: 50px 0 70px;
    gap: 30px;
    width: 100%;
  }
`,y=e.div`
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
`,z=e.h1`
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
`,R=e.h2`
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  line-height: 1.2;
  overflow: hidden;
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
`,W=e.p`
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
`,S=e.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 10px; */
  margin-top: 10px;

  @media (min-width: 768px) {
    align-items: flex-end;
    margin-top: 20px;
    /* font-size: 16px;
    line-height: 1.5; */
  }
  /* @media (min-width: 1440px) {
    font-size: 18px;
  } */
`,H=e.div`
  display: flex;
  /* flex-direction: column;
  align-items: flex-start; */
  gap: 10px;
`,I=e.h3`
  font-size: 22px;
  font-weight: bold;
  color: #ff6000;
  font-family: "Antonio", sans-serif;
`,B=s`
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
`,G=e.ul`
  /* position: absolute; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  gap: 10px;
  padding: 10px;
  max-width: 400px;

  color: #fff;
  -webkit-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  animation: ${({isVisible:n})=>n?B:L} 2s ease;

  @media (min-width: 768px) {
    font-size: 28px;
    text-align: end;
  }
`,t=e.li`
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
`,T=()=>{const[n,l]=r.useState(!1),[o,p]=r.useState(!1),x=()=>{l(!n),p(!o)};return i.jsx(j,{children:i.jsx(k,{children:i.jsx(d,{children:i.jsxs(y,{children:[i.jsx(z,{children:"Wasp"}),i.jsx(R,{children:"Nature's Architects and Stingers"}),i.jsx(W,{children:"Enter the intricate world of wasps, where social structures, stingers, and vital ecological roles converge in a dance of precision and purpose."}),i.jsxs(S,{children:[i.jsxs(H,{children:[i.jsx(I,{children:"Raiting 2/5"}),i.jsx(c,{onClick:x,children:o?i.jsx(f,{}):i.jsx(g,{})})]}),n&&i.jsxs(G,{isVisible:n,children:[i.jsx(t,{children:"Some wasps are social, forming intricate colonies with specialized roles for individuals."}),i.jsx(t,{children:"Social wasps, like yellow jackets, can form large colonies with hierarchical structures."}),i.jsx(t,{children:"Wasps possess a venomous sting used for hunting and defense against predators."}),i.jsx(t,{children:"Certain wasp species exhibit parasitic behavior, laying eggs on or inside other insects."}),i.jsx(t,{children:"Pollination is another essential role of certain wasp species, contributing to plant diversity."}),i.jsx(t,{children:"Wasps communicate through chemical signals, coordinating activities within their colonies."}),i.jsx(t,{children:"Mimicry is a common defense mechanism among wasps, imitating the appearance of more dangerous species."})]})]}),i.jsxs(h,{children:[i.jsx(a,{to:"/",children:i.jsx(m,{})}),i.jsx(a,{to:"/",children:i.jsx(w,{})}),i.jsx(a,{to:"/",children:i.jsx(u,{})})]})]})})})})},Y=()=>i.jsx(T,{});export{Y as default};
