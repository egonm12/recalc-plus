import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as Styled from "./FeatureItem.style";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface FeatureItemProps {
  title: string;
  description: string;
  icon: IconDefinition;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  icon,
}) => (
  <Styled.ItemWrapper>
    <Styled.IconWrapper>
      <FontAwesomeIcon icon={icon} size="lg" />
    </Styled.IconWrapper>
    <h3>{title}</h3>
    <br />
    <p>{description}</p>
  </Styled.ItemWrapper>
);

FeatureItem.displayName = "FeatureItem";
