import React, { useEffect } from 'react';
import logo from '../assets/Guvi-blog-logo.png';
import './Navbar.css';

function Navbar() {
    useEffect(() => {
        // Enable hoverable dropdowns on desktop screens
        if (window.innerWidth >= 992) {
            document
                .querySelectorAll('.navbar-nav .dropdown')
                .forEach((dropdown) => {
                    dropdown.addEventListener('mouseover', () => {
                        dropdown.classList.add('show');
                    });

                    dropdown.addEventListener('mouseout', () => {
                        dropdown.classList.remove('show');
                    });
                });
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Guvi Blog Logo" width="120" height="auto" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" id="courses" href="https://www.guvi.in/courses">
                                COURSES
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="liveClassesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                LIVE CLASSES
                            </a>
                            <div className="dropdown-menu" aria-labelledby="liveClassesDropdown">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="dropdown-item">
                                                <p>Zen Class <span className="badge badge-secondary">live online classes</span></p>
                                                <span className="small text-gray">LIVE Online Intensive Program + 100% Placement Support</span>
                                            </div>
                                            <a className="dropdown-item" href="https://www.guvi.in/zen-class/full-stack-development-course/">
                                                <p>Full Stack Development Program (FSD)</p>
                                                <span className="small text-gray">Learn Javascript, HTML, CSS, Java, MongoDB & more</span>
                                            </a>
                                            <a className="dropdown-item" href="https://www.guvi.in/zen-class/data-science-course/">
                                                <p>IIT-M Advanced Programming & Data Science Program</p>
                                                <span className="small text-gray">Learn Python, Machine Learning, NLP, Tableau, PowerBI & more</span>
                                            </a>
                                            <a className="dropdown-item" href="https://www.guvi.in/zen-class/automation-testing-course/">
                                                <p>Automation & Testing Program</p>
                                                <span className="small text-gray">Learn Selenium, Python, Java, Jenkins, Jmeter, API Testing & more</span>
                                            </a>
                                        </div>
                                        <div className="col-md-12">
                                            <a className="dropdown-item" href="https://www.guvi.in/zen-class/">
                                                Explore More Programs
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="practiceDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                PRACTICE
                            </a>
                            <div className="dropdown-menu" aria-labelledby="practiceDropdown">
                                <a className="dropdown-item" href="https://www.guvi.in/code-kata">
                                    <p>Codekata</p>
                                    <span className="small text-gray">Sharpen your coding skills, prepare for interviews</span>
                                </a>
                                <a className="dropdown-item" href="https://www.guvi.in/webkata">
                                    <p>Webkata</p>
                                    <span className="small text-gray">Build basic Frontend and Backend development skills</span>
                                </a>
                                <a className="dropdown-item" href="https://www.guvi.in/ide">
                                    <p>IDE - Online Compiler</p>
                                    <span className="small text-gray">Run & test your code in any programming language</span>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="resourcesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                RESOURCES
                            </a>
                            <div className="dropdown-menu" aria-labelledby="resourcesDropdown">
                                <a className="dropdown-item" href="https://www.guvi.in/rewards">
                                    REWARDS
                                </a>
                                <a className="dropdown-item" href="https://www.guvi.in/referral">
                                    REFERRAL
                                </a>
                                <a className="dropdown-item" href="https://forum.guvi.in/">
                                    FORUM SUPPORT
                                </a>
                                <a className="dropdown-item" href="https://www.guvi.in/blog/">
                                    BLOGS
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                OUR PRODUCTS
                            </a>
                            <div className="dropdown-menu" aria-labelledby="productsDropdown">
                                <a className="dropdown-item" href="https://www.hackerkid.org/">
                                    <p>HackerKid</p>
                                    <span className="small text-gray">Coding classes platform for K-12 children</span>
                                </a>
                                <a className="dropdown-item" href="https://www.guvi.in/mlp/GUVI-for-corporates">
                                    <p>Guvi for corporates</p>
                                    <span className="small text-gray">Meet your hiring needs at ease</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
