import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  View,
  Image, 
  KeyboardAvoidingView, 
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Color, Images, Lang } from "@Common";
import Text from '../../../components/Text';
import Block from "../../../components/Block";
import Input from "../../../components/Input";
import NextArrowButton from '../../../components/NextArrowButton';
import Notification from '../../../components/Notification';
import Loader from '../../../components/Loader';
import { ScrollView } from 'react-native-gesture-handler';
import Register from '../../../Api/Auth/SignUp';
import {FirebaseApp} from '../../../config/Firebase';

export default class DangKy extends Component {
  constructor(props) {
    super(props);
    this.state = {
    hovaten:" ",
	  idgioitinh:"1",
	  ngaysinh:"2020/05/01",
	  diachi:" ",
	  sodienthoai:"chua cap nhat",
	  nghenghiep:"chua cap nhat",
	  socmnd:"chua cap nhat",
	  masobnxh:"chua cap nhat",
	  cannang:"00",
	  chieucao:"00",
	  bmi:"00",
	  idnhommau:"1",
	  tinhtrangbenhly:"chua cap nhat",
	  diungvacacphanung:"chua cap nhat",
	  cachsudungthuoc:"chua cap nhat",
	  email:'',
	  matkhau:'',
    validEmail: false,
    validPassword: false,
    validPhone: false,
    validAddress: false,
    valiHoVaTen:false,
    formValid: true,
    loadingVisible: false,
    };

    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleHoVaTen = this.handleHoVaTen.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
  }
  handleNextButton()  {
    this.setState({ loadingVisible: true });
    setTimeout(() => {
      const {
        hovaten,
        idgioitinh,
        ngaysinh,
        diachi,
        sodienthoai,
        nghenghiep,
        socmnd,
        masobnxh,
        cannang,
        chieucao,
        bmi,
        idnhommau,
        tinhtrangbenhly,
        diungvacacphanung,
        cachsudungthuoc,
        email,
        matkhau } = this.state;
      if (
        hovaten,
        idgioitinh,
        ngaysinh,
        diachi,
        sodienthoai,
        nghenghiep,
        socmnd,
        masobnxh,
        cannang,
        chieucao,
        bmi,
        idnhommau,
        tinhtrangbenhly,
        diungvacacphanung,
        cachsudungthuoc,
        email,
        matkhau) {
        Register(
          hovaten,
          idgioitinh,
          ngaysinh,
          diachi,
          sodienthoai,
          nghenghiep,
          socmnd,
          masobnxh,
          cannang,
          chieucao,
          bmi,
          idnhommau,
          tinhtrangbenhly,
          diungvacacphanung,
          cachsudungthuoc,
          email,
          matkhau)
        .then(res=>{
          if(res.message ==="email va mat khau ton tai")
         {
            this.setState({ formValid: false, loadingVisible: false });
       }
       else {
        FirebaseApp.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.matkhau)
        this.props.navigation.navigate('DangNhap'),
       this.setState(
        this.setState({ formValid: true, loadingVisible: false })
       )}})}
      }, 2000);
    }
    handleCloseNotification() {
      this.setState({ formValid: true });
    }
    // ham check gia tri nhap vao 
    handleEmailChange(email) {
      // eslint-disable-next-line
      const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const { validEmail } = this.state;
      this.setState({ email: email });
  
      if (!validEmail) {
        if (emailCheckRegex.test(email)) {
          this.setState({ validEmail: true });
        }
      } else if (!emailCheckRegex.test(email)) {
        this.setState({ validEmail: false });
      }
    }
    // ham kiem tra gia tri mat khau
    handlePasswordChange(matkhau) {
      const { validPassword } = this.state;
  
      this.setState({ matkhau });
  
      if (!validPassword) {
        if (matkhau.length > 2) {
          // Password has to be at least 4 characters long
          this.setState({ validPassword: true });
        }
      } else if (matkhau <= 2) {
        this.setState({ validPassword: false });
      }
    }
    // check dia chi
  handleAddressChange(diachi) {
      const { validAddress } = this.state;
  
      this.setState({ diachi });
  
      if (!validAddress) {
        if (diachi.length > 1) {
          // Password has to be at least 4 characters long
          this.setState({ validAddress: true });
        }
      } else if (diachi <= 2) {
        this.setState({ validAddress: false });
      }
    }
    // kiem tra ho va ten
    handleHoVaTen(hovaten) {
      const {valiHoVaTen} = this.state;
  
      this.setState({ hovaten });
  
      if (!valiHoVaTen) {
        if (hovaten.length > 1) {
         
          this.setState({ valiHoVaTen: true });
        }
      } else if (hovaten <= 2) {
        this.setState({ valiHoVaTen: false });
      }
    }



    // ham check so dien thoai 
    handlePhoneChange(sodienthoai) {
      const { validPhone } = this.state;
  
      this.setState({ sodienthoai });
  
      if (!validPhone) {
        if (sodienthoai.length ===10) {
          // Password has to be at least 4 characters long
          this.setState({ validPhone: true });
        }
      } else{
        this.setState({ validPhone: false });
      }
    }

    toggleNextButtonState() {
      const { validEmail, validPassword, validPhone, validAddress, valiHoVaTen } = this.state;
      if (validEmail && validPassword && validPhone && validAddress && valiHoVaTen) {
        return false;
      }
      return true;
    }
  render() {
    const {
      formValid, 
      loadingVisible, 
      validEmail, 
      validPassword, 
      validPhone, 
      validAddress,
      valiHoVaTen
    } = this.state;
    const showNotification = !formValid;
    const background = formValid ? '#ffff' : Color.darkOrange;
    const notificationMarginTop = showNotification ? 10 : 0;
    return (
      <View style={{flex:1}}>
      <ScrollView>

       {/* <KeyboardAvoidingView
      
        behavior="padding"
        style={{flex:1}}

      > */}
        <Block center middle>
          <Block middle>
            <Image
              source={require('../../../assets/Logo/logo.png')}
              style={{ height: 80, width: 320 }}
            />
          </Block>
          <Block flex={2.9} center>
            <Text h3 style={{ marginBottom: 3 }}>
              ĐĂNG KÝ TÀI KHOẢN
             </Text>
            <Text paragraph color="black3">
             Vui lòng nhập thông tin vào bên dưới
            </Text>
            <Block center style={{ marginTop: 22 }}>
            <Input          
            full
            inputType="hovaten"
            label="Họ và tên"
            style={[{ backgroundColor: background }, { marginBottom: 23 }]}
            onChangeText={this.handleHoVaTen}
            showCheckmark={valiHoVaTen}
             autoFocus      
          />
      
            <Input          
            full
            inputType="email"
            label="Địa chỉ E-Mail"
            style={[{ backgroundColor: background }, { marginBottom: 23 }]}
            onChangeText={this.handleEmailChange}
            showCheckmark={validEmail}
             autoFocus      
          />
             <Input  
            full
            inputType="matkhau"
            label="Mật khẩu"
            style={[{ backgroundColor: background }, { marginBottom: 23 }]}
            onChangeText={this.handlePasswordChange}
            showCheckmark={validPassword}       
          />
            <Input
            full
            inputType="sodienthoai"
            label="Số điện thoại"
            style={[{ backgroundColor: background }, { marginBottom: 23 }]}
            onChangeText={this.handlePhoneChange}
            showCheckmark={validPhone}   
          />
            <Input
            
            full
            inputType="diachi"
            label="Địa chỉ liêm hệ"
            style={[{ backgroundColor: background }, { marginBottom: 23 }]}
            onChangeText={this.handleAddressChange}
            showCheckmark={validAddress}  
          />


              <NextArrowButton
              label="ĐĂNG KÝ"
            handleNextButton={this.handleNextButton}
            disabled={this.toggleNextButtonState()}
          />
           <Loader
          modalVisible={loadingVisible}
          animationType="fade"
        /> 
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DangNhap')}
          >
           <Text paragraph color="gray">
                Nếu bạn đã có tài khoàn, nhấn? <Text
                  height={18}
                  color="#4abf92"
                  >
                  ĐĂNG NHẬP
                </Text>
              </Text>
          </TouchableOpacity>
             

            </Block>
          </Block>
          
        </Block>
        </ScrollView>
      {/* </KeyboardAvoidingView> */}
      <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>

        <Notification
          showNotification={showNotification}
          handleCloseNotification={this.handleCloseNotification}
            type="Cảnh báo:"
            firstLine="Email đã tồn tạis"
            secondLine="Vui lòng thử lại"
          />
        </View>
      </View>
     
    )
  }
}


DangKy.propTypes = {
  // SignIn: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
  navigate: PropTypes.func,
  goBack: PropTypes.func,
  }).isRequired,
};
const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
    padding: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  loginHeader: {
    fontSize: 12,
    color: Color.white,
    fontWeight: '300',
    marginBottom: 40,
  },
  notificationWrapper: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  loi:{
    width:'100%',
    height:'7%'
  },
});
