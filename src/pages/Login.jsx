import React from 'react'
import styled from 'styled-components'
import { LogoWaldenberger } from '../components/Navbar/Navbar.style'
import { ButtonAddToCard } from '../components/Product/Product.style'
import { Container, Wrapper, Title, Form, Input, Link, FormFooter } from './Register.style'

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form style={{ flexDirection: 'column' }}>
                <Input placeholder='Username' />
                <Input placeholder='Password' />
                <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
                <FormFooter>
                  <ButtonAddToCard big>Log In</ButtonAddToCard>
                  <LogoWaldenberger src='https://user-images.githubusercontent.com/66780327/158016993-322d0217-f30e-4448-8a24-83a54ea0a59f.svg' />
                </FormFooter>
                
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login