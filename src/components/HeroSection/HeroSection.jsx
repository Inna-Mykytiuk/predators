import React from "react";
import Container from "../container/Container";
import { ColoredHeroText } from "../ColoredHeroText/ColoredHeroTex";
import {
  ContentWrapper,
  HeroTextMain,
  // HeroTextSecond,
  HeroTextSecondary,
  // SpanText,
  // TitleBlock,
  TextShadow,
} from "./HeroSection.styled";
import { Navigation } from "../Navigation/Navigation";

const HeroSection = () => {
  return (
    <Container>
      <ContentWrapper>
        <div>
          <ColoredHeroText color='#a40007'>Predators</ColoredHeroText>
          <h1 class='text-shadow'> -- of the Earth -- </h1>
          <HeroTextSecondary>
            Welcome to Car Rental Service! Our app is your gateway to unlocking
            the road to adventure with hassle-free car rentals.
          </HeroTextSecondary>
        </div>
        <Navigation />
      </ContentWrapper>
    </Container>
  );
};

export default HeroSection;
