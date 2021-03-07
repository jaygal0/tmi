import React from 'react'
import { GridContainer } from '../styles'
import HeadingNormal from './HeadingNormal'
import styled from 'styled-components'
import ButtonMain from './ButtonMain'

const Img = styled.img`
  grid-column: 8 / span 4;
`

const TitleWrapper = styled.div`
  grid-column: 3 / span 4;
`

const HomeIdeaCard = ({ src, main, sub, color }) => {
  return (
    <GridContainer>
      <TitleWrapper>
        <HeadingNormal color={color} main={main} sub={sub}>
          <ButtonMain name="view my ideas" src="/ideas" />
        </HeadingNormal>
      </TitleWrapper>
      <Img src={src} alt={src} />
    </GridContainer>
  )
}

export default HomeIdeaCard
