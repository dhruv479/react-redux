import * as types from "../action.types";

const initialState = {
  isLoggedIn: false,
};

export const loginReducer = (state = initialState, action) => {
  const response = action.response;

  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return response;
    case types.LOGIN_USER_ERROR:
      return state;

    default:
      return state;
  }
};

export const registerReducer = (state = {}, action) => {
  const response = action.response;

  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return state;
    case types.REGISTER_USER_ERROR:
      return response;
    default:
      return state;
  }
};
