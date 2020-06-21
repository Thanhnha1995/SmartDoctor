import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
} from "react-native";

import CalendarPicker from "react-native-calendar-picker";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import getToken from "../../../Api/Token/GetToken";
import Datlichxn from "../../../Api/Datlichxn/Datlichxn";
import Modal from "react-native-simple-modal";
import { FontAwesome } from "@expo/vector-icons";
import { network } from "../../../config/Network";
export default class ChonThoiGianXn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      chonngay: [],
      datecanlay: "2019-07-01",

      // cac thong tin truyen len server
      idnguoidung: "",
      iddichvu: "",
      ngay: "",
      giatien: "",
      idca: "",
      mahdxn: "",
      idbacsi: "",
      giatri: 1,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  modalDidClose = () => {
    this.setState({ open: false });
  };

  moveUp = () => this.setState({ offset: -100 });

  resetPosition = () => this.setState({ offset: 0 });

  openModal = () => this.setState({ open: true });

  closeModal = () => this.setState({ open: false });

  fetchDataXetNghiems = async (item) => {
    const response = await fetch(
      `${network}/datlichxn/capnhatsoluong.php?id=${this.state.value}`
    );
    const xetnghiem = await response.json();
    // this.setState({dataxetnghiemtheochuyenmuc: xetnghiem});
  };

  async datlichxetnghiem() {
    const { navigation } = this.props;
    const { params } = this.props.navigation.state;
    const iduser = navigation.getParam("iduser");
    const iddv = params.iddv;
    const gt = params.giatien;
    const idbenhvien = navigation.getParam("idbenhvien");
    const idbacsi = navigation.getParam("idbacsi");
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate
      ? selectedStartDate.format("YYYY-MM-DD")
      : "";
    const giatien = params.giatien;
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
        ngay: startDate,
        giatien: gt,
        idca: this.state.value,
        idbenhvien: idbenhvien,
        idbacsi: "",
        mahdxn: this.state.ma,
        idtrangthailichkham: 1,
      }),
    });
  }
  onDateChange(date, startDate) {
    this.setState({
      selectedStartDate: date,
      datecanlay: (this.state.datecanlay = startDate),
    });
  }
  // thoi gian theo ngay da chon
  fetchDataXetNghiem = async () => {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate
      ? selectedStartDate.format("YYYY-MM-DD")
      : "";
    const { navigation } = this.props;
    const { params } = this.props.navigation.state;
    const iduser = navigation.getParam("iduser");
    const idbacsi = navigation.getParam("idbacsi");
    const iddv = navigation.getParam("iddv");
    const idbenhvien = navigation.getParam("idbenhvien");
    const response = await fetch(
      `${network}/datlich/xetnghiem/thoigianxetnghiem.php?ngay="${startDate}"&iddichvu="${iddv}"`
    );
    const datlichs = await response.json();
    this.setState({
      chonngay: datlichs,
    });
  };

  chuyentrang() {
    var RandomNumber = Math.floor(100000 + Math.random() * 900000);
    this.setState({
      ma: RandomNumber,
    });
    const { navigation } = this.props;
    const { params } = this.props.navigation.state;
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate
      ? selectedStartDate.format("YYYY-MM-DD")
      : "";
    const tenbenhvien = navigation.getParam("tenbenhvien");
    const diachibenhvien = navigation.getParam("diachibenhvien");
    const dienthoaibenhvien = navigation.getParam("dienthoaibenhvien");
    const tenxetnghiem = navigation.getParam("tenxetnghiem");
    const giatien = navigation.getParam("giatien");
    const mahdxn = this.state.ma;

    this.datlichxetnghiem();

    this.props.navigation.navigate("XacNhanThongTin", {
      tenbenhvien,
      diachibenhvien,
      dienthoaibenhvien,
      tenxetnghiem,
      giatien,
      ngay: startDate,
      mahdxn: RandomNumber,
    });
  }
  componentDidUpdate() {
    this.fetchDataXetNghiem();
  }

  getdatalich(startDate) {
    this.setState({
      datecanlay: (this.state.datecanlay = startDate),
    });
  }
  render() {
 
    const radio_props = this.state.chonngay;
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate
      ? selectedStartDate.format("YYYY-MM-DD")
      : "";
const idca= this.state.value;
    const { navigation } = this.props;
    const { params } = this.props.navigation.state;
    const iduser = navigation.getParam("iduser");
    const iddv = navigation.getParam("iddv");
    const gt = params.giatien;
    const idbenhvien = navigation.getParam("idbenhvien");
    const sodienthoai = navigation.getParam("sodienthoai");
    const idthoigian = this.state.value;
    const tenbenhvien = navigation.getParam("tenbenhvien");
    const diachibenhvien = navigation.getParam("diachibenhvien");
    const dienthoaibenhvien = navigation.getParam("dienthoaibenhvien");
    const tenxetnghiem = navigation.getParam("tenxetnghiem");
    const giatien = navigation.getParam("giatien");

    const BLUE = "#2196F3";
    const WHITE = "#FFFFFF";
    const GREY = "#BDBDBD";
    const BLACK = "#424242";
    const LIGHT_GREY = "#F5F5F5";

    return (
      <View style={styles.container}>
        <View style={styles.viewchonlich}>
          <Text style={styles.txtlich}>Chọn lịch</Text>
          <View style={styles.wrapper}>
            <CalendarPicker
              weekdays={["CN", "T2", "T3", "T4", "T5", "T6", "T7"]}
              months={[
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12",
              ]}
              onDateChange={this.onDateChange}
            />
          </View>
        </View>
        <View style={styles.viewchonthoigian}>
          <Text style={styles.txtchonthoigian}>Chọn thời gian</Text>
          <View style={styles.wapperthoigian}>
            <ScrollView>
              {this.state != null &&
              this.state !== undefined &&
              this.state.chonngay != null ? (
                <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={(value) => {
                    this.setState({ value: value });
                  }}
                />
              ) : (
                <View>
                  <Image
                    style={styles.img}
                    source={require("../../../Imgs/booking.png")}
                  />
                  <Text style={{ alignSelf: "center", marginTop: 20 }}>
                    Xin lỗi bạn, hiện tại lịch khám hiện tại chưa có thông tin,
                    vui lòng chọn thời gian khác
                  </Text>
                </View>
              )}
            </ScrollView>
          </View>
        </View>

       {
         this.state != null &&
         this.state !== undefined &&
         this.state.chonngay != null ?(
          <TouchableOpacity
          style={styles.viewxacnhan}
          onPress={() =>
            this.props.navigation.navigate("XacNhanOtp", {
              iduser,
              idthoigian,
              iddv,
              gt,
              idbenhvien,
              sodienthoai,
              tenbenhvien,
              diachibenhvien,
              dienthoaibenhvien,
              tenxetnghiem,
              giatien,
              idca,
              ngay: startDate,
            })
          }
        >
          <View>
            <Text style={styles.btndatlich}>ĐẶT LỊCH</Text>
            <Text>{this.state.idnguoidung}</Text>
          </View>
        </TouchableOpacity>
         ):
         <TouchableOpacity
          disabled={true}
         style={styles.viewxacnhans}>
         <View>
           <Text style={styles.btndatlich}>ĐẶT LẠI</Text>
           <Text>{this.state.idnguoidung}</Text>
         </View>
       </TouchableOpacity>
         
       }
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
    backgroundColor: "#f0f6f6",
  },
  ngaykham: {
    flex: 1 / 3,
  },
  thoigiankham: {
    flex: 1,
  },
  txtnguoidung: {
    marginTop: 30,
    marginLeft: 10,
    fontSize: 25,
    fontWeight: "bold",
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
    flexDirection: "row",
  },
  txtthongtin: {
    marginTop: 10,
    marginLeft: "50%",
    fontSize: 15,
  },
  txtfiled: {
    marginTop: 10,
    fontSize: 15,
  },
  xacnhan: {
    flex: 1 / 9,
    backgroundColor: "#4abf92",
  },
  txtxacnhan: {
    alignSelf: "center",
    marginTop: 30,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  lich: {
    flex: 1 / 2,
  },
  // giao dien
  chonlich: {
    marginTop: 20,
    flex: 1 / 3,
    backgroundColor: "blue",
  },
  txtlich: {
    marginTop: 30,
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },
  // thong tin giao dien moi
  viewchonlich: {
    flex: 1,
  },
  viewchonthoigian: {
    flex: 1 / 2,
  },
  wapperthoigian: {
    flex: 1,
    width: width - 10,
    backgroundColor: "#FFF",
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    flexDirection: "row",
  },
  viewxacnhan: {
    marginTop: 20,
    flex: 1 / 7,
    backgroundColor: "#47aedf",
  },
  viewxacnhans: {
    marginTop: 20,
    flex: 1 / 7,
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  btndatlich: {
    alignSelf: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  txtthoigian: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },
  img: {
    marginTop: 50,
    alignSelf: "center",
    width: 150,
    height: 150,
  },
  txt: {
    fontSize: 15,
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
    fontSize: 25,
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
  txtchonthoigian: {
    fontWeight: "bold",
  },
  img: {
    marginTop: 10,
    alignSelf: "center",
    width: 60,
    height: 60,
  },
});
