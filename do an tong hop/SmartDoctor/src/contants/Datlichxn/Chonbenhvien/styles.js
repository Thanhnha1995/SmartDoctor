const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f6f6"
    },
    viewtimkiem: {
        flex: 1 / 10,
        backgroundColor: "#278efc"
    },
    viewnoidung: {
        flex: 1
    },

    search: {
        backgroundColor: "#278efc",
        borderBottomColor: "#278efc",
        borderTopColor: "#278efc"
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
        flexDirection: "row"
    },
    imageStyle: {
        marginTop: 10,
        height: 90,
        width: 90
    },
    texttieude: {
        marginTop: 10,
        fontSize: 15,
        marginLeft: 10
    },
    textdiachi: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 15
    },
    modalbenhvien: {
        flex: 1 / 4,
        backgroundColor: "blue"
    },
    modalheader: {
        //width: width - 10,
        backgroundColor: "#FFF",
        margin: 10,
        shadowColor: "#2E272B",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        flexDirection: "row"
    },
    txtheader: {
        alignSelf: "center"
    },
    viewthongtin: {
        width: width - 20,
        backgroundColor: "#FFF",
        margin: 10,
        shadowColor: "#2E272B",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        flexDirection: "row"
    },
    viewgioithieu: {
        backgroundColor: "#FFF",
        margin: 10,
        shadowColor: "#2E272B",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        flexDirection: "row"
    },
    buttonthongitnbenhvien: {
        width: 150,
        height: 30,
        alignSelf: "flex-end",
        marginBottom: 20,
        backgroundColor: "#47aedf",
        borderRadius: 20
    }
})