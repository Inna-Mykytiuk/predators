// import React from "react";
import Container from "../container/Container";
import { ColoredHeroText } from "../ColoredHeroText/ColoredHeroTex";
import {
  ContentWrapper,
  HeroTextSecondary,
  TextShadow,
} from "./HeroSection.styled";
import { Navigation } from "../Navigation/Navigation";

export const HeroSection = () => {
  return (
    <Container>
      <ContentWrapper>
        <div>
          <ColoredHeroText color='#a40007'>Predators</ColoredHeroText>
          <TextShadow>-- of the Earth --</TextShadow>

          <HeroTextSecondary>
            Welcome to the captivating realm of Earth&apos;s most formidable and
            fascinating predators. In a world where each species unveils its
            unique prowess.
          </HeroTextSecondary>
        </div>
        <Navigation />
      </ContentWrapper>
    </Container>
  );
};
