import{N as o,r as s,j as i}from"./index-734f56b1.js";import{C as p}from"./Container-b48efed6.js";import{n as t,k as x,c as d,b as l,F as c,S as h,a as m}from"./index.esm-076da570.js";const g="/predators/assets/snakeHero-dff56b17.png",f=t.div`
  display: flex;
  background: url(${g});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: left center;
  width: 100%;
  height: 100%;
`,b=t.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`,w=t.div`
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

  width: 100%;
  margin-right: auto;
`,k=t.h1`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  color: #e5a52a;
  font-family: "Ephesis", cursive;

  font-weight: bold;
  font-size: 48px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px #e5a52a;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 30px;
    font-size: 80px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    margin-bottom: 20px;
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
`,j=t.h2`
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  line-height: 1.2;
  background: linear-gradient(90deg, #e5a52a, #789146, #e5a52a);
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
`,v=t.p`
  color: #789146;
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
    max-width: 400px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    max-width: 400px;
  }
`,z=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;

  @media (min-width: 768px) {
    /* align-items: flex-end; */
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
  color: #e5a52a;
  font-family: "Dancing Script", cursive;
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
  transform: translateY(0);
  opacity: ${({isVisible:e})=>e?1:0};
  transform: ${({isVisible:e})=>e?"translateY(0)":"translateY(-20px)"};

  height: ${({isVisible:e})=>e?"250px":"30px"};
  margin-bottom: ${({isVisible:e})=>e?"20px":"0"};
  transition: all 0.5s;

  overflow-y: scroll;
  ::-webkit-scrollbar-thumb {
    background-color: #789146;
    border: 2px solid transparent;
    border-radius: 8px;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  @media (min-width: 768px) {
    max-width: 500px;
    font-size: 28px;
    height: ${({isVisible:e})=>e?"240px":"30px"};
  }
  @media (min-width: 1420px) {
    max-width: 700px;
    height: ${({isVisible:e})=>e?"100%":"30px"};
  }
`,a=t.li`
  color: #789146;
  font-family: "Arvo", sans-serif;
  font-size: 12px;
  font-weight: normal;

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  @media (min-width: 768px) {
    /* font-size: 16px; */
    /* text-align: end; */
  }
  @media (min-width: 1440px) {
    font-size: 14px;
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
`,I=t(d)`
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
`,A=t(l)`
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
`,B=t.button`
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
`,F=t(c)`
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
`,T=t(h)`
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
`,D=t(m)`
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
`,n=t(o)`
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
`,G=()=>{const[e,r]=s.useState(!1);return i.jsx(f,{children:i.jsx(w,{children:i.jsx(p,{children:i.jsxs(b,{children:[i.jsxs(u,{isVisible:!e,children:[i.jsx(j,{children:"Masters of Stealth and Precision"}),i.jsx(k,{children:"Snake"}),i.jsx(v,{children:"Slither into the enigmatic world of snakes, where limbless wonders navigate silently, employing lethal tactics and serving as guardians of ecological balance."}),i.jsxs(z,{children:[i.jsxs(S,{children:[i.jsx(R,{children:"Danger rating 6/10"}),i.jsx(B,{onClick:()=>r(!e),children:e?i.jsx(I,{}):i.jsx(A,{})})]}),i.jsxs($,{isVisible:e,children:[i.jsx(a,{children:"Snakes lack limbs but are incredibly agile, using their bodies to navigate various environments."}),i.jsx(a,{children:"Venomous snakes have specialized fangs for injecting venom, while non-venomous snakes rely on constriction for hunting."}),i.jsx(a,{children:"Some snake species have heat-sensing pits, enabling them to detect infrared radiation and locate warm-blooded prey."}),i.jsx(a,{children:"The iconic cobra hood is formed by elongated ribs and a web of skin, creating an intimidating display."}),i.jsx(a,{children:"Snakes exhibit a wide range of colors and patterns, often serving as camouflage in their respective habitats."}),i.jsx(a,{children:"Despite their often-misunderstood reputation, most snakes are harmless to humans, and snakebites are relatively rare."}),i.jsx(a,{children:"Snakes utilize a unique jaw structure that allows them to consume prey much larger than their head."}),i.jsx(a,{children:"Snakes shed their skin regularly, a process known as ecdysis, allowing for growth and removing parasites."})]})]})]}),i.jsxs(H,{children:[i.jsx(n,{to:"/wolf",children:i.jsx(F,{})}),i.jsx(n,{to:"/",children:i.jsx(T,{})}),i.jsx(n,{to:"/tiger",children:i.jsx(D,{})})]})]})})})})},E=()=>i.jsx(i.Fragment,{children:i.jsx(G,{})});export{E as default};
