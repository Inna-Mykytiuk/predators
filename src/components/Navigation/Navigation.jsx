import {
  Nav,
  NavList,
  Link,
  WaspIcon,
  HawkIcon,
  NavListItem,
  SnakeIcon,
  WolfIcon,
  TigerIcon,
  SharkIcon,
  HumanIcon,
  VirusIcon,
  // GoBackLink,
  // GoBackIcon,
  NavBlock,
} from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavBlock>
          <NavListItem>
            <Link to='/wasp'>
              <WaspIcon />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to='/hawk'>
              <HawkIcon />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to='/wolf'>
              <WolfIcon />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to='/snake'>
              <SnakeIcon />
            </Link>
          </NavListItem>

          <NavListItem>
            <Link to='/tiger'>
              <TigerIcon />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to='/shark'>
              <SharkIcon />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to='/human'>
              <HumanIcon />
            </Link>
          </NavListItem>
          <NavListItem>
            <Link to='/virus'>
              <VirusIcon />
            </Link>
          </NavListItem>
        </NavBlock>
        {/* <LogoLink to='/'>
          <LogoWrapper>
            <img src={carLogo} alt='set Of Cars' width={60} height={40} />
            <LogoText>CRS</LogoText>
          </LogoWrapper>
        </LogoLink> */}
        {/* <GoBackLink to='/'>
          <GoBackIcon />
        </GoBackLink> */}
      </NavList>
    </Nav>
  );
};
