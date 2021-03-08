import React from 'react'
import BlogWrapper from '../components/BlogWrapper'
import Footer from '../components/Footer'
import HeadingHero from '../components/HeadingHero'
import Metadata from '../components/Metadata'
import Nav from '../components/Nav'
import { GridContainer } from '../styles'

const blog = () => {
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
          <BlogWrapper />
        </GridContainer>
      </main>
      <Footer />
    </>
  )
}

export default blog
