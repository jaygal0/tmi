import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { btnAnimate } from '../styles'

const Button = styled.button`
  margin-top: 4rem;
  font-size: 1.6rem;
  font-weight: 700;
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

  &:hover {
    animation: 3s ${btnAnimate} alternate ease-in-out infinite;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 100%;
    margin-top: 3.2rem;
  }
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
