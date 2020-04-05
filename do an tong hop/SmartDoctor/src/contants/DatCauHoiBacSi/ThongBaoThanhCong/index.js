import React from 'react';
import { Text, View,Image,TouchableOpacity} from 'react-native';
import styles from './styles';
import { Images, Lang, Color } from "@Common";
export default class ThongBaoThanhCong extends React.Component {
    render() {
        return (
       <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/bacsi/avatar.png')} />
        <Text style={styles.thongbao}>{Lang.thongbaodatcauhoi}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("LichSuCauHoi");
          }}
        >
      <View>
      <Text style={styles.textbutton}>{Lang.mhc}</Text>
      </View>
      </TouchableOpacity>
       </View>
        );
    }
}
