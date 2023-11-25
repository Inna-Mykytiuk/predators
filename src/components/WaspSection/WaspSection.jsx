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
            <div>
              <p>Raiting 2/5</p>
              <ul>
                <li>
                  Some wasps are social, forming intricate colonies with
                  specialized roles for individuals.
                </li>
                <li>
                  Social wasps, like yellow jackets, can form large colonies
                  with hierarchical structures.
                </li>
                <li>
                  Wasps possess a venomous sting used for hunting and defense
                  against predators.
                </li>
                <li>
                  Certain wasp species exhibit parasitic behavior, laying eggs
                  on or inside other insects.
                </li>
                <li>
                  Pollination is another essential role of certain wasp species,
                  contributing to plant diversity.
                </li>
                <li>
                  Wasps communicate through chemical signals, coordinating
                  activities within their colonies.
                </li>
                <li>
                  Mimicry is a common defense mechanism among wasps, imitating
                  the appearance of more dangerous species.
                </li>
              </ul>
            </div>
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
