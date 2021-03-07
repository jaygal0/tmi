import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  margin-top: 4rem;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 0.8rem 2.4rem;
  border-radius: 2.4rem;
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

const ButtonMain = ({ name, src }) => {
  return (
    <>
      <Link href={src}>
        <Button>{name}</Button>
      </Link>
    </>
  )
}

export default ButtonMain
