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
import { FirebaseApp } from "../../../config/Firebase";

export default class DanhsachBacSi extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const iduser = navigation.getParam("iduser");
    const roomKey = iduser;
    var firebaseDB = FirebaseApp.database();
    this.roomsRef = firebaseDB.ref(`rooms/${roomKey}`);
    this.state = {
      loading: false,
      data: [],
      error: null,
      rooms: [],
      newRoom: "",
    };

    this.arrayholder = [];
  }
  // lang nghe su kiem cua room
  listenForRooms(roomsRef) {
    const { navigation } = this.props;
    roomsRef.on("value", (dataSnapshot) => {
      var roomsFB = [];
      dataSnapshot.forEach((child) => {
        roomsFB.push({
          name: child.val().name,
          key: child.key,
        });
      });
      this.setState({ rooms: roomsFB });
    });
  }
  // them room mới
  addRoom() {
    const { navigation } = this.props;
    const hovaten = navigation.getParam("hovaten");
    this.roomsRef.push({ name: hovaten });
    this.setState({ newRoom: hovaten });
  }

  // ham xu ly chung sư kien
  _OnPress(item) {
    const { navigation } = this.props;
    const iduser = navigation.getParam("iduser");
    const hovaten = navigation.getParam("hovaten");
    this.props.navigation.navigate("ChietTietBacSi", {
      id: item.idbacsi,
      iduser: iduser,
      idbacsi: item.idbacsi,
      tenbacsi: item.tenbacsi,
      hovaten: hovaten,
    });
    this.addRoom();
  }

  componentDidMount() {
    this.listenForRooms(this.roomsRef);
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
