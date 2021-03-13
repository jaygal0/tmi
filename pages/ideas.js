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
      <Metadata
        title="Ideas"
        desc="a list of my ideas that i've tested in the past"
      />
      <Nav />
      <main>
        <HeadingHero
          main="a list of my ideas"
          sub="Documenting every idea and finding out when to move on."
        />
        <GridContainer>
          <IdeaWrapper>
            {idea.map(({ fields, sys }) => (
              <Idea
                key={sys.id}
                url={fields.slug.toLowerCase()}
                src={fields.image.fields.file.url}
                width={fields.image.fields.file.details.image.width}
                height={fields.image.fields.file.details.image.height}
                released={fields.released}
                revenue={fields.revenue}
                description={fields.image.fields.description}
              />
            ))}
          </IdeaWrapper>
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
    content_type: 'idea',
  })

  return {
    props: {
      idea: data.items,
    },
    revalidate: 1,
  }
}

export default ideas
