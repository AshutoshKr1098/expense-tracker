import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseDetail from "./ExpenseDetail";
import "../assets/style.css";
class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Expense Tracker App</h2>
        <hr />
        <div className="app_body">
          <ExpenseForm />
          <ExpenseDetail />
        </div>
      </div>
    );
  }
}

export default App;
