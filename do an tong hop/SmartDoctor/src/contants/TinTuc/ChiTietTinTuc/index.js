import React from 'react';
import { StyleSheet, Text, View,StatusBar,Image,Dimensions,WebView} from 'react-native';
import styles from './styles';

export default class ChiTietTinTuc extends React.Component {
	
	render(){
    return(
		  <View style={styles.main}>
             <View style={styles.main}>
            <StatusBar hidden />
          <View style={styles.hinhanh}>
          <Image
            style={styles.image}
            source={require("../../../assets/Tintuc/tintuc.jpg")}
          />
          </View>
          <View style={styles.tieude}>
              <Text style={styles.txttieude}> Ngoài COVID-19, cần cảnh giác với những bệnh nguy hiểm này</Text>
              <View style={{flexDirection:'row', flex:1/2}}>
              <View style={{
                margin:10,
                marginLeft:30,
                width:150,
                height:30,
                borderWidth: 1,
                borderRadius:100,
                borderColor:'#51cde0',
                borderRadius:100
                }}>
                  <Text style={styles.btncamon}>Cảm ơn bác sĩ</Text>
                </View>
                 <View style={{
                margin:10,
                marginLeft:30,
                width:150,
                height:30,
                borderWidth: 1,
                 borderRadius:100,
                borderColor:'#51cde0',
                borderRadius:100
                }}>
                  <Text style={styles.btncamon} >chia sẽ</Text>
                </View>
                
              </View>
              <View style={styles.line}></View>
          </View>
          <View style={{flex:1/2}}>
      <Text>
      Ngoài COVID-19, cần cảnh giác với những bệnh nguy hiểm này
      </Text>
          </View>
          </View>        
		 
      </View>
    );	
  }}
