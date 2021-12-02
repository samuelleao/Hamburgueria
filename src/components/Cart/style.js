import styled from 'styled-components'
import {  Heading3, Heading4 } from '../GlobalStyle'

const distancyHeaderMain = 60;
const paddingElementsCart = `1rem`;
const gapElements = `1rem`;

export const CartWrapper = styled.aside`
    background-color: var(--grey-1);
    position: relative;
    width: 300px;
    height: max-content;
    border-radius: 5px; 
    overflow: hidden;
    position: sticky;
    top: 6rem;

    @media(max-width: 991px){
        width: 100%;
    }
`

export const CartHeader = styled.header`
    background-color: var(--color-primary);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: ${paddingElementsCart};
    height: ${distancyHeaderMain}px;
    display: flex;
    align-items: center;
`

export const CartMain = styled.main`
    padding: ${paddingElementsCart};
    margin-top: ${distancyHeaderMain}px;
    display: flex;
    flex-direction: column;
    grid-gap: ${gapElements};
    height: 300px;
    overflow-y: auto;

    .noProductCart{
        margin: auto;
        text-align: center;
    }

    @media(max-width: 991px){
        height: auto;
        overflow-y: auto;
    }
`

export const CartFooter = styled.footer`
    padding: ${paddingElementsCart};
    display: flex;
    flex-direction: column;
    grid-gap: ${gapElements};
    border-top: 2px solid var(--grey-2);

    button{
        width: 100%
    }
    main{
        display: flex;
        justify-content: space-between
    }
`

export const CartHeading3 = styled(Heading3)`
    color: #fff
`

export const CartFooterHeading4 = styled(Heading4)`
    color: var(--grey-3)
`