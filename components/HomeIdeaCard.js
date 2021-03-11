import React from 'react'
import { GridContainer } from '../styles'
import HeadingNormal from './HeadingNormal'
import styled from 'styled-components'
import ButtonMain from './ButtonMain'
import IdeaHome from './IdeaHome'

const IdeaWrapper = styled.div`
  grid-column: 7 / span 4;
  display: flex;
  align-items: center;
  height: 110%;
  width: 120%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`

const TitleWrapper = styled.div`
  grid-column: 3 / span 4;
`

const HomeIdeaCard = ({ main, sub, color, idea }) => {
  return (
    <GridContainer>
      <TitleWrapper>
        <HeadingNormal color={color} main={main} sub={sub}>
          <ButtonMain name="view my ideas" src="/ideas" />
        </HeadingNormal>
      </TitleWrapper>
      <IdeaWrapper>
        {idea.map(({ fields, sys }) => (
          <IdeaHome
            key={sys.id}
            url={fields.slug.toLowerCase()}
            src={fields.image.fields.file.url}
            width={fields.image.fields.file.details.image.width}
            height={fields.image.fields.file.details.image.height}
            released={fields.released}
            revenue={fields.revenue}
            description={fields.image.fields.description}
          />
        ))}
      </IdeaWrapper>
    </GridContainer>
  )
}

export default HomeIdeaCard
