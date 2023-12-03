"use client";
import { useState } from "react";

import Container from "../container/Container";
import {
  SnakeHero,
  SnakeWrapper,
  SnakeBtnBlock,
  TextWrapper,
  HeroTextMain,
  HeroTextSubtitle,
  HeroTextSecondary,
  RaitingWrapper,
  RaitingTitle,
  RaitingList,
  RaitingListItem,
  RaitingWrapperBtn,
  RaitingIconUp,
  RaitingIconDown,
  RaitingBtn,
  GoBackIcon,
  GoNextIcon,
  GoHomeIcon,
  GoBackLink,
  Wrapper,
} from "./SnakeSection.styled";

const SnakeSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SnakeHero>
      <SnakeWrapper>
        <Container>
          <Wrapper>
            <TextWrapper>
              <HeroTextSubtitle>
                Masters of Stealth and Precision
              </HeroTextSubtitle>
              <HeroTextMain>Snake</HeroTextMain>
              <HeroTextSecondary>
                Slither into the enigmatic world of snakes, where limbless
                wonders navigate silently, employing lethal tactics and serving
                as guardians of ecological balance.
              </HeroTextSecondary>
              <RaitingWrapper>
                <RaitingWrapperBtn>
                  <RaitingTitle>Danger rating 6/10</RaitingTitle>
                  <RaitingBtn onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RaitingIconUp /> : <RaitingIconDown />}
                  </RaitingBtn>
                </RaitingWrapperBtn>

                <RaitingList isVisible={isOpen}>
                  <RaitingListItem>
                    Snakes lack limbs but are incredibly agile, using their
                    bodies to navigate various environments.
                  </RaitingListItem>
                  <RaitingListItem>
                    Venomous snakes have specialized fangs for injecting venom,
                    while non-venomous snakes rely on constriction for hunting.
                  </RaitingListItem>
                  <RaitingListItem>
                    Some snake species have heat-sensing pits, enabling them to
                    detect infrared radiation and locate warm-blooded prey.
                  </RaitingListItem>
                  <RaitingListItem>
                    The iconic cobra hood is formed by elongated ribs and a web
                    of skin, creating an intimidating display.
                  </RaitingListItem>
                  <RaitingListItem>
                    Snakes exhibit a wide range of colors and patterns, often
                    serving as camouflage in their respective habitats.
                  </RaitingListItem>
                  <RaitingListItem>
                    Despite their often-misunderstood reputation, most snakes
                    are harmless to humans, and snakebites are relatively rare.
                  </RaitingListItem>
                  <RaitingListItem>
                    Snakes utilize a unique jaw structure that allows them to
                    consume prey much larger than their head.
                  </RaitingListItem>
                  <RaitingListItem>
                    Snakes shed their skin regularly, a process known as
                    ecdysis, allowing for growth and removing parasites.
                  </RaitingListItem>
                </RaitingList>
              </RaitingWrapper>
            </TextWrapper>
            <SnakeBtnBlock>
              <GoBackLink to='/wolf'>
                <GoBackIcon />
              </GoBackLink>
              <GoBackLink to='/'>
                <GoHomeIcon />
              </GoBackLink>
              <GoBackLink to='/tiger'>
                <GoNextIcon />
              </GoBackLink>
            </SnakeBtnBlock>
          </Wrapper>
        </Container>
      </SnakeWrapper>
    </SnakeHero>
  );
};

export { SnakeSection };
