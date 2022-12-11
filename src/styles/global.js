import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: "Outfit", sans-serif;
  }

  html,
  body {
    height: 100%;
  }

  body {
    background-color: #0d192b;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
