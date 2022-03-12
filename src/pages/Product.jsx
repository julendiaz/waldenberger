import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import { ButtonAddToCard } from '../components/Product/Product.style'
const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 700;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`



const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.pinimg.com/originals/d8/cc/c6/d8ccc6e04706d7501ccf2c492e93a963.png" />
            </ImgContainer>
            <InfoContainer>
                <Title>White T-Shirt</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus lorem eget nibh varius, non fermentum lacus dictum. Aliquam vitae est eu libero tincidunt consequat. Donec a dolor lobortis urna faucibus luctus.</Desc>
                <Price>23€</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"></FilterColor>
                        <FilterColor color="darkblue"></FilterColor>
                        <FilterColor color="gray"></FilterColor>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <ButtonAddToCard>Add to cart</ButtonAddToCard>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product;
