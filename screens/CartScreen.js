import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import Text from '../components/Text';
import Button from '../components/Button';
import CartList from '../components/CartList';
import products from '../data/products';

const cartItems = [
  {
    product: products[1],
    count: 1,
  },
  {
    product: products[0],
    count: 1,
  },
  {
    product: products[3],
    count: 1,
  },
];

export default function CartScreen() {
  return (
    <Container>
      <ScrollView>
        <Header type="demibold">My Cart</Header>
        <CartList cartItems={cartItems} />
        <Footer>
          <Subtotal>
            <SubtotalLabel>Subtotal (3 items)</SubtotalLabel>
            <SubtotalPrice type="medium">Rp. 1.257.000</SubtotalPrice>
          </Subtotal>
          <Button title="Payment" />
        </Footer>
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: white;
`;

const Header = styled(Text)`
  color: #aa1f24;
  font-size: 20px;
  margin: 30px 0 10px 30px;
`;

const Footer = styled.View`
  padding: 30px;
`;

const Subtotal = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

const SubtotalLabel = styled(Text)`
  color: #808080;
`;

const SubtotalPrice = styled(Text)`
  font-size: 18px;
  color: #aa1f24;
  margin-left: auto;
`;
