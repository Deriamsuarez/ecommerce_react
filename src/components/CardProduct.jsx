import React from 'react'
import '../styles/CardProduct.css'

const CardProduct = ({product}) => {

  return (
    <div className='card__product'>
        <div className="card__product_header">
            <img src={product.productImgs[0]}/>
        </div>
        <div className="card__product_info">
            <h3 className="product__name">{product.title}</h3>
            <div className="action__section">
                <div className="product__price_container">
                    <label htmlFor="price">price</label>
                    <h4>{product.price}</h4>
                </div>
                <button>BUY</button>
            </div>
        </div>
    </div>
  )
}

export default CardProduct