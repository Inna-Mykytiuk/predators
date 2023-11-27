import{n as e,N as l,r as s,j as i}from"./index-d86bf14c.js";import{k as r,c,b as h,F as m,S as g,a as f,C as b}from"./index.esm-3a4a4253.js";const w="/predators/assets/hawkHero-859879e1.png",u=e.div`
  display: flex;
  background: url(${w});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: right center;
  width: 100%;
  min-height: 100vh;
`,k=e.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 60px 0 30px;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    padding: 30px 0 40px;
    gap: 20px;
  }
  @media (min-width: 1440px) {
    padding: 50px 0 70px;
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
  margin-left: auto;

  @media (min-width: 768px) {
    justify-content: flex-end;
    align-items: flex-end;
  }
  @media (min-width: 1440px) {
    align-items: flex-end;
  }
`,y=e.h1`
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
`,v=r`
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
`,H=e.p`
  color: #4c7e9b;
  font-weight: 400;
  font-family: "Kaushan Script", cursive;
  font-size: 14px;
  line-height: 1.2;
  max-width: 350px;
  text-align: center;
  margin-left: auto;
  text-shadow: 1px 1px 2px #181717;
  text-align: start;
  backdrop-filter: blur(10px);

  @media (min-width: 768px) {
    text-align: end;
    font-size: 16px;
    max-width: 400px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,R=e.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;

  @media (min-width: 768px) {
    align-items: flex-end;
    margin-top: 20px;
  }
`,S=e.div`
  display: flex;
  padding: 10px;
  gap: 10px;
`,L=e.h3`
  font-size: 22px;
  font-weight: bold;
  color: #2da4e9;
  font-family: "Kaushan Script", cursive;
`,I=r`
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

`,T=r`
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
`,A=e.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  max-width: 400px;

  color: #fff;
  -webkit-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  animation: ${({isVisible:a})=>a?I:T} 2s ease;

  @media (min-width: 768px) {
    max-width: 700px;
    font-size: 28px;
    text-align: end;
  }
`,t=e.li`
  color: #4c7e9b;
  font-family: "Kaushan Script", cursive;
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
`,B=e.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  @media (min-width: 768px) {
    margin-top: 30px;
  }
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
`,C=e(h)`
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
`,G=e.button`
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
`,K=e(m)`
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
`,N=e(g)`
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
`,V=e(f)`
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
`,n=e(l)`
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
`,W=()=>{const[a,d]=s.useState(!1),[o,p]=s.useState(!1),x=()=>{d(!a),p(!o)};return i.jsx(u,{children:i.jsx(k,{children:i.jsx(b,{children:i.jsxs(j,{children:[i.jsx(z,{children:"Nature's Architects and Stingers"}),i.jsx(y,{children:"Hawk"}),i.jsx(H,{children:"Take flight with the majestic hawks, rulers of the skies, as we explore their keen eyesight, breathtaking aerial maneuvers, and vital role in maintaining ecological balance."}),i.jsxs(R,{children:[i.jsxs(S,{children:[i.jsx(L,{children:"Raiting 4/10"}),i.jsx(G,{onClick:x,children:o?i.jsx(F,{}):i.jsx(C,{})})]}),a&&i.jsxs(A,{isVisible:a,children:[i.jsx(t,{children:"Their powerful talons and beaks are designed for capturing and consuming various prey."}),i.jsx(t,{children:"Some hawk species migrate over long distances, demonstrating remarkable navigation skills."}),i.jsx(t,{children:"Various species of hawks exhibit diverse hunting strategies, from ambush tactics to cooperative hunting."}),i.jsx(t,{children:"Courtship displays and rituals are common among hawks, emphasizing social behaviors."}),i.jsx(t,{children:"Hawks are known for their impressive aerial acrobatics and soaring flight patterns."}),i.jsx(t,{children:"Adaptability to various habitats, from forests to open fields, contributes to their widespread distribution."}),i.jsx(t,{children:"Conservation efforts are crucial to protecting certain hawk species facing habitat loss and other threats."})]})]}),i.jsxs(B,{children:[i.jsx(n,{to:"/wasp",children:i.jsx(K,{})}),i.jsx(n,{to:"/",children:i.jsx(N,{})}),i.jsx(n,{to:"/",children:i.jsx(V,{})})]})]})})})})},O=()=>i.jsx(i.Fragment,{children:i.jsx(W,{})});export{O as default};
