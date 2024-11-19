import React from 'react'
import '@styles/blog/BlogSingle.css';

const BlogHero = (props) => {
  return (
    <div>
         <section className="blog-page-hero-section">

            <div className="blog-page-hero-section-category">
                <p className="blog-page-hero-category">{props.category}</p>
            </div>

            <div className="blog-page-hero-section-heading">
                <h1>{props.title}</h1>
            </div>

            <div className="blog-page-hero-section-para">
                <p>{props.metaDescription}</p>
            </div>

            <div className="blog-page-hero-section-author">
                <p>By <span style={{ fontWeight: "700" }}>{props.author} </span></p>
                <span style={{ color: "#d1d1d1" }}>|</span>
                <p>{props.date}</p>
                <p style={{paddingLeft:"0.5rem"}}>{props.read}</p>
            </div>

       </section>
    </div>
  )
}

export default BlogHero