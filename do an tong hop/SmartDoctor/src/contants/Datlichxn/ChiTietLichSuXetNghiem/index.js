import React from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';
const { width } = Dimensions.get("window");
import { network } from "../../../config/Network";
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
const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
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
        flex: 1 / 8,
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
        marginTop: 15,
        fontSize: 15,
        color: '#fff',
        fontSize: 20
    }
});
