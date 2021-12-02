import {ButtonWrapper} from './style'

function Button({ children, type, size, ...rest}) {
    return (
        <ButtonWrapper className={`${type} size-${size}`} {...rest}>
            {children}
        </ButtonWrapper>
    )
}

export default Button