import styled from 'styled-components/macro'

export const Container = styled.div``

export const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

export const ImgContainer = styled.div`
    flex: 1;
`

export const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
export const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
export const Title = styled.h1`
    font-weight: 700;
    font-size: 2.5em;
    letter-spacing: 1.8;
    margin-bottom: 0.2em;
`

export const Price = styled.span`
    font-weight: 100;
    font-size: 33px;
`

export const Desc = styled.p`
    margin: 20px 0px;
    line-height: 1.8;
    color: #535353;
`


export const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
export const Filter = styled.div`
    display: flex;
    align-items: center;
`
export const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    margin-right: 5px;
`
export const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`
export const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
export const FilterSizeOption = styled.option``

export const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3em;
`
export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
`
export const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    transition: all 0.2s ease ;
`

