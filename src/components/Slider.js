import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import slideritems from "../Slideritmes";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 40px;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  margin: auto 0;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.bg || "#fff"};
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  text-align: left;
`;

const Image = styled.img`
  height: 80%;
`;

const Title = styled.h1`
  font-size: 70px;
  font-family: "Trebuchet MS", sans-serif;
  letter-spacing: 4px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.5s ease;
  background-color: teal;
  color: white;
letter-spacing:2px;
  &:hover {
    background-color: red;
    color: white;
    transform: scale(1.1);
    border: none;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleclick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prev) => {
        const newIndex = prev > 0 ? prev - 1 : slideritems.length - 1;
        console.log("Left click: ", newIndex); // Debug log
        return newIndex;
      });
    } else {
      setSlideIndex((prev) => {
        const newIndex = prev < slideritems.length - 1 ? prev + 1 : 0;
        console.log("Right click: ", newIndex); // Debug log
        return newIndex;
      });
    }
  };

  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        {slideritems.map((items, index) => (
          <Slide key={index} bg={items.bg}>
            <ImageContainer>
              <Image src={items.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{items.title}</Title>
              <Description>{items.desc}</Description>
              <Link to="/product-list"> <Button>SHOP NOW</Button></Link>
             
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleclick("right")}>
        <KeyboardArrowRight />
      </Arrow>
      <Arrow direction="left" onClick={() => handleclick("left")}>
        <KeyboardArrowLeft />
      </Arrow>
    </Container>
  );
};

export default Slider;
