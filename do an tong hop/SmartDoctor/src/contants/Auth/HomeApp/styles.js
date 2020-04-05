"use strict";
import { StyleSheet } from "react-native";
import * as theme from '../../../common/Theme';
import {
    
    Dimensions,
    Platform,
  } from 'react-native';
  import CommonStyles, {
    deviceHeight,
    NAV_HEIGHT,
    TAB_HEIGHT,
  } from './CommonStyles';
  const ELEMENT_HEIGHT = 430;
const { width, height } = Dimensions.get('window');
const spaceHeight = deviceHeight - NAV_HEIGHT - TAB_HEIGHT - ELEMENT_HEIGHT;
const styles = StyleSheet.create({
    flex: {
        flex: 0,
    
      },
      column: {
        flexDirection: 'column'
      },
      tintuc: {
        flexDirection: 'column',
        marginBottom: 40
      },
      row: {
        flexDirection: 'row'
      },
      header: {
        backgroundColor: theme.colors.white,
        paddingHorizontal: theme.sizes.padding,
        paddingTop: theme.sizes.padding * 1.33,
        paddingBottom: theme.sizes.padding * 0.66,
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      articles: {
      },
      destinations: {
        flex: 1,
        width: 90,
        justifyContent: 'space-between',
        paddingBottom: 30,
      },
      destination: {
        width: width - (theme.sizes.padding * 2),
        height: width * 0.5,
        marginHorizontal: theme.sizes.margin,
        paddingHorizontal: theme.sizes.padding,
        paddingVertical: theme.sizes.padding * 0.66,
        borderRadius: theme.sizes.radius,
      },
      destinationInfo: {
        position: 'absolute',
        borderRadius: theme.sizes.radius,
        paddingHorizontal: theme.sizes.padding,
        paddingVertical: theme.sizes.padding / 2,
        bottom: 20,
        left: (width - (theme.sizes.padding * 4)) / (Platform.OS === 'ios' ? 3.2 : 3),
        backgroundColor: theme.colors.white,
        width: width - (theme.sizes.padding * 4),
      },
      recommended: {
      },
      recommendedHeader: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: theme.sizes.padding,
      },
      recommendedList: {
      },
      recommendation: {
        width: (width - (theme.sizes.padding * 2)) / 2,
        marginHorizontal: 8,
        backgroundColor: theme.colors.white,
        overflow: 'hidden',
        borderRadius: theme.sizes.radius,
        marginVertical: theme.sizes.margin * 0.5,
      },
      recommendationHeader: {
        overflow: 'hidden',
        borderTopRightRadius: theme.sizes.radius,
        borderTopLeftRadius: theme.sizes.radius,
      },
      recommendationOptions: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.sizes.padding / 2,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      },
      recommendationTemp: {
        fontSize: theme.sizes.font * 1.25,
        color: theme.colors.white
      },
      recommendationImage: {
        width: (width - (theme.sizes.padding * 2)) / 2,
        height: (width - (theme.sizes.padding * 2)) / 2,
      },
      avatar: {
        width: theme.sizes.padding,
        height: theme.sizes.padding,
        borderRadius: theme.sizes.padding / 2,
      },
      rating: {
        fontSize: theme.sizes.font * 2,
        color: theme.colors.white,
        fontWeight: 'bold'
      },
      shadow: {
        shadowColor: theme.colors.black,
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 5,
      },
      dots: {
        width: 10,
        height: 10,
        borderWidth: 2.5,
        borderRadius: 5,
        marginHorizontal: 6,
        backgroundColor: theme.colors.gray,
        borderColor: 'transparent',
      },
      activeDot: {
        width: 12.5,
        height: 12.5,
        borderRadius: 6.25,
        borderColor: theme.colors.active,
      },
      fullField: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: spaceHeight * 0.2 - 15,
        marginBottom: spaceHeight * 0.55 - 15,
      },
      colMainLeft: {
        flex: 1,
        marginRight: 8,
      },
      highLightBoxMain: {
        color:'#2283c5',
        height: 135,
        borderWidth: 0,
        borderRadius: 9,
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
      },
      boxMain: {
        height: 135,
        borderWidth: 0,
        borderRadius: 8,
        marginTop: 15,
        marginBottom: 15,
        elevation: 12,
      },
      colMainRight: {
        flex: 1,
        marginLeft: 8,
      },
      iconchucnang: {
        marginTop: 10,
        fontSize: 50,
        alignSelf: 'center',
        color: '#fff'
      },
      textchucnang: {
        marginTop: 12,
        color: '#ffff',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
      },
      xemtatcacontainer: {
        marginTop: 30,
        alignSelf: 'center',
        width: 250,
        height: 50,
        borderWidth: 1,
        borderRadius: 100,
        color: '#51cde0'
      },
      xemtatca: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 20
      }
})

export default styles;