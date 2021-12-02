import { useState } from 'react'
import Navbar from './components/Navbar'
import {GlobalStyle} from './components/GlobalStyle'
import Home from './pages/Home'

function App() {
  const [cart, setCart] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const products = [
    {
      title: "Hambuguer",
      price: 15,
      category: 'Sanduíches',
      img: "",
      id: 1
    },
    {
      title: "X-Burgue",
      price: 15.40,
      category: 'Sanduíches',
      img: "",
      id: 2
    },
    {
      title: "Big Kenzie",
      price: 15,
      category: 'Sanduíches',
      img: "",
      id: 3
    },
    {
      title: "Fanta Guaraná",
      price: 15,
      category: 'Bebidas',
      img: "",
      id: 4
    }
  ]

  return (
      <>
        <GlobalStyle/>
        <Navbar products={products} searchProducts={searchProducts} setSearchProducts={setSearchProducts} />
        <Home cart={cart} setCart={setCart} products={products} searchProducts={searchProducts}/>
      </>
      );
}

export default App;
