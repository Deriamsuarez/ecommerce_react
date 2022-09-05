import React from 'react'
import '../styles/Cart.css'
import CartProduct from './Cart/CartProduct'

const Cart = ({cartHidden}) => {
  return (
    <section className={`side__cart ${cartHidden ? 'cart__hidden' : ''} `} >
    <h2>Cart</h2>
    <div className="card__products_container">
    <CartProduct/>

    </div>
  </section>
  )
}

export default Cart