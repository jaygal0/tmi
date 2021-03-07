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
  background: orangered;
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
