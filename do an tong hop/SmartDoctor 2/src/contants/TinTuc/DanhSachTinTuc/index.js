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
import ListBlog from "../../../Api/Blog/List";
const { width } = Dimensions.get("window");
import { network } from "../../../config/Network";
export default class DanhSachTinTuc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      dataSource: [],
      isLoading: true,
      trang: 0,
      LoadTin: false,
      loadingVisible: false,
    };
  }
  LoadTin() {
    this.setState({
      LoadTin: true,
    });
    fetch(`${network}/tintuc/danhsachtintuc.php`)
      .then((respone) => respone.json())
      .then((responeJosn) => {
        this.setState({
          isLoading: false,
          dataSource: responeJosn,
        });
      })
      .catch(() => {
        alert("Du lieu ko ta dc");
      });
  }

  loadmore() {
    this.setState(
      {
        trang: this.state.trang + 1,
      },
      () => {
        fetch(`${network}/tintuc/danhsachtintuc.php?page=` + this.state.trang)
          .then((respone) => respone.json())
          .then((responeJosn) => {
            this.setState({
              dataSource: this.state.dataSource.concat(responeJosn),
            });
          });
      }
    );
  }
  componentDidMount() {
    ListBlog()
      .then((responeJosn) => {
        this.setState({
          isLoading: false,
          dataSource: responeJosn,
        });
      })
      .catch(() => {
        alert("Du lieu ko ta dc");
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          style={styles.container}
          data={this.state.dataSource}
          refreshing={this.state.LoadTin}
          onRefresh={() => {
            this.LoadTin();
          }}
          onEndReachedThreshold="-0.2"
          onEndReached={() => {
            this.loadmore();
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              delayPressIn={70}
              activeOpacity={0.8}
              onPress={() => navigate("ChiTietTinTuc", { id: item.id })}
            >
              <View style={styles.wrapper}>
                <Image
                  style={styles.imageStyle}
                  source={{ uri: `${network}/images/tintuc/` + item.hinhanh }}
                />

                <Text style={styles.texttieude}>{item.tentintuc}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
const styles = StyleSheet.create({
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
  textStyle: {
    fontSize: 20,
    color: "#AFAEAF",
  },
  imageStyle: {
    height: 150,
    width: 150,
  },
  texttieude: {
    fontSize: 15,
    padding: 10,
    paddingTop: 0,
    flex: 1,
  },
});
