import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, StatusBar } from "react-native";
import styles from "./styles";


export default class Xacnhan extends React.Component {
    state = {
        data: []
    };
    fetchData = async () => {
        const { params } = this.props.navigation.state;
        const response = await fetch(`${network}/datlichxn/hoantatxetnghiem.php?id=` + params.id);
        const products = await response.json(); // products have array data
        this.setState({ data: products }); // filled data with dynamic array
    };
    componentDidMount() {
        this.fetchData();
    }
    render() {

        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <View style={styles.viewchucmung}>
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            style={styles.img}
                            source={require("../../../assets/icon/iconxacnhan.png")}
                        />
                        <View style={{ marginTop: 20, flex: 1 }}>
                            <Text style={{ color: "#fff", fontSize: 15 }}>

                                Xin chúc mừng bạn
              </Text>
                            <Text style={{ color: "#fff", fontSize: 15 }}>
                                Lịch hẹn của bạn đã đặt thành công
              </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.viewthongtin}>
                    <View style={styles.wrapper}>
                        <Text style={[styles.label, { color: '#26608e' }]}>Số xác nhận</Text>
                        <Text style={styles.texttieude}>asdas</Text>
                    </View>
                    <View style={styles.wrapper}>
                        <Text style={[styles.label, { color: '#80c9d2' }]}>Địa điểm và thời gian</Text>
                        <Text style={styles.texttieude}>asdas</Text>
                    </View>
                    <View style={styles.wrapper}>
                        <Text style={[styles.label, { color: '#4b7319' }]}>Dịch vụ</Text>
                        <Text style={styles.texttieude}>asdas</Text>
                    </View>
                    <View style={styles.wrapper}>
                        <Text style={[styles.label, { color: '#26608e' }]}>Ngày thực hiện</Text>
                        <Text style={styles.texttieude}>asdas</Text>
                    </View>
                    <View style={styles.wrapper}>
                        <Text style={[styles.label, { color: '#26608e' }]}>Xét nghiệm gửi tới</Text>
                        <Text style={styles.texttieude}>asdas</Text>
                    </View>

                </View>
                <View style={styles.viewxacnhan}>
                    <Text style={styles.hoanthanh}>HOÀN THÀNH</Text>
                </View>

            </View>
        );
    }
}

