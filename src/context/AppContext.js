import React, { createContext, useReducer } from "react";
import { getTotalExpenses } from "./utils";

export const ACTION_TYPES = {
  ADD_EXPENSE: "ADD_EXPENSE",
  RED_EXPENSE: "RED_EXPENSE",
  DELETE_EXPENSE: "DELETE_EXPENSE",
  SET_BUDGET: "SET_BUDGET",
  CHG_CURRENCY: "CHG_CURRENCY",
};

export const MAXIMUM_BUDGET = 20000;

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  let budget = 0;

  switch (action.type) {
    case ACTION_TYPES.ADD_EXPENSE:
      let total_budget = 0;

      total_budget = getTotalExpenses(state.expenses);
      total_budget = total_budget + action.payload.cost;

      if (total_budget <= state.budget) {
        total_budget = 0;

        state.expenses.map((currentExp) => {
          if (currentExp.name === action.payload.name) {
            currentExp.cost = action.payload.cost + currentExp.cost;
          }
          return currentExp;
        });
        return {
          ...state,
        };
      } else {
        alert("Cannot increase the allocation! Out of funds");
        return state;
      }

    case ACTION_TYPES.RED_EXPENSE:
      const red_expenses = state.expenses.map((currentExp) => {
        if (
          currentExp.name === action.payload.name &&
          currentExp.cost - action.payload.cost >= 0
        ) {
          currentExp.cost = currentExp.cost - action.payload.cost;
          budget = state.budget + action.payload.cost;
        }
        return currentExp;
      });

      return {
        ...state,
        expenses: red_expenses,
      };

    case ACTION_TYPES.DELETE_EXPENSE:
      state.expenses.map((currentExp) => {
        if (currentExp.name === action.payload) {
          currentExp.cost = 0;
        }
        return currentExp;
      });

      return {
        ...state,
      };
    case ACTION_TYPES.SET_BUDGET:
      if (action.payload >= MAXIMUM_BUDGET) {
        return {
          ...state,
          budget: MAXIMUM_BUDGET,
        };
      }

      const totalExpenses = getTotalExpenses(state.expenses);
      if (action.payload <= getTotalExpenses(state.expenses)) {
        return {
          ...state,
          budget: totalExpenses,
        };
      }

      return {
        ...state,
        budget: action.payload,
      };

    case ACTION_TYPES.CHG_CURRENCY:
      state.currency = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};

// 1. Sets the initial state when the app loads
const initialState = {
  budget: 2000,
  expenses: [
    { id: "Marketing", name: "Marketing", cost: 50 },
    { id: "Finance", name: "Finance", cost: 300 },
    { id: "Sales", name: "Sales", cost: 70 },
    { id: "Human Resource", name: "Human Resource", cost: 40 },
    { id: "IT", name: "IT", cost: 500 },
  ],
  currency: "£",
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);
  let remaining = 0;

  if (state.expenses) {
    const totalExpenses = state.expenses.reduce((total, item) => {
      return (total = total + item.cost);
    }, 0);
    remaining = state.budget - totalExpenses;
  }

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        remaining: remaining,
        dispatch,
        currency: state.currency,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
