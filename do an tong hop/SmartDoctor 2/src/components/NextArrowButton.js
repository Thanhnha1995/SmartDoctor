import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,TouchableOpacity
  
} from 'react-native';
import Color from '../common/Color';
import iPhoneSize from '../components/utils';

const size = iPhoneSize();
const buttonSize = 60;
const buttonWrapperPadding = 0;

if (size === 'small') {
  buttonSize = 50;
  buttonWrapperPadding = 20;
}
 
export default class NextArrowButton extends Component {
  render() {
  	const { disabled, handleNextButton, label } = this.props;
  	const opacityStyle = disabled ? 0.2 : 0.6;
    return (
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[{ opacity: opacityStyle }, styles.button]}
          onPress={handleNextButton}
          disabled={disabled}
        >
          <Text style={styles.icon}>
            {label}
          </Text>
           
        </TouchableOpacity>
      </View>
    );
  }
}

NextArrowButton.propTypes = {
  label:PropTypes.string,
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func,
};

const styles = StyleSheet.create({
  buttonWrapper: {
   
    alignItems: 'flex-end',
    right: 20,
    bottom: 20,
    paddingTop: buttonWrapperPadding,
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
    marginLeft: 30,
    width:370,
    height:50,
    backgroundColor: '#4abf91',
  },
  icon: {
    marginRight: -2,
    marginTop: -2,
    fontSize: 20,
    color:'#ffff'
  },
});
