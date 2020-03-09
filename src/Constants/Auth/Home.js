import React, { Component} from 'react';
import { Text, Platform, UIManager, TouchableOpacity } from "react-native";
import HomeStyles from '../Styles/Auth/HomeStyles';
import { Image, View } from 'react-native-animatable';
import {Color,Images,Lang} from '@Common';
if (Platform.OS === 'android') UIManager.setLayoutAnimationEnabledExperimental(true)
export default class HomeScreen extends Component {

  render () {
  
    return (
      <View style={HomeStyles.container}>
        <Image
          animation={'bounceIn'}
          duration={1200}
          delay={200}
          ref={(ref) => this.logoImgRef = ref}
          style={HomeStyles.logoImg}
          source={Images.StartUpScreen}
        />
      
          <View style={HomeStyles.login}>
          <View animation={'zoomIn'} delay={600} duration={400}>
          <TouchableOpacity  
          onPress={()=>{this.props.navigation.navigate('DangKyScreen')}}
          style={[HomeStyles.button, {backgroundColor:Color.bgxam}]}>
          <Text style={[HomeStyles.text]}>{Lang.dangky}</Text>

          </TouchableOpacity>

          </View>
          <View style={HomeStyles.separatorContainer} animation={'zoomIn'} delay={700} duration={400}>
          <View style={HomeStyles.separatorLine} />
          <Text style={HomeStyles.separatorOr}>{'Or'}</Text>
          <View style={HomeStyles.separatorLine} />
          </View>
          <View animation={'zoomIn'} delay={600} duration={400}>
          <TouchableOpacity  
           onPress={()=>{this.props.navigation.navigate('DangNhapScreen')}}
          style={[HomeStyles.button, {backgroundColor:Color.bgxanh}]}>
          <Text style={[HomeStyles.text]}>{Lang.dangnhap}</Text>

          </TouchableOpacity>

          </View>

          </View>
      </View>
    )
  }
}
