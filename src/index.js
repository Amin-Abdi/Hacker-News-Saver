import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Context";

//This is for the notification message
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AlertProvider template={AlertTemplate}>
        <App />
      </AlertProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
