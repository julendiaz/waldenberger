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
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 6px;
    width: 15em;
`

export const Input = styled.input`
    border: none;
    background-color: transparent;
    outline: none;
    width: 16em;
`

export const Center = styled.div`
    flex: 1;
    text-align: center;
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