import styled from 'styled-components/macro'
import { mobile } from '../../responsive';

export const Container = styled.div`
    height: 70px;
    ${mobile({ height: "50px"})}
`

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px"})}
`

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    ${mobile({ flex: "0"})}
`;

export const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none"})}
`

export const SearchContainer = styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 6px;
    width: 15em;
    ${mobile({ display: "none"})}
`

export const Input = styled.input`
    border: none;
    background-color: transparent;
    outline: none;
    width: 16em;
    ${mobile({ display: "none"})}
`

export const Center = styled.div`
    flex: 1;
    text-align: center;
    ${mobile({ textAlign: "left", paddingLeft: "1.3em"})}
`;


export const LogoWaldenberger = styled.img`
    width: 4em;
    height: auto;
    opacity: 0.9;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        opacity: 1;
    }

    ${mobile({ width: "3em"})}
`

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "center", flex: "2"})}
`;

export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    transition: all 0.5s ease;
    &:hover {
        opacity: 0.6;
    }
    ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`