import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
  StatusBar
} from "react-native";
import styles from './styles';
export default class ChiTietCauHoi extends React.Component {
  render() {
    return (
<View style={styles.container}>
<StatusBar hidden />
<View style={styles.wrapper}>
<View style={styles.viewcauhoinguoidung}>
              <Text
                style={{
                  fontSize: 15,
                  flex: 1,
                }}
              >
                Chào bác sĩ, dạo này gần đây lưỡi mình hay bị rát, đặc biệt hai bên mét lưỡi như răng cứa
              </Text>
            </View>
            <View style={{marginTop:10}}>
            <Text style={styles.cauhoi}>Trả lời câu hỏi</Text>
            <View style={{ flexDirection: "row" }}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}
                  source={require("../../../assets/Tintuc/tintuc.jpg")}
                />
                <Text style={{ fontSize: 15, flex: 1 }}>
                  BS.Nguyễn Trương Thanh Nhã
                </Text>
              </View>
            </View>
            <View style={{marginTop:10}}>
            <View style={styles.cautraloibacsi}>
                <Text
                  style={{
                    fontSize: 15,
                    flex: 1,
                  }}
                >
                Chào bạn, cảm ơn bạn đã gửi câu hỏi đến đội ngủ tư vấn
                </Text>
              </View>
            </View>
</View>
</View>


    //   <View style={styles.container}>
    //     <StatusBar hidden />
    //     <View style={styles.cauhoi}>
    //       <View style={styles.wrapper}>
    //         <Text style={styles.texttieude}>
    //           Chào bác sĩ, dạo này gần đây lưỡi mình hay bị rát.....
    //         </Text>
    //       </View>
    //     </View>
    //     <View style={styles.noidung}>
    //       <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
    //         Trả lời
    //       </Text>
    //       <View style={styles.wrapper}>
    //         <View style={{ flexDirection: "row" }}>
    //           <Image
    //             style={{
    //               width: 60,
    //               height: 60,
    //               borderRadius: 40,
    //             }}
    //             source={require("../../../assets/Tintuc/tintuc.jpg")}
    //           />
    //           <Text style={{ fontSize: 15 }}>BS.Nguyễn Trương Thanh Nhã</Text>
    //         </View>
    //         <View style={{ flexDirection: "column" }}>
    //           <Text style={styles.textnoidung}>
    //             Chào bạn, cảm ơn bạn đã gửi câu hỏi đến đội ngủ tư vấn
    //           </Text>
    //         </View>
    //       </View>
    //     </View>
    //   </View>
    );
  }
}