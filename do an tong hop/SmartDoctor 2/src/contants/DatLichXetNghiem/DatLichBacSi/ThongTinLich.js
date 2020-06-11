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
export default class ThongTinLich extends React.Component {
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
    const ngay = navigation.getParam("ngay");
    const idbacsi = navigation.getParam("idbacsi");
 
    const response = await fetch(
      `${network}/datlichbacsi/thoigianxetnghiembacsi.php?ngay="${ngay}"&idbacsi=${idbacsi}`
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
  render(){
    const radio_props = this.state.chonngay;
    const { navigation } = this.props;

    return(
      <View style={{flex:1}}>
        <Text style={styles.text}>Chọn thời gian lịch khám</Text>
        <View style={styles.wrapper} >
        <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  onPress={(value) => {
                    this.setState({ value: value });
                  }}
                />
          </View>
          
        </View>
    );
  }
}
const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
const { width } = Dimensions.get("window");
const styles= StyleSheet.create({
  text:{
    marginTop:20,
    fontSize:20
  },
  wrapper:{
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
  img: {
    marginTop: 10,
    alignSelf: "center",
    width: 100,
    height: 100,
  },
})