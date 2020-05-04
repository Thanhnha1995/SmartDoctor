import React, { Component } from "react";
import { View, Image, StyleSheet, Text,Dimensions } from "react-native";
import { Images } from "@Common";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class HomeThongBao extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const iduser = params.iduser;
    return (
      <View style={styles.container}>
        <View style={styles.thongbaoview}>
          <Text style={{ fontSize: 20 }}>Thông báo</Text>
        </View>

        <View syle={styles.view}>
      <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("ThongBaoTuVanHoiDap",{iduser});
              }} style={styles.dichvuform}>
      <View>
          <View style={styles.dichvu}>
            <FontAwesome
              name={"comments"}
              style={{ fontSize: 40, color: "#4995cd" }}
            />
            <Text style={{ marginLeft: 20, fontSize: 15 }}>Tư vấn hỏi đáp</Text>
          </View>
          <Text style={{ marginLeft: 70, fontSize: 15, color: "gray" }}>
            Xem ngay phản hồi bác sĩ
          </Text>
        </View>

      </TouchableOpacity>
        
      <TouchableOpacity onPress={() => {
            this.props.navigation.navigate("DanhSachTinTuc");
              }} style={styles.dichvuform}>
        <View>
          <View style={styles.dichvu}>
            <FontAwesome
              name={"file"}
              style={{ fontSize: 40, color: "#4995cd" }}
            />
            <Text style={{ marginLeft: 20, fontSize: 15 }}>Tin tức sức khỏe</Text>
          </View>
          <Text style={{ marginLeft: 70, fontSize: 15, color: "gray" }}>
           Bạn bỏ lỡ tin tức về sức khỏe và y tế
          </Text>
        </View>
        </TouchableOpacity>
        
        
        
        

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
  },
  thongbaoview: {
    marginTop: 20,
    marginLeft: 10,
  },
  dichvuform: {
    marginTop: 30,
  },
  dichvu: {
    marginLeft: 10,
    flexDirection: "row",
  },
  view:{
    width: width - 20,
    backgroundColor: '#edf7ff',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  }
});
