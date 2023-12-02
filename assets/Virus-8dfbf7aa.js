import{n as e,N as s,r as o,j as i}from"./index-5d3de3bf.js";import{k as d,c as x,b as p,F as l,S as c,a as h,C as m}from"./index.esm-3f60ea7c.js";const g="/predators/assets/virusHero-4a21dbbf.png",f=e.div`
  display: flex;
  background: url(${g});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: right center;
  width: 100%;
  min-height: 100vh;
`,u=e.div`
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
`,w=e.h1`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  color: #d3371e;
  font-family: "Special Elite", cursive;

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
`,j=d`
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
`,v=e.p`
  color: #99360f;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  max-width: 350px;
  text-align: center;
  margin-left: auto;
  text-shadow: 1px 1px 2px #181717;
  text-align: start;

  @media (min-width: 768px) {
    text-align: end;
    font-size: 18px;
    max-width: 420px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
    max-width: 500px;
  }
`,k=e.div`
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
  gap: 10px;
  align-items: center;
  padding: 0 0 20px 0;
`,B=e.h3`
  font-size: 32px;
  font-weight: bold;
  color: #d3371e;
  font-family: "Special Elite", cursive;
`,R=e.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px;
  max-width: 380px;
  opacity: 0;

  color: #fff;
  -webkit-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transform: translateY(0);
  opacity: ${({isVisible:n})=>n?1:0};
  transform: ${({isVisible:n})=>n?"translateY(0)":"translateY(-20px)"};
  transition: all 0.5s;

  @media (min-width: 768px) {
    font-size: 28px;
    text-align: end;
  }
  @media (min-width: 1420px) {
    max-width: 500px;
  }
`,t=e.li`
  color: #99360f;
  font-family: "Antonio", sans-serif;
  font-size: 14px;
  font-weight: normal;
  text-align: start;

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  @media (min-width: 768px) {
    text-align: end;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`,V=e.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`,S=e(x)`
  width: 12px;
  height: 12px;

  padding: 5px;

  color: #d3371e;
  border-radius: 50%;
  border: 3px solid #d3371e;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #d3371e 0px 0px 15px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,H=e(p)`
  width: 12px;
  height: 12px;

  padding: 5px;

  color: #d3371e;
  border-radius: 50%;
  border: 3px solid #d3371e;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #d3371e 0px 0px 15px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,F=e.button`
  display: flex;
  background-color: transparent;
  outline: 0;
  margin: 0;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #d3371e;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #d3371e;

  svg {
    fill: #d3371e;
  }

  &:hover {
    color: #99360f;

    svg {
      fill: #99360f;
      border: 3px solid #99360f;
      box-shadow: #99360f 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`,I=e(l)`
  width: 12px;
  height: 12px;
  padding: 10px;

  color: #d3371e;
  border-radius: 50%;
  border: 3px solid #d3371e;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #d3371e 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,T=e(c)`
  width: 12px;
  height: 12px;
  padding: 10px;

  color: #d3371e;
  border-radius: 50%;
  border: 3px solid #d3371e;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #d3371e 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`;e(h)`
  width: 12px;
  height: 12px;

  padding: 10px;

  color: #d3371e;
  border-radius: 50%;
  border: 3px solid #d3371e;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #d3371e 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`;const a=e(s)`
  display: flex;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #d3371e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #d3371e;

  svg {
    fill: #d3371e;
  }

  &:hover,
  &:focus {
    color: #99360f;

    svg {
      fill: #99360f;
      border: 3px solid #99360f;
      box-shadow: #99360f 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`,A=()=>{const[n,r]=o.useState(!1);return i.jsx(f,{children:i.jsx(u,{children:i.jsx(m,{children:i.jsxs(b,{children:[i.jsx(w,{children:"Virus"}),i.jsx(y,{children:"Microscopic Menaces Unveiled"}),i.jsx(v,{children:"Delve into the unseen realm of microscopic menaces, where viruses and bacteria shape the course of life, challenging our understanding and resilience."}),i.jsxs(k,{children:[i.jsxs(z,{children:[i.jsx(B,{children:"Danger rating 10/10"}),i.jsx(F,{onClick:()=>r(!n),children:n?i.jsx(S,{}):i.jsx(H,{})})]}),i.jsxs(R,{isVisible:n,children:[i.jsx(t,{children:"Viruses are not classified as living organisms but consist of genetic material encased in a protein coat."}),i.jsx(t,{children:"Bacteria are single-celled organisms playing vital roles in ecological processes, including nutrient cycling."}),i.jsx(t,{children:"Viruses hijack host cells to replicate, causing diseases in animals, plants, and bacteria."}),i.jsx(t,{children:"Bacteria can form resilient structures called endospores, allowing them to survive harsh conditions."}),i.jsx(t,{children:"Both viruses and bacteria are crucial for human health, contributing to the microbiome and immune system development."}),i.jsx(t,{children:"Bacteria can exchange genetic material through horizontal gene transfer, contributing to their adaptability."}),i.jsx(t,{children:"Viruses exhibit a wide range of shapes and structures, from simple spheres to complex helical forms."}),i.jsx(t,{children:"The study of viruses and bacteria is essential in fields such as medicine, biotechnology, and environmental science. scales."})]})]}),i.jsxs(V,{children:[i.jsx(a,{to:"/snake",children:i.jsx(I,{})}),i.jsx(a,{to:"/",children:i.jsx(T,{})})]})]})})})})},E=()=>i.jsx(i.Fragment,{children:i.jsx(A,{})});export{E as default};
