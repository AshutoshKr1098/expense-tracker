import { combineReducers } from "redux";

const income = (state = null, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return action.payload;
    default:
      return state;
  }
};
const tempIncome = (state = null, action) => {
  switch (action.type) {
    case "GET_INCOME":
      return action.payload;
    default:
      return state;
  }
};
const expense = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload];
    default:
      return state;
  }
};
const tempExpense = (state = {}, action) => {
  switch (action.type) {
    case "GET_EXPENSE":
      return { ...state, amount: action.payload };
    case "GET_EXPENSE_DETAIL":
      return { ...state, detail: action.payload };
    default:
      return state;
  }
};
export default combineReducers({
  income: income,
  expense: expense,
  tempIncome: tempIncome,
  tempExpense: tempExpense,
});
