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

  &:hover {
    cursor: pointer;
    scale: 1.01;
    transition: ${({ theme }) => theme.transition.images};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    padding: 3.2rem 1.6rem;
  }
`
const H3 = styled.h3`
  color: ${({ theme }) => theme.color.yellow};
`
const Snippet = styled.p`
  color: ${({ theme }) => theme.color.white};
`
const ReadMore = styled.a`
  font-size: ${({ theme }) => theme.font.desktop.meta};
  color: ${({ theme }) => theme.color.yellow};
  text-transform: uppercase;
`

const Blog = ({ url, heading, snippet }) => {
  return (
    <>
      <Link href={`/blog/${url}`}>
        <Article>
          <H3>{heading}</H3>
          <Snippet>{snippet}</Snippet>
          <ReadMore href={`/blog/${url}`}>read more &gt;</ReadMore>
        </Article>
      </Link>
    </>
  )
}

export default Blog
