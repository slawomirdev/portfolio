// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 body{
     font-family: 'Lato', sans-serif;
 }


 h1{
     font-size: 2rem
 }

 h2{
     font-size: 1.5rem
 }

 h3{
     font-size: 1rem
 }

 h4{
     font-size: 0.5rem
 }
`;

export default GlobalStyle;
