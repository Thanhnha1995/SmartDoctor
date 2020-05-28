import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Images } from "@Common";
import { FontAwesome } from "@expo/vector-icons";
import { network } from "../../config/Network";
export default class ThongBaoTuVanHoiDap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  fetchData = async () => {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const iduser = navigation.getParam("iduser");
    const response = await fetch(
      `${network}/datcauhoi/danhsachcauhoitheonguoidung.php?id=${iduser}`
    );
    const products = await response.json();
    this.setState({ data: products });
  };
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const iduser = navigation.getParam("iduser");
    this.fetchData(iduser);
  }
  render() {
    const {navigate} = this.props.navigation;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 10 }}>
          {this.state.data ? (
            <FlatList
              keyExtractor={(item) => String(item.Id)}
              data={this.state.data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  delayPressIn={70}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigate("ChiTietCauHoi", { id: item.iddatcauhoi })
                  }
                >
                  <View style={styles.wrapper}>
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        style={styles.imageStyle}
                        source={{
                          uri: `${network}/images/nguoidung/`+item.hinhanh,
                        }}
                      />

                      <Text style={styles.texttieude}>{item.tendatcauhoi}</Text>
                    </View>
                    <View style={{ marginLeft: 100 }}>
                      <Text style={styles.tinhtrang}>{item.tentrangthai}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          ) : (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("DatCauHoi");
              }}
            >
              <View style={styles.wrapper}>
                <Image
                  style={styles.image}
                  source={require("../../assets/thongbao/tuvanhoidap.png")}
                />
                <Text style={{ alignSelf: "center", fontSize: 20 }}>
                  Bạn chưa có đặt câu hỏi
                </Text>
                <Text
                  style={{ alignSelf: "center", fontSize: 13, color: "gray" }}
                >
                  Nhấn đặt ngay câu hỏi đến bác sĩ
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  wrapper: {
    width: width - 20,
    backgroundColor: "#edf7ff",
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  textbutton: {
    fontSize: 20,
    color: "#ffff",
    alignSelf: "center",
    marginTop: 10,
  },
  image: {
    marginTop: 20,
    width: "100%",
    height: 250,
    alignSelf: "center",
  },
  textStyle: {
    fontSize: 20,
    color: "#AFAEAF"
  },
  imageStyle: {
    height: 80,
    width: 80,
    borderRadius: 40
  },
  texttieude: {
    fontSize: 15,
    padding: 10,
    paddingTop: 0,
    flex: 1
  },
  tinhtrang: {
    color: "gray"
  }
});
