import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const data=useLoaderData();
    // console.log(data);
    return (
        <Container>
            <Row className='g-3'>
                {
                    data.map(element=><ServiceCard data={element} key={element._id}></ServiceCard>)
                }
            </Row>
        </Container>
    );
};

export default Services;