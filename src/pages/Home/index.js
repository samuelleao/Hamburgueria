import ProductCard from '../../components/ProductCard'
import {ProductWrapperCards} from '../../components/ProductWrapperCards'
import Cart from '../../components/Cart'
import {HomeContainer} from './style'

function Home({cart, setCart, products, searchProducts}) {
  return (
      <>
        <HomeContainer>
          <ProductWrapperCards>
            {
            searchProducts.length > 0 ? 
            <ProductCard products={searchProducts} cart={cart} setCart={setCart}/> 
            : 
            <ProductCard products={products} cart={cart} setCart={setCart}/>}
          </ProductWrapperCards>
          <Cart cart={cart} setCart={setCart} />
        </HomeContainer>
      </>
      );
}

export default Home;
