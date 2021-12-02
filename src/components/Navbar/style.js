import styled from 'styled-components'

export const NavBarWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: var(--grey-1);
    display: flex;
    align-items: center;
    z-index: 2;
    
    @media(max-width: 991px){
        height: auto;
        padding: 1rem 
    }
`

export const NavbarContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media(max-width: 991px){
        flex-direction: column;
        grid-gap: 1rem;
    }
`