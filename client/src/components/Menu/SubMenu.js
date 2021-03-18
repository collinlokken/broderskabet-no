import styled from 'styled-components';

export const StyledSubMenu = styled.nav`
  a {
    display: ${({ toggle }) => toggle ? 'block' : 'none'};
  }
  .sub-links {
    transition: transform 0.3s ease-in-out;
    transform: ${({ toggle }) => toggle ? 'translateX(0)' : 'translateX(100%)'};
  }
`;