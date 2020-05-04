import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
import { CirclesLoader, PulseLoader, TextLoader, DotsLoader, RippleLoader } from 'react-native-indicator';
import { ListItem, SearchBar } from 'react-native-elements';
const { width } = Dimensions.get("window");
import { network } from '../../../config/Network';
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
const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f6f6"
    },
    timkiem: {
        flex: 1 / 4,
        backgroundColor: '#278efc'
    },
    noidung: {
        flex: 1
    },
    search: {
        marginTop: 20,
        backgroundColor: '#278efc',
        borderBottomColor: '#278efc',
        borderTopColor: '#278efc',
    },
    txtdanhmuc: {
        marginTop: 10
    },
    button: {

        marginLeft: 20,
        width: 100,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#4abed3'
    },
    txtchuyenkhoa: {
        marginTop: 10,
        flex: 1,
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        color: '#fff'
    },
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        flexDirection: 'row'
    },
    imageStyle: {
        height: 100,
        width: 100
    },
});