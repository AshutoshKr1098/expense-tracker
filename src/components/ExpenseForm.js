import React, { Component } from "react";
import Income from "./Income";
import Expense from "./Expense";

class ExpenseForm extends Component {
  render() {
    return (
      <div className="expenseform">
        <form>
          <Income />
          <Expense />
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
