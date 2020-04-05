import React from "react";
import { StatusBar } from "react-native";
import HomeStack from "./src/components/navigation";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <HomeStack />
    </NavigationContainer>
  );
}
