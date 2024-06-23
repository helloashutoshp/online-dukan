import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Foot from "../components/Foot";
import { Link } from "react-router-dom";

import { Add, Remove } from "@material-ui/icons";
import "../assets/css/styles.css";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  text-align: left;
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;
const FilterContainer = styled.div`
  display: flex;
  margin: 30px 0px;
  width: 50%;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeoption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 12px;
  border: 2px solid teal;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;
  border-radius: 2px;
  letter-spacing: 2px;
  &:hover {
    background-color: red;
    color: white;
    transform: scale(1.1);
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/25158474/2023/9/25/f9d966bc-6349-46ce-8310-a1d5ae655c621695655566928AntheaaGreenFlaredSleeveChiffonFitFlareDress1.jpg"></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>Party Dress</Title>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
            debitis, facere repellat numquam autem a incidunt labore harum
            officia perspiciatis error. Molestiae officia nostrum id dolores
            tenetur error earum placeat provident magni, dicta hic sed soluta,
            ipsa vero itaque vitae?
          </Description>
          <Price>$500</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeoption>S</FilterSizeoption>
                <FilterSizeoption>M</FilterSizeoption>
                <FilterSizeoption>L</FilterSizeoption>
                <FilterSizeoption>XL</FilterSizeoption>
                <FilterSizeoption>XXL</FilterSizeoption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove className="icon-hover" />
              <Amount>1</Amount>
              <Add className="icon-hover" />
            </AmountContainer>
            <Link to="/cart">
              <Button>ADD TO CART</Button>
            </Link>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Foot />
    </Container>
  );
};

export default Product;
