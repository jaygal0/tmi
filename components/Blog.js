import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Article = styled.article`
  background: ${({ theme }) => theme.color.darkBlue};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 9.6rem 3.2rem;
  width: 100%;
  height: auto;
  margin-bottom: 4.8rem;
`
const H3 = styled.h3`
  color: ${({ theme }) => theme.color.yellow};
`
const Snippet = styled.p`
  color: ${({ theme }) => theme.color.white};
`

const Blog = ({ url, heading, snippet }) => {
  return (
    <>
      <Link href={url}>
        <Article>
          <H3>{heading}</H3>
          <Snippet>{snippet}</Snippet>
        </Article>
      </Link>
    </>
  )
}

export default Blog
