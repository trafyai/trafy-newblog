import React from 'react'

const BlogIntroduction = (props) => {
  return (
    <div> 
        {props.introduction && 
        <section className="blog-page-introduction">
               {props.introduction.map((intro,index)=>(
                 <p key={index}>{intro}</p>
               ))}
         </section>
              }
    </div>
  )
}

export default BlogIntroduction