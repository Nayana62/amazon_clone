import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/reducer";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StateProvider  initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>
);
