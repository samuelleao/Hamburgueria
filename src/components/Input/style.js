import styled from 'styled-components'

export const InputWrapper = styled.div`
    position: relative;
    width: 300px;
    display: flex;
    align-items:center;
    justify-content: flex-end;
    padding: 0.5rem;

    button{
        z-index: 1;
    }

    @media(max-width: 991px){
        width: 100%
    }

    input{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        padding: 0 7rem 0 0.5rem;
        background: none;
        border: 2px solid var(--grey-2);
        border-radius: var(--radius);
        background: #fff;

        &:focus{
            border-color:var(--grey-4);
        }

        ::placeholder{
            color: var(--grey-2)
        }
    }
`