import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeStack from './src/Config/Routes';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}