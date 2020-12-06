import {
  default as baseStyled,
  ThemedStyledInterface,
} from "styled-components";

export const defaultTheme = {};
export type Theme = typeof defaultTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
