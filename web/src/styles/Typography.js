import { createGlobalStyle } from "styled-components";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";

const Typography = createGlobalStyle`
  :root{
    --body-font-family: 'Jost', sans-serif; 
    --font-weight-regular: 400; 
    --font-weight-medium: 500;  
  }
  body {
    font-family: var(--body-font-family);
    font-size: 100%;
    line-height: 1.625;
    font-weight: var(--font-weight-regular);
  }
  h1, h2, h3 {
    font-weight: var(--font-weight-medium);
  }
  h1 {
    font-size: 3rem;
    line-height: 1;
  }
  h2 {
    font-size: 2.5rem;
    line-height: 1.2;
    letter-spacing: 2px;
  }
  h3{
    font-size: 1.25rem;
    line-height: 1.3;
    letter-spacing: 5px;
  }
`;

export default Typography;
