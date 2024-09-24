import React from 'react';
import BlogSingleData from '@api/blog/BlogSingleData'; // Assuming this fetches blog data
import BlogPage from '@components/blog-page/blog-single/BlogSingle'; 
import { getOpenGraphImage } from './opengraph-image.js';

export async function generateMetadata({ params, searchParams }, parent) {
  const id= params.slug;
  const product = BlogSingleData.find(blog => blog.id === id);
  const imageUrl = getOpenGraphImage; // Get the Open Graph image based on the product ID

  return {
    title: product.title,
    description: product.metaDescription,
    metadataBase: `https://blog.trafyai.com/${product.id}`,
    type: 'article',
    openGraph: {
      title: product.title, 
      description: product.metaDescription,
      url: `https://blog.trafyai.com/${product.id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.metaDescription,
      url: `https://blog.trafyai.com/${product.id}`,
      image: imageUrl, // Use the same image for Twitter
    },
  }
}

const Page = ({ params }) => {
  const id = params.slug;
  const BlogData = BlogSingleData.find(blog => blog.id === id);

  return (
    <>

    <div>
       
      <BlogPage {...BlogData} />
    </div>
    </>
  );
};

export default Page;

// import React from 'react';
// import BlogSingleData from '@api/blog/BlogSingleData'; // Assuming this fetches blog data
// import BlogPage from '@components/blog-page/blog-single/BlogSingle';
// // import ErrorPage from 'next/error'; // Next.js built-in ErrorPage

// export async function generateMetadata({ params }) {
//   const id = params.slug;
//   const product = BlogSingleData.find(blog => blog.id === id);

//   if (!product) {
//     return {
//       title: 'Blog not found',
//       description: 'The blog you are looking for does not exist.',
//     };
//   }

//   const imageUrl = getOpenGraphImage; // Assuming getOpenGraphImage takes an ID as a parameter

//   return {
//     title: product.title,
//     description: product.metaDescription,
//     metadataBase: `https://blog.trafyai.com/${product.id}`,
//     type: 'article',
//     openGraph: {
//       title: product.title,
//       description: product.metaDescription,
//       url: `https://blog.trafyai.com/${product.id}`,
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: product.title,
//       description: product.metaDescription,
//       url: `https://blog.trafyai.com/${product.id}`,
//       image: imageUrl, // Use the same image for Twitter
//     },
//   };
// }

// const Page = ({ params }) => {
//   const id = params.slug;
//   const BlogData = BlogSingleData.find(blog => blog.id === id);

//   // if (!BlogData) {
//   //   // If the blog is not found, redirect to a 404 page
//   //   return <ErrorPage/>;
//   // }

//   return (
//     <div>
//       <BlogPage {...BlogData} />
//     </div>
//   );
// };

// export default Page;
