import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Border = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.desktop.meta};
  text-transform: capitalize;
  padding: 0.4rem 1.2rem;
  margin-bottom: 0.8rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: max-content;
  background: ${({ theme }) => theme.color.blue};

  &.failed {
    background: ${({ theme }) => theme.color.pink};
  }
`

const MetaButton = ({ released, revenue }) => {
  let date = moment(released)
  let dateComponent = date.locale('en-gb').format('L')
  const check = revenue >= 1000 ? 'passed' : 'failed'

  return (
    <>
      <Border>released: {dateComponent}</Border>
      <Border>revenue: £{revenue}</Border>
      <Border className={check === 'failed' ? 'failed' : ''}>{check}</Border>
    </>
  )
}

export default MetaButton
