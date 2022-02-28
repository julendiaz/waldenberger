import styled from 'styled-components'

export const Container = styled.div`
    height: 70px;
`

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

export const SearchContainer = styled.div`
    background-color: #EEEEEE;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 6px;
`

export const Input = styled.input`
    border: none;
    background-color: transparent;
    outline: none;
`

export const Center = styled.div`
    flex: 1;
    text-align: center;
`;

export const Logo = styled.h1`
    font-weight: bold;
`

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    transition: all 0.5s ease;
    &:hover {
        opacity: 0.6;
    }
`