import React from 'react';
import styled from 'styled-components';
import Text from './Text';

export default function Button({ title, style, ...props }) {
  return (
    <Container style={style} {...props}>
      <Title type="demibold">{title}</Title>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  background: #aa1f24;
  height: 50px;
  padding: 0 20px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Text)`
  font-size: 18px;
  color: white;
`;
