import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import blogHeader from './assets/blog-header.png';
import All from './components/All';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='header-container'>
        <div className="blog-header">
          <div className="img-div">
            <Link to="/">
              <img src={blogHeader} alt="Blog Header" />
            </Link>
          </div>
          <div className="header-navbar">
            <nav>
              <div className="d-flex justify-content-center" >
                <ul>
                  <li>
                    <Link className='blog-navbar' to='/'>
                      All
                    </Link>
                  </li>
                  <li>
                    <Link className='blog-navbar' to='/full-stack-development'>
                      Full Stack Development
                    </Link>
                  </li>
                  <li>
                    <Link className='blog-navbar' to='/data-science'>
                      Data Science
                    </Link>
                  </li>
                  <li>
                    <Link className='blog-navbar' to='/cyber-security'>
                      Cyber Security
                    </Link>
                  </li>
                  <li>
                    <Link className='blog-navbar' to='/career'>
                      Career
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/full-stack-development' element={<FullStackDevelopment />} />
        <Route path='/data-science' element={<DataScience />} />
        <Route path='/cyber-security' element={<CyberSecurity />} />
        <Route path='/career' element={<Career />} />
      </Routes>

      <Footer />
    </BrowserRouter >
  );
}

export default App;
