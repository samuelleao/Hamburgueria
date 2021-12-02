import { ProductCardWrapper, ProductCardHeader, ProductCardMain, ProductCardMainBody } from './style'
import ProductImg from '../../assets/img/product1.png'
import { Heading3, Caption } from '../../components/GlobalStyle'
import Button from '../Button'

function ProductCard({ products, cart, setCart }) {

    const cartData = (id) => {
        const productEmpty = cart.find(productOnly =>{
            return productOnly.id === id
        })

        if(productEmpty === undefined){
            const newProductCart = products.filter(product => product.id === id)
            setCart([
                ...cart,
                ...newProductCart
            ])
        }
    }
 
    return (
        <>
            {
                products.map(product => (
                    <ProductCardWrapper key={product.id}>
                        <ProductCardHeader>
                            <img src={ProductImg} alt={product.title} title={product.title} loading="lazy" />
                        </ProductCardHeader>
                        <ProductCardMain>
                            <Heading3>{product.title}</Heading3>
                            <Caption>{product.category}</Caption>
                            <ProductCardMainBody>{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</ProductCardMainBody>
                            <Button onClick={(e) => {cartData(product.id)}} type="primary" size="40">Adicionar</Button>
                        </ProductCardMain>
                    </ProductCardWrapper>
                ))
            }
        </>
    )
}

export default ProductCard;