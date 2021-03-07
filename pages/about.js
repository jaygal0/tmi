import React from 'react'
import Footer from '../components/Footer'
import TextBox from '../components/TextBox'
import Nav from '../components/Nav'
import HeadingHero from '../components/HeadingHero'

const about = () => {
  return (
    <>
      <main>
        <Nav />
        <HeadingHero
          main="get to know me"
          sub="Understand why I started this site"
        />
        <TextBox />
      </main>
      <Footer />
    </>
  )
}

export default about
