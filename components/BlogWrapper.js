import React from 'react'
import styled from 'styled-components'
import Blog from './Blog'

const Wrapper = styled.div`
  grid-column: 3 / span 8;

  &:hover {
    cursor: pointer;
  }
`

const BlogWrapper = () => {
  return (
    <Wrapper>
      <Blog
        url="/blog/detail"
        heading="Nunc integer interdum nullam pellentesque sed."
        snippet="Consectetur viverra consequat, sit habitant nulla. Et urna, ut duis tincidunt pulvinar vitae."
      />
      <Blog
        url="/"
        heading="Can you believe that this is working?"
        snippet="Consectetur viverra consequat, sit habitant nulla. Et urna, ut duis tincidunt pulvinar vitae."
      />
    </Wrapper>
  )
}

export default BlogWrapper
