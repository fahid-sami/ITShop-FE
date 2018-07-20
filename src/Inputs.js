import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Inputs extends Component {
  render() {
    return (
      <div className="Inputs">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
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

export default Inputs;
