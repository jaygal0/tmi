import React from 'react'
import styled from 'styled-components'
import { GridContainer, H3 } from '../styles'

const Wrapper = styled.div`
  grid-column: 3 / span 8;
  border: 1px ${({ theme }) => theme.color.darkBlue} solid;
  padding: 3.2rem;
  border-radius: 1.6rem;
`

const Heading = styled.h3`
  font-size: ${({ theme }) => theme.font.h3};
  line-height: ${({ theme }) => theme.lineHeight.h3};
  color: ${({ theme }) => theme.color.pink};
`
const TextBox = () => {
  return (
    <GridContainer>
      <Wrapper>
        <Heading>hello reader</Heading>
        <p>
          I have an entrepreneurial spirit with quite a few ideas in my head.
          This mindset led me down a path of building a couple of businesses
          throughout the years. Unfortunately, none of them worked out the way I
          had imagined.
        </p>
        <p>In retrospect, I realised that I kept on making the same mistake.</p>
        <p>
          Instead of moving on from a failing idea, I would try my best to make
          it work even though the writing was on the wall.
        </p>
        <p>
          Not only would this take up all of my energy, but it was eating into
          my time as well.
        </p>
      </Wrapper>
    </GridContainer>
  )
}

export default TextBox
