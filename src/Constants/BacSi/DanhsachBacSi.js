import React, { Component } from 'react';
import { View, 
  Text, 
  FlatList, 
  ActivityIndicator, 
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  Animated, 
  Modal,
  TouchableOpacity
} from 'react-native';
const { width } = Dimensions.get("window");
import { ListItem, SearchBar } from 'react-native-elements';

export default class DanhsachBacSi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [
            {
              tenbacsi:'Nguyễn Trương Thanh Nhã',
              tenchuyenkhoa:'Nội tổng quát',
              tenbenhvien:'Bệnh viện nhân dân 115',
              catuvan:'50'
            },
            {
              tenbacsi:'Thanh Nhã',
              tenchuyenkhoa:'Răng hàm mặt',
              tenbenhvien:'Bệnh viện răng hàm mặt',
              catuvan:'150'
            }
          ],
        }; 
      }   
    render() {
        return (

            <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.viewtimkiem}>
            <SearchBar
           containerStyle={styles.search}
            placeholder="Nhập thông tin bác sĩ cần tìm....."
            lightTheme
            round
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.data}
          />
            </View>
            <View style={styles.viewnoidung}>
            <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <TouchableOpacity
                            delayPressIn={70}
                            activeOpacity={0.8}
                            onPress={() => this.props.navigation.navigate('ChitTietBacSi')}>
   <View style={styles.thongtinbacsi}>
       <View style={{flexDirection:'row'}}>
       <View style={styles.avatar}>
       <Image
     style={styles.imgavatar}
     source={require('../../../assets/Data/Demo.jpg')}
     />
     
       </View>
      <View>
      <Text style={styles.txtbacsi}>Bác sĩ</Text>
       <Text style={styles.hovaten}>{item.tenbacsi}</Text> 
       <Text style={styles.chuyenkhoa}>{item.tenchuyenkhoa}</Text>
       <Text style={styles.chuyenkhoa}>{item.tenbenhvien}</Text>
      </View>
   </View>
   <View style={styles.tkbenhnhan}>
           
           
           <Text style={styles.txttktuycan}>Số bệnh nhân tư vấn:{item.catuvan}</Text>
      
       </View>
       </View>

                            </TouchableOpacity>
         
          )}
          keyExtractor={item => item.idbenhvien}
          ItemSeparatorComponent={this.renderSeparator}
         
        />

            </View>
           
            </View>
        );
    }
}
const imageWidth = width - 20;
const imageHeight = (imageWidth / 150) * 150;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f6f6"
    },
    viewtimkiem:{
        flex:1/10,
        backgroundColor:'#278efc'
    },
    viewnoidung:{
        flex:1,
    },
   
    search:{
      backgroundColor:'#278efc',
      borderBottomColor: '#278efc',
      borderTopColor: '#278efc',

    },
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
        flexDirection: 'row'
    },
    imageStyle: {
        marginTop:10,
        height: 90,
        width: 90
    },
    texttieude:{
        marginTop:10,
        fontSize:15,
        marginLeft: 10
    },
    textdiachi:{
        marginTop:10,
        marginLeft:10,
        fontSize:15
    },
    timkiemcontainer:{
      flex:20,
  
    },
    timkiemthongtincontainer:{
      flex:13,
      flexDirection: 'row',
      // backgroundColor:'red'
    },
    ttbacsicontainer:{
      flex:90,
    },
    searchbar:{
      marginTop: 30,
      alignSelf:'center',
      width:'100%',
      height: 80,
      // backgroundColor:'blue'
    },
    dropdown:{
      marginTop:10,
      flex:1/2,
      // marginLeft: 10,
      // marginRight: 10,
      // width:25,
      // height:50,
      // borderWidth:2,
      // borderColor: '#496b7d',
      // borderRadius:4
      
    },
    textdropdown:{
      // alignSelf:'center',
      fontSize:20,
      marginBottom:10,
      flex:1/9
    },
    thongtinbacsi:{
      marginTop:10,
      marginLeft:10,
      width:'95%',
      height:150,
      backgroundColor:'#ffff',
      justifyContent:'space-around',
    },
    avatar:{
      marginTop: 10,
      marginBottom: 20,
      width: 100,
      height:100,
      borderRadius: 100,
      backgroundColor:'#f3fbff',
      marginLeft: 20,
    },
    imgavatar:{
      alignSelf:'center',
      marginTop:20,
      width:50,
      height:50
    },
    txtbacsi:{
      marginTop:10,
      fontSize:20,
      color:'#496b7d',
      fontWeight: 'bold'
    },
    hovaten:{
      fontWeight:'bold',
      fontSize:20
    },
    chuyenkhoa:{
      marginTop:10,
      marginLeft:10,
      fontSize:15,
      color:'gray'
    },
    tkbenhnhan:{
      width:'100%',
      height:30,
      backgroundColor:'#e7e1e1'
    },
    txttktuycan:{
      marginTop:5,
      alignSelf:'flex-end',
      marginRight:30,
      color:'#496b7d',
    }
  
    
});
