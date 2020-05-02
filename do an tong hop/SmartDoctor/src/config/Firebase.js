import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyCxZxetCN2PkLa5sw0jBvYREmSu89WwB-0",
  authDomain: "smartdoctor-228d3.firebaseapp.com",
  databaseURL: "https://smartdoctor-228d3.firebaseio.com",
  projectId: "smartdoctor-228d3",
  storageBucket: "smartdoctor-228d3.appspot.com",
  messagingSenderId: "156313051003",
};
export const FirebaseApp = firebase.initializeApp(config);
