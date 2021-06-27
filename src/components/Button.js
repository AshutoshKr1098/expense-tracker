import React, { Component } from "react";
import "../assets/style.css";
class Button extends Component {
  state = {};
  render() {
    return <button>{this.props.content}</button>;
  }
}

export default Button;
