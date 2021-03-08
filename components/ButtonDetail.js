import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0.8rem 2.4rem;
  border-radius: 2.4rem;
  margin-top: 4rem;
  margin-bottom: 3.2rem;
  outline: none;
  border: none;
  text-transform: uppercase;
  background: rgb(244, 114, 28);
  background: linear-gradient(
    239deg,
    rgba(244, 114, 28, 1) 0%,
    rgba(237, 18, 118, 1) 100%
  );
  color: white;
  cursor: pointer;
`

const ButtonDetail = ({ name, src }) => {
  return (
    <>
      <a href={src} target="_blank">
        <Button>{name}</Button>
      </a>
    </>
  )
}

export default ButtonDetail
