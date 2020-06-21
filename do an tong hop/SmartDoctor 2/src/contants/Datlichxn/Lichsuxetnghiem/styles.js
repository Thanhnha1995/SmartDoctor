const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3fbff"
    },
    viewtimkiem: {
        flex: 1 / 10,
        backgroundColor: "#278efc"
    },
    viewdanhsach: {
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
        paddingTop: 0
    },
    imageStyle: {
        width: 100,
        height: 100
    },
    texttieude: {
        fontSize: 15,
        flex: 10,
        marginLeft: 10
    }
});