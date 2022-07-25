import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --shape: #FFFFFF;
        --background: #f0f2f5;

        --blue: #5429CC;
        --green: #33CC95;
        --red: #E62E4D;

        --title: #363F5F;
        --text:  #969CB3;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-border;
        text-decoration: none;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--title);
    }
`;
