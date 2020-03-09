import React, { Component } from 'react';
import {View } from 'react-native';
import BlockStyles from './styles/BlockStyles';

export default class Block extends Component {
  render() {
    const { flex, row, center, middle, right, space, style, children, ...props } = this.props;
    const blockStyles = [
      BlockStyles.block,
      flex && { flex },
      flex === 'disabled' && { flex: 0 },
      center && BlockStyles.center,
      middle && BlockStyles.middle,
      right && BlockStyles.right,
      space && { justifyContent: `space-${space}` },
      row && BlockStyles.row,
      style,
    ];
    return (
      <View style={blockStyles} {...props}>
        {children}
      </View>
    )
  }
}
