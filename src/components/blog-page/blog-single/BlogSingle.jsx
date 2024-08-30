// 'use client'
// import React, { useRef, useState } from "react";
// import '@styles/blog/BlogSingle.css';
// import Twitter from '@public/Images/socials/twitter.png';
// import Linkedin from '@public/Images/socials/linkedin.png';
// import Facebook from '@public/Images/socials/facebook.png';
// import Twitter_w from '@public/Images/socials-white/twitter-w.png';
// import Linkedin_w from '@public/Images/socials-white/linkedin-w.png';
// import Facebook_w from '@public/Images/socials-white/facebook-w.png';
// import SS from '@public/Images/blog/ss.jpeg';
// import Blogother-blogsData from "@api/blog/Blogother-blogsData";
// import Link from "next/link";
// import Image from "next/image";


// export default function BlogPage(props) {


//    const [userData, setUserData] = useState({
//     email: ""
//   });

  
//   const [errorMessage, setErrorMessage] = useState("");
//   const [subscribed, setSubscribed] = useState(false);
  
    

//   const currentPageUrl = `https://trafyai.com/blogs/${props.id}`;
  

//   const scrollToHeading = (headingId) => {
//     const headingElement = document.getElementById(headingId);
//     if (headingElement) {
//       headingElement.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // State to track if the user has subscribed

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
// };

// const handleSubmit = async (event) => {
//   event.preventDefault();

//   const { email } = userData;

//   if (!email) {
//     setErrorMessage("Please fill in the required fields.");
//     return;
//   }

//   // Validation of email format can be added here if needed

//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userData) // Use userData instead of formData
//   };

//   try {
//     const response = await fetch('https://newsletter-form-9e6c9-default-rtdb.firebaseio.com/NewsLetterForm.json', options);

//     if (response.ok) {
//       setSubscribed(true); // Set subscribed state to true
//       setErrorMessage(""); // Clear error message
//       setUserData({ email: "" }); // Clear the input field
//     } else {
//       setErrorMessage("Error submitting the form. Please try again later.");
//     }

//     // Send email to user
//     const emailRes = await fetch('http://localhost:5002/newsletter/submit', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email })
//     });

//     if (!emailRes.ok) {
//       throw new Error('Error sending email');
//     }
//   } catch (error) {
//     console.error("Error submitting the form:", error);
//     setErrorMessage("Error submitting the form. Please try again later.");
//   }
// };

  



//   // Function to render the form or the thank you message
//   const renderFormOrMessage = () => {
//     if (subscribed) {
//       return (
//         <div className="blog-newsletter-form-thankyou">
//           <h3>Thank you for subscribing to our newsletter!</h3>
//         </div>
//       );
//     } else {
//       return (
//         <div className="blog-newsletter-container-inner">
//           <div className="blog-newsletter-heading">
//             <h3>Subscribe to our newsletter</h3>
//           </div>
//           <div className="blog-newsletter-form">
//             <form onSubmit={handleSubmit} >
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={userData.email}
//                 onChange={handleInputChange}
//                 required
//                 autoComplete="off"
//                 name="email"
//                 className="blog-newsletter-email"
//               />
//               {errorMessage && <p className="error-message">{errorMessage}</p>}
//               <button type="submit">Submit</button>
              
//             </form>
//           </div>
         
//         </div>
//       );
//     }
//   };

//   // Functions to share the current page to LinkedIn, Twitter, and Facebook
//   const shareToLinkedIn = () => {
//     const postTitle = encodeURIComponent(props.title);
//     const postUrl = encodeURIComponent(currentPageUrl);
//     window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}&title=${postTitle}`, '_blank', 'width=600,height=400');
//   };
  
//   const shareToTwitter = () => {
//     const postTitle = encodeURIComponent(props.title);
//     const postUrl = encodeURIComponent(currentPageUrl);
//     window.open(`https://twitter.com/intent/tweet?text=${postTitle}&url=${postUrl}`, '_blank', 'width=600,height=400');
//   };
  
//   const shareToFacebook = () => {
//     const postTitle = encodeURIComponent(props.title);
//     const postUrl = encodeURIComponent(currentPageUrl);
//     window.open(`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`, '_blank', 'width=600,height=400');
//   };
 
//   const mTitle= props.title;
//   const mDesc=props.metaDescription;


//   return (
//     <main>
      


//       <div className="blog-page">
//         <div className="blog-page-container">  
//           <section className="blog-page-hero-section" >
//             <div className="blog-page-hero-section-container">
//               <div className="blog-page-hero-section-category">
//                 <p className="blog-page-hero-category">{props.category}</p>
//               </div>
//               <div className="blog-page-hero-section-heading">
//                 <h1>{props.title}</h1>
//               </div>
//               <div className="blog-page-hero-section-para">
//                 <p>{props.metaDescription}</p>
//               </div>
//               <div className="blog-page-hero-section-author">
//                 <p>By <span style={{fontWeight:"700"}}>{props.author} </span></p>
//                 <span style={{color:"#d1d1d1"}}>|</span>
//                 <p>{props.date}</p>
//                 <p>{props.read}</p>
//               </div>
//             </div>
//           </section>
        
