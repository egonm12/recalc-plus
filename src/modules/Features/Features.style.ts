import { styled } from "src/style/theme";
import { Content, Section } from "../../components/Section/Section";

export const Header = styled.h2`
  margin-bottom: 1.5rem;
`;
export const PreHeader = styled.h4`
  color: ${({ theme }) => theme.colors.text.preHeader};
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const FeaturesWrapper = styled(Section)`
  background-color: ${({ theme }) => theme.colors.background.lightest};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  color: 1px solid ${({ theme }) => theme.colors.text.default};

  ${Content} {
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) =>
      `${theme.measures.padding.huge} ${theme.measures.padding.huge}`};
  }

  p {
    color: #4a4f5a;
  }
`;

export const Subheader = styled.header`
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 2rem;
  grid-row-gap: 3.75rem;
`;
