"use client";
import { useState } from "react";

import Container from "../container/Container";
import {
  WaspHero,
  WaspWrapper,
  TextWrapper,
  HeroTextMain,
  HeroTextSubtitle,
  HeroTextSecondary,
  RaitingWrapper,
  RaitingTitle,
  RaitingList,
  RaitingListItem,
  RaitingWrapperBtn,
} from "./WaspSection.styled";
import {
  GoBackIcon,
  GoBackLink,
  GoNextIcon,
  BtnBlock,
  RaitingBtn,
  RaitingIconUp,
  GoHomeIcon,
  RaitingIconDown,
} from "../Navigation/Navigation.styled";

export const WaspSection = () => {
  const [isRaitingListVisible, setRaitingListVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleRaitingList = () => {
    setRaitingListVisible(!isRaitingListVisible);
    setIsOpen(!isOpen);
  };

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
            <RaitingWrapper>
              <RaitingWrapperBtn>
                <RaitingTitle>Raiting 5/10</RaitingTitle>
                <RaitingBtn onClick={toggleRaitingList}>
                  {isOpen ? <RaitingIconUp /> : <RaitingIconDown />}
                </RaitingBtn>
              </RaitingWrapperBtn>
              {isRaitingListVisible && (
                <RaitingList isVisible={isRaitingListVisible}>
                  <RaitingListItem>
                    Some wasps are social, forming intricate colonies with
                    specialized roles for individuals.
                  </RaitingListItem>
                  <RaitingListItem>
                    Social wasps, like yellow jackets, can form large colonies
                    with hierarchical structures.
                  </RaitingListItem>
                  <RaitingListItem>
                    Wasps possess a venomous sting used for hunting and defense
                    against predators.
                  </RaitingListItem>
                  <RaitingListItem>
                    Certain wasp species exhibit parasitic behavior, laying eggs
                    on or inside other insects.
                  </RaitingListItem>
                  <RaitingListItem>
                    Pollination is another essential role of certain wasp
                    species, contributing to plant diversity.
                  </RaitingListItem>
                  <RaitingListItem>
                    Wasps communicate through chemical signals, coordinating
                    activities within their colonies.
                  </RaitingListItem>
                  <RaitingListItem>
                    Mimicry is a common defense mechanism among wasps, imitating
                    the appearance of more dangerous species.
                  </RaitingListItem>
                </RaitingList>
              )}
            </RaitingWrapper>
            <BtnBlock>
              <GoBackLink to='/'>
                <GoBackIcon />
              </GoBackLink>
              <GoBackLink to='/'>
                <GoHomeIcon />
              </GoBackLink>
              <GoBackLink to='/hawk'>
                <GoNextIcon />
              </GoBackLink>
            </BtnBlock>
          </TextWrapper>
        </Container>
      </WaspWrapper>
    </WaspHero>
  );
};
