import React from 'react';
import { StyleSheet, Text, View,StatusBar,  Dimensions,TextInput,TouchableOpacity} from 'react-native';
const { width } = Dimensions.get("window");
import { network } from "../../../config/Network";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import getToken from '../../../Api/Token/GetToken';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import styles from "./styles";
export default class DatCauHoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      danhmucchuyenkhoa:[],
      tendatcauhoi:"",
			iddanhmuccauhoi:"",
      idnguoidung:"",
      idtrangthaitraloicauhoi:1
        };
  }


// gui du lieu len server
async datcauhois(){
  const { params } = this.props.navigation.state;
  const { navigation } = this.props;
  const iduser = navigation.getParam('iduser');
  const token = await getToken();
  fetch(`${network}/datcauhoi/datcauhoi.php`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token,
      tendatcauhoi:this.state.tendatcauhoi,
			iddanhmuccauhoi:this.state.value,
      idnguoidung:iduser,
      idtrangthaitraloicauhoi:this.state.idtrangthaitraloicauhoi
    }),
  })
}
chuyentrang(){
  const { navigation } = this.props;
      const iduser = navigation.getParam('iduser');
  this.props.navigation.navigate('LichsucauhoiScreen',{iduser})
}


// hien thi danh muc 
fetchDanhmuccauhoi = async() =>{
 const response =  await fetch(`${network}/datcauhoi/chondanhmuccauhoi.php`);
 const ds = await response.json();
 this.setState({danhmucchuyenkhoa: ds
 });
};

muntil(){
  this.datcauhois();
  this.chuyentrang();
}
componentDidMount() {
  this.fetchDanhmuccauhoi()
}

    render() {
      const radio_props=this.state.danhmucchuyenkhoa;
      const {navigate} = this.props.navigation;
      const { navigation } = this.props;
      const iduser = navigation.getParam('iduser');
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
            value={this.state.tendatcauhoi}
            onChangeText={(text) => this.setState({tendatcauhoi: text})}   
        // onChangeText={(text) => this.setState({text})}
        // value={this.state.text}
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
  onPress={(value) => {this.setState({
    value:value
    })}}
/> 
  </ScrollView>
               </View>
          </View>
      <TouchableOpacity style={styles.datcauhoi} onPress={() => this.muntil()}>

      <View>
          <Text style={styles.txtdatcauhoi}>ĐẶT CÂU HỎI</Text>
          </View>
      </TouchableOpacity>

         
        </View>
   
        );
    }
}