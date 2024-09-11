import React from 'react'
import Refund from '@/components/footer/RefundPolicy';
import Head from 'next/head';
const page = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
        <Refund/>
    </div>
  )
}

export default page