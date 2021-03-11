import Link from 'next/link'
import React from 'react'
import styled, { keyframes } from 'styled-components'

const btnAnimate = keyframes`
0% {
 background: #F4721C;
}
60% {
 background: #ED1276;
}
100% {
 background: #ED1276;
}
`
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

  &:hover {
    animation: 3s ${btnAnimate} alternate ease-in-out infinite;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    width: 100%;
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
