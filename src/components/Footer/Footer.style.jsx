import styled from "styled-components"
import { mobile } from "../../responsive"

export const Container = styled.div`
    display: flex;
    height: 25rem;
    padding: 30px;
    ${mobile({ flexDirection: "column", marginTop: "5em"})}
`
export const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px; 
`

export const Logo = styled.h1``
export const Description = styled.p`
    margin: 20px 0px;
`
export const SocialContainer = styled.div`
    display: flex;
`
export const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

export const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none"})}
`

export const Title = styled.h3`
    margin-bottom: 30px;
`

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

export const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
export const Right = styled.div`
    flex: 1;
    padding: 20px;

    ${mobile({ marginTop: "2em"})}
`

export const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

export const Payment = styled.img`
    width: 80%;
`
