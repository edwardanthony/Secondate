import React from 'react';
import { View } from 'react-native';
import CartItem from './CartItem';

export default function CartList({ cartItems = [], ...props }) {
  return (
    <View {...props}>
      {cartItems.map((cartItem, index) => (
        <CartItem key={index} {...cartItem} />
      ))}
    </View>
  );
}
