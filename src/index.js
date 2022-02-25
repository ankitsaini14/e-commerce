import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import stores from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const { storess, persistor } = stores();
// console.log(storess, persistor);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storess}>
      <PersistGate loading={"null"} persistor={persistor} store={storess}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
