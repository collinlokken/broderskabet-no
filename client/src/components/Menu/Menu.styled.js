import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  border-left: 2px solid black;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 101%;
  }

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
    font-size: 2rem;
    padding: 2rem 0;
    border-bottom: 1px solid black;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
  .sub-link {
    letter-spacing: 0.3rem;
    display: block;
    position: relative;
    transition: font-size 0.1s linear, padding 0.1s linear, transform 0.3s ease-in-out;
    font-size: ${({ toggle }) => toggle ? '1.1rem' : '0'};
    padding ${({ toggle }) => toggle ? '1rem' : '0 1rem'};
    transform: ${({ toggle }) => toggle ? 'translateX(0)' : 'translateX(150%)'};
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: ${({ toggle }) => toggle ? '1rem' : '0'};
  }
`;