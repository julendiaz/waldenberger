import { css } from 'styled-components'
import styled from 'styled-components/macro'
import { mobile } from '../responsive'

export const Container = styled.div``

export const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column"})}
`

export const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    ${mobile({ marginTop: "2em"})}
`

export const Image = styled.img`
    width: 90%;
    height: 70vh;
    object-fit: contain;
    background-color: #E7E7E7;
    ${mobile({ height: "40%"})}
`
export const OtherImagesContainer = styled.div`
    display: inline-flex;
    flex-wrap: nowrap;
    gap: 0.5em;
    justify-content: space-between;
    margin-top: 3em;

    ${mobile({ marginBottom: "2em"})}
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

    ${mobile({ fontSize: "2em"})}
`

export const RatingContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.4em;
`

export const StarsContainer = styled.div`
    margin-right: 0.6em;
    opacity: 0.7;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`

export const NumberOfReviews = styled.p`
    color: #ACACAC;
    font-size: 0.9em;
    ${mobile({ display: "none"})}
`

export const Price = styled.span`
    font-weight: 700;
    font-size: 25px;
    color: #DB4843;
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
    flex-direction: column;
    justify-content: space-between;

    ${mobile({ width: "100%"})}
`

const FilterDefault = css`
    display: flex;
    align-items: center;
    margin-right: 0.5em;
    margin-top: 0.8em;
`
export const Filter = styled.div`
    ${FilterDefault}
`

export const FilterSize = styled.div`
    ${FilterDefault}
    ${mobile({ width: "100%", flexWrap: "wrap"})}

`


export const FilterTitle = styled.span`
    font-size: 14px;
    font-weight: 700;
    margin-right: 5px;
    color: #b0b0b0;
`
export const FilterColor = styled.div`
    width: 23px;
    height: 23px;
    border-radius: 50%;
    border: ${ props => props.selected ? "3px solid #DB4843" : "none"};
    background-color: ${props => props.color};
    margin-right: 16px;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`

export const FilterSizeOption = styled.button`
    width: 3em;
    height: 3em;
    padding: 2em;
    border: 1.8px solid black;
    background-color: transparent;
    color: black;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 18px;
    transition: all 0.3s ease;

    &:hover {
        background-color: black;
        color: white;
    }

    ${mobile({ marginBottom: "1.5em"})}
`

export const AddContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 3em;

    ${mobile({ width: "100%"})}
`
export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-right: 0.8em;
`
export const Amount = styled.input`
    border: none;
    width: 3em;
    height: 3em;
    font-size: 1.2em;
    padding-left: 1em;
    background-color: #dddddd;
`

