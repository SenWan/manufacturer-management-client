import React from 'react';
import Gallery from '../Gallery/Gallery';
import Products from '../Products/Products';
import Summary from '../Summary/Summary';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;