//           <section className="blog-page-article-section" >
//             <div className="blog-page-article-section-container">
//               {/* <div className="blog-page-table-of-contents">
//                 <div className="blog-page-table-of-contents-container">
//                   <h4>Table of contents</h4>
//                   {props.mainArticle && Array.isArray(props.mainArticle) && props.mainArticle.map((article, index) => (
//                   <p key={index} onClick={() => scrollToHeading(index)}>
//                     {article.heading}
//                   </p>
//                 ))}
//                 </div>
//               </div> */}

//               <div className="blog-page-article-contents">
//                 {Array.isArray(props.description) ? (
//                   props.description.map((desc, descIndex) => (
//                     <div className="blog-page-article-socials-description" key={descIndex}>
//                       {/* <p>{desc}</p> */}
//                       {/* <Image src={SS} style={{width:"100%",height:"100%", borderRadius:"8px"}}/> */}
//                     </div>
//                   ))
//                 ) : (
//                   <div className="blog-page-article-socials-description">
//                     <p>{props.description}</p>
//                   </div>
//                 )}

              
//               {props.mainArticle && props.mainArticle.map((article, mainIndex) => (
//                 <div className="blog-page-article-main-contents" key={mainIndex}>
//                   <h1 id={mainIndex}>{article.heading}</h1>
//                   {Array.isArray(article.description) ? (
//                     article.description.map((desc, descIndex) => (
//                       <p key={descIndex}>{desc}</p>
//                     ))
//                   ) : (
//                     <p>{article.description}</p>
//                   )}
//                   </div>
//                 ))}
//                  <div className="blog-page-article-socials">
//                   Share:
//                   <Image src={Linkedin} alt="" onClick={shareToLinkedIn} className="blog-social-b" width="28" height="28"/>
//                   <Image src={Facebook} alt="" onClick={shareToFacebook} className="blog-social-b" width="28" height="28"/>
//                   <Image src={Twitter} alt="" onClick={shareToTwitter} className="blog-social-b" width="28" height="28"/>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="blog-other-blogs">
//             <div className="blog-other-blogs-container">
//               <div className="blog-other-blog-heading">
//                  <h1>Other resources</h1>
//               </div>

//               <div className="blog-other-blogs-content">
//               {Blogother-blogsData.map((item,index)=>
                   
//                    <div className="blog-other-blogs-card" key={index}>
                       
//                         <Link href={`/blogs/${item.id}`}  className="blog-other-blogs-card-inner">
//                        <div className="blog-other-blogs-card-image" style={{backgroundColor: item.bgColor}}>
//                                                                <Image src={item.image} alt={item.alt} height="max-content"/>
//                        </div>
//                        <div className="blog-other-blogs-card-content">
//                        <div className="blog-other-blogs-card-category">
//                            <h1>{item.category}</h1>
//                            <p>{item.read}</p>
//                        </div>
//                        <div className="blog-other-blogs-card-heading">
//                            <h1>{item.title}</h1>
//                        </div>
//                        <div className="blog-other-blogs-card-description">
//                        <p>
//                        {/* {item.description} */}
//                        {item.description.split(' ').slice(0, 15).join(' ')}{item.description.split(' ').length > 15 ? '...' : ''}
//                        </p>
//                        </div>
//                        <div className="blog-other-blogs-card-author">
//                            <p>{item.author}</p>
//                            <p>{item.date}</p>
//                        </div>
//                        </div>
//                        </Link>
//                    </div>
                   
//                    )}
//               </div>
//             </div>
//           </section>

//           <section className="blog-newsletter">
//             <div className="blog-newsletter-container">
//               {renderFormOrMessage()} 
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// }

