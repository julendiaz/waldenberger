import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Container, Image, Info, Icon } from "./Product.style"
import styled from "styled-components"; 

const ProductDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: blue; */
    margin-left: 1.8em;
`
const ProductName = styled.h3 `
`
const ProductPrice = styled.h3`
    font-weight: 300;
`

const ButtonAddToCard = styled.button`
    background-color: black;
    width: 9em;
    height: 3.3em;
    font-size: 0.8em;
    font-weight: 400;
    color: white;
    /* border-radius: 2em; */
    padding: 0.8em;
    border: none;
    cursor: pointer;
    margin-right: 1.8em;
    transition: all 0.2s ease;

    &:hover {
        background-color: #292929;
    }
`
const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <ProductDetailsContainer>
                <ProductName>White t-shirt</ProductName>
                <ProductPrice>23.00€</ProductPrice>
            </ProductDetailsContainer>
            <ButtonAddToCard>Add to Cart</ButtonAddToCard>
        </Info>
    </Container>
  )
}

export default Product