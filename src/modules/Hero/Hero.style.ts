import { styled } from "src/style/theme";

export const ContentWrapper = styled.div``;
export const HeroContent = styled.div``;
export const CTAWrapper = styled.div``;
export const HeroImage = styled.div``;

export const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  height: 40rem;
  justify-content: center;

  ${ContentWrapper} {
    height: 100%;
    width: 100%;
    max-width: ${({ theme }) => theme.measures.breakpoints.large};

    display: flex;
    justify-content: center;
  }

  ${HeroContent}, ${HeroImage} {
    padding: ${({ theme }) =>
      `${theme.measures.padding.large} ${theme.measures.padding.huge}`};
  }

  ${HeroContent} {
    display: flex;
    justify-content: center;
    flex-direction: column;

    width: 40%;

    h1 {
      margin-bottom: ${({ theme }) => theme.measures.margin.medium};
    }

    p {
      font-size: ${({ theme }) => theme.typography.xLarge};
      margin-bottom: ${({ theme }) => theme.measures.margin.huge};
    }

    ${CTAWrapper} {
      display: grid;
      column-gap: ${({ theme }) => theme.measures.margin.medium};
      grid-template-columns: repeat(2, 1fr);

      width: max-content;
    }
  }

  ${HeroImage} {
    background-image: url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80");
    background-size: 140%;
    background-position-x: -100px;
    clip-path: polygon(100% -300%, 0 100%, 100% 100%);

    width: 60%;
  }
`;
