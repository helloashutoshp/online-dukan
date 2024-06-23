import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;

const Desc = styled.p`
  margin-bottom: 10px;
  text-align: left;
  padding-left:50px
`;
const SocialContainer = styled.div`
  display: flex;
  padding-left:20px
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;
  margin-left: 50px;
  margin-top: 10px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  padding-left: 40px;
`;

const List = styled.ul`
  padding-top: 10px;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactTitle = styled.h3`
  margin-bottom: 30px;
  padding-right: 320px;
  margin-top: 30px;
`;
const ContactItems = styled.div`
  margin-bottom: 20px;
  align-items: center;
  display: flex;
`;
const Payment = styled.img`
  width: 50%;
  margin-right: 220px;
`;
const Foot = () => {
  return (
    <Container>
      <Left>
        <Logo>DUKAN</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sed
          doloremque ipsum magni labore id assumenda, itaque distinctio sequi
          esse corrupti tempore maiores dolorum odit! Assumenda distinctio
          expedita eius modi officiis! Eos totam facere quasi veritatis aut rem
          nam eveniet?
        </Desc>

        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
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
          <ListItem>Offers</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <ContactTitle>Contact</ContactTitle>
        <ContactItems>
          <Room style={{ marginRight: "10px" }} />
          622 Dixie Path , South Tobnchester 98336
        </ContactItems>
        <ContactItems>
          <Phone style={{ marginRight: "10px" }} />
          +1 234 56078
        </ContactItems>
        <ContactItems>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@gmail.com
        </ContactItems>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Foot;
