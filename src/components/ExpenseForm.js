import React, { Component } from "react";
import { connect } from "react-redux";
import IncomeForm from "./IncomeForm";
import Expense from "./Expense";
import Button from "./Button";
import { addIncome, addExpense } from "../actions";

class ExpenseForm extends Component {
  submitIncome = () => {
    if (this.props.income === null && this.props.tempIncome !== null)
      this.props.addIncome(this.props.tempIncome);
  };
  submitExpense = () => {
    if (
      this.props.tempExpense.amount !== undefined &&
      this.props.tempExpense.detail !== undefined
    ) {
      console.log("hi there");
      console.log(this.props.tempExpense);
      this.props.addExpense(this.props.tempExpense);
    }
  };
  render() {
    return (
      <div className="expenseform">
        <form>
          <IncomeForm />
          <Expense />
          <Button onButtonClick={this.submitIncome} content="Add Income" />
          <Button onButtonClick={this.submitExpense} content="Add Expense" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    income: state.income,
    tempIncome: state.tempIncome,
    expense: state.expense,
    tempExpense: state.tempExpense,
  };
};
export default connect(mapStateToProps, { addIncome, addExpense })(ExpenseForm);
