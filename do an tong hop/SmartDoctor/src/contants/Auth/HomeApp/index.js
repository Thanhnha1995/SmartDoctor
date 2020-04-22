import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import * as theme from '../../../common/Theme';
import { Lang } from "@Common";
import styles from "./styles";

export default class HomeApp extends React.Component {
  state = {
    DataDefault: [
      {
        id: '1',
        hinhanh: '../../../assets/Tintuc/tintuc.jpg',
        tentintuc: 'Người đi khám và điều trị Covid-19 được BHYT chi trả như thế nào?',
        Noidung: 'Bộ Y tế vừa ban hành quyết định bổ sung bệnh viêm đường hô hấp cấp do chủng mới của virus'

      }
    ]
  }

  async componentDidMount() {
    const DataDefault = await ajax.fetchUsers();
    this.setState({ DataDefault });
  }

  render() {

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
      >
        <View style={[styles.flex, styles.row, styles.header,]}>
          <View>
            <Text style={{ color: theme.colors.caption }}>{Lang.xinchao}</Text>
            <Text style={{ fontSize: theme.sizes.font * 2 }}>Nguyễn Trương Thanh Nhã
        </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('HoSoScreen')}>
              <Image style={styles.avatar} source={require('../../../assets/avatar/avatar.jpg')}
              />
            </TouchableOpacity>

          </View>
        </View>
        <View style={[styles.flex, styles.column, styles.recommended]}>
          <View
            style={[
              styles.row,
              styles.recommendedHeader
            ]}
          >
            <Text style={{ fontSize: theme.sizes.font * 1.4 }}>{Lang.hotro}</Text>
            <TouchableOpacity activeOpacity={0.5}>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.fullField}>

          <View style={styles.colMainLeft}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DanhSachCauHoi')}>

              <View
                colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                style={styles.boxMain}>
                <View
                  backgroundColor='#2283c5'
                  style={styles.highLightBoxMain}>
                  <FontAwesome
                    style={styles.iconchucnang}
                    name={'comments'} />
                  <Text style={styles.textchucnang}>{Lang.datcauhoi}</Text>

                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('ChonchucnangScreen')}>
              <View
                colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                style={styles.boxMain}>
                <View
                  backgroundColor='#fab540'
                  style={styles.highLightBoxMain}>
                  <FontAwesome
                    style={styles.iconchucnang}
                    name={'medkit'} />
                  <Text style={styles.textchucnang}> Đặt lịch</Text>
                </View>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.colMainRight}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DanhsachBacSi')}>
              <View
                colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                style={styles.boxMain}>
                <View
                  backgroundColor='#50cddf'
                  style={styles.highLightBoxMain}>
                  <FontAwesome
                    style={styles.iconchucnang}
                    name={'search'} />
                  <Text style={styles.textchucnang}> Tìm bác sĩ</Text>
                </View>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => this.props.navigation.navigate('DanhsachcauhoiScreen')}>

              <View
                colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                style={styles.boxMain}>
                <View
                  backgroundColor='#f17867'
                  style={styles.highLightBoxMain}>
                  <FontAwesome
                    style={styles.iconchucnang}
                    name={'user'} />
                  <Text style={styles.textchucnang}>Hồ sơ</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ alignSelf: 'center', fontSize: 20, marginBottom: 10 }}>Tin Tức</Text>

        <View style={[styles.tintuc]}>

          <FlatList
            keyExtractor={item => item.Id}
            style={styles.container}
            data={this.state.DataDefault}
            onEndReachedThreshold="-0.2"
            renderItem={({ item }) =>
              <TouchableOpacity
                delayPressIn={70}
                activeOpacity={0.8}
                onPress={() => this.props.navigation.navigate('ChiTietTinTuc')}
                // onPress={() => navigate('ChiTietTinTuc')}
                >

                <View activeOpacity={0.9}>
                  <ImageBackground
                    style={[styles.flex, styles.destination, styles.shadow]}
                    imageStyle={{ borderRadius: theme.sizes.radius }}
                    source={require('../../../assets/Tintuc/tintuc.jpg')}
                  />
                  <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
                    <Text numberOfLines={1} style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: 8, }}>
                      {item.tentintuc}
                    </Text>
                    <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
                      <View numberOfLines={2} style={{ color: theme.colors.caption }}>
                        <Text>{item.Noidung}</Text>

                      </View>
                      <FontAwesome
                        name="chevron-right"
                        size={theme.sizes.font * 0.75}
                        color={theme.colors.caption}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            } />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DanhSachTinTuc')}>
            <View style={styles.xemtatcacontainer}>

              <Text style={styles.xemtatca}> Xem tất cả</Text>
            </View>
          </TouchableOpacity>

        </View>

      </ScrollView>

    );
  }
}
