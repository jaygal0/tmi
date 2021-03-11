import React from 'react'
import { GridContainer } from '../styles'
import HeadingNormal from './HeadingNormal'
import styled from 'styled-components'
import ButtonMain from './ButtonMain'

const IdeaWrapper = styled.div`
  grid-column: 8 / span 4;
`

const TitleWrapper = styled.div`
  grid-column: 3 / span 4;
`

const HomeIdeaCard = ({ main, sub, color, ideas }) => {
  return (
    <GridContainer>
      <TitleWrapper>
        <HeadingNormal color={color} main={main} sub={sub}>
          <ButtonMain name="view my ideas" src="/ideas" />
        </HeadingNormal>
      </TitleWrapper>
      <IdeaWrapper>Hello</IdeaWrapper>
    </GridContainer>
  )
}

export default HomeIdeaCard
