import React, { useState } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateReviewDetails = ({data}) => {
    const { _id,email,serviceName, message } = data;
    const [update,setUpdate]=useState(data);
    const handleUpdate=(event)=>{
        event.preventDefault();
        fetch(`https://door-step-server.vercel.app/review/${_id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(update)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount>0) {
                toast("Updated Successfully");
            }
        })
    }
    const handleOnchange=(event)=>{
        const field=event.target.name;
        const value=event.target.value;
        const newReview={...update};
        // console.log(newReview);
        newReview[field]=value;
        setUpdate(newReview);
    }
    return (
        <Col md={7} lg={5} className="mx-auto">
            <Container className='text-white py-2'>
                <Form onSubmit={handleUpdate}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control type="text" name='email' defaultValue={serviceName} disabled style={{ backgroundColor: 'gray' }}  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control onChange={handleOnchange} type="text" name='message' defaultValue={message}   />
                    </Form.Group>
                    
                    <Button className='my-2' type='submit'  variant='success'>Update</Button>
                </Form>
                <ToastContainer />
            </Container>
        </Col>
    );
};

export default UpdateReviewDetails;