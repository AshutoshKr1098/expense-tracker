import React, { Component } from "react";
import "../assets/style.css";
class Button extends Component {
  onButtonClick = (e) => {
    e.preventDefault();
    this.props.onButtonClick();
  };
  render() {
    return <button onClick={this.onButtonClick}>{this.props.content}</button>;
  }
}

export default Button;
