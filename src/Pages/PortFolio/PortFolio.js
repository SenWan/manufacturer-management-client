import React from 'react';

const PortFolio = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-center text-primary'>My PortFolio</h2>
            <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-6'>
                <h6>Name: U Sen Wan</h6>
                <h6>Email: senwan96@gmail.com</h6>
                <h6>Address: Cox's Bazar</h6>
                <h6>Background: BSC in computer science and Engineerin</h6>
                <h6>Skills: HTML, Javascript, React, Node, Express</h6>
            </div>
            <div className='col-6'>
                <img className='img-fluid' height={50} src="top.png" alt="" />
            </div>
            </div>
            <h2 className='text-center text-primary mt-5'>My Latest Work</h2>
            <div className='row gap-4 d-flex justify-content-center align-items-center container mt-2 p-3'>
                <div className='col-3 border rounded'>
                <a href="https://warehouse-management-sys-3683f.web.app/">
                    <img className='img-fluid' src="port1.png" alt="" />
                </a>
                </div>
                <div className='col-3 border rounded'>
                <a href="https://car-services-system-1f619.web.app/">
                    <img className='img-fluid' src="port2.png" alt="" />
                </a>
                </div>
                <div className='col-3 border rounded'>
                <a href="https://senwan-reviews-site.netlify.app/">
                    <img className='img-fluid' src="port3.png" alt="" />
                </a>
                </div>
                <div className='col-4'></div>
                <div className='col-4'></div>
            </div>
        </div>
    );
};

export default PortFolio;