import React from 'react'
import Head from 'next/head'

const Metadata = ({ title, desc }) => {
  return (
    <Head>
      <title>tmi | {title}</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="description" content={desc} />
      <meta name="robots" content="index, follow" />
    </Head>
  )
}

export default Metadata
