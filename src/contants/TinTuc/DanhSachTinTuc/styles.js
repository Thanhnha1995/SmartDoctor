"use strict";
import { StyleSheet,Dimensions } from "react-native";
const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  wrapper: {
    width: width - 20,
    backgroundColor: '#edf7ff',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    flexDirection: 'row'
},
textStyle: {
    fontSize: 20,
    color: '#AFAEAF'
},
imageStyle: {
    height: 150,
    width: 150
},
texttieude: {
    fontSize: 15,
    padding: 10,
    paddingTop: 0,
    flex: 1
}
});

export default styles;
