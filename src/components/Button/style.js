import styled from 'styled-components'

export const ButtonWrapper = styled.button`
    width: max-content;
    padding: 0 20px;
    outline: none;
    border: 1px solid;
    color: #fff;
    border-radius: var(--radius);
    cursor: pointer;
    transition: 0.5s ease;
    
    &.primary{
        background-color: var(--color-primary);
        border-color: var(--color-primary);

        &:hover{
            background-color: var(--color-primary-50);
            border-color: var(--color-primary-50);
        }
    }

    &.disable{
        background-color: var(--grey-2);
        border-color: var(--grey-2);
        color: var(--grey-3);

        &:hover{
            color: var(--grey-4);
        }
    }

    &.size-40{
        height: 40px
    }

    &.size-60{
        height: 60px
    }
`