import * as types from "../action.types";

export const loginUserAction = (data) => {
  return {
    type: types.LOGIN_USER,
    data,
  };
};

export const registerUserAction = (data) => {
  return {
    type: types.REGISTER_USER,
    data,
  };
};
