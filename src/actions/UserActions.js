import API from 'services/api';
import Storage from 'services/storage';
import { ERROR_MSG } from "common/AppConst";
import { DialogService } from 'components/Dialog';
import NavigationService from 'services/NavigationService';
import { BottomTabID } from 'common/ScreenID';

export const USER_PREFIX = 'USER';

export const userActions = {
  USER_PREFIX,
  USER_LOG_IN_REQUEST: USER_PREFIX + '_LOG_IN_REQUEST',
  USER_LOG_IN_SUCCESS: USER_PREFIX + '_LOG_IN_SUCCESS',
  USER_LOG_IN_FAIL: USER_PREFIX + '_LOG_IN_FAIL',

  LOG_OUT: 'LOG_OUT',
};

export const login = (params) => {
  return async dispatch => {
    dispatch({ type: userActions.USER_LOG_IN_REQUEST });
    try {
      const res = await API.login(params);
      if (res?.data) {
        // Storage.setToken(res?.data?.token);
        Storage.setRefreshToken(res?.data?.token);
        dispatch({
          type: userActions.USER_LOG_IN_SUCCESS,
          payload: { data: res?.data },
        });
        NavigationService.reset(BottomTabID.BottomTabNavigator);
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: userActions.USER_LOG_IN_FAIL,
          payload: { message: message },
        });
        if (!res?.error?.includes('unauthorize')) DialogService.alertError(message);
      }
    } catch (e) {
      console.log('login error: ', e);
    }
  };
};

export const logout = () => {
  return async dispatch => {
    Storage.removeToken();
    dispatch({ type: userActions.LOG_OUT });
  };
};