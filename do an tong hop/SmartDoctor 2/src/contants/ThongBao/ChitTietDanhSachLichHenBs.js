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
import numeral from "numeral";

export default class ChitTietDanhSachLichHenBs extends React.Component {
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
    const response = await fetch(`${network}/thongbao/chitietlichbacsi.php?id=${id}`);
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

            <View style={{
              marginTop:20,
              alignSelf:'center'
            }}>
            <Text style={{
             fontSize:15,
             fontWeight:'bold' 
            }}>Trạng thái</Text>
       
            </View>
            <View style={{
              marginTop:10,
              width:"90%",
              height:30,
              backgroundColor:'#e74c3c',
              marginLeft:10,
         
            }}>
              <Text style={{
                alignSelf:'center',
                color:"#fff",
                marginTop:5,
                fontSize:15
              }}> {item.tentrangthai}</Text>
              </View>
            <View style={styles.chondanhmuc}>
              <Text style={styles.textmotavande}>Thông tin bác sĩ</Text>
              <View style={styles.wrapper}>
              <View style={{
                        justifyContent:'space-between',
                        flexDirection: "row"
                      }}>
                        <Text style={styles.hovaten}>Họ và tên</Text> 
                        <Text style={{
                          marginTop: 5,
                    
                        }}>{item.tenbacsi}</Text>                    
                      </View>
                      <View style={{
                        justifyContent:'space-between',
                        flexDirection: "row"
                      }}>
                        <Text style={styles.hovaten}>Thông tin liên hệ</Text> 
                        <Text style={{
                          marginTop: 5,
                    
                        }}> {item.sodienthoai}</Text>                    
                      </View>
              
              </View>
            </View>

            <View style={{
              flex: 1 / 2,
              marginTop:40
            }}>
              <Text style={styles.textmotavande}>Thông tin nơi khám</Text>
              <View style={styles.wrapper}>
              <View style={{
                        justifyContent:'space-between',
                        flexDirection: "row"
                      }}>
                        <Text style={styles.hovaten}>Bệnh viện</Text> 
                        <Text style={{
                          marginTop: 5,
                    
                        }}>{item.tenbenhvien}</Text>                    
                      </View>
               
                      <View style={{
                        justifyContent:'space-between',
                        flexDirection: "row"
                      }}>
                        <Text style={styles.hovaten}>Ngày khám</Text> 
                        <Text style={{
                          marginTop: 5,
                    
                        }}>{item.ngay}</Text>                    
                      </View>
                      <View style={{
                        justifyContent:'space-between',
                        flexDirection: "row"
                      }}>
                        <Text style={styles.hovaten}>Thời gian</Text> 
                        <Text style={{
                          marginTop: 5,
                    
                        }}>{item.thoigian}</Text>                    
                      </View>
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
