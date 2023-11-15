import Container from "../container/Container";
import {
  WaspHero,
  WaspWrapper,
  TextWrapper,
  HeroTextSecondary,
} from "./WaspSection.styled";
import { ColoredHeroText } from "../ColoredHeroText/ColoredHeroText";

export const WaspSection = () => {
  return (
    <WaspHero>
      <WaspWrapper>
        <Container>
          <TextWrapper>
            <ColoredHeroText color='#ff6000'>Wasp</ColoredHeroText>
            {/* <p>-- of the Earth --</p> */}

            <HeroTextSecondary>
              Welcome to the captivating realm of Earth&apos;s most formidable
              and fascinating predators. In a world where each species unveils
              its unique prowess.
            </HeroTextSecondary>
          </TextWrapper>
        </Container>
      </WaspWrapper>
    </WaspHero>
  );
};
