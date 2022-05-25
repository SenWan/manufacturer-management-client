import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <div id='Tools' className='container'>
            <h2 className='tools-title'>Tools</h2>
            <div className='tools-container'>
                {
                    products.slice(-6).map(product => <Product
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;