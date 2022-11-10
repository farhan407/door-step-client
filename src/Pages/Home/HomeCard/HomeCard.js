import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './HomeCard.css'

const HomeCard = ({ data }) => {
    const { name, img, price, description } = data;
    return (
        <Col md={6} lg={4} className="text-black py-4">
            <Card>
                <Card.Img variant="top" className='imageCard' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <small>{description.length > 100 ?
                                    `${description.substring(0, 100)}...`
                                    : description
                                }
                        </small>
                        <p className='fw-bold'>{price}</p>
                    </Card.Text>
                    <Button variant="success">View Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default HomeCard;