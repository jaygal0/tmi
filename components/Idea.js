import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import MetaButton from './MetaButton'

const Article = styled.article`
  position: relative;
`
const MainImage = styled.img`
  width: 47.5rem;
  height: 47.5rem;
  object-fit: cover;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 3.2rem;
`

const Idea = ({ url, src, released, revenue }) => {
  return (
    <Link href={url}>
      <Article>
        <MetaButton released={released} revenue={revenue} />
        <MainImage src={src} alt="" />
      </Article>
    </Link>
  )
}

export default Idea
