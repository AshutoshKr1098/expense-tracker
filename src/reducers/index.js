import { combineReducers } from "redux";

const income = (state = null, action) => {
  switch (action.type) {
    case "GET_INCOME":
      return action.payload;
    case "ADD_INCOME":
      return action.payload;
    default:
      return state;
  }
};
const expense = (state = [], action) => {
  switch (action.type) {
    case "GET_EXPENSE":
      return action.payload;
    case "GET_EXPENSE_DETAIL":
      return action.payload;
    case "ADD_EXPENSE":
      return [...state, action.payload];
  }
};
export default combineReducers({
  income: income,
  expense: expense,
});
