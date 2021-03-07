import React from 'react'
import styled from 'styled-components'
import Idea from './Idea'

const Wrapper = styled.div`
  grid-column: 3 / span 8;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`

const IdeaWrapper = () => {
  return (
    <Wrapper>
      <Idea
        url="/about"
        src="/crouchinBanner.png"
        revenue="$0"
        released="10/20/89"
      />
      <Idea
        url="/about"
        src="/crouchinBanner.png"
        revenue="$0"
        released="10/20/89"
      />
    </Wrapper>
  )
}

export default IdeaWrapper
