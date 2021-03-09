import React from 'react'
import Footer from '../components/Footer'
import HeadingHero from '../components/HeadingHero'
import IdeaWrapper from '../components/IdeaWrapper'
import Metadata from '../components/Metadata'
import Nav from '../components/Nav'
import { GridContainer } from '../styles'
import Idea from '../components/Idea'

const ideas = ({ idea }) => {
  return (
    <>
      <Metadata title="Ideas" />
      <Nav />
      <HeadingHero
        main="a list of my ideas"
        sub="Documenting every idea and finding out when to move on."
      />
      <GridContainer>
        <IdeaWrapper>
          {idea.map(({ fields, sys }) => (
            <Idea
              key={sys.id}
              url={fields.slug}
              src={fields.image}
              released={fields.released}
              revenue={fields.revenue}
            />
          ))}
        </IdeaWrapper>
      </GridContainer>
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
    content_type: 'idea',
  })

  return {
    props: {
      idea: data.items,
    },
  }
}

// export async function getStaticProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const posts = await res.json()

//   return {
//     props: { posts },
//   }
// }

export default ideas
