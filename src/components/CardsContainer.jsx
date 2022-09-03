import React from 'react'
import '../styles/CardsContainer.css'
import CardProduct from './CardProduct'
const CardsContainer = ({products}) => {
  return (
    <div className='cards__container'>
        {products && products.map(product => <CardProduct key={product.id} product={product}/> ) }
    </div>
  )
}

export default CardsContainer