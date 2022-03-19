import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components/macro'
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
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
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
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px"})}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px"})}
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
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.h1`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" ? "500" : "300"};
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
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your wishlist</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://www.pinclipart.com/picdir/big/76-760505_t-shirt-png-red-t-shirt-template-png.png"/>
                            <Details>
                                <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName> 
                                <ProductId><b>ID:</b> 43782974</ProductId>
                                <ProductColor color="black" />
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                           <ProductAmountContainer>
                               <Add />
                                    <ProductAmount>2</ProductAmount>
                               <Remove />
                           </ProductAmountContainer> 
                           <ProductPrice>30€</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://i.pinimg.com/originals/d8/cc/c6/d8ccc6e04706d7501ccf2c492e93a963.png"/>
                            <Details>
                                <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                                <ProductId><b>ID:</b> 43782974</ProductId>
                                <ProductColor color="gray" />
                                <ProductSize><b>Size:</b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                           <ProductAmountContainer>
                               <Add />
                                    <ProductAmount>2</ProductAmount>
                               <Remove />
                           </ProductAmountContainer> 
                           <ProductPrice>20€</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
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