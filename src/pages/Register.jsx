import React from 'react'
import { Agreement, Container, Wrapper, Title, Form, Input, Button } from './Register.style'

const Register = () => {
  return (
    <Container url="https://images.unsplash.com/photo-1557671009-600c3a1973ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80">
        <Wrapper register>
            <Title>CREATE AN ACCOUNT</Title>
            <Form style={{ flexWrap: 'wrap' }}>
                <Input placeholder='name' />
                <Input placeholder='last name' />
                <Input placeholder='username' />
                <Input placeholder='email' />
                <Input placeholder='password' />
                <Input placeholder='confirm password' />
                <Agreement>By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register