import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative
`;
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`;
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Title = styled.h1`
color:white;
margin-bottom:20px
`;
const Button = styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;
transition: all 0.5s ease;
background-color:teal;
color:white;
border-radius:2px;
letter-spacing:2px;

&:hover{
  background-color:red;
  color:white;
  transform: scale(1.1);

}
`;

const Categoryitem = ({ item }) => {
  return <Container>
    <Image src={item.img}/>
    <Info>
      <Title>{item.title}</Title>
      <Link to="/product-list">
      <Button>SHOP NOW</Button>
      </Link>
    </Info>
  </Container>;
};

export default Categoryitem;
