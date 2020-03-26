import React, { Component } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'
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

import styles from "./stylesct";
export default class ChitTietBacSi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          tenbacsi: 'Thanh Nhã',
          tenchuyenkhoa: 'Răng hàm mặt',
          tenbenhvien: 'Bệnh viện răng hàm mặt',
          namkinhnghiem: '10',
          sobenhnhandagiup: '250',
          catuvan: '500',
          thongtin: 'Mong muốn được tư vấn và giúp đỡ các bệnh nhân',
          trinhdohocvan: 'Thạc sĩ Bác sĩ',
          bangcapchungchi: ''
        }
      ],
    };
  }
  render() {

    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) =>
            <View style={styles.container}>
              <View style={styles.thongtin}>
                <View>

                  <Image
                    style={styles.avatar}
                    source={require('../../../assets/Data/Demo.jpg')}
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
              <TouchableOpacity style={styles.btnketnoi} onPress={() => this.taophongchat()}>
                <View>
                  <Text style={styles.txtbtnketnoi}>KẾT NỐI</Text>
                </View>
              </TouchableOpacity>

            </View>


          }
        />
      </View>

    );
  }
}