'use client'
import React, { useRef, useState } from "react";
import '@/styles/blog/BlogSingle.css';
import Twitter from '@/public/Images/socials/twitter.png';
import Linkedin from '@/public/Images/socials/linkedin.png';
import Facebook from '@/public/Images/socials/facebook.png';
import BlogSingleData from "@/api/blog/BlogSingleData";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage(props) {
  const [userData, setUserData] = useState({ email: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const currentPageUrl = `https://blog.trafyai.com/blogs/${props.id}`;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email } = userData;

    if (!email) {
      setErrorMessage("Please fill in the required fields.");
      return;
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    };

    try {
      const response = await fetch('https://newsletter-form-9e6c9-default-rtdb.firebaseio.com/NewsLetterForm.json', options);

      if (response.ok) {
        setSubscribed(true);
        setErrorMessage("");
        setUserData({ email: "" });
      } else {
        setErrorMessage("Error submitting the form. Please try again later.");
      }

      const emailRes = await fetch('http://localhost:5002/newsletter/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!emailRes.ok) {
        throw new Error('Error sending email');
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setErrorMessage("Error submitting the form. Please try again later.");
    }
  };

  const renderFormOrMessage = () => {
    if (subscribed) {
      return (
        <div className="blog-newsletter-form-thankyou">
          <h3>Thank you for subscribing to our newsletter!</h3>
        </div>
      );
    } else {
      return (
        <div className="blog-newsletter-container-inner">
          <div className="blog-newsletter-heading">
            <h3>Subscribe to our newsletter</h3>
          </div>
          <div className="blog-newsletter-form">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleInputChange}
                required
                autoComplete="off"
                name="email"
                className="blog-newsletter-email"
              />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      );
    }
  };

  const shareToLinkedIn = () => {
    const postTitle = encodeURIComponent(props.title);
    const postUrl = encodeURIComponent(currentPageUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}&title=${postTitle}`, '_blank', 'width=600,height=400');
  };

  const shareToTwitter = () => {
    const postTitle = encodeURIComponent(props.title);
    const postUrl = encodeURIComponent(currentPageUrl);
    window.open(`https://twitter.com/intent/tweet?text=${postTitle}&url=${postUrl}`, '_blank', 'width=600,height=400');
  };

  const shareToFacebook = () => {
    const postTitle = encodeURIComponent(props.title);
    const postUrl = encodeURIComponent(currentPageUrl);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`, '_blank', 'width=600,height=400');
  };

  return (
    <main>
      <div className="blog-page">
        <div className="blog-page-container">
         
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
                <p>{props.read}</p>
              </div>

             
          </section>

          <section className="blog-page-blog-image">
            <Image src={props.image}/>
            <div className="blog-page-article-socials">
                  {/* Share: */}
                  <Image src={Linkedin} alt="" onClick={shareToLinkedIn} className="blog-social-b" width="28" height="28" />
                  <Image src={Facebook} alt="" onClick={shareToFacebook} className="blog-social-b" width="28" height="28" />
                  <Image src={Twitter} alt="" onClick={shareToTwitter} className="blog-social-b" width="28" height="28" />
                </div>
          </section>

               {props.introduction && 
         <section className="blog-page-introduction">
                {props.introduction.map((intro,index)=>(
                  <p key={index}>{intro}</p>
                ))}
          </section>
               }

        
          <section className="blog-page-article-section">
    
                {props.mainArticle && props.mainArticle.map((article, mainIndex) => (
                  <div className="blog-page-article-main-contents" key={mainIndex}>
                    <h1 id={mainIndex}>{article.heading}</h1>

                    {article.description && article.description.map((desc, descIndex) => (
                        <p key={descIndex}>{desc}</p>
                      ))
                    }

                    {article.subArticle && article.subArticle.map((subarticle,subIndex)=>(
                      <div className="blog-page-subarticle" key={subIndex}>
                          <h2>{subarticle.heading}</h2>

                          {subarticle.description.map((subDesc,descIndex)=>(
                            <p key={descIndex}>{subDesc}</p>
                          ))}
                      </div>
                    ))}

                  </div>
                    

                ))}

            
          </section>

          {/* Other Blogs Section */}
          <section className="blog-other-blogs">
              <div className="blog-other-blog-heading">
                <h2>Other Resources</h2>
              </div>

              <div className="blog-other-blogs-content">
                {BlogSingleData.filter(item => item.id !== props.id).slice(0, 3).map((item, index) => (

                      <div className="blog-other-blogs-card" key={index}>
                            
                      <Link href={`/${item.id}`}  className="blog-other-blogs-card-inner">
                      <div className="blog-other-blogs-card-image" >
                          <Image src={item.image} alt={item.alt} height="max-content"/>
                      </div>
                      <div className="blog-other-blogs-card-content">
                      {/* <div className="blog-other-blogs-card-category">
                          <h1>{item.category}</h1>
                          <p>{item.read}</p>
                      </div> */}
                      <div className="blog-other-blogs-card-heading">
                          <h1>{item.title}</h1>
                      </div>
                      <div className="blog-other-blogs-card-description">
                      <p>
                      {/* {item.description} */}

                      {String(item.description).slice(0, 130)}...
                      </p>
                      </div>
                      {/* <div className="blog-other-blogs-card-author">
                          <p>{item.author}</p>
                          <p>{item.date}</p>
                      </div> */}
                      </div>
                      </Link>
                  </div>

                ))}
              </div>
          </section>

          {/* Newsletter Section */}
          <section className="blog-newsletter">
            <div className="blog-newsletter-container">
              {renderFormOrMessage()}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
