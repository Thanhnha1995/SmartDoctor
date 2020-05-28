import React, { Component } from "react";
import { View, Image } from "react-native";
import { Images } from "@Common";
import styles from "./styles";
export default class StartUpScreen extends Component {
  render() {
    setTimeout(() => {
      this.props.navigation.navigate("Intro");
    }, 2000);
    return (
      <View style={styles.container}>      
        <Image source={Images.logo} style={styles.image} />
      </View>
    );
  }
}
