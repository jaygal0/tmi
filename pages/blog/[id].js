import React from 'react'
import Footer from '../../components/Footer'
import TextBox from '../../components/TextBox'
import Nav from '../../components/Nav'
import HeadingHero from '../../components/HeadingHero'
import Metadata from '../../components/Metadata'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const blogDetail = ({ article }) => {
  {
    console.log(article)
  }
  return (
    <>
      <Metadata title={article.fields.title} />
      <main>
        <Nav />
        <HeadingHero main={article.fields.title} sub={article.fields.snippet} />
        <TextBox>{documentToReactComponents(article.fields.body)}</TextBox>
      </main>
      <Footer />
    </>
  )
}

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths = async () => {
  let data = await client.getEntries({
    content_type: 'blog',
  })
  return {
    paths: data.items.map((item) => ({
      params: { id: item.fields.slug },
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
      article: data.items[1],
    },
  }
}

// export async function getStaticPaths() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const posts = await res.json()

//   const paths = posts.map((post) => ({
//     params: { id: post.id.toString() },
//   }))

//   return { paths, fallback: false }
// }

// export async function getStaticProps(context) {
//   const blogPost = await client.getEntries()

//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )
//   const post = await res.json()

//   return {
//     props: { post },
//   }
// }

export default blogDetail
