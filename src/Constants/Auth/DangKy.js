import React, { Component } from "react";
import { Image, Text, View, ScrollView,TouchableOpacity } from "react-native";
import { Color, Images, Lang } from "@Common";
import Block from "../../Components/Block";
import Input from "../../Components/Input";
import { StatusBar } from "react-native";
export default class DangKyScreen extends Component {
  render() {
    return (
      
      
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Block center middle>
            <Block middle>
              <Image
                source={Images.StartUpScreen}
                style={{ height: 80, width: 320 }}
              />
            </Block>
            <Block flex={2.9} center>
              <Text h3 style={{ marginBottom: 3 }}>
                {Lang.dangky}
              </Text>
              <Text paragraph color="black3">
                {Lang.nhapthongtin}
              </Text>
              <Block center style={{ marginTop: 22 }}>
                <Input
                  full
                  inputType="hovaten"
                  label={Lang.hovaten}
                  style={{ marginBottom: 23 }}
                />

                <Input
                  full
                  inputType="email"
                  label={Lang.email}
                  style={{ marginBottom: 23 }}
                />
                <Input
                  full
                  inputType="matkhau"
                  label={Lang.matkhau}
                  style={{ marginBottom: 23 }}
                />
                <Input
                  full
                  inputType="sodienthoai"
                  label={Lang.dienthoai}
                  style={{ marginBottom: 23 }}
                />
                <Input
                  full
                  inputType="diachi"
                  label={Lang.dienchi}
                  style={{ marginBottom: 23 }}
                />
                <View style={InputStyles.buttonWrapper}>
                  <TouchableOpacity
                    //style={[{ opacity: opacityStyle }, InputStyles.button]}
                  >
                    <Text style={InputStyles.icon}>{Lang.dangkys}</Text>
                  </TouchableOpacity>
                </View>
              </Block>
            </Block>
          </Block>
        </ScrollView>
      </View>
    );
  }
}
