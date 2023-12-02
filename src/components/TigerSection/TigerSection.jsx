"use client";
import { useState } from "react";

import Container from "../container/Container";
import {
  TigerHero,
  TigerWrapper,
  TigerBtnBlock,
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
} from "./TigerSection.styled";

export const TigerSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TigerHero>
      <TigerWrapper>
        <Container>
          <TextWrapper>
            <HeroTextMain>Tiger</HeroTextMain>
            <HeroTextSubtitle>
              Striking Elegance, Formidable Power
            </HeroTextSubtitle>
            <HeroTextSecondary>
              Embark on a journey through the jungles and grasslands where
              tigers, with their striking beauty and unparalleled hunting
              prowess, reign as the kings of stealth and power.
            </HeroTextSecondary>
            <RaitingWrapper>
              <RaitingWrapperBtn>
                <RaitingTitle>Danger rating 7/10</RaitingTitle>
                <RaitingBtn onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <RaitingIconUp /> : <RaitingIconDown />}
                </RaitingBtn>
              </RaitingWrapperBtn>

              <RaitingList isVisible={isOpen}>
                <RaitingListItem>
                  Tigers are the largest big cats, known for their distinctive
                  orange coat and dark stripes.
                </RaitingListItem>
                <RaitingListItem>
                  Exceptional swimmers, tigers are uncharacteristically
                  comfortable in water compared to other cats.
                </RaitingListItem>
                <RaitingListItem>
                  Tigers have unique stripe patterns, allowing for individual
                  identification, similar to human fingerprints.
                </RaitingListItem>
                <RaitingListItem>
                  Despite their size, tigers are incredibly agile and can leap
                  great distances.
                </RaitingListItem>
                <RaitingListItem>
                  Tigers have a wide range of vocalizations, including roars,
                  chuffs, and growls, used for communication.
                </RaitingListItem>
                <RaitingListItem>
                  The whisker spots on a tiger&apos;s face help them navigate
                  and judge distances in the dark.
                </RaitingListItem>
                <RaitingListItem>
                  Tigers are territorial animals, marking their boundaries with
                  scent markings and scratches.
                </RaitingListItem>
                <RaitingListItem>
                  The tiger population has faced significant threats, primarily
                  due to habitat loss and poaching for their body parts.
                </RaitingListItem>
              </RaitingList>
            </RaitingWrapper>
            <TigerBtnBlock>
              <GoBackLink to='/snake'>
                <GoBackIcon />
              </GoBackLink>
              <GoBackLink to='/'>
                <GoHomeIcon />
              </GoBackLink>
              <GoBackLink to='/shark'>
                <GoNextIcon />
              </GoBackLink>
            </TigerBtnBlock>
          </TextWrapper>
        </Container>
      </TigerWrapper>
    </TigerHero>
  );
};
