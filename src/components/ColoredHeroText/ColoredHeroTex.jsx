import { HeroTextMain } from "../HeroSection/HeroSection.styled";

export const ColoredHeroText = ({ color, children }) => (
  <HeroTextMain style={{ color }}>{children}</HeroTextMain>
);
