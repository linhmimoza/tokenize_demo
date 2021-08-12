import AsyncStorage from "@react-native-community/async-storage";

export const AsyncKey = {
  CURRENT_USER: "CURRENT_USER",
};

class AppStorage {
  save = (key, value) => {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  };

  get = async key => {
    const data = await AsyncStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data);
  };

  clear = key => AsyncStorage.removeItem(key);
}

export default new AppStorage();
