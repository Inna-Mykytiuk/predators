import styled from "@emotion/styled";

import hero from "../../assets/pagesImg/predatorHero.png";

export const Hero = styled.div`
  display: flex;
  background:
  /* linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ), */ url(${hero});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  gap: 10px;
  width: 450px;
  height: 100%;
  margin-right: auto;
  align-items: center;

  @media (min-width: 768px) {
    gap: 20px;
    width: 500px;
    align-items: flex-start;
  }
  @media (min-width: 1440px) {
    gap: 30px;
    width: 800px;
    align-items: flex-start;
  }
`;

export const HeroTextMain = styled.h1`
  margin: 0;

  /* color: #a40007; */
  text-transform: uppercase;

  font-weight: bold;
  font-size: 42px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px #181717;

  @media (min-width: 768px) {
    font-size: 58px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    font-size: 120px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1.2;
  }
`;

export const HeroTextSecondary = styled.h2`
  color: #770409;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  width: 450px;
  text-align: center;
  margin: 0 auto;
  text-shadow: 1px 1px 2px #181717;

  /* @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  } */
  /* @media (min-width: 1440px) {
    font-size: 14px;
    line-height: 1.6;
  } */
`;
