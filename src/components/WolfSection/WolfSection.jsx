"use client";
import { useState } from "react";

import Container from "../container/Container";
import {
  WolfHero,
  WolfWrapper,
  TextWrapper,
  HeroTextMain,
  HeroTextSubtitle,
  HeroTextSecondary,
  RaitingWrapper,
  RaitingTitle,
  RaitingList,
  RaitingListItem,
  RaitingWrapperBtn,
  WolfBtnBlock,
  RaitingIconUp,
  RaitingIconDown,
  RaitingBtn,
  GoBackIcon,
  GoNextIcon,
  GoHomeIcon,
  GoBackLink,
} from "./WolfSection.styled";

const WolfSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WolfHero>
      <WolfWrapper>
        <Container>
          <TextWrapper>
            <HeroTextSubtitle>
              Nature&apos;s Architects and Stingers
            </HeroTextSubtitle>
            <HeroTextMain>Wolf</HeroTextMain>
            <HeroTextSecondary>
              Join the packs and explore the untamed landscapes where wolves,
              with their intricate social structures and haunting howls, command
              the wilderness.
            </HeroTextSecondary>
            <RaitingWrapper>
              <RaitingWrapperBtn>
                <RaitingTitle>Danger rating 5/10</RaitingTitle>
                <RaitingBtn onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <RaitingIconUp /> : <RaitingIconDown />}
                </RaitingBtn>
              </RaitingWrapperBtn>

              <RaitingList isVisible={isOpen}>
                <RaitingListItem>
                  Wolves are skilled hunters, often targeting large ungulates
                  such as deer and elk.
                </RaitingListItem>
                <RaitingListItem>
                  Pack hierarchy is established through a combination of
                  dominance displays and submission.
                </RaitingListItem>
                <RaitingListItem>
                  Communication within a wolf pack involves vocalizations, body
                  language, and scent marking.
                </RaitingListItem>
                <RaitingListItem>
                  The iconic howl of a wolf serves various purposes, including
                  signaling location and maintaining pack cohesion.
                </RaitingListItem>
                <RaitingListItem>
                  The iconic howl of a wolf serves various purposes, including
                  signaling location and maintaining pack cohesion.
                </RaitingListItem>
                <RaitingListItem>
                  Wolf territories can cover vast areas, depending on prey
                  availability and pack size.
                </RaitingListItem>
                <RaitingListItem>
                  The gestation period for wolf pups is around two months, with
                  the entire pack participating in their care.
                </RaitingListItem>
                <RaitingListItem>
                  Gray wolves, the most widespread species, exhibit a wide range
                  of coat colors, from white to black.
                </RaitingListItem>
              </RaitingList>
            </RaitingWrapper>
            <WolfBtnBlock>
              <GoBackLink to='/hawk'>
                <GoBackIcon />
              </GoBackLink>
              <GoBackLink to='/'>
                <GoHomeIcon />
              </GoBackLink>
              <GoBackLink to='/snake'>
                <GoNextIcon />
              </GoBackLink>
            </WolfBtnBlock>
          </TextWrapper>
        </Container>
      </WolfWrapper>
    </WolfHero>
  );
};

export { WolfSection };
