import React, { Component } from "react";
import Input from "./Input";
class Expense extends Component {
  state = {};
  render() {
    return (
      <div className="expense">
        <h4>Enter your expense title</h4>
        <Input />
        <h4>Enter Amount</h4>
        <Input />
      </div>
    );
  }
}

export default Expense;
