import {
  ContentWrapper,
  HeroTextSecondary,
  TextShadow,
  HeroTextMain,
  MainContainer,
} from "./HeroSection.styled";
import { Navigation } from "../Navigation/Navigation";

export const HeroSection = () => {
  return (
    <MainContainer>
      <ContentWrapper>
        <HeroTextMain>Predators</HeroTextMain>
        <TextShadow>-- of the Earth --</TextShadow>
        <HeroTextSecondary>
          Welcome to the captivating realm of Earth&apos;s most formidable and
          fascinating predators. In a world where each species unveils its
          unique prowess.
        </HeroTextSecondary>
        <Navigation />
      </ContentWrapper>
    </MainContainer>
  );
};
