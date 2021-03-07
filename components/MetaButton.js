import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 1.6rem;
  position: absolute;
`
const Border = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.meta};
  text-transform: capitalize;
  padding: 0.4rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.color.white};
  margin-bottom: 0.8rem;
  border-radius: ${({ theme }) => theme.borderRadius};
`

const MetaButton = ({ released, revenue }) => {
  return (
    <>
      <Wrapper>
        <Border>released: {released}</Border>
        <Border>revenue: {revenue}</Border>
      </Wrapper>
    </>
  )
}

export default MetaButton
