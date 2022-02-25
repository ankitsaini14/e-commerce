import cartReducers from "./cartReducers";
import buyReducers from "./buyReducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartReducers,
  buyReducers,
});

export default rootReducer;
