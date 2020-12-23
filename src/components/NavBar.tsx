import React from "react";
import * as Styled from "./NavBar.style";
import logo from "src/img/logo.png";
import logoText from "src/img/logo-text.png";
import { Link } from "gatsby";
import { defaultTheme } from "src/style/theme";

const activeStyle = {
  borderBottom: `2px solid ${defaultTheme.colors.text.highlighted}`,
};

export const NavBar: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.NavBar>
        <Styled.LogoWrapper>
          <img src={logo} alt="logo" />
          <img src={logoText} alt="logo" />
        </Styled.LogoWrapper>
        <Styled.NavMenu>
          <Link activeStyle={activeStyle} to="/new">
            Product
          </Link>
          <Link activeStyle={activeStyle} to="/contact">
            Contact
          </Link>
          <Link activeStyle={activeStyle} to="/about">
            Over ons
          </Link>
        </Styled.NavMenu>
      </Styled.NavBar>
    </Styled.Wrapper>
  );
};
