import React, { useEffect } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components';
import NotificationIcon from '../components/icons/NotificationIcon';
import Text from '../components/Text';
import ProductList from '../components/ProductList';

export default function HomeScreen({ navigation }) {
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
    <Container>
      <ScrollView>
        <Cover>
          <BackgroundImage
            source={require('../assets/images/brush-stroke.png')}
            resizeMode="contain"
          />
          <Greeting>
            <GreetingHeader type="demibold">Welcome</GreetingHeader>
            <GreetingName>Nova Stephanie</GreetingName>
          </Greeting>
        </Cover>
        <ProductSheet>
          <ProductSheetHeader type="medium">Best seller</ProductSheetHeader>
          <ProductSheetCaption>
            All products that people love
          </ProductSheetCaption>
          <ProductList />
        </ProductSheet>
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff0d3;
`;

const Cover = styled.View`
  height: 174px;
`;

const BackgroundImage = styled.Image`
  position: absolute;
  top: 49px;
  right: -73px;
  width: 198px;
  height: 133px;
`;

const Greeting = styled.View`
  position: absolute;
  top: 40px;
  left: 30px;
`;

const GreetingHeader = styled(Text)`
  color: #aa1f24;
  font-size: 18px;
`;

const GreetingName = styled(Text)`
  color: #aa1f24;
  font-size: 22px;
  margin-top: 4px;
`;

const ProductSheet = styled.View`
  background: white;
  padding: 30px 30px 10px 30px;
  margin-top: -35px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  height: 100%;
`;

const ProductSheetHeader = styled(Text)`
  color: #aa1f24;
  font-size: 18px;
`;

const ProductSheetCaption = styled(Text)`
  color: #808080;
  margin-top: 2px;
  margin-bottom: 20px;
`;
