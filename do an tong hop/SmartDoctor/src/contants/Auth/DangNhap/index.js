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
import LogIn from '../../../Api/Auth/SignIn';
import SaveToken from '../../../Api/Token/SaveToken';
import {FirebaseApp} from '../../../config/Firebase';
export default class DangNhap extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      validEmail: false,
      email: '',
      matkhau: '',
      validpassword: false,
      loadingVisible: false,

    };

    this.handleCloseNotification = this.handleCloseNotification.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleNextButtonState = this.toggleNextButtonState.bind(this);
  }
  handleNextButton() {
    this.setState({ loadingVisible: true });
    setTimeout(() => {
      const { email,matkhau } = this.state;
      if (email, matkhau) {
        LogIn(email, matkhau)
        .then(res=>{
          if(res.message ==="Invalid Username or Password")
         {
            this.setState({ formValid: false, loadingVisible: false });
       }
       else {
        SaveToken(res.token),
        FirebaseApp.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.matkhau)    
       this.setState(
        this.props.navigation.navigate('HomeApp',{
          // lay tri tuyen du lieu
          name:res.user.hovaten, 
          id:res.user.idnguoidung,
          hinhanh:res.user.hinhanh,
          chucvu:res.user.chucvu,
          hovaten:res.user.hovaten, 
        }),
        this.setState({ formValid: true, loadingVisible: false })
       )}})}
      }, 2000);
  }


  handleCloseNotification() {
    this.setState({ formValid: true });
  }

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

  toggleNextButtonState() {
    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) {
      return false;
    }
    return true;
  }
  render() {
    const {
      formValid, loadingVisible, validEmail, validPassword
    } = this.state;
    const showNotification = !formValid;
    const background = formValid ? '#fff' : Color.darkOrange;
    const notificationMarginTop = showNotification ? 10 : 0;
    return (
      <View style={{flex:1}}>
       <KeyboardAvoidingView
      
        behavior="padding"
        style={{flex:1}}

      >
        <Block center middle>
          <Block middle>
            <Image
              source={require('../../../assets/Logo/logo.png')}
              style={{ height: 80, width: 320 }}
            />
          </Block>
          <Block flex={2.5} center>
            <Text h3 style={{ marginBottom: 6 }}>
              ĐĂNG NHẬP TÀI KHOẢN
             </Text>
            <Text paragraph color="black3">
             Vui lòng nhập thông tin vào bên dưới
            </Text>
            <Block center style={{ marginTop: 44 }}>
            <Input
                full
                inputType="email"
                label="Địa chỉ E-Mail"
                style={[{ borderColor: background, borderWidth:1.2 }, { marginBottom: 25 }]}
                onChangeText={this.handleEmailChange}
                showCheckmark={validEmail}
                 autoFocus      
              />
              <Input
                full
                inputType="matkhau"
                label="Mật khẩu"
                style={[{ borderColor: background, borderWidth:1.2 }, { marginBottom: 25 }]}
                onChangeText={this.handlePasswordChange}
                showCheckmark={validPassword}

                rightLabel={
                  <Text
                    paragraph
                    color="gray"
                    onPress={() => navigation.navigate('Forgot')}
                    
                  >
                    Quên mật khẩu?
                  </Text>
                }
              />
              <NextArrowButton
              label="ĐĂNG NHẬP"
            handleNextButton={this.handleNextButton}
            disabled={this.toggleNextButtonState()}
          />
           <Loader
          modalVisible={loadingVisible}
          animationType="fade"
        /> 
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DangKy')}
          >
           <Text paragraph color="gray">
                Nếu bạn chưa có tài khoàn, nhấn? <Text
                  height={18}
                  color="#4abf92"
                  >
                  ĐĂNG KÝ 
                </Text>
              </Text>
          </TouchableOpacity>
             

            </Block>
          </Block>
          
        </Block>
      </KeyboardAvoidingView>
      <View style={[styles.notificationWrapper, { marginTop: notificationMarginTop }]}>

        <Notification
          showNotification={showNotification}
          handleCloseNotification={this.handleCloseNotification}
            type="Cảnh báo:"
            firstLine="Tên đăng nhập hoặc mật khẩu không đúng,"
            secondLine="Vui lòng thử lại"
          />
        </View>
      </View>
     
    )
  }
}


DangNhap.propTypes = {
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
