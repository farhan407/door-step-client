import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../Utilities/Context/UserContext';
import MyAllReviews from './MyAllReviews/MyAllReviews';

const MyReviews = () => {
    const {user}=useContext(AuthContext);
    const [myReviews,setmyReviews]=useState([]);
    let title = "Door Step -My Reviews";
    document.title = title;
    const handleDelete=(_id)=>{
        const proceed= window.confirm('Are you sure to delete this ?');
        if(proceed)
        {
            fetch(`http://localhost:5000/review/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0)
                {
                    alert('Deleted Successfully')
                    const remaining=myReviews.filter(rev=>rev._id!==_id)
                    setmyReviews(remaining);
                }
            })
        }
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/myreviews/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setmyReviews(data))
    },[])
    console.log(myReviews);
    return (
        <Container>
            <Row className='g-3'>
                {
                    myReviews.map(element=><MyAllReviews handleDelete={handleDelete} data={element} key={element._id}></MyAllReviews>)
                }
            </Row>
        </Container>
    );
};

export default MyReviews;