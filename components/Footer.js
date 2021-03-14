import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import Copyright from './Copyright'
import Image from 'next/Image'

const FooterContainer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.color.blue};
  overflow: hidden;
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
  margin-top: 9.6rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    margin-top: 4.8rem;
  }
`

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-column-gap: 3.2rem;
  margin: 4.8rem 1.6rem;
`

const FooterLogoWrapper = styled.div`
  grid-column: 2 / span 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    display: none;
  }
`
const LogoWrapper = styled.div`
  width: 25%;
`

const NavWrapper = styled.div`
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
`

const List = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.yellow};
    transition: ${({ theme }) => theme.transition.link};
  }
`
const FooterFormWrapper = styled.div`
  grid-column: 7 / span 5;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 3 / span 8;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    grid-column: 1 / -1;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogoWrapper>
          <LogoWrapper>
            <Image
              src="/logo-white.svg"
              alt="tmi logo in white"
              width={118.6}
              height={32.15}
              quality={100}
            />
          </LogoWrapper>
          <NavWrapper>
            <Link href="/">
              <List>home</List>
            </Link>
            <Link href="/about">
              <List>about</List>
            </Link>
            <Link href="/ideas">
              <List>ideas</List>
            </Link>
            <Link href="/blog">
              <List>blog</List>
            </Link>
          </NavWrapper>
        </FooterLogoWrapper>
        <FooterFormWrapper>
          <Form />
          <Copyright />
        </FooterFormWrapper>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
