import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputConatiner = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    opacity: 0.5;
    background-color: red;
    color: white;
   
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products </Description>
      <InputConatiner>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputConatiner>
    </Container>
  );
};

export default Newsletter;
