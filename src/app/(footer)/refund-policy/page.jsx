import React from 'react'
import RefundPolicy from '@components/footer/compliance/RefundPolicy';
import Head from 'next/head';
const page = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
        <RefundPolicy/>
    </div>
  )
}

export default page