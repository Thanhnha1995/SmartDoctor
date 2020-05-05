const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
const { width } = Dimensions.get("window");
import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f6f6"
    },
    viewchucmung: {
        flex: 1 / 4,
        backgroundColor: "#4fbbd2"
    },
    viewthongtin: {
        flex: 1,
    },
    viewxacnhan: {
        flex: 1 / 9,
        backgroundColor: "#12528e"
    },
    img: {
        width: 120,
        height: 120
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
    label: {
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 10
    },
    hoanthanh: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 15
    }
});