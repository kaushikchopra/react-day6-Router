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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow Us</h4>
                        <ul className="list-unstyled">
                            <li><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
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

