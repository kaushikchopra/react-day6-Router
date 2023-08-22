import React from 'react'
import image1 from '../assets/fullStack/1.webp'
import image2 from '../assets/fullStack/2.webp'
import image3 from '../assets/fullStack/3.webp'
import image4 from '../assets/fullStack/4.webp'
import image5 from '../assets/fullStack/5.webp'
import image6 from '../assets/fullStack/6.jpeg'
import './blog.css';
import { Link } from 'react-router-dom'

function FullStackDevelopment() {
  const blogCardData = [
    {
      id: 1,
      img: image1,
      title: "The Top 10 Tools Every Full Stack Developer Should Master in 2023",
      description: "‍As a full stack developer, having the right set of tools is crucial for your",
      date: "5 August 2023",
    },
    {
      id: 2,
      img: image2,
      title: "The Ultimate Guide to Real-World Full Stack Development Applications",
      description: "Full stack development has become increasingly popular in recent years, with companies seeking professionals who",
      date: "5 August 2023",
    },
    {
      id: 3,
      img: image3,
      title: "Best Ways to Learn Full Stack Development in 2023",
      description: "Full stack development is and will be a promising and an in-demand career in the",
      date: "4 August 2023",
    },
    {
      id: 4,
      img: image4,
      title: "How Long Would It Take to Be a Full Stack Developer?",
      description: "Have you ever wondered how much time it would take to become a skilled Full",
      date: "4 August 2023",
    },
    {
      id: 5,
      img: image5,
      title: "Top Skills To Become a Full Stack Developer in 2023",
      description: "Are you interested in becoming a great full-stack developer? If so, then you’re at the",
      date: "3 August 2023",
    },
    {
      id: 6,
      img: image6,
      title: "Top Full Stack Development Webinars and Workshops",
      description: "Are you keen to elevate your web development skills and master the art of Full",
      date: "29 July 2023",
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

export default FullStackDevelopment