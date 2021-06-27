import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
class App extends Component {
  render() {
    return (
      <div>
        <h2>Expense Tracker App</h2>
        <ExpenseForm />
      </div>
    );
  }
}

export default App;
