import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { Container, Wrapper, Left, Language, SearchContainer, Input, Center, LogoWaldenberger, Right,MenuItem } from './Navbar.style';


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <Search style={{color: "gray", fontSize:16, width: '20px'}} />
                </SearchContainer>
            </Left>
            <Center>
                <LogoWaldenberger src='https://user-images.githubusercontent.com/66780327/158016993-322d0217-f30e-4448-8a24-83a54ea0a59f.svg' />    
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar