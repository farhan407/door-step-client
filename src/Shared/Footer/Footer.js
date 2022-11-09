import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/delivery.png'
import './Footer.css'
const Footer = () => {
    return (
        <footer className="page-footer font-small text-white pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-4 mt-md-0 mt-3">
                        <img src={logo} alt="" />
                        <h5 className="py-2 fs-4 fw-bold">DoorStep</h5>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-0" />
                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home' style={{ textDecoration: "none", color: "white" }}>Home</Link></li>
                            <li><Link to='/blog' style={{ textDecoration: "none", color: "white" }}>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/services' style={{ textDecoration: "none", color: "white" }}>Services</Link></li>
                            <li><Link to='/reviews' style={{ textDecoration: "none", color: "white" }}>My Reviews</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <a href="https://yeasinarf.github.io/my-portfolio/" rel='noreferrer' target="_blank"> Asif Farhan</a>
            </div>
        </footer>
    );
};

export default Footer;