import React, { Component } from 'react'
import {  View } from 'react-native';
import styles from './styles';
export default class Block extends Component {
  render() {
    const { flex, row, center, middle, right, space, style, children, ...props } = this.props;
    const blockStyles = [
      styles.block,
      flex && { flex },
      flex === 'disabled' && { flex: 0 },
      center && styles.center,
      middle && styles.middle,
      right && styles.right,
      space && { justifyContent: `space-${space}` },
      row && styles.row,
      style,
    ];

    return (
      <View style={blockStyles} {...props}>
        {children}
      </View>
    )
  }
}