import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers/index";
const persistConfig = {
  key: "cart",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = () => {
  let storess = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  let persistor = persistStore(storess);
  return { storess, persistor };
};

export default store;
