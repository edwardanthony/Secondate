import React from 'react';
import styled from 'styled-components';
import Text from './Text';
import Counter from './Counter';

export default function CartItem({ product, count = 1, ...props }) {
  return (
    <Container {...props}>
      <Thumbnail source={product.picture} resizeMode="cover" />
      <Info>
        <Name type="medium">{product.name}</Name>
        <Price>{product.price}</Price>
      </Info>
      <Counter count={count} style={{ marginLeft: 'auto' }} />
    </Container>
  );
}

const Container = styled.View`
  padding: 12px 30px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: #f4f4f4;
`;

const Thumbnail = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  background: #fff0d3;
`;

const Info = styled.View`
  margin-left: 20px;
`;

const Name = styled(Text)`
  font-size: 18px;
  color: #404040;
`;

const Price = styled(Text)`
  color: #808080;
  margin-top: 4px;
`;
