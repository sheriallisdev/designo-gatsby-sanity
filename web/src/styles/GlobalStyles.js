import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --black: hsl(270, 3, 11);
    --white: hsl(0, 0%, 100%);
    --peach: hsl(11, 73%, 66%);
    --light-peach: hsl(11, 100%, 80%);
    --dark-grey: hsl(264, 5%, 20%);
    --light-grey: hsl(210, 17, 95);

  }
`;

export default GlobalStyle;
