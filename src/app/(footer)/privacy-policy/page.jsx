import React from 'react'
import PrivacyPolicy from '@components/footer/compliance/PrivacyPolicy';
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
        <PrivacyPolicy/>
    </div>
  )
}

export default page