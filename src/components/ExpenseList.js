import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/style.css";
class ExpenseList extends Component {
  renderExpenses = () => {
    return this.props.expense.map((exp, index) => {
      return (
        <div key={index}>
          <p>{exp.detail}</p>
          <span>{exp.amount}</span>
        </div>
      );
    });
  };
  render() {
    return <div className="expenselist">{this.renderExpenses()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { expense: state.expense };
};
export default connect(mapStateToProps)(ExpenseList);
