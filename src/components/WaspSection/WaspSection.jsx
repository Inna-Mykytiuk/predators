import Container from "../container/Container";
import {
  WaspHero,
  WaspWrapper,
  TextWrapper,
  HeroTextMain,
  HeroTextSubtitle,
  HeroTextSecondary,
} from "./WaspSection.styled";
import {
  GoBackIcon,
  GoBackLink,
  GoNextIcon,
  BtnBlock,
} from "../Navigation/Navigation.styled";
// import { ColoredHeroText } from "../ColoredHeroText/ColoredHeroText";

export const WaspSection = () => {
  return (
    <WaspHero>
      <WaspWrapper>
        <Container>
          <TextWrapper>
            <HeroTextMain>Wasp</HeroTextMain>
            <HeroTextSubtitle>
              Nature&apos;s Architects and Stingers
            </HeroTextSubtitle>

            <HeroTextSecondary>
              Enter the intricate world of wasps, where social structures,
              stingers, and vital ecological roles converge in a dance of
              precision and purpose.
            </HeroTextSecondary>

            <BtnBlock>
              <GoBackLink to='/'>
                <GoBackIcon />
              </GoBackLink>
              <GoBackLink to='/'>
                <GoNextIcon />
              </GoBackLink>
            </BtnBlock>
          </TextWrapper>
        </Container>
      </WaspWrapper>
    </WaspHero>
  );
};
