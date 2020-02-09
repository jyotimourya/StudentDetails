import React from "react";
import "./styles.css";

import store from "./store";
import Student from "./components/student";
import CurrentBatch from "./components/currentBatch";

export default function App() {
  const names = store.getState().name;
  function NamesUi() {
    return (
      <div>
        <CurrentBatch data={names} />
      </div>
    );
  }

  function noNamesUi() {
    return <center>No Students!</center>;
  }

  return (
    <div className="App">
      <div>{names.length === 0 ? noNamesUi() : NamesUi()}</div>
      <Student data={store.getState()} />
    </div>
  );
}
