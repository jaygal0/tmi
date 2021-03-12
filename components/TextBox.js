import React from 'react'
import styled from 'styled-components'
import { GridContainer } from '../styles'

const Wrapper = styled.div`
  grid-column: 3 / span 8;
  border: 1px ${({ theme }) => theme.color.darkBlue} solid;
  padding: 3.2rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 2 / span 4;
    padding: 3.2rem 1.6rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    grid-column: 1 / -1;
    padding: 3.2rem 1.6rem;
  }
`

const Heading = styled.h3`
  color: ${({ theme }) => theme.color.pink};
`
const TextBox = ({ heading, children }) => {
  return (
    <GridContainer>
      <Wrapper>
        <Heading>{heading}</Heading>
        {children}
      </Wrapper>
    </GridContainer>
  )
}

export default TextBox
