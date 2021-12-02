import styled from 'styled-components'

export const ProductWrapperCards = styled.main`
    display: flex;
    flex-wrap: wrap;
    grid-gap: 2rem;
    width: calc(100% - 300px);

    @media(max-width: 991px){
        flex-wrap: nowrap;
        overflow-x: auto;
        min-width: calc(100% + 2rem) !important;
        padding: 1rem;
        margin: 0 -1rem;
    }
`