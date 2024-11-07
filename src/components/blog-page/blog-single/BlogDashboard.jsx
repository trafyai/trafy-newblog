

// import Image from 'next/image';
// import React, { useState } from 'react';
// import Twitter from '@public/assets/Images/common/common/socials/twitter.png';
// import Linkedin from '@public/assets/Images/common/common/socials/linkedin.png';
// import Facebook from '@public/assets/Images/common/common/socials/facebook.png';
// import close from '@public/assets/Images/common/common/close-w.svg';

// const BlogDashboard = ({ mainArticle, handleScrollToArticle, handleScrollToSubArticle, activeIndex, ...props }) => {
//   const [visibleIndex, setVisibleIndex] = useState(null);
//   const [tableOpen, setTableOpen] = useState(false);
//   const [shareOpen, setShareOpen] = useState(false);
//   const [active, setActive] = useState(false); // State to track active status
//   const [sactive, setSactive] = useState(false); // State to track active status

//   const toggleSubArticle = (index) => {
//     setVisibleIndex(visibleIndex === index ? null : index);
//     handleScrollToArticle(index); // Scroll to main article
//     setTableOpen(false); // Close the table of contents when an item is clicked
//     setActive(false); // Toggle active state on click

//   };

//   const handleTableClick = () => {
//     setActive(!active); // Toggle active state on click
//     setTableOpen(!tableOpen);
//     setShareOpen(false);
//   };

//   const handleShareClick = () => {
//     setActive(false); // Toggle active state on click
//     setSactive(!sactive); // Toggle active state on click
//     setTableOpen(false);
//     setShareOpen(!shareOpen);
//   };

//   const handleCloseClick = () => {
//     setTableOpen(false);
//     setShareOpen(false);
//     setActive(false); // Reset active state for "Table of contents"
//     setSactive(false); // Reset active state for "Share"
//   };

//   const currentPageUrl = `https://blog.trafyai.com/${props.id}`;

//   const shareToLinkedIn = () => {
//     const postUrl = encodeURIComponent(currentPageUrl);
//     const postTitle = encodeURIComponent(props.title);
//     const postSummary = encodeURIComponent(props.metaDescription);
//     const postImage = encodeURIComponent(props.image);
  
//     const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}&title=${postTitle}&summary=${postSummary}&source=${postUrl}&image=${postImage}`;
//     window.open(linkedinUrl, '_blank', 'width=600,height=400');
//   };

//   const shareToTwitter = () => {
//     const postUrl = encodeURIComponent(currentPageUrl);
//     const postText = encodeURIComponent(`${props.title} - ${props.metaDescription}`);
//     const postImage = encodeURIComponent(props.image);  // Optional as Twitter handles images through cards
  
//     const twitterUrl = `https://twitter.com/intent/tweet?text=${postText}&url=${postUrl}&image=${postImage}`;
//     window.open(twitterUrl, '_blank', 'width=600,height=400');
//   };
  
//   const shareToFacebook = () => {
//     const postUrl = encodeURIComponent(currentPageUrl);
//     const postTitle = encodeURIComponent(props.title); // Not always necessary
//     const postDescription = encodeURIComponent(props.metaDescription); // Not always necessary
//     const postImage = encodeURIComponent(props.image); // Not always necessary
  
//     const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}&quote=${postTitle}&description=${postDescription}&image=${postImage}`;
//     window.open(facebookUrl, '_blank', 'width=600,height=400');
//   };

//   return (
//     <div className='blog-dashboard'>
//       <div className='blog-dashboard-container'>
//         <div className='blog-dashboard-heading'>
//           <h3>Table of contents</h3>
//         </div>
//         {mainArticle && mainArticle.map((item, index) => (
//           <div className='blog-dashboard-contents' key={index}>
//             <h2
//               onClick={() => toggleSubArticle(index)}
//               style={{
//                 cursor: 'pointer',
//                 color: activeIndex.main === index ? 'var(--p-black)' : 'rgb(94 94 94)', // Highlight active main article
//                 fontWeight: activeIndex.main === index ? '500' : 'normal'
//               }}
//             >
//               {item.heading}
//             </h2>
//           </div>
//         ))}
//       </div>

//       <div className='blog-mobile-dashboard-container'>
//         {tableOpen &&
//           <div className='blog-mobile-dashboard-table'>
//             <div className='blog-mobile-dashboard-table-container'>
//               {/* <div className='blog-mobile-dashboard-close'>
//                 <Image src={close} onClick={handleCloseClick} />
//               </div> */}
//               {mainArticle && mainArticle.map((item, index) => (
//                 <div className='blog-mobile-dashboard-table-contents' key={index}>
//                   <h2
//                     onClick={() => toggleSubArticle(index)}
//                     style={{
//                       cursor: 'pointer',
//                       color: activeIndex.main === index ? 'var(--h-white)' : 'var(--p-white)', // Highlight active main article
//                       fontWeight: activeIndex.main === index ? '600' : 'normal'
//                     }}
//                   >
//                     {item.heading}
//                   </h2>
//                 </div>
//               ))}
//             </div>
//           </div>
//         }

//         {shareOpen &&
//           <div className='blog-mobile-dashboard-share'>
       
//             <div className='blog-mobile-dashboard-share-container'>
//               <Image src={Twitter} />
//               <Image src={Facebook} />
//               <Image src={Linkedin} />
//             </div>
//           </div>
//         }

//         <div className='blog-mobile-dashboard-buttons'>
//           <div className='blog-mobile-dashboard-heading'>
//             <h3
//               className={`blog-mobile-dashboard-heading ${active ? 'active' : ''}`}
//               onClick={handleTableClick}
//               style={{
//                 cursor: 'pointer',
//                 backgroundColor: active ? 'white' : 'black', // Change background on active
//                 color: active ? 'black' : 'white', // Change text color on active
//                 transition: 'background-color 0.3s, color 0.3s', // Optional transition effect
//               }}
//             >Table of contents</h3>
//           </div>

