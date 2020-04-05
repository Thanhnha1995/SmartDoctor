import React, { Component } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  // Dimensions,
  Platform,
  TouchableOpacity,
  WebView,
  StatusBar,
} from "react-native";
import styles from "./styles";
export default class DanhSachTinTuc extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <ScrollView>
          <TouchableOpacity
            delayPressIn={70}
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("ChiTietTinTuc")}
          >
            <View style={styles.wrapper}>
              <Image
                style={styles.imageStyle}
                source={require("../../../assets/Tintuc/tintuc.jpg")}
              />
              <Text style={styles.texttieude}>
                Ngoài COVID-19, cần cảnh giác với những bệnh nguy hiểm này
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            delayPressIn={70}
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("ChiTietTinTuc")}
          >
            <View style={styles.wrapper}>
              <Image
                style={styles.imageStyle}
                source={require("../../../assets/Tintuc/tintuc.jpg")}
              />
              <Text style={styles.texttieude}>
                Ngoài COVID-19, cần cảnh giác với những bệnh nguy hiểm này
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            delayPressIn={70}
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("ChiTietTinTuc")}
          >
            <View style={styles.wrapper}>
              <Image
                style={styles.imageStyle}
                source={require("../../../assets/Tintuc/tintuc.jpg")}
              />
              <Text style={styles.texttieude}>
                Ngoài COVID-19, cần cảnh giác với những bệnh nguy hiểm này
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            delayPressIn={70}
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("ChiTietTinTuc")}
          >
            <View style={styles.wrapper}>
              <Image
                style={styles.imageStyle}
                source={require("../../../assets/Tintuc/tintuc.jpg")}
              />
              <Text style={styles.texttieude}>
                Ngoài COVID-19, cần cảnh giác với những bệnh nguy hiểm này
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            delayPressIn={70}
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("ChiTietTinTuc")}
          >
            <View style={styles.wrapper}>
              <Image
                style={styles.imageStyle}
                source={require("../../../assets/Tintuc/tintuc.jpg")}
              />
              <Text style={styles.texttieude}>
                Ngoài COVID-19, cần cảnh giác với những bệnh nguy hiểm này
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            delayPressIn={70}
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("ChiTietTinTuc")}
          >
            <View style={styles.wrapper}>
              <Image
                style={styles.imageStyle}
                source={require("../../../assets/Tintuc/tintuc.jpg")}
              />
              <Text style={styles.texttieude}>
                Ngoài COVID-19, cần cảnh giác với những bệnh nguy hiểm này
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
