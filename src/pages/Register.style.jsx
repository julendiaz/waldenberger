import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(https://images.unsplash.com/photo-1557671009-600c3a1973ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80);
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    padding: 20px;
    width: ${props => props.register ? '40%' : '25%'};
    background-color: white;
`
export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
export const Form = styled.form`
    display: flex;
`
export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: ${props => props.register ? '20px 10px 0 0' : '10px 0'};
    padding: 10px;
`
export const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
export const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

export const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`