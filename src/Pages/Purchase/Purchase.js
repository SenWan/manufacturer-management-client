import React from 'react';
import { Form } from 'react-bootstrap';

const Purchase = () => {

    const handlePurchase = event => {
        event.preventDefault();
    }
    return (
        <div className='container mt-5' style={{height:'55vh'}}>
            <h4 className='text-center text-primary'>Purchase Form</h4>
        <Form onSubmit={handlePurchase}>
          <Form.Group className="mb-2" controlId="">
            <Form.Control type="text" placeholder="Enter Number" required />
          </Form.Group>
  
          <Form.Group className="mb-2" controlId="">
            <Form.Control  type="text" placeholder="Address" required />
          </Form.Group>
        </Form>
      </div>
    );
};

export default Purchase;