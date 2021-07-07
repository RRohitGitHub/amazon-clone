import React from 'react'
import { useStateValue } from '../StateProvider';
import './Payments.css'
import CheckoutProduct from './CheckoutProduct'

function Payments() {
    const [{basket,user},dispatch] = useStateValue();
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
                            {/* Stripe */}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Payments
