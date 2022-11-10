import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import bannerOne from '../../Images/banner-1.png';
import './Home.css'
import fastDelivery from '../../Images/fast-delivery.png';
import track from '../../Images/track.png';
import hand from '../../Images/hand.png';
import moto from '../../Images/moto.png';
import HomeCard from './HomeCard/HomeCard';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    let title = "Door Step -Home";
    document.title = title;
    return (
        <Container>
            <Container>
                <Row>
                    <Col md={6} lg={6}>
                        <div className='description'>
                            <h1 className='text-white pt-4 pb-2 my-5 fw-bold'>Fast Delivery</h1>
                            <p className='text-white'>Making the world a better place, one delivery at a time. Provide best delivery service. Fastest and safe delivery. I'll Never compromise with my service.</p>
                            <Button className='px-4 py-2 my-3 fw-bold' variant="success"><Link className='ExploreButtonLink' to='/services'>Explore Services</Link></Button>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <div className='text-center'>
                            <img className='img-fluid' src={bannerOne} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='text-white text-center my-5'>
                <Row className='g-3'>
                    <Col md={4} lg={4}>
                        <div>
                            <img src={fastDelivery} alt="" />
                        </div>
                        <h3>24/7 Service</h3>
                        <small>I’ll be there for you. Same day delivery or next day delivery? It’s your call.</small>
                    </Col>
                    <Col md={4} lg={4}>
                        <div>
                            <img src={hand} alt="" />
                        </div>
                        <h3>Affordable</h3>
                        <small>Transparent pricing with no hidden costs. Pay directly through the app or make a cash payment.</small>
                    </Col>
                    <Col md={4} lg={4}>
                        <div>
                            <img src={track} alt="" />
                        </div>
                        <h3>Real-time tracking</h3>
                        <small>Get a bird’s eye view of your delivery progress in real-time.</small>
                    </Col>
                </Row>
            </Container>
            <Container className='text-white my-5'>
                <h1>My Services</h1>
                <Row className='g-3'>
                    {
                        data.map(element => <HomeCard data={element} key={element._id}></HomeCard>)
                    }
                </Row>
                <Button className='px-3 py-2 fw-bold' variant='success'><Link className='text-white text-decoration-none' to='/services'>See All</Link></Button>
            </Container>
            <Container className='text-white my-5 py-3'>
                <Row className='g-3'>
                    <Col md={6} lg={6}>
                        <div className='description'>
                            <h1 className='text-white pt-4 pb-2 my-5 fw-bold'>Reliability First Priority</h1>
                            <p className='text-white'>Offer the lowest price with the highest value. Deliver your parcel at the right location at the right time.</p>
                            <Button className='px-4 py-2 my-3 fw-bold' variant="success"><Link className='ExploreButtonLink' to='/addservice'>Add Service</Link></Button>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <div className='text-center'>
                            <img className='img-fluid' src={moto} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Home;