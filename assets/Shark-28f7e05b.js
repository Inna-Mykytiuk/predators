import{N as o,r as s,j as e}from"./index-734f56b1.js";import{C as d}from"./Container-b48efed6.js";import{n as t,k as p,c as x,b as l,F as h,S as c,a as m}from"./index.esm-076da570.js";const g="/predators/assets/sharkHero1-942c43d2.png",f=t.div`
  display: flex;
  background: url(${g});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: right center;
  width: 100%;
  height: 100%;
`,b=t.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`,u=t.div`
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
`,y=t.h1`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  color: #e1d05e;
  font-family: "Playfair Display", serif;

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
`,k=p`
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`,j=t.h2`
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  line-height: 1.2;
  background: linear-gradient(90deg, #398c9b, #e1d05e, #398c9b);
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
`,v=t.p`
  color: #76aab3;
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
`,z=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 20px;
  }
`,S=t.div`
  display: flex;
  padding: 0 0 20px 0;
  gap: 10px;
  align-items: center;
`,R=t.h3`
  font-size: 22px;
  font-weight: bold;
  color: #e1d05e;
  font-family: "Playfair Display", serif;
`,$=t.ul`
  display: flex;
  flex-direction: column;
  gap: ${({isVisible:i})=>i?"10px":"0"};
  padding: ${({isVisible:i})=>i?"0 10px":"0"};
  max-width: 400px;

  color: #fff;
  -webkit-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transform: translateY(-20px);
  opacity: ${({isVisible:i})=>i?1:0};
  transform: ${({isVisible:i})=>i?"translateY(0)":"translateY(-20px)"};

  height: ${({isVisible:i})=>i?"240px":"30px"};
  margin-bottom: ${({isVisible:i})=>i?"20px":"0"};
  transition: all 0.5s;

  overflow-y: scroll;
  ::-webkit-scrollbar-thumb {
    background-color: #76aab3;
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
    height: ${({isVisible:i})=>i?"210px":"30px"};
  }
  @media (min-width: 1420px) {
    max-width: 700px;
    height: ${({isVisible:i})=>i?"100%":"30px"};
  }
`,n=t.li`
  color: #76aab3;
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
`,H=t.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  /* @media (min-width: 768px) {
    margin-top: 30px;
  } */
`,I=t(x)`
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
`,T=t(l)`
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
`,A=t.button`
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
`,B=t(h)`
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
`,F=t(c)`
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
`,D=t(m)`
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
`,r=t(o)`
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
`,G=()=>{const[i,a]=s.useState(!1);return e.jsx(f,{children:e.jsx(u,{children:e.jsx(d,{children:e.jsxs(b,{children:[e.jsxs(w,{isVisible:!i,children:[e.jsx(j,{children:"Sovereigns of the Sea"}),e.jsx(y,{children:"Shark"}),e.jsx(v,{children:"Sharks embody a mysterious power that echoes through the depths, underscoring the urgent call for conservation to protect their enigmatic domain."}),e.jsxs(z,{children:[e.jsxs(S,{children:[e.jsx(R,{children:"Danger rating 8/10"}),e.jsx(A,{onClick:()=>a(!i),children:i?e.jsx(I,{}):e.jsx(T,{})})]}),e.jsxs($,{isVisible:i,children:[e.jsx(n,{children:"Sharks are a diverse group of marine predators, boasting over 500 species with varied sizes, shapes, and behaviors."}),e.jsx(n,{children:"Sharks possess an extraordinary ability to sense electrical fields, aiding them in locating prey and navigating their surroundings."}),e.jsx(n,{children:"The hammerhead shark's unique head shape provides enhanced 360-degree vision and improved hunting efficiency."}),e.jsx(n,{children:"Certain shark species, such as the great white, are renowned for their extensive migrations, covering thousands of miles in open ocean."}),e.jsx(n,{children:"Equipped with multiple rows of teeth, sharks continuously replace and shed teeth throughout their lives."}),e.jsx(n,{children:"Sharks boast a prehistoric lineage, predating the existence of dinosaurs by hundreds of millions of years."}),e.jsx(n,{children:"The decline in shark populations poses significant threats to marine ecosystems, underscoring the urgency of conservation efforts."})]})]})]}),e.jsxs(H,{children:[e.jsx(r,{to:"/tiger",children:e.jsx(B,{})}),e.jsx(r,{to:"/",children:e.jsx(F,{})}),e.jsx(r,{to:"/human",children:e.jsx(D,{})})]})]})})})})},E=()=>e.jsx(e.Fragment,{children:e.jsx(G,{})});export{E as default};
