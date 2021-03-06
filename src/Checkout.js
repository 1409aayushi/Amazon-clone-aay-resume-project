import React from 'react'
import './Checkout.css'
import Subtotal from "./Subtotal"
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from "./StateProvider";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout_left">
             <img className='checkout_ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/AB_EventMLP/Laptop_Set1_1500_250_1706.jpg" alt="" />
            
            <div>
            <h2 className="checkout_title">Your shopping Basket</h2>
            {basket.map(item => {
                <CheckoutProduct
                id={item.id}
                title = {item.title}
                image={item.image}
                price={item.price}
                rating = {item.rating} />
            })}
            {/*Checkout Product */}
             {/*Checkout Product */}
              {/*Checkout Product */}
               {/*Checkout Product */}
            </div>
             </div>
             <div className="checkout_right">
             <Subtotal />
              <h2> The subtotal will go here</h2>
             </div>
        </div>
    )
}

export default Checkout
 