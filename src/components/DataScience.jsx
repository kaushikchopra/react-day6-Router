import React from 'react'
import image1 from '../assets/dataScience/1.webp'
import image2 from '../assets/dataScience/2.webp'
import image3 from '../assets/dataScience/3.webp'
import image4 from '../assets/dataScience/4.webp'
import image5 from '../assets/dataScience/5.webp'
import image6 from '../assets/dataScience/6.webp'
import './blog.css';
import { Link } from 'react-router-dom'

function DataScience() {
  const blogCardData = [
    {
      id: 1,
      img: image1,
      title: "10 Best Data Science Online Courses for Beginners | 2023",
      description: "In today's rapidly evolving digital landscape, Data Science has emerged as one of the most",
      date: "14 August 2023",
    },
    {
      id: 2,
      img: image2,
      title: "Data Science Webinars and Workshops",
      description: "In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data",
      date: "9 August 2023",
    },
    {
      id: 3,
      img: image3,
      title: "10 Best Data Science Frameworks in 2023",
      description: "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
      date: "5 August 2023",
    },
    {
      id: 4,
      img: image4,
      title: "7 Must-Watch Data Science Focused YouTube Channels for Effective Learning",
      description: "Data science has become one of the most sought-after skills in the current job market",
      date: "5 August 2023",
    },
    {
      id: 5,
      img: image5,
      title: "Everything about Data Scientist Salary in India | 2023",
      description: "Are you curious about the highly sought-after field of data science and the potential it",
      date: "5 August 2023",
    },
    {
      id: 6,
      img: image6,
      title: "How Long Would It Take to Learn Data Science?",
      description: "Have you ever wondered how much time it takes to learn data science? It's an",
      date: "5 August 2023",
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

export default DataScience