import React, { useContext, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../Images/delivery.png';
import { AuthContext } from '../../Utilities/Context/UserContext';
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const [userName, setUserName] = useState(false)
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" className='navBar' variant="dark">
            <Container>
                <Navbar.Brand className='fw-bold text-white'><Link className='text-white text-decoration-none fw-bold fs-4' to='/'><img className='me-2' src={logo} alt="" /> DoorStep</Link></Navbar.Brand>
                <Navbar.Toggle className='navToggle' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className='navLink pe-4 py-3' to='/home' style={({ isActive }) => isActive ? { color: '#32BE9A', textDecorationColor: '#32BE9A', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'white', textDecoration: 'none' }}>Home</NavLink>
                        <NavLink className='navLink pe-4 py-3' to='/services' style={({ isActive }) => isActive ? { color: '#32BE9A', textDecorationColor: '#32BE9A', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'white', textDecoration: 'none' }}>Services</NavLink>
                        {
                            user?.uid ? <div className=' privateNav'>
                                <NavLink className='navLink pe-4 py-3' to='/addservice' style={({ isActive }) => isActive ? { color: '#32BE9A', textDecorationColor: '#32BE9A', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'white', textDecoration: 'none' }}>Add Service</NavLink>
                                <NavLink className='navLink pe-4 py-3' to='/reviews' style={({ isActive }) => isActive ? { color: '#32BE9A', textDecorationColor: '#32BE9A', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'white', textDecoration: 'none' }}>My reviews</NavLink>
                                <img onMouseEnter={() => setUserName(true)} onMouseLeave={() => setUserName(false)} style={{ height: '40px', width: '40px', marginRight: '10px', borderRadius: '50%', objectFit: 'cover' }} src={user.photoURL} alt="" />
                                <p className={userName ? "visible showName" : "visible hideName"}>{user?.displayName}</p>
                                <NavLink onClick={handleLogOut} className='navLink pe-4 py-3' style={({ isActive }) => isActive ? { color: '#32BE9A', textDecorationColor: '#32BE9A', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'white', textDecoration: 'none' }}>LogOut</NavLink></div>
                                : <NavLink className='navLink pe-4 py-3' to='/login' style={({ isActive }) => isActive ? { color: '#32BE9A', textDecorationColor: '#32BE9A', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'white', textDecoration: 'none' }}>Login</NavLink>
                        }
                        <NavLink className='navLink pe-4 py-3' to='/blog' style={({ isActive }) => isActive ? { color: '#32BE9A', textDecorationColor: '#32BE9A', textDecorationThickness: '3px', textUnderlineOffset: '8px' } : { color: 'white', textDecoration: 'none' }}>Blog</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;