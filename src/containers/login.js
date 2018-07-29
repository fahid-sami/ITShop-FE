import React, { Component } from "react";
import InputBox from ".././components/Input";

class App extends Component {
  state = {
    userName: {
      value: "",
      maxLength: 6,
      minLength: 3,
      type: "text",
      label: "username/email",
      placehHolder: "Enter username/email here",
      required: true
    },
    password: {
      value: "",
      maxLength: 60,
      minLength: 6,
      type: "password",
      label: "password",
      placehHolder: "Enter password here",
      required: true
    }
  }

  render() {
    return (
      <div>
        <InputBox properties={this.state.userName}> </InputBox>
        <InputBox properties={this.state.password}> </InputBox>
      </div>
    );
  }
}

export default App;
