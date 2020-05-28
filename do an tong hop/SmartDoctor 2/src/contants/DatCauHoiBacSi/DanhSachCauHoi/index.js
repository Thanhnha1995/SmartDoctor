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
import styles from "./styles";
import { Lang } from "@Common";
const { width } = Dimensions.get("window");
import { ListItem, SearchBar } from "react-native-elements";
import { network } from "../../../config/Network";

export default class DanhSachCauHoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      danhmuc: [],
      id: "1",
      dataxetnghiemtheochuyenmuc: [],
      error: null,
      isLoading: true,
    };

    this.arrayholder = [];
  }
  _onPressButton(item) {
    this.setState({
      isLoading: false,
      id: (this.state.id = item.iddanhmuccauhoi),
    });
  }
  fetchDataXetNghiem = async (item) => {
    const response = await fetch(
      `${network}/datcauhoi/danhmuccauhoitheodanhsach.php?id=${this.state.id}`
    );
    const xetnghiem = await response.json();
    this.setState({
      isLoading: false,
      dataxetnghiemtheochuyenmuc: xetnghiem,
    });
  };
  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.state.dataxetnghiemtheochuyenmuc.filter((item) => {
      const itemData = `${item.tendatcauhoi.toUpperCase()}`;
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
    const response = await fetch(
      `${network}/datcauhoi/danhsachdanhmuccauhoi.php`
    );
    const dsdanhmuc = await response.json();
    this.setState({
      isLoading: false,
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
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.viewtimcauhoi}>
          <SearchBar
            containerStyle={styles.search}
            placeholder="Nhập tên câu hỏi cần tìm...."
            lightTheme
            round
            onChangeText={(text) => this.searchFilterFunction(text)}
            autoCorrect={false}
            // value={this.state.value}
          />
          <FlatList
            horizontal
            keyExtractor={(item) => String(item.iddanhmuccauhoi)}
            data={this.state.danhmuc}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => this._onPressButton(item)}
                key={item.iddanhmuccauhoi}
              >
                <View style={styles.btndanhmuc}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      alignSelf: "center",
                      marginTop: 10,
                    }}
                    source={{
                      uri: `${network}/images/datcauhoi/` + item.hinhanh,
                    }}
                  />
                </View>
                <Text style={styles.txtbuntton}>{item.tendanhmuccauhoi}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.viewdanhsachcauhoi}>
          {this.state.isLoading ? (
            <View
              style={[styles.container, styles.horizontal, styles.loading]}
            ></View>
          ) : (
            <FlatList
              keyExtractor={(item) => item.idtraloicauhoi}
              style={styles.container}
              data={this.state.dataxetnghiemtheochuyenmuc}
              renderItem={({ item }) => (
                <TouchableOpacity
                  delayPressIn={70}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigate("ChiTietCauHoi", { id: item.idtraloicauhoi })
                  }
                >
                  <View style={styles.wrapper}>
                    <View style={styles.viewcauhoinguoidung}>
                      <Text
                        style={{
                          fontSize: 15,
                          flex: 1,
                        }}
                      >
                        {item.tendatcauhoi}
                      </Text>
                    </View>
                    <View style={styles.viewcautraloibacsi}>
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                          }}
                          source={{
                            uri: `${network}/images/bacsi/` + item.hinhanh,
                          }}
                        />
                        <Text style={{ fontSize: 15, flex: 1 }}>
                          {item.tenbacsi}
                        </Text>
                      </View>
                      <View style={styles.cautraloibacsi}>
                        <Text
                          style={{
                            fontSize: 15,
                            flex: 1,
                          }}
                        >
                          {item.noidung}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
        <TouchableOpacity
          style={styles.viewdatcauhoi}
          onPress={() =>
            this.props.navigation.navigate("DatCauHoi", { iduser })
          }
        >
          <View>
            <Text style={styles.txtdatcauhoi}>ĐẶT CÂU HỎI</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
