import React, { Component } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { network } from "../../../config/Network";
import { Card, ListItem, Button, Icon, Avatar } from "react-native-elements";
import getToken from "../../../Api/Token/GetToken";
import { withTheme } from "react-native-elements";

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default class ChiTietBacSiBS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      chonngay: [],
      datecanlay: "2019-07-01",

      // cac thong tin truyen len server
      idnguoidung: "",
      idbacsi: "",
      data: [],
    };
  }
  fetchData = async () => {
    const { params } = this.props.navigation.state;
    const response = await fetch(
      `${network}/bacsi/chitietbacsi.php?id=` + params.id
    );
    const products = await response.json();
    this.setState({ data: products });
  };
  componentDidMount() {
    this.fetchData();
  }

  // tao phong chat
  async taophongchat() {
    // const{idnguoidung,iddichvu,ngay,giatien,idca,mahdxn}=this.state;
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const iduser = navigation.getParam("iduser");
    const idbacsi = navigation.getParam("idbacsi");
    const token = await getToken();
    fetch(`${network}/phongchat/taophongchat.php`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        idnguoidung: iduser,
        idbacsi: idbacsi,
      }),
    });
  }

  render() {
    const { navigation } = this.props;
    const iduser = navigation.getParam("iduser");
    const hovaten = navigation.getParam("hovaten");
    const idbenhvien = navigation.getParam("idbenhvien");
    const diachibenhvien = navigation.getParam("diachibenhvien");
    const dienthoaibenhvien = navigation.getParam("dienthoaibenhvien");
    const tenbenhvien = navigation.getParam("tenbenhvien");
    const sodienthoai = navigation.getParam("sodienthoai");
    const idbacsi = navigation.getParam("idbacsi");
    return (
      <View>
        <FlatList
          keyExtractor={(item) => String(item.Mabacsi)}
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View style={styles.thongtin}>
                <View style={styles.avatar}>
                  <Image
                    style={styles.imgavatar}
                    source={{ uri: `${network}/images/bacsi/` + item.hinhanh }}
                  />
                </View>
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome style={styles.iconbacsi} name={"user-md"} />
                    <Text style={styles.txtbacsi}>Bác sĩ</Text>
                  </View>
                  <Text style={styles.tenbacsi}>{item.tenbacsi}</Text>
                  <Text style={styles.phongban}>{item.tenchuyenkhoa}</Text>
                </View>
              </View>

              <View style={styles.chitiet}>
                <View style={styles.thongtinchitiet}>
                  <Text style={styles.sonam}>{item.namkinhnghiem}</Text>
                  <Text style={styles.txtnamkinhghiem}>Năm kinh nghiệm</Text>
                </View>
                <View style={styles.thongtinchitiet}>
                  <Text style={styles.sonam}>{item.sobenhnhandagiup}</Text>
                  <Text style={styles.txtnamkinhghiem}>Bệnh nhân trợ giúp</Text>
                </View>
                <View style={styles.thongtinchitiet}>
                  <Text style={styles.sonam}>{item.catuvan}</Text>
                  <Text style={styles.txtnamkinhghiem}>Ca tư vấn</Text>
                </View>
              </View>
              <View style={styles.chitietnoidung}>
                <Card>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome
                      style={styles.icontxtthongtin}
                      name={"user-md"}
                    />
                    <Text style={styles.txtthongtin}>Thông tin</Text>
                  </View>

                  <Text> {item.thongtin}</Text>
                </Card>
                <Card>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome
                      style={styles.icontxtthongtin}
                      name={"location-arrow"}
                    />
                    <Text style={styles.txtthongtin}>
                      Nơi làm việc hiện tại
                    </Text>
                  </View>

                  <Text>{item.tenbenhvien}</Text>
                </Card>
                <Card>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome
                      style={styles.icontxtthongtin}
                      name={"graduation-cap"}
                    />
                    <Text style={styles.txtthongtin}>Trình độ học vấn</Text>
                  </View>

                  <Text>{item.trinhdohocvan}</Text>
                </Card>
                <Card>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome
                      style={styles.icontxtthongtin}
                      name={"certificate"}
                    />
                    <Text style={[styles.txtthongtin, { color: "#eda635" }]}>
                      Bằng chấp và chứng chỉ
                    </Text>
                  </View>

                  <Text>{item.bangcapchungchi}</Text>
                </Card>
              </View>
              <TouchableOpacity
                style={styles.btnketnoi}
                onPress={() => {
                  this.props.navigation.navigate("ChonThoiGianBs",{
                    iduser,
                    hovaten,
                    idbenhvien,
                    diachibenhvien,
                    dienthoaibenhvien,
                    tenbenhvien,
                    sodienthoai,
                    idbacsi,
                    tenbacsi:item.tenbacsi,
                    tenchuyenkhoa:item.tenchuyenkhoa

                  });
                }}
              >
                <View>
                  <Text style={styles.txtbtnketnoi}>CHỌN BÁC SĨ</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f6f6",
    flex: 1,
  },
  thongtin: {
    flex: 1 / 4,
    backgroundColor: "#1d7ac0",
    flexDirection: "row",
  },
  chitiet: {
    flex: 1 / 6,
    flexDirection: "row",
  },
  chitietnoidung: {
    flex: 1 / 2,
  },
  btnketnoi: {
    flex: 1 / 12,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20,
    width: 350,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#00528e",
  },
  avatar: {
    marginTop: 10,
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: "#f3fbff",
    marginLeft: 30,
  },
  txtbacsi: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
    fontSize: 15,
    color: "#ffff",
    fontWeight: "bold",
  },
  tenbacsi: {
    flex: 1,
    marginTop: 5,
    marginLeft: 20,
    alignSelf: "center",
    fontSize: 20,
    color: "#ffff",
    fontWeight: "bold",
  },
  phongban: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
  },
  iconbacsi: {
    marginTop: 45,
    marginLeft: 30,
    fontSize: 30,
    color: "#ffff",
  },
  thongtinchitiet: {
    width: 125,
    height: 110,
    backgroundColor: "white",
    borderLeftWidth: 1,
  },
  sonam: {
    marginTop: 20,
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  txtnamkinhghiem: {
    alignSelf: "center",
    textAlign: "center",
    color: "gray",
    fontSize: 20,
  },
  imgavatar: {
    alignSelf: "center",
    marginTop: 20,
    width: 100,
    height: 100,
  },
  txtthongtin: {
    marginLeft: 10,
    fontSize: 20,
    color: "#00528e",
  },
  icontxtthongtin: {
    marginTop: 2,
    fontSize: 20,
    color: "#00528e",
  },
  txtbtnketnoi: {
    fontSize: 20,
    color: "#ffff",
    alignSelf: "center",
    marginTop: 10,
  },
});
