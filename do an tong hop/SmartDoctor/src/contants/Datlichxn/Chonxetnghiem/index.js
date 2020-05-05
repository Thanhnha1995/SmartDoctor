import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
import { CirclesLoader, PulseLoader, TextLoader, DotsLoader, RippleLoader } from 'react-native-indicator';
import { ListItem, SearchBar } from 'react-native-elements';

import { network } from '../../../config/Network';
import styles from ".styles/styles";
export default class Chonxetnghiem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            danhmuc: [],
            id: '',
            dataxetnghiemtheochuyenmuc: [],
            error: null,
            isLoading: true,

        };

        this.arrayholder = [];
    }
    _onPressButton(item) {
        this.setState({
            id: this.state.id = item.iddanhmuc,

        });

    }
    // lay xet nghiem theo danh muc

    fetchDataXetNghiem = async (item) => {
        const response = await fetch(`${network}/datlichxetnghiem/xetnghiemtheodanhmuc.php?id=${this.state.id}`);
        const xetnghiem = await response.json();
        this.setState({

            dataxetnghiemtheochuyenmuc: xetnghiem
        });
    };
    searchFilterFunction = text => {
        this.setState({
            value: text
        });

        const newData = this.state.dataxetnghiemtheochuyenmuc.filter(item => {
            const itemData = `${item.tenbenhvien.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData
        });
    };


    renderHeader = () => {
        return (
            <SearchBar
                placeholder="Type Here..."
                lightTheme
                round
                onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false}
                value={this.state.value}
            />
        );
    };


    // api lay du lieu danh muc theo benh vien 
    fetchData = async () => {
        const { params } = this.props.navigation.state;
        const response = await fetch(`${network}/datlichxetnghiem/danhmuctheobenhvien.php?id=` + params.idbenhvien);
        const dsdanhmuc = await response.json();
        this.setState({
            isLoading: false,
            danhmuc: dsdanhmuc
        });
    };
    // load du lieu
    componentDidMount() {
        this.fetchData();
        this.fetchDataXetNghiem();
    }

    componentDidUpdate() {
        this.fetchDataXetNghiem();
    }
    render() {
        const { navigate } = this.props.navigation;
        const { navigation } = this.props;
        const iduser = navigation.getParam('iduser');
        const idbenhvien = navigation.getParam('idbenhvien');
        const diachibenhvien = navigation.getParam('diachibenhvien');
        const dienthoaibenhvien = navigation.getParam('dienthoaibenhvien');
        const tenbenhvien = navigation.getParam('tenbenhvien');
        return (

            <View style={styles.container}>
                <StatusBar hidden />

                <View style={styles.timkiem}>
                    <SearchBar
                        containerStyle={styles.search}
                        placeholder="Nhập tên xét nghiệm"
                        lightTheme
                        round
                        onChangeText={text => this.searchFilterFunction(text)}
                        autoCorrect={false}
                        value={this.state.value}
                    />
                    <FlatList
                        horizontal
                        keyExtractor={(item) => String(item.Id)}
                        data={this.state.danhmuc}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => this._onPressButton(item)} key={item.iddanhmuc}>
                                <View style={styles.button} key={item.iddanhmuc}>
                                    <Text style={styles.txtchuyenkhoa}>{item.tendanhmuc}</Text>
                                </View>
                            </TouchableOpacity>

                        }
                    />
                </View>
                <View style={styles.noidung}>

                    <FlatList
                        keyExtractor={item => item.id}
                        style={styles.container}
                        data={this.state.dataxetnghiemtheochuyenmuc}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                delayPressIn={70}
                                activeOpacity={0.8}
                                onPress={() => navigate('ChitietxetnghiemScreen', { id: item.iddichvu, iduser, idbenhvien, diachibenhvien, dienthoaibenhvien, tenbenhvien })}
                            >

                                <View style={styles.wrapper}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={{ uri: `${network}/images/xetnghiem/` + item.hinhanh }}
                                    />

                                    <Text style={styles.texttieude}>
                                        {item.tendichvu}


                                    </Text>

                                </View>
                            </TouchableOpacity>
                        }

                    />


                </View>
            </View>

        );
    }
}
