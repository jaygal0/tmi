import React from 'react'
import Head from 'next/head'

const Metadata = ({ title }) => {
  return (
    <Head>
      <title>TMI | {title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Metadata
