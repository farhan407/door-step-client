import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import UpdateReviewDetails from './UpdateReviewsDetails/UpdateReviewDetails';

const UpdateReviews = () => {
    const data = useLoaderData();
    return (
        <Container>
            <Row>
                {
                    data.map(element=><UpdateReviewDetails data={element} key={element._id}></UpdateReviewDetails>)
                }
            </Row>
        </Container>
    );
};

export default UpdateReviews;