import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavStyled } from "./styles-nav/Nav.styled";
import { LogoStyled } from "./styles-nav/Logo.styled";
import { UlStyled } from "./styles-nav/UlList.styled";
import { LiStyled } from "./styles-nav/LiList.styled";
import { LogoWrapper } from "./styles-nav/LogoWrapper.styled";
import { LogoParagraph } from "./styles-nav/LogoParagraph.styled";
import { LogoPlus } from "./styles-nav/LogoPlus.styled";

function Nav() {
  return (
    <NavStyled>
      <LogoWrapper>
        <LogoStyled>
          <FontAwesomeIcon icon={faConnectdevelop} />
        </LogoStyled>
        <LogoParagraph>Social-App</LogoParagraph>
        <LogoParagraph>
          Connection
          <LogoPlus>
            <FontAwesomeIcon icon={faPlus} />
          </LogoPlus>
        </LogoParagraph>
      </LogoWrapper>
      <UlStyled>
        <LiStyled>
          <Link to="/Feed" style={{ textDecoration: "none", color: "#fffff0" }}>
            Home
          </Link>
        </LiStyled>
        <LiStyled>
          <Link to="/Feed" style={{ textDecoration: "none", color: "#fffff0" }}>
            Feed
          </Link>
        </LiStyled>
        <LiStyled>
          <Link
            to="/LogIn"
            style={{ textDecoration: "none", color: "#fffff0" }}
          >
            Log In
          </Link>
        </LiStyled>
        <LiStyled>
          <Link
            to="/SignUp"
            style={{ textDecoration: "none", color: "#fffff0" }}
          >
            Sign Up
          </Link>
        </LiStyled>
      </UlStyled>
    </NavStyled>
  );
}

export default Nav;
