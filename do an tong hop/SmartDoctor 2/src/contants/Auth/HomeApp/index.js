import React, { Component } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import { WebView } from 'react-native-webview';

import * as theme from "../../../common/Theme";
import { network } from "../../../config/Network";
import DsTinmoinhat from "../../../Api/Blog/Tintucmoinhat";
import getToken from "../../../Api/Token/GetToken";
import checkLogin from "../../../Api/Token/Checklogin";

import { Lang } from "@Common";
import styles from "./styles";

export default class HomeApp extends React.Component {
  constructor(props) {
    // khai bao tri vao lay thong tin cho room chat
    super(props);
    const { params } = this.props.navigation.state;
    const { navigation } = this.props;
    const iduser = params.id;
    const hovaten = params.name;
    this.state = {
      dataSource: [],
      // them state cua room
      rooms: [],
      newRoom: "",
    };
  }
  componentDidMount() {
    DsTinmoinhat().then((responeJosn) => {
      this.setState({
        dataSource: responeJosn,
      });
    });
    getToken()
      .then((token) => checkLogin(token))
      .catch((error) => {
      });
  }
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const iduser = params.id;
    const hovaten = params.name;
    const hinhanh = params.hinhanh;
    const chucvu = params.chucvu;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
      >
        <View style={[styles.flex, styles.row, styles.header]}>
          <View>
            <Text style={{ color: theme.colors.caption }}>Xin chào</Text>
            <Text style={{ fontSize: theme.sizes.font * 2 }}>{hovaten}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("HoSoScreen")}
            >
              <Image
                style={styles.avatar}
                source={{ uri: `${network}/images/nguoidung/${hinhanh}` }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.flex, styles.column, styles.recommended]}>
          <View style={[styles.row, styles.recommendedHeader]}>
            <Text style={{ fontSize: theme.sizes.font * 1.4 }}>
              {Lang.hotro}
            </Text>
            <TouchableOpacity activeOpacity={0.5}></TouchableOpacity>
          </View>
        </View>

        <View style={styles.fullField}>
          <View style={styles.colMainLeft}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("DanhSachCauHoi",{iduser})}
            >
              <View
                colors={["rgb(150,150,150)", "rgb(105,105,105)"]}
                style={styles.boxMain}
              >
                <View backgroundColor="#2283c5" style={styles.highLightBoxMain}>
                  <FontAwesome style={styles.iconchucnang} name={"comments"} />
                  <Text style={styles.textchucnang}>{Lang.datcauhoi}</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("ChonchucnangScreen",{iduser})
              }
            >
              <View
                colors={["rgb(150,150,150)", "rgb(105,105,105)"]}
                style={styles.boxMain}
              >
                <View backgroundColor="#fab540" style={styles.highLightBoxMain}>
                  <FontAwesome style={styles.iconchucnang} name={"medkit"} />
                  <Text style={styles.textchucnang}> Đặt lịch</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.colMainRight}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("DanhsachBacSi",{iduser,hovaten})}
            >
              <View
                colors={["rgb(150,150,150)", "rgb(105,105,105)"]}
                style={styles.boxMain}
              >
                <View backgroundColor="#50cddf" style={styles.highLightBoxMain}>
                  <FontAwesome style={styles.iconchucnang} name={"search"} />
                  <Text style={styles.textchucnang}> Tìm bác sĩ</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("ThongTinCaNhan",{iduser})
              }
            >
              <View
                colors={["rgb(150,150,150)", "rgb(105,105,105)"]}
                style={styles.boxMain}
              >
                <View backgroundColor="#f17867" style={styles.highLightBoxMain}>
                  <FontAwesome style={styles.iconchucnang} name={"user"} />
                  <Text style={styles.textchucnang}>Hồ sơ</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ alignSelf: "center", fontSize: 20, marginBottom: 10 }}>
          Tin Tức
        </Text>

        <View style={[styles.tintuc]}>
          <FlatList
            keyExtractor={(item) => item.Id}
            style={styles.container}
            data={this.state.dataSource}
            onEndReachedThreshold="-0.2"
            renderItem={({ item }) => (
              <TouchableOpacity
                delayPressIn={70}
                activeOpacity={0.8}
                onPress={() => navigate("DetailsBlogScreen", { id: item.id })}
              >
                <View activeOpacity={0.9}>
                  <ImageBackground
                    style={[styles.flex, styles.destination, styles.shadow]}
                    imageStyle={{ borderRadius: theme.sizes.radius }}
                    source={{ uri: `${network}/images/tintuc/` + item.hinhanh }}
                  ></ImageBackground>
                  <View
                    style={[
                      styles.column,
                      styles.destinationInfo,
                      styles.shadow,
                    ]}
                  >
                    <Text
                      numberOfLines={1}
                      style={{
                        fontSize: theme.sizes.font * 1.25,
                        fontWeight: "500",
                        paddingBottom: 8,
                      }}
                    >
                      {item.tentintuc}
                    </Text>
                    <View
                      style={[
                        styles.row,
                        {
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                        },
                      ]}
                    >
                      <View
                        numberOfLines={2}
                        style={{ color: theme.colors.caption }}
                      >
                        <WebView source={{ html: item.Noidung }} />
                      </View>
                      <FontAwesome
                        name="chevron-right"
                        size={theme.sizes.font * 0.75}
                        color={theme.colors.caption}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("BlogScreen")}
          >
            <View style={styles.xemtatcacontainer}>
              <Text style={styles.xemtatca}> Xem tất cả</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
