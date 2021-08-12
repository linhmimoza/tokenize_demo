import API from "services/api";
import { ERROR_MSG } from "common/AppConst";
import { DialogService } from "components/Dialog";

export const GENERAL_PREFIX = "GENERAL";

export const GeneralActions = {
  GENERAL_PREFIX,

  GENERAL_GET_CUSTOMERS_REQUEST: GENERAL_PREFIX + '_GET_CUSTOMERS_REQUEST',
  GENERAL_GET_CUSTOMERS_SUCCESS: GENERAL_PREFIX + '_GET_CUSTOMERS_SUCCESS',
  GENERAL_GET_CUSTOMERS_FAIL: GENERAL_PREFIX + '_GET_CUSTOMERS_FAIL',
  GENERAL_GET_CUSTOMERS_MORE: GENERAL_PREFIX + '_GET_CUSTOMERS_MORE',

  GENERAL_GET_CITIES_REQUEST: GENERAL_PREFIX + '_GET_CITIES_REQUEST',
  GENERAL_GET_CITIES_SUCCESS: GENERAL_PREFIX + '_GET_CITIES_SUCCESS',
  GENERAL_GET_CITIES_FAIL: GENERAL_PREFIX + '_GET_CITIES_FAIL',

  GENERAL_GET_DISTRICTS_REQUEST: GENERAL_PREFIX + '_GET_DISTRICTS_REQUEST',
  GENERAL_GET_DISTRICTS_SUCCESS: GENERAL_PREFIX + '_GET_DISTRICTS_SUCCESS',
  GENERAL_GET_DISTRICTS_FAIL: GENERAL_PREFIX + '_GET_DISTRICTS_FAIL',

  GENERAL_GET_WARDS_REQUEST: GENERAL_PREFIX + '_GET_WARDS_REQUEST',
  GENERAL_GET_WARDS_SUCCESS: GENERAL_PREFIX + '_GET_WARDS_SUCCESS',
  GENERAL_GET_WARDS_FAIL: GENERAL_PREFIX + '_GET_WARDS_FAIL',

  GENERAL_GET_SOURCES_REQUEST: GENERAL_PREFIX + '_GET_SOURCES_REQUEST',
  GENERAL_GET_SOURCES_SUCCESS: GENERAL_PREFIX + '_GET_SOURCES_SUCCESS',
  GENERAL_GET_SOURCES_FAIL: GENERAL_PREFIX + '_GET_SOURCES_FAIL',

  GENERAL_GET_STORES_REQUEST: GENERAL_PREFIX + '_GET_STORES_REQUEST',
  GENERAL_GET_STORES_SUCCESS: GENERAL_PREFIX + '_GET_STORES_SUCCESS',
  GENERAL_GET_STORES_FAIL: GENERAL_PREFIX + '_GET_STORES_FAIL',

  GENERAL_CHECK_IMEI_REQUEST: GENERAL_PREFIX + '_CHECK_IMEI_REQUEST',
  GENERAL_CHECK_IMEI_SUCCESS: GENERAL_PREFIX + '_CHECK_IMEI_SUCCESS',
  GENERAL_CHECK_IMEI_FAIL: GENERAL_PREFIX + '_CHECK_IMEI_FAIL',

  GENERAL_GET_EMPLOYEES_REQUEST: GENERAL_PREFIX + '_GET_EMPLOYEES_REQUEST',
  GENERAL_GET_EMPLOYEES_SUCCESS: GENERAL_PREFIX + '_GET_EMPLOYEES_SUCCESS',
  GENERAL_GET_EMPLOYEES_FAIL: GENERAL_PREFIX + '_GET_EMPLOYEES_FAIL',

  GENERAL_GET_IMEI_HISTORY_REQUEST: GENERAL_PREFIX + '_GET_IMEI_HISTORY_REQUEST',
  GENERAL_GET_IMEI_HISTORY_SUCCESS: GENERAL_PREFIX + '_GET_IMEI_HISTORY_SUCCESS',
  GENERAL_GET_IMEI_HISTORY_FAIL: GENERAL_PREFIX + '_GET_IMEI_HISTORY_FAIL',
  GENERAL_GET_IMEI_HISTORY_MORE: GENERAL_PREFIX + '_GET_IMEI_HISTORY_MORE',


  RESET_LIST_CUSTOMER: 'RESET_LIST_CUSTOMER',
  RESET_CHECK_IMEI: 'RESET_CHECK_IMEI',
  RESET_IMEI_HISTORY: 'RESET_IMEI_HISTORY',
};

