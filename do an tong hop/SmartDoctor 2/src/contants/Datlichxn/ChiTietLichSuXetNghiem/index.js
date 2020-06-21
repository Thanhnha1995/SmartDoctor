import React from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';

import { network } from "../../../config/Network";
import styles from ".styles/styles";
export default class ChiTietLichSuXetNghiem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    fetchData = async () => {
        const { navigation } = this.props;
        const { params } = this.props.navigation.state;
        const response = await fetch(`${network}/datlichxn/chitietlichsuxetnghiem.php?id=` + params.id);
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
                            source={require("../../Imgs/iconxacnhan.png")}
                        />
                        <View style={{ marginTop: 20, flex: 1 }}>
                            <Text style={{ color: "#fff", fontSize: 15 }}>
                                Dịch vụ của bạn
                    </Text>
                            <Text style={{ color: "#fff", fontSize: 15 }}>
                                Vui lòng đừng quên!
                    </Text>
                        </View>
                    </View>
                </View>
                <FlatList
                    style={{ flex: 1 }}
                    keyExtractor={(item) => String(item.Id)}
                    data={this.state.data}
                    renderItem={({ item }) =>

                        <View style={styles.viewthongtin}>
                            <View style={styles.wrapper}>
                                <Text style={[styles.label, { color: '#26608e' }]}>Số xác nhận</Text>
                                <Text style={styles.texttieude}>{item.mahdxn}</Text>
                            </View>
                            <View style={styles.wrapper}>
                                <Text style={[styles.label, { color: '#80c9d2' }]}>Địa điểm và thời gian</Text>
                                <Text style={styles.texttieude}>{item.diachi}</Text>
                                <Text style={styles.texttieude}>{item.ngay}</Text>
                                <Text style={styles.texttieude}>{item.thoigian}</Text>
                            </View>
                            <View style={styles.wrapper}>
                                <Text style={[styles.label, { color: '#4b7319' }]}>Các dịch vụ thưc hiện</Text>
                                <Text style={styles.texttieude}>{item.tendichvu}</Text>
                            </View>
                            <View style={styles.wrapper}>
                                <Text style={[styles.label, { color: '#26608e' }]}>Bác sĩ thực hiện</Text>
                                <Text style={styles.texttieude}>Nguyễn Thiện Thanh</Text>
                            </View>
                            <View style={styles.wrapper}>
                                <Text style={[styles.label, { color: '#26608e' }]}>Kết quả được gửi đến</Text>
                                <Text style={styles.texttieude}></Text>
                            </View>

                        </View>


                    }
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeMainScreen')} style={styles.viewxacnhan}>
                    <View>
                        <Text style={styles.hoanthanh}>QUAY VỀ</Text>
                    </View>
                </TouchableOpacity>


            </View>
        );
    }
}


