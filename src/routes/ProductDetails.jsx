import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getConfig from '../utils'
import '../styles/ProductDetails.css'
import CardProduct from '../components/CardProduct'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'

const ProductDetails = () => {

  const [product, setProduct] = useState()
  const [filtredProducts, setfiltredProducts] = useState()

  const dispatch = useDispatch()

  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  const filtred = products?.filter(productFiltred => productFiltred.category.name == product?.category.name)
  console.log(filtred)
console.log(product)
  const {id} = useParams()

  useEffect(() => {
    const url = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(url, getConfig())
    .then(res => setProduct(res.data.data.product))
    .catch(err => console.log(err))
  }, [])
  
  const handleAddProduct = id => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    let data = {
      id: id,
      quantity: 1
    }
    axios.post(url, data, getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }


  

  return (
    <div className='product__details_container'>
      <div className="principal__product">
       {product && <CardProduct product={product} handleAddProduct={handleAddProduct}/> } 
      </div>

    </div>
  )
}

export default ProductDetails