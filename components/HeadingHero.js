import React from 'react'
import styled from 'styled-components'

import { HeroGridContainer, CardGrid } from '../styles'

const MainHeader = styled.h1`
  width: 40rem;
`
const TitleWrapper = styled.div`
  grid-column: 3 / span 5;
`

const ButtonWrapper = styled.div`
  grid-row: 2;
  grid-column: 3 / span 2;
`

const HeadingHero = ({ main, sub, children }) => {
  return (
    <HeroGridContainer>
      <TitleWrapper>
        <MainHeader>{main}</MainHeader>
        <h2>{sub}</h2>
      </TitleWrapper>
      <ButtonWrapper>{children}</ButtonWrapper>
    </HeroGridContainer>
  )
}

export default HeadingHero
