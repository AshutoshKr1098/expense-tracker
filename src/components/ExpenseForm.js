import React, { Component } from "react";
import Income from "./Income";
import Expense from "./Expense";
import Button from "./Button";

class ExpenseForm extends Component {
  render() {
    return (
      <div className="expenseform">
        <form>
          <Income />
          <Expense />
          <Button content="Add Income" />
          <Button content="Add Expense" />
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
