import styled from 'styled-components'
import {  Container } from '../../components/GlobalStyle'

const paddingTopBottomContainer = 6;

export const HomeContainer = styled(Container)`
    padding-top: ${paddingTopBottomContainer}rem;
    padding-bottom: ${paddingTopBottomContainer}rem;
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 991px){
        padding-top: 10rem;
        grid-gap: 2rem;
    }
`