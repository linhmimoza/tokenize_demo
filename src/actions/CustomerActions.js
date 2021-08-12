import API from 'services/api';
import { ERROR_MSG } from "common/AppConst";
import { DialogService } from 'components/Dialog';
import NavigationService from 'services/NavigationService';

export const CUSTOMER_PREFIX = 'CUSTOMER';

export const CustomerActions = {
  CUSTOMER_PREFIX,
  GET_CUSTOMER_HISTORY_REQUEST: 'GET_' + CUSTOMER_PREFIX + '_HISTORY_REQUEST',
  GET_CUSTOMER_HISTORY_SUCCESS: 'GET_' + CUSTOMER_PREFIX + '_HISTORY_SUCCESS',
  GET_CUSTOMER_HISTORY_FAIL: 'GET_' + CUSTOMER_PREFIX + '_HISTORY_FAIL',

  GET_CUSTOMER_INFO_REQUEST: 'GET_' + CUSTOMER_PREFIX + '_INFO_REQUEST',
  GET_CUSTOMER_INFO_SUCCESS: 'GET_' + CUSTOMER_PREFIX + '_INFO_SUCCESS',
  GET_CUSTOMER_INFO_FAIL: 'GET_' + CUSTOMER_PREFIX + '_INFO_FAIL',

  GET_CUSTOMER_OTP_REQUEST: 'GET_' + CUSTOMER_PREFIX + '_OTP_REQUEST',
  GET_CUSTOMER_OTP_SUCCESS: 'GET_' + CUSTOMER_PREFIX + '_OTP_SUCCESS',
  GET_CUSTOMER_OTP_FAIL: 'GET_' + CUSTOMER_PREFIX + '_OTP_FAIL',

  GET_CUSTOMER_TRADE_IN_REQUEST: 'GET_' + CUSTOMER_PREFIX + '_TRADE_IN_REQUEST',
  GET_CUSTOMER_TRADE_IN_SUCCESS: 'GET_' + CUSTOMER_PREFIX + '_TRADE_IN_SUCCESS',
  GET_CUSTOMER_TRADE_IN_FAIL: 'GET_' + CUSTOMER_PREFIX + '_TRADE_IN_FAIL',
  GET_CUSTOMER_TRADE_IN_MORE: 'GET_' + CUSTOMER_PREFIX + '_TRADE_IN_MORE',

  CHECK_CUSTOMER_OTP_REQUEST: 'CHECK_' + CUSTOMER_PREFIX + '_OTP_REQUEST',
  CHECK_CUSTOMER_OTP_SUCCESS: 'CHECK_' + CUSTOMER_PREFIX + '_OTP_SUCCESS',
  CHECK_CUSTOMER_OTP_FAIL: 'CHECK_' + CUSTOMER_PREFIX + '_OTP_FAIL',

  SAVE_CUSTOMER_REQUEST: 'SAVE_' + CUSTOMER_PREFIX + '_REQUEST',
  SAVE_CUSTOMER_SUCCESS: 'SAVE_' + CUSTOMER_PREFIX + '_SUCCESS',
  SAVE_CUSTOMER_FAIL: 'SAVE_' + CUSTOMER_PREFIX + '_FAIL',

  RESET_OTP: 'RESET_OTP',
  RESET_COUPON: 'RESET_COUPON',

  CHECK_CUSTOMER_COUPON_REQUEST: 'CHECK_' + CUSTOMER_PREFIX + '_COUPON_REQUEST',
  CHECK_CUSTOMER_COUPON_SUCCESS: 'CHECK_' + CUSTOMER_PREFIX + '_COUPON_SUCCESS',
  CHECK_CUSTOMER_COUPON_FAIL: 'CHECK_' + CUSTOMER_PREFIX + '_COUPON_FAIL',
};

export const getCustomerHistory = (params) => {
  return async dispatch => {
    dispatch({ type: CustomerActions.GET_CUSTOMER_HISTORY_REQUEST });
    try {
      const res = await API.getCustomerHistory(params);
      if (res?.data) {
        dispatch({
          type: CustomerActions.GET_CUSTOMER_HISTORY_SUCCESS,
          payload: { data: res?.data },
        });
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: CustomerActions.GET_CUSTOMER_HISTORY_FAIL,
          payload: { message: message },
        });
        if (!res?.error?.includes('unauthorize')) DialogService.alertError(message, "Oops!", () => { NavigationService.goBack(); });
      }
    } catch (e) {
      console.log('getCustomerHistory error: ', e);
    }
  };
};

export const saveCustomerInfo = (params) => {
  return async dispatch => {
    dispatch({ type: CustomerActions.SAVE_CUSTOMER_REQUEST });
    try {
      const res = await API.saveCustomerInfo(params);
      if (res?.data == '') {
        dispatch({
          type: CustomerActions.SAVE_CUSTOMER_SUCCESS,
          payload: { data: res?.data },
        });
        DialogService.alertSuccess(res?.message, 'Success', () => NavigationService.goBack());
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: CustomerActions.SAVE_CUSTOMER_FAIL,
          payload: { message: message },
        });
        if (!res?.error?.includes('unauthorize')) DialogService.alertError(message);
      }
    } catch (e) {
      console.log('saveCustomerInfo error: ', e);
    }
  };
};

export const getCustomerInfo = (params) => {
  return async dispatch => {
    dispatch({ type: CustomerActions.GET_CUSTOMER_INFO_REQUEST });
    try {
      const res = await API.getCustomerInfo(params);
      if (res?.data) {
        dispatch({
          type: CustomerActions.GET_CUSTOMER_INFO_SUCCESS,
          payload: { data: res?.data },
        });
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: CustomerActions.GET_CUSTOMER_INFO_FAIL,
          payload: { message: message },
        });
        if (!res?.error?.includes('unauthorize')) DialogService.alertError(message, "Oops!", () => { NavigationService.goBack(); });
      }
    } catch (e) {
      console.log('getCustomerInfo error: ', e);
    }
  };
};

export const getCustomerOTP = (params) => {
  return async dispatch => {
    dispatch({ type: CustomerActions.GET_CUSTOMER_OTP_REQUEST });
    try {
      const res = await API.getCustomerOTP(params);
      if (res?.data) {
        dispatch({
          type: CustomerActions.GET_CUSTOMER_OTP_SUCCESS,
          payload: { data: res?.data },
        });
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: CustomerActions.GET_CUSTOMER_OTP_FAIL,
          payload: { message: message },
        });
        if (!res?.error?.includes('unauthorize')) DialogService.alertError(message, "Oops!");
      }
    } catch (e) {
      console.log('getCustomerOTP error: ', e);
    }
  };
};

export const resetOTP = () => {
  return {
    type: CustomerActions.RESET_OTP
  };
};

export const resetCoupon = () => {
  return {
    type: CustomerActions.RESET_COUPON
  };
};

export const checkCustomerOTP = (params) => {
  return async dispatch => {
    dispatch({ type: CustomerActions.CHECK_CUSTOMER_OTP_REQUEST });
    try {
      const res = await API.checkCustomerOTP(params);
      if (res?.data) {
        dispatch({
          type: CustomerActions.CHECK_CUSTOMER_OTP_SUCCESS,
          payload: { data: res?.data },
        });
        DialogService.alertSuccess(res?.message, "Xác thực mã OTP");
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: CustomerActions.CHECK_CUSTOMER_OTP_FAIL,
          payload: { message: message },
        });
        if (!res?.error?.includes('unauthorize')) DialogService.alertError(message, "Oops!");
      }
    } catch (e) {
      console.log('checkCustomerOTP error: ', e);
    }
  };
};

export const getCustomerTradeIn = (params) => {
  return async dispatch => {
    const { page } = params;
    if (page == 1) {
      dispatch({ type: CustomerActions.GET_CUSTOMER_TRADE_IN_REQUEST });
    } else {
      dispatch({ type: CustomerActions.GET_CUSTOMER_TRADE_IN_MORE });
    }
    try {
      const res = await API.getCustomerTradeIn(params);
      if (res?.data) {
        dispatch({
          type: CustomerActions.GET_CUSTOMER_TRADE_IN_SUCCESS,
          payload: { data: res?.data?.data },
        });
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: CustomerActions.GET_CUSTOMER_TRADE_IN_FAIL,
          payload: { message: message },
        });
      }
    } catch (e) {
      console.log('checkCustomerOTP error: ', e);
    }
  };
};

export const checkCoupon = (params) => {
  return async dispatch => {
    dispatch({ type: CustomerActions.CHECK_CUSTOMER_COUPON_REQUEST });
    try {
      const res = await API.checkCoupon(params);
      if (res?.status) {
        dispatch({
          type: CustomerActions.CHECK_CUSTOMER_COUPON_SUCCESS,
          payload: { data: res?.data },
        });
        DialogService.alertSuccess(res?.message, "Thành công");
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: CustomerActions.CHECK_CUSTOMER_COUPON_FAIL,
          payload: { message: message },
        });
        DialogService.alertError(message, "Oops!");
      }
    } catch (e) {
      console.log('checkCoupon error: ', e);
    }
  };
};
