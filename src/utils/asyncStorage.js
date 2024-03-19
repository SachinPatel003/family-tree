import AsyncStorage from "@react-native-async-storage/async-storage";

export const setUserAuthInfo = async (data) => {
  try {
    await AsyncStorage.setItem("userAuth", JSON.stringify(data));
  } catch (e) {
    // saving error
  }
};

export const getUserAuthInfo = async () => {
  try {
    const value = await AsyncStorage.getItem("userAuth");
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch (e) {
    return null;
  }
};
