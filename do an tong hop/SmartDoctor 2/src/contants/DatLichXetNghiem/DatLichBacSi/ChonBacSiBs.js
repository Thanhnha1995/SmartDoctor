import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  CirclesLoader,
  PulseLoader,
  TextLoader,
  DotsLoader,
  RippleLoader,
} from "react-native-indicator";
import { ListItem, SearchBar } from "react-native-elements";
import Loader from "../../../components/Loader";

import { network } from "../../../config/Network";
export default class ChonBacSiBs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      danhmuc: [],
      id: 1,
      dataxetnghiemtheochuyenmuc: [],
      error: null,
      loadingVisible: false,
    };

    this.arrayholder = [];
  }
  _onPressButton(item) {
    const { navigation } = this.props;
    this.setState({
      loadingVisible: false,
      id: (this.state.id = item.idchuyenkhoa),
    });
  }

  _OnPress(item) {
    const { navigation } = this.props;
    const iduser = navigation.getParam("iduser");
    const hovaten = navigation.getParam("hovaten");
    const idbenhvien = navigation.getParam("idbenhvien");
    const diachibenhvien = navigation.getParam("diachibenhvien");
    const dienthoaibenhvien = navigation.getParam("dienthoaibenhvien");
    const tenbenhvien = navigation.getParam("tenbenhvien");
    const sodienthoai = navigation.getParam("sodienthoai");
    this.props.navigation.navigate("ChiTietBacSiBS", {
      id: item.idbacsi,
      iduser: iduser,
      idbacsi: item.idbacsi,
      tenbacsi: item.tenbacsi,
      hovaten,
      idbenhvien,
      diachibenhvien,
      dienthoaibenhvien,
      tenbenhvien,
      sodienthoai,
    });
  }
  // lay xet nghiem theo danh muc

  fetchDataXetNghiem = async (item) => {
    const { navigation } = this.props;
    const idbenhvien = navigation.getParam("idbenhvien");
    const response = await fetch(
      `${network}/datlichbacsi/chuyenkhoabacsi.php?idbenhvien=${idbenhvien}&idchuyenkhoa=${this.state.id}`
    );
    const xetnghiem = await response.json();
    this.setState({
      dataxetnghiemtheochuyenmuc: xetnghiem,
    });
  };
  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.state.dataxetnghiemtheochuyenmuc.filter((item) => {
      const itemData = `${item.tenbenhvien.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={(text) => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  // api lay du lieu danh muc theo benh vien
  fetchData = async () => {
    const { params } = this.props.navigation.state;
    const response = await fetch(
      `${network}/datlichbacsi/danhsachchuyenkhoa.php`
    );
    const dsdanhmuc = await response.json();
    this.setState({
      danhmuc: dsdanhmuc,
    });
  };
  // load du lieu
  componentDidMount() {
    this.fetchData();
    this.fetchDataXetNghiem();
  }

  componentDidUpdate() {
    this.fetchDataXetNghiem();
  }
  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const iduser = navigation.getParam("iduser");
    const idbenhvien = navigation.getParam("idbenhvien");
    const diachibenhvien = navigation.getParam("diachibenhvien");
    const dienthoaibenhvien = navigation.getParam("dienthoaibenhvien");
    const tenbenhvien = navigation.getParam("tenbenhvien");
    const sodienthoai = navigation.getParam("sodienthoai");

    const { loadingVisible } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Loader modalVisible={loadingVisible} animationType="fade" />
        <View style={styles.timkiem}>
          <SearchBar
            containerStyle={styles.search}
            placeholder="Nhập tên bác sĩ......."
            lightTheme
            round
            onChangeText={(text) => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
          />
          <FlatList
            horizontal
            keyExtractor={(item) => String(item.Id)}
            data={this.state.danhmuc}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => this._onPressButton(item)}
                key={item.idchuyenkhoa}
              >
                <View style={styles.button} key={item.idchuyenkhoa}>
                  <Text style={styles.txtchuyenkhoa}>{item.tenchuyenkhoa}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.noidung}>
          {this.state.dataxetnghiemtheochuyenmuc != undefined ? (
            <FlatList
              keyExtractor={(item) => item.id}
              style={styles.container}
              data={this.state.dataxetnghiemtheochuyenmuc}
              renderItem={({ item }) => (
                <TouchableOpacity
                  delayPressIn={70}
                  activeOpacity={0.8}
                  onPress={() => this._OnPress(item)}
                  key={item.idbacsi}
                >
                  <View style={styles.thongtinbacsi}>
                    <View style={{ flexDirection: "row" }}>
                      <View style={styles.avatar}>
                        <Image
                          style={styles.imgavatar}
                          source={{
                            uri: `${network}/images/bacsi/` + item.hinhanh,
                          }}
                        />
                      </View>
                      <View>
                        <Text style={styles.txtbacsi}>Bác sĩ</Text>
                        <Text style={styles.hovaten}>{item.tenbacsi}</Text>
                        <Text style={styles.chuyenkhoa}>
                          {item.tenchuyenkhoa}
                        </Text>
                        <Text style={styles.chuyenkhoa}>
                          {item.tenbenhvien}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.tkbenhnhan}>
                      <Text style={styles.txttktuycan}>
                        Số bệnh nhân tư vấn:{item.catuvan}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          ) : (
            <View style={styles.container}>
              <Image
                style={styles.img}
                source={require("../../../assets/icon/iconxacnhan.png")}
              />
              <Text style={styles.txt}>
                Hiện tại các danh mục chưa được cập nhật, vui lòng thử lại
              </Text>
            </View>
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
    backgroundColor: "#f0f6f6",
  },
  timkiem: {
    flex: 1 / 4,
    backgroundColor: "#278efc",
  },
  noidung: {
    flex: 1,
  },
  search: {
    marginTop: 20,
    backgroundColor: "#278efc",
    borderBottomColor: "#278efc",
    borderTopColor: "#278efc",
  },
  txtdanhmuc: {
    marginTop: 10,
  },
  button: {
    marginLeft: 20,
    width: 100,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#4abed3",
  },
  txtchuyenkhoa: {
    marginTop: 10,
    flex: 1,
    fontWeight: "bold",
    fontSize: 15,
    alignSelf: "center",
    color: "#fff",
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
  imageStyle: {
    height: 100,
    width: 100,
  },
  img: {
    marginTop: 100,
    alignSelf: "center",
    width: 220,
    height: 200,
  },
  txt: {
    fontSize: 15,
    alignSelf: "center",
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
  imageStyle: {
    marginTop: 10,
    height: 90,
    width: 90,
  },
  texttieude: {
    marginTop: 10,
    fontSize: 15,
    marginLeft: 10,
  },
  textdiachi: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
  },
  timkiemcontainer: {
    flex: 20,
  },
  timkiemthongtincontainer: {
    flex: 13,
    flexDirection: "row",
    // backgroundColor:'red'
  },
  ttbacsicontainer: {
    flex: 90,
  },
  searchbar: {
    marginTop: 30,
    alignSelf: "center",
    width: "100%",
    height: 80,
    // backgroundColor:'blue'
  },
  dropdown: {
    marginTop: 10,
    flex: 1 / 2,
    // marginLeft: 10,
    // marginRight: 10,
    // width:25,
    // height:50,
    // borderWidth:2,
    // borderColor: '#496b7d',
    // borderRadius:4
  },
  textdropdown: {
    // alignSelf:'center',
    fontSize: 20,
    marginBottom: 10,
    flex: 1 / 9,
  },
  thongtinbacsi: {
    marginTop: 10,
    marginLeft: 10,
    width: "95%",
    height: 150,
    backgroundColor: "#ffff",
    justifyContent: "space-around",
  },
  avatar: {
    marginTop: 10,
    marginBottom: 20,
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#f3fbff",
    marginLeft: 20,
  },
  imgavatar: {
    alignSelf: "center",
    marginTop: 20,
    width: 50,
    height: 50,
  },
  txtbacsi: {
    marginTop: 10,
    fontSize: 20,
    color: "#496b7d",
    fontWeight: "bold",
  },
  hovaten: {
    fontWeight: "bold",
    fontSize: 20,
  },
  chuyenkhoa: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
    color: "gray",
  },
  tkbenhnhan: {
    width: "100%",
    height: 30,
    backgroundColor: "#e7e1e1",
  },
  txttktuycan: {
    marginTop: 5,
    alignSelf: "flex-end",
    marginRight: 30,
    color: "#496b7d",
  },
});
