import React, { useState } from 'react';
import { Text } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';

async function loadFonts() {
  return Font.loadAsync({
    'AvenirNext-DemiBold': require('./assets/fonts/AvenirNext-DemiBold.ttf'),
    'AvenirNext-Medium': require('./assets/fonts/AvenirNext-Medium.ttf'),
    'AvenirNext-Regular': require('./assets/fonts/AvenirNext-Regular.ttf'),
  });
}

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded)
    return (
      <NavigationContainer>
        <Stack.Navigator
          mode="modal"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );

  return (
    <AppLoading startAsync={loadFonts} onFinish={() => setFontsLoaded(true)} />
  );
}
