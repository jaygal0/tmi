import React from 'react'
import Footer from '../components/Footer'
import TextBox from '../components/TextBox'
import Nav from '../components/Nav'
import HeadingHero from '../components/HeadingHero'
import Metadata from '../components/Metadata'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const about = ({ about }) => {
  return (
    <>
      <Metadata title="About" />
      <main>
        <Nav />
        <HeadingHero main={about.title} sub={about.sub} />
        <TextBox heading={about.heading}>
          {documentToReactComponents(about.body)}
        </TextBox>
      </main>
      <Footer />
    </>
  )
}

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticProps = async () => {
  let data = await client.getEntries({
    content_type: 'about',
  })

  return {
    props: {
      about: data.items[0].fields,
    },
  }
}

export default about
