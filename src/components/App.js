import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import "../assets/style.css";
class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Expense Tracker App</h2>
        <hr />
        <ExpenseForm />
      </div>
    );
  }
}

export default App;
