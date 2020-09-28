import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct" id={id}>
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (<span>⭐</span>))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from the basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct


/*
<Product id="004" title="SIHOHAN Waist Trainer Belt Back Brace Cincher Trimmer Sports Slimming Body Shaper Band with Dual Adjustable Belly for Fitness Workout, Unisex " price={15.99} image="https://www.bachataspice.com/extra-barrigan/amazon-challenge/waist-trainer.jpg" rating={5} />
                    <Product id="005" title="AstroAI Reusable Dust Face Mask with 7 Filters - Personal Protective Adjustable for Running, Cycling, Outdoor Activities(Black, 1 Mask + 7 Activated Carbon Filters +4 Breathing Valves) " price={14.99} image="https://www.bachataspice.com/extra-barrigan/amazon-challenge/face-mask.jpg" rating={4} />

*/