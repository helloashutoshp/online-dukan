import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined, Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  align-items: center;
  margin-left: 25px;
`;
const Input = styled.input`
  border: none;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const MenuItems = styled.div`
  font-size: 16px;
  margin-left: 25px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            
          </SearchContainer>
        </Left>
        <Center>
          <Logo>DUKAN</Logo>
        </Center>
        <Right>
          <StyledLink to="/register">
            <MenuItems>Register</MenuItems>
          </StyledLink>
          <StyledLink to="/sign-in">
            <MenuItems>Sign In</MenuItems>
          </StyledLink>
          <StyledLink to="/cart">
            <MenuItems>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItems>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
