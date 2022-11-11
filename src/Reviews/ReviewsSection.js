import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Utilities/Context/UserContext';
import Review from './UsersReview/Review';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewsSection = ({id,serviceName}) => {
    const { user } = useContext(AuthContext);
    const [userReview,setUserReview]=useState([])
    const time = new Date();
    const [currentTime, setcurrentTime] = useState(time);
    // console.log(userReview);
    // console.log(id);
    const handleAddReview=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=user?.displayName ||'unregistered';
        const image=user?.photoURL || 'unregistered';
        const email=user?.email || 'unregistered';
        const description=form.description.value;
        let time = new Date();
        setcurrentTime(time);
        const newTime=currentTime;
        
        const review={
            service_id:id,
            serviceName:serviceName,
            customer:name,
            email:email,
            img:image,
            message:description,
            time:currentTime,
        }
        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.acknowledged) {
                toast("Review Added Successfully");
                event.target.reset();
            }
            ;
            
        })
        .catch(err=>console.error(err));
    }
    useEffect(()=>{
            fetch(`http://localhost:5000/reviews/${id}`)
            .then(res=>res.json())
            .then(data=>setUserReview(data))
    },[userReview])
    return (
        <Container className='py-3 text-white'>
            <div>
                {
                    user?.uid ? <Form onSubmit={handleAddReview}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className='text-white'>Review</Form.Label>
                            <Form.Control as="textarea" name='description' required rows={3} />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Add New Review
                        </Button>
                    </Form>
                    : <p>Please <Link to='/login'>Login</Link> to add a review</p>
                }
            </div>
            <Row className='g-3'>
                {
                    userReview.map(element=><Review data={element} key={element._id}></Review>)
                }
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default ReviewsSection;