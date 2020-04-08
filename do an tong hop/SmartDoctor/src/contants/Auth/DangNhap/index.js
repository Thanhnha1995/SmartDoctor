import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import {Color, Images, Lang } from "@Common";
import Block from "../../../components/Block";
import Input from "../../../components/Input";
export default class DangNhap extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <Block center middle>
            <Block middle>
              <Image source={Images.logo} style={{ height: 80, width: 320 }} />
            </Block>
            <Block flex={2.5} center>
              <Text h3 style={{ marginBottom: 6 }}>
                {Lang.dangnhaps}
              </Text>
              <Text paragraph color="black3">
                {Lang.nhapthongtin}
              </Text>
              <Block center style={{ marginTop: 44 }}>
                <Input
                  full
                  inputType="email"
                  label={Lang.email}
                  style={{ marginBottom: 25 }}
                />
                <Input
                  full
                  inputType="matkhau"
                  label={Lang.matkhau}
                  style={{ marginBottom: 25 }}
                  // rightLabel={
                  //   <Text
                  //     paragraph
                  //     color="gray"
                  //     onPress={() => navigation.navigate("Forgot")}
                  //   >
                  //    {Lang.qmk}
                  //   </Text>
                  // }
                />
                <View style={styles.buttonWrapper}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("HomeApp")}
                  >
                    <Text style={styles.icon}>{Lang.dangnhap}</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("DangKy")}
                >
                  <Text paragraph color="gray">
                   {Lang.chuacotk}{" "}
                    <Text height={18} color={Color.green03}>
                     {Lang.dangkys}
                    </Text>
                  </Text>
                </TouchableOpacity>
              </Block>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
