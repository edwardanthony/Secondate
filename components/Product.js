import React from 'react';
import { View } from 'react-native';
import Text from './Text';
import styled from 'styled-components';

export default function Product({ name, price, reviews, picture, ...props }) {
  return (
    <View {...props}>
      <Thumbnail source={picture} resizeMode="cover" />
      <Description>
        <Name type="demibold">{name}</Name>
        <Price>{price}</Price>
        <ReviewCount>
          <Text type="demibold">{reviews}</Text> reviews
        </ReviewCount>
      </Description>
    </View>
  );
}

const Thumbnail = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background: #fff0d3;
`;

const Description = styled.View`
  align-items: center;
  margin-top: 10px;
`;

const Name = styled(Text)`
  color: #404040;
`;

const Price = styled(Text)`
  color: #808080;
  margin-top: 4px;
`;

const ReviewCount = styled(Text)`
  color: #808080;
  margin-top: 4px;
`;
