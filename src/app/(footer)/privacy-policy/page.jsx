import React from 'react'
import Privacy from '@/components/footer/PrivacyPolicy';
import Head from 'next/head';
const page = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
        <Privacy/>
    </div>
  )
}

export default page