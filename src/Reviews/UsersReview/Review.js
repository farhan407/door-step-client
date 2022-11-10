import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = ({data}) => {
    const {customer,img,message}=data;
    return (
        <Col md={6} lg={4} className="text-white py-4">
            <div className=''>
                <img src={img} alt="" style={{width:'50px',height:'50px',borderRadius:'50%'}}/>
                <h5>{customer}</h5>
                <p>{message}</p>
            </div>
        </Col>
    );
};

export default Review;