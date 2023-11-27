import{n as e,N as l,r as s,j as i}from"./index-f99c2efe.js";import{k as o,c,b as h,F as m,S as g,a as f,C as b}from"./index.esm-468959d7.js";const w="/predators/assets/wolfHero-3c13ba6d.png",u=e.div`
  display: flex;
  background: url(${w});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: left center;
  width: 100%;
  min-height: 100vh;
`,y=e.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 60px 0 30px;
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
`,j=e.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  margin-right: auto;

  /* @media (min-width: 768px) {

    align-items: flex-end;
  }
  @media (min-width: 1440px) {
    align-items: flex-end;
  } */
`,k=e.h1`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  color: #2da4e9;
  font-family: "Kaushan Script", cursive;

  font-weight: bold;
  font-size: 48px;
  line-height: 1.6;
  text-shadow: 1px 1px 8px #419bcf;
  margin-bottom: 10px;

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
`,v=o`
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`,z=e.h2`
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  line-height: 1.2;
  background: linear-gradient(90deg, #2da4e9, #4c7e9b, #2da4e9);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear infinite;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  animation: ${v} 4s linear infinite;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,R=e.p`
  color: #4c7e9b;
  font-weight: 400;
  font-family: "Kaushan Script", cursive;
  font-size: 14px;
  line-height: 1.2;
  max-width: 350px;
  text-align: center;
  margin-right: auto;
  text-shadow: 1px 1px 2px #181717;
  text-align: start;
  backdrop-filter: blur(10px);

  @media (min-width: 768px) {
    font-size: 16px;
    max-width: 400px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,S=e.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;

  @media (min-width: 768px) {
    /* align-items: flex-end; */
    margin-top: 20px;
  }
`,W=e.div`
  display: flex;
  padding: 10px;
  gap: 10px;
`,L=e.h3`
  font-size: 22px;
  font-weight: bold;
  color: #2da4e9;
  font-family: "Kaushan Script", cursive;
`,T=o`
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

`,H=o`
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
`,I=e.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  max-width: 400px;

  color: #fff;
  -webkit-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  animation: ${({isVisible:n})=>n?T:H} 2s ease;

  @media (min-width: 768px) {
    max-width: 700px;
    font-size: 28px;
    /* text-align: end; */
  }
`,t=e.li`
  color: #4c7e9b;
  font-family: "Kaushan Script", cursive;
  font-size: 12px;
  font-weight: normal;
  /* text-align: start; */

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  @media (min-width: 768px) {
    font-size: 16px;
    /* text-align: end; */
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`,B=e.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  /* @media (min-width: 768px) {
    margin-top: 30px;
  } */
`,F=e(c)`
  width: 12px;
  height: 12px;

  padding: 5px;

  color: #2da4e9;
  border-radius: 50%;
  border: 3px solid #2da4e9;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #355da9 0px 0px 15px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,G=e(h)`
  width: 12px;
  height: 12px;

  padding: 5px;

  color: #2da4e9;
  border-radius: 50%;
  border: 3px solid #2da4e9;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #355da9 0px 0px 15px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,A=e.button`
  display: flex;
  font-family: "Montserrat", sans-serif;
  background-color: transparent;
  outline: 0;
  margin: 0;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #2da4e9;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  svg {
    fill: #2da4e9;
  }

  /* &.active, */
  &:hover {
    color: #4c7e9b;

    svg {
      fill: #4c7e9b;
      border: 3px solid #4c7e9b;
      box-shadow: #4c7e9b 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`,C=e(m)`
  width: 12px;
  height: 12px;

  padding: 10px;

  color: #2da4e9;
  border-radius: 50%;
  border: 3px solid #2da4e9;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #355da9 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,K=e(g)`
  width: 12px;
  height: 12px;

  padding: 10px;

  color: #2da4e9;
  border-radius: 50%;
  border: 3px solid #2da4e9;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #355da9 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,N=e(f)`
  width: 12px;
  height: 12px;

  padding: 10px;

  color: #2da4e9;
  border-radius: 50%;
  border: 3px solid #2da4e9;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #355da9 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,a=e(l)`
  display: flex;
  font-family: "Montserrat", sans-serif;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #2da4e9;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #4c7e9b;

  svg {
    fill: #2da4e9;
  }

  /* &.active, */
  &:hover,
  &:focus {
    color: #a40007;

    svg {
      fill: #4c7e9b;
      border: 3px solid #4c7e9b;
      box-shadow: #355da9 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`,Y=()=>{const[n,d]=s.useState(!1),[r,p]=s.useState(!1),x=()=>{d(!n),p(!r)};return i.jsx(u,{children:i.jsx(y,{children:i.jsx(b,{children:i.jsxs(j,{children:[i.jsx(z,{children:"Nature's Architects and Stingers"}),i.jsx(k,{children:"Wolf"}),i.jsx(R,{children:"Join the packs and explore the untamed landscapes where wolves, with their intricate social structures and haunting howls, command the wilderness."}),i.jsxs(S,{children:[i.jsxs(W,{children:[i.jsx(L,{children:"Danger rating 5/10"}),i.jsx(A,{onClick:x,children:r?i.jsx(F,{}):i.jsx(G,{})})]}),n&&i.jsxs(I,{isVisible:n,children:[i.jsx(t,{children:"Wolves are skilled hunters, often targeting large ungulates such as deer and elk."}),i.jsx(t,{children:"Pack hierarchy is established through a combination of dominance displays and submission."}),i.jsx(t,{children:"Communication within a wolf pack involves vocalizations, body language, and scent marking."}),i.jsx(t,{children:"The iconic howl of a wolf serves various purposes, including signaling location and maintaining pack cohesion."}),i.jsx(t,{children:"The iconic howl of a wolf serves various purposes, including signaling location and maintaining pack cohesion."}),i.jsx(t,{children:"Wolf territories can cover vast areas, depending on prey availability and pack size."}),i.jsx(t,{children:"The gestation period for wolf pups is around two months, with the entire pack participating in their care."}),i.jsx(t,{children:"Gray wolves, the most widespread species, exhibit a wide range of coat colors, from white to black."})]})]}),i.jsxs(B,{children:[i.jsx(a,{to:"/hawk",children:i.jsx(C,{})}),i.jsx(a,{to:"/",children:i.jsx(K,{})}),i.jsx(a,{to:"/",children:i.jsx(N,{})})]})]})})})})},O=()=>i.jsx(i.Fragment,{children:i.jsx(Y,{})});export{O as default};
