import React from 'react'
import CookiePolicy from '@components/footer/compliance/CookiePolicy';
import Head from 'next/head';
export const metadata = {
  robots: "noindex, nofollow",
};
const page = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
        <CookiePolicy/>
    </div>
  )
}

export default page