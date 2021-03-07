import React from 'react'
import HeadingHero from '../components/HeadingHero'
import Metadata from '../components/Metadata'
import Nav from '../components/Nav'

const blog = () => {
  return (
    <div>
      <Metadata title="Blog" />
      <Nav />
      <HeadingHero
        main="what's on my mind"
        sub="Writing down all of my thoughts."
      />
    </div>
  )
}

export default blog
