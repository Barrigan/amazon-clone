import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { DialogTitle } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https:www.bachataspice.com/extra-barrigan/amazon-challenge/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h3>Hello {user ? user.email : "Guest"}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {console.log("My checkout basket: ", basket)}
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    {/* CheckoutProduct*/}
                    {/* CheckoutProduct*/}
                    {/* CheckoutProduct*/}
                    {/* CheckoutProduct*/}
                    {/* CheckoutProduct*/}

                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
