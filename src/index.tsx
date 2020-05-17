import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import 主题 from "./核心/主题";
import 程序 from "./核心/程序";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <主题>
      <程序 />
    </主题>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
