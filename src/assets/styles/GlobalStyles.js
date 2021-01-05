import { createGlobalStyle } from "styled-components";
import theme from '../styles/Theme';
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
     font-family: 'Mulish', sans-serif;
  }
  h1{
    font-size: 3.5em;
  }
  h2{
    font-size: 3.1em;
  }
  h3{
    font-size: 2.5em;
  }
  h4{
    font-size: 1.8em;
  }
  h5{
    font-size: 1.6em;
  }
  h6{
    font-size: 1.24em;
  }
  p{
    font-size: 1.2em;
  }
`;
export default GlobalStyle;