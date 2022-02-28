import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, YouTube } from "@material-ui/icons"
import { Container, Left, Logo, Description, SocialContainer, SocialIcon, Center, Title, List, ListItem, Right, ContactItem, Payment } from "./Footer.style"
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>WALDENBERGER</Logo>
            <Description>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly believable.
            </Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="e60023">
                    <YouTube />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: "10px"}} />
                622 Dixie Path, South Tobinchester 98336
            </ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}} />
                +34 659 771 594
            </ContactItem>
            <ContactItem> <MailOutline style={{marginRight: "10px"}} />
                contact@waldenberger.com
            </ContactItem>
            <Payment src="https://www.dobotspain.es/wp-content/uploads/2021/03/payment-methods.png" />
        </Right>
    </Container>
  )
}

export default Footer