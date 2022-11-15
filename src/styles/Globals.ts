import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --shape: #FFFFFF;
        --background: #f0f2f5;

        --blue: #5429CC;
        --blue-light: #6933FF;
        --green: #33CC95;
        --red: #E62E4D;

        --title: #363F5F;
        --text:  #969CB2;
        --overlay: rgba(0, 0, 0, 0.5);

        --input-gray: #E7E9EE;
        --input-border: #d7d7d7;
;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
        font-family: 'Poppins', sans-serif;
    }

    border-style, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--title);
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    button {
        cursor: pointer; 
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed
    }

    .react-modal-overlay {
        background-color: var(--overlay);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background-color: var(--shape);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close-icon {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
		border: 0;
        background: transparent;

        transition: opacity 0.5s;

        &:hover {
            opacity: 0.7;
        }
	}

`;