export const getCustomers = (params) => {
  return async dispatch => {

    const { page } = params;
    if (page == 1) {
      dispatch({ type: GeneralActions.GENERAL_GET_CUSTOMERS_REQUEST });
    } else {
      dispatch({ type: GeneralActions.GENERAL_GET_CUSTOMERS_MORE });
    }

    try {
      const res = await API.getCustomers(params);
      if (res?.data) {
        if (params?.searchEqual) {
          let tmpIndex = res?.data.findIndex(e => e?.phoneNo === params.param);
          if (tmpIndex !== -1) {
            dispatch({
              type: GeneralActions.GENERAL_GET_CUSTOMERS_SUCCESS,
              payload: { data: [res?.data[tmpIndex]], params },
            });
          } else {
            const message = 'Không tìm thấy khách hàng!';
            dispatch({
              type: GeneralActions.GENERAL_GET_CUSTOMERS_FAIL,
              payload: { message: message },
            });
            if (!res?.error?.includes('unauthorize')) DialogService.alertError(message);
          }
        } else {
          dispatch({
            type: GeneralActions.GENERAL_GET_CUSTOMERS_SUCCESS,
            payload: { data: res?.data, params },
          });
        }
      } else {
        const message = 'Không tìm thấy khách hàng!';
        dispatch({
          type: GeneralActions.GENERAL_GET_CUSTOMERS_FAIL,
          payload: { message: message },
        });
        if (!res?.error?.includes('unauthorize')) DialogService.alertError(message);
      }
    } catch (e) {
      console.log('getCustomers error: ', e);
    }
  };
};

export const resetListCustomer = () => {
  return {
    type: GeneralActions.RESET_LIST_CUSTOMER
  };
};

export const getSummaries = () => {
  return async dispatch => {
    dispatch({ type: GeneralActions.GENERAL_GET_CITIES_REQUEST });
    try {
      const res = await API.getSummaries();
      if (res?.data) {
        dispatch({
          type: GeneralActions.GENERAL_GET_CITIES_SUCCESS,
          payload: { data: res?.data },
        });
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: GeneralActions.GENERAL_GET_CITIES_FAIL,
          payload: { message: message },
        });
        if (!res?.error?.includes('unauthorize')) DialogService.alertError(message);
      }
    } catch (e) {
      console.log('getCities error: ', e);
    }
  };
};

export const getMarkets = (params) => {
  return async dispatch => {
    dispatch({ type: GeneralActions.GENERAL_GET_DISTRICTS_REQUEST });
    try {
      const res = await API.getMarkets(params);
      if (res?.data) {
        dispatch({
          type: GeneralActions.GENERAL_GET_DISTRICTS_SUCCESS,
          payload: { data: res?.data },
        });
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: GeneralActions.GENERAL_GET_DISTRICTS_FAIL,
          payload: { message: message },
        });
        if (!res?.error?.includes('unauthorize')) DialogService.alertError(message);
      }
    } catch (e) {
      console.log('getCities error: ', e);
    }
  };
};

export const getWards = (params) => {
  return async dispatch => {
    dispatch({ type: GeneralActions.GENERAL_GET_WARDS_REQUEST });
    try {
      const res = await API.getWards(params);
      if (res?.data) {
        dispatch({
          type: GeneralActions.GENERAL_GET_WARDS_SUCCESS,
          payload: { data: res?.data },
        });
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: GeneralActions.GENERAL_GET_WARDS_FAIL,
          payload: { message: message },
        });
        if (!res?.error?.includes('unauthorize')) DialogService.alertError(message);
      }
    } catch (e) {
      console.log('getWards error: ', e);
    }
  };
};

