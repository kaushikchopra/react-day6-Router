import React from 'react'
import image1 from '../assets/all/4.webp'
import image2 from '../assets/all/5.webp'
import image3 from '../assets/career/3.webp'
import image4 from '../assets/career/4.webp'
import image5 from '../assets/career/5.webp'
import image6 from '../assets/career/6.jpeg'
import './blog.css';
import { Link } from 'react-router-dom'

function Career() {
  const blogCardData = [
    {
      id: 1,
      img: image1,
      title: "Top Skills Required to Become a Digital Marketer",
      description: "Digital marketing is one of the most dynamic industries that has transformed how businesses connect",
      date: "16 August 2023",
    },
    {
      id: 2,
      img: image2,
      title: "Career Opportunities in Digital Marketing | Digital Marketing Career",
      description: "As we move forward in today's digital age, the need for businesses to engage with",
      date: "16 August 2023",
    },
    {
      id: 3,
      img: image3,
      title: "10 Best Data Science Online Courses for Beginners | 2023",
      description: "In today's rapidly evolving digital landscape, Data Science has emerged as one of the most",
      date: "14 August 2023",
    },
    {
      id: 4,
      img: image4,
      title: "How to Become a UI/UX Designer: 10 Steps to Master the Craft",
      description: "Have you ever wondered what it takes to create captivating designs that leave users delighted",
      date: "11 August 2023",
    },
    {
      id: 5,
      img: image5,
      title: "Top 12 Career Opportunities for UI/UX Design",
      description: "Are you passionate about offering intuitive and user-friendly digital experiences? Do you have an eye",
      date: "29 July 2023",
    },
    {
      id: 6,
      img: image6,
      title: "Game Development Career 2023: The Ultimate Beginners Guide",
      description: "The game development industry has undergone a remarkable evolution over the years, witnessing exhilarating changes",
      date: "28 July 2023",
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

export default Career