import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import HomeIconFill from '../components/icons/HomeIconFill';
import HomeIconOutline from '../components/icons/HomeIconOutline';
import ProductIconFill from '../components/icons/ProductIconFill';
import ProductIconOutline from '../components/icons/ProductIconOutline';
import CartIconFill from '../components/icons/CartIconFill';
import CartIconOutline from '../components/icons/CartIconOutline';
import ProfileIconFill from '../components/icons/ProfileIconFill';
import ProfileIconOutline from '../components/icons/ProfileIconOutline';
import Logo from '../components/icons/Logo';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MainScreen() {
  function getTabBarIcon(route, focused) {
    switch (route.name) {
      case 'Home':
        return focused ? <HomeIconFill /> : <HomeIconOutline />;
      case 'Product':
        return focused ? <ProductIconFill /> : <ProductIconOutline />;
      case 'Cart':
        return focused ? <CartIconFill /> : <CartIconOutline />;
      case 'Profile':
        return focused ? <ProfileIconFill /> : <ProfileIconOutline />;
    }
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => getTabBarIcon(route, focused),
      })}
      tabBarOptions={{
        activeTintColor: '#AA1F24',
        inactiveTintColor: '#AA1F24',
        style: {
          backgroundColor: '#FFF0D3',
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Product" component={ProductNavigator} />
      <Tab.Screen name="Cart" component={CartNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}

const commonScreenOptions = {
  headerStyle: {
    backgroundColor: '#FFF0D3',
    shadowColor: 'transparent',
  },
  headerTitle: () => {
    return <Logo />;
  },
  headerTintColor: '#AA1F24',
};

function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={commonScreenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function ProductNavigator() {
  return (
    <Stack.Navigator screenOptions={commonScreenOptions}>
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}

function CartNavigator() {
  return (
    <Stack.Navigator screenOptions={commonScreenOptions}>
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <Stack.Navigator screenOptions={commonScreenOptions}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
