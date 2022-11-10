import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MyAllReviews = ({ data,handleDelete }) => {
    const { _id, serviceName, message } = data;
    return (
        <Col md={4} lg={4} className='text-center  py-5'>
            <Card>
                
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text>
                        <small className='fw-bold'>{message}</small>
                    </Card.Text>
                    <Button className='px-3 mx-2 py-2 fw-bold' variant='success'><Link className='text-white text-decoration-none' to={`/updateReviews/${_id}`}>Edit</Link></Button>
                    <Button onClick={()=>handleDelete(_id)} className='px-3 py-2 fw-bold' variant='success'><Link className='text-white text-decoration-none' to=''>Delete</Link></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MyAllReviews;