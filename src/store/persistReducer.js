import { persistReducer } from "redux-persist";
import immutableTransform from "redux-persist-transform-immutable";
import rootReducer from "reducers";
import AsyncStorage from "@react-native-community/async-storage";

const config = {
  key: "root",
  // storage: storage,
  storage: AsyncStorage,
  // states have been save in AsyncStorage
  whitelist: [
    'userReducer',
    'billListReducer',
    // 'productReducer',
    // 'generalReducer',
  ],
  transforms: [immutableTransform()],
};

const PersistReducer = persistReducer(config, rootReducer);
export default PersistReducer;

