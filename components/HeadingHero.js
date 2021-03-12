import React from 'react'
import styled from 'styled-components'

import { HeroGridContainer } from '../styles'

const MainHeader = styled.h1`
  width: 40rem;

  &:hover {
    color: ${({ link }) => link && '#F4721C'};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    width: min-content;
  }
`
const SubHeading = styled.h2`
  text-transform: capitalize;
`
const TitleWrapper = styled.div`
  grid-column: 3 / span 5;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 2 / span 4;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    grid-column: 1 / -1;
  }
`

const ButtonWrapper = styled.div`
  grid-row: 2;
  grid-column: 3 / span 2;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 2 / span 4;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    grid-column: 1 / -1;
  }
`
const Websitelink = styled.a`
  text-decoration: none;
`
const Published = styled.p`
  font-size: ${({ theme }) => theme.font.meta};
  font-style: italic;
`

const HeadingHero = ({ main, sub, link, published, children }) => {
  return (
    <HeroGridContainer>
      <TitleWrapper>
        <Websitelink href={link} target="_blank">
          <MainHeader link={link}>{main}</MainHeader>
        </Websitelink>
        <SubHeading>{sub}</SubHeading>
        {!published ? '' : <Published>{`Published: ${published}`}</Published>}
      </TitleWrapper>
      <ButtonWrapper>{children}</ButtonWrapper>
    </HeroGridContainer>
  )
}

export default HeadingHero
