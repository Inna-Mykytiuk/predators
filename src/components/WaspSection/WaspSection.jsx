import { WaspHero } from "./WaspSection.styled";
import Container from "../container/Container";
import { WaspWrapper, TextWrapper } from "./WaspSection.styled";
import { ColoredHeroText } from "../ColoredHeroText/ColoredHeroTex";

export const WaspSection = () => {
  return (
    <WaspHero>
      <Container>
        <WaspWrapper>
          <TextWrapper>
            <ColoredHeroText color='#E26A2C'>Wasp</ColoredHeroText>
            {/* <p>-- of the Earth --</p> */}

            <p>
              Welcome to the captivating realm of Earth&apos;s most formidable
              and fascinating predators. In a world where each species unveils
              its unique prowess.
            </p>
          </TextWrapper>
        </WaspWrapper>
      </Container>
    </WaspHero>
  );
};
