import { AsyncStorage } from "react-native";

const SaveIdUser = async (iduser) => {
  try {
    await AsyncStorage.setItem("@iduser", iduser);
    return "THANH_CONG";
  } catch (e) {
    return e;
  }
};

export default SaveIdUser;
