
import { StyleSheet,  UIManager } from "react-native";
import { Color } from "@Common";
import device from "../../config/device";
const IMAGE_WIDTH = device.DEVICE_WIDTH * 0.8;
if (Platform.OS === "android")
  UIManager.setLayoutAnimationEnabledExperimental(true);
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        width: device.DEVICE_WIDTH,
        height: device.DEVICE_HEIGHT,
        paddingTop: 24,
        backgroundColor:Color.white
      },
      logoImg: {
        flex: 1,
        height: null,
        width: IMAGE_WIDTH,
        alignSelf: "center",
        resizeMode: "contain",
        marginVertical: 30
      },  
      login: {
        flex: 1,
        marginHorizontal: device.DEVICE_WIDTH * 0.1,
        justifyContent: "center"
      },
      button: {
        height: 42,
        borderWidth: 1,
        borderRadius: 3,
        alignSelf: "stretch",
        justifyContent: "center",
        borderColor: "rgba(0, 0, 0, 0.1)",
        backgroundColor:Color.gray
      },
      text: {
        textAlign: "center",
        fontWeight: "400",
        color: Color.white
      },
      separatorOr: {
        color: Color.btbuttonxam,
        marginHorizontal: 8
      },
      separatorContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 20
      },
      separatorLine: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        height: StyleSheet.hairlineWidth,
        borderColor: Color.gray
      }
    });
    