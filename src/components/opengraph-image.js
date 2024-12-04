// import { ImageResponse } from 'next/og'
// import BlogSingleData from '@/api/blog/BlogSingleData';
 
// export const alt = ''
// export const size = {
//   width: 1200,
//   height: 630,
// }
 
// export const contentType = 'image/png'


// export default async function Image({ params }) {
//     const id= params.slug;
//     const product = BlogSingleData.find(blog => blog.id === id);
   
//     return new ImageResponse(
//       (
       
// <ImageResponse src={product.image} alt="img"/>


//       ),
//       {
//         ...size,
//       }
//     )
//   }



import { ImageResponse } from 'next/og'
import BlogSingleData from '@api/blog/BlogSingleData';

export const runtime = 'edge'
 
// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image({ params }) {
      const id= params.slug;
      const product = BlogSingleData.find(blog => blog.id === id);

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          background: `url(${product.metaImage}) no-repeat center / contain`,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    
    }
  )
}