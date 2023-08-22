import React from 'react'
import image1 from '../assets/cyberSecurity/1.webp'
import image2 from '../assets/cyberSecurity/2.gif'
import image3 from '../assets/cyberSecurity/3.webp'
import image4 from '../assets/cyberSecurity/4.webp'
import image5 from '../assets/cyberSecurity/5.webp'
import image6 from '../assets/cyberSecurity/6.jpeg'
import './blog.css';
import { Link } from 'react-router-dom'

function CyberSecurity() {
  const blogCardData = [
    {
      id: 1,
      img: image1,
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      description: "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
      date: "27 December 2022",
    },
    {
      id: 2,
      img: image2,
      title: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      description: "Look around today, you will witness that we are more reliant on technology and devices",
      date: "20 December 2022",
    },
    {
      id: 3,
      img: image3,
      title: "Top 10 Ethical Hacking Books for Beginner to Advanced",
      description: "Did you know that according to the University of Maryland hackers attack every 39 seconds",
      date: "21 November 2022",
    },
    {
      id: 4,
      img: image4,
      title: "8 Different Types of Cybersecurity and Threats Involved",
      description: "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",
      date: "9 November 2022",
    },
    {
      id: 5,
      img: image5,
      title: "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      description: "Many people ask how important is coding for cybersecurity, and the lawyerly answer",
      date: "22 June 2022",
    },
    {
      id: 6,
      img: image6,
      title: "Top 7 Cyber Security Attacks in Real Life",
      description: "Cyber security attacks are the type of actions that are designed to destroy, steal, modify,",
      date: "10 June 2022",
    },
  ]

  return (
    <div className='blog-container'>
      <div className="card-group">
        <div className="row">
          {blogCardData.map(blog => (
            <div className="col-12 col-md-4" key={blog.id}>
              <div className="card">
                <Link>
                  <img src={blog.img} className="card-img-top" alt={blog.title} />
                </Link>
                <div className="card-body">
                  <p className="title"><Link className="card-title">{blog.title}</Link></p>
                  <p className="card-text">{blog.description}</p>
                  <Link className="read-more" to="/">
                    Read More »
                  </Link>
                </div>
                <div className="footer bg-transparent">
                  <span className="date"> {blog.date} </span>
                  <span className="comments"> No Comments </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CyberSecurity