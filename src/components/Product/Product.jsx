import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Container, Image, Info, Icon } from "./Product.style"

const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product