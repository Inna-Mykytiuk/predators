"use client";
import { useState } from "react";

import Container from "../container/Container";
import {
  HawkHero,
  HawkWrapper,
  TextWrapper,
  HeroTextMain,
  HeroTextSubtitle,
  HeroTextSecondary,
  RaitingWrapper,
  RaitingTitle,
  RaitingList,
  RaitingListItem,
  RaitingWrapperBtn,
  HawkBtnBlock,
  RaitingIconUp,
  RaitingIconDown,
  RaitingBtn,
} from "./HawkSection.styled";
import {
  GoBackIcon,
  GoBackLink,
  GoNextIcon,
  GoHomeIcon,
} from "../Navigation/Navigation.styled";

const HawkSection = () => {
  const [isRaitingListVisible, setRaitingListVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleRaitingList = () => {
    setRaitingListVisible(!isRaitingListVisible);
    setIsOpen(!isOpen);
  };

  return (
    <HawkHero>
      <HawkWrapper>
        <Container>
          <TextWrapper>
            <HeroTextMain>Hawk</HeroTextMain>
            <HeroTextSubtitle>
              Nature&apos;s Architects and Stingers
            </HeroTextSubtitle>
            <HeroTextSecondary>
              Take flight with the majestic hawks, rulers of the skies, as we
              explore their keen eyesight, breathtaking aerial maneuvers, and
              vital role in maintaining ecological balance.
            </HeroTextSecondary>
            <RaitingWrapper>
              <RaitingWrapperBtn>
                <RaitingTitle>Raiting 2/5</RaitingTitle>
                <RaitingBtn onClick={toggleRaitingList}>
                  {isOpen ? <RaitingIconUp /> : <RaitingIconDown />}
                </RaitingBtn>
              </RaitingWrapperBtn>
              {isRaitingListVisible && (
                <RaitingList isVisible={isRaitingListVisible}>
                  <RaitingListItem>
                    Their powerful talons and beaks are designed for capturing
                    and consuming various prey.
                  </RaitingListItem>
                  <RaitingListItem>
                    Some hawk species migrate over long distances, demonstrating
                    remarkable navigation skills.
                  </RaitingListItem>
                  <RaitingListItem>
                    Various species of hawks exhibit diverse hunting strategies,
                    from ambush tactics to cooperative hunting.
                  </RaitingListItem>
                  <RaitingListItem>
                    Courtship displays and rituals are common among hawks,
                    emphasizing social behaviors.
                  </RaitingListItem>
                  <RaitingListItem>
                    Hawks are known for their impressive aerial acrobatics and
                    soaring flight patterns.
                  </RaitingListItem>
                  <RaitingListItem>
                    Adaptability to various habitats, from forests to open
                    fields, contributes to their widespread distribution.
                  </RaitingListItem>
                  <RaitingListItem>
                    Conservation efforts are crucial to protecting certain hawk
                    species facing habitat loss and other threats.
                  </RaitingListItem>
                </RaitingList>
              )}
            </RaitingWrapper>
            <HawkBtnBlock>
              <GoBackLink to='/wasp'>
                <GoBackIcon />
              </GoBackLink>
              <GoBackLink to='/'>
                <GoHomeIcon />
              </GoBackLink>
              <GoBackLink to='/'>
                <GoNextIcon />
              </GoBackLink>
            </HawkBtnBlock>
          </TextWrapper>
        </Container>
      </HawkWrapper>
    </HawkHero>
  );
};

export { HawkSection };
