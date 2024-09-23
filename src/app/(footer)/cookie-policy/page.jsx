import React from 'react'
import Cookie from '@/components/footer/CookiePolicy'
import Head from 'next/head';
const page = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
        <Cookie/>
    </div>
  )
}

export default page