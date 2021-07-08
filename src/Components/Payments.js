import React, { useState } from 'react'
import { useStateValue } from '../StateProvider';
import './Payments.css'
import CheckoutProduct from './CheckoutProduct'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function Payments() {
    const [{basket,user},dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [disable,setDisabled] = useState(true);
    const [error,setError] = useState(null);

    const handleSubmit = ()=>{

    }

    const handleChange = (event)=>{

        setDisabled(event.empty)
        setError(event.error?event.error.message:"")
    }

    return (
        <div className="payments">
            <div className="payments__container">
                <div className="payments__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Shivaji Park</p>
                        <p>Kolhapur - 416001</p>
                    </div>
                </div>
                <div className="payments__section">
                     <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket?.map((bucket)=>
                        <CheckoutProduct 
                            id={bucket.id}
                            title={bucket.title}
                            image={bucket.image}
                            price={bucket.price}
                            rating={bucket.rating}
                        />)}
                    </div>
                </div>
                <div className="payments__section">
                        <div className="payment__title">
                            <h3>Review Items and Delivery</h3>
                        </div>
                        <div className="payment__details">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>
                                <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value)=>(
                                        <h3>Order Total : {value}</h3>
                                    )}

                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"$"}
                                />
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Payments
