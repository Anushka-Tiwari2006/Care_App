import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import LogoScreen from './screens/LogoScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Navigation/TabNavigator';
import DrawerNavigator from './Navigation/DrawerNavigator';


import { firebaseConfig } from './config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  LogoScreen: LogoScreen,
  TabNavigator: TabNavigator,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
