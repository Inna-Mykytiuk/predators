import styled from "@emotion/styled";
// import { keyframes } from "@emotion/react";

import waspHero from "../../assets/pagesImg/waspHero.png";

export const WaspHero = styled.div`
  display: flex;
  background:
  /* linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ), */ url(${waspHero});

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

export const WaspWrapper = styled.div`
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
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  gap: 10px;
  width: 100%;
  height: 100%;
  margin-left: auto;
`;
