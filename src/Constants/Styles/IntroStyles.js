
import {
  StyleSheet,
} from 'react-native';
import Color from '../../Common/Color';
export default IntroStyles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 100
  },
  image: {
    width: 250,
    height: 250,
  },
  text: {
    fontSize: 20,
    color: Color.textintro,
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 25,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 50,
  }
});