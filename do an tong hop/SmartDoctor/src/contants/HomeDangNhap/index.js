import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Image, View } from "react-native-animatable";
import { Images, Lang, Color } from "@Common";

export default class HomeDangNhap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          animation={"bounceIn"}
          duration={1200}
          delay={200}
          ref={ref => (this.logoImgRef = ref)}
          style={styles.logoImg}
          source={Images.logo}
        />

        <View style={styles.login}>
          <View animation={"zoomIn"} delay={600} duration={400}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("DangKy");
              }}
              style={[styles.button, { backgroundColor: Color.gray }]}
            >
              <Text style={[styles.text]}>{Lang.dttk}</Text>
            </TouchableOpacity>
          </View>
          <View
            style={styles.separatorContainer}
            animation={"zoomIn"}
            delay={700}
            duration={400}
          >
            <View style={styles.separatorLine} />
            <Text style={styles.separatorOr}>{"Or"}</Text>
            <View style={styles.separatorLine} />
          </View>
          <View animation={"zoomIn"} delay={600} duration={400}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("DangNhap");
              }}
              style={[styles.button, { backgroundColor: Color.bgxanh }]}
            >
              <Text style={[styles.text]}>{Lang.dn}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
