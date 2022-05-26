import { combineReducers } from "redux";

import counter from "./counter";
import loginReducer from "./login";

const allReducers = combineReducers({
  //counter,
  loginReducer,
  // add more reducers here
});

export default allReducers;
