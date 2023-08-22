import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <footer className="bg-dark text-white p-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h4>About Us</h4>
                        <p>Guvi is a platform that offers...</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li>
                                {/* eslint-disable-next-line */}
                                <a href="#">Home</a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a href="#">Courses</a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a href="#">Contact</a>
                                {/* eslint-enable-next-line */}
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow Us</h4>
                        <ul className="list-unstyled">
                            <li>
                                {/* eslint-disable-next-line */}
                                <a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            </li>
                            <li>
                                {/* eslint-disable-next-line */}
                                <a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                                {/* eslint-enable-next-line */}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <p>&copy; 2023 Guvi</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

