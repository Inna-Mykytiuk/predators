// import React from "react";
import Container from "../container/Container";
import { ColoredHeroText } from "../ColoredHeroText/ColoredHeroTex";
import {
  ContentWrapper,
  // HeroTextMain,
  // HeroTextSecond,
  HeroTextSecondary,

  // SpanText,
  // TitleBlock,
  // TextShadow,
} from "./HeroSection.styled";
import { Navigation } from "../Navigation/Navigation";

const HeroSection = () => {
  return (
    <Container>
      <ContentWrapper>
        <div>
          <ColoredHeroText color='#a40007'>Predators</ColoredHeroText>
          {/* <h1 className='text-shadow'> -- of the Earth -- </h1> */}

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

export default HeroSection;
