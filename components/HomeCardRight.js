import React from 'react'
import HeadingNormal from './HeadingNormal'
import { GridContainer, HomeCard } from '../styles'
import styled from 'styled-components'
import Image from 'next/Image'

const ImgWrapper = styled.div`
  grid-column: 2 / span 4;
  justify-self: center;
  width: 90%;
  height: 90%;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    display: none;
  }
`

const Wrapper = styled.div`
  grid-column: 6 / span 4;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    grid-column: 1 / -1;
  }
`

const HomeCardRight = ({ src, main, sub, color }) => {
  return (
    <GridContainer>
      <HomeCard>
        <ImgWrapper>
          <Image src={src} alt={src} layout="fill" />
        </ImgWrapper>
        <Wrapper>
          <HeadingNormal color={color} main={main} sub={sub} />
        </Wrapper>
      </HomeCard>
    </GridContainer>
  )
}

export default HomeCardRight
