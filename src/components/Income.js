import React, { Component } from "react";
import { connect } from "react-redux";

import "../assets/style.css";
class Income extends Component {
  getTotalExpense = () => {
    let totalExpense = 0;
    this.props.expense.map((exp) => (totalExpense += exp.amount));
    return totalExpense;
  };
  render() {
    return (
      <div className="income">
        <div>
          <p>Total Income:{this.props.income}</p>
        </div>
        <div>
          <p>Total Money Spent:{this.getTotalExpense()}</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { income: state.income, expense: state.expense };
};
export default connect(mapStateToProps)(Income);
