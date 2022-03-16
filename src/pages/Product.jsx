import { Star, StarOutline } from '@material-ui/icons'
import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import { ButtonAddToCard } from '../components/Product/Product.style'
import { RatingContainer, StarsContainer, NumberOfReviews, FilterContainer, Container, Wrapper, ImgContainer, InfoContainer, Image, Title, Desc, Price, Filter, FilterColor, FilterTitle, FilterSizeOption, AddContainer, AmountContainer, Amount, OtherImagesContainer, OtherImage } from './Product.style'

const Product = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.pinimg.com/originals/d8/cc/c6/d8ccc6e04706d7501ccf2c492e93a963.png" />
                <OtherImagesContainer>
                    <OtherImage src="https://i.pinimg.com/originals/d8/cc/c6/d8ccc6e04706d7501ccf2c492e93a963.png"></OtherImage>
                    <OtherImage src="https://i.pinimg.com/originals/d8/cc/c6/d8ccc6e04706d7501ccf2c492e93a963.png"></OtherImage>
                    <OtherImage src="https://i.pinimg.com/originals/d8/cc/c6/d8ccc6e04706d7501ccf2c492e93a963.png"></OtherImage>
                </OtherImagesContainer>
            </ImgContainer>
            <InfoContainer>
                <Title>White T-Shirt</Title>
                <RatingContainer>
                    <StarsContainer>
                        <Star style={{ color: "#DDC025"}}/>
                        <Star style={{ color: "#DDC025"}}/>
                        <Star style={{ color: "#DDC025"}}/>
                        <StarOutline style={{ color: "#DDC025"}}/>
                        <StarOutline style={{ color: "#DDC025"}}/>
                    </StarsContainer>
                    <NumberOfReviews>(There are 4 Reviews of this product)</NumberOfReviews>
                </RatingContainer>
                <Price>23.00€</Price>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus lorem eget nibh varius, non fermentum lacus dictum. Aliquam vitae est eu libero tincidunt consequat. Donec a dolor lobortis urna faucibus luctus.
                </Desc>
                <FilterContainer>
                    <FilterTitle>COLOR</FilterTitle>
                    <Filter>   
                        <FilterColor color="black"></FilterColor>
                        <FilterColor color="darkblue" selected></FilterColor>
                        <FilterColor color="gray"></FilterColor>
                    </Filter>
                </FilterContainer >
                <FilterContainer>
                    <FilterTitle>SIZE</FilterTitle>
                    <Filter>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Amount type="number" defaultValue='1' />
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
