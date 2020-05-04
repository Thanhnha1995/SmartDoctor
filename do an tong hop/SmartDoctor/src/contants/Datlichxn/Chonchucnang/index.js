import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Modal from "react-native-simple-modal";
import { FontAwesome } from '@expo/vector-icons';


export default class Chonchucnang extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }





    render() {
        const { navigate } = this.props.navigation;
        const { navigation } = this.props;
        const iduser = navigation.getParam('iduser');
        return (
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={require('../../../assets/icon/iconxacnhan.png')}
                />
                <Text style={styles.txt}> Đặt lịch xét nghiệm với các đối tác tin cậy
                của chúng tôi. Kết quả xét nghiệm sẽ được gửi qua ứng dụng
        </Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChonbenhvienScreen', { iduser })}>
                    <View style={styles.button}>
                        <Text style={styles.txtbtn}> Đặt xét nghiệm/khám bệnh mới</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('LichsxetnghiemScreen', { iduser })}>
                    <View style={styles.button}>
                        <Text style={styles.txtbtn}> Lịch sử xét nghiệm/khám bệnh mới</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f6f6"
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
        fontSize: 15,
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
    }
});