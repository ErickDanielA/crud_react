import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: clearInterval;
        background-color: #f2f2f2;
        padding-left: 34rem;
        padding-top: 3rem
    }
`;

export default GlobalStyle;