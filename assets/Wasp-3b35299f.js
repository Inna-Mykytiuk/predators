import{n as t,j as e}from"./index-ac700cb5.js";import{C as i,b as a}from"./ColoredHeroTex-056f34c5.js";const r="/predators/assets/waspHero-b98fe602.png",n=t.div`
  display: flex;
  background:
  /* linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ), */ url(${r});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`,s=t.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  gap: 10px;
  width: 100%;
  height: 100%;
  margin-right: auto;
  align-items: center;

  @media (min-width: 768px) {
    gap: 20px;
    /* width: 500px; */
    /* align-items: center; */
  }
  @media (min-width: 1440px) {
    gap: 30px;
    width: 100%;
  }
`,o=t.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  gap: 10px;
  width: 100%;
  height: 100%;
  margin-left: auto;
`,d=()=>e.jsx(n,{children:e.jsx(i,{children:e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(a,{color:"#a40007",children:"Wasp"}),e.jsx("p",{children:"Welcome to the captivating realm of Earth's most formidable and fascinating predators. In a world where each species unveils its unique prowess."})]})})})}),c=()=>e.jsx(d,{});export{c as default};
