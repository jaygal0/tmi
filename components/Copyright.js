import React from 'react'
import styled from 'styled-components'
import { WebsiteLink } from '../styles'

const Div = styled.div`
  font-size: ${({ theme }) => theme.font.meta};
  margin-top: 4.8rem;
  line-height: ${({ theme }) => theme.lineHeight.meta};
  color: white;
  text-transform: uppercase;
  font-weight: 300;
`

const Copyright = () => {
  return (
    <Div>
      &copy;2021 - Designed &amp; built by
      <WebsiteLink href="https://joshuagalinato.com">
        &nbsp;Joshua Galinato
      </WebsiteLink>
    </Div>
  )
}

export default Copyright
