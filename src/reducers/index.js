import { combineReducers } from "redux";

import loginReducers from "./login";
import message from "./message";

const allReducers =  combineReducers({
  loginReducers,
  message,
});

export default allReducers;