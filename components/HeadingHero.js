import React from 'react'
import styled from 'styled-components'

import { HeroGridContainer, CardGrid } from '../styles'

const MainHeader = styled.h1`
  width: 40rem;

  &:hover {
    color: ${({ link }) => link && '#F4721C'};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    width: 100rem;
  }
`
const TitleWrapper = styled.div`
  grid-column: 3 / span 5;
`

const ButtonWrapper = styled.div`
  grid-row: 2;
  grid-column: 3 / span 2;
`
const Websitelink = styled.a`
  text-decoration: none;
`

const HeadingHero = ({ main, sub, link, children }) => {
  return (
    <HeroGridContainer>
      <TitleWrapper>
        <Websitelink href={link} target="_blank">
          <MainHeader link={link}>{main}</MainHeader>
        </Websitelink>
        <h2>{sub}</h2>
      </TitleWrapper>
      <ButtonWrapper>{children}</ButtonWrapper>
    </HeroGridContainer>
  )
}

export default HeadingHero
