import { styled } from "src/style/theme";

export const NavBar = styled.nav``;
export const LogoWrapper = styled.div``;
export const NavMenu = styled.div``;

export const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  padding: 1.5rem 2rem;
  width: 100%;

  display: flex;
  justify-content: center;

  ${NavBar} {
    height: 2.5rem;
    width: 100%;
    max-width: ${({ theme }) => theme.measures.breakpoints.large};
    position: relative;

    display: flex;
    align-items: center;

    ${LogoWrapper} {
      ${({ theme }) => theme.measures.margin.large};
      height: 100%;

      img {
        height: 100%;

        &:first-of-type {
          margin-right: 0.5rem;
        }
      }
    }

    ${NavMenu} {
      margin-left: 3rem;
      font-size: ${({ theme }) => theme.typography.large};
      font-weight: 500;

      display: flex;
      align-items: center;

      a {
        border-bottom: 2px solid transparent;
        color: ${({ theme }) => theme.colors.text.secondary};
        padding: 0.25rem 0;

        &:not(:last-of-type) {
          margin-right: 3rem;
        }

        &:hover {
          border-bottom: ${({ theme }) =>
            `2px solid ${theme.colors.text.highlighted}`};
        }
      }
    }
  }
`;
