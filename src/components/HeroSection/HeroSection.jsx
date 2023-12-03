import Container from "../container/Container";

import {
  ContentWrapper,
  HeroTextSecondary,
  TextShadow,
  HeroTextMain,
} from "./HeroSection.styled";
import { Navigation } from "../Navigation/Navigation";

export const HeroSection = () => {
  return (
    <Container>
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
    </Container>
  );
};
