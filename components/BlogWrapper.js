import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-column: 3 / span 8;
`

const BlogWrapper = ({ children }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  )
}

export default BlogWrapper
