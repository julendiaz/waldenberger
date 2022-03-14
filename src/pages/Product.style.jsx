import styled from 'styled-components/macro'

export const Container = styled.div``

export const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

export const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const Image = styled.img`
    width: 90%;
    height: 70vh;
    object-fit: contain;
    background-color: #E7E7E7;
`
export const OtherImagesContainer = styled.div`
    display: inline-flex;
    flex-wrap: nowrap;
    gap: 0.5em;
    justify-content: space-between;
    margin-top: 3em;
`

export const OtherImage = styled.img`
    background-color: #E7E7E7;
    width: 6em;
    height: 6em;
    padding: 0.4em;
    /* border: 1px solid #DADADA; */
    cursor: pointer;
    opacity: 1;
    transition: all 0.3s ease;
    filter: saturate(50%);

    &:hover {
        background-color: #EBEBEB;
        opacity: 0.9;
        filter: saturate(1);
    }
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
    border: 2px solid #C1C1C1;
    padding: 1em 1.2em;
    margin-right: 0.5em;

    &:hover {
        border: 2px solid #868686;
    }
`
export const FilterTitle = styled.span`
    font-size: 18px;
    font-weight: 300;
    margin-right: 5px;
    color: #868686;
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
    background-color: transparent;
    border: none;
    cursor: pointer;
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

