import React, { useState } from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components';
import Button from '../components/Button';
import Logo from '../components/icons/Logo';
import Text from '../components/Text';

const screenHeight = Dimensions.get('window').height;

export default function LoginScreen({ navigation }) {
  const [footerPaddingTop, setFooterPaddingTop] = useState(50);

  return (
    <Container>
      <Logo size="large" style={{ marginTop: 0.424 * screenHeight }} />
      <Caption type="medium">
        We are not your first date.{'\n'}We are your third date.
      </Caption>
      <Footer style={{ background: 'green' }}>
        <Button
          title="Login"
          style={{ width: 250 }}
          onPress={() => navigation.navigate('Main')}
        />
        <Info>
          <InfoText>Don't have an account? </InfoText>
          <TouchableOpacity>
            <InfoLink type="demibold">Sign Up</InfoLink>
          </TouchableOpacity>
        </Info>
      </Footer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: #fff0d3;
  align-items: center;
`;

const Caption = styled(Text)`
  font-size: 14px;
  color: #aa1f24;
  text-align: center;
  margin-top: 25px;
  line-height: 22px;
`;

const Footer = styled.View`
  position: absolute;
  bottom: ${0.204 * screenHeight}px;
`;

const Info = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  margin-top: 20px;
`;

const InfoText = styled(Text)`
  color: #aa1f24;
`;

const InfoLink = styled(Text)`
  color: #aa1f24;
  font-size: 18px;
`;
