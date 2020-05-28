import React from "react";
import { StatusBar } from "react-native";
import RootStack from "./src/components/navigation";

export default class Home extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <RootStack />
    )
  };
}
