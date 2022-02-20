import React from "react";
import ReactDOM from "react-dom";
import Routing from './Routing'
import Router from './react-router/Routing'
import "regenerator-runtime/runtime";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
