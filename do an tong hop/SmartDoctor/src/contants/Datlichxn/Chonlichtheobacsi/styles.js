const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
import { StyleSheet ,Dimensions} from 'react-native';
const { width } = Dimensions.get("window");
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f6f6"
    },
    ngaykham: {
        flex: 1 / 3
    },
    thoigiankham: {
        flex: 1
    },
    txtnguoidung: {
        marginTop: 30,
        marginLeft: 10,
        fontSize: 25,
        fontWeight: "bold"
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
    txtthongtin: {
        marginTop: 10,
        marginLeft: "50%",
        fontSize: 15
    },
    txtfiled: {
        marginTop: 10,
        fontSize: 15
    },
    xacnhan: {
        flex: 1 / 9,
        backgroundColor: "#4abf92"
    },
    txtxacnhan: {
        alignSelf: 'center',
        marginTop: 30,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    }, lich: {
        flex: 1 / 2,
    },
    // giao dien
    chonlich: {
        marginTop: 20,
        flex: 1 / 3,
        backgroundColor: 'blue'
    },
    txtlich: {
        marginTop: 30,
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },
    // thong tin giao dien moi
    viewchonlich: {
        flex: 1,
    },
    viewchonthoigian: {
        flex: 1 / 2,
    },
    wapperthoigian: {
        flex: 1,
        width: width - 10,
        backgroundColor: "#FFF",
        margin: 10,
        shadowColor: "#2E272B",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        flexDirection: "row"
    },
    viewxacnhan: {
        marginTop: 20,
        flex: 1 / 7,
        backgroundColor: '#47aedf'
    },
    btndatlich: {
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#fff'
    },
    txtthoigian: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },
    img: {
        marginTop: 50,
        alignSelf: 'center',
        width: 150,
        height: 150
    },
    txt: {


        fontSize: 15
    },
    button: {
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 50,
        width: 350,
        height: 50,
        backgroundColor: '#47aedf'
    },
    txtbtn: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 25,
        color: '#fff'
    },
    btndichvuphongkham: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#47aedf",
        alignSelf: 'center',
        marginLeft: 10

    },
    btndichvubacsi: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#47aedf",
        alignSelf: 'center',
        marginLeft: 10

    },
    iconchucnang: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 30,
        color: '#fff'
    },
    txtchonthoigian:{
        fontWeight:'bold'
    }
});