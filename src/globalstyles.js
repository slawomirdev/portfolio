// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *,  *:before, *:after{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 body{
     font-family: 'Lato', sans-serif;
     overflow-x: hidden;
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

 p{
     font-size:1.2rem;
 }

 a{
     text-decoration: none;
 }

  a:after {
    content: "";
    position: absolute;
    background: #ffffff;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  a:hover:after {
    width: 100%;
  }

  //scroll
::-webkit-scrollbar {
    width: 6px;
    border-left: 1px solid #E6ECF8;
}
::-webkit-scrollbar-thumb {
    background-color: #141c3a;
}

    .notActive {
      color: grey;
      cursor: default;
    }


 .navbarActive {
      height: 100vh;
    }

    .emojiNotActive{
        opacity: 0;
    }

.underline{
    height: 2px;
    background-color: #fff;
    width: 300px;
}


`;

export default GlobalStyle;
