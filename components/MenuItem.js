import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Text from './Text';
import DisclosureIcon from './icons/DisclosureIcon';

export default function MenuItem({ icon, title, ...props }) {
  return (
    <View>
      <TouchableOpacity {...props}>
        <Container>
          <Icon>{icon}</Icon>
          <Title type="medium">{title}</Title>
          <DisclosureIcon style={{ marginLeft: 'auto' }} />
        </Container>
      </TouchableOpacity>
      <BottomSeparator />
    </View>
  );
}

const Container = styled.View`
  background: white;
  height: 62px;
  padding: 0 30px;
  flex-direction: row;
  align-items: center;
`;

const BottomSeparator = styled.View`
  height: 2px;
  width: 100%;
  background: #f4f4f4;
`;

const Icon = styled.View`
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Text)`
  margin-left: 20px;
  font-size: 18px;
  color: #404040;
`;
