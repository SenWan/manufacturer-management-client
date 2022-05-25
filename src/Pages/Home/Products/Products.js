import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('manufacturers.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <div id='inventories' className='container'>
            <h2 className='inventories-title'>Inventories</h2>
            <div className='inventories-container'>
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