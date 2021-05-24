import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --black: hsl(270, 3%, 11%);
    --white: hsl(0, 0%, 100%);
    --peach: hsl(11, 73%, 66%);
    --light-peach: hsl(11, 100%, 80%);
    --dark-grey: hsl(264, 5%, 20%);
    --light-grey: hsl(210, 17%, 95%);
    --site-container: 1111px;
  }
  html {
    box-sizing: border-box;
    overflow-x: hidden;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }

  .sr-only {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;

export default GlobalStyle;
