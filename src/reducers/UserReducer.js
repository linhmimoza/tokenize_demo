import actions from "actions";

const initialState = {
  userInfo: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.userActions.USER_LOG_IN_SUCCESS:
      return {
        ...state,
        userInfo: payload.data,
      };
    case actions.userActions.GET_USER_SUCCESS:
      return {
        ...state, userInfo: payload.data
      };
    default:
      return state;
  }
};
