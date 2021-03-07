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
  font-size: ${({ theme }) => theme.font.h1};
  line-height: ${({ theme }) => theme.lineHeight.h1};
  margin-bottom: ${({ theme }) => theme.margin.bottom};
  color: ${({ theme }) => theme.color.darkBlue};
}
 
h2 {
  font-size: ${({ theme }) => theme.font.h2};
  font-weight: normal;
  margin-bottom: ${({ theme }) => theme.margin.bottom};
}

h3 {
    font-size: ${({ theme }) => theme.font.h3};
    line-height: ${({ theme }) => theme.lineHeight.h3};
    margin-bottom: ${({ theme }) => theme.margin.bottom};
}

h4 {
  font-size: ${({ theme }) => theme.font.h4};
  line-height: ${({ theme }) => theme.lineHeight.h4};
  margin-bottom: ${({ theme }) => theme.margin.bottom};
}

h5 {
    font-size: ${({ theme }) => theme.font.h5};
    line-height: ${({ theme }) => theme.lineHeight.h5};
    font-weight: bold;
    color: ${({ theme }) => theme.color.darkBlue};
    text-transform: capitalize;
    margin-bottom: ${({ theme }) => theme.margin.bottom};
}

p {
  font-size: ${({ theme }) => theme.font.p};
  line-height: ${({ theme }) => theme.lineHeight.p};
  margin-bottom: ${({ theme }) => theme.margin.bottom};
}

`

export default GlobalStyle
