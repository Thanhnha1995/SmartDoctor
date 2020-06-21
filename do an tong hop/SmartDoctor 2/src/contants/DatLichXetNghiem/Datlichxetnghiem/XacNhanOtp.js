import * as React from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import * as firebase from "firebase";
import getToken from "../../../Api/Token/GetToken";
import { network } from "../../../config/Network"
import { FirebaseApp } from "../../../config/Firebase";

try {
  if (FIREBASE_CONFIG.apiKey) {
    firebase.initializeApp(FirebaseApp);
  }
} catch (err) {
  // ignore app already initialized error on snack
}

export default function XacNhanOtp({ navigation }) {
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;
    const iduser = navigation.getParam("iduser");
  const idthoigian = navigation.getParam("idthoigian");
  const iddv = navigation.getParam("iddv");
  const gt = navigation.getParam("gt");
  const idbenhvien = navigation.getParam("idbenhvien");
  const sodienthoai = navigation.getParam("sodienthoai");
  const tenbenhvien = navigation.getParam("tenbenhvien");
  const diachibenhvien = navigation.getParam("diachibenhvien");
  const ngay = navigation.getParam("ngay");
  const tenxetnghiem = navigation.getParam("tenxetnghiem");
  const giatien = navigation.getParam("giatien");
  const idca = navigation.getParam("idca");
  React.useEffect(() => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    const verificationId = phoneProvider.verifyPhoneNumber(
      sodienthoai,
      recaptchaVerifier.current
    );
    setVerificationId(verificationId);
  }, []);
  return (
    <View style={styles.background}>
      <View style={styles.body}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
      <Text style={{ fontSize: 16, marginBottom: 10 }}>
          {"Một mã xác thực 6 chữ số đã được gửi đến"}
        </Text>
        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 15 }}>
          {sodienthoai}
        </Text>

        <TextInput
          style={styles.textInput}
          autoFocus
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          onChangeText={(sodienthoai) => setPhoneNumber(phoneNumber)}    
        ></TextInput>
     
      </View>
      <View>
        <TouchableOpacity
          style={styles.footer}
          onPress={async () => {

            navigation.navigate("XacNhanThongTin",{
              tenbenhvien,
              diachibenhvien,
              ngay,
              tenxetnghiem,
              giatien,
              iduser,
              iddv,
              idbenhvien,
              gt,
              idca
              
              
            })
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            {"Xác nhận"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: 20,
  },
  title: {
    fontSize: 32,
  },
  body: {
    flex: 1,
    flexDirection: "column",
    marginTop: 100,
  },
  background: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  textInput: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "blue",
    height: 44,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 23,
  },
  text: {
    fontSize: 16,
  },
  footer: {
    borderRadius: 10,
    backgroundColor: "blue",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
});
