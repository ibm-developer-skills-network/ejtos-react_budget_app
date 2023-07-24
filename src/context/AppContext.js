import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let new_expenses = [];
    switch (action.type) {
        case 'ADD_QUANTITY':
            let updatedqty = false;
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.allocatedBoudget = expense.allocatedBoudget + action.payload.quantity;
                    updatedqty = true;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'RED_QUANTITY':
                state.expenses.map((expense)=>{

                    if(expense.name === action.payload.name) {
                        expense.allocatedBoudget = expense.allocatedBoudget - action.payload.quantity;
                    }

                    expense.allocatedBoudget = expense.allocatedBoudget < 0 ? 0 : expense.allocatedBoudget;
                    new_expenses.push(expense);
                    return true;
                })
                state.expenses = new_expenses;
                action.type = "DONE";
                return {
                    ...state,
                };
        
        case 'CHG_BUDGET':
            state.Budget = action.payload < 0 ? 0 : action.payload;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'DELETE_ITEM':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.allocatedBoudget = 0;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };
    case 'CHG_CURRENCY':
            action.type = "DONE";
            state.Currency = action.payload;
            return {
                ...state
            }

        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    Budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', allocatedBoudget: 50 },
        { id: "Finance", name: 'Finance', allocatedBoudget: 300 },
        { id: "Sales", name: 'Sales', allocatedBoudget: 70 },
        { id: "Human Resource", name: 'Human Resource', allocatedBoudget: 40 },
        { id: "IT", name: 'IT', allocatedBoudget: 500 },
    ],
    Currency: '£'
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total = total + item.allocatedBoudget);
    }, 0);

    state.spent = totalExpenses;

    return (
        <AppContext.Provider
            value={{
                Budget: state.Budget,
                expenses: state.expenses,
                spent: state.spent,
                dispatch,
                Currency: state.Currency
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};