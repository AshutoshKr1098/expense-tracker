import React, { Component } from "react";
import Income from "./Income";
import ExpenseList from "./ExpenseList";
class ExpenseDetail extends Component {
  state = {};
  render() {
    return (
      <div className="expensedetail">
        <Income />
        <ExpenseList />
      </div>
    );
  }
}

export default ExpenseDetail;