//           <div className='blog-mobile-dashboard-heading'>
//             <h3
//               className={`blog-mobile-dashboard-heading ${sactive ? 'sactive' : ''}`}
//               onClick={handleShareClick}
//               style={{
//                 cursor: 'pointer',
//                 backgroundColor: sactive ? 'white' : 'black', // Change background on active
//                 color: sactive ? 'black' : 'white', // Change text color on active
//                 transition: 'background-color 0.3s, color 0.3s', // Optional transition effect
//               }}>Share</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDashboard;



import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import Twitter from '@public/assets/Images/common/common/socials/twitter.png';
import Linkedin from '@public/assets/Images/common/common/socials/linkedin.png';
import Facebook from '@public/assets/Images/common/common/socials/facebook.png';
import close from '@public/assets/Images/common/common/close-w.svg';
import share from '@public/assets/Images/common/common/share_white.svg';

const BlogDashboard = ({ mainArticle, handleScrollToArticle, handleScrollToSubArticle, activeIndex, ...props }) => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [tableOpen, setTableOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [active, setActive] = useState(false); // State to track active status
  const [sactive, setSactive] = useState(false); // State to track active status
  const containerRef = useRef(null);

  const toggleSubArticle = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
    handleScrollToArticle(index);
    setTableOpen(false);
    setActive(false);
  };

  const handleTableClick = () => {
    setActive(!active);
    setTableOpen(!tableOpen);
    setShareOpen(false);
  };

  const handleShareClick = () => {
    setActive(false);
    setSactive(!sactive);
    setTableOpen(false);
    setShareOpen(!shareOpen);
  };

  const handleCloseClick = () => {
    setTableOpen(false);
    setShareOpen(false);
    setActive(false);
    setSactive(false);
  };

  // Close all menus if clicking outside component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setTableOpen(false);
        setShareOpen(false);
        setActive(false);
        setSactive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentPageUrl = `https://blog.trafyai.com/${props.id}`;

  const shareToLinkedIn = () => {
    const postUrl = encodeURIComponent(currentPageUrl);
    const postTitle = encodeURIComponent(props.title);
    const postSummary = encodeURIComponent(props.metaDescription);
    const postImage = encodeURIComponent(props.image);

    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}&title=${postTitle}&summary=${postSummary}&source=${postUrl}&image=${postImage}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
  };

  const shareToTwitter = () => {
    const postUrl = encodeURIComponent(currentPageUrl);
    const postText = encodeURIComponent(`${props.title} - ${props.metaDescription}`);
    const postImage = encodeURIComponent(props.image);

    const twitterUrl = `https://twitter.com/intent/tweet?text=${postText}&url=${postUrl}&image=${postImage}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const shareToFacebook = () => {
    const postUrl = encodeURIComponent(currentPageUrl);
    const postTitle = encodeURIComponent(props.title);
    const postDescription = encodeURIComponent(props.metaDescription);
    const postImage = encodeURIComponent(props.image);

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}&quote=${postTitle}&description=${postDescription}&image=${postImage}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className='blog-dashboard' ref={containerRef}>
      <div className='blog-dashboard-container'>
        <div className='blog-dashboard-heading'>
          <h3>Table of contents</h3>
        </div>
        {mainArticle && mainArticle.map((item, index) => (
          <div className='blog-dashboard-contents' key={index}>
            <h2
              onClick={() => toggleSubArticle(index)}
              style={{
                cursor: 'pointer',
                color: activeIndex.main === index ? 'var(--p-black)' : 'rgb(94 94 94)',
                fontWeight: activeIndex.main === index ? '500' : 'normal'
              }}
            >
              {item.heading}
            </h2>
          </div>
        ))}
      </div>

      <div className='blog-mobile-dashboard-container'>
        {tableOpen &&
          <div className='blog-mobile-dashboard-table'>
            <div className='blog-mobile-dashboard-table-container'>
              {mainArticle && mainArticle.map((item, index) => (
                <div className='blog-mobile-dashboard-table-contents' key={index}>
                  <h2
                    onClick={() => toggleSubArticle(index)}
                    style={{
                      cursor: 'pointer',
                      color: activeIndex.main === index ? 'var(--h-white)' : 'var(--p-white)',
                      fontWeight: activeIndex.main === index ? '600' : 'normal'
                    }}
                  >
                    {item.heading}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        }

        {shareOpen &&
          <div className='blog-mobile-dashboard-share'>
            <div className='blog-mobile-dashboard-share-container'>
              <Image src={Twitter} onClick={shareToTwitter} />
              <Image src={Facebook} onClick={shareToFacebook}/>
              <Image src={Linkedin} onClick={shareToLinkedIn}/>
            </div>
          </div>
        }

        <div className='blog-mobile-dashboard-buttons'>
          <div className='blog-mobile-dashboard-heading'>
            <h3
              className={`blog-mobile-dashboard-heading ${active ? 'active' : ''}`}
              onClick={handleTableClick}
              style={{
                cursor: 'pointer',
                backgroundColor: active ? 'white' : 'black',
                color: active ? 'black' : 'white',
                transition: 'background-color 0.3s, color 0.3s',
              }}
            >Table of contents</h3>
          </div>

          <div   className={`blog-mobile-dashboard-share-heading ${sactive ? 'sactive' : ''}`}
              onClick={handleShareClick}
              style={{
                cursor: 'pointer'
              }}>
            <Image src={share}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDashboard;
