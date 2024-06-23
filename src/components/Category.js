import React from "react";
import styled from "styled-components";
import categories from "../Categoritem";
import CategoryItem from "./Categoryitem";
const Container = styled.div`
  display: flex;
  padding:20px;
  justify-content:space-between
`;

const Category = () => {
  return (
    <Container>
      {categories.map((items) => ( 
        <CategoryItem item={items} key={items.id} />
      ))}
    </Container>
  );
};

export default Category;
