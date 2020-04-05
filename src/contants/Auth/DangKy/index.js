import React, { Component } from "react";
import { Image, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Images, Lang } from "@Common";
import Block from "../../../components/Block";
import Input from "../../../components/Input";
export default class DangKy extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Block center middle>
            <Block middle>
              <Image source={Images.logo} style={{ height: 80, width: 320 }} />
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
                <View style={styles.buttonWrapper}>
                  <TouchableOpacity
                  //style={[{ opacity: opacityStyle }, InputStyles.button]}
                  >
                    <Text style={styles.icon}>{Lang.dangkys}</Text>
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
