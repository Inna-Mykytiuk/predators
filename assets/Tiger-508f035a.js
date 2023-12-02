import{n as e,N as o,r as s,j as i}from"./index-30b2cd1d.js";import{k as x,c as d,b as p,F as l,S as c,a as h,C as f}from"./index.esm-308ab81a.js";const g="/predators/assets/tigerHero-d327fef5.png",m=e.div`
  display: flex;
  background: url(${g});
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
  font-family: "Caveat", cursive;

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
`,j=x`
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`,k=e.h2`
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
`,y=e.p`
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
  padding: 0 0 20px 0;
`,T=e.h3`
  font-size: 32px;
  font-weight: bold;
  color: #ff6000;
  font-family: "Caveat", cursive;
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
`,S=e.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  /* @media (min-width: 768px) {
    margin-top: 30px;
  } */
`,F=e(d)`
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
`,H=e(p)`
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
`,I=e.button`
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
`,B=e(l)`
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
`,A=e(c)`
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
`,C=e(h)`
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
`,a=e(o)`
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
`,E=()=>{const[n,r]=s.useState(!1);return i.jsx(m,{children:i.jsx(w,{children:i.jsx(f,{children:i.jsxs(b,{children:[i.jsx(u,{children:"Tiger"}),i.jsx(k,{children:"Striking Elegance, Formidable Power"}),i.jsx(y,{children:"Embark on a journey through the jungles and grasslands where tigers, with their striking beauty and unparalleled hunting prowess, reign as the kings of stealth and power."}),i.jsxs(z,{children:[i.jsxs(v,{children:[i.jsx(T,{children:"Danger rating 5/10"}),i.jsx(I,{onClick:()=>r(!n),children:n?i.jsx(F,{}):i.jsx(H,{})})]}),i.jsxs(R,{isVisible:n,children:[i.jsx(t,{children:"Tigers are the largest big cats, known for their distinctive orange coat and dark stripes."}),i.jsx(t,{children:"Exceptional swimmers, tigers are uncharacteristically comfortable in water compared to other cats."}),i.jsx(t,{children:"Tigers have unique stripe patterns, allowing for individual identification, similar to human fingerprints."}),i.jsx(t,{children:"Despite their size, tigers are incredibly agile and can leap great distances."}),i.jsx(t,{children:"Tigers have a wide range of vocalizations, including roars, chuffs, and growls, used for communication."}),i.jsx(t,{children:"The whisker spots on a tiger's face help them navigate and judge distances in the dark."}),i.jsx(t,{children:"Tigers are territorial animals, marking their boundaries with scent markings and scratches."}),i.jsx(t,{children:"The tiger population has faced significant threats, primarily due to habitat loss and poaching for their body parts."})]})]}),i.jsxs(S,{children:[i.jsx(a,{to:"/snake",children:i.jsx(B,{})}),i.jsx(a,{to:"/",children:i.jsx(A,{})}),i.jsx(a,{to:"/shark",children:i.jsx(C,{})})]})]})})})})},D=()=>i.jsx(i.Fragment,{children:i.jsx(E,{})});export{D as default};
