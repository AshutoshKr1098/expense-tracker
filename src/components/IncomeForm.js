import React, { Component } from "react";
import Input from "./Input";
class IncomeForm extends Component {  
  getInput = (input) => {
    
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

export default IncomeForm;
