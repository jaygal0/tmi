import React from 'react'
import HeadingNormal from './HeadingNormal'
import { GridContainer, HomeCard } from '../styles'
import styled from 'styled-components'

const Img = styled.img`
  grid-column: 2 / span 3;
`

const Wrapper = styled.div`
  grid-column: 6 / span 4;
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
