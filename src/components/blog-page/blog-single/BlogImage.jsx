import React from 'react'
import Image from 'next/image';
import Twitter from '@public/assets/Images/common/common/socials/twitter.png';
import Linkedin from '@public/assets/Images/common/common/socials/linkedin.png';
import Facebook from '@public/assets/Images/common/common/socials/facebook.png';

const BlogImage = (props) => {
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
    const postImage = encodeURIComponent(props.image);  // Optional as Twitter handles images through cards
  
    const twitterUrl = `https://twitter.com/intent/tweet?text=${postText}&url=${postUrl}&image=${postImage}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };
  
  const shareToFacebook = () => {
    const postUrl = encodeURIComponent(currentPageUrl);
    const postTitle = encodeURIComponent(props.title); // Not always necessary
    const postDescription = encodeURIComponent(props.metaDescription); // Not always necessary
    const postImage = encodeURIComponent(props.image); // Not always necessary
  
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}&quote=${postTitle}&description=${postDescription}&image=${postImage}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };
  

  return (
    <div> 
        <section className="blog-page-blog-image">
            <Image className="blog-page-img" src={props.image} alt='blog-image'/>
            <div className="blog-page-article-socials">
                Share:
                <Image src={Linkedin} alt="Linkedin" onClick={shareToLinkedIn} className="blog-social-b" width="28" height="28" />
                <Image src={Facebook} alt="Facebook" onClick={shareToFacebook} className="blog-social-b" width="28" height="28" />
                <Image src={Twitter} alt="X" onClick={shareToTwitter} className="blog-social-b" width="28" height="28" />
            </div>
        </section>
  </div>
  )
}

export default BlogImage