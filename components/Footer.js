import Link from 'next/link'
import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.color.blue};
  overflow: hidden;
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
  margin-top: 9.6rem;
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
`
const Logo = styled.img`
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
`

const FooterFormWrapper = styled.div`
  grid-column: 7 / span 5;
`

const FormHeading = styled.h4`
  font-size: ${({ theme }) => theme.font.h4};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  color: ${({ theme }) => theme.color.yellow};
  margin-bottom: 1.6rem;
`

const FormText = styled.p`
  color: white;
  margin-bottom: 1.6rem;
`
const Copyright = styled.div`
  font-size: ${({ theme }) => theme.font.meta};
  margin-top: 4.8rem;
  line-height: ${({ theme }) => theme.lineHeight.meta};
  color: white;
  text-transform: uppercase;
  font-weight: 300;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogoWrapper>
          <Logo src="/logo.svg" alt="logo" />
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
          <FormHeading>follow my journey</FormHeading>
          <FormText>
            Stay up-to-date with what idea I will be releasing next and find out
            if it was successful or not.
          </FormText>
          <input type="text" placeholder="enter email" />
          <ButtonSecondary src="#" name="submit" />
          <Copyright>
            &copy;2021 - Designed &amp; built by Joshua Galinato
          </Copyright>
        </FooterFormWrapper>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
