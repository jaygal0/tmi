import React from 'react'
import styled from 'styled-components'
import { GridContainer, HomeCard } from '../styles'
import HeadingNormal from './HeadingNormal'

const Img = styled.img`
  grid-column: 6 / span 4;
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
        <Img src={src} alt={src} />
      </HomeCard>
    </GridContainer>
  )
}

export default HomeCardLeft
