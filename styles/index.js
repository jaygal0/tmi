import styled, { keyframes } from 'styled-components'

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 3.2rem;
  margin: 0 1.6rem 4.8rem 1.6rem;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, min-content);
    grid-column-gap: 3.2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, min-content);
    grid-column-gap: 1.6rem;
    margin-bottom: 4.8rem;
  }
`
export const HeroGridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, min-content);
  grid-column-gap: 3.2rem;
  margin: 9.6rem 1.6rem;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, min-content);
    grid-column-gap: 3.2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, min-content);
    grid-column-gap: 1.6rem;
  }
`
export const HomeCard = styled.div`
  background: ${({ theme }) => theme.color.darkBlue};
  border-radius: 1.6rem;
  display: grid;
  grid-column: 2 / span 10;
  grid-template-columns: repeat(10, 1fr);
  grid-column-gap: 3.2rem;
  margin-bottom: 4.8rem;
  padding: 9.6rem 0;
  color: white;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    grid-column: 1 / -1;
    display: grid;
    padding: 3.2rem 1.6rem;
    margin-bottom: 0rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    grid-column: 1 / -1;
    display: block;
    padding: 3.2rem 1.6rem;
    margin-bottom: 0rem;
  }
`
export const WebsiteLink = styled.a`
  color: white;

  &:hover {
    color: ${({ theme }) => theme.color.yellow};
    transition: ${({ theme }) => theme.transition.link};
  }
`
export const btnAnimate = keyframes`
0% {
 background: #F4721C;
}
100% {
 background: #ED1276;
}
`
