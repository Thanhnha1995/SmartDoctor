import React from 'react';
import { Text, View,Image,TouchableOpacity} from 'react-native';
import { Images, Lang, Color } from "@Common";
export default class XacNhanHoanThanhBs extends React.Component {
    render() {
        return (
       <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/bacsi/avatar.png')} />
        <Text style={styles.thongbao}>Cảm ơn bạn đã đặt lịch khám bác sĩ dịch vụ của chúng tôi.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("HomeApp");
          }}
        >
      <View>
      <Text style={styles.textbutton}>Trang chủ</Text>
      </View>
      </TouchableOpacity>
       </View>
        );
    }
}
import { StyleSheet,Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f6f6"
      },
      button:{
        alignSelf:'center',
        marginTop:50,
        width:"85%",
        height:50,
        backgroundColor:'#1d7ac0',
        borderRadius:100
      },
      textbutton:{
        fontSize:20,
        color:"#ffff",
        alignSelf:'center',
        marginTop:10
      },
      image:{
        marginTop:"30%",
        justifyContent: 'center',
        alignSelf:'center',
        width:"40%",
        height:"30%"
      },
      thongbao:{
          fontSize:20
      }
});
