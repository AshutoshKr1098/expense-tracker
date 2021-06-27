import React, { Component } from "react";
import Input from "./Input";
import { getIncome } from "../actions";
import { connect } from "react-redux";
class IncomeForm extends Component {
  getInput = (input) => {
    this.props.getIncome(parseInt(input));
  };
  render() {
    return (
      <div className="incomeform">
        <h4>Enter your monthly Income</h4>
        <Input getInput={this.getInput} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return { state: state };
};
export default connect(mapStateToProps, { getIncome })(IncomeForm);
