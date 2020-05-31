import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Text from './Text';

export default function Counter({ initialCount = 1, ...props }) {
  const [count, setCount] = useState(initialCount);

  return (
    <Container {...props}>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <ButtonText>+</ButtonText>
      </TouchableOpacity>
      <Count type="demibold">{count}</Count>
      <TouchableOpacity onPress={() => setCount(Math.max(1, count - 1))}>
        <ButtonText>-</ButtonText>
      </TouchableOpacity>
    </Container>
  );
}

const Container = styled.View`
  align-items: center;
`;

const ButtonText = styled(Text)`
  font-size: 18px;
  color: #808080;
`;

const Count = styled(Text)`
  font-size: 20px;
  color: #aa1f24;
`;
