// 'use client'
// import React, { useRef, useState, useEffect } from "react";
// import BlogHero from "./BlogHero";
// import BlogImage from "./BlogImage";
// import BlogIntroduction from "./BlogIntroduction";
// import BlogArticle from "./BlogArticle";
// import BlogConclusion from "./BlogConclusion";
// import BlogNewsletter from "./BlogNewsletter";
// import BlogOtherBlogs from "./BlogOtherBlogs";
// import BlogDashboard from "./BlogDashboard";

// export default function BlogPage(props) {
//   const articleRefs = useRef([]); // Store references to each article section
//   const subArticleRefs = useRef({}); // Store references to sub-articles
//   const [activeIndex, setActiveIndex] = useState({ main: null, sub: null });

//   // Scroll to the main article
//   const handleScrollToArticle = (index) => {
//     if (articleRefs.current[index]) {
//       articleRefs.current[index].scrollIntoView({ behavior: 'smooth' });
//       setActiveIndex({ main: index, sub: null });
//     }
//   };

//   // Scroll to the subarticle
//   const handleScrollToSubArticle = (mainIndex, subIndex) => {
//     const subRef = subArticleRefs.current[`${mainIndex}-${subIndex}`];
//     if (subRef) {
//       subRef.scrollIntoView({ behavior: 'smooth' });
//       setActiveIndex({ main: mainIndex, sub: `${mainIndex}-${subIndex}` });
//     }
//   };

//   // Track the scroll position and highlight the current section
//   const handleScroll = () => {
//     let activeMainIndex = null;
//     let activeSubIndex = null;

//     articleRefs.current.forEach((ref, mainIndex) => {
//       if (ref) {
//         const rect = ref.getBoundingClientRect();
//         if (rect.top <= 150 && rect.bottom >= 150) {
//           activeMainIndex = mainIndex; // Main article in view
//         }

//         // Check subarticles within the main article
//         const subArticles = Object.keys(subArticleRefs.current).filter(key => key.startsWith(`${mainIndex}-`));
//         subArticles.forEach(subKey => {
//           const subRef = subArticleRefs.current[subKey];
//           if (subRef) {
//             const subRect = subRef.getBoundingClientRect();
//             if (subRect.top <= 150 && subRect.bottom >= 150) {
//               activeSubIndex = subKey; // Subarticle in view
//             }
//           }
//         });
//       }
//     });

//     setActiveIndex({ main: activeMainIndex, sub: activeSubIndex });
//   };

//   useEffect(() => {
//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);
    
//     return () => {
//       // Cleanup on unmount
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="blog-page">
//       <div className="blog-page-container" >
//         <BlogDashboard 
//           mainArticle={props.mainArticle} 
//           handleScrollToArticle={handleScrollToArticle}
//           handleScrollToSubArticle={handleScrollToSubArticle}
//           activeIndex={activeIndex} // Pass active index to highlight
//           {...props}
//         />
//         <div  className="blog-page-section-contents" >
//           <BlogHero {...props} />
//           <BlogImage {...props} />
//           <BlogIntroduction {...props} />
//           <section className="blog-page-article-section">
//             {props.mainArticle && props.mainArticle.map((article, mainIndex) => (
//               <div
//                 className="blog-page-article-main-contents"
//                 key={mainIndex}
//                 ref={(el) => (articleRefs.current[mainIndex] = el)} // Set main article ref
//               >
//                 <h1 id={mainIndex}>{article.heading}</h1>
//                 {article.description && article.description.map((desc, descIndex) => (
//                   <p key={descIndex}>{desc}</p>
//                 ))}
//                 {article.subArticle && article.subArticle.map((subarticle, subIndex) => (
//                   <div
//                     className="blog-page-subarticle"
//                     key={subIndex}
//                     ref={(el) => (subArticleRefs.current[`${mainIndex}-${subIndex}`] = el)} // Set subarticle ref
//                   >
//                     <h2>{subarticle.heading}</h2>
//                     {subarticle.description.map((subDesc, descIndex) => (
//                       <p key={descIndex}>{subDesc}</p>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </section>
//           <BlogConclusion {...props} />
//           <BlogNewsletter {...props} />
//           <BlogOtherBlogs {...props} />
//         </div>
//       </div>
//     </div>
//   );
// }


'use client'
import React, { useRef, useState, useEffect } from "react";
import BlogHero from "./BlogHero";
import BlogImage from "./BlogImage";
import BlogIntroduction from "./BlogIntroduction";
// import BlogArticle from "./BlogArticle";
import BlogConclusion from "./BlogConclusion";
import BlogNewsletter from "./BlogNewsletter";
import BlogOtherBlogs from "./BlogOtherBlogs";
import BlogDashboard from "./BlogDashboard";