export const getOrderSources = (params) => {
  return async dispatch => {
    dispatch({ type: GeneralActions.GENERAL_GET_SOURCES_REQUEST });
    try {
      const res = await API.getOrderSources(params);
      if (res?.data) {
        dispatch({
          type: GeneralActions.GENERAL_GET_SOURCES_SUCCESS,
          payload: { data: res?.data },
        });
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: GeneralActions.GENERAL_GET_SOURCES_FAIL,
          payload: { message: message },
        });
        if (!res?.error?.includes('unauthorize')) DialogService.alertError(message);
      }
    } catch (e) {
      console.log('getWards error: ', e);
    }
  };
};

export const getStores = () => {
  return async dispatch => {
    dispatch({ type: GeneralActions.GENERAL_GET_STORES_REQUEST });
    try {
      const res = await API.getStores();
      if (res?.data) {
        dispatch({
          type: GeneralActions.GENERAL_GET_STORES_SUCCESS,
          payload: { data: res?.data },
        });
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: GeneralActions.GENERAL_GET_STORES_FAIL,
          payload: { message: message },
        });
        if (!res?.error?.includes('unauthorize')) DialogService.alertError(message);
      }
    } catch (e) {
      console.log('getStores error: ', e);
    }
  };
};

export const checkIMEIExist = (params) => {
  return async dispatch => {
    dispatch({ type: GeneralActions.GENERAL_CHECK_IMEI_REQUEST });
    try {
      const res = await API.checkIMEIExist(params);
      if (res?.data) {
        dispatch({
          type: GeneralActions.GENERAL_CHECK_IMEI_SUCCESS,
          payload: { data: parseInt(res?.data), params },
        });
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: GeneralActions.GENERAL_CHECK_IMEI_FAIL,
          payload: { message: message },
        });
        if (!res?.error?.includes('unauthorize')) DialogService.alertError('Số IMEI không hợp lệ');
      }
    } catch (e) {
      console.log('checkIMEIExist error: ', e);
    }
  };
};

export const resetCheckImei = () => {
  return {
    type: GeneralActions.RESET_CHECK_IMEI
  };
};

export const getEmployees = () => {
  return async dispatch => {
    dispatch({ type: GeneralActions.GENERAL_GET_EMPLOYEES_REQUEST });
    try {
      const res = await API.getEmployees();
      if (res?.data) {
        dispatch({
          type: GeneralActions.GENERAL_GET_EMPLOYEES_SUCCESS,
          payload: { data: res?.data },
        });
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: GeneralActions.GENERAL_GET_EMPLOYEES_FAIL,
          payload: { message: message },
        });
        if (!res?.error?.includes('unauthorize')) DialogService.alertError(message);
      }
    } catch (e) {
      console.log('getEmployees error: ', e);
    }
  };
};

export const getImeiHistory = (params) => {
  return async dispatch => {
    const { page } = params;
    if (page == 1) {
      dispatch({ type: GeneralActions.GENERAL_GET_IMEI_HISTORY_REQUEST});
    } else {
      dispatch({ type: GeneralActions.GENERAL_GET_IMEI_HISTORY_MORE });
    }
    try {
      const res = await API.getImeiHistory(params);
      if (res?.data) {
        dispatch({
          type: GeneralActions.GENERAL_GET_IMEI_HISTORY_SUCCESS,
          payload: { data: res?.data, params },
        });
      } else {
        const message = res.message || ERROR_MSG;
        dispatch({
          type: GeneralActions.GENERAL_GET_IMEI_HISTORY_FAIL,
          payload: { message: message },
        });
        if (!res?.error?.includes('unauthorize')) DialogService.alertError(message);
      }
    } catch (e) {
      console.log('getImeiHistory error: ', e);
    }
  };
};

export const resetImeiHistory = () => {
  return {
    type: GeneralActions.RESET_IMEI_HISTORY
  };
};