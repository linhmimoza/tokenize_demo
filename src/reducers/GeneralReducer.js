import actions from 'actions';

const initialState = {
  customers: null,
  summaries: [],
  markets: [],
  wards: [],
  sources: [],
  stores: [],
  isImeiExist: false,
  employeeList: [],
  imeiHistory: null,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case actions.GeneralActions.GENERAL_GET_CUSTOMERS_SUCCESS: {
      const {params, data} = payload;

      const customers =
        params?.page == 1 ? data : [...state.customers, ...data];
      return {
        ...state,
        customers,
        noMorePage: data?.length == 0,
      };
    }
    case actions.GeneralActions.GENERAL_GET_CITIES_SUCCESS:
      return {
        ...state,
        summaries: payload.data,
      };
    case actions.GeneralActions.GENERAL_GET_DISTRICTS_SUCCESS:
      return {
        ...state,
        markets: payload.data,
      };
    case actions.GeneralActions.GENERAL_GET_WARDS_SUCCESS:
      return {
        ...state,
        wards: payload.data,
      };
    case actions.GeneralActions.GENERAL_GET_SOURCES_SUCCESS:
      return {
        ...state,
        sources: payload.data,
      };
    case actions.GeneralActions.GENERAL_GET_STORES_SUCCESS:
      return {
        ...state,
        stores: payload.data,
      };
    case actions.GeneralActions.RESET_LIST_CUSTOMER:
      return {
        ...state,
        customers: null,
      };
    case actions.GeneralActions.GENERAL_CHECK_IMEI_SUCCESS:
      return {
        ...state,
        isImeiExist: {
          imei: payload.data,
          updatedProduct: payload.params.updatedProduct,
        },
      };
    case actions.GeneralActions.GENERAL_CHECK_IMEI_FAIL:
      return {
        ...state,
        isImeiExist: false,
      };
    case actions.GeneralActions.RESET_CHECK_IMEI:
      return {
        ...state,
        isImeiExist: false,
      };
    case actions.GeneralActions.GENERAL_GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employeeList: payload.data,
      };
    case actions.GeneralActions.GENERAL_GET_IMEI_HISTORY_SUCCESS: {
      const { params, data } = payload;
      const imeiHistory = params?.page == 1 ? data : [...state.imeiHistory, ...data];
      return {
        ...state,
        imeiHistory,
        noMorePage: data?.length == 0,
      };
    }
    case actions.GeneralActions.RESET_IMEI_HISTORY:
      return {
        ...state,
        imeiHistory: null,
      };
    default:
      return state;
  }
};
