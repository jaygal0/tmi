import React from 'react'
import HeadingNormal from './HeadingNormal'
import { GridContainer, HomeCard } from '../styles'
import styled from 'styled-components'

const Img = styled.img`
  grid-column: 2 / span 4;
  justify-self: center;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 70%;
  }

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
        <Img src={src} alt={src} />
        <Wrapper>
          <HeadingNormal color={color} main={main} sub={sub} />
        </Wrapper>
      </HomeCard>
    </GridContainer>
  )
}

export default HomeCardRight
