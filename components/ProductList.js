import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import Product from './Product';
import products from '../data/products';

export default function ProductList(props) {
  return (
    <Container {...props}>
      {products.map(({ id, ...product }) => (
        <ResizedProduct key={id} {...product} />
      ))}
    </Container>
  );
}

const Container = styled.View`
  margin-left: -17px;
  margin-right: -17px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ResizedProduct = styled(Product)`
  padding: 0 17px;
  width: 50%;
  margin-bottom: 20px;
`;
