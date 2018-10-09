import React, { Component } from "react";
import InputBox from ".././components/Input";
import Label from ".././components/Label";

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
        <form>
          <div className="form-group row">
            <Label classes="col-sm-2 col-form-label" label={this.state.userName.label} />
            <div className="col-sm-10">
              <InputBox properties={this.state.userName} />
            </div>
          </div>
          <div className="form-group row">
            <Label classes="col-sm-2 col-form-label" label={this.state.password.label} />
            <div className="col-sm-10">
              <InputBox properties={this.state.password} />
            </div>
          </div>
          <div className="form-group"> 
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label><input type="checkbox" /> Remember me</label>
              </div>
            </div>
          </div>
          <div className="form-group"> 
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
    );
  }
}

export default App;
