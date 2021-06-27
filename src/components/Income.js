import React, { Component } from "react";
import Input from "./Input";
class Income extends Component {
  state = {};
  render() {
    return (
      <div className="income">
        <h4>Enter your monthly Income</h4>
        <Input />
      </div>
    );
  }
}

export default Income;
