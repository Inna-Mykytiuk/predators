"use client";
import { useState } from "react";

import Container from "../container/Container";
import {
  VirusHero,
  VirusWrapper,
  VirusBtnBlock,
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
  GoHomeIcon,
  GoBackLink,
  Wrapper,
} from "./VirusSection.styled";

export const VirusSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VirusHero>
      <VirusWrapper>
        <Container>
          <Wrapper>
            <TextWrapper>
              <HeroTextMain>Virus</HeroTextMain>
              <HeroTextSubtitle>Microscopic Menaces Unveiled</HeroTextSubtitle>
              <HeroTextSecondary>
                Delve into the unseen realm of microscopic menaces, where
                viruses and bacteria shape the course of life, challenging our
                understanding and resilience.
              </HeroTextSecondary>
              <RaitingWrapper>
                <RaitingWrapperBtn>
                  <RaitingTitle>Danger rating 10/10</RaitingTitle>
                  <RaitingBtn onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RaitingIconUp /> : <RaitingIconDown />}
                  </RaitingBtn>
                </RaitingWrapperBtn>

                <RaitingList isVisible={isOpen}>
                  <RaitingListItem>
                    Viruses are not classified as living organisms but consist
                    of genetic material encased in a protein coat.
                  </RaitingListItem>
                  <RaitingListItem>
                    Bacteria are single-celled organisms playing vital roles in
                    ecological processes, including nutrient cycling.
                  </RaitingListItem>
                  <RaitingListItem>
                    Viruses hijack host cells to replicate, causing diseases in
                    animals, plants, and bacteria.
                  </RaitingListItem>
                  <RaitingListItem>
                    Bacteria can form resilient structures called endospores,
                    allowing them to survive harsh conditions.
                  </RaitingListItem>
                  <RaitingListItem>
                    Both viruses and bacteria are crucial for human health,
                    contributing to the microbiome and immune system
                    development.
                  </RaitingListItem>
                  <RaitingListItem>
                    Bacteria can exchange genetic material through horizontal
                    gene transfer, contributing to their adaptability.
                  </RaitingListItem>
                  <RaitingListItem>
                    Viruses exhibit a wide range of shapes and structures, from
                    simple spheres to complex helical forms.
                  </RaitingListItem>
                  <RaitingListItem>
                    The study of viruses and bacteria is essential in fields
                    such as medicine, biotechnology, and environmental science.
                    scales.
                  </RaitingListItem>
                </RaitingList>
              </RaitingWrapper>
            </TextWrapper>
            <VirusBtnBlock>
              <GoBackLink to='/snake'>
                <GoBackIcon />
              </GoBackLink>
              <GoBackLink to='/'>
                <GoHomeIcon />
              </GoBackLink>
            </VirusBtnBlock>
          </Wrapper>
        </Container>
      </VirusWrapper>
    </VirusHero>
  );
};
