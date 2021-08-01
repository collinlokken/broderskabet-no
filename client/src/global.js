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
    height: 100vh;
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
  .nav-bar {
    width: 98vw;
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0;
    height: 14vh;
    backdrop-filter: blur(5px);
    padding: 2vw;
    box-shadow: 0 15px 12px -12px #00000026;
  }
  @media (min-width: ${({ theme }) => theme.mobile}) {
    .burger-menu{
      display: None;
    }
    position: fixed;
  }
  `