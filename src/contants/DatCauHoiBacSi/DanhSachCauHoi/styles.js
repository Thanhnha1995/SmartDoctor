
import { StyleSheet,  Dimensions} from "react-native";
const { width } = Dimensions.get("window");
export default styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: "#f0f6f6"
  },
  viewtimcauhoi: {
    flex: 1 / 3,
    backgroundColor: "#278efc"
  },
  search: {
    marginTop: 20,
    backgroundColor: "#278efc",
    borderBottomColor: "#278efc",
    borderTopColor: "#278efc"
  },
  viewdanhsachcauhoi: {
    flex: 1
  },
  viewdatcauhoi: {
    flex: 1 / 8,
    backgroundColor: "#4abf92"
  },
  btndanhmuc: {
    // marginTop:10,
    width: 40,
    height: 40,
    backgroundColor: "gray",
    borderRadius: 100,
    marginLeft: 30
  },
  txtbuntton: {
    flex: 1,
    marginLeft: 20
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
  },
  viewcauhoinguoidung:{
    width:"100%",
    height:40
  },
  viewcautraloibacsi:{
    marginTop:10,
    backgroundColor:'#edf7ff',
    width:"100%",
    height:100
  },
  tenbacsi:{
    fontSize:15,
  },
  cautraloibacsi:{
    marginTop:10,
    width:'100%',
    height:50,
   
  },
  txtdatcauhoi:{
    fontSize:20,
    alignSelf:'center',
    color:"#fff",
    fontWeight:'bold',
    marginTop:20,
  },
  viewdatcauhoi: {
    flex: 1 / 8,
    backgroundColor: "#4abf92"
  },
    });
    