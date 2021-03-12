import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-column: 3 / span 8;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 2 / span 4;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    grid-column: 1 / -1;
  }
`

const BlogWrapper = ({ children }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  )
}

export default BlogWrapper
