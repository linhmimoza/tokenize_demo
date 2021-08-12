import AsyncStorage from "@react-native-community/async-storage";

const KEY_TOKEN = "@tokenizeDemo:Token";
const KEY_REFRESH_TOKEN = "@tokenizeDemo:RefreshToken";

const setToken = async token => {
  return await _setData(KEY_TOKEN, token);
};

const getToken = async () => {
  return await _getData(KEY_TOKEN);
};

const removeToken = async () => {
  return await _removeData(KEY_TOKEN);
};

const setRefreshToken = async token => {
  return await _setData(KEY_REFRESH_TOKEN, token);
};

const getRefreshToken = async () => {
  return await _getData(KEY_REFRESH_TOKEN);
};

const removeRefreshToken = async () => {
  return await _removeData(KEY_REFRESH_TOKEN);
};


const _setData = async (key, data) => {
  let success = false;
  try {
    await AsyncStorage.setItem(key, data);
    success = true;
  } catch (error) {
    if (__DEV__) console.error(error);
  }
  return success;
};

const _getData = async key => {
  let data = undefined;
  try {
    data = await AsyncStorage.getItem(key);
  } catch (error) {
    if (__DEV__) console.error(error);
  }
  return data;
};

const _removeData = async key => {
  let data = undefined;
  try {
    data = await AsyncStorage.removeItem(key);
  } catch (error) {
    if (__DEV__) console.error(error);
  }
};

export default {
  setToken,
  getToken,
  KEY_TOKEN,
  removeToken,
  setRefreshToken,
  getRefreshToken,
  removeRefreshToken,
};
