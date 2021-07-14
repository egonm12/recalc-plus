import React from "react";
import { Link } from "src/components/Link";
import { Content } from "src/components/Section/Section";
import * as Styled from "./Hero.style";

export const Hero: React.VFC = () => {
  return (
    <Styled.HeroSection>
      <Content>
        <Styled.HeroContent>
          <h1>
            Project software voor <span>klein tot middelgrote</span> bedrijven
          </h1>
          <p>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <Styled.CTAWrapper>
            <Link $type="primary" to="/contact">
              Proefversie aanvragen
            </Link>
            <Link $type="secondary" to="/demo">
              Live demo
            </Link>
          </Styled.CTAWrapper>
        </Styled.HeroContent>
        <Styled.HeroImage />
      </Content>
    </Styled.HeroSection>
  );
};
