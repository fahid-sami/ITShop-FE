import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import String from "./components/string";
import Func from "./components/props";
import Prop from "./components/prop";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <String />
        <Func length="5" maxlength="50" minlength="20" />
        <Prop height="200px" bg="red" />
      </div>
    );
  }
}

export default App;
