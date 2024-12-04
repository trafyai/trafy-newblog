import React from 'react'
import BlogSingleData from '@api/blog/BlogSingleData'
import Link from 'next/link'
import Image from 'next/image'

const BlogOtherBlogs = (props) => {
  return (
    <div>
              <section className="blog-other-blogs">
              <div className="blog-other-blog-heading">
                <h2>Other Resources</h2>
              </div>

              <div className="blog-other-blogs-content">
                {BlogSingleData.filter(item => item.id !== props.id).slice(0, 3).map((item, index) => (

                    <div className="blog-other-blogs-card" key={index}>
                            
                      <Link href={`/${item.id}`}  className="blog-other-blogs-card-inner">
                      <div className="blog-other-blogs-card-image" >
                          <Image src={item.image} alt="blog image" height="max-content"/>
                      </div>
                      <div className="blog-other-blogs-card-content">
                      <div className="blog-other-blogs-card-heading">
                          <h1>{item.title}</h1>
                      </div>
                      <div className="blog-other-blogs-card-description">
                        <p>
                            {String(item.description)
                                .split(' ') // Split the description into an array of words
                                .slice(0, 20) // Change 20 to the number of words you want to display
                                .join(' ') // Join the sliced array back into a string
                            }
                        </p>
                    </div>

                      </div>
                      </Link>
                  </div>

                ))}
              </div>
          </section>

    </div>
  )
}

export default BlogOtherBlogs