const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
const { width } = Dimensions.get("window");
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f6f6"
    },
    timkiem: {
        flex: 1 / 4,
        backgroundColor: '#278efc'
    },
    noidung: {
        flex: 1
    },
    search: {
        marginTop: 20,
        backgroundColor: '#278efc',
        borderBottomColor: '#278efc',
        borderTopColor: '#278efc',
    },
    txtdanhmuc: {
        marginTop: 10
    },
    button: {

        marginLeft: 20,
        width: 100,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#4abed3'
    },
    txtchuyenkhoa: {
        marginTop: 10,
        flex: 1,
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        color: '#fff'
    },
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        flexDirection: 'row'
    },
    imageStyle: {
        height: 100,
        width: 100
    },
});