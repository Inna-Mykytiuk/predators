"use client";
import { useState } from "react";

import Container from "../container/Container";
import {
  SharkHero,
  SharkWrapper,
  SharkBtnBlock,
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
} from "./SharkSection.styled";

const SharkSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SharkHero>
      <SharkWrapper>
        <Container>
          <Wrapper>
            <TextWrapper isVisible={!isOpen}>
              <HeroTextSubtitle>Sovereigns of the Sea</HeroTextSubtitle>
              <HeroTextMain>Shark</HeroTextMain>
              <HeroTextSecondary>
                Sharks embody a mysterious power that echoes through the depths,
                underscoring the urgent call for conservation to protect their
                enigmatic domain.
              </HeroTextSecondary>
              <RaitingWrapper>
                <RaitingWrapperBtn>
                  <RaitingTitle>Danger rating 8/10</RaitingTitle>
                  <RaitingBtn onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RaitingIconUp /> : <RaitingIconDown />}
                  </RaitingBtn>
                </RaitingWrapperBtn>

                <RaitingList isVisible={isOpen}>
                  <RaitingListItem>
                    Sharks are a diverse group of marine predators, boasting
                    over 500 species with varied sizes, shapes, and behaviors.
                  </RaitingListItem>
                  <RaitingListItem>
                    Sharks possess an extraordinary ability to sense electrical
                    fields, aiding them in locating prey and navigating their
                    surroundings.
                  </RaitingListItem>
                  <RaitingListItem>
                    The hammerhead shark&apos;s unique head shape provides
                    enhanced 360-degree vision and improved hunting efficiency.
                  </RaitingListItem>
                  <RaitingListItem>
                    Certain shark species, such as the great white, are renowned
                    for their extensive migrations, covering thousands of miles
                    in open ocean.
                  </RaitingListItem>
                  <RaitingListItem>
                    Equipped with multiple rows of teeth, sharks continuously
                    replace and shed teeth throughout their lives.
                  </RaitingListItem>
                  <RaitingListItem>
                    Sharks boast a prehistoric lineage, predating the existence
                    of dinosaurs by hundreds of millions of years.
                  </RaitingListItem>
                  <RaitingListItem>
                    The decline in shark populations poses significant threats
                    to marine ecosystems, underscoring the urgency of
                    conservation efforts.
                  </RaitingListItem>
                </RaitingList>
              </RaitingWrapper>
            </TextWrapper>
            <SharkBtnBlock>
              <GoBackLink to='/tiger'>
                <GoBackIcon />
              </GoBackLink>
              <GoBackLink to='/'>
                <GoHomeIcon />
              </GoBackLink>
              <GoBackLink to='/human'>
                <GoNextIcon />
              </GoBackLink>
            </SharkBtnBlock>
          </Wrapper>
        </Container>
      </SharkWrapper>
    </SharkHero>
  );
};

export { SharkSection };
