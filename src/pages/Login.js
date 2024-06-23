import React from 'react';
import styled from "styled-components";
import login from "../assets/images/log.png";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${login}) center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 20%;
  
`;
const Tile = styled.h1`
  color: white;
  font-size:24px;
  font-weight:300
`;
const Form = styled.form`
display:flex;
flex-direction:column;

`;
const Input = styled.input`
min-width:40%;
flex:1;
margin:20px 10px 0px 0px;
padding:10px;
border-radius:5px;
`;

const Button = styled.button`
border:none;
width:100px;
border-radius:2px;
margin-top:10px;
padding:10px 10px;
background-color:teal;
color:white;
cursor:pointer;
font-weight:600;
letter-spacing:2px;
transition: all 0.5s ease;
margin-bottom:10px;
&:hover{
  background-color:red;
  color:white;
  transform: scale(1.1);

`;

const Link = styled.a`
text-align:left;
margin:5px 0px;
font-size:12px;
color:white;
text-decoration:underline;
cursor:pointer;
`;
const Login = () => {
  return (
    <Container>
    <Wrapper>
      <Tile>CREATE AN ACCOUNT</Tile>
      <Form>
        <Input placeholder="User Name" />
        <Input placeholder="Password" />
        <Button>LOGIN</Button>
        <Link>FORGOT YOUR PASSWORD ?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login
