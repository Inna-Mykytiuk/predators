import{n as e,r,j as i}from"./index-9c251dc6.js";import{k as s,F as l,n as c,C as h,G as a,j as m,l as g,m as f}from"./Navigation.styled-89688dc6.js";const w="/predators/assets/hawkHero-859879e1.png",b=e.div`
  display: flex;
  background: url(${w});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`,u=e.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px 0 30px;
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
`,k=e.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  color: #2da4e9;
  /* font-family: "Playfair Display", sans-serif; */
  font-family: "Kaushan Script", cursive;

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
`,y=s`
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`,v=e.h2`
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  line-height: 1.2;
  overflow: hidden;
  background: linear-gradient(90deg, #2da4e9, #4c7e9b, #2da4e9);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear infinite;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  animation: ${y} 4s linear infinite;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,z=e.p`
  color: #4c7e9b;
  font-weight: 400;
  font-family: "Antonio", sans-serif;
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
`,H=e.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;

  @media (min-width: 768px) {
    align-items: flex-end;
    margin-top: 20px;
  }
`,R=e.div`
  display: flex;
  padding: 10px;
  gap: 10px;
`,S=e.h3`
  font-size: 22px;
  font-weight: bold;
  color: #2da4e9;
  font-family: "Kaushan Script", cursive;
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

`,T=s`
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
`,B=e.ul`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  max-width: 400px;

  color: #fff;
  -webkit-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  animation: ${({isVisible:n})=>n?I:T} 2s ease;

  @media (min-width: 768px) {
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
`,L=e.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`,A=e(l)`
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
`,C=e(c)`
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
`,F=()=>{const[n,d]=r.useState(!1),[o,p]=r.useState(!1),x=()=>{d(!n),p(!o)};return i.jsx(b,{children:i.jsx(u,{children:i.jsx(h,{children:i.jsxs(k,{children:[i.jsx(j,{children:"Hawk"}),i.jsx(v,{children:"Nature's Architects and Stingers"}),i.jsx(z,{children:"Take flight with the majestic hawks, rulers of the skies, as we explore their keen eyesight, breathtaking aerial maneuvers, and vital role in maintaining ecological balance."}),i.jsxs(H,{children:[i.jsxs(R,{children:[i.jsx(S,{children:"Raiting 2/5"}),i.jsx(G,{onClick:x,children:o?i.jsx(A,{}):i.jsx(C,{})})]}),n&&i.jsxs(B,{isVisible:n,children:[i.jsx(t,{children:"Their powerful talons and beaks are designed for capturing and consuming various prey."}),i.jsx(t,{children:"Some hawk species migrate over long distances, demonstrating remarkable navigation skills."}),i.jsx(t,{children:"Various species of hawks exhibit diverse hunting strategies, from ambush tactics to cooperative hunting."}),i.jsx(t,{children:"Courtship displays and rituals are common among hawks, emphasizing social behaviors."}),i.jsx(t,{children:"Hawks are known for their impressive aerial acrobatics and soaring flight patterns."}),i.jsx(t,{children:"Adaptability to various habitats, from forests to open fields, contributes to their widespread distribution."}),i.jsx(t,{children:"Conservation efforts are crucial to protecting certain hawk species facing habitat loss and other threats."})]})]}),i.jsxs(L,{children:[i.jsx(a,{to:"/wasp",children:i.jsx(m,{})}),i.jsx(a,{to:"/",children:i.jsx(g,{})}),i.jsx(a,{to:"/",children:i.jsx(f,{})})]})]})})})})},Y=()=>i.jsx(i.Fragment,{children:i.jsx(F,{})});export{Y as default};
