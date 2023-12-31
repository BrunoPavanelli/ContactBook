import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    html, body, main, dialog, figure, img, div, section, article, input, select, button, textarea, p, h1, h2, h3, h4, h5, h6, ul, li, a, form {
        margin: 0;
        padding: 0;

        border: none;
        outline: none;
        list-style: none; 
        text-decoration: none;
        color: var(--black-0);
        
        -webkit-box-sizing: border-box;
        box-sizing: border-box;

        font-family: var(--ff-Kanit);

        button {
            cursor: pointer;
        }
    }
`;

export const GlobalStyle = createGlobalStyle`
    :root {
        /* Colors */
        --white: #fff;
        --black-0: #020e13;
        --black: #2D3338;
        --black-2: #353B40;
        --black-3: #3B4148;
        --purple-primary: #01022F;
        --purple-primary-opacity: rgba(1,2,47,0.3);
        --primary-orange: rgba(185, 96, 37, 0.918);
        --primary-yellow: #F5D2BB;
        --primary-pink: #B08BAC;
        --primary-yellow-opacity: rgb(233, 238, 204, 0.6);
        --error-form: rgba(	252, 3, 93, 0.6);

        /* Font-Family */
        --ff-Kanit: 'Kanit', sans-serif;
        --ff-Pacifo: 'Pacifico', cursive;
        --ff-Sulphur: 'Sulphur Point', sans-serif;

        /* Font-Size */
        --fs-50: 3.125rem;
        --fs-30: 1.875rem;
        --fs-29: 1.8125rem;
        --fs-25: 1.5625rem;
        --fs-20: 1.25rem;
        --fs-19: 1.2rem;
        --fs-16: 1rem;
        --fs-12: 0.75rem;
        --fs-10: .625rem;

        /* Font-Weight */
        --fw-700: 700;
        --fw-600: 600;
        --fw-500: 500;
        --fw-400: 400;

        /* Border-Radius */
        --br-8: 8px;

        /* Heights */
        --inpt-height: 3.125rem;
        --btn-height: 2.625rem;
        --box-title-height: 5.875rem;
        --links-distance-line-to-text: 1.815rem;
        --post-height: 8rem;

        --toastify-color-success: #B08BAC;
        --toastify-color-error: rgba(	252, 3, 93, 0.8);
    }

    /* Utility-Classes */
    /* Container */
    .container__page {
        width: 80%;
        max-width: 1500px;
        height: 100%;
    }
    .container__pages--forms {
        padding-inline: 7rem;
    }

    .container__pages {
        padding-inline: 20px;
    }

    .burger__menu {
        width: max-content;

        cursor: pointer;
     }

     .close__menu {
        width: max-content;

        cursor: pointer;
     }

    /* Texts */
    /* Fonts */
     .ff__sulphur {
        font-family: var(--ff-Sulphur);
     }

    .fw__400 {
        font-weight: var(--fw-400);
    }

    .fw__500 {
        font-weight: var(--fw-500);
    }

    .fw__600 {
        font-weight: var(--fw-600);
    }

    .fw__700 {
        font-weight: var(--fw-700);
    }

    .fs__10 {
        font-size: var(--fs-10);
    }

    .fs__12 {
        font-size: var(--fs-12);
    }

    .fs__16 {
        font-size: var(--fs-16);
    }

    .fs__19 {
        font-size: var(--fs-19);
    }

    .fs__20 {
        font-size: var(--fs-20);
    }

    .fs__25 {
        font-size: var(--fs-25);
    }

    .fs__29 {
        font-size: var(--fs-29);
    }

    .fs__30 {
        font-size: var(--fs-30);
    }

    .fs__50 {
        font-size: var(--fs-50);
    }

    /* Colors */
    .yellow__text {
        color: var(--primary-yellow);
    }

    .yellow__text--opacity {
        color: var(--primary-yellow-opacity);
    }

    .purple__text {
        color: var(--purple-primary);
    }

    .pink__text {
        color: var(--primary-pink);
    }

    .black__text0 {
        color: var(--black-0);
    }

    .black__text2 {
        color: var(--black-3);
    }

    .primary__blue__text {
        color: var(--primary-blue);
    }

    .blue__white__text {
        color: var(--primary-white-blue-opacity);
    }

    .errors__text {
        color: var(--error-form);
    }

    /* Letter Spacing */
    .letterspace__header {
        letter-spacing: 0.125rem;
    }
`;