import React from 'react'
import styled from 'styled-components'

const HeadingMain = styled.h3`
  color: ${({ color }) =>
    (color === 'blue' && '#2493D8') ||
    (color === 'orange' && '#F4721C') ||
    (color === 'pink' && '#ED1276') ||
    (color === 'yellow' && '#FFD708') ||
    'white'};
`

const HeadingNormal = ({ main, sub, color, children }) => {
  return (
    <div>
      <HeadingMain color={color}>{main}</HeadingMain>
      <p>{sub}</p>
      {children}
    </div>
  )
}

export default HeadingNormal
