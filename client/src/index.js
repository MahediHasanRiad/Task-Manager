import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./assates/css/animate.min.css";
import "./assates/css/bootstrap.css";
import "./assates/css/style.css";
import App from "./App";
import store from "./Redux/Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
