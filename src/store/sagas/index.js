import { takeLatest } from "redux-saga/effects";
import * as types from "../action.types";

import { loginUserSaga, registerUserSaga } from "./userAuth.saga";

export default function* watchUserAuth() {
  yield takeLatest(types.LOGIN_USER, loginUserSaga);
  yield takeLatest(types.REGISTER_USER, registerUserSaga);
}
