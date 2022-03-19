import styled from 'styled-components/macro'
import { mobile } from '../responsive'

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
    padding: 3em;
    width: ${props => props.register ? '40%' : '25%'};
    background-color: white;
    border-radius: 1em;

    ${mobile({ width: "70%"})}
`

export const FormFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5em;
`

export const Title = styled.h1`
    font-size: 1.8em;
    font-weight: 700;
    margin-bottom: 0.5em;
`
export const Form = styled.form`
    display: flex;
`
export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: ${props => props.register ? '10px 10px 0 0' : '10px 0'};
    padding: 15px;
    border: none;
    background-color: #F1F1F1;
    border-radius: 0.7em;
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