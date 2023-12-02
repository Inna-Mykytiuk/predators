import{n as e,N as o,r as s,j as i}from"./index-9fc95b50.js";import{k as p,c as x,b as d,F as l,S as c,a as h,C as g}from"./index.esm-d045a59c.js";const m="/predators/assets/tigerHero-d327fef5.png",f=e.div`
  display: flex;
  background: url(${m});
  /* linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ), */

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: right center;
  width: 100%;
  min-height: 100vh;
`,w=e.div`
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
`,u=e.h1`
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
`,j=p`
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
  animation: ${j} 4s linear infinite;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,k=e.p`
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
`,z=e.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 10px;

  @media (min-width: 768px) {
    align-items: flex-end;
    margin-top: 20px;
  }
`,v=e.div`
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
`,T=e.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  /* @media (min-width: 768px) {
    margin-top: 30px;
  } */
`,A=e(x)`
  width: 12px;
  height: 12px;

  padding: 5px;

  color: #e5a52a;
  border-radius: 50%;
  border: 3px solid #e5a52a;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #e5a52a 0px 0px 15px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,H=e(d)`
  width: 12px;
  height: 12px;

  padding: 5px;

  color: #e5a52a;
  border-radius: 50%;
  border: 3px solid #e5a52a;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #e5a52a 0px 0px 15px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,I=e.button`
  display: flex;
  background-color: transparent;
  outline: 0;
  margin: 0;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #e5a52a;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #e5a52a;

  svg {
    fill: #e5a52a;
  }

  /* &.active, */
  &:hover {
    color: #536830;

    svg {
      fill: #536830;
      border: 3px solid #536830;
      box-shadow: #536830 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`,W=e(l)`
  width: 12px;
  height: 12px;

  padding: 10px;

  color: #e5a52a;
  border-radius: 50%;
  border: 3px solid #e5a52a;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #e5a52a 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,B=e(c)`
  width: 12px;
  height: 12px;

  padding: 10px;

  color: #e5a52a;
  border-radius: 50%;
  border: 3px solid #e5a52a;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #e5a52a 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,F=e(h)`
  width: 12px;
  height: 12px;

  padding: 10px;

  color: #e5a52a;
  border-radius: 50%;
  border: 3px solid #e5a52a;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #e5a52a 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,a=e(o)`
  display: flex;
  font-family: "Montserrat", sans-serif;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #e5a52a;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #e5a52a;

  svg {
    fill: #e5a52a;
  }

  /* &.active, */
  &:hover,
  &:focus {
    color: #536830;

    svg {
      fill: #536830;
      border: 3px solid #536830;
      box-shadow: #536830 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`,G=()=>{const[t,r]=s.useState(!1);return i.jsx(f,{children:i.jsx(w,{children:i.jsx(g,{children:i.jsxs(b,{children:[i.jsx(u,{children:"Wasp"}),i.jsx(y,{children:"Nature's Architects and Stingers"}),i.jsx(k,{children:"Enter the intricate world of wasps, where social structures, stingers, and vital ecological roles converge in a dance of precision and purpose."}),i.jsxs(z,{children:[i.jsxs(v,{children:[i.jsx(R,{children:"Danger rating 5/10"}),i.jsx(I,{onClick:()=>r(!t),children:t?i.jsx(A,{}):i.jsx(H,{})})]}),i.jsxs(S,{isVisible:t,children:[i.jsx(n,{children:"Some wasps are social, forming intricate colonies with specialized roles for individuals."}),i.jsx(n,{children:"Social wasps, like yellow jackets, can form large colonies with hierarchical structures."}),i.jsx(n,{children:"Wasps possess a venomous sting used for hunting and defense against predators."}),i.jsx(n,{children:"Certain wasp species exhibit parasitic behavior, laying eggs on or inside other insects."}),i.jsx(n,{children:"Pollination is another essential role of certain wasp species, contributing to plant diversity."}),i.jsx(n,{children:"Wasps communicate through chemical signals, coordinating activities within their colonies."}),i.jsx(n,{children:"Mimicry is a common defense mechanism among wasps, imitating the appearance of more dangerous species."})]})]}),i.jsxs(T,{children:[i.jsx(a,{to:"/snake",children:i.jsx(W,{})}),i.jsx(a,{to:"/",children:i.jsx(B,{})}),i.jsx(a,{to:"/",children:i.jsx(F,{})})]})]})})})})},N=()=>i.jsx(i.Fragment,{children:i.jsx(G,{})});export{N as default};
