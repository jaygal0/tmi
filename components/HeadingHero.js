import React from 'react'
import styled from 'styled-components'

import { HeroGridContainer, CardGrid } from '../styles'

const MainHeader = styled.h1`
  font-size: ${({ theme }) => theme.font.h1};
  line-height: ${({ theme }) => theme.lineHeight.h1};
  margin-bottom: 1.6rem;
  width: 40rem;
`
const SubHeading = styled.h2`
  font-size: ${({ theme }) => theme.font.h2};
  font-weight: normal;
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
        <SubHeading>{sub}</SubHeading>
      </TitleWrapper>
      <ButtonWrapper>{children}</ButtonWrapper>
    </HeroGridContainer>
  )
}

export default HeadingHero
