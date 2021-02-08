import { styled } from "src/style/theme";

export const Section = styled.section`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: ${({ theme }) => theme.measures.breakpoints.large};

  display: flex;
  justify-content: center;
`;
