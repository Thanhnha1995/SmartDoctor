import React, { Component } from "react";
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
    TouchableOpacity
} from "react-native";
import { CirclesLoader, PulseLoader, TextLoader, DotsLoader, RippleLoader } from 'react-native-indicator';
const { width } = Dimensions.get("window");
import { ListItem, SearchBar } from "react-native-elements";
import { network } from "../../../config/Network";
// hien thi modal
import Modal from "react-native-simple-modal";
import { ScrollView } from "react-native-gesture-handler";
export default class Chonbenhvien extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            error: null,
            open: false,
            chitietbenhvien: [],
            id: '',
            isLoading: true,

        };
        this.arrayholder = [];
    }
    // lấy dũ liệu data chi tiết
    fetchDataChitiet = async item => {
        const response = await fetch(
            `${network}/datlichxetnghiem/chitietbenhvien.php?id=${
            this.state.id
            }`
        );
        const details = await response.json();
        this.setState({ chitietbenhvien: details });
    };
    openModal(item) {

        this.setState({
            open: true,
            id: (this.state.id = item.idbenhvien)
        });
    }

    modalDidClose = () => {
        this.setState({ open: false });
    };
    closeModal = () => this.setState({ open: false });

    componentDidMount() {
        this.makeRemoteRequest();
        this.fetchDataChitiet();
    }
    componentDidUpdate() {
        this.fetchDataChitiet();
    }

    makeRemoteRequest = () => {
        const url = `${network}/datlichxetnghiem/danhsachbenhvien.php`;
        this.setState({ loading: false });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    isLoading: false,
                    data: res,
                    error: res.error || null,
                    loading: false
                });
                this.arrayholder = res;
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };
    searchFilterFunction = text => {
        this.setState({
            value: text
        });

        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.tenbenhvien.toUpperCase()} ${item.diachi.toUpperCase()}`;
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

    render() {
        const { navigate } = this.props.navigation;
        const { navigation } = this.props;
        const iduser = navigation.getParam('iduser');
        return (
            this.state.isLoading
                ?
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: "75%" }}>
                    <RippleLoader />
                    <TextLoader text="Loading" />
                </View>

                :
                <View style={styles.container}>
                    <StatusBar hidden />

                    <View style={styles.viewtimkiem}>
                        <SearchBar
                            containerStyle={styles.search}
                            placeholder="Nhập tên bênh viện cần tìm"
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
                                    onPress={() =>
                                        navigate("ChonxetnghiemScreen", {
                                            idbenhvien: item.idbenhvien,
                                            iduser,
                                            diachibenhvien: item.diachi,
                                            dienthoaibenhvien: item.dienthoai,
                                            tenbenhvien: item.tenbenhvien
                                        })
                                    }
                                >
                                    <View style={styles.wrapper}>
                                        <Image
                                            style={styles.imageStyle}
                                            source={{
                                                uri: `${network}/images/benhvien/` + item.hinhanh
                                            }}
                                        />
                                        <View style={{ flexDirection: "column", flex: 1 }}>
                                            <Text style={styles.texttieude}>{item.tenbenhvien}</Text>
                                            <Text style={styles.textdiachi}>{item.diachi}</Text>
                                            <TouchableOpacity
                                                onPress={() => this.openModal(item)}
                                                key={item.idbenhvien}
                                            >
                                                <View style={styles.buttonthongitnbenhvien}>
                                                    <Text
                                                        style={{
                                                            fontSize: 15,
                                                            color: "#fff",
                                                            alignSelf: "center",
                                                            fontWeight: "bold",
                                                            marginTop: 5
                                                        }}
                                                    >
                                                        Thông tin bệnh viện
                        </Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item.idbenhvien}
                            ItemSeparatorComponent={this.renderSeparator}
                        />
                    </View>
                    <Modal
                        offset={this.state.offset}
                        open={this.state.open}
                        modalDidOpen={this.modalDidOpen}
                        modalDidClose={this.modalDidClose}
                        modalStyle={{
                            borderRadius: 2,
                            flex: 1
                        }}
                    >
                        <FlatList
                            keyExtractor={item => String(item.idbenhvien)}
                            data={this.state.chitietbenhvien}
                            renderItem={({ item }) => (
                                <View style={{ flex: 1 }}>
                                    <View style={styles.modalheader}>
                                        <Text style={styles.txtheader}>THÔNG TIN BÊNH VIỆN</Text>
                                    </View>
                                    <View
                                        style={{
                                            flex: 1 / 4,
                                            backgroundColor: "#278efc",
                                            flexDirection: "row"
                                        }}
                                    >
                                        <Image
                                            style={{
                                                width: 75,
                                                height: 75,
                                                marginLeft: 10,
                                                marginTop: 10
                                            }}
                                            source={{
                                                uri: `${network}/images/benhvien/` + item.hinhanh
                                            }}
                                        />
                                        <View style={{ flexDirection: "column" }}>
                                            <Text
                                                style={{ fontSize: 15, marginTop: 10, marginLeft: 10 }}
                                            >
                                                {item.tenbenhvien}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    marginTop: 30,
                                                    marginLeft: 10,
                                                    flex: 1
                                                }}
                                            >
                                                Điện thoại:{item.dienthoai}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1, marginTop: 10 }}>
                                        <Text style={{ fontSize: 20, marginTop: 10 }}>
                                            Giới thiệu
                  </Text>

                                        <View style={styles.viewgioithieu}>
                                            <Text>{item.gioithieu}</Text>
                                        </View>
                                        <Text style={{ fontSize: 20, marginTop: 10 }}>Thông tin</Text>
                                        <View style={styles.viewthongtin}>
                                            <Text>{item.diachi}</Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                        <TouchableOpacity style={{ flex: 1 / 4, backgroundColor: "#47aedf" }}
                            onPress={this.closeModal}
                        >


                            <View>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        marginTop: 10,
                                        fontWeight: "bold",
                                        color: "#fff",
                                        alignSelf: "center"
                                    }}
                                >
                                    THOÁT
            </Text>


                            </View>
                        </TouchableOpacity>
                    </Modal>
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
        backgroundColor: "#278efc"
    },
    viewnoidung: {
        flex: 1
    },

    search: {
        backgroundColor: "#278efc",
        borderBottomColor: "#278efc",
        borderTopColor: "#278efc"
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
        flexDirection: "row"
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
    modalbenhvien: {
        flex: 1 / 4,
        backgroundColor: "blue"
    },
    modalheader: {
        //width: width - 10,
        backgroundColor: "#FFF",
        margin: 10,
        shadowColor: "#2E272B",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        flexDirection: "row"
    },
    txtheader: {
        alignSelf: "center"
    },
    viewthongtin: {
        width: width - 20,
        backgroundColor: "#FFF",
        margin: 10,
        shadowColor: "#2E272B",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        flexDirection: "row"
    },
    viewgioithieu: {
        backgroundColor: "#FFF",
        margin: 10,
        shadowColor: "#2E272B",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        flexDirection: "row"
    },
    buttonthongitnbenhvien: {
        width: 150,
        height: 30,
        alignSelf: "flex-end",
        marginBottom: 20,
        backgroundColor: "#47aedf",
        borderRadius: 20
    }
});
