import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PurchasesCard from '../components/Purchases/PurchasesCard'
import '../styles/Purchase.css'
import getConfig from '../utils'

const Purchase = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(url, getConfig())
    .then(res => setPurchases(res.data.data.purchases))
    .catch(err => console.log(err))
  }, [])
  



  return (
    <div className="purchases__container">
      {purchases && purchases.map(purchase => <PurchasesCard key={purchase.id} purchase={purchase}/>)}
    </div>

  )
}

export default Purchase