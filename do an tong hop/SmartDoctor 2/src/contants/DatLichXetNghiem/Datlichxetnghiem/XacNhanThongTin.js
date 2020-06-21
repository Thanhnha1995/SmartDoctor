import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
const { width } = Dimensions.get("window");
import { network } from "../../../config/Network";
import getToken from "../../../Api/Token/GetToken";
import numeral from "numeral";
export default class XacNhanThongTin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      idnguoidung: "",
      iddichvu: "",
      ngay: "",
      giatien: "",
      idca: "",
      idbenhvien: "",
    };
  }
  async datlichxetnghiem() {
    const { navigation } = this.props;
    const { params } = this.props.navigation.state;
    const iduser = navigation.getParam("iduser");
    const iddv = navigation.getParam("iddv");
    const ngay = navigation.getParam("ngay");
    const giatien = navigation.getParam("gt");
    const idbenhvien = navigation.getParam("idbenhvien");
    const idca = navigation.getParam("idca");
    const token = await getToken();

    //mahdxn
    var RandomNumber = Math.floor(100000 + Math.random() * 900000);
    this.setState({
      ma: RandomNumber,
    });
    fetch(`${network}/datlich/xetnghiem/datlich.php`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        token,
        idnguoidung: iduser,
        iddichvu: iddv,
        ngay: ngay,
        giatien: giatien,
        idca: idca,
        idbenhvien:idbenhvien,
        mahdxn: this.state.ma,
        idtrangthailichkham: 2,
      }),
    });
  }
  chuyentrang() {
    this.datlichxetnghiem();
    this.props.navigation.navigate("XacNhanHoanThanh");
  }
  render() {
    const { navigation } = this.props;
    const idca = navigation.getParam("idca");
    const idbenhvien = navigation.getParam("idbenhvien");
    const diachibenhvien = navigation.getParam("diachibenhvien");
    const dienthoaibenhvien = navigation.getParam("dienthoaibenhvien");
    const tenxetnghiem = navigation.getParam("tenxetnghiem");
    const ngay = navigation.getParam("ngay");
    const ca = navigation.getParam("ca");
    const tenbenhvien = navigation.getParam("tenbenhvien");
    const giatien = navigation.getParam("giatien");
    const mahdxn = navigation.getParam("mahdxn");

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.viewchucmung}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.img}
              source={require("../../../Imgs/iconxacnhan.png")}
            />
            <View style={{ marginTop: 20, flex: 1 }}>
              <Text style={{ color: "#fff", fontSize: 15 }}>
                Dịch vụ của bạn
              </Text>
              <Text style={{ color: "#fff", fontSize: 15 }}>
                Vui lòng đừng quên!
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 20,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                # {mahdxn}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.viewthongtin}>
          <View style={styles.wrapper}>
            <Text style={[styles.label, { color: "#80c9d2" }]}>
              Địa điểm và thời gian
            </Text>
            <Text style={[styles.texttieude, { marginTop: 10 }]}>
              {tenbenhvien}
            </Text>
            <View style={{ flexDirection: "column", marginLeft: 20 }}>
              <Text style={[styles.texttieude, { marginTop: 10 }]}>{ngay}</Text>
            </View>
            <View style={{ borderBottomWidth: 0.5 }}></View>
            <Text style={[styles.texttieude, { marginTop: 10 }]}>
              Địa chỉ bệnh viện
              {diachibenhvien}
            </Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.label, { color: "#4b7319" }]}>
              Các dịch vụ thưc hiện
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.texttieude, { marginTop: 10 }]}>
                {tenxetnghiem}
              </Text>
              <Text
                style={[
                  styles.label,
                  { color: "#26608e", fontSize: 15, marginLeft: "15%" },
                ]}
              >
                {numeral(giatien).format("1,234")}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.datlichxetnghiem()}
          style={styles.viewxacnhan}
        >
          <View>
            <Text style={styles.hoanthanh}>HOÀN THÀNH</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f6f6",
  },
  viewchucmung: {
    flex: 1 / 4,
    backgroundColor: "#4fbbd2",
  },
  viewthongtin: {
    flex: 1,
  },
  viewxacnhan: {
    flex: 1 / 8,
    backgroundColor: "#12528e",
  },
  img: {
    width: 120,
    height: 120,
  },
  wrapper: {
    width: width - 20,
    backgroundColor: "#FFF",
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  label: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 10,
  },
  hoanthanh: {
    alignSelf: "center",
    marginTop: 15,
    fontSize: 15,
    color: "#fff",
    fontSize: 20,
  },
});
