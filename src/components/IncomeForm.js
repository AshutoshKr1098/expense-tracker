import React, { Component } from "react";
import Input from "./Input";
class IncomeForm extends Component {
  state = {};
  render() {
    return (
      <div className="incomeform">
        <h4>Enter your monthly Income</h4>
        <Input />
      </div>
    );
  }
}

export default IncomeForm;
