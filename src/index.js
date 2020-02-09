import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import store from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(<App data={store.getState()} />, rootElement);

store.subscribe(() => {
  ReactDOM.render(<App />, rootElement);
});
