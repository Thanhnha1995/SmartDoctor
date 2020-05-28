import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  FlatList
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
const { width } = Dimensions.get("window");
import { network } from "../../config/Network";
export default class ThongTinCaNhan extends React.Component {
  state = {
    data: [],
    id: 49
  };
  fetchData = async () => {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const iduser = navigation.getParam("iduser");
    const response = await fetch(`${network}/nguoidung/hoso.php?id=${iduser}`);
    const products = await response.json(); // products have array data
    this.setState({ data: products }); // filled data with dynamic array
  };
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        keyExtractor={item => String(item.Id)}
        data={this.state.data}
        renderItem={({ item }) => (
          <View>
            <StatusBar hidden />

            <View style={styles.thongtin}>
              <View>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: `${network}/images/nguoidung/` + item.hinhanh
                  }}
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.txtbacsi}>{item.hovaten}</Text>
                </View>
                <View style={styles.buttoncapnhaths}>
                  <Text style={styles.tenbacsi}>Cập nhật hồ sơ</Text>
                </View>
              </View>
            </View>

            <View style={styles.chitiet}>
              <View style={styles.thongtincoban}>
                <Text style={[styles.textlabel, { color: "#5b96be" }]}>
                  Thông tin cơ bản
                </Text>
                <View style={{ flexDirection: "row" }}>
                  {/* hien thi thong tin ben trai */}
                  <View style={{ flexDirection: "column" }}>
                    <View style={{ marginTop: 10 }}>
                      <Text>Giới tính</Text>
                      <Text style={styles.textchitiet}>{item.gioitinh}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text>Thành phố</Text>
                      <Text style={styles.textchitiet}>{item.tenthanhpho}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text>Nghề nghhiệp</Text>
                      <Text style={styles.textchitiet}>{item.nghenghiep}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text>Mã số BHXH</Text>
                      <Text style={styles.textchitiet}>{item.masobnxh}</Text>
                    </View>
                  </View>
                  {/* hien thi thong tin ben phai */}
                  <View style={{ flexDirection: "column", marginLeft: "45%" }}>
                    <View style={{ marginTop: 10 }}>
                      <Text>Ngày sinh</Text>
                      <Text style={styles.textchitiet}>{item.ngaysinh}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text>Số điện thoại</Text>
                      <Text style={styles.textchitiet}>{item.sodienthoai}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Text>Số CMND</Text>
                      <Text style={styles.textchitiet}>{item.socmnd}</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.thongtincoban}>
                <Text style={[styles.textlabel, { color: "#ff9800" }]}>
                  Thông tin sức khoẻ
                </Text>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <View style={{ flex: 1 / 3 }}>
                    <Text>Cân nặng</Text>
                    <Text style={styles.textchitiet}>{item.cannang} kg</Text>
                  </View>
                  <View style={{ flex: 1 / 3, marginLeft: 20 }}>
                    <Text>Chiều cao</Text>
                    <Text style={styles.textchitiet}>{item.chieucao} cm</Text>
                  </View>
                  <View style={{ flex: 1 / 3, marginLeft: 20 }}>
                    <Text>BMI</Text>
                    <Text style={styles.textchitiet}>{item.bmi}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.thongtincoban}>
                <Text style={[styles.textlabel, { color: "#03a9f4" }]}>
                  Thông tin bổ sung khác
                </Text>
                <View
                  style={{
                    marginTop: 10,
                    borderBottomWidth: 0.5,
                    borderBottomColor: "gray"
                  }}
                >
                  <Text>Nhóm máu</Text>
                  <Text style={styles.textchitiet}>{item.tennhommau}</Text>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    borderBottomWidth: 0.5,
                    borderBottomColor: "gray"
                  }}
                >
                  <Text>Tình trạng bệnh lý</Text>
                  <Text style={styles.textchitiet}>{item.tinhtrangbenhly}</Text>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    borderBottomWidth: 0.5,
                    borderBottomColor: "gray"
                  }}
                >
                  <Text>Dị ứng và các phản ứng</Text>
                  <Text style={styles.textchitiet}>
                    {item.diungvacacphanung}
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    borderBottomWidth: 0.5,
                    borderBottomColor: "gray"
                  }}
                >
                  <Text>Cách sử dụng thuốc</Text>
                  <Text style={styles.textchitiet}>{item.cachsudungthuoc}</Text>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    borderBottomWidth: 0.5,
                    borderBottomColor: "gray"
                  }}
                >
                  <Text>Thông tin dịch vụ</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    );
  }
}
const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f6f6"
  },
  thongtin: {
    flex: 1 / 4,
    backgroundColor: "#4fbbd2",
    flexDirection: "row"
  },
  avatar: {
    marginTop: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#f3fbff",
    marginLeft: 30
  },
  imgavatar: {
    alignSelf: "center",
    marginTop: 20,
    width: 50,
    height: 50
  },
  icontxtthongtin: {
    marginTop: 2,
    fontSize: 20,
    color: "#00528e"
  },
  txtbacsi: {
    marginTop: 40,
    marginLeft: 10,
    fontSize: 20,
    color: "#ffff",
    fontWeight: "bold"
  },
  tenbacsi: {
    marginTop: 5,
    marginLeft: 20,
    alignSelf: "center",
    fontSize: 20,
    color: "#ffff",
    fontWeight: "bold"
  },
  phongban: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20
  },
  buttoncapnhaths: {
    marginTop: 10,
    marginLeft: 10,
    width: 200,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#12528e"
  },
  chitiet: {
    flex: 1,
    backgroundColor: "#f0f6f6"
  },
  thongtincoban: {
    width: width - 20,
    backgroundColor: "#FFF",
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    flexDirection: "column"
  },
  tenbacsi: {
    marginTop: 5,
    marginLeft: 20,
    alignSelf: "center",
    fontSize: 20,
    color: "#ffff",
    fontWeight: "bold"
  },
  textlabel: {
    fontSize: 20,
    marginTop: 10
  },
  textchitiet: {
    fontSize: 15,
    color: "#adadad"
  }
});
