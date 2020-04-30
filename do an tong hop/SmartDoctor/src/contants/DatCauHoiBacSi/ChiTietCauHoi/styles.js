import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f6f6"
  },
  cauhoi: {
    flex: 1 / 3
  },
  noidung: {
    flex: 1
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
  textnoidung: {
    flex:1,
    fontSize: 15,
    marginTop: 20
  },
  texttieude:{
    fontSize:15,
    flex:1
  }
});
