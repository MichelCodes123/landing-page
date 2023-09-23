import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        --main-font: "Epilogue", "sans-serif";
        --main-color: hsl(0, 0%, 8%);
        --secondary-color: hsl(0,0%,41%);
    }
    body{
        width: 100vw;
        font-family: var(--main-font);
    
    }
    html{
        box-sizing: border-box;
        scroll-behavior: smooth;
        width: 100vw;
        height: 100vh;       
             font-size: 1rem;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
        border: 0;

}
`

export default GlobalStyle;