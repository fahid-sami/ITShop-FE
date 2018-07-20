import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Inputs from "./Inputs";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
ReactDOM.render(<Inputs />, document.getElementById("root"));
registerServiceWorker();
