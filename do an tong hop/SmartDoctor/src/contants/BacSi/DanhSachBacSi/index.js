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
export default class DanhsachBacSi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          tenbacsi: "Nguyễn Trương Thanh Nhã",
          tenchuyenkhoa: "Nội tổng quát",
          tenbenhvien: "Bệnh viện nhân dân 115",
          catuvan: "50",
        },
        {
          tenbacsi: "Thanh Nhã",
          tenchuyenkhoa: "Răng hàm mặt",
          tenbenhvien: "Bệnh viện răng hàm mặt",
          catuvan: "150",
        },
      ],
    };
  }
  render() {
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
            value={this.state.data}
          />
        </View>
        <View style={styles.viewnoidung}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <TouchableOpacity delayPressIn={70} activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate('ChietTietBacSi')}
              >
                <View style={styles.thongtinbacsi}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={styles.avatar}>
                      <Image
                        style={styles.imgavatar}
                        source={require("../../../assets/avatar/avatar.jpg")}
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
