import Link from 'next/link'
import React from 'react'

const ButtonSecondary = ({ src, name }) => {
  return (
    <>
      <Link href={src}>{name}</Link>
    </>
  )
}

export default ButtonSecondary
