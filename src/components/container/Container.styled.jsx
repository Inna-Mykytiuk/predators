import styled from "@emotion/styled";

export const MainContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 320px;
  padding: 0 10px;
  margin: 0 auto;
  /* overflow-y: auto; */

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 20px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 0 20px;
    margin: 0 auto;
  }

  @media (min-hight: 450px) {
    width: 768px;
    padding: 0 20px;
    margin: 0 auto;
    overflow-y: auto;
  }
`;
