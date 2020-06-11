import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import { Card } from "react-native-elements";
import { network } from "../../../config/Network";
import { WebView } from "react-native-webview";

export default class ChiTietTinTuc extends React.Component {
  state = {
    data: [],
  };
  fetchData = async () => {
    const { params } = this.props.navigation.state;
    const response = await fetch(
      `${network}/tintuc/chitiettintuc.php?id=` + params.id
    );
    const products = await response.json(); // products have array data
    this.setState({ data: products }); // filled data with dynamic array
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <View style={styles.main}>
        <FlatList
          keyExtractor={(item) => String(item.Id)}
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.main}>
              <StatusBar hidden />
              <View style={styles.hinhanh}>
                <Image
                  style={styles.image}
                  source={{ uri: `${network}/images/tintuc/` + item.Hinhanh }}
                />
              </View>
              <View style={styles.tieude}>
                <Text style={styles.txttieude}>{item.TenTinTuc}</Text>
                <View style={{ flexDirection: "row", flex: 1 / 2 }}>
                  <View
                    style={{
                      margin: 10,
                      marginLeft: 30,
                      width: 150,
                      height: 30,
                      borderWidth: 1,
                      borderRadius: 100,
                      borderColor: "#51cde0",
                      borderRadius: 100,
                    }}
                  >
                    <Text style={styles.btncamon}>Cảm ơn bác sĩ</Text>
                  </View>
                  <View
                    style={{
                      margin: 10,
                      marginLeft: 30,
                      width: 150,
                      height: 30,
                      borderWidth: 1,
                      borderRadius: 100,
                      borderColor: "#51cde0",
                      borderRadius: 100,
                    }}
                  >
                    <Text style={styles.btncamon}>chia sẽ</Text>
                  </View>
                </View>
                <View style={styles.line}></View>
              </View>
              <View style={{ flex: 1 / 2 }}>
                <WebView source={{ html: item.Noidung }} />
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f0f6f6",
  },
  hinhanh: {
    flex: 1 / 3,
  },
  tieude: {
    flex: 1 / 4,
  },
  image: {
    width: "100%",
    height: 250,
  },
  txttieude: {
    marginTop: 10,
    fontSize: 20,
  },
  line: {
    marginTop: 20,
    width: "90%",
    margin: 20,
    borderWidth: 0.5,
  },
  btncamon: {
    alignSelf: "center",
    fontSize: 20,
  },
});
