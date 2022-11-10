import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';


const ServiceCard = ({ data }) => {
    const { name, img, price, description ,_id } = data;
    return (
        <Col md={6} lg={4} className="text-black py-4">
            <Card>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <Card.Img variant="top" className='imageCard' src={img} />
                    </PhotoView>
                </PhotoProvider>
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
                    <Button className='px-3 py-2 fw-bold' variant='success'><Link className='text-white text-decoration-none' to={`/services/${_id}`}>View Details</Link></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceCard;