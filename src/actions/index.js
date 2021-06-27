export const getIncome = (income) => {
  return {
    type: "GET_INCOME",
    payload: income,
  };
};

export const addIncome = (income) => {
  return {
    type: "ADD_INCOME",
    payload: income,
  };
};

export const getExpense = (expense) => {
  return {
    type: "GET_EXPENSE",
    payload: expense,
  };
};

export const getExpenseDetails = (expenseDetail) => {
  return {
    type: "GET_EXPENSE_DETAIL",
    payload: expenseDetail,
  };
};

export const addExpense = (expense) => {
  return {
    type: "ADD_EXPENSE",
    payload: expense,
  };
};
