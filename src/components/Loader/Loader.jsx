import styled, { keyframes } from "styled-components";

const ContainerLoader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  from {
    transform: rotate(0) scale(1, 1);
    filter: hue-rotate(-60deg);
  }
  60% {
    transform: rotate(360deg) scale(0.8, 0.8);
    filter: hue-rotate(10deg);
  }
  to {
    transform: rotate(720deg) scale(1, 1);
    filter: hue-rotate(-60deg);
  }
`;

const colorMixin = (color) => `
  border-color: ${color};
`;

const PreloaderContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  animation: ${rotationAnimation} 2.5s infinite normal linear;
  transform-origin: 50% 50%;
`;

const PreloaderItem = styled.div`
  position: absolute;
  border-style: solid;
  border: 1px solid transparent;
  border-radius: 43%; // or 50%
  border-width: 5px 0 0 0;
  width: 100%;
  height: 100%;
`;

const PreloaderOne = styled(PreloaderItem)`
  ${colorMixin("#D50000")}
  transform: rotate(0);
`;

const PreloaderTwo = styled(PreloaderItem)`
  ${colorMixin("#FF1744")}
  transform: rotate(120deg);
`;

const PreloaderThree = styled(PreloaderItem)`
  ${colorMixin("#FF5252")}
  transform: rotate(240deg);
`;

const Loader = () => {
  return (
    <ContainerLoader>
      <PreloaderContainer>
        <PreloaderOne />
        <PreloaderTwo />
        <PreloaderThree />
      </PreloaderContainer>
    </ContainerLoader>
  );
};

export default Loader;
