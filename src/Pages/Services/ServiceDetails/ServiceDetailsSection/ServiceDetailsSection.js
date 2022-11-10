import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ReviewsSection from '../../../../Reviews/ReviewsSection';


const ServiceDetailsSection = () => {
    const data = useLoaderData();
    const { name, img, price, description,_id } = data;
    return (
        <Container className='my-3'>
            <h1 className='text-white text-center fw-bold py-3'>Service In Details</h1>
            <Container className='my-3'>
                <Row className='g-3'>
                    <Col md={6} lg={6}>
                        <div className='text-center'>
                            <img className='img-fluid rounded' src={img} alt="" />
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <div className='description'>
                            <h1 className='text-white pt-4 pb-2 my-5 fw-bold'>{name}</h1>
                            <small className='text-white'>{description}</small>
                            <p className='fw-bold text-white fs-5'>{price}</p>
                            <Button className='fw-bold my-3 text-white' variant="success">Add to Cart</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <h1 className='text-white text-center fw-bold py-3'>Customer Reviews</h1>
            <ReviewsSection serviceName={name} id={_id}></ReviewsSection>
        </Container>
    );
};

export default ServiceDetailsSection;