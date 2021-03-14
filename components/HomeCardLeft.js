import React from 'react'
import styled from 'styled-components'
import { GridContainer, HomeCard } from '../styles'
import HeadingNormal from './HeadingNormal'
import Image from 'next/Image'

const ImageWrapper = styled.div`
  grid-column: 6 / span 4;
  justify-self: center;
  width: 70%;
  height: 70%;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    display: none;
  }
`

const Wrapper = styled.div`
  grid-column: 2 / span 4;
`

const HomeCardLeft = ({ src, main, sub, color }) => {
  return (
    <GridContainer>
      <HomeCard>
        <Wrapper>
          <HeadingNormal color={color} main={main} sub={sub} />
        </Wrapper>
        <ImageWrapper>
          <Image src={src} alt={src} layout="fill" />
        </ImageWrapper>
      </HomeCard>
    </GridContainer>
  )
}

export default HomeCardLeft
