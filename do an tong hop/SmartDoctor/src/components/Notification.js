import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../common/Color';
import { PropTypes } from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Easing,
  Animated,
} from 'react-native';
export default class Notification extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
      positionValue: new Animated.Value(-60),
  	};
  	this.closeNotification = this.closeNotification.bind(this);
  	this.animateNotification = this.animateNotification.bind(this);
  }
  animateNotification(value) {
  	const { positionValue } = this.state;
    Animated.timing(
      positionValue,
      {
        toValue: value,
        duration: 300,
        velocity: 3,
        tension: 2,
        friction: 8,
        easing: Easing.easeOutBack,
      },
    ).start();
  }

  closeNotification() {
    this.props.handleCloseNotification();
  }
  render() {
    const {
      type, firstLine,  showNotification,
    } = this.props;
    showNotification ? this.animateNotification(0) : this.animateNotification(-60);
  	const { positionValue } = this.state;
  	return (
         <Animated.View style={[{ marginBottom: positionValue }, styles.wrapper]}>
      <View style={styles.errorMessageContainer}>
        <View style={styles.errorMessage}>
          <Text style={styles.errorText}>
            {type}
          </Text>
          <Text style={{
            fontSize:15,
            marginTop:1,
            color:'#fff'
            }}>
            {firstLine}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={this.closeNotification}
      >
        <Icon
        style={{
          fontSize:15,
          marginBottom:120
        }}
          name="times"
          // size={25}
          color={Color.lightGray}
        />
      </TouchableOpacity>
    </Animated.View>
  	);
  }
}

Notification.propTypes = {
  showNotification: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  firstLine: PropTypes.string,
  secondLine: PropTypes.string,
  handleCloseNotification: PropTypes.func,
};


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor:'#d93900',
    height:60,
    width:'100%'
  },
  notificationContent: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  errorText: {
    color: '#fff',
    marginRight: 5,
    fontSize: 15,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  errorMessage: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 2,
    fontSize: 14,
  },
  errorMessageContainer: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 2,
  },
  closeButton: {
    position: 'absolute',
    right: 12,
    top: -2,
    zIndex: 999,
  },
});
