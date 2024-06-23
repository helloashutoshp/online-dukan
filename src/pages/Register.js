import React from "react";
import styled from "styled-components";
import bg from "../assets/images/bg3.png";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${bg}) center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  
`;
const Tile = styled.h1`
  color: white;
  font-size:24px;
  font-weight:300
`;
const Form = styled.form`
display:flex;
flex-wrap:wrap;
margin-bottom:60px
`;
const Input = styled.input`
min-width:40%;
flex:1;
margin:20px 10px 0px 0px;
padding:10px;
border-radius:5px;
`;
const Agreement = styled.span`
  color: white;
  font-size:12px;
  margin:20px 0px;
  font-weight:600;
  text-align:left
`;
const Button = styled.button`
border:none;
border-radius:2px;
padding:10px 20px;
background-color:teal;
color:white;
cursor:pointer;
font-weight:600;
letter-spacing:2px;
transition: all 0.5s ease;
&:hover{
  background-color:red;
  color:white;
  transform: scale(1.1);

`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Tile>CREATE AN ACCOUNT</Tile>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="User Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
