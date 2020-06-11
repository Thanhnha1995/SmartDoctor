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

import { FirebaseApp } from "../../../config/Firebase";

try {
  if (FIREBASE_CONFIG.apiKey) {
    firebase.initializeApp(FirebaseApp);
  }
} catch (err) {
  // ignore app already initialized error on snack
}

export default function NhapMaOtp({ navigation }) {
  const recaptchaVerifier = React.useRef(null);
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;
  const [message, showMessage] = React.useState(
    !firebaseConfig || Platform.OS === "web"
      ? {
          text:
            "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device.",
        }
      : undefined
  );
  const idthoigian = navigation.getParam("idthoigian");
  const sodienthoai = navigation.getParam("sodienthoai");

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
          placeholder={"Nhập OTP"}
          editable={!!verificationId}
        onChangeText={setVerificationCode}
        ></TextInput>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 16 }}>{"Bạn chưa nhận được mã OTP?"}</Text>
          <TouchableOpacity
            onPress={() => {
              this.send_OTP();
            }}
          >
            <Text style={{ color: "blue", fontSize: 16 }}>{" Gửi lại"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.footer}
          onPress={async () => {
            try {
              const credential = firebase.auth.PhoneAuthProvider.credential(
                verificationId,
                verificationCode
              );
              await firebase.auth().signInWithCredential(credential);
              alert("dung pass nha")
            } catch (err) {
              showMessage({ text: `Error: ${err.message}`, color: "red" });
            }
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
