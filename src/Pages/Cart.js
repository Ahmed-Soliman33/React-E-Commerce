import React from 'react'
import CartItems from '../Components/CartItems/CartItems'
import Navbar from '../Components/Navbar/Navbar'

const Cart = () => {
  return (
    <div>
      <CartItems />
    </div>
  )
}
export default React.memo(Cart)