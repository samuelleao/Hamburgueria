import { CartHeader, CartWrapper, CartHeading3, CartMain, CartFooter, CartFooterHeading4 } from './style'
import CartProductCard from '../CartProductCard'
import Button from '../Button'
import { Heading4, Heading3, Body } from '../GlobalStyle'

function Cart({ cart, setCart }) {

    const cartTotal = () => {
        return cart.reduce((acc, productCartValue) => acc + productCartValue.price, 0)
    }

    const removeAllProducts = () => {
        setCart([])
    }

    return (
        <>
            <CartWrapper>
                <CartHeader>
                    <CartHeading3>Carrinho de compras</CartHeading3>
                </CartHeader>
                <CartMain>
                    {
                        cart.length > 0 ?
                            <CartProductCard cart={cart} setCart={setCart} />
                        :
                            <div className="noProductCart">
                                <Heading3>Sua sacola está vazia</Heading3>
                                <Body>Sua sacola está vazia</Body>
                            </div>
                    }
                </CartMain>
                {
                cart.length > 0 &&
                <CartFooter>
                    <main>
                        <Heading4>Total</Heading4>
                        <CartFooterHeading4>{cartTotal().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</CartFooterHeading4>
                    </main>
                    
                    {
                        cart.length > 1 &&
                        <Button size="60" type="disable" onClick={() => {removeAllProducts()}}>Remover Todos</Button>
                    }
                </CartFooter>
                }
            </CartWrapper>
        </>
    );
}

export default Cart