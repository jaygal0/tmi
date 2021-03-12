import React from 'react'
import Footer from '../../components/Footer'
import TextBox from '../../components/TextBox'
import Nav from '../../components/Nav'
import HeadingHero from '../../components/HeadingHero'
import Metadata from '../../components/Metadata'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import moment from 'moment'

const blogDetail = ({ article }) => {
  console.log(article)
  let date = moment(article.fields.published)
  let dateComponent = date.locale('en-gb').format('L')

  return (
    <>
      <Metadata title={article.fields.title} />
      <Nav />
      <main>
        <HeadingHero
          main={article.fields.title}
          sub={article.fields.snippet}
          published={dateComponent}
        />
        <TextBox>{documentToReactComponents(article.fields.body)}</TextBox>
      </main>
      <Footer />
    </>
  )
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
  let data = await client.getEntries({
    content_type: 'blog',
  })
  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  let data = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug,
  })

  return {
    props: {
      article: data.items[0],
    },
  }
}

export default blogDetail
