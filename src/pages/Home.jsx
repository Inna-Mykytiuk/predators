import React from "react";
// import { Navigation } from "../components/Navigation/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import { Hero } from "../components/HeroSection/HeroSection.styled";

const Home = () => {
  return (
    <Hero>
      <HeroSection />
      {/* <Navigation /> */}
    </Hero>
  );
};

export default Home;
