import styled from 'styled-components';
import { B_sort } from 'Images'

export const StyledNavbar = styled.nav`
  @media (max-width: ${({theme}) => theme.mobile}) {
    .nav-link-container {
        display: None;
    }
    margin: 0 auto;
    margin-top: 2rem;
  }
  width: 94vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  a {
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.3rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
  
  .logo-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .logo-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
  }
  
`;

export const Logo = styled.div`
    background-image: url(${B_sort});
    background-color: "blur(10px)";
    width: 60px;
    height: 60px;
    background-position: center;
    background-size: cover;
`