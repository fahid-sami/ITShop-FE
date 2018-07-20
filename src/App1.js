import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App1 extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          To get started, I have edited <code>src/App.js</code> and save to
          reload.
          <label>
            Name:
            <input type="text" name="name" required="true" />
          </label>
          <input type="submit" value="Submit" />
        </div>
      </div>
    );
  }
}
class Inputs extends Component {
  render() {
    return (
      <div className="Inputs">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          To get started, I have edited <code>src/App.js</code> and save to
          reload.
          <label>
            Name:
            <input type="text" name="name" required="true" />
          </label>
          <input type="submit" value="Submit" />
        </div>
      </div>
    );
  }
}

export default App1;
