import { CartProductCardWrapper, CartProductCardHeader, CartProductCardMain, CartProductCardMainDetail } from "./style";
import { Heading4, Caption } from '../../components/GlobalStyle'
import ProductImg from '../../assets/img/product1.png'

function CartProductCard({ cart, setCart }) {

    const removeProductCart = (productId) =>{
        const cartUpdate = cart.filter(product => product.id !== productId)

        setCart([
            ...cartUpdate
        ])
    } 

    return (
        <>
            {cart.map((productCart) => 
                    <CartProductCardWrapper key={productCart.id}>
                        <CartProductCardHeader>
                            <img src={ProductImg} alt={productCart.title} title={productCart.title} loading="lazy" />
                        </CartProductCardHeader>
                        <CartProductCardMain>
                            <div>
                                <Heading4>{productCart.title}</Heading4>
                                <Caption>{productCart.category}</Caption>
                            </div>
                            <CartProductCardMainDetail onClick={()=>{removeProductCart(productCart.id)
                            }}>Remover</CartProductCardMainDetail>
                        </CartProductCardMain>
                    </CartProductCardWrapper>
                )}
        </>
    )
}

export default CartProductCard;