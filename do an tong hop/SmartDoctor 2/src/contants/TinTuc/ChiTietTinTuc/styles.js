"use strict";
import { StyleSheet,Dimensions } from "react-native";
const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: "#f0f6f6"
    },
    hinhanh:{
      flex:1/3,
    },
    tieude:{
      marginTop:60,
      flex:1/6,
    },
    image:{
      width:'100%',
      height: 250
    },
    txttieude:{
      
      marginTop: 10,
      fontSize:20
    },
    line:{
      marginTop:55,
      width:'90%',
      margin:20,
      borderWidth: 0.5,
    },
    btncamon:{
      alignSelf:'center',
      fontSize:20
    }
});

export default styles;
