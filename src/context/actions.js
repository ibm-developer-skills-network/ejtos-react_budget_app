import { ACTION_TYPES } from "./AppContext";

const addExpense = (payload) => ({
  type: ACTION_TYPES.ADD_EXPENSE,
  payload,
});
const redExpense = (payload) => ({
  type: ACTION_TYPES.RED_EXPENSE,
  payload,
});
const deleteExpense = (payload) => ({
  type: ACTION_TYPES.DELETE_EXPENSE,
  payload,
});
const setBudget = (payload) => ({
  type: ACTION_TYPES.SET_BUDGET,
  payload,
});
const chgCurrency = (payload) => ({
  type: ACTION_TYPES.CHG_CURRENCY,
  payload,
});

export const actions = {
  addExpense,
  redExpense,
  deleteExpense,
  setBudget,
  chgCurrency,
};
