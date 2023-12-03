import{N as o,r as s,j as i}from"./index-6f6ab6ec.js";import{C as d}from"./Container-ed4730b4.js";import{n as t,k as x,c as p,b as l,F as c,S as h,a as f}from"./index.esm-19791114.js";const g="/predators/assets/tigerHero-5590036e.png",m=t.div`
  display: flex;
  background: url(${g});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: right center;
  width: 100%;
  height: 100%;
`,w=t.div`
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
`,u=t.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  overflow-y: ${({isVisible:e})=>e?"hidden":"auto"};

  width: 100%;
  /* height: 100%; */
  margin-left: auto;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
  @media (min-width: 1440px) {
    align-items: flex-end;
  }
`,j=t.h1`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  color: #ff6000;
  font-family: "Caveat", cursive;
  padding: 0 20px 0 0;

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
`,y=x`
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`,k=t.h2`
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
  animation: ${y} 4s linear infinite;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`,z=t.p`
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
`,v=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 10px;

  @media (min-width: 768px) {
    align-items: flex-end;
    margin-top: 20px;
  }
`,T=t.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 0 20px 0;
`,R=t.h3`
  font-size: 32px;
  font-weight: bold;
  color: #ff6000;
  font-family: "Caveat", cursive;
`,$=t.ul`
  display: flex;
  flex-direction: column;
  gap: ${({isVisible:e})=>e?"10px":"0"};
  padding: ${({isVisible:e})=>e?"0 10px":"0"};
  max-width: 380px;
  opacity: 0;

  color: #fff;
  -webkit-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transform: translateY(0);
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateY(0)":"translateY(-20px)"};
  height: ${({isVisible:e})=>e?"100%":"30px"};
  /* overflow: ${({isVisible:e})=>e?"visible":"hidden"}; */
  margin-bottom: ${({isVisible:e})=>e?"20px":"0"};
  transition: all 0.5s;

  @media (min-width: 768px) {
    font-size: 28px;
    text-align: end;
  }
  @media (min-width: 1420px) {
    max-width: 500px;
  }
`,n=t.li`
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
`,S=t.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`,F=t(p)`
  width: 12px;
  height: 12px;

  padding: 5px;

  color: #ff6000;
  border-radius: 50%;
  border: 3px solid #ff6000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #ff6000 0px 0px 15px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,H=t(l)`
  width: 12px;
  height: 12px;

  padding: 5px;

  color: #ff6000;
  border-radius: 50%;
  border: 3px solid #ff6000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #ff6000 0px 0px 15px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,I=t.button`
  display: flex;
  background-color: transparent;
  outline: 0;
  margin: 0;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #ff6000;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #ff6000;

  svg {
    fill: #ff6000;
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
`,B=t(c)`
  width: 12px;
  height: 12px;
  padding: 10px;

  color: #ff6000;
  border-radius: 50%;
  border: 3px solid #ff6000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #ff6000 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,A=t(h)`
  width: 12px;
  height: 12px;
  padding: 10px;

  color: #ff6000;
  border-radius: 50%;
  border: 3px solid #ff6000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #ff6000 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
`,C=t(f)`
  width: 12px;
  height: 12px;

  padding: 10px;

  color: #ff6000;
  border-radius: 50%;
  border: 3px solid #ff6000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: #ff6000 0px 0px 15px;

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

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #ff6000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #ff6000;

  svg {
    fill: #ff6000;
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
`,E=()=>{const[e,r]=s.useState(!1);return i.jsx(m,{children:i.jsx(b,{children:i.jsx(d,{children:i.jsxs(w,{children:[i.jsxs(u,{isVisible:!e,children:[i.jsx(j,{children:"Tiger"}),i.jsx(k,{children:"Striking Elegance, Formidable Power"}),i.jsx(z,{children:"Embark on a journey through the jungles and grasslands where tigers, with their striking beauty and unparalleled hunting prowess, reign as the kings of stealth and power."}),i.jsxs(v,{children:[i.jsxs(T,{children:[i.jsx(R,{children:"Danger rating 7/10"}),i.jsx(I,{onClick:()=>r(!e),children:e?i.jsx(F,{}):i.jsx(H,{})})]}),i.jsxs($,{isVisible:e,children:[i.jsx(n,{children:"Tigers are the largest big cats, known for their distinctive orange coat and dark stripes."}),i.jsx(n,{children:"Exceptional swimmers, tigers are uncharacteristically comfortable in water compared to other cats."}),i.jsx(n,{children:"Tigers have unique stripe patterns, allowing for individual identification, similar to human fingerprints."}),i.jsx(n,{children:"Despite their size, tigers are incredibly agile and can leap great distances."}),i.jsx(n,{children:"Tigers have a wide range of vocalizations, including roars, chuffs, and growls, used for communication."}),i.jsx(n,{children:"The whisker spots on a tiger's face help them navigate and judge distances in the dark."}),i.jsx(n,{children:"Tigers are territorial animals, marking their boundaries with scent markings and scratches."}),i.jsx(n,{children:"The tiger population has faced significant threats, primarily due to habitat loss and poaching for their body parts."})]})]})]}),i.jsxs(S,{children:[i.jsx(a,{to:"/snake",children:i.jsx(B,{})}),i.jsx(a,{to:"/",children:i.jsx(A,{})}),i.jsx(a,{to:"/shark",children:i.jsx(C,{})})]})]})})})})},D=()=>i.jsx(i.Fragment,{children:i.jsx(E,{})});export{D as default};
