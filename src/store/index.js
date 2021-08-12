import {
  createStore,
  applyMiddleware,
} from "redux";
import {
  persistStore,
} from "redux-persist";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import PersistReducer from "./persistReducer";

const middlewares = [];
if (__DEV__) {
  middlewares.push(logger);
}

// if (__DEV__) { // eslint-disable-line
//   const createFlipperMiddleware = require('rn-redux-middleware-flipper').default;
//   middlewares.push(createFlipperMiddleware());
// }

export const Store = createStore(PersistReducer,
  applyMiddleware(...middlewares, thunk));

export const PersisStore = persistStore(Store);
