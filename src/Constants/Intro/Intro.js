import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import IntroStyles from '../Styles/IntroStyles';
import HomeScreen from '../Auth/Home';
import {Color, Images,Lang} from '@Common';

const slides = [
  {
    key: 'support',
    image: require('../../Imgs/Intro/support.png'),
    title: Lang.tieudehotro,
    text: Lang.noidunghotro,
    backgroundColor: Color.bghotro,
  },
  {
    key: 'doingu',
    title: Lang.noidungdoingu,
    text: Lang.noidungdoingu,
    image: require('../../Imgs/Intro/doingu.png'),
    backgroundColor:Color.bgdoigu,
  },
  {
    key: 'chiphi',
    title: Lang.tieudechiphi,
    text: '',
    image: require('../../Imgs/Intro/chiphi.png'),
    backgroundColor: Color.bgchiphi,
  },
];
export default class IntroSceen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
  };
  _renderItem = ({ item }) => {
    return (
      <View
    style={[
        IntroStyles.mainContent,
        {
          backgroundColor: item.backgroundColor,
        },
      ]}>
        <Text style={IntroStyles.title}>{item.title}</Text>
        <Image style={IntroStyles.image} source={item.image} />
        <Text style={IntroStyles.text}>{item.text}</Text>
      </View>
    );
  };
  render() {
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={() => this.props.navigation.navigate('HomeScreen')}       
          bottomButton
        />
      );
    }
  }
