import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { keyframes } from "@emotion/react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { SiGooglehome } from "react-icons/si";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import tigerHero from "../../assets/pagesImg/tigerHero.png";

export const TigerHero = styled.div`
  display: flex;
  background: url(${tigerHero});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: right center;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

export const TigerWrapper = styled.div`
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
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  /* overflow-y: ${({ isVisible }) => (isVisible ? "hidden" : "auto")}; */

  width: 100%;
  /* height: 100%; */
  margin-left: auto;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
  @media (min-width: 1440px) {
    align-items: flex-end;
  }
`;

export const HeroTextMain = styled.h1`
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
`;

export const flicker = keyframes`
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`;

export const HeroTextSubtitle = styled.h2`
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
  animation: ${flicker} 4s linear infinite;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const HeroTextSecondary = styled.p`
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
`;

export const RaitingWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 10px;

  @media (min-width: 768px) {
    align-items: flex-end;
    margin-top: 20px;
  }
`;
export const RaitingWrapperBtn = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 0 20px 0;
`;

export const RaitingTitle = styled.h3`
  font-size: 32px;
  font-weight: bold;
  color: #ff6000;
  font-family: "Caveat", cursive;
`;

export const RaitingList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ isVisible }) => (isVisible ? "10px" : "0")};
  padding: ${({ isVisible }) => (isVisible ? "0 10px" : "0")};
  max-width: 380px;
  opacity: 0;

  color: #fff;
  -webkit-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transform: translateY(0);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(-20px)"};
  /* overflow: ${({ isVisible }) => (isVisible ? "visible" : "hidden")}; */
  height: ${({ isVisible }) => (isVisible ? "170px" : "30px")};
  margin-bottom: ${({ isVisible }) => (isVisible ? "20px" : "0")};
  transition: all 0.5s;

  overflow-y: scroll;
  ::-webkit-scrollbar-thumb {
    background-color: #99360f;
    border: 2px solid transparent;
    border-radius: 8px;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  /* @media (min-width: 650px) {
    height: ${({ isVisible }) => (isVisible ? "150px" : "30px")};
  } */

  @media (min-width: 768px) {
    font-size: 28px;
    text-align: end;
    height: ${({ isVisible }) => (isVisible ? "270px" : "30px")};
  }
  @media (min-width: 1420px) {
    max-width: 500px;
    height: ${({ isVisible }) => (isVisible ? "100%" : "30px")};
  }
`;

export const RaitingListItem = styled.li`
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
`;

export const TigerBtnBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const RaitingIconUp = styled(FaArrowUp)`
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
`;

export const RaitingIconDown = styled(FaArrowDown)`
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
`;

export const RaitingBtn = styled.button`
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
`;

export const GoBackIcon = styled(FaArrowLeft)`
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
`;

export const GoHomeIcon = styled(SiGooglehome)`
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
`;

export const GoNextIcon = styled(FaArrowRight)`
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
`;

export const GoBackLink = styled(NavLink)`
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
`;
