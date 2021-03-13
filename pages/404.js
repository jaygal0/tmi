import React from 'react'
import HeadingHero from '../components/HeadingHero'
import Nav from '../components/Nav'
import ButtonMain from '../components/ButtonMain'

const error = () => {
  return (
    <>
      <Nav title="404" desc="this page doesn't exist" />
      <main>
        <HeadingHero
          main="Oops, this page doesn't exist"
          sub="It seems like you've ended up in the wrong place."
        >
          <ButtonMain name="head back home" src="/" />
        </HeadingHero>
      </main>
    </>
  )
}

export default error
