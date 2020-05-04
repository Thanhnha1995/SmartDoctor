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
    Modal,
    TouchableOpacity,
} from "react-native";
const { width } = Dimensions.get("window");
import { ListItem, SearchBar } from "react-native-elements";
import { network } from "../../../config/Network";
import numeral from 'numeral';
export default class Lichsuxetnghiem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    fetchData = async () => {
        const { navigation } = this.props;
        const { params } = this.props.navigation.state;
        const iduser = navigation.getParam('iduser');
        const response = await fetch(`${network}/datlichxn/licchsuxetnghiem.php?id=${iduser}`);
        const products = await response.json(); // products have array data
        this.setState({ data: products }); // filled data with dynamic array
    };
    componentDidMount() {
        this.fetchData();
    }
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <View style={styles.viewtimkiem}>
                    <SearchBar
                        containerStyle={styles.search}
                        placeholder="Nhập thông tin xét nghiệm cần tìm....."
                        lightTheme
                        round
                        onChangeText={text => this.searchFilterFunction(text)}
                        autoCorrect={false}
                    //value={this.state.value}
                    />
                </View>
                <View style={styles.viewdanhsach}>
                    <FlatList
                        keyExtractor={(item) => String(item.Id)}
                        data={this.state.data}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                delayPressIn={70}
                                activeOpacity={0.8}
                                onPress={() => navigate('ChiTietLichsxetnghiemScreen', { id: item.idhdxetnghiem })}>
                                <View style={styles.wrapper}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image
                                            style={styles.imageStyle}
                                            // source={require("../../Imgs/Blog/1.jpg")}
                                            source={{ uri: `${network}/images/xetnghiem/` + item.hinhanh }}
                                        />
                                        <Text style={styles.texttieude}>{item.tendichvu}</Text>
                                        <Text style={styles.texttieude}>{numeral(item.giatien).format('1,234')}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{ marginLeft: 100 }}>{item.ngay}</Text>
                                    </View>
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
        backgroundColor: "#f3fbff"
    },
    viewtimkiem: {
        flex: 1 / 10,
        backgroundColor: "#278efc"
    },
    viewdanhsach: {
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
        paddingTop: 0
    },
    imageStyle: {
        width: 100,
        height: 100
    },
    texttieude: {
        fontSize: 15,
        flex: 10,
        marginLeft: 10
    }
});
