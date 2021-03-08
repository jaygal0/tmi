import React from 'react'
import Footer from '../../components/Footer'
import TextBox from '../../components/TextBox'
import Nav from '../../components/Nav'
import HeadingHero from '../../components/HeadingHero'
import Metadata from '../../components/Metadata'

const detail = () => {
  return (
    <>
      <Metadata title="[Ideas name]" />
      <main>
        <Nav />
        <HeadingHero main="blog heading" sub="Add one liner here"></HeadingHero>
        <TextBox>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            et quo deserunt voluptas harum. Eligendi exercitationem ut odit
            atque! Ipsam debitis animi laboriosam officiis. Facere
            exercitationem quidem consequuntur recusandae ratione.
          </p>
          <h5>the problem</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            et quo deserunt voluptas harum. Eligendi exercitationem ut odit
            atque! Ipsam debitis animi laboriosam officiis. Facere
            exercitationem quidem consequuntur recusandae ratione.
          </p>
          <h5>the result</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab impedit
            dignissimos unde harum, nam doloremque fugiat corporis quasi. Eos,
            beatae?
          </p>
          <h5>what i learned</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab impedit
            dignissimos unde harum, nam doloremque fugiat corporis quasi. Eos,
            beatae?
          </p>
        </TextBox>
      </main>
      <Footer />
    </>
  )
}

export default detail
