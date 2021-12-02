import { InputWrapper } from './style'
import Button from '../Button'

function inputGroup({placeholder, value, searchProducts, setSearchProducts, products, ...rest}) {

    const initSearchProducts = (value) => {

        if(value !== ''){
            const textContains = products.filter(product => {
                return product.title.includes(`${value}`)
            })
    
            setSearchProducts([
                ...textContains
            ])
        }else{
            setSearchProducts([
                ...products
            ]) 
        }
        
    }

    return (
        <InputWrapper>
            <input placeholder={placeholder} {...rest}/>
            <Button size="40" type="primary" onClick={()=>{ initSearchProducts(value) }}>Pesquisar</Button>
        </InputWrapper>
    )
}

export default inputGroup;