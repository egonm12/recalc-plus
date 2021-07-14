import { styled } from "src/style/theme";

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.background.lighter};
  border-radius: ${({ theme }) => theme.measures.borderRadius.large};
  padding: 0 2rem;
  height: 10rem;
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: -1.75rem;
  background-color: ${({ theme }) => theme.colors.brand.secondary};
  border-radius: ${({ theme }) => theme.measures.borderRadius.normal};

  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
