import React, { Component } from "react";
import { FontAwesome } from '@expo/vector-icons';
import Slideshow from 'react-native-image-slider-show';
import { network } from '../../../config/Network';
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'
import getToken from '../../../Api/Token/GetToken';
import styles from "./styles";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList
} from "react-native";
export default class Chitietdatlichtheobacsi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            chonngay: [],
            datecanlay: '2020-07-01',

            // cac thong tin truyen len server
            idnguoidung: '',
            idbacsi: '',
            data: []
        };
    }
    fetchData = async () => {
        const { params } = this.props.navigation.state;
        const response = await fetch(`${network}/bacsi/chitietbacsi.php?id=` + params.id);
        const products = await response.json();
        this.setState({ data: products });
    };
    componentDidMount() {
        this.fetchData();
    }
    render() {
        const { navigate } = this.props.navigation;
        const { navigation } = this.props;
        const { params } = this.props.navigation.state;
        const iduser = navigation.getParam('iduser');
        const idbenhvien = navigation.getParam('idbenhvien');
        const iddv = navigation.getParam('iddv');
        const giatien = navigation.getParam('giatien');
        const idbacsi = params.id;
        return (
            <View>
                <FlatList
                    keyExtractor={(item) => String(item.Mabacsi)}
                    data={this.state.data}
                    renderItem={({ item }) =>
                        <View style={styles.container}>
                            <View style={styles.thongtin}>
                                <View style={styles.avatar}>

                                    <Image
                                        style={styles.imgavatar}
                                        source={{ uri: `${network}/images/bacsi/` + item.hinhanh }}
                                    />
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <FontAwesome
                                            style={styles.iconbacsi}
                                            name={'user-md'} />
                                        <Text style={styles.txtbacsi}>Bác sĩ</Text>

                                    </View>
                                    <Text style={styles.tenbacsi}>{item.tenbacsi}</Text>
                                    <Text style={styles.phongban}>{item.tenchuyenkhoa}</Text>
                                </View>
                            </View>

                            <View style={styles.chitiet}>
                                <View style={styles.thongtinchitiet}>
                                    <Text style={styles.sonam}>{item.namkinhnghiem}</Text>
                                    <Text style={styles.txtnamkinhghiem}>Năm kinh nghiệm</Text>

                                </View>
                                <View style={styles.thongtinchitiet}>
                                    <Text style={styles.sonam}>{item.sobenhnhandagiup}</Text>
                                    <Text style={styles.txtnamkinhghiem}>Bệnh nhân trợ giúp</Text>
                                </View>
                                <View style={styles.thongtinchitiet}>
                                    <Text style={styles.sonam}>{item.catuvan}</Text>
                                    <Text style={styles.txtnamkinhghiem}>Ca tư vấn</Text>
                                </View>
                            </View>
                            <View style={styles.chitietnoidung}>
                                <Card>
                                    <View style={{ flexDirection: 'row' }}>
                                        <FontAwesome
                                            style={styles.icontxtthongtin}
                                            name={'user-md'} />
                                        <Text style={styles.txtthongtin}>Thông tin</Text>
                                    </View>

                                    <Text> {item.thongtin}</Text>
                                </Card>
                                <Card>
                                    <View style={{ flexDirection: 'row' }}>
                                        <FontAwesome
                                            style={styles.icontxtthongtin}
                                            name={'location-arrow'} />
                                        <Text style={styles.txtthongtin}>Nơi làm việc hiện tại</Text>
                                    </View>

                                    <Text>{item.tenbenhvien}</Text>
                                </Card>
                                <Card>
                                    <View style={{ flexDirection: 'row' }}>
                                        <FontAwesome
                                            style={styles.icontxtthongtin}
                                            name={'graduation-cap'} />
                                        <Text style={styles.txtthongtin}>Trình độ học vấn</Text>
                                    </View>

                                    <Text>{item.trinhdohocvan}</Text>
                                </Card>
                                <Card>
                                    <View style={{ flexDirection: 'row' }}>
                                        <FontAwesome
                                            style={styles.icontxtthongtin}
                                            name={'certificate'} />
                                        <Text style={[styles.txtthongtin, { color: '#eda635' }]}>Bằng chấp và chứng chỉ</Text>
                                    </View>

                                    <Text>{item.bangcapchungchi}</Text>
                                </Card>
                            </View>
                            <TouchableOpacity style={styles.btnketnoi} onPress={() => this.props.navigation.navigate('ChonlichtheobacsiScreen', {
                                idbenhvien,
                                idbacsi,
                                iduser,
                                iddv,
                                giatien
                            })}>
                                <View>
                                    <Text style={styles.txtbtnketnoi}>CHỌN LỊCH</Text>
                                </View>
                            </TouchableOpacity>

                        </View>


                    }
                />
            </View>

        );
    }
}

