import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Navbar = styled.nav`
  display: flex;
  margin: 3.2rem 1.6rem;
  justify-content: space-between;
`

const NavContainer = styled.div`
  font-size: 1.6rem;
  text-decoration: none;
  display: flex;
`

const List = styled.a`
  text-decoration: none;
  margin: 0 3.2rem;

  &.active {
    color: ${({ theme }) => theme.color.pink};
    font-weight: bold;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.pink};
    transition: ${({ theme }) => theme.transition.nav};
  }
`
const Img = styled.img`
  cursor: pointer;
`

const Nav = () => {
  const router = useRouter()

  return (
    <Navbar>
      <Link href="/">
        <Img src="/logo.svg" alt="logo" />
      </Link>
      <NavContainer>
        <Link href="/">
          <List className={router.pathname == '/' ? 'active' : ''}>home</List>
        </Link>
        <Link href="/about">
          <List className={router.pathname == '/about' ? 'active' : ''}>
            about
          </List>
        </Link>
        <Link href="/ideas">
          <List className={router.pathname == '/ideas' ? 'active' : ''}>
            ideas
          </List>
        </Link>
        <Link href="/blog">
          <List className={router.pathname == '/blog' ? 'active' : ''}>
            blog
          </List>
        </Link>
      </NavContainer>
    </Navbar>
  )
}

export default Nav
