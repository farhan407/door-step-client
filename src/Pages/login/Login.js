import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoaderSpin from '../../Utilities/Context/Loader/LoaderSpin';
import { AuthContext } from '../../Utilities/Context/UserContext';
import './Login.css';

const Login = () => {
    const {logIn,logInWithGoogle,logInWithGitHub,loader}= useContext(AuthContext)
    const navigate =useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname||'/';
    const [error,setError]=useState('')
    if (loader) {
        return <LoaderSpin></LoaderSpin>;
    }
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email,password)
        .then(result=>{
            const user=result.user;
            navigate(from,{replace:true});
        })
        .catch(error=>{
            const errorMsg=error.message;
            setError(errorMsg)
        })
    }
    const handleLogInWithGoogle=()=>{
        logInWithGoogle()
        .then(result=>{
            const user=result.user;
            navigate(from,{replace:true});
        })
        .catch(error=>{
            const errorMsg=error.message;
            setError(errorMsg)
        })

    }
    const handleLogInWithGitHub=()=>{
        logInWithGitHub()
        .then(result=>{
            const user=result.user;
            navigate(from,{replace:true});
            console.log(user)
        })
        .catch(error=>{
            const errorMsg=error.message;
            setError(errorMsg)
        })

    }
    return (
        <div>
            <Container>
                <Row>
                    <Col className='mx-auto' lg={5} md={8} sm={9} xs={10} >
                        <Form onSubmit={handleLogIn} className='container rounded formContainer mx-auto text-white my-3 pt-2'>
                            <h1 className='py-3'>Please Sign In</h1>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" required />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Sign In
                            </Button>
                            <p className='text-center'>Or</p>
                            <div className='text-center mb-2'>
                                <Button onClick={handleLogInWithGoogle} style={{ width: '180px' }} variant='success' >Sign in With <FaGoogle></FaGoogle> </Button>
                            </div>
                            <div className='text-center mb-3'>
                                <Button onClick={handleLogInWithGitHub}  style={{ width: '180px' }} variant='success'>Sign in With <FaGithub></FaGithub> </Button>
                            </div>
                            <p className='py-3 text-danger'>{error}</p>
                            <p className='text-center pb-2'>Create New Account?<Link className="text-primary" to='/register'>Sign Up</Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;