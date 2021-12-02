import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin:0;
        box-sizing: border-box
    }

    :root{
        /* Brand Colors */
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;

        /* Grey Scale */
        --grey-4: #333333;
        --grey-3: #828282;
        --grey-2: #E0E0E0;
        --grey-1: #F5F5F5;

        /* Size */
        --radius: 8px;
    }
`

export const Container = styled.main`
    max-width: 1200px;
    width: 1200px;
    margin-right: auto !important;
    margin-left: auto !important;

    @media(max-width: 991px){
        max-width: 520px
    }

    @media(max-width: 700px){
        max-width: 100%;
        padding: 0 1rem;
        margin: 0 auto;
    }
`

export const Heading1 = styled.h1`
    font-size: 26px;
    color: var(--grey-4);
`
export const Heading2 = styled.h2`
    font-size: 22px;
    color: var(--grey-4);
`
export const Heading3 = styled.h3`
    font-size: 18px;
    color: var(--grey-4);
`
export const Heading4 = styled.h4`
    font-size: 14px;
    color: var(--grey-4);
`
export const Headline = styled.p`
    font-size: 16px;
    color: var(--grey-3)
`
export const Body = styled.span`
    font-size: 14px;
    color: var(--grey-3)
`
export const Caption = styled.small`
    font-size: 12px;
    color: var(--grey-3)
`

export const Detail = styled.small`
    font-size: 10px;
    color: var(--grey-3)
`