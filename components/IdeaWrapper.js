import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-column: 3 / span 8;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
  }
`

const IdeaWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default IdeaWrapper
