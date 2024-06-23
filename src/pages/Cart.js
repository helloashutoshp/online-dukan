import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";
import Announcement from "../components/Announcement";
import { Add, Remove } from "@material-ui/icons";
import "../assets/css/styles.css";
import image from "../assets/images/item12.avif";
import image2 from "../assets/images/items11.jpeg";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
  border: none;
  border-radius: 2px;
  margin-top: 10px;
  padding: 10px 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 2px;
  transition: all 0.5s ease;
  margin-bottom: 10px;
  &:hover {
    background-color: red;
    color: white;
    transform: scale(1.1);
  }
  background-color: ${(props) => props.type === "check" && "black"};
  border-radius: 2px;
`;

const Toptexts = styled.div``;
const Toptext = styled.span`
  cursor: pointer;
  margin: 0px 10px;
  text-decoration: underline;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
const Producdetails = styled.div`
  display: flex;
  flex: 2;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  margin-left: 50px;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const Pricedetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 200px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
  border: none;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  text-align: left;
  margin-top: 50px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  color: white;
  background-color: black;
  padding: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  transition: all 0.5s ease;
  border-radius: 2px;
  &:hover {
    background-color: red;
    color: white;
    transform: scale(1.1);
    border: none;
    cursor: pointer;
  }
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BASKET</Title>
        <Top>
          <Link to="/product-list">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <Toptexts>
            <Toptext>Shopping Bag(2)</Toptext>
            <Toptext>Your Wishlists(1)</Toptext>
          </Toptexts>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <Producdetails>
                <Image src="https://www.tophats-shop.com/76627-full_default/goorin-bros-black-horse-trucker-cap.jpg " />
                <Details>
                  <ProductName>
                    <b>PRODUCT:</b>MICHALE JACKSON CAP
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>225577446955
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>SIZE:</b>40.5
                  </ProductSize>
                </Details>
              </Producdetails>
              <Pricedetail>
                <ProductAmountContainer>
                  <Remove className="icon-hover" />
                  <ProductAmount>2</ProductAmount>
                  <Add className="icon-hover" />
                </ProductAmountContainer>
                <ProductPrice>$300</ProductPrice>
              </Pricedetail>
            </Product>
            <Hr />
            <Product>
              <Producdetails>
                <Image src={image} />
                <Details>
                  <ProductName>
                    <b>PRODUCT:</b>WHITE GROWN
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>225577446955
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>SIZE:</b>35.5
                  </ProductSize>
                </Details>
              </Producdetails>
              <Pricedetail>
                <ProductAmountContainer>
                  <Remove className="icon-hover" />
                  <ProductAmount>1</ProductAmount>
                  <Add className="icon-hover" />
                </ProductAmountContainer>
                <ProductPrice>$500</ProductPrice>
              </Pricedetail>
            </Product>
            <Hr />
            <Product>
              <Producdetails>
                <Image src={image2} />
                <Details>
                  <ProductName>
                    <b>PRODUCT:</b>SMALL GIRL BABY DRESS
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>225577446955
                  </ProductId>
                  <ProductColor color="BLUE" />
                  <ProductSize>
                    <b>SIZE:</b>15.5
                  </ProductSize>
                </Details>
              </Producdetails>
              <Pricedetail>
                <ProductAmountContainer>
                  <Remove className="icon-hover" />
                  <ProductAmount>5</ProductAmount>
                  <Add className="icon-hover" />
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </Pricedetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sub Total</SummaryItemText>
              <SummaryItemPrice>$100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$40</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Disscount</SummaryItemText>
              <SummaryItemPrice>-$50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$1000</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Foot />
    </Container>
  );
};

export default Cart;
