// import React from 'react'

// const BlogArticle = (props) => {
//   return (
//     <div>
//         <section className="blog-page-article-section">
    
//             {props.mainArticle && props.mainArticle.map((article, mainIndex) => (
//             <div className="blog-page-article-main-contents" key={mainIndex}>
//                 <h1 id={mainIndex}>{article.heading}</h1>

//                 {article.description && article.description.map((desc, descIndex) => (
//                     <p key={descIndex}>{desc}</p>
//                 ))
//                 }

//                 {article.subArticle && article.subArticle.map((subarticle,subIndex)=>(
//                 <div className="blog-page-subarticle" key={subIndex}>
//                     <h2>{subarticle.heading}</h2>

//                     {subarticle.description.map((subDesc,descIndex)=>(
//                         <p key={descIndex}>{subDesc}</p>
//                     ))}
//                 </div>
//                 ))}

//             </div>
//             ))}
//        </section>
//     </div>
//   )
// }

// export default BlogArticle

import React from 'react';

const BlogArticle = ({ mainArticle, articleRefs }) => {
  return (
    <div>
      <section className="blog-page-article-section">
        {mainArticle && mainArticle.map((article, mainIndex) => (
          <div
            className="blog-page-article-main-contents"
            key={mainIndex}
            ref={el => articleRefs.current[mainIndex] = el} // Assign ref to each article
          >
            <h1 id={mainIndex}>{article.heading}</h1>
            {article.description && article.description.map((desc, descIndex) => (
              <p key={descIndex}>{desc}</p>
            ))}
            {article.subArticle && article.subArticle.map((subarticle, subIndex) => (
              <div className="blog-page-subarticle" key={subIndex}>
                <h2>{subarticle.heading}</h2>
                {subarticle.description.map((subDesc, descIndex) => (
                  <p key={descIndex}>{subDesc}</p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogArticle;
