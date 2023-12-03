import{N as r,r as s,j as i}from"./index-e4adcb00.js";import{n as e,k as d,c as p,b as x,F as l,S as c,a as h,C as m}from"./index.esm-21fac664.js";const g="/predators/assets/wolfHero-c2200093.png",f=e.div`
  display: flex;
  background: url(${g});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: left center;
  width: 100%;
  height: 100%;
`,w=e.div`
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
`,b=e.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  overflow-y: scroll;

  width: 100%;
  height: 100%;
  margin-right: auto;
`,u=e.h1`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  color: #e1d05e;
  font-family: "Permanent Marker", cursive;

  font-weight: bold;
  font-size: 48px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px #e1d05e;
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
`,k=d`
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`,j=e.h2`
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  line-height: 1.2;
  background: linear-gradient(90deg, #e1d05e, #50514d, #e1d05e);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear infinite;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  animation: ${k} 4s linear infinite;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,y=e.p`
  color: #878986;
  font-weight: 400;
  font-family: "Arvo", sans-serif;
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
`,v=e.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;

  @media (min-width: 768px) {
    /* align-items: flex-end; */
    margin-top: 20px;
  }
`,z=e.div`
  display: flex;
  padding: 0 0 20px 0;
  gap: 10px;
  align-items: center;
`,W=e.h3`
  font-size: 22px;
  font-weight: bold;
  color: #e1d05e;
  font-family: "Permanent Marker", cursive;
`,R=e.ul`
  display: flex;
  flex-direction: column;
  gap: ${({isVisible:t})=>t?"10px":"0"};
  padding: ${({isVisible:t})=>t?"0 10px":"0"};
  max-width: 400px;

  color: #fff;
  -webkit-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transform: translateY(-20px);
  opacity: ${({isVisible:t})=>t?1:0};
  transform: ${({isVisible:t})=>t?"translateY(0)":"translateY(-20px)"};
  height: ${({isVisible:t})=>t?"100%":"30px"};
  overflow: ${({isVisible:t})=>t?"visible":"hidden"};
  margin-bottom: ${({isVisible:t})=>t?"20px":"0"};
  transition: all 0.5s;

  @media (min-width: 768px) {
    max-width: 600px;
    font-size: 28px;
  }
  @media (min-width: 1420px) {
    max-width: 700px;
  }
`,n=e.li`
  color: #878986;
  font-family: "Arvo", sans-serif;
  font-size: 12px;
  font-weight: normal;
  /* text-align: start; */

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`,$=e.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  /* @media (min-width: 768px) {
    margin-top: 30px;
  } */
`,S=e(p)`
  width: 12px;
  height: 12px;

  padding: 5px;

  color: #e1d05e;
  border-radius: 50%;
  border: 3px solid #e1d05e;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #e1d05e 0px 0px 15px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,T=e(x)`
  width: 12px;
  height: 12px;

  padding: 5px;

  color: #e1d05e;
  border-radius: 50%;
  border: 3px solid #e1d05e;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #e1d05e 0px 0px 15px;
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
  background-color: transparent;
  outline: 0;
  margin: 0;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #e1d05e;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #e1d05e;

  svg {
    fill: #e1d05e;
  }

  /* &.active, */
  &:hover {
    color: #878986;

    svg {
      fill: #878986;
      border: 3px solid #878986;
      box-shadow: #878986 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`,H=e(l)`
  width: 12px;
  height: 12px;

  padding: 10px;

  color: #e1d05e;
  border-radius: 50%;
  border: 3px solid #e1d05e;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #e1d05e 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,I=e(c)`
  width: 12px;
  height: 12px;

  padding: 10px;

  color: #e1d05e;
  border-radius: 50%;
  border: 3px solid #e1d05e;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #e1d05e 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,B=e(h)`
  width: 12px;
  height: 12px;

  padding: 10px;

  color: #e1d05e;
  border-radius: 50%;
  border: 3px solid #e1d05e;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #e1d05e 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,o=e(r)`
  display: flex;
  font-family: "Montserrat", sans-serif;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #e1d05e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #e1d05e;

  svg {
    fill: #e1d05e;
  }

  /* &.active, */
  &:hover,
  &:focus {
    color: #878986;

    svg {
      fill: #878986;
      border: 3px solid #878986;
      box-shadow: #878986 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`,F=()=>{const[t,a]=s.useState(!1);return i.jsx(f,{children:i.jsx(w,{children:i.jsx(m,{children:i.jsxs(b,{children:[i.jsx(j,{children:"Nature's Architects and Stingers"}),i.jsx(u,{children:"Wolf"}),i.jsx(y,{children:"Join the packs and explore the untamed landscapes where wolves, with their intricate social structures and haunting howls, command the wilderness."}),i.jsxs(v,{children:[i.jsxs(z,{children:[i.jsx(W,{children:"Danger rating 5/10"}),i.jsx(A,{onClick:()=>a(!t),children:t?i.jsx(S,{}):i.jsx(T,{})})]}),i.jsxs(R,{isVisible:t,children:[i.jsx(n,{children:"Wolves are skilled hunters, often targeting large ungulates such as deer and elk."}),i.jsx(n,{children:"Pack hierarchy is established through a combination of dominance displays and submission."}),i.jsx(n,{children:"Communication within a wolf pack involves vocalizations, body language, and scent marking."}),i.jsx(n,{children:"The iconic howl of a wolf serves various purposes, including signaling location and maintaining pack cohesion."}),i.jsx(n,{children:"The iconic howl of a wolf serves various purposes, including signaling location and maintaining pack cohesion."}),i.jsx(n,{children:"Wolf territories can cover vast areas, depending on prey availability and pack size."}),i.jsx(n,{children:"The gestation period for wolf pups is around two months, with the entire pack participating in their care."}),i.jsx(n,{children:"Gray wolves, the most widespread species, exhibit a wide range of coat colors, from white to black."})]})]}),i.jsxs($,{children:[i.jsx(o,{to:"/hawk",children:i.jsx(H,{})}),i.jsx(o,{to:"/",children:i.jsx(I,{})}),i.jsx(o,{to:"/snake",children:i.jsx(B,{})})]})]})})})})},C=()=>i.jsx(i.Fragment,{children:i.jsx(F,{})});export{C as default};
