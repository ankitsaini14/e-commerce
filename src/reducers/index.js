import cartReducers from "./cartReducers";
import buyReducers from "./buyReducers";
import userReducers from "./userReducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartReducers,
  buyReducers,
  userReducers,
});

export default rootReducer;
