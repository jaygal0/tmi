import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  font-family: 'Poppins', arial, sans-serif;
  font-size: 62.5%;
  letter-spacing: 0.05rem;
}

main {

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
    overflow: hidden;
  }
}

h1 {
  font-size: ${({ theme }) => theme.font.desktop.h1};
  line-height: ${({ theme }) => theme.lineHeight.desktop.h1};
  margin-bottom: ${({ theme }) => theme.margin.desktop.bottom};
  color: ${({ theme }) => theme.color.darkBlue};
  text-transform: lowercase;
  font-weight: 700;

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.phone}) {
  font-size: ${({ theme }) => theme.font.phone.h1};
  line-height: ${({ theme }) => theme.lineHeight.phone.h1};
  }
}
 
h2 {
  font-size: ${({ theme }) => theme.font.desktop.h2};
  font-weight: 400;
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
    font-weight: 700;
}

h4 {
  font-size: ${({ theme }) => theme.font.desktop.h4};
  line-height: ${({ theme }) => theme.lineHeight.desktop.h4};
  margin-bottom: ${({ theme }) => theme.margin.desktop.bottom};
  font-weight: 700;
}

h5 {
    font-size: ${({ theme }) => theme.font.desktop.h5};
    line-height: ${({ theme }) => theme.lineHeight.desktop.h5};
    font-weight: 700;
    color: ${({ theme }) => theme.color.darkBlue};
    text-transform: capitalize;
    margin-bottom: ${({ theme }) => theme.margin.desktop.bottom};
}

p {
  font-size: ${({ theme }) => theme.font.desktop.p};
  line-height: ${({ theme }) => theme.lineHeight.desktop.p};
  margin-bottom: ${({ theme }) => theme.margin.desktop.bottom};
}

a {
  color: ${({ theme }) => theme.color.pink};

  &:hover {
  color: ${({ theme }) => theme.color.blue};
  }
}

input::-webkit-input-placeholder {
  color: white;
  opacity: .7;
}
`

export default GlobalStyle
