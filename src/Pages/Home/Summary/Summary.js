import React from 'react';

const Summary = () => {
    return (
        <div className='container mt-5 shadow-lg ps-5'>
            <h2 className='text-center text-primary'>Business Summary</h2>
            <div className='row mt-5'>
            <div className='col-4'>
                <img src="people.png" alt="" />
                <h1>5000+</h1>
                <h2>Happy Clients</h2>
            </div>
            <div className='col-4'>
                <img src="percent.png" alt="" />
                <h1>10000+</h1>
                <h2>Total Sells</h2>
            </div>
            <div className='col-4'>
                <img src="review.png" alt="" />
                <h1>200+</h1>
                <h2>Customer Feedback</h2>
            </div>
        </div>
        </div>
    );
};

export default Summary;