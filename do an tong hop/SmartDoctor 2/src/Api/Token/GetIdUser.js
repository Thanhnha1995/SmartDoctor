import { AsyncStorage } from "react-native";

const GetIdUser = async () => {
  try {
    const value = await AsyncStorage.getItem("@iduser");
    if (value !== null) {
      return value;
    }
    return "";
  } catch (error) {
    return "";
  }
};

export default GetIdUser;
