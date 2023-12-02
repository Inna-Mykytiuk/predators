import{N as o,r as s,j as e}from"./index-4a3d67dc.js";import{n as i,k as d,c as p,b as x,F as h,S as l,a as c,C as m}from"./index.esm-8a1dd60a.js";const g="/predators/assets/sharkHero-62539fec.png",f=i.div`
  display: flex;
  background: url(${g});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: left center;
  width: 100%;
  min-height: 100vh;
`,b=i.div`
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
`,w=i.div`
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
`,u=i.h1`
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
`,y=d`
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`,k=i.h2`
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
`,j=i.p`
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
`,v=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 20px;
  }
`,z=i.div`
  display: flex;
  padding: 0 0 20px 0;
  gap: 10px;
  align-items: center;
`,S=i.h3`
  font-size: 22px;
  font-weight: bold;
  color: #e1d05e;
  font-family: "Playfair Display", serif;
`,R=i.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
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
  transition: all 0.5s;

  @media (min-width: 768px) {
    max-width: 600px;
    font-size: 28px;
  }
  @media (min-width: 1420px) {
    max-width: 700px;
  }
`,n=i.li`
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
`,H=i.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  /* @media (min-width: 768px) {
    margin-top: 30px;
  } */
`,I=i(p)`
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
`,T=i(x)`
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
`,A=i.button`
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
`,B=i(h)`
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
`,F=i(l)`
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
`,$=i(c)`
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
`,r=i(o)`
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
`,D=()=>{const[t,a]=s.useState(!1);return e.jsx(f,{children:e.jsx(b,{children:e.jsx(m,{children:e.jsxs(w,{children:[e.jsx(k,{children:"Sovereigns of the Sea"}),e.jsx(u,{children:"Shark"}),e.jsx(j,{children:"Sharks embody a mysterious power that echoes through the depths, underscoring the urgent call for conservation to protect their enigmatic domain."}),e.jsxs(v,{children:[e.jsxs(z,{children:[e.jsx(S,{children:"Danger rating 8/10"}),e.jsx(A,{onClick:()=>a(!t),children:t?e.jsx(I,{}):e.jsx(T,{})})]}),e.jsxs(R,{isVisible:t,children:[e.jsx(n,{children:"Sharks are a diverse group of marine predators, boasting over 500 species with varied sizes, shapes, and behaviors."}),e.jsx(n,{children:"Sharks possess an extraordinary ability to sense electrical fields, aiding them in locating prey and navigating their surroundings."}),e.jsx(n,{children:"The hammerhead shark's unique head shape provides enhanced 360-degree vision and improved hunting efficiency."}),e.jsx(n,{children:"Certain shark species, such as the great white, are renowned for their extensive migrations, covering thousands of miles in open ocean."}),e.jsx(n,{children:"Equipped with multiple rows of teeth, sharks continuously replace and shed teeth throughout their lives."}),e.jsx(n,{children:"Sharks boast a prehistoric lineage, predating the existence of dinosaurs by hundreds of millions of years."}),e.jsx(n,{children:"The decline in shark populations poses significant threats to marine ecosystems, underscoring the urgency of conservation efforts."})]})]}),e.jsxs(H,{children:[e.jsx(r,{to:"/tiger",children:e.jsx(B,{})}),e.jsx(r,{to:"/",children:e.jsx(F,{})}),e.jsx(r,{to:"/human",children:e.jsx($,{})})]})]})})})})},C=()=>e.jsx(e.Fragment,{children:e.jsx(D,{})});export{C as default};
