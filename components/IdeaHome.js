import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import MetaButton from './MetaButton'
import Image from 'next/image'

const MainImage = styled.div`
  width: 47.5rem;
  height: 47.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-right: 3.2rem;
  position: relative;
  z-index: -1;

  &:hover {
    cursor: pointer;
    scale: 1.01;
    transition: ${({ theme }) => theme.transition.images};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    width: 30rem;
    height: 30rem;
    margin-right: 1.6rem;
  }
`
const Idea = ({ url, src, released, revenue, description, width, height }) => {
  return (
    <Link href={`/ideas/${url}`}>
      <article>
        <MainImage>
          <MetaButton released={released} revenue={revenue} />
          <Image
            src={`https:${src}`}
            alt={description}
            layout="fill"
            objectFit="cover"
            quality={75}
            priority
            className="border-image"
          />
          <style jsx global>{`
            .border-image {
              border-radius: 1.6rem;
              z-index: -1;
            }
          `}</style>
        </MainImage>
      </article>
    </Link>
  )
}

export default Idea
