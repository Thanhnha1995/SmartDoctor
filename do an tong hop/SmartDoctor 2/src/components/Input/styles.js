
import {
    StyleSheet,
    Dimensions
  } from 'react-native';
  import * as Theme from '../../common/Theme';
  const { width } = Dimensions.get("window");
  import {Color} from '@Common';
  export default styles = StyleSheet.create({
    input: {
      backgroundColor: Theme.colors.input,
      borderWidth: 0.5,
      borderColor: Theme.colors.border,
      borderRadius: 5,
      fontSize: Theme.sizes.font,
      color: Theme.colors.black,
      height: 45,
      paddingVertical: 11,
      paddingHorizontal: 16,
    },
    label: {
      textTransform: 'uppercase',
    },
    labelContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    full: {
      width: width - 50,
    },
    checkmarkWrapper: {
      position: 'absolute',
      right: 0,
      bottom: 40,
    },
    buttonWrapper: {   
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:10,
      
      width:370,
      height:50,
      backgroundColor:Color.green02,
    },
    button: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:10,
      marginLeft: 30,
      width:370,
      height:50,
      backgroundColor:Color.green02,
    },
    icon: {
      marginRight: -2,
      marginTop: -2,
      fontSize: 20,
      color:Color.bgtrang
    },
  });