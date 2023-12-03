import{N as o,r as s,j as i}from"./index-126e2f9a.js";import{C as x}from"./Container-00501e37.js";import{n as t,k as p,c as d,b as l,F as c,S as h,a as m}from"./index.esm-9bb87a5c.js";const g="/predators/assets/humanHero-3ab7bd92.png",f=t.div`
  display: flex;
  background: url(${g});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: left center;
  width: 100%;
  height: 100%;
`,u=t.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`,b=t.div`
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
`,w=t.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  margin-right: auto;
`,j=t.h1`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  color: #a40007;
  font-family: "Cinzel", serif;

  font-weight: bold;
  font-size: 48px;
  line-height: 1.6;
  text-shadow: 1px 1px 8px #770409;
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
`,y=p`
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`,v=t.h2`
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  line-height: 1.2;
  background: linear-gradient(90deg, #a40007, #50514d, #a40007);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear infinite;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  animation: ${y} 4s linear infinite;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,k=t.p`
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
    max-width: 500px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,z=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 20px;
  }
`,H=t.div`
  display: flex;
  padding: 0 0 20px 0;
  gap: 10px;
  align-items: center;
`,R=t.h3`
  font-size: 22px;
  font-weight: bold;
  color: #a40007;
  font-family: "Cinzel", serif;
`,$=t.ul`
  display: flex;
  flex-direction: column;
  gap: ${({isVisible:e})=>e?"10px":"0"};
  padding: ${({isVisible:e})=>e?"0 10px":"0"};
  max-width: 400px;

  color: #fff;
  -webkit-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transform: translateY(-20px);
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateY(0)":"translateY(-20px)"};

  height: ${({isVisible:e})=>e?"210px":"30px"};
  margin-bottom: ${({isVisible:e})=>e?"20px":"0"};
  transition: all 0.5s;

  overflow-y: scroll;
  ::-webkit-scrollbar-thumb {
    background-color: #878986;
    border: 2px solid transparent;
    border-radius: 8px;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  @media (min-width: 768px) {
    max-width: 600px;
    font-size: 28px;
    height: ${({isVisible:e})=>e?"230px":"30px"};
  }
  @media (min-width: 1420px) {
    /* max-width: 700px; */
    height: ${({isVisible:e})=>e?"100%":"30px"};
  }
`,n=t.li`
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
`,S=t.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`,T=t(d)`
  width: 12px;
  height: 12px;

  padding: 5px;

  color: #a40007;
  border-radius: 50%;
  border: 3px solid #a40007;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #a40007 0px 0px 15px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,I=t(l)`
  width: 12px;
  height: 12px;

  padding: 5px;

  color: #a40007;
  border-radius: 50%;
  border: 3px solid #a40007;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #a40007 0px 0px 15px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,A=t.button`
  display: flex;
  background-color: transparent;
  outline: 0;
  margin: 0;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #a40007;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #a40007;

  svg {
    fill: #a40007;
  }

  /* &.active, */
  &:hover {
    color: #770409;

    svg {
      fill: #770409;
      border: 3px solid #770409;
      box-shadow: #770409 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`,B=t(c)`
  width: 12px;
  height: 12px;

  padding: 10px;

  color: #a40007;
  border-radius: 50%;
  border: 3px solid #a40007;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #a40007 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,F=t(h)`
  width: 12px;
  height: 12px;

  padding: 10px;

  color: #a40007;
  border-radius: 50%;
  border: 3px solid #a40007;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #a40007 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,C=t(m)`
  width: 12px;
  height: 12px;

  padding: 10px;

  color: #a40007;
  border-radius: 50%;
  border: 3px solid #a40007;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #a40007 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,a=t(o)`
  display: flex;
  font-family: "Montserrat", sans-serif;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #a40007;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #a40007;

  svg {
    fill: #a40007;
  }

  /* &.active, */
  &:hover,
  &:focus {
    color: #770409;

    svg {
      fill: #770409;
      border: 3px solid #770409;
      box-shadow: #770409 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`,G=()=>{const[e,r]=s.useState(!1);return i.jsx(f,{children:i.jsx(b,{children:i.jsx(x,{children:i.jsxs(u,{children:[i.jsxs(w,{isVisible:!e,children:[i.jsx(v,{children:"The Unrivaled Dominance"}),i.jsx(j,{children:"Human"}),i.jsx(k,{children:"Step into the realm of humanity, where innovation and adaptability have crowned us as Earth's ultimate predator, shaping landscapes and rewriting the rules of survival."}),i.jsxs(z,{children:[i.jsxs(H,{children:[i.jsx(R,{children:"Danger rating 9/10"}),i.jsx(A,{onClick:()=>r(!e),children:e?i.jsx(T,{}):i.jsx(I,{})})]}),i.jsxs($,{isVisible:e,children:[i.jsx(n,{children:"Humans kill over 1 million animals daily for food. Humans kill animals for their skin, meat, and as experimental subjects in science."}),i.jsx(n,{children:"Historically, humans have used animals for entertainment, including animal fights."}),i.jsx(n,{children:"The development of tools allowed early humans to become effective hunters and gatherers."}),i.jsx(n,{children:"Human societies exhibit diverse cultural practices, from art and music to complex belief systems."}),i.jsx(n,{children:"Humans are capable of complex language, enabling advanced communication and cooperation."}),i.jsx(n,{children:"The invention of writing marked a significant leap in recording and transmitting knowledge."}),i.jsx(n,{children:"Humans have successfully adapted to various environments, from icy tundras to scorching deserts."}),i.jsx(n,{children:"Human innovation has led to technological advancements, shaping the modern world."})]})]})]}),i.jsxs(S,{children:[i.jsx(a,{to:"/shark",children:i.jsx(B,{})}),i.jsx(a,{to:"/",children:i.jsx(F,{})}),i.jsx(a,{to:"/virus",children:i.jsx(C,{})})]})]})})})})},E=()=>i.jsx(i.Fragment,{children:i.jsx(G,{})});export{E as default};
