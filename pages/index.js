import ButtonMain from '../components/ButtonMain'
import Footer from '../components/Footer'
import HeadingHero from '../components/HeadingHero'
import HomeCardLeft from '../components/HomeCardLeft'
import HomeCardRight from '../components/HomeCardRight'
import HomeIdeaCard from '../components/HomeIdeaCard'
import Metadata from '../components/Metadata'
import Nav from '../components/Nav'

export default function Home({ idea }) {
  return (
    <>
      <Metadata
        title="Home"
        desc="testing my ideas. I have many ideas, this site reminds me when to let go and test a new one."
      />
      <Nav />
      <main>
        <HeadingHero
          main="testing my ideas"
          sub="I have many ideas, this site reminds me when to let go and test a new one."
        >
          <ButtonMain name="view my ideas" src="/ideas" />
        </HeadingHero>
        <HomeCardRight
          main="kill your darlings"
          sub="I find it hard to move on from an idea, that's why I built this site to hold me accountable and recognise when to let go and test a new one."
          src="/cross.svg"
          color="yellow"
        />
        <HomeCardLeft
          main="when to move on"
          src="/three-dots.svg"
          sub="The rule is simple; if the idea doesn’t generate £1000 of revenue after the first 3 months, it’s time for me to test a new idea."
          color="pink"
        />
        <HomeCardRight
          main="creating the idea"
          src="/design-process.svg"
          sub="I need to be able to design, build and release a minimal viable product as quickly as possible. That way, I can focus on testing and improving the idea."
          color="orange"
        />
        <HomeIdeaCard
          main="a list of my ideas"
          sub="Find out which of my ideas were successful and which failed."
          color="orange"
          idea={idea}
        />
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
