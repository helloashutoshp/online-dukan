import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Foot from "../components/Foot";
import '../assets/css/styles.css';

const Container = styled.div``;
const Title = styled.h1`
  text-align: left;
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;
`;
const Option = styled.option`

`;

const Productlist = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option selected disabled>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
          </Select>
          <Select>
            <Option selected disabled>
              Size
            </Option>
            <Option className="option">S</Option>
            <Option className="option">M</Option>
            <Option className="option">L</Option>
            <Option className="option">XL</Option>
            <Option className="option">XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected disabled>
              Price
            </Option>
            <Option>Price(Asc)</Option>
            <Option>Price(Desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Foot />
    </Container>
  );
};

export default Productlist;
