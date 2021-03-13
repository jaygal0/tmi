import React from 'react'
import styled from 'styled-components'
import { WebsiteLink } from '../styles'

const Div = styled.div`
  font-size: ${({ theme }) => theme.font.desktop.meta};
  margin-top: 4.8rem;
  line-height: ${({ theme }) => theme.lineHeight.desktop.meta};
  color: white;
  text-transform: uppercase;
  font-weight: 300;
`

const Copyright = () => {
  return (
    <Div>
      &copy;2021 - Designed, built &amp; tested by
      <WebsiteLink href="https://joshuagalinato.com" target="_blank">
        &nbsp;Joshua Galinato
      </WebsiteLink>
    </Div>
  )
}

export default Copyright