export default function BlogPage(props) {
  const articleRefs = useRef([]); // Store references to each article section
  const subArticleRefs = useRef({}); // Store references to sub-articles
  const [activeIndex, setActiveIndex] = useState({ main: null, sub: null });

  // Scroll to the main article
  const handleScrollToArticle = (index) => {
    if (articleRefs.current[index]) {
      articleRefs.current[index].scrollIntoView({ behavior: 'smooth' });
      setActiveIndex({ main: index, sub: null });
    }
  };

  // Scroll to the subarticle
  const handleScrollToSubArticle = (mainIndex, subIndex) => {
    const subRef = subArticleRefs.current[`${mainIndex}-${subIndex}`];
    if (subRef) {
      subRef.scrollIntoView({ behavior: 'smooth' });
      setActiveIndex({ main: mainIndex, sub: `${mainIndex}-${subIndex}` });
    }
  };

  // Track the scroll position and highlight the current section
  const handleScroll = () => {
    let activeMainIndex = null;
    let activeSubIndex = null;

    articleRefs.current.forEach((ref, mainIndex) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          activeMainIndex = mainIndex; // Main article in view
        }

        // Check subarticles within the main article
        const subArticles = Object.keys(subArticleRefs.current).filter(key => key.startsWith(`${mainIndex}-`));
        subArticles.forEach(subKey => {
          const subRef = subArticleRefs.current[subKey];
          if (subRef) {
            const subRect = subRef.getBoundingClientRect();
            if (subRect.top <= 150 && subRect.bottom >= 150) {
              activeSubIndex = subKey; // Subarticle in view
            }
          }
        });
      }
    });

    setActiveIndex({ main: activeMainIndex, sub: activeSubIndex });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      // Cleanup on unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="blog-page">
      <div className="blog-page-container" >
        <div className="blog-page-top-section-contents">
            <BlogDashboard 
              mainArticle={props.mainArticle} 
              handleScrollToArticle={handleScrollToArticle}
              handleScrollToSubArticle={handleScrollToSubArticle}
              activeIndex={activeIndex} // Pass active index to highlight
              {...props}
            />
            <div className="blog-page-top-section-blog-contents">
              <BlogHero {...props} />
              {/* <BlogImage {...props} /> */}
              <BlogIntroduction {...props} />
              {/* <section className="blog-page-article-section">
                {props.mainArticle && props.mainArticle.map((article, mainIndex) => (
                  <div
                    className="blog-page-article-main-contents"
                    key={mainIndex}
                    ref={(el) => (articleRefs.current[mainIndex] = el)} // Set main article ref
                  >
                    <h1 id={mainIndex}>{article.heading}</h1>
                    {article.description && article.description.map((desc, descIndex) => (
                      <p key={descIndex}>{desc}</p>
                    ))}


                    <ul>
                    {article.points && article.points.map((point,pointIndex) => ( 
                      <li key={pointIndex}>{point}</li>
                    ))}
                    </ul>

                    {article.description2 && article.description2.map((desc, descIndex) => (
                      <p key={descIndex}>{desc}</p>
                    ))}
                    
                    {article.subArticle && article.subArticle.map((subarticle, subIndex) => (
                      <div
                        className="blog-page-subarticle"
                        key={subIndex}
                        ref={(el) => (subArticleRefs.current[`${mainIndex}-${subIndex}`] = el)} // Set subarticle ref
                      >
                        <h2>{subarticle.heading}</h2>
                        {subarticle.description && subarticle.description.map((subDesc, descIndex) => (
                          <p key={descIndex}>{subDesc}</p>
                        ))}

                        <ul>
                        {subarticle.points && subarticle.points.map((point,pointIndex) => ( 
                          <li key={pointIndex}>{point}</li>
                        ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </section> */}
                            <section className="blog-page-article-section">
                {props.mainArticle && props.mainArticle.map((article, mainIndex) => (
                  <div
                    className="blog-page-article-main-contents"
                    key={mainIndex}
                    ref={(el) => (articleRefs.current[mainIndex] = el)} // Set main article ref
                  >
                    <h1 id={mainIndex}>{article.heading}</h1>
                    {article.description && Array.isArray(article.description) ? (
                      article.description.map((desc, descIndex) => (
                        <p key={descIndex}>{desc}</p>
                      ))
                    ) : (
                      <p>{article.description}</p>
                    )}

                    <ul>
                    {article.points && article.points.map((point,pointIndex) => ( 
                      <li key={pointIndex}>{point}</li>
                    ))}
                    </ul>
                    {article.description2 && article.description2.map((desc, descIndex) => (
                      <p key={descIndex}>{desc}</p>
                    ))}
                    {article.subArticle && article.subArticle.map((subarticle, subIndex) => (
                      <div
                        className="blog-page-subarticle"
                        key={subIndex}
                        ref={(el) => (subArticleRefs.current[`${mainIndex}-${subIndex}`] = el)} // Set subarticle ref
                      >
                        <h2>{subarticle.heading}</h2>
                        {subarticle.description && Array.isArray(subarticle.description) ? (
                          subarticle.description.map((subDesc, descIndex) => (
                            <p key={descIndex}>{subDesc}</p>
                          ))
                        ) : (
                          <p>{subarticle.description}</p>
                        )}

                        <ul>
                        {subarticle.points && subarticle.points.map((point,pointIndex) => ( 
                          <li key={pointIndex}>{point}</li>
                        ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </section>
              <BlogConclusion {...props} />

            </div>
        </div>
   
        <div  className="blog-page-section-contents" >
          <BlogNewsletter {...props} />
          <BlogOtherBlogs {...props} />
        </div>

      </div>
    </div>
  );
}
