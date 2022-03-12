import styled from "styled-components"

export const Info = styled.div`
    opacity: 1;
    width: 100%;
    height: 5em;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgb(255,255,255, 0.8);
    z-index: 3;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    transition: all 0.5s ease;
    padding-bottom: 1.3em;
`

export const Image = styled.img`
    height: 75%;
    z-index: 2;
    opacity: 0.7;
    transition: all 0.5s ease;
`

export const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
    cursor: pointer;

    &:hover ${Info}{
        opacity: 1;
        background-color: white;
    }

    &:hover ${Image}{
        opacity: 1;
        transform: scale(1.03);
    }
`





export const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.04);
    }
`