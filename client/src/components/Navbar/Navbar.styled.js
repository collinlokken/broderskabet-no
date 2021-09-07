import styled from 'styled-components';
import { B_sort } from 'Images'

export const StyledNavbar = styled.nav`
  @media (max-width: ${({theme}) => theme.mobile}) {
    .nav-link-container {
        display: None;
    }
    margin: auto;
  }
  width: 98vw;
  height: 14vh;
  min-height: 85px;
  padding: 2vw;

  position: fixed;
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  backdrop-filter: blur(5px);
  box-shadow: 0 15px 12px -12px #00000026;
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
  .logo-nav-element {
    height: 60px;
    margin: auto 0;
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