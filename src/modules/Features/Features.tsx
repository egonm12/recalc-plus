import React from "react";
import * as Styled from "./Features.style";
import { FeatureItem } from "./components/FeatureItem";
import { Content } from "src/components/Section/Section";
import { faCoffee, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export const Features: React.FC = () => {
  const features: {
    title: string;
    description: string;
    icon: IconDefinition;
  }[] = [
    {
      title: "Anim",
      description: "Anim aute id magna aliqua ad ad non deserunt sunt.",
      icon: faCoffee,
    },
    {
      title: "Magna",
      description: "Anim aute id magna aliqua ad ad non deserunt sunt.",
      icon: faCoffee,
    },
    {
      title: "Deserunt",
      description: "Anim aute id magna aliqua ad ad non deserunt sunt.",
      icon: faCoffee,
    },
    {
      title: "Anim",
      description: "Anim aute id magna aliqua ad ad non deserunt sunt.",
      icon: faCoffee,
    },
    {
      title: "Magna",
      description: "Anim aute id magna aliqua ad ad non deserunt sunt.",
      icon: faCoffee,
    },
    {
      title: "Magna",
      description: "Anim aute id magna aliqua ad ad non deserunt sunt.",
      icon: faCoffee,
    },
  ];

  return (
    <Styled.FeaturesWrapper>
      <Content>
        <Styled.Subheader>
          <Styled.PreHeader>Beter, veiliger en sneller</Styled.PreHeader>
          <Styled.Header>Alles-in-1 pakket</Styled.Header>
          <p>
            A very important sentence. Another sentence backing up the previous
            sentence with some very interesting information.
          </p>
        </Styled.Subheader>
        <Styled.FeaturesList>
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </Styled.FeaturesList>
      </Content>
    </Styled.FeaturesWrapper>
  );
};
