import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
const { width } = Dimensions.get("window");
import styles from "./styles";
import RadioForm from "react-native-simple-radio-button";

var radio_props = [
  { label: "Nội khoa", value: 0 },
  { label: "Nội tổng quát", value: 1 },
  { label: "Khoa ngoại", value: 2 },
  { label: "Khoa tim", value: 2 },
];

export default class DatCauHoi extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.motavande}>
          <Text style={styles.textmotavande}>Mô tả vấn đề</Text>
          <View style={styles.wrappertext}>
            <TextInput
              style={styles.txtguinoidung}
              placeholder="Nhập nội dung mô tả triệu chứng bạn đang gặp phải"
              multiline={true}
              maxLength={400}
              numberOfLines={5}
            />
          </View>
        </View>
        <View style={styles.chondanhmuc}>
          <Text style={styles.textmotavande}>Chon danh mục</Text>
          <View style={styles.wrapper}>
            <ScrollView>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={(value) => {
                  this.setState({
                    value: value,
                  });
                }}
              />
            </ScrollView>
          </View>
        </View>
        <TouchableOpacity
          style={styles.datcauhoi}
          onPress={() => {
            this.props.navigation.navigate("ThongBaoThanhCong");
          }}
        >
          <View>
            <Text style={styles.txtdatcauhoi}>ĐẶT CÂU HỎI</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
