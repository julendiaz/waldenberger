import React from 'react'
import { Agreement, Container, Wrapper, Title, Form, Input, FormFooter } from './Register.style'
import { ButtonAddToCard } from '../components/Product/Product.style'
import { LogoWaldenberger } from '../components/Navbar/Navbar.style'

const Register = () => {
  return (
    <Container url="https://images.unsplash.com/photo-1557671009-600c3a1973ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80">
        <Wrapper register>
                <Title>Create an Account</Title>
            <Form style={{ flexWrap: 'wrap' }}>
                <Input register placeholder='Name' />
                <Input register placeholder='Last name' />
                <Input register placeholder='Username' />
                <Input register placeholder='Email' />
                <Input register placeholder='Password' />
                <Input register placeholder='Confirm password' />
                <Agreement>By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <FormFooter>
                <ButtonAddToCard big>Create</ButtonAddToCard>
                <LogoWaldenberger src='https://user-images.githubusercontent.com/66780327/158016993-322d0217-f30e-4448-8a24-83a54ea0a59f.svg'/>
                </FormFooter>
                
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register