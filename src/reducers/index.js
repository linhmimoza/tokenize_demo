import { combineReducers } from "redux";
import LoadingReducer from "./LoadingReducer";
import ErrorReducer from "./ErrorReducer";
import LoadmoreReducer from "./LoadmoreReducer";
import UserReducer from './UserReducer';
import GeneralReducer from './GeneralReducer';
import actions from "actions";

const appReducer = combineReducers({
  loading: LoadingReducer,
  loadmore: LoadmoreReducer,
  error: ErrorReducer,
  userReducer: UserReducer,
  generalReducer: GeneralReducer,
});

const rootReducer = (state, action) => {
  if (action.type === actions.userActions.LOG_OUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
