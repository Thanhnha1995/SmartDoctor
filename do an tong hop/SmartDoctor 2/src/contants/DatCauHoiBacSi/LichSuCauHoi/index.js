import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
} from "react-native";
import styles from "./styles";

export default class LichSuCauHoi extends React.Component {
  state = {
    data: [
      {
        id: 1,
        tendatcauhoi:
          " Chào bác sĩ, dạo này gần đây lưỡi mình hay bị rát, đặc biệt hai bên mét lưỡi như răng cứa",
        tentrangthai: "Đã trả lời",
      },
      {
        id: 2,
        tendatcauhoi:
          " Sức khỏe hiện tại đang không được tốt, em có các dấu hiện như ho, sốt. Không biết em có đang mắc bệnh gì không thế bác sĩ",
        tentrangthai: "Chưa trả lời",
      },
    ],
    id: 50,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtlichsu}>Lịch sử câu hỏi</Text>

        <FlatList
          keyExtractor={(item) => String(item.Id)}
          data={this.state.data}
          renderItem={({ item }) => (
            <TouchableOpacity delayPressIn={70} activeOpacity={0.8}>
              <View style={styles.wrapper}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={styles.imageStyle}
                    source={require("../../../assets/avatar/avatar.jpg")}
                  />

                  <Text style={styles.texttieude}>{item.tendatcauhoi}</Text>
                </View>
                <View style={{ marginLeft: 100 }}>
                  <Text style={styles.tinhtrang}>{item.tentrangthai}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("HomeApp");
          }}
        >
          <View>
            <Text style={styles.txtmhc}>MÀN HÌNH CHÍNH</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
