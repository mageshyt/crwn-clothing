import React from "react";
import styled from "styled-components";

//Collection item
import CollectionItem from "../collection-item/Collection-item.components";
const CollectionPreview = ({ title, items }) => {
  return (
    <div>
      <Wrap>
        <Title>{title.toUpperCase()}</Title>
        <Preview>
          {items
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherPropItem }) => (
              <CollectionItem key={id} {...otherPropItem} />
            ))}
        </Preview>
      </Wrap>
    </div>
  );
};

export default CollectionPreview;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;
const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;
