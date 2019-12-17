import { combineReducers } from "redux";
import lettersReducers from "./letters";

const allReducers = combineReducers({
  letters: lettersReducers
});

export default allReducers;
