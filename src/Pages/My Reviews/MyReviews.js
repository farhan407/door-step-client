import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../Utilities/Context/UserContext';
import MyAllReviews from './MyAllReviews/MyAllReviews';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setmyReviews] = useState([]);
    let title = "Door Step -My Reviews";
    document.title = title;
    const handleDelete = (_id) => {
        const proceed = window.confirm('Are you sure to delete this ?');
        if (proceed) {
            fetch(`https://door-step-server.vercel.app/review/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast("Deleted Successfully");
                        const remaining = myReviews.filter(rev => rev._id !== _id)
                        setmyReviews(remaining);
                    }
                })
        }
    }
    useEffect(() => {
        fetch(`https://door-step-server.vercel.app/myreviews/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('doorStep-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403)
                {
                    logOut();
                }
                return res.json()
            })
            .then(data => setmyReviews(data))
    }, [])
    console.log(myReviews);
    return (
        <Container>
            <Row className='g-3'>
                {
                    myReviews.length === 0 ? <p className='text-center fw-bold py-3 text-white'>You have no review</p>
                        : myReviews.map(element => <MyAllReviews handleDelete={handleDelete} data={element} key={element._id}></MyAllReviews>)

                }
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default MyReviews;