import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: None;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    width: 101%;
    text-align: center;
    padding: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    border-left: 2px solid black;

    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

    a, div {
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: ${({ theme }) => theme.primaryDark};
      text-decoration: none;
      transition: color 0.3s linear;

      &:hover {
        color: ${({ theme }) => theme.primaryHover};
      }
    }
    .menu-element {
      font-size: 1.5rem;
      padding: 2rem 0;
      border-bottom: 1px solid black;
    }
    .sub-link {
      letter-spacing: 0.3rem;
      display: block;
      position: relative;
      transition: font-size 0.1s linear, padding 0.1s linear, transform 0.3s ease-in-out;
      font-size: ${({ toggle }) => toggle ? '1rem' : '0'};
      padding ${({ toggle }) => toggle ? '1rem' : '0 1rem'};
      transform: ${({ toggle }) => toggle ? 'translateX(0)' : 'translateX(150%)'};
    }
    .user-container {
      display: flex;
      justify-content: space-around;
      font-size: 1rem;
    }
  }
  
`;