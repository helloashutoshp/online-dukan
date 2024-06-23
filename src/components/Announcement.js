import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  color: white;
  background-color: teal;
  font-size:16px;
  font-weight:500;
  margin-top:20px;
  
`;

const Announcement = () => {
  return <Container>Super Deal ! Free Shipping on orders 500</Container>;
};

export default Announcement;
