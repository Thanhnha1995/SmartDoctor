import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    Animated,
    Modal,
    TouchableOpacity
} from 'react-native';
const { width } = Dimensions.get("window");
import { ListItem, SearchBar } from 'react-native-elements';
import { network } from '../../../config/Network';

export default class DsDatlichtheobacsi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            error: null,
        };

        this.arrayholder = [];
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        const { navigation } = this.props;
        const iddv = navigation.getParam('iddv');

        const response = await fetch(`${network}/datlichxntheobacsi/bacsitheochuyenkhoa.php?iddichvu="${iddv}"`);
        const products = await response.json(); // products have array data
        this.setState({ data: products }); // filled data with dynamic array
    };
    searchFilterFunction = text => {
        this.setState({
            value: text,
        });

        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.tenbenhvien.toUpperCase()} ${item.tenbacsi.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData,
        });
    };
    renderHeader = () => {
        return (
            <SearchBar
                placeholder="Type Here..`."
                lightTheme
                round
                onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false}
                value={this.state.value}
            />
        );
    };

    render() {
        const { navigate } = this.props.navigation;
        const { navigation } = this.props;
        const iduser = navigation.getParam('iduser');
        const idbenhvien = navigation.getParam('idbenhvien');
        const iddv = navigation.getParam('iddv');
        const giatien = navigation.getParam('giatien');
        return (

            <View style={styles.container}>
                <StatusBar hidden />
                <View style={styles.viewtimkiem}>
                    <SearchBar
                        containerStyle={styles.search}
                        placeholder="Nhập thông tin bác sĩ cần tìm....."
                        lightTheme
                        round
                        onChangeText={text => this.searchFilterFunction(text)}
                        autoCorrect={false}
                        value={this.state.value}
                    />

                </View>
                <View style={styles.viewnoidung}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                delayPressIn={70}
                                activeOpacity={0.8}
                                onPress={() => navigate('ChitietdatlichtheobacsiScreen', {
                                    id: item.idbacsi,
                                    iddv,
                                    idbenhvien,
                                    iduser,
                                    giatien

                                })}>
                                <View style={styles.thongtinbacsi}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.avatar}>
                                            <Image
                                                style={styles.imgavatar}
                                                source={{ uri: `${network}/images/bacsi/` + item.hinhanh }}
                                            />

                                        </View>
                                        <View>
                                            <Text style={styles.txtbacsi}>Bác sĩ</Text>
                                            <Text style={styles.hovaten}>{item.tenbacsi}</Text>
                                            <Text style={styles.chuyenkhoa}>{item.tenchuyenkhoa}</Text>
                                            <Text style={styles.chuyenkhoa}>{item.tenbenhvien}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tkbenhnhan}>


                                        <Text style={styles.txttktuycan}>Số bệnh nhân tư vấn:{item.catuvan}</Text>

                                    </View>
                                </View>

                            </TouchableOpacity>

                        )}
                        keyExtractor={item => item.idbenhvien}
                        ItemSeparatorComponent={this.renderSeparator}

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
    viewtimkiem: {
        flex: 1 / 10,
        backgroundColor: '#278efc'
    },
    viewnoidung: {
        flex: 1,
    },

    search: {
        backgroundColor: '#278efc',
        borderBottomColor: '#278efc',
        borderTopColor: '#278efc',

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
        marginTop: 10,
        height: 90,
        width: 90
    },
    texttieude: {
        marginTop: 10,
        fontSize: 15,
        marginLeft: 10
    },
    textdiachi: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 15
    },
    timkiemcontainer: {
        flex: 20,

    },
    timkiemthongtincontainer: {
        flex: 13,
        flexDirection: 'row',
        // backgroundColor:'red'
    },
    ttbacsicontainer: {
        flex: 90,
    },
    searchbar: {
        marginTop: 30,
        alignSelf: 'center',
        width: '100%',
        height: 80,
        // backgroundColor:'blue'
    },
    dropdown: {
        marginTop: 10,
        flex: 1 / 2,
        // marginLeft: 10,
        // marginRight: 10,
        // width:25,
        // height:50,
        // borderWidth:2,
        // borderColor: '#496b7d',
        // borderRadius:4

    },
    textdropdown: {
        // alignSelf:'center',
        fontSize: 20,
        marginBottom: 10,
        flex: 1 / 9
    },
    thongtinbacsi: {
        marginTop: 10,
        marginLeft: 10,
        width: '95%',
        height: 150,
        backgroundColor: '#ffff',
        justifyContent: 'space-around',
    },
    avatar: {
        marginTop: 10,
        marginBottom: 20,
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#f3fbff',
        marginLeft: 20,
    },
    imgavatar: {
        alignSelf: 'center',
        marginTop: 20,
        width: 50,
        height: 50
    },
    txtbacsi: {
        marginTop: 10,
        fontSize: 20,
        color: '#496b7d',
        fontWeight: 'bold'
    },
    hovaten: {
        fontWeight: 'bold',
        fontSize: 20
    },
    chuyenkhoa: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 15,
        color: 'gray'
    },
    tkbenhnhan: {
        width: '100%',
        height: 30,
        backgroundColor: '#e7e1e1'
    },
    txttktuycan: {
        marginTop: 5,
        alignSelf: 'flex-end',
        marginRight: 30,
        color: '#496b7d',
    }


});
