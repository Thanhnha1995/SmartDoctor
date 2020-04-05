import { StyleSheet } from "react-native";
import { withTheme } from "react-native-elements";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f0f6f6",
        flex: 1
      },
      thongtin: {
        flex: 1 / 4,
        backgroundColor: '#1d7ac0',
        flexDirection: 'row'
      },
      chitiet: {
        flex: 1 / 6,
        flexDirection: 'row'
      },
      chitietnoidung: {
        flex: 1 / 2,
      },
      btnketnoi: {
        flex: 1 / 12,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 20,
        width: 350,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#00528e'
      },
      avatar: {
        marginTop: 10,
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: '#f3fbff',
        marginLeft: 30,
      },
      txtbacsi: {
        marginTop: 50,
        marginLeft: 10,
        fontSize: 20,
        color: '#ffff',
        fontWeight: 'bold'
      },
      tenbacsi: {
        marginTop: 5,
        marginLeft: 20,
        alignSelf: 'center',
        fontSize: 25,
        color: '#ffff',
        fontWeight: 'bold'
      },
      phongban: {
        marginTop: 10,
        marginLeft: 20,
        fontSize: 20
      },
      iconbacsi: {
        marginTop: 45,
        marginLeft: 30,
        fontSize: 30,
        color: '#ffff'
      },
      thongtinchitiet: {
        width: 125,
        height: 110,
        backgroundColor: 'white',
        borderLeftWidth: 1,
      },
      sonam: {
        marginTop: 20,
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold'
      },
      txtnamkinhghiem: {
        alignSelf: 'center',
        textAlign: 'center',
        color: 'gray',
        fontSize: 20
      },
      imgavatar: {
        alignSelf: 'center',
        marginTop: 20,
        width: 100,
        height: 100
      },
      txtthongtin: {
        marginLeft: 10,
        fontSize: 20,
        color: '#00528e'
    
      },
      icontxtthongtin: {
        marginTop: 2,
        fontSize: 20,
        color: '#00528e'
      },
      txtbtnketnoi: {
        fontSize: 20,
        color: '#ffff',
        alignSelf: 'center',
        marginTop: 10,
      }
})
export default styles;