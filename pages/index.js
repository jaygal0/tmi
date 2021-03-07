import ButtonMain from '../components/ButtonMain'
import Footer from '../components/Footer'
import HeadingHero from '../components/HeadingHero'
import HomeCardLeft from '../components/HomeCardLeft'
import HomeCardRight from '../components/HomeCardRight'
import HomeIdeaCard from '../components/HomeIdeaCard'
import Metadata from '../components/Metadata'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Metadata title="Home" />
      <main>
        <Nav />
        <HeadingHero
          main="testing my ideas"
          sub="I have many ideas, this site reminds me when to let go and test a new one."
        >
          <ButtonMain name="view my ideas" src="/ideas" />
        </HeadingHero>
        <HomeCardRight
          main="kill your darlings"
          sub="I find it hard to move on from an idea, but if I don’t, I won’t have the time to find a successful one."
          src="/cross.svg"
          color="yellow"
        />
        <HomeCardLeft
          main="when to move on"
          src="/three-dots.svg"
          sub="The rule is simple; if the idea doesn’t generate $1000 of revenue after the first 3 months, it’s time for me to test a new idea."
          color="pink"
        />
        <HomeCardRight
          main="creating the idea"
          src="design-process.svg"
          sub="By using the mindset of design sprints and design principles, I’ll be able to quickly create an MVP and test out the idea. "
          color="orange"
        />
        <HomeIdeaCard
          main="a list of my ideas"
          sub="Find out which of my ideas were successful and which failed."
          color="orange"
          src="idea-app.png"
        />
      </main>
      <Footer />
    </>
  )
}
