import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Users from "./components/users";
import "bootstrap/dist/css/bootstrap.css";
import { Message } from "./components/message";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Message />
    <Users />
  </React.StrictMode>
);
reportWebVitals();
