import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Picker,
  Alert,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default class Chonchucnang extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dv: "",
    };
  }
  onclick() {
    const { navigation } = this.props;
    const iduser = navigation.getParam("iduser");
    const sodienthoai = navigation.getParam("sodienthoai");
    if (this.state.dv === "xn") {
      this.props.navigation.navigate("ChonBenhVienXN", { iduser, sodienthoai });
    } else {     
      this.props.navigation.navigate("ChonBenhVienBacSi", { iduser, sodienthoai });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.img}
            source={require("../../assets/thongbao/booking.png")}
          />

          <Text style={styles.text}> Vui lòng chọn dịch vụ</Text>

          <Picker
            style={[styles.picker]}
            itemStyle={styles.pickerItem}
            selectedValue={this.state.dv}
            onValueChange={(itemValue) => this.setState({ dv: itemValue })}
          >
            <Picker.Item label="Đặt lịch dịch vụ xét nghiệm" value="xn" />
            <Picker.Item label="Đặt lịch Bác sĩ" value="bacsi" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => this.onclick()}>
          <Text
            style={{
              color: "#ffff",
              alignSelf: "center",
              marginTop: 15,
              fontSize: 20,
            }}
          >
            ĐĂNG KÝ
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  img: {
    marginTop: 100,
    alignSelf: "center",
    width: 250,
    height: 250,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 50,
    width: 350,
    height: 50,
    backgroundColor: "#47aedf",
  },
  txtbtn: {
    marginTop: 10,
    alignSelf: "center",
    fontSize: 20,
    color: "#fff",
  },
  btndichvuphongkham: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#47aedf",
    alignSelf: "center",
    marginLeft: 10,
  },
  btndichvubacsi: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#47aedf",
    alignSelf: "center",
    marginLeft: 10,
  },
  iconchucnang: {
    marginTop: 10,
    alignSelf: "center",
    fontSize: 30,
    color: "#fff",
  },
  button: {
    flex: 1 / 12,
    backgroundColor: "#3395ff",
  },
  picker: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
  },
});
