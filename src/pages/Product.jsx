import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import { ButtonAddToCard } from '../components/Product/Product.style'
import { FilterContainer, Container, Wrapper, ImgContainer, InfoContainer, Image, Title, Desc, Price, Filter, FilterColor, FilterTitle, FilterSize, FilterSizeOption, AddContainer, AmountContainer, Amount } from './Product.style'

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
                <Price>23€</Price>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus lorem eget nibh varius, non fermentum lacus dictum. Aliquam vitae est eu libero tincidunt consequat. Donec a dolor lobortis urna faucibus luctus.
                </Desc>
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
                    <ButtonAddToCard big>Add to cart</ButtonAddToCard>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product;
