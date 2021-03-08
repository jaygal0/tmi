import React from 'react'
import Footer from '../../components/Footer'
import TextBox from '../../components/TextBox'
import Nav from '../../components/Nav'
import HeadingHero from '../../components/HeadingHero'
import Metadata from '../../components/Metadata'
import MetaButtonDetail from '../../components/MetaButtonDetail'
import ButtonDetail from '../../components/ButtonDetail'

const detail = () => {
  const websiteLink = 'https://joshuagalinato.com'
  return (
    <>
      <Metadata title="[Ideas name]" />
      <main>
        <Nav />
        <HeadingHero
          main="ideas heading"
          sub="Add one liner here"
          link={websiteLink}
        >
          <ButtonDetail src={websiteLink} name="view the idea" />
          <MetaButtonDetail revenue={70} released="10/10/91" color="black" />
        </HeadingHero>
        <TextBox heading="the idea">
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
