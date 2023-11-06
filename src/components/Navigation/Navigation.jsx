import {
  Nav,
  NavList,
  Link,
  HomeIcon,
  NavListItem,
  GoBackLink,
  GoBackIcon,
  NavBlock,
  LogoWrapper,
  LogoLink,
  LogoText,
} from "./Navigation.styled";
// import { useLocation } from "react-router-dom";
import bearLogo from "../../assets/animalLogo/bear.png";
// import bearLogo from "../../assets/animalLogo/bear.png";
// import bearLogo from "../../assets/animalLogo/bear.png";
// import bearLogo from "../../assets/animalLogo/bear.png";
// import bearLogo from "../../assets/animalLogo/bear.png";
// import bearLogo from "../../assets/animalLogo/bear.png";
// import bearLogo from "../../assets/animalLogo/bear.png";
// import bearLogo from "../../assets/animalLogo/bear.png";
// import bearLogo from "../../assets/animalLogo/bear.png";

const links = [
  // { to: "/", label: "Home", imgSrc: bearLogo },
  // { to: "/home", label: "Home", imgSrc: bearLogo },
  { to: "/wasp", label: "Wasp", imgSrc: bearLogo },
  { to: "/hawk", label: "Hawk", imgSrc: bearLogo },
  { to: "/snake", label: "Snake", imgSrc: bearLogo },
  { to: "/wolf", label: "Wolf", imgSrc: bearLogo },
  { to: "/bear", label: "Bear", imgSrc: bearLogo },
  { to: "/shark", label: "Shark", imgSrc: bearLogo },
  { to: "/human", label: "WHuman", imgSrc: bearLogo },
  { to: "/virus", label: "Virus", imgSrc: bearLogo },
];

export const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavBlock>
          {links.map((link, index) => (
            <NavListItem key={index}>
              <Link to={link.to}>
                <img
                  src={link.imgSrc}
                  alt={`${link.label} Logo`}
                  width={100}
                  height={100}
                />
              </Link>
            </NavListItem>
          ))}
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
