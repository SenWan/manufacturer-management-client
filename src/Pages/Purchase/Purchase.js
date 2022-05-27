import React from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Purchase = () => {
  const {purchaseId} = useParams();

    const handlePurchase = event => {
        event.preventDefault();
    }
    return (
        <div>
          <h2 className='text-center mt-5'>{purchaseId}</h2>
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
        </div>
    );
};

export default Purchase;