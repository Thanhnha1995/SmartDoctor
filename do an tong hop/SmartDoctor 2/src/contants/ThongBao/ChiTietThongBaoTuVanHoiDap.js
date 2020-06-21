import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from "react-native";
const { width } = Dimensions.get("window");
import { network } from "../../config/Network";
import Loader from '../../components/Loader';

export default class ChiTietThongBaoTuVanHoiDap extends React.Component {
  constructor(props){
    super(props);
    this.state={
      data: [],
      loadingVisible: true,

    }
  }
  fetchData = async () => {
    this.setState({ loadingVisible: true });
    const { params } = this.props.navigation.state;
    const { navigation } = this.props;
    const id = navigation.getParam("id");
    const response = await fetch(`${network}/thongbao/chitiet.php?id=${id}`);
    const products = await response.json(); // products have array data
    this.setState({
      data: products,
      loadingVisible:false
    }); // filled data with dynamic array
  };
  componentDidMount() {
    this.fetchData();
  }

  render() {
    const radio_props = this.state.danhmucchuyenkhoa;
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const {
      loadingVisible
    } = this.state;
    return (
      <View style={styles.container}>
                   <Loader
          modalVisible={loadingVisible}
          animationType="fade"
        /> 
     <FlatList
        style={styles.container}
        keyExtractor={(item) => String(item.Id)}
        data={this.state.data}
        renderItem={({ item }) => (
          <View style={styles.container}>
     
            <StatusBar hidden />

            <View style={styles.motavande}>
              <View style={styles.wrappertext}>
                <Text style={styles.txtguinoidung}>{item.tendatcauhoi}</Text>
              </View>
            </View>
            <View style={styles.chondanhmuc}>
              <Text style={styles.textmotavande}>Trả lời câu hỏi</Text>
              <View style={styles.wrapper}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: `${network}/images/bacsi/${item.hinhanh}`,
                    }}
                  />
                  <Text style={styles.tenbacsi}>{item.tenbacsi}</Text>
                </View>
                <Text>{item.noidung}</Text>
              </View>
            </View>
          </View>
        )}
      />
      </View>
 
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f6f6",
  },
  motavande: {
    flex: 1 / 2,
  },
  chondanhmuc: {
    flex: 1 / 2,
  },
  datcauhoi: {
    flex: 1 / 10,
    backgroundColor: "#278efc",
  },
  textmotavande: {
    fontSize: 20,
    marginTop: 10,
  },
  wrapper: {
    width: width - 20,
    backgroundColor: "#FFF",
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    height: "80%",
  },
  chonchuyenmuc: {
    width: width - 20,
    backgroundColor: "#FFF",
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  txtdatcauhoi: {
    alignSelf: "center",
    fontSize: 20,
    marginTop: 20,
    color: "#fff",
  },
  txtguinoidung: {
    marginTop: 15,
    fontSize: 15,
  },
  wrappertext: {
    width: width - 20,
    backgroundColor: "#FFF",
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    height: "80%",
    flex: 1,
  },
  avatar: {
    marginTop: 10,
    marginBottom: 20,
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#f3fbff",
    marginLeft: 5,
  },
  tenbacsi: {
    marginTop: 10,
    fontSize: 20,
  },
});
