import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeMockApi } from "./mirage";

makeMockApi();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
