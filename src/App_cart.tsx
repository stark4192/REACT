import React from 'react'
import {useState} from 'react'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
function App_cart() {
    const [cartItems,setCartItems] = useState(['Product 1', 'Product 2'])
  return (
    <div>
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear = {()=> setCartItems([...cartItems.slice(0,cartItems.length-1)])}></Cart>
    </div>
  )
}

export default App_cart