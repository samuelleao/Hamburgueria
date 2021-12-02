import styled from 'styled-components'
import { Detail } from '../../components/GlobalStyle'
const WidthImage = 80;

export const CartProductCardWrapper = styled.div`
    display: flex;
    grid-gap: 1rem
`

export const CartProductCardHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-2);
    width: ${WidthImage}px;
    height: ${WidthImage}px;
    padding: 1rem;
    border-radius: 4px;

    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

export const CartProductCardMain = styled.main`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: calc(100% - ${WidthImage}px);
`

export const CartProductCardMainDetail = styled(Detail)`
    &:hover{
        color: var(--grey-4);
        border-bottom: 1px solid var(--grey-4); 
        cursor: pointer
    }
`