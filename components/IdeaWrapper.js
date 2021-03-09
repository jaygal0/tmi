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

const IdeaWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default IdeaWrapper
