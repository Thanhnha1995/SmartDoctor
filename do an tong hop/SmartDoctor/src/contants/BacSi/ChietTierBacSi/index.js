import React, { Component } from "react";
import { FontAwesome } from '@expo/vector-icons';
import {network } from '../../../config/Network';
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'
import getToken from '../../../Api/Token/GetToken';
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
import { FirebaseApp } from "../../../config/Firebase";

import styles from "./styles";
export default class ChietTietBacSi extends Component {
  constructor(props) {
    super(props);
    //chat
    const { params } = this.props.navigation.state;
    const { navigation } = this.props;
    const iduser =params.iduser;
    const hovaten = navigation.getParam("hovaten");
    const ID = iduser;
    var firebaseDB = FirebaseApp.database();
    this.roomsRef = firebaseDB.ref(`rooms/${ID}`);
    this.roomsRefs = firebaseDB.ref(`rooms`);
    this.state = {
      rooms: [],
      newRoom: hovaten,
      selectedStartDate: null,
      chonngay:[],
      datecanlay:'2019-07-01',
    
      // cac thong tin truyen len server
      idnguoidung:'',
      idbacsi:'',
      data:[]
        };
  }
	fetchData = async() =>{
		const { params } = this.props.navigation.state;
    const response =  await fetch(`${network}/bacsi/chitietbacsi.php?id=`+params.id);
		const products = await response.json(); 
		this.setState({data: products});
  };
  listenForRooms(roomsRefs) {
    roomsRefs.on("value", dataSnapshot => {
      var roomsFB = [];
      dataSnapshot.forEach(child => {
        roomsFB.push({
          name: child.val().name,
          key: child.key,
        });
      });
      this.setState({ rooms: roomsFB });
    });
  }
  
	componentDidMount(){
    this.listenForRooms(this.roomsRefs);
		this.fetchData();
  }


  addRoom() {
    const { params } = this.props.navigation.state;
    const { navigation } = this.props;
    const iduser =params.iduser;
    const chucvu = params.chucvu;
    const hovaten = navigation.getParam("hovaten");
    this.roomsRef.push({ name: this.state.newRoom });
    this.setState({ newRoom: "" });
  }

  openMessages(room) {
    const { params } = this.props.navigation.state;
    const { navigation } = this.props;
    const iduser = navigation.getParam("iduser");
    const chucvu = params.chucvu;
    const hovaten = navigation.getParam("hovaten");
    this.props.navigation.navigate("Messages", {
      roomKey: room.key,
      roomName: room.name,
    });
  }
  openMessagess() {
    const { params } = this.props.navigation.state;
    const { navigation } = this.props;
    const iduser = navigation.getParam("iduser");
    const hovaten = navigation.getParam("hovaten");
    this.props.navigation.navigate("Messages", {
      roomKey: iduser,
      roomName: hovaten,
    });
  }
  muntil() {
    this.addRoom();
    this.openMessagess();
  }
  render() {

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
        source={{uri: `${network}/images/bacsi/`+item.hinhanh}}
        />
        </View>
           <View style={{flexDirection:'column'}}> 
          <View style={{flexDirection:'row'}}>
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
        <View style={{flexDirection:'row'}}>
        <FontAwesome 
           style={styles.icontxtthongtin}
           name={'user-md'} />
       <Text style={styles.txtthongtin}>Thông tin</Text>
        </View>

        <Text> {item.thongtin}</Text>
</Card>
   <Card>
        <View style={{flexDirection:'row'}}>
        <FontAwesome 
           style={styles.icontxtthongtin}
           name={'location-arrow'} />
       <Text style={styles.txtthongtin}>Nơi làm việc hiện tại</Text>
        </View>

        <Text>{item.tenbenhvien}</Text>
</Card>
   <Card>
        <View style={{flexDirection:'row'}}>
        <FontAwesome 
           style={styles.icontxtthongtin}
           name={'graduation-cap'} />
       <Text style={styles.txtthongtin}>Trình độ học vấn</Text>
        </View>

        <Text>{item.trinhdohocvan}</Text>
</Card>
   <Card>
        <View style={{flexDirection:'row'}}>
        <FontAwesome 
           style={styles.icontxtthongtin}
           name={'certificate'} />
       <Text style={[styles.txtthongtin, {color:'#eda635'}]}>Bằng chấp và chứng chỉ</Text>
        </View>

        <Text>{item.bangcapchungchi}</Text>
</Card>
        </View>
        <TouchableOpacity style={styles.btnketnoi}  onPress={() => this.openMessages(item)}>
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