
import { StyleSheet,  Dimensions} from "react-native";
const { width } = Dimensions.get("window");
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f6f6"
},
motavande:{
  flex:1/2,

},
chondanhmuc:{
  flex:1/2,

},
datcauhoi:{
  flex:1/10,
  backgroundColor: "#278efc",
},
textmotavande:{
  fontSize:20,
  marginTop:10
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
  height:"80%"
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
txtdatcauhoi:{
  alignSelf:'center',
  fontSize:20,
  marginTop: 20,
  color:"#fff"
},
txtguinoidung:{
  marginTop:15,
  fontSize:15,
  
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
  height:"80%",
  flex:1
},
});