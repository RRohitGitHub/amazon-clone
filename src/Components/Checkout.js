import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import BasketItem from './BasketItem'
import { useStateValue } from '../StateProvider';

function Checkout() {
    const [{basket},dispatch] = useStateValue();
    console.log(basket[0]);
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-apple.jpg?uklBv0VgNUUcdJW.n6XoIOUC0K8BDW5e&itok=6QDTO-Fg" alt=""/>
            

                <div>
                    <h2 className="checkout__title">
                        Your shopping basket
                    </h2>
                    {basket.map((basket)=>
                    (
                        
                        <BasketItem title={basket.title} />
                    ))}
                </div>

            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
