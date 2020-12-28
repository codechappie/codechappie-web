import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
     margin: 0;
     padding: 0;
     outline: none;
     -webkit-tap-highlight-color: transparent;
     user-select: none;
     -moz-user-select: none;
     -webkit-user-select: none;
     box-sizing: border-box;
  }
 
  body{
      background: #121212;
      color: #fff;
  }
`;
export default GlobalStyle;