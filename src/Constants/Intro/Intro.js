import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import IntroStyles from '../Styles/IntroStyles';
import Home from '../Auth/Home';
const slides = [
  {
    key: 'support',
    image: require('../../Imgs/Intro/support.png'),
    title: 'Nhận phản hồi nhanh từ bác sĩ',
    text: 'Phản hồi nhanh chóng từ đội ngũ chuyên gia y tế',
    backgroundColor: '#20d2bb',
  },
  {
    key: 'doingu',
    title: 'Đội ngũ bác sĩ',
    text: 'Đội ngũ chuyên gia y tế nhiệt tình, quan tâm và thấu hiểu.',
    image: require('../../Imgs/Intro/doingu.png'),
    backgroundColor: '#3395ff',
  },
  {
    key: 's3',
    title: 'Hoàn toàn miễn phí',
    text: '',
    image: require('../../Imgs/Intro/chiphi.png'),
    backgroundColor: '#f6437b',
  },
];
export default class Intro extends React.Component {
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
    if (this.state.showRealApp) {
      return (
        <Home/>
      );
    } else {
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
          bottomButton
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
});

