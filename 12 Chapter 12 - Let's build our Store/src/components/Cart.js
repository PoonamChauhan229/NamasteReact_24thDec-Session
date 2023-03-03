import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems=useSelector(store=>store.cart.items)
    console.log(cartItems)
    // most imp part
    // useSelector => this is the place we will ssay what its subscribing
  return (
    <>
    <div>CartItems</div>
    {cartItems.map((element)=>{
        console.log(element)
      return <h1>{element.name}</h1>
    })}
  
    </>
    )
}

export default Cart;