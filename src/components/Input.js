import React, { Component } from "react";
import "../assets/style.css";
class Input extends Component {
  onInputChange = (e) => {
    this.props.getInput(e.target.value);
  };
  render() {
    return (
      <input className="input" type="text" onChange={this.onInputChange} />
    );
  }
}

export default Input;
