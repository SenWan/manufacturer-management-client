import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {name, img, description, quantity, price, minimum_order, available_quantity} = product;

    const navigate = useNavigate();
    const navigatePurchase = (name) => {
        navigate(`/purchase/${name}`)
    }
    return (
        <div className='tools'>
            <img className='w-100 image' src={img} alt="" />
            <div className='details'>
                <h4>Name: {name}</h4>
                <h6>Price: {price}</h6>
                <h6>Quantity: {quantity}</h6>
                <h6>Minimum Order: {minimum_order}</h6>
                <h6>Available Quantity: {available_quantity}</h6>
                <p>{description}</p>
                <button onClick={()=> navigatePurchase(`Name: ${name}` )} className='btn btn-primary w-100'>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;