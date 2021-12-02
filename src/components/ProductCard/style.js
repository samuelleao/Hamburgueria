import styled from 'styled-components'
import { Body } from '../../components/GlobalStyle'

export const ProductCardWrapper = styled.article`
    width: 30%;
    display: flex;
    flex-direction: column;
    border: 2px solid var(--grey-2);
    border-radius: 4px;
    height: max-content;

    &:hover{
        border-color: var(--grey-4)
    }

    &:hover img{
        transform: scale(1.1)
    }

    @media(max-width: 991px){
        min-width: 70%
    }
`

export const ProductCardHeader = styled.header`
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-1);
    overflow: hidden;

    img{
        object-fit: cover;
        transition: 0.6s ease
    }
`

export const ProductCardMain = styled.main`
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;
    padding: 1rem
`

export const ProductCardMainBody = styled(Body)`
    font-weight: 600;
    color: var(--color-primary)
`