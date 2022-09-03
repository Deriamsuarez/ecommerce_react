import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardsContainer from '../components/CardsContainer'
import Search from '../components/Search'
import { getAllProducts } from '../store/slices/products.slice'
import '../styles/Home.css'


const Home = () => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.products)

  console.log(products)
  
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])


  return (
      <div className='home'>
        <Search/>
        <CardsContainer products={products}/>
      </div>
  )
}

export default Home