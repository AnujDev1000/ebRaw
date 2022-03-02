import React from 'react'
import { blogs } from '../Data.js' 
import '../Css/blog.css'


const Blog = () => {
    return (
        <div className='blog'>
            <h1>From the Blog</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam
            </p>
            <div className="blog-box-group">
                {
                    blogs.map(blog => {
                        return (
                            <div key={blog.id} className="blog-box">
                                <div className="blog-img-box">
                                    <img src={blog.image} alt=""/>
                                </div>
                                <div className="blog-content-box">
                                    <span className="blog-title">{blog.heading}</span>
                                    <span>{blog.date}</span>
                                    <p>{blog.text}</p>
                                    <button>View More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blog
