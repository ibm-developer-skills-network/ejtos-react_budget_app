import React, { createContext, useReducer, useEffect } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  switch (action.type) {
    // Existing cases...
    // Your existing switch cases

    case 'SET_BUDGET':
      return {
        ...state,
        budget: action.payload,
      };
    case 'SET_REMAINING':
      return {
        ...state,
        remaining: action.payload,
      };
    case 'CHG_CURRENCY':
      return {
        ...state,
        currency: action.payload,
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter((expense) => expense.id !== action.payload),
      };
    case 'INCREASE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map((expense) => {
          if (expense.id === action.payload) {
            return { ...expense, cost: expense.cost + 10 }; // Increase by 10
          }
          return expense;
        }),
      };
    case 'DECREASE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map((expense) => {
          if (expense.id === action.payload) {
            return { ...expense, cost: expense.cost - 10 }; // Decrease by 10
          }
          return expense;
        }),
      };
    default:
      return state;
  }
};

// 1. Sets the initial state when the app loads
const initialState = {
  budget: 2000,
  expenses: [
    { id: 'Marketing', name: 'Marketing', cost: 50 },
    { id: 'Finance', name: 'Finance', cost: 300 },
    { id: 'Sales', name: 'Sales', cost: 70 },
    { id: 'Human Resource', name: 'Human Resource', cost: 40 },
    { id: 'IT', name: 'IT', cost: 500 },
  ],
  currency: '£',
  remaining: 0, // Initialize remaining in the initial state
};

// 2. Creates the context - this is what our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state, takes a reducer and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Calculate remaining budget whenever expenses, budget, or currency changes
  useEffect(() => {
    const totalExpenses = state.expenses.reduce((total, item) => total + item.cost, 0);
    const remaining = state.budget - totalExpenses;
    dispatch({ type: 'SET_REMAINING', payload: remaining });
  }, [state.expenses, state.budget, state.currency]);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        remaining: state.remaining, // Ensure remaining is present in the context
        dispatch,
        currency: state.currency,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
