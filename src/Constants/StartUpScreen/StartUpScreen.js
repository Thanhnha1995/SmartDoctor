import React, {
  Component
} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  StatusBar
} from 'react-native';
// import thư viện common
import {Color, Images} from '@Common';
export default class StartUpScreen extends Component {
  render() {
    // set thời gian chờ màn hình
    setTimeout(
      () => {
        this.props.navigation.navigate('IntroScreen')
      }, 8000
    );

    return (
      <View style={{flex: 1, backgroundColor: Color.bg}}>
                   <StatusBar hidden />

        <View style={{alignSelf:'center'}}>
        <View style={{alignSelf:'center', marginTop: '50%'}}>
          <Image   
            source={Images.StartUpScreen}
            style={{width: 320, height: 80}}
          />
        </View>
      </View>
      </View>
      
    );
  }
}
