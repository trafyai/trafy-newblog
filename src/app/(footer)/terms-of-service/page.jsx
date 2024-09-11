import React from 'react';
import Terms from '@/components/footer/TermsOfService'
import Head from 'next/head';
const terms = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
        <Terms/>
    </div>
  )
}

export default terms;