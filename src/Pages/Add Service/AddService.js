import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    const [service, setService] = useState({});
    const time = new Date();
    const [currentTime, setcurrentTime] = useState(time);
    let title = "Door Step -Add Service";
    document.title = title;

    const handleAddUser = (event) => {
        event.preventDefault();
        console.log(service);
        fetch("https://door-step-server.vercel.app/allServices", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(service),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast("Service Added Successfully");
                    event.target.reset();
                }
            });
    };
    const handleInputBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        let time = new Date();
        setcurrentTime(time);
        const newService = { ...service, currentTime };
        newService[field] = value;
        setService(newService);
    };
    return (
        <Container>
            <h1 className='fw-bold text-white text-center py-4'>Add New Service</h1>
            <Row>
                <Col md={10} lg={7} className="mx-auto my-3">
                    <Form onSubmit={handleAddUser}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-white'>Name</Form.Label>
                            <Form.Control type="text" name='name' onBlur={handleInputBlur} placeholder="Enter Service Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='text-white'>Iamge Url:</Form.Label>
                            <Form.Control type="text" name='img' onBlur={handleInputBlur} placeholder="Enter Image Url:" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='text-white'>Price:</Form.Label>
                            <Form.Control type="text" name='price' onBlur={handleInputBlur} placeholder="Price" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='text-white'>Description</Form.Label>
                            <Form.Control as="textarea" name='description' onBlur={handleInputBlur} rows={3} required />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Add Service
                        </Button>
                        <ToastContainer />
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddService;