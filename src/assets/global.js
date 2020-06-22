import { createGlobalStyle } from "styled-components"

import { Colors } from "./variables"

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    font-size: 62.5%;
    line-height: 1.15;
  }

 body {
    margin: 0;
    padding: 0;
    background: ${Colors.gallery};
    color: ${Colors.mineShaft};
    overscroll-behavior-y: contain;
  }

  strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${Colors.gallery} ${Colors.mineshaft};
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: ${Colors.gallery};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${Colors.mineshaft};
    border-radius: 20px;
    border: 3px solid ${Colors.gallery};
  }
`

export default GlobalStyle
