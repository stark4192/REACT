import React from 'react'

interface Props{
    //cartItems:string[],
    cartItemsCount:number
}

const NavBar = ({cartItemsCount}:Props)=> {
  return (
    <div>
      NavBar : {cartItemsCount}
    </div>
  )
}

export default NavBar
