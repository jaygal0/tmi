import React from 'react'
import Footer from '../components/Footer'
import TextBox from '../components/TextBox'
import Nav from '../components/Nav'
import HeadingHero from '../components/HeadingHero'
import Metadata from '../components/Metadata'

const about = () => {
  return (
    <>
      <Metadata title="About" />
      <main>
        <Nav />
        <HeadingHero
          main="get to know me"
          sub="Understand why I started this site"
        />
        <TextBox heading="hello reader!">
          <p>
            I have an entrepreneurial spirit with quite a few ideas in my head.
            This mindset led me down a path of building a couple of businesses
            throughout the years. Unfortunately, none of them worked out the way
            I had imagined.
          </p>
          <p>
            In retrospect, I realised that I kept on making the same mistake.
          </p>
          <p>
            Instead of moving on from a failing idea, I would try my best to
            make it work even though the writing was on the wall.
          </p>
          <p>
            Not only would this take up all of my energy, but it was eating into
            my time as well.
          </p>
          <h5>Building TMI</h5>
          <p>
            Instead of trying to draw blood from a stone and waste my time and
            effort, I created a set of rules to help me decide when to move on.
            This will stop myself from falling in love with a failing idea and
            hopefully find a successful one.
          </p>
          <h5>when to move on</h5>
          <p>
            The rule is simple; if the idea doesn’t generate $1000 within the
            first 3 months of the release date, it’s time for me to move on and
            test out a new idea.
          </p>
          <p>
            I’m not sure if 3 months is the right amount of time, or if $1000 is
            the perfect metric. However, I have too many ideas that I want to
            test out, I need to be ruthless in my decision making. Otherwise,
            I’ll be repeating my mistakes from the past.
          </p>
          <p>
            With this (ruthless) mindset, I’ll be able to easily let go of an
            idea and hopefully find a successful one in half the time.
          </p>
          <h5>constantly growing</h5>
          <p>
            Everything I do is an experiment, including this site. The rules may
            change, but I will still be holding myself accountable and
            constantly be testing new ideas.
          </p>
          <p>Who knows, I may kill this idea in the near future!</p>
        </TextBox>
      </main>
      <Footer />
    </>
  )
}

export default about
