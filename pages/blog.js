import React from 'react'
import BlogWrapper from '../components/BlogWrapper'
import Footer from '../components/Footer'
import HeadingHero from '../components/HeadingHero'
import Metadata from '../components/Metadata'
import Nav from '../components/Nav'
import { GridContainer } from '../styles'
import Blog from '../components/Blog'

const blog = ({ blog }) => {
  {
    console.log(blog)
  }
  return (
    <>
      <Metadata title="Blog" />
      <main>
        <Nav />
        <HeadingHero
          main="what's on my mind"
          sub="Writing down all of my thoughts."
        />
        <GridContainer>
          <BlogWrapper>
            {blog.map(({ fields, sys }) => (
              <Blog
                key={sys.id}
                url={fields.slug}
                heading={fields.title}
                snippet={fields.snippet}
              />
            ))}
          </BlogWrapper>
        </GridContainer>
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
    content_type: 'blog',
  })

  return {
    props: {
      blog: data.items,
    },
  }
}

export default blog
