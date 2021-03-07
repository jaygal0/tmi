import React from 'react'
import styled from 'styled-components'

const Heading = styled.h4`
  color: ${({ theme }) => theme.color.yellow};
`

const Text = styled.p`
  color: ${({ theme }) => theme.color.white};
`

const Input = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.yellow};
  width: 100%;
  color: white;
  font-size: ${({ theme }) => theme.font.p};
  padding: 0.8rem;
  margin-bottom: 1.6rem;
  :focus {
    border: none;
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.yellow};
  }

  ::placeholder {
    text-transform: uppercase;
  }
`

const Button = styled.input`
  background: ${({ theme }) => theme.color.yellow};
  color: ${({ theme }) => theme.color.darkBlue};
  font-size: ${({ theme }) => theme.font.meta};
  padding: 0.8rem 1.6rem;
  border-radius: 1.6rem;
  outline: none;
  border: none;
  text-transform: uppercase;
`

const Form = () => {
  return (
    <>
      <Heading>follow my journey</Heading>
      <Text>
        Stay up-to-date with what idea I will be releasing next and find out if
        was successful or not.
      </Text>
      <form>
        <label htmlFor=""></label>
        <Input type="text" placeholder="enter email" />
        <br />
        <Button type="button" value="submit" />
      </form>
    </>
  )
}

export default Form
