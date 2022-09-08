
import React from "react";
import '../styles/Checkout.css'



const Checkout = () => {

    return (
        <div className="checkout__container">
            <div className="checkout__card__design">
                <div className="card__container">
                    <img className='card__front' src="card-front.png" alt="" />
                    <label className="card__number" htmlFor="card_number">1234 5678 9012 3456</label>
                    <label className="card__name" htmlFor="card_number">Deriam Suarez</label>
                    <label className="card__date" htmlFor="card_number">06/26</label>
                </div>
                <div className="card__container">
                    <img className='card__back' src="card-back.png" alt="" />
                    <label className="card__cvv" htmlFor="card_number">543</label>
                </div>
            </div>
            <div className="checkout__form">
                <form className='form__full' action="">
                    <h2>Add Card</h2>
                    <input type="text" />
                    <div className="exp__date_container">
                        <div className="exp__container">
                            <label className="exp_label" htmlFor="">Exp date MM/YY</label>
                            <div className="inputs__container">
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </div>
                        <div className="cvv__container">
                            <label className="exp_label" htmlFor="">CVV</label>
                            <input type="text" />
                        </div>
                    </div>
                    <button>Checkout</button>
                </form>
            </div>
        </div>
    )

}

export default Checkout