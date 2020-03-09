import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import * as Theme from '../Common/Theme';

export default class Typography extends Component {
  render() {
    const {
      center,
      right,
      color,
      size,
      height,
      weight,
      spacing,
      h1,
      h2,
      h3,
      h4,
      paragraph,
      caption,
      medium,
      bold,
      light,
      italic,
      button,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      h4 && styles.h4,
      paragraph && styles.paragraph,
      paragraph && color === 'gray' && styles.paragraphGray,
      paragraph && color === 'gray2' && styles.paragraphGray2,
      caption && styles.caption,
      caption && medium && styles.captionMedium,
      button && styles.button,
      center && styles.center,
      right && styles.right,
      color && { color },
      color && color === 'blue' && styles.blue,
      color && color === 'lightblue' && styles.lightblue,
      color && color === 'green' && styles.green,
      color && color === 'red' && styles.red,
      color && color === 'yellow' && styles.yellow,
      color && color === 'teal' && styles.teal,
      color && color === 'black' && styles.black,
      color && color === 'black2' && styles.black2,
      color && color === 'black3' && styles.black3,
      color && color === 'white' && styles.white,
      color && color === 'gray' && styles.gray,
      color && color === 'gray2' && styles.gray2,
      color && color === 'gray3' && styles.gray3,
      color && color === 'caption' && styles.caption,
      size && { fontSize: size },
      bold && styles.bold,
      light && styles.light,
      height && { lineHeight: height },
      weight && { fontWeight: weight },
      spacing && { letterSpacing: spacing },
      style
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: Theme.sizes.font,
    color: Theme.colors.black,
  },
  bold: { fontFamily: 'Rubik-Bold' },
  light: { fontFamily: 'Rubik-Light' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  blue: { color: Theme.colors.blue, },
  lightblue: { color: Theme.colors.lightblue, },
  green: { color: Theme.colors.green, },
  red: { color: Theme.colors.red, },
  yellow: { color: Theme.colors.yellow, },
  teal: { color: Theme.colors.teal, },
  black: { color: Theme.colors.black, },
  black2: { color: Theme.colors.black2, },
  black3: { color: Theme.colors.black3, },
  white: { color: Theme.colors.white, },
  gray: { color: Theme.colors.gray, },
  gray2: { color: Theme.colors.gray2, },
  gray3: { color: Theme.colors.gray3, },
  caption: { color: Theme.colors.caption, },
  h1: Theme.fonts.h1,
  h2: Theme.fonts.h2,
  h3: Theme.fonts.h3,
  h4: Theme.fonts.h4,
  paragraph: Theme.fonts.paragraph,
  paragraphGray: Theme.fonts.paragraphGray,
  paragraphGray2: Theme.fonts.paragraphGray2,
  caption: Theme.fonts.caption,
  captionMedium: Theme.fonts.captionMedium,
  button: Theme.fonts.button,
});
