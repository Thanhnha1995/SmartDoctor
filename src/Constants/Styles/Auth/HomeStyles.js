
import {
  StyleSheet,
} from 'react-native';
import {Color} from '@Common';
import Metrics from '../../../Config/Metrics'
const IMAGE_WIDTH = Metrics.DEVICE_WIDTH * 0.8
export default HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.DEVICE_HEIGHT,
    paddingTop: 24,
    backgroundColor:Color.bgtrang
  },
  logoImg: {
    flex: 1,
    height: null,
    width: IMAGE_WIDTH,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 30
  },
  bottom: {
    backgroundColor: Color.btbottom
  },
  login: {
    flex: 1,
    marginHorizontal: Metrics.DEVICE_WIDTH * 0.1,
    justifyContent: 'center'
  },
  button: {
    height: 42,
    borderWidth: 1,
    borderRadius: 3,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderColor: Color.btbutton
  },
  text: {
    textAlign: 'center',
    fontWeight: '400',
    color: 'white'
  },
  separatorOr: {
    color:Color.btbuttonxam,
    marginHorizontal: 8
  },
  separatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20
  },
  separatorLine: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    height: StyleSheet.hairlineWidth,
    borderColor: Color.btbuttonxam,
  },
});