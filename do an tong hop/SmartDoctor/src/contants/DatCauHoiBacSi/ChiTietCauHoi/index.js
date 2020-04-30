import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  FlatList
} from "react-native";
const { width } = Dimensions.get("window");
import { network } from "../../../config/Network";
import styles from './styles';
export default class ChiTietCauHoi extends React.Component {
  state = {
    data: []
  };
  fetchData = async () => {
    const { params } = this.props.navigation.state;
    const response = await fetch(
      `${network}/datcauhoi/chietietcauhoi.php?id=` + params.id
    );
    const products = await response.json();
    this.setState({ data: products });
  };
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <FlatList
        keyExtractor={item => String(item.Id)}
        data={this.state.data}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.cauhoi}>
              <View style={styles.wrapper}>
                <Text style={styles.texttieude}>
                {item.tendatcauhoi}
                </Text>
              </View>
            </View>
            <View style={styles.noidung}>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
                Trả lời
              </Text>
              <View style={styles.wrapper}>
                <View style={{ flexDirection: "row" }}>
                
                <Image
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 40
                    }}
                    source={{ uri: `${network}/images/bacsi/` + item.hinhanh }}
                  />
                  <Text style={{ fontSize: 15}}>
                  {item.tenbacsi}
                  
                    </Text>
             
                </View>
                <View style={{flexDirection:'column'}}>
                <Text style={styles.textnoidung}>
                                     {item.noidung}
                                    </Text>
                </View>
              </View>
              
            </View>
          </View>
        )}
      />
    );
  }
}