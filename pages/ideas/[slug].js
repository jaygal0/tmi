import React from 'react'
import Footer from '../../components/Footer'
import TextBox from '../../components/TextBox'
import Nav from '../../components/Nav'
import HeadingHero from '../../components/HeadingHero'
import Metadata from '../../components/Metadata'
import MetaButtonDetail from '../../components/MetaButtonDetail'
import ButtonDetail from '../../components/ButtonDetail'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const ideasDetail = ({ article }) => {
  if (!article) return <div>404</div>
  return (
    <>
      <Metadata title={article.fields.title} desc={article.fields.oneliner} />
      <Nav />
      <main>
        <HeadingHero
          main={article.fields.title}
          sub={article.fields.oneliner}
          link={article.fields.website}
        >
          <ButtonDetail src={article.fields.website} name="view the idea" />
          <MetaButtonDetail
            revenue={article.fields.revenue}
            released={article.fields.released}
            color="black"
          />
        </HeadingHero>
        <TextBox heading="the idea">
          {documentToReactComponents(article.fields.body)}
        </TextBox>
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
    content_type: 'idea',
  })
  return {
    paths: data.items.map((item) => ({
      params: {
        slug: item.fields.slug.toLowerCase(),
      },
    })),
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  let data = await client.getEntries({
    content_type: 'idea',
    'fields.slug': params.slug,
  })

  return {
    props: {
      article: data.items[0],
    },
    revalidate: 60,
  }
}

export default ideasDetail
