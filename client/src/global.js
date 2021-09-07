import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    position: relative;
    margin: 0;
    border: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    font-family: 'Karla', sans-serif;
    font-weight: 300;
    text-rendering: optimizeLegibility;
  }
  #root, .App{
    height: 100%;
  }
  .App {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column
  }
  @media (min-width: ${({ theme }) => theme.mobile}) {
    .burger-menu{
      display: None;
    }
  }
  `