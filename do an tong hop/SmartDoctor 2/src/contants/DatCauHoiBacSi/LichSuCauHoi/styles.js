import { StyleSheet,Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const imageWidth = width - 20;
import { Color } from "@Common";

const imageHeight = (imageWidth / 150) * 150;
export default styles = StyleSheet.create({
    container:{
flex:1
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
        flexDirection: "column"
      },
      textStyle: {
        fontSize: 20,
        color: "#AFAEAF"
      },
      imageStyle: {
        height: 80,
        width: 80,
        borderRadius: 40
      },
      texttieude: {
        fontSize: 15,
        padding: 10,
        paddingTop: 0,
        flex: 1
      },
      tinhtrang: {
        color: "gray"
      },
      txtlichsu:{
        marginLeft:"2%",
        marginTop:"5%",
        fontSize:20
      },
      button:{
          flex:1/12,
          backgroundColor:Color.green02
      },
      txtmhc:{
        marginTop:"0.5%",
        justifyContent: 'center',
        alignSelf:'center',
        fontSize:20,
        color:Color.white

      }
});
