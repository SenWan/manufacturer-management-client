import React from 'react';
import Products from '../Products/Products';
import Summary from '../Summary/Summary';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
        </div>
    );
};

export default Home;