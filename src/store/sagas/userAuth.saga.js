import { put, call } from "redux-saga/effects";
import {
  loginUserService,
  registerUserService,
} from "../../services/userAuth.service";

import * as types from "../action.types";

export function* loginUserSaga(payload) {
  const response = yield call(loginUserService, payload.data);

  if (response.success === true) {
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } else if (response.success === false) {
    yield put({ type: types.LOGIN_USER_ERROR, response });
  }
}

export function* registerUserSaga(payload) {
  try {
    const response = yield call(registerUserService, payload.data);
    if (response.success === true) {
      // if (window.location.pathname !== "/login") {
      //   window.location.replace("/login");
      // }
      yield put({ type: types.REGISTER_USER_SUCCESS, response });
    }
  } catch (error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}
