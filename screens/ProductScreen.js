import React, { useEffect } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components';
import NotificationIcon from '../components/icons/NotificationIcon';
import Text from '../components/Text';
import ProductList from '../components/ProductList';

export default function ProductScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRightContainerStyle: {
        padding: 5,
        marginRight: 25,
      },
      headerRight: () => (
        <TouchableOpacity>
          <NotificationIcon />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <ScrollView>
      <Container>
        <Header type="medium">Secondate products</Header>
        <Caption>There are 8 cool products</Caption>
        <ProductList />
      </Container>
    </ScrollView>
  );
}

const Container = styled.View`
  flex: 1;
  padding: 30px 30px 10px 30px;
  background: white;
`;

const Header = styled(Text)`
  color: #aa1f24;
  font-size: 18px;
`;

const Caption = styled(Text)`
  color: #808080;
  margin-top: 2px;
  margin-bottom: 20px;
`;
