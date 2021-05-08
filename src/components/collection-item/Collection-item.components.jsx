import React from "react";

import styled from "styled-components";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <Container>
      <PreviewImg style={{ backgroundImage: `url(${imageUrl})` }} />
      <Footer>
        <span className="name">{name}</span>
        <span className="Price">{price} $</span>
      </Footer>
    </Container>
  );
};

export default CollectionItem;

//Container
const Container = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 450px;
  align-items: center;
`;

//PreviewImg
const PreviewImg = styled.div`
  cursor: pointer;
  border: 2px solid black;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-position: center;
  transition: all 0.4s;
  &:hover {
    transform: translateY(-8px);
  }
`;
//Footer
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  width: 100%;
  height: 10%;
  .name {
    flex: 1;
    margin-bottom: 15px;
  }
`;
