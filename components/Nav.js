import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Navbar = styled.nav`
  display: flex;
  margin: 3.2rem 1.6rem;
  justify-content: space-between;
`
const NavContainer = styled.div`
  font-size: ${({ theme }) => theme.font.desktop.p};
  text-decoration: none;
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    flex-direction: column;
    position: fixed;
    font-size: ${({ theme }) => theme.font.phone.h1};
    line-height: 9.6rem;
    z-index: 1;

    &.hideLinks {
      transform: translateX(-200%);
      transition: 0.1s all ease-in;
    }

    &.showLinks {
      transform: translateX(0px);
      transition: 0.2s all ease-in;
    }
  }
`

const List = styled.a`
  text-decoration: none;
  margin: 0 3.2rem;
  color: ${({ theme }) => theme.color.darkBlue};

  &.active {
    color: ${({ theme }) => theme.color.pink};
    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.pink};
    transition: ${({ theme }) => theme.transition.nav};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    margin: 0;
    margin-top: 3.2rem;
    font-weight: 700;
    color: white;

    &.active {
      color: ${({ theme }) => theme.color.yellow};
      font-weight: 700;
    }

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.color.yellow};
      transition: ${({ theme }) => theme.transition.nav};
    }
  }
`
const Img = styled.img`
  cursor: pointer;
`
const Header = styled.header`
  position: relative;
`
const NavBackground = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    height: 100vh;
    width: 100vw;
    background: ${({ theme }) => theme.color.blue};
    position: fixed;

    &.hideSidebar {
      transform: translate(-100%, -10rem);
      transition: 0.1s all ease-in;
    }

    &.showSidebar {
      transform: translate(0, -10rem);
      transition: 0.2s all ease-in;
    }
  }
`
const BurgerIcon = styled.img`
  @media screen and (min-width: ${({ theme }) => theme.breakPoint.desktop}) {
    display: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    display: block;
  }
`

const Nav = () => {
  const router = useRouter()
  const [sidebar, setSidebar] = useState(true)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Header>
      <Navbar>
        <Link href="/">
          <Img src="/logo.svg" alt="tmi logo" />
        </Link>
        <BurgerIcon src="/burger.svg" alt="burger icon" onClick={showSidebar} />
        <NavContainer className={sidebar ? 'hideLinks' : 'showLinks'}>
          <Link href="/">
            <List
              className={router.pathname == '/' ? 'active' : ''}
              onClick={showSidebar}
            >
              home
            </List>
          </Link>
          <Link href="/about">
            <List
              className={router.pathname == '/about' ? 'active' : ''}
              onClick={showSidebar}
            >
              about
            </List>
          </Link>
          <Link href="/ideas">
            <List
              className={router.pathname == '/ideas' ? 'active' : ''}
              onClick={showSidebar}
            >
              ideas
            </List>
          </Link>
          <Link href="/blog">
            <List
              className={router.pathname == '/blog' ? 'active' : ''}
              onClick={showSidebar}
            >
              blog
            </List>
          </Link>
        </NavContainer>
      </Navbar>
      <NavBackground className={sidebar ? 'hideSidebar' : 'showSidebar'} />
    </Header>
  )
}

export default Nav
