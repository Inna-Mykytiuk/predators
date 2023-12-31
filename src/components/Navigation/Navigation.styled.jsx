import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import {
  GiWaspSting,
  GiHawkEmblem,
  GiSnake,
  GiWolfHead,
  GiTigerHead,
  GiSharkFin,
  GiBowman,
} from "react-icons/gi";
import { RiVirusLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { SiGooglehome } from "react-icons/si";
import { FaArrowUp } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    padding: 60px 0;
  }
`;

export const NavList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NavBlock = styled.ul`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (min-width: 768px) {
    gap: 30px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1440px) {
    gap: 30px;
  }
`;

export const NavListItem = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* margin-top: auto; */
`;

export const GoBackLink = styled(NavLink)`
  display: flex;
  font-family: "Montserrat", sans-serif;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #770409;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  svg {
    fill: #770409;
  }

  /* &.active, */
  &:hover,
  &:focus {
    color: #a40007;

    svg {
      fill: #a40007;
      border: 3px solid #a40007;
      box-shadow: rgb(225 85 91) 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const ButtonFilters = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  color: #000;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 2px 2px 5px #000000;
  &:hover {
    color: #a40007;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  font-family: "Montserrat", sans-serif;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #770409;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  svg {
    fill: #770409;
  }

  /* &.active, */
  &:hover,
  &:focus {
    color: #a40007;

    svg {
      fill: #a40007;
      border: 3px solid #a40007;
      box-shadow: rgb(225 85 91) 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;

//Icons------------------------------------------

export const WaspIcon = styled(GiWaspSting)`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 1440px) {
    width: 50px;
    height: 50px;
  }
`;
export const HawkIcon = styled(GiHawkEmblem)`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 1440px) {
    width: 50px;
    height: 50px;
  }
`;
export const SnakeIcon = styled(GiSnake)`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 1440px) {
    width: 50px;
    height: 50px;
  }
`;
export const WolfIcon = styled(GiWolfHead)`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 1440px) {
    width: 50px;
    height: 50px;
  }
`;
export const TigerIcon = styled(GiTigerHead)`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 1440px) {
    width: 50px;
    height: 50px;
  }
`;
export const SharkIcon = styled(GiSharkFin)`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 1440px) {
    width: 50px;
    height: 50px;
  }
`;
export const HumanIcon = styled(GiBowman)`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 1440px) {
    width: 50px;
    height: 50px;
  }
`;
export const VirusIcon = styled(RiVirusLine)`
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 1440px) {
    width: 50px;
    height: 50px;
  }
`;

export const GoBackIcon = styled(FaArrowLeft)`
  width: 12px;
  height: 12px;

  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;

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

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;

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
  margin-left: 10px;

  padding: 10px;

  color: #770409;
  border-radius: 50%;
  border: 3px solid #770409;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(169 70 53) 0px 0px 15px;

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
  box-shadow: rgb(169 70 53) 0px 0px 15px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 0;
  }
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
  box-shadow: rgb(169 70 53) 0px 0px 15px;

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
  font-family: "Montserrat", sans-serif;
  background-color: transparent;
  outline: 0;
  margin: 0;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #ff6000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  text-shadow: rgba(255, 255, 255, 0.1) -1px -1px 1px,
    rgba(0, 0, 0, 0.5) 1px 1px 1px;
  text-shadow: 2px 2px 5px #1d1e26;

  svg {
    fill: #ff6000;
  }

  /* &.active, */
  &:hover {
    color: #770409;

    svg {
      fill: #770409;
      border: 3px solid #770409;
      box-shadow: rgb(225 85 91) 0px 0px 15px;
    }
  }

  @media (min-width: 500px) {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;
