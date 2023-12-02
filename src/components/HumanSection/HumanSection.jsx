"use client";
import { useState } from "react";

import Container from "../container/Container";
import {
  HumanHero,
  HumanWrapper,
  HumanBtnBlock,
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
} from "./HumanSection.styled";

const HumanSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HumanHero>
      <HumanWrapper>
        <Container>
          <TextWrapper>
            <HeroTextSubtitle>The Unrivaled Dominance</HeroTextSubtitle>
            <HeroTextMain>Human</HeroTextMain>
            <HeroTextSecondary>
              Step into the realm of humanity, where innovation and adaptability
              have crowned us as Earth&apos;s ultimate predator, shaping
              landscapes and rewriting the rules of survival.
            </HeroTextSecondary>
            <RaitingWrapper>
              <RaitingWrapperBtn>
                <RaitingTitle>Danger rating 9/10</RaitingTitle>
                <RaitingBtn onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <RaitingIconUp /> : <RaitingIconDown />}
                </RaitingBtn>
              </RaitingWrapperBtn>

              <RaitingList isVisible={isOpen}>
                <RaitingListItem>
                  Humans kill over 1 million animals daily for food. Humans kill
                  animals for their skin, meat, and as experimental subjects in
                  science.
                </RaitingListItem>
                <RaitingListItem>
                  Historically, humans have used animals for entertainment,
                  including animal fights.
                </RaitingListItem>
                <RaitingListItem>
                  The development of tools allowed early humans to become
                  effective hunters and gatherers.
                </RaitingListItem>
                <RaitingListItem>
                  Human societies exhibit diverse cultural practices, from art
                  and music to complex belief systems.
                </RaitingListItem>
                <RaitingListItem>
                  Humans are capable of complex language, enabling advanced
                  communication and cooperation.
                </RaitingListItem>
                <RaitingListItem>
                  The invention of writing marked a significant leap in
                  recording and transmitting knowledge.
                </RaitingListItem>
                <RaitingListItem>
                  Humans have successfully adapted to various environments, from
                  icy tundras to scorching deserts.
                </RaitingListItem>
                <RaitingListItem>
                  Human innovation has led to technological advancements,
                  shaping the modern world.
                </RaitingListItem>
              </RaitingList>
            </RaitingWrapper>
            <HumanBtnBlock>
              <GoBackLink to='/shark'>
                <GoBackIcon />
              </GoBackLink>
              <GoBackLink to='/'>
                <GoHomeIcon />
              </GoBackLink>
              <GoBackLink to='/virus'>
                <GoNextIcon />
              </GoBackLink>
            </HumanBtnBlock>
          </TextWrapper>
        </Container>
      </HumanWrapper>
    </HumanHero>
  );
};

export { HumanSection };
