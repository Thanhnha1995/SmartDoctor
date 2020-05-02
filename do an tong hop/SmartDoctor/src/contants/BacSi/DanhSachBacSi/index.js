import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  Animated,
  Modal,
  TouchableOpacity,
} from "react-native";
const { width } = Dimensions.get("window");
import { ListItem, SearchBar } from "react-native-elements";
import styles from "./styles";
import { network } from "../../../config/Network";
export default class DanhsachBacSi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `${network}/bacsi/dsbacsi.php`;
    this.setState({ loading: true });

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res;
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };
  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.tenbenhvien.toUpperCase()} ${item.tenbacsi.toUpperCase()} ${item.tenchuyenkhoa.toUpperCase()}`;
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
        placeholder="Type Here..`."
        lightTheme
        round
        onChangeText={(text) => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const iduser = navigation.getParam("iduser");
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.viewtimkiem}>
          <SearchBar
            containerStyle={styles.search}
            placeholder="Nhập thông tin bác sĩ cần tìm....."
            lightTheme
            round
            onChangeText={(text) => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
          />
        </View>
        <View style={styles.viewnoidung}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <TouchableOpacity
                delayPressIn={70}
                activeOpacity={0.8}
                onPress={() =>
                  navigate("ChietTietBacSi", {
                    
                    id: item.idbacsi,
                    iduser,
                    idbacsi: item.idbacsi,
                  })
                }
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
                      <Text style={styles.chuyenkhoa}>{item.tenbenhvien}</Text>
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
            keyExtractor={(item) => item.idbenhvien}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </View>
    );
  }
}
