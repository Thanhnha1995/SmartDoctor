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
import GetIdUser from "../../Api/Token/GetIdUser";
export default class DanhSachLichHenBs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  fetchData = async () => {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const iduser = await GetIdUser();

    const response = await fetch(
      `${network}/thongbao/lichhenbacsi.php?id=${iduser}`
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
  }
  render() {
    const { navigate } = this.props.navigation;
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
                    navigate("ChitTietDanhSachLichHenBs", { id: item.iddatcauhoibac })
                  }
                >   
                  <View style={styles.thongtinbacsi}>
                    <View style={{ flexDirection: "column" }}>
                   

                      <View style={{
                        justifyContent:'space-between',
                        flexDirection: "row"
                      }}>
                        <Text style={styles.hovaten}>Bệnh viện</Text> 
                        <Text style={{
                          marginTop: 5,
                    
                        }}>{item.tenbenhvien}</Text>                    
                      </View>
                      <View style={{
                        justifyContent:'space-between',
                        flexDirection: "row"
                      }}>
                        <Text style={styles.hovaten}>Địa chỉ</Text> 
                        <Text style={{
                          marginTop: 5,
                    
                        }}>{item.diachi}</Text>                    
                      </View>
                      <View style={{
                        justifyContent:'space-between',
                        flexDirection: "row"
                      }}>
                        <Text style={styles.hovaten}>Bác sĩ</Text> 
                        <Text style={{
                          marginTop: 5,
                    
                        }}>{item.tenbacsi}</Text>                    
                      </View>
                    </View>
                    <View style={styles.tkbenhnhan}>
                      <Text style={styles.txttktuycan}>
                        Trạng thái:{item.tentrangthai}
                      </Text>
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
    backgroundColor: "#f0f6f6",
  },
  viewtimkiem: {
    flex: 1 / 10,
    backgroundColor: "#278efc",
  },
  viewnoidung: {
    flex: 1,
  },

  search: {
    backgroundColor: "#278efc",
    borderBottomColor: "#278efc",
    borderTopColor: "#278efc",
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
