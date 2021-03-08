import React from 'react'
import styled from 'styled-components'

const Border = styled.div`
  color: ${({ theme }) => theme.color.darkBlue};
  font-size: ${({ theme }) => theme.font.meta};
  text-transform: capitalize;
  padding: 0.4rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.color.darkBlue};
  margin-bottom: 0.8rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: max-content;
`

const MetaButton = ({ released, revenue }) => {
  const check = revenue >= 1000 ? 'passed' : 'failed'
  return (
    <>
      <Border>released: {released}</Border>
      <Border>revenue: ${revenue}</Border>
      <Border>{check}</Border>
    </>
  )
}

export default MetaButton
