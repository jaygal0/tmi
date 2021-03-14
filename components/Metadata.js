import React from 'react'
import Head from 'next/head'

const Metadata = ({ title, desc }) => {
  return (
    <Head>
      <title>tmi | {title}</title>
      <link rel="icon" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content={desc} />
      <meta name="robots" content="index, follow" />
    </Head>
  )
}

export default Metadata
