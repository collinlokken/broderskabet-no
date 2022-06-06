import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    position: relative;
    margin: 0;
    border: 0;
    padding: 0;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    font-family: 'Karla', sans-serif;
    font-weight: 300;
    text-rendering: optimizeLegibility;
  }

  .App {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
  }
  @media (min-width: ${({ theme }) => theme.mobile}) {
    .burger-menu{
      display: None;
    }
  }
  `