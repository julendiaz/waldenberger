import React from 'react'
import styled from 'styled-components'
import { Container, Wrapper, Title, Form, Input, Button, Link } from './Register.style'

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form style={{ flexDirection: 'column' }}>
                <Input placeholder='username' />
                <Input placeholder='password' />
                <Button>LOG IN</Button>
                <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login