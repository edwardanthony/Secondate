import React, { useEffect } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components';
import EditIcon from '../components/icons/EditIcon';
import Text from '../components/Text';
import MenuItem from '../components/MenuItem';
import AboutIcon from '../components/icons/AboutIcon';
import PaymentIcon from '../components/icons/PaymentIcon';
import FAQIcon from '../components/icons/FAQIcon';
import TermsIcon from '../components/icons/TermsIcon';
import ContactIcon from '../components/icons/ContactIcon';
import LogoutIcon from '../components/icons/LogoutIcon';

export default function ProfileScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRightContainerStyle: {
        padding: 5,
        marginRight: 25,
      },
      headerRight: () => (
        <TouchableOpacity>
          <EditIcon />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Container>
      <ScrollView>
        <Header>
          <Avatar source={require('../assets/avatar.jpg')} resizeMode="cover" />
          <Name type="demibold">Nova Stephanie</Name>
          <Status>
            <StatusItem>
              <StatusItemTitle>Point Reward</StatusItemTitle>
              <StatusItemValue type="demibold">1250</StatusItemValue>
            </StatusItem>
            <StatusItem>
              <StatusItemTitle>My Reviews</StatusItemTitle>
              <StatusItemValue type="demibold">5</StatusItemValue>
            </StatusItem>
          </Status>
        </Header>
        <Menu>
          <MenuItem icon={<AboutIcon />} title="About Secondate" />
          <MenuItem icon={<PaymentIcon />} title="Payment Confirmation" />
          <MenuItem icon={<FAQIcon />} title="FAQ" />
          <MenuItem icon={<TermsIcon />} title="Terms &amp; Conditions" />
          <MenuItem icon={<ContactIcon />} title="Contact Us" />
          <MenuItem icon={<LogoutIcon />} title="Logout" />
        </Menu>
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: white;
`;

const Header = styled.View`
  background: #fff0d3;
  align-items: center;
  padding: 20px 30px;
`;

const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  background: #fff0d3;
  border-radius: 44px;
  border-color: white;
  border-width: 4px;
`;

const Name = styled(Text)`
  font-size: 18px;
  color: #aa1f24;
  margin-top: 20px;
`;

const Status = styled.View`
  margin: 10px -7px 0 -7px;
  flex-direction: row;
`;

const StatusItem = styled.View`
  padding: 11px 7px;
  align-items: center;
  width: 50%;
`;

const StatusItemTitle = styled(Text)`
  color: #aa1f24;
`;

const StatusItemValue = styled(Text)`
  font-size: 18px;
  color: #404040;
  margin-top: 4px;
`;

const Menu = styled.View``;
