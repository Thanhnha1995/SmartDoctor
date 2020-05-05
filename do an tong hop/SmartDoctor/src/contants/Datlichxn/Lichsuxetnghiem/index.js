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

import { ListItem, SearchBar } from "react-native-elements";
import { network } from "../../../config/Network";
import numeral from 'numeral';
import styles from "./styles";
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

