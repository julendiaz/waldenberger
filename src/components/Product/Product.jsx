
import { Container, Image, Info, ProductDetailsContainer, ProductName, ProductPrice, ButtonAddToCard } from "./Product.style"


const Product = ({product}) => {

  console.log(product);
  return (
    <Container>
        <Image src={product.image.url} />
        <Info>
            <ProductDetailsContainer>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price.formatted_with_symbol}</ProductPrice>
            </ProductDetailsContainer>
            <ButtonAddToCard>Add to Cart</ButtonAddToCard>
        </Info>
    </Container>
  )
}

export default Product