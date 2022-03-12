
import { Container, Image, Info, ProductDetailsContainer, ProductName, ProductPrice, ButtonAddToCard } from "./Product.style"


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