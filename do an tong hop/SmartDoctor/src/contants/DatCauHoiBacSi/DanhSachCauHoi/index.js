import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { Lang } from "@Common";

import { SearchBar } from "react-native-elements";

export default class DanhSachCauHoi extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timcauhoi}>
          <SearchBar
            containerStyle={styles.search}
            placeholder={Lang.tkch}
            lightTheme
            round
            onChangeText={(text) => this.searchFilterFunction(text)}
            autoCorrect={false}
            // value={this.state.value}
          />
        </View>
        <View style={styles.viewdanhsachcauhoi}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("ChiTietCauHoi");
            }}
          >
            <View style={styles.wrapper}>
              <View style={styles.viewcauhoinguoidung}>
                <Text
                  style={{
                    fontSize: 15,
                    flex: 1,
                  }}
                >
                  Chào bác sĩ, dạo này gần đây lưỡi mình hay bị rát, đặc biệt
                  hai bên mét lưỡi như răng cứa
                </Text>
              </View>
              <View style={styles.viewcautraloibacsi}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 50,
                    }}
                    source={require("../../../assets/Tintuc/tintuc.jpg")}
                  />
                  <Text style={{ fontSize: 15, flex: 1 }}>
                    BS.Nguyễn Trương Thanh Nhã
                  </Text>
                </View>
                <View style={styles.cautraloibacsi}>
                  <Text
                    style={{
                      fontSize: 15,
                      flex: 1,
                    }}
                  >
                    Chào bạn, cảm ơn bạn đã gửi câu hỏi đến đội ngủ tư vấn
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.wrapper}>
            <View style={styles.viewcauhoinguoidung}>
              <Text
                style={{
                  fontSize: 15,
                  flex: 1,
                }}
              >
                Chào bác sĩ, dạo này gần đây lưỡi mình hay bị rát, đặc biệt hai
                bên mét lưỡi như răng cứa
              </Text>
            </View>
            <View style={styles.viewcautraloibacsi}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}
                  source={require("../../../assets/Tintuc/tintuc.jpg")}
                />
                <Text style={{ fontSize: 15, flex: 1 }}>
                  BS.Nguyễn Trương Thanh Nhã
                </Text>
              </View>
              <View style={styles.cautraloibacsi}>
                <Text
                  style={{
                    fontSize: 15,
                    flex: 1,
                  }}
                >
                  Chào bạn, cảm ơn bạn đã gửi câu hỏi đến đội ngủ tư vấn
                </Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.viewdatcauhoi}
          onPress={() => {
            this.props.navigation.navigate("DatCauHoi");
          }}
        >
          <View>
            <Text style={styles.txtdatcauhoi}>{Lang.dch}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
