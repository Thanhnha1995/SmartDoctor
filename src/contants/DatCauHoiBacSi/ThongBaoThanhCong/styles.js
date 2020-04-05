import { StyleSheet,Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
export default styles = StyleSheet.create({
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
