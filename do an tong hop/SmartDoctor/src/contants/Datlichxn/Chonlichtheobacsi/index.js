import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Dimensions,
    StyleSheet,
    FlatList
} from "react-native";

import CalendarPicker from 'react-native-calendar-picker';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import getToken from '../../../Api/Token/GetToken';
import Datlichxn from '../../Api/Datlichxn/Datlichxn';
import Modal from "react-native-simple-modal";
import { FontAwesome } from '@expo/vector-icons';
import { network } from "../../../config/Network";
import styles from ".styles/styles";
// data ngay

export default class Chonlichtheobacsi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
            chonngay: [],
            datecanlay: '2019-07-01',

            // cac thong tin truyen len server
            idnguoidung: '',
            iddichvu: '',
            ngay: '',
            giatien: '',
            idca: '',
            mahdxn: '',
            idbacsi: '',
            giatri: 1,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }
    modalDidOpen = () => console.log("Modal did open.");

    modalDidClose = () => {
        this.setState({ open: false });
        console.log("Modal did close.");
    };

    moveUp = () => this.setState({ offset: -100 });

    resetPosition = () => this.setState({ offset: 0 });

    openModal = () => this.setState({ open: true });

    closeModal = () => this.setState({ open: false });


    fetchDataXetNghiems = async (item) => {
        const response = await fetch(`${network}/datlichxn/capnhatsoluong.php?id=${this.state.value}`);
        const xetnghiem = await response.json();
        // this.setState({dataxetnghiemtheochuyenmuc: xetnghiem});
    };


    async datlichxetnghiem() {
        // const{idnguoidung,iddichvu,ngay,giatien,idca,mahdxn}=this.state;
        const { navigation } = this.props;
        const { params } = this.props.navigation.state;
        const iduser = navigation.getParam('iduser');
        const iddv = params.iddv;
        const gt = params.giatien;
        const idbenhvien = navigation.getParam('idbenhvien');
        const idbacsi = navigation.getParam('idbacsi');
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.format('YYYY-MM-DD') : '';
        const giatien = params.giatien;
        const token = await getToken();

        //mahdxn
        var RandomNumber = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.setState({
            mahdxn: RandomNumber
        })
        fetch(`${network}/datlichxntheobacsi/datlichxn.php`, {

            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token,
                idnguoidung: iduser,
                iddichvu: iddv,
                ngay: startDate,
                giatien: gt,
                idca: this.state.value,
                mahdxn: this.state.mahdxn,
                idbenhvien: idbenhvien,
                idbacsi: idbacsi
            }),
        });
    }





    onDateChange(date, startDate) {
        this.setState({
            selectedStartDate: date,
            datecanlay: this.state.datecanlay = startDate
        });
    }
    // thoi gian theo ngay da chon
    fetchDataXetNghiem = async () => {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.format('YYYY-MM-DD') : '';
        const { navigation } = this.props;
        const { params } = this.props.navigation.state;
        const iduser = navigation.getParam('iduser');
        const idbacsi = navigation.getParam('idbacsi');
        const iddv = navigation.getParam('iddv');
        const idbenhvien = navigation.getParam('idbenhvien');
        const response = await fetch(`${network}/datlichxntheobacsi/chonthoigian.php?ngay="${startDate}"&iddichvu="${iddv}"&idbacsi="${idbacsi}"`);
        const datlichs = await response.json();
        console.log(datlichs)
        this.setState({
            chonngay: datlichs

        });


    };

    chuyentrang() {
        this.datlichxetnghiem();

        this.props.navigation.navigate('HomeMainScreen')
    }



    componentDidUpdate() {

        this.fetchDataXetNghiem();
    }

    getdatalich(startDate) {
        this.setState({
            datecanlay: this.state.datecanlay = startDate,
        })
        console.log(datecanlay)
    }
    render() {
        const radio_props = this.state.chonngay;
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.format('YYYY-MM-DD') : '';
        const { navigation } = this.props;
        const { params } = this.props.navigation.state;
        const iduser = navigation.getParam('iduser');
        const iddv = params.iddv;
        const idbenhvien = navigation.getParam('idbenhvien');

        const BLUE = "#2196F3";
        const WHITE = "#FFFFFF";
        const GREY = "#BDBDBD";
        const BLACK = "#424242";
        const LIGHT_GREY = "#F5F5F5";

        return (



            <View style={styles.container}>
                <View style={styles.viewchonlich}>
                    <Text style={styles.txtlich}>Chọn lịch</Text>
                    <View style={styles.wrapper}>
                        <CalendarPicker
                            weekdays={['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']}
                            months={['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']}
                            onDateChange={this.onDateChange}
                        />
                    </View>
                </View>

                <View style={styles.viewchonthoigian}>
                    <Text style={styles.txtlich}>Chọn lịch</Text>
                    <View style={styles.wapperthoigian}>
                        <ScrollView>
                            <RadioForm
                                radio_props={radio_props}
                                initial={0}
                                onPress={(value) => { this.setState({ value: value }) }}
                            />
                        </ScrollView>

                    </View>
                </View>


                <TouchableOpacity style={styles.viewxacnhan} onPress={() => this.chuyentrang()}>
                    <View>
                        <Text style={styles.btndatlich}>ĐẶT LỊCH</Text>
                        <Text>{this.state.idnguoidung}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

