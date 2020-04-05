import React, { Component } from 'react'
import { View, TextInput, Dimensions,  Animated, Easing } from 'react-native'
import { PropTypes } from 'prop-types';
import Text from '../Text';
import {Color} from '@Common';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get("window");

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: !(props.inputType === 'text' || props.inputType === 'email'|| props.inputType === 'sodienthoai'|| props.inputType === 'diachi' || props.inputType === 'hovaten'),
      scaleCheckmarkValue: new Animated.Value(0),
      inputValue: props.defaultValue,
    };
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  scaleCheckmark(value) {
    Animated.timing(
      this.state.scaleCheckmarkValue,
      {
        toValue: value,
        duration: 400,
        easing: Easing.easeOutBack,
      },
    ).start();
  }

  toggleShowPassword() {
    this.setState({ secureInput: !this.state.secureInput });
  }

  onChangeText(text) {
    this.props.onChangeText(text);
    this.setState({ inputValue: text });
  }
  render() {
    const { 
      label, 
      rightLabel, 
      full, 
      email, 
      phone, 
      address,
      number, 
      password, 
      showCheckmark,
      style, ...props } = this.props;
      const { secureInput, scaleCheckmarkValue,autoFocus, inputValue } = this.state;
      
      const iconScale = scaleCheckmarkValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0.01, 1.6, 1],
      });
      const scaleValue = showCheckmark ? 1 : 0;
    this.scaleCheckmark(scaleValue);
    const inputStyles = [
      styles.input,
      full && styles.full,
      style,
    ];

    const inputType = email
      ? 'email-address' :  email
      ? 'numeric' :  email
      ? 'phone-pad' : 'default';

    return (
      <View>
        <View style={styles.labelContainer}>
          <Text caption medium style={styles.label}>
            {label}
          </Text>
          {rightLabel}
        </View>
        <TextInput
          style={inputStyles}
          secureTextEntry={secureInput}
          onChangeText={this.onChangeText}
          autoFocus={autoFocus}
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          defaultValue={inputValue}
          keyboardType={inputType}
          value={inputValue} 
        />
        <Animated.View style={[{ transform: [{ scale: iconScale }] }, styles.checkmarkWrapper]}>
          <Icon
            name="check"
            color={Color.green01}
            size={20}
          />
        </Animated.View>
      </View>
    )
  }
}
Input.propTypes = {
  labelTextSize: PropTypes.number,
  labelColor: PropTypes.string,
  textColor: PropTypes.string,
  borderBottomColor: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
  onChangeText: PropTypes.func,
  autoFocus: PropTypes.bool,
  autoCapitalize: PropTypes.bool,
  labelTextWeight: PropTypes.string,
  inputStyle: PropTypes.object,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
};
