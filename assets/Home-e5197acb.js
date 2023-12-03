import{j as e}from"./index-42c7e834.js";import{n,k as s,C as a}from"./index.esm-d63e3e38.js";import{N as o,a as r,b as x,c as t,L as i,W as d,H as h,d as c,S as p,T as l,e as m,f as g,V as f}from"./Navigation.styled-ea8f2ced.js";const j="/predators/assets/predatorHero-b6a17c78.png",w=n.div`
  display: flex;
  background:
  /* linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ), */ url(${j});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`,u=n.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */

  gap: 10px;
  overflow-y: auto;
  width: 100%;
  /* height: 100%; */
  margin-right: auto;
  align-items: center;
  padding: 30px 0;

  @media (min-width: 768px) {
    gap: 20px;
    width: 450px;
    align-items: center;
    padding: 100px 0 0 0;
  }
  @media (min-width: 1440px) {
    gap: 30px;
    width: 800px;
    align-items: center;
  }
`,k=n.h1`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  color: #a40007;
  font-family: "Arvo", sans-serif;

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
`,b=n.h2`
  color: #770409;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  max-width: 450px;
  text-align: center;
  /* margin: 0 auto; */
  text-shadow: 1px 1px 2px #181717;
  margin: 20px 0 40px;

  @media (min-width: 768px) {
    max-width: 550px;
    font-size: 18px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
    line-height: 1.6;
  }
`,v=s`
  0% {
    opacity: 0.5;
    text-shadow: 2px 2px 10px #a40007;
  }
  100% {
    opacity: 1;
    text-shadow: 2px 2px 20px #a40007;
  }
`,y=n.div`
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
  animation: ${v} 0.5s ease-in-out infinite alternate;

  &:hover {
    color: #fff;
  }

  /* @media (min-width: 768px) {
    font-size: 32px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 40px;
    line-height: 1.6;
  } */
`,z=()=>e.jsx(o,{children:e.jsx(r,{children:e.jsxs(x,{children:[e.jsx(t,{children:e.jsx(i,{to:"/wasp",children:e.jsx(d,{})})}),e.jsx(t,{children:e.jsx(i,{to:"/hawk",children:e.jsx(h,{})})}),e.jsx(t,{children:e.jsx(i,{to:"/wolf",children:e.jsx(c,{})})}),e.jsx(t,{children:e.jsx(i,{to:"/snake",children:e.jsx(p,{})})}),e.jsx(t,{children:e.jsx(i,{to:"/tiger",children:e.jsx(l,{})})}),e.jsx(t,{children:e.jsx(i,{to:"/shark",children:e.jsx(m,{})})}),e.jsx(t,{children:e.jsx(i,{to:"/human",children:e.jsx(g,{})})}),e.jsx(t,{children:e.jsx(i,{to:"/virus",children:e.jsx(f,{})})})]})})}),I=()=>e.jsx(a,{children:e.jsxs(u,{children:[e.jsx(k,{children:"Predators"}),e.jsx(y,{children:"-- of the Earth --"}),e.jsx(b,{children:"Welcome to the captivating realm of Earth's most formidable and fascinating predators. In a world where each species unveils its unique prowess."}),e.jsx(z,{})]})}),T=()=>e.jsx(w,{children:e.jsx(I,{})});export{T as default};
