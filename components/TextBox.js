import React from 'react'
import styled from 'styled-components'
import { GridContainer } from '../styles'

const Wrapper = styled.div`
  grid-column: 3 / span 8;
  border: 1px ${({ theme }) => theme.color.darkBlue} solid;
  padding: 3.2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
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
