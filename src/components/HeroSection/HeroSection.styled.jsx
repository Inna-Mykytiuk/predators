import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

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
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */

  gap: 10px;
  width: 100%;
  /* height: 100%; */
  margin-right: auto;
  align-items: center;
  padding: 30px 0;

  @media (min-width: 768px) {
    gap: 20px;
    width: 450px;
    align-items: center;
    padding: 100px 0 0 0;
  }
  @media (min-width: 1440px) {
    gap: 30px;
    width: 800px;
    align-items: center;
  }
`;

export const HeroTextMain = styled.h1`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  color: #a40007;
  font-family: "Arvo", sans-serif;

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
  max-width: 450px;
  text-align: center;
  /* margin: 0 auto; */
  text-shadow: 1px 1px 2px #181717;
  margin: 20px 0 40px;

  @media (min-width: 768px) {
    max-width: 550px;
    font-size: 18px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
    line-height: 1.6;
  }
`;

export const flicker = keyframes`
  0% {
    opacity: 0.5;
    text-shadow: 2px 2px 10px #a40007;
  }
  100% {
    opacity: 1;
    text-shadow: 2px 2px 20px #a40007;
  }
`;

export const TextShadow = styled.div`
  font-style: bold;
  font-size: 24px;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: #df8080;
  -webkit-text-stroke-width: 1px;
  text-shadow: 2px 2px 10px $blue;
  transition: all 0.5s ease-in-out;
  text-align: center;
  letter-spacing: 0.2em;
  animation: ${flicker} 0.5s ease-in-out infinite alternate;

  &:hover {
    color: #fff;
  }

  /* @media (min-width: 768px) {
    font-size: 32px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 40px;
    line-height: 1.6;
  } */
`;
