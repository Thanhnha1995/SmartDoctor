
import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import StartUpScreen from '../Constants/StartUpScreen/StartUpScreen';
import Intro from '../Constants/Intro/Intro';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen 
    name="route-name" 
    component={StartUpScreen} 
    options={{ 
      headerShown: false 
      }} />
      <Stack.Screen 
    name="IntroScreen" 
    component={Intro} 
    options={{ 
      headerShown: false 
      }} />
  </Stack.Navigator>
  
  );
}

export default HomeStack;