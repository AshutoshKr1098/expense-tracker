import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "./Input";
import { getExpense, getExpenseDetails } from "../actions";

class Expense extends Component {
  getInputExpense = (input) => {
    this.props.getExpense(parseInt(input));
  };
  getInputExpenseDetail = (input) => {
    this.props.getExpenseDetails(input);
  };
  render() {
    return (
      <div className="expense">
        <h4>Enter your expense title</h4>
        <Input getInput={this.getInputExpenseDetail} />
        <h4>Enter Amount</h4>
        <Input getInput={this.getInputExpense} />
      </div>
    );
  }
}

export default connect(null, { getExpense, getExpenseDetails })(Expense);
