import React, { Component } from "react";
import IncomeForm from "./IncomeForm";
import Expense from "./Expense";
import Button from "./Button";

class ExpenseForm extends Component {
  render() {
    return (
      <div className="expenseform">
        <form>
          <IncomeForm />
          <Expense />
          <Button content="Add Income" />
          <Button content="Add Expense" />
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
