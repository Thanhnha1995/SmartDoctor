import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Modal from "react-native-simple-modal";
import { FontAwesome } from '@expo/vector-icons';
import styles from "./styles";

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
            </View>

        );
    }
}

