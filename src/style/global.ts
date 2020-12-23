import { createGlobalStyle } from "styled-components";
import "src/fonts/fonts.css";
import { Theme } from "./theme";

export const GlobalCSS = createGlobalStyle<{ theme: Theme }>`
  html {
      font-size: 16px;
  }

  body {
    font-family: "Inter", monospace;
    color: ${({ theme }) => theme.colors.text.primary}
  }

  html,
  body {
      position: relative;
      height: 100%;
      margin: 0;
      padding: 0;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  button,
  a {
      -webkit-tap-highlight-color: transparent;
      text-decoration: none;
  }

  button:focus {
    outline: none;
  }

  strong {
      font-weight: bold;
  }

  em,
  i {
      font-style: italic;
  }

  input,
  textarea,
  table {
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      resize: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-weight: 600;
      line-height: normal;
      color: ${({ theme }) => theme.colors.text.secondary};
  }

  h1 {
      font-size: ${({ theme }) => theme.typography.xHuge};
      font-weight: 900;
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.huge};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.xLarge};
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.large};
  }
  
  p {
    font-size: ${({ theme }) => theme.typography.large}; 
  }
`;
