const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f6f6"
    },
    thongtindichvu: {
        flex: 1,
        marginTop: 20
    },
    hinhanh: {
        marginTop: 10,
        width: "100%",
        height: 180
    },

    txttieude: {
        fontSize: 15
    },
    thanhtoan: {
        marginTop: 10,
        flex: 1 / 11,
        flexDirection: "row",
        shadowColor: "#2E272B",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        backgroundColor: "#FFF"
    },
    viewgiatien: {
        width: 220,
        height: "100%"
    },
    viewdatlich: {
        width: 170,
        height: "100%",
        backgroundColor: "#009688",
        borderRadius: 10,
        marginRight: 10
    },
    txtdatlich: {
        alignSelf: "center",
        fontWeight: "bold",
        marginTop: 20,
        color: "#fff"
    },
    txtgiatien: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 5,
        fontWeight: "bold"
    }
})