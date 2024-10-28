import React from 'react'

const BlogConclusion = (props) => {
  return (
    <div>
        <section className="blog-page-conclusion">
                  {props.conclusion && props.conclusion.map((conc,concIndex)=>(
                      <p key={concIndex}>{conc}</p>
                    ))}
          </section>
    </div>
  )
}

export default BlogConclusion