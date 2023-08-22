import React from 'react'
import image1 from '../assets/all/1.webp'
import image2 from '../assets/all/2.webp'
import image3 from '../assets/all/3.webp'
import image4 from '../assets/all/4.webp'
import image5 from '../assets/all/5.webp'
import image6 from '../assets/all/6.webp'
import './blog.css';
import { Link } from 'react-router-dom'

function All() {
  const blogCardData = [
    {
      id: 1,
      img: image1,
      title: "The Scope of Motion Graphics in 2023",
      description: "Ever seen those moving pictures on your screen that tell a story? That's motion graphics!",
      date: "19 August 2023",
    },
    {
      id: 2,
      img: image2,
      title: "8 Best YouTube Channels to Learn Digital Marketing 2023",
      description: "In today's digital age, staying ahead of the curve in the field of marketing is",
      date: "19 August 2023",
    },
    {
      id: 3,
      img: image3,
      title: "Top 10 Best Automation Testing Tools in 2023",
      description: "Automation testing tools have really become a great and important factor in building efficient web",
      date: "17 August 2023",
    },
    {
      id: 4,
      img: image4,
      title: "Top Skills Required to Become a Digital Marketer",
      description: "Digital marketing is one of the most dynamic industries that has transformed how businesses connect",
      date: "16 August 2023",
    },
    {
      id: 5,
      img: image5,
      title: "Career Opportunities in Digital Marketing | Digital Marketing Career",
      description: "As we move forward in today's digital age, the need for businesses to engage with",
      date: "16 August 2023",
    },
    {
      id: 6,
      img: image6,
      title: "UI/UX Project Showcase: UX-perience Elevated",
      description: "Are you a professional UI/UX designer who finds it hard to attract your clients or",
      date: "14 August 2023",
    },
  ]

  return (
    <div className='blog-container'>
      <div className="card-group">
        <div className="row">
          {blogCardData.map(blog => (
            <div className="col-12 col-md-4 col-sm-6" key={blog.id}>
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

export default All