import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct'


function Checkout() {
    const [{basket,user},dispatch] = useStateValue();
    console.log("I am in Checkouttt page")
    console.log(basket)
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-apple.jpg?uklBv0VgNUUcdJW.n6XoIOUC0K8BDW5e&itok=6QDTO-Fg" alt=""/>
            

                <div>
                    <h3>Hello, {user?.email}</h3> 
                    <h2 className="checkout__title">
                        Your shopping basket
                    </h2>

                    {basket?.map((bucket)=><CheckoutProduct 
                        id={bucket.id}
                        title={bucket.title}
                        image={bucket.image}
                        price={bucket.price}
                        rating={bucket.rating}
                    />)}

                </div>

            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
