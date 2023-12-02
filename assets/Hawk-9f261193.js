import{N as o,r as s,j as i}from"./index-4a3d67dc.js";import{n as e,k as d,c as x,b as p,F as l,S as c,a as h,C as m}from"./index.esm-8a1dd60a.js";const g="/predators/assets/hawkHero-859879e1.png",f=e.div`
  display: flex;
  background: url(${g});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: right center;
  width: 100%;
  min-height: 100vh;
`,b=e.div`
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
`,w=e.div`
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
`,u=e.h1`
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
    margin-bottom: 80px;
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
  font-size: 16px;
  letter-spacing: 4px;
  line-height: 1.2;
  background: linear-gradient(90deg, #2da4e9, #4c7e9b, #2da4e9);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear infinite;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  animation: ${k} 4s linear infinite;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 10px;

    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,y=e.p`
  color: #4c7e9b;
  font-weight: 400;
  font-family: "Arvo", sans-serif;
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
`,z=e.div`
  display: flex;
  padding: 0 0 20px 0;
  gap: 10px;
  align-items: center;
`,H=e.h3`
  font-size: 22px;
  font-weight: bold;
  color: #2da4e9;
  font-family: "Kaushan Script", cursive;
`,S=e.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
  max-width: 400px;

  color: #fff;
  -webkit-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  transform: translateY(0);
  opacity: ${({isVisible:t})=>t?1:0};
  height: ${({isVisible:t})=>t?"100%":"30px"};
  overflow: ${({isVisible:t})=>t?"visible":"hidden"};
  transform: ${({isVisible:t})=>t?"translateY(0)":"translateY(-20px)"};

  transition: all 0.8s;

  @media (min-width: 768px) {
    height: ${({isVisible:t})=>t?"100%":"10px"};
    overflow: ${({isVisible:t})=>t?"visible":"hidden"};
    max-width: 700px;
    font-size: 28px;
    text-align: end;
  }
`,n=e.li`
  color: #4c7e9b;
  font-family: "Arvo", sans-serif;
  font-size: 12px;
  font-weight: normal;
  text-align: start;

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  @media (min-width: 768px) {
    font-size: 14px;
    text-align: end;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`,R=e.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  @media (min-width: 768px) {
    margin-top: 30px;
  }
`,A=e(x)`
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
`,$=e(p)`
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
`,I=e.button`
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
`,T=e(l)`
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
`,B=e(c)`
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
`,F=e(h)`
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
`,a=e(o)`
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
`,C=()=>{const[t,r]=s.useState(!1);return i.jsx(f,{children:i.jsx(b,{children:i.jsx(m,{children:i.jsxs(w,{children:[i.jsx(u,{children:"Hawk"}),i.jsx(j,{children:"Nature's Architects and Stingers"}),i.jsx(y,{children:"Take flight with the majestic hawks, rulers of the skies, as we explore their keen eyesight, breathtaking aerial maneuvers, and vital role in maintaining ecological balance."}),i.jsxs(v,{children:[i.jsxs(z,{children:[i.jsx(H,{children:"Danger rating 4/10"}),i.jsx(I,{onClick:()=>r(!t),children:t?i.jsx(A,{}):i.jsx($,{})})]}),i.jsxs(S,{isVisible:t,children:[i.jsx(n,{children:"Their powerful talons and beaks are designed for capturing and consuming various prey."}),i.jsx(n,{children:"Some hawk species migrate over long distances, demonstrating remarkable navigation skills."}),i.jsx(n,{children:"Various species of hawks exhibit diverse hunting strategies, from ambush tactics to cooperative hunting."}),i.jsx(n,{children:"Courtship displays and rituals are common among hawks, emphasizing social behaviors."}),i.jsx(n,{children:"Hawks are known for their impressive aerial acrobatics and soaring flight patterns."}),i.jsx(n,{children:"Adaptability to various habitats, from forests to open fields, contributes to their widespread distribution."}),i.jsx(n,{children:"Conservation efforts are crucial to protecting certain hawk species facing habitat loss and other threats."})]})]}),i.jsxs(R,{children:[i.jsx(a,{to:"/wasp",children:i.jsx(T,{})}),i.jsx(a,{to:"/",children:i.jsx(B,{})}),i.jsx(a,{to:"/wolf",children:i.jsx(F,{})})]})]})})})})},N=()=>i.jsx(i.Fragment,{children:i.jsx(C,{})});export{N as default};
