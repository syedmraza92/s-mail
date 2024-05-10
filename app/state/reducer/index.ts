import { combineReducers } from "redux";
import toggleReducer from "./toggleReducer";
import newMailReducer from "./toggleReducer";

const reducer = combineReducers({
  toggle: toggleReducer,
  newMail: newMailReducer,
});

export default reducer;
