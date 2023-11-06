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
  /* font-family: "Anton", sans-serif; */
  font-family: "Arvo", serif;
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
    width: 700px;
    align-items: flex-start;
  }
`;

export const HeroTextMain = styled.h1`
  font-family: "Arvo", serif;
  margin: 0;

  /* color: #a40007; */
  text-transform: uppercase;

  font-weight: bold;
  font-size: 42px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px #181717;
  /* text-shadow: (0 1px 0.5px rgba(0, 0, 20, 1)); */

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

export const TextShadow = styled.div`
  font-style: bold;
  font-size: 40px;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: #fff;
  -webkit-text-stroke-width: 1px;
  text-shadow: 2px 2px 10px $blue;
  transition: all 0.5s ease-in-out;
  text-align: center;
  letter-spacing: 0.2em;
  animation: flicker 0.5s ease-in-out infinite alternate;

  &:hover {
    color: #fff;
  }
`;

export const HeroTextSecond = styled.h1`
  font-family: "Antonio", sans-serif;
  margin: 0;
  color: #fff;

  font-weight: bold;
  font-size: 42px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px #5c5757;

  @media (min-width: 768px) {
    font-size: 84px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    font-size: 100px;
    line-height: 1.2;
    font-weight: 900;
  }
`;

export const HeroTextSecondary = styled.h2`
  color: #b0bbd6;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
    line-height: 1.6;
  }
`;
