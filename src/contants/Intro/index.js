import React from "react";
import { View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "./styles";
import { Color, Lang } from "@Common";

const slides = [
  {
    key: "support",
    image: require("../../assets/Intro/support.png"),
    title: Lang.tieudehotro,
    text: Lang.noidunghotro,
    backgroundColor: Color.bghotro
  },
  {
    key: "doingu",
    title: Lang.noidungdoingu,
    text: Lang.noidungdoingu,
    image: require("../../assets/Intro/doingu.png"),
    backgroundColor: Color.bgdoigu
  },
  {
    key: "chiphi",
    title: Lang.tieudechiphi,
    text: "",
    image: require("../../assets/Intro/chiphi.png"),
    backgroundColor: Color.bgchiphi
  }
];
export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false
    };
  }
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
  };
  _renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.mainContent,
          {
            backgroundColor: item.backgroundColor
          }
        ]}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        onDone={() => this.props.navigation.navigate("HomeDangNhap")}
        bottomButton
      />
    );
  }
}
