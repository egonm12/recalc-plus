import { styled } from "src/style/theme";
import { Link as LinkComponent } from "gatsby";

export const Link = styled(LinkComponent)<{
  $type: "primary" | "secondary" | "default";
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, $type }) =>
    $type === "primary"
      ? theme.colors.background.tertiary
      : $type === "secondary"
      ? theme.colors.background.primary
      : theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.measures.borderRadius.normal};
  color: ${({ theme, $type }) =>
    $type === "primary"
      ? theme.colors.text.tertiary
      : $type === "secondary"
      ? theme.colors.text.tertiary
      : theme.colors.text.primary};
  font-weight: 500;
  font-size: 1.125rem;
  //text-transform: uppercase;
  text-align: center;
  vertical-align: middle;
  padding: ${({ theme }) =>
    `${theme.measures.padding.medium} ${theme.measures.padding.huge}`};
  width: 10rem;
`;
