import React from "react";
import Container from "../container/Container";
import { ColoredHeroText } from "../ColoredHeroText/ColoredHeroTex";
import {
  ContentWrapper,
  HeroTextMain,
  HeroTextSecond,
  // HeroTextSecondary,
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
        </div>

        {/* <HeroTextSecondary>
          Welcome to Car Rental Service! Our app is your gateway to unlocking
          the road to adventure with hassle-free car rentals. Whether you're
          planning a weekend getaway or a long road trip, we've got you covered.
        </HeroTextSecondary> */}
        <Navigation />
      </ContentWrapper>
    </Container>
  );
};

export default HeroSection;
