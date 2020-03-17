import React, { Component } from "react";
import { Image, Text, View, KeyboardAvoidingView ,TouchableOpacity } from "react-native";
import { Color, Images, Lang } from "@Common";
import Block from "../../Components/Block";
import Input from "../../Components/Input";
export default class DangNhapScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
      <KeyboardAvoidingView
     
       behavior="padding"
       style={{flex:1}}

     >
       <Block center middle>
         <Block middle>
         <Image
                source={Images.StartUpScreen}
                style={{ height: 80, width: 320 }}
              />
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

               rightLabel={
                 <Text
                   paragraph
                   color="gray"
                   onPress={() => navigation.navigate('Forgot')}
                   
                 >
                   Quên mật khẩu?
                 </Text>
               }
             />
         <View style={InputStyles.buttonWrapper}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('HomeApp')}
                  >
                    <Text style={InputStyles.icon}>{Lang.dangnhap}</Text>
                  </TouchableOpacity>
                </View>
         
         <TouchableOpacity
           onPress={() => this.props.navigation.navigate('DangKyScreen')}
         >
          <Text paragraph color="gray">
               Nếu bạn chưa có tài khoàn, nhấn? <Text
                 height={18}
                 color="#4abf92"
                 >
                 ĐĂNG KÝ 
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
