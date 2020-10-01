import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./userAuth.reducer";

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
});

export default rootReducer;
