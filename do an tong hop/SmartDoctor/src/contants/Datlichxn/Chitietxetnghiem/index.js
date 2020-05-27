import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, StatusBar, FlatList, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import { network } from '../../../config/Network';
import numeral from 'numeral';
import styles from "./styles";
export default class ChitietxetnghiemScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chỉtietxenghiem: [],
            id:1
        }
    }
    fetchData = async () => {
        const { params } = this.props.navigation.state;
        const response = await fetch(`${network}/datlichxetnghiem/chitietxetnghiem.php?id=` + params.id);
        const details = await response.json();
        this.setState({ chỉtietxenghiem: details });
    };

    componentDidMount() {
        this.fetchData();
    }


    render() {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        const { navigation } = this.props;
        const iduser = navigation.getParam('iduser');
        const idbenhvien = navigation.getParam('idbenhvien');
        const diachibenhvien = navigation.getParam('diachibenhvien');
        const dienthoaibenhvien = navigation.getParam('dienthoaibenhvien');
        const tenbenhvien = navigation.getParam('tenbenhvien');
        return (
            <FlatList
                keyExtractor={(item) => String(item.Id)}
                data={this.state.chỉtietxenghiem}
                renderItem={({ item }) =>
                    <View style={styles.container}>

                        <View style={{ flex: 1 }}>

                            <View style={styles.thongtindichvu}>

                                <Card>
                                    <Text style={[styles.txttieude]}>Thông tin dịch vụ</Text>

                                    <Image
                                        style={styles.hinhanh}
                                        source={{ uri: `${network}/images/xetnghiem/` + item.hinhanh }}
                                    />
                                    <Text style={[styles.txttieude, { marginTop: 10 }]}>
                                        {item.tendichvu}
                                    </Text>
                                </Card>

                                <Card>
                                    <Text
                                        style={[
                                            styles.txttieude,
                                            { color: "#ff9800", fontWeight: "bold" }
                                        ]}
                                    >
                                        {" "}
             Tên khác cuả xét nghiệm này
           </Text>
                                    <Text style={[styles.txttieude, { marginTop: 10 }]}>
                                        {item.tenkhac}

                                    </Text>
                                </Card>
                                <Card>
                                    <Text
                                        style={[
                                            styles.txttieude,
                                            { fontWeight: "bold", color: "#00528e" }
                                        ]}
                                    >
                                        Mục tiêu của xét nghiệm này.
           </Text>
                                    <Text style={[styles.txttieude, { marginTop: 10 }]}>
                                        {item.muctieu}
                                    </Text>
                                </Card>

                                <Card>
                                    <Text
                                        style={[
                                            styles.txttieude,
                                            { fontWeight: "bold", color: "#54722c" }
                                        ]}
                                    >
                                        Dành cho đối tượng
           </Text>
                                    <Text style={[styles.txttieude, { marginTop: 10 }]}>
                                        {item.doituong}
                                    </Text>
                                </Card>

                                <Card>
                                    <Text
                                        style={[
                                            styles.txttieude,
                                            { fontWeight: "bold", color: "#ef9897" }
                                        ]}
                                    >
                                        Hướng dẫn chuẩn bị
           </Text>
                                    <Text style={[styles.txttieude, { marginTop: 10 }]}>
                                        {item.huongdan}
                                    </Text>
                                </Card>

                                <Card>
                                    <Text
                                        style={[
                                            styles.txttieude,
                                            { fontWeight: "bold", color: "#f1b85c" }
                                        ]}
                                    >
                                        Các xét nghiệm nằm trong bảng này
           </Text>
                                    <Text style={[styles.txttieude, { marginTop: 10 }]}>
                                        {item.chitiet}
                                    </Text>
                                </Card>

                            </View>

                        </View>
                        <View style={styles.thanhtoan}>
                            <View style={styles.viewgiatien}>

                                <Text style={styles.txtgiatien}>{


                                    numeral(item.giatien).format('1,234')
                                }

                 vnđ</Text>

                                <Text style={{ color: "#00528e", marginLeft: 20, marginTop: 5 }}>
                                    Giá dịch vụ
            </Text>
                            </View>
                            <TouchableOpacity
                                delayPressIn={70}
                                activeOpacity={0.8}
                                onPress={() => navigate('ChonlichScreen', {
                                    id: item.idxetnghiem,
                                    iduser,
                                    idbenhvien,
                                    iddv: item.iddichvu,
                                    giatien: item.giatien,
                                    tenxetnghiem: item.tendichvu,
                                    diachibenhvien,
                                    dienthoaibenhvien,
                                    tenbenhvien
                                })}>
                                <View style={styles.viewdatlich}>
                                    <Text style={styles.txtdatlich}>ĐẶT LỊCH</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                }
            />
        );
    }
}

