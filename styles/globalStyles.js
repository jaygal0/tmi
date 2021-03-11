import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  font-family: poppins, arial, sans-serif;
  font-size: 62.5%;
  letter-spacing: 0.05rem;
}

h1 {
  font-size: ${({ theme }) => theme.font.desktop.h1};
  line-height: ${({ theme }) => theme.lineHeight.desktop.h1};
  margin-bottom: ${({ theme }) => theme.margin.desktop.bottom};
  color: ${({ theme }) => theme.color.darkBlue};
  text-transform: lowercase;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
  font-size: ${({ theme }) => theme.font.phone.h1};
  line-height: ${({ theme }) => theme.lineHeight.phone.h1};
  }
}
 
h2 {
  font-size: ${({ theme }) => theme.font.desktop.h2};
  font-weight: normal;
  margin-bottom: ${({ theme }) => theme.margin.desktop.bottom};

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
  font-size: ${({ theme }) => theme.font.phone.h2};
  line-height: ${({ theme }) => theme.lineHeight.phone.h2};
  }
}

h3 {
    font-size: ${({ theme }) => theme.font.desktop.h3};
    line-height: ${({ theme }) => theme.lineHeight.desktop.h3};
    margin-bottom: ${({ theme }) => theme.margin.desktop.bottom};
    text-transform: lowercase;
}

h4 {
  font-size: ${({ theme }) => theme.font.desktop.h4};
  line-height: ${({ theme }) => theme.lineHeight.desktop.h4};
  margin-bottom: ${({ theme }) => theme.margin.desktop.bottom};
}

h5 {
    font-size: ${({ theme }) => theme.font.desktop.h5};
    line-height: ${({ theme }) => theme.lineHeight.desktop.h5};
    font-weight: bold;
    color: ${({ theme }) => theme.color.darkBlue};
    text-transform: capitalize;
    margin-bottom: ${({ theme }) => theme.margin.desktop.bottom};
}

p {
  font-size: ${({ theme }) => theme.font.desktop.p};
  line-height: ${({ theme }) => theme.lineHeight.desktop.p};
  margin-bottom: ${({ theme }) => theme.margin.desktop.bottom};
}

`

export default GlobalStyle
