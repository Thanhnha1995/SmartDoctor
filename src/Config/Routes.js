
import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//route start app
import StartUpScreen from '../Constants/StartUpScreen/StartUpScreen';
import IntroScreen from '../Constants/Intro/Intro';

//route auth
import HomeScreen from '../Constants/Auth/Home';
import DangKyScreen from '../Constants/Auth/DangKy';
import DangNhapScreen from '../Constants/Auth/DangNhap';

//Home App
import HomeApp from '../Constants/HomeApp/HomeApp';
//Bac si
import DanhsachBacSi from '../Constants/BacSi/DanhsachBacSi';
import ChitTietBacSi from '../Constants/BacSi/ChitTietBacSi';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
    {/* start app route */}
    <Stack.Screen 
    name="route-name" 
    component={StartUpScreen} 
    options={{ 
      headerShown: false 
      }} />
         <Stack.Screen 
    name="IntroScreen" 
    component={IntroScreen} 
    options={{ 
      headerShown: false 
      }} />
    {/* auth route */}
      <Stack.Screen 
    name="HomeScreen" 
    component={HomeScreen} 
    options={{ 
      headerShown: false 
      }} />
         <Stack.Screen 
    name="DangKyScreen" 
    component={DangKyScreen} 
    options={{ 
      headerShown: false 
      }} />
      <Stack.Screen 
    name="DangNhapScreen" 
    component={DangNhapScreen} 
    options={{ 
      headerShown: false 
      }} />
        <Stack.Screen 
    name="HomeApp" 
    component={HomeApp} 
    options={{ 
      headerShown: false 
      }} />
           <Stack.Screen 
    name="DanhsachBacSi" 
    component={DanhsachBacSi} 
    options={{ 
      headerShown: false 
      }} />
    
    <Stack.Screen 
    name="ChitTietBacSi" 
    component={ChitTietBacSi} 
    options={{ 
      headerShown: false 
      }} />
  </Stack.Navigator>
  
  );
}

export default HomeStack;