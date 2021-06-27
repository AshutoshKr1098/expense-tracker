import React, { Component } from "react";

import "../assets/style.css";
class Income extends Component {
  state = {};
  render() {
    return (
      <div className="income">
        <div>
          <p>Total Income:</p>
        </div>
        <div>
          <p>Total Money Spent:</p>
        </div>
      </div>
    );
  }
}

export default Income;
