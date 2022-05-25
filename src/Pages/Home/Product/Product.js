import React from 'react';

const Product = ({product}) => {
    const {name, img, description, quantity, price, minimum_order, available_quantity} = product;
    return (
        <div className='inventory'>
            <img className='w-100 image' src={img} alt="" />
            <div className='details'>
                <h4>Name: {name}</h4>
                <h6>Price: {price}</h6>
                <h6>Quantity: {quantity}</h6>
                <h6>Minimum Order: {minimum_order}</h6>
                <h6>Available Quantity: {available_quantity}</h6>
                <p>{description}</p>
                <button className='btn btn-primary w-100'>Book Now</button>
            </div>
        </div>
    );
};

export default Product;