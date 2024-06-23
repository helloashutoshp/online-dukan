import styled from "styled-components";
import productItem from "../Productitems";
import Product from "./Product"
const Container = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;

const Products = () => {
  return (
    <Container>
      {productItem.map((items) => (
        <Product items={items} key={items.id}/>
      ))}
    </Container>
  );
};

export default Products;
