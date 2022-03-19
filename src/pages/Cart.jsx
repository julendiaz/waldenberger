import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components/macro'
import { css } from 'styled-components'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { ButtonAddToCard } from '../components/Product/Product.style'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px"})}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 400;
    cursor: pointer;
    border-radius: 0.6em;
    border: solid 1px black;
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
    transition: all 0.3s ease;

    &:hover {
        background-color: black;
        color: white;

    }
`

const TopTexts = styled.div`
    ${mobile({ display: "none"})}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column"})}
`
const ProductDetail = styled.div`
    display: flex;
    flex: 2;
`
const Image = styled.img`
    width: 200px;
    padding: 20px;

    ${mobile({ width: "150px"})}
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductReferenceContainer = styled.div`
    display: flex;
    flex-direction: column;

    ${mobile({ marginBottom: "20px"})}
`
const ProductName = styled.span`
    font-weight: 600;
    font-size: 1.3em;
    color: black;
    opacity: 0.8;
`
const ProductId = styled.span`
    opacity: 0.6;
    font-weight: 300;
    font-style: italic;
`
const ProductAspectsContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
`

const ProductAspectDefault = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 3.8em;
`

const ProductColorContainer = styled.div`
    ${ProductAspectDefault}
`
const ProductColorTag = styled.h4`
    opacity: 0.6;
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 0.4em;
    background-color: ${props => props.color};
`
const ProductSizeContainer = styled.div`
    ${ProductAspectDefault}
`
const ProductSizeTag = styled.h4`
    opacity: 0.6;
`
const ProductSize = styled.span`
    background-color: black;
    font-weight: 600;
    border-radius: 0.5em;
    color: white;
    padding: 0.3em 0.6em;
    margin-top: 0.6em;
`


const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;
    padding: 38px;

    ${mobile({ padding: "20px", alignItems: "center"})}
`

const ProductAmountContainer = styled.div`
    width: 6em;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ProductAmount = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin: 5px;
    ${mobile({ margin: "5px 15px"})}
`
const ProductPrice = styled.div`
    font-size: 25px;
    color: #DB4843;
    font-weight: 700;
    ${mobile({ marginBottom: "10px"})}
`
    
const Hr = styled.hr`
    background-color: #eee;
    height: 1px;
    opacity: 0.3;
`


const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 60px;
    height: 50vh;

    ${mobile({ padding: "38px"})}
`

const SummaryTitle = styled.h1`
    font-weight: 700;
    font-size: 1.8em;
`
const SummaryItem = styled.h1`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" ? "700" : "300"};
    font-size: ${props => props.type === "total" ? "24px" : "20px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``


const Cart = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your wishlist</TopText>
                </TopTexts>
                <ButtonAddToCard type="filled">Checkout Now</ButtonAddToCard>
            </Top>
            <Bottom>
                <Info>
                <Product>
                        <ProductDetail>
                            <Image src="https://i.pinimg.com/originals/d8/cc/c6/d8ccc6e04706d7501ccf2c492e93a963.png"/>
                            <Details>
                                <ProductReferenceContainer>
                                    <ProductName>Hakura T-Shirt</ProductName>
                                    <ProductId>43782974</ProductId>
                                </ProductReferenceContainer>
                                <ProductAspectsContainer>
                                    <ProductColorContainer>
                                        <ProductColorTag>Color</ProductColorTag>
                                        <ProductColor color="gray" />
                                    </ProductColorContainer>
                                    <ProductSizeContainer>
                                        <ProductSizeTag>Size</ProductSizeTag>
                                        <ProductSize>M</ProductSize>
                                    </ProductSizeContainer>
                                    
                                </ProductAspectsContainer>
                                
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                           <ProductPrice>20€</ProductPrice>
                           <ProductAmountContainer>
                               <Add />
                                    <ProductAmount>2</ProductAmount>
                               <Remove />
                           </ProductAmountContainer> 
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://i.pinimg.com/originals/d8/cc/c6/d8ccc6e04706d7501ccf2c492e93a963.png"/>
                            <Details>
                                <ProductReferenceContainer>
                                    <ProductName>Hakura T-Shirt</ProductName>
                                    <ProductId>43782974</ProductId>
                                </ProductReferenceContainer>
                                <ProductAspectsContainer>
                                    <ProductColorContainer>
                                        <ProductColorTag>Color</ProductColorTag>
                                        <ProductColor color="gray" />
                                    </ProductColorContainer>
                                    <ProductSizeContainer>
                                        <ProductSizeTag>Size</ProductSizeTag>
                                        <ProductSize>M</ProductSize>
                                    </ProductSizeContainer>
                                    
                                </ProductAspectsContainer>
                                
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                           <ProductPrice>20€</ProductPrice>
                           <ProductAmountContainer>
                               <Add />
                                    <ProductAmount>2</ProductAmount>
                               <Remove />
                           </ProductAmountContainer> 
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>50€</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>5€</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>- 5€</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total"> 
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>50€</SummaryItemPrice>
                    </SummaryItem>
                    <ButtonAddToCard big>Check Out Now</ButtonAddToCard>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart