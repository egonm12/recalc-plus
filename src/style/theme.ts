import {
  default as baseStyled,
  ThemedStyledInterface,
} from "styled-components";
import { colors } from "./general/colors";
import { measures } from "./general/measures";
import { typography } from "./general/typography";

export const defaultTheme = {
  colors,
  measures,
  typography,
};
export type Theme = typeof defaultTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
