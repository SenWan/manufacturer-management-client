import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer p-1  text-center mt-5 text-white'>
            <p><small> Copyright © {new Date().getFullYear()}</small></p>
            <p>Email: senwan96@gmail.com</p>
            <p>Contact: 123456</p>
        </div>
    );
};

export default Footer;