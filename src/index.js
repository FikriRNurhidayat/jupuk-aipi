import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./views/pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById("root")
);
