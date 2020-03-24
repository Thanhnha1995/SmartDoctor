"use strict";
import React, { Component } from "react";
import {
  Text,
  TextInput,
  TouchableHighlight,
  StatusBar,
  ListView,
  FlatList,
  View,
  Image,
} from "react-native";
import { FirebaseApp } from "../../config/Firebase";
import Block from "../../components/Block";

import styles from "./styles";

export default class Rooms extends Component {
  static navigationOptions = {
    title: "Rooms",
    header: null,
  };

  constructor(props) {
    super(props);
    const { params } = this.props.navigation.state;
    const { navigation } = this.props;
    const iduser = navigation.getParam("iduser");
    const chucvu = params.chucvu;
    const hovaten = navigation.getParam("hovaten");

    const ID = iduser;
    var firebaseDB = FirebaseApp.database();
    this.roomsRef = firebaseDB.ref(`rooms/${ID}`);
    this.roomsRefs = firebaseDB.ref(`rooms`);
    this.state = {
      rooms: [],
      newRoom: hovaten,
    };
  }

  componentDidMount() {
    this.listenForRooms(this.roomsRefs);
  }

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

  addRoom() {
    const { params } = this.props.navigation.state;
    const { navigation } = this.props;
    const iduser = navigation.getParam("iduser");
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
    const chucvu = params.chucvu;
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
  renderRow(item) {
    return (
      <TouchableHighlight
        style={styles.roomLi}
        underlayColor="#fff"
        onPress={() => this.openMessages(item)}
      >
        <Text style={styles.roomLiText}>{item.key}</Text>
      </TouchableHighlight>
    );
  }
  render() {
    const { params } = this.props.navigation.state;
    const { navigation } = this.props;
    const chucvu = params.chucvu;
    const hovaten = params.hovaten;
    if (chucvu == "nguoidung") {
      return (
        <View style={styles.roomsContainer}>
          <Image
            source={require("../../Imgs/Logo/logo.png")}
            style={{ height: 80, width: 320 ,marginTop:100 }}
          />
          <Text style={styles.txt}> Vui lòng nhấn bắt đầu để được hỗ trợ trực tiếp </Text>
          <View >
            <TouchableHighlight
              style={styles.button}
              
              onPress={() => this.muntil()}
            >
              <Text style={styles.txtbtn}>Bắt Đầu</Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.roomsContainer}>
        <Image
          source={require("../../Imgs/Logo/logo.png")}
          style={{ height: 80, width: 320 ,marginTop:100 }}
        />
        <Text style={styles.txt}> Danh sách người dùng đang liên hệ </Text>
        <View style={styles.roomsListContainer}>

          <FlatList
            data={this.state.rooms}
            renderItem={({ item }) => this.renderRow(item)}
          />
        </View>
        </View>
      );
    }
  }
}


