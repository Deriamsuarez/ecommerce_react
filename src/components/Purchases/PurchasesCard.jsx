import React from 'react'
import { useNavigate } from 'react-router-dom'

const PurchasesCard = ({ purchase }) => {

    const navigate = useNavigate()

    const id = purchase.cartId

    console.log(purchase.cartId)
    return (<>

        <div onClick={() => navigate(`/purchase/${id}`)} className='purchaseItem'>
            <span>Invoice ID: <strong>{purchase.cart.id}</strong></span>
        </div>
    </>
    )
}

export default PurchasesCard