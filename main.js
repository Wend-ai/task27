import React from "react";
import ReactDOM from "react-dom/client";
import BankApp from "./App"; 

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  React.createElement(React.StrictMode, null, React.createElement(BankApp))
);