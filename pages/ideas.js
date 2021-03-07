import React from 'react'
import Footer from '../components/Footer'
import HeadingHero from '../components/HeadingHero'
import IdeaWrapper from '../components/IdeaWrapper'
import Metadata from '../components/Metadata'
import Nav from '../components/Nav'
import { GridContainer } from '../styles'

const ideas = () => {
  return (
    <>
      <Metadata title="Ideas" />
      <Nav />
      <HeadingHero
        main="a list of my ideas"
        sub="Documenting every idea and finding out when to move on."
      />
      <GridContainer>
        <IdeaWrapper />
      </GridContainer>
      <Footer />
    </>
  )
}

export default ideas
