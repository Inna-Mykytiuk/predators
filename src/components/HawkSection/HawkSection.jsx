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
  GoBackIcon,
  GoNextIcon,
  GoHomeIcon,
  GoBackLink,
  Wrapper,
} from "./HawkSection.styled";

const HawkSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HawkHero>
      <HawkWrapper>
        <Container>
          <Wrapper>
            <TextWrapper isVisible={!isOpen}>
              <HeroTextSubtitle>
                Nature&apos;s Architects and Stingers
              </HeroTextSubtitle>
              <HeroTextMain>Hawk</HeroTextMain>

              <HeroTextSecondary>
                Take flight with the majestic hawks, rulers of the skies, as we
                explore their keen eyesight, breathtaking aerial maneuvers, and
                vital role in maintaining ecological balance.
              </HeroTextSecondary>

              <RaitingWrapper>
                <RaitingWrapperBtn>
                  <RaitingTitle>Danger rating 4/10</RaitingTitle>
                  <RaitingBtn onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RaitingIconUp /> : <RaitingIconDown />}
                  </RaitingBtn>
                </RaitingWrapperBtn>
                <RaitingList isVisible={isOpen}>
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
              </RaitingWrapper>
            </TextWrapper>
            <HawkBtnBlock>
              <GoBackLink to='/wasp'>
                <GoBackIcon />
              </GoBackLink>
              <GoBackLink to='/'>
                <GoHomeIcon />
              </GoBackLink>
              <GoBackLink to='/wolf'>
                <GoNextIcon />
              </GoBackLink>
            </HawkBtnBlock>
          </Wrapper>
        </Container>
      </HawkWrapper>
    </HawkHero>
  );
};

export { HawkSection };
