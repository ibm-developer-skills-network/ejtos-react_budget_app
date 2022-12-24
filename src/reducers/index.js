import { combineReducers } from "redux";

// States to initialize Reducers
const BudgetState = {
    budgetValue: 2000,
    spentBudget: 0
};

const CurrencyState = {
    currentCurrency: { 'Euro': '€' },
    availableCurrencies: [{ 'Euro': '€' }, { 'Dollar': '$' }, { 'Yen': '¥' }, { 'Rupee': '₹' }]
}

const ExpenseListState = [
    { id: 0, department: 'Human Resource', allocation: 50 },
    { id: 1, department: 'Marketing', allocation: 100 },
]

// List of Reducers for App
export const BudgetReducer = (state = BudgetState, action) => {

    switch (action.type) {
        case "CHANGE BUDGET":
            if (action.newBudget < 0) {
                alert("Budget can't be negative number");
            } else if (action.newBudget < state.spentBudget) {
                alert("Lower than spent");
            } else if (action.newBudget > 20000) {
                alert("Higher than 20000");
            } else {
                return {
                    ...state,
                    budgetValue: action.newBudget,
                };
            }
            break;
        case "UPDATE SPENT BUDGET":
            // Calculate the sum of all expenses' allocations
            const spentBudget = action.expensesState.reduce(
                (acc, expense) => acc + expense.allocation,
                0
            );
            return {
                ...state,
                spentBudget,
            };
        default:
            return state;
    }
};

export const CurrencyReducer = (state = CurrencyState, action) => {
    switch (action.type) {
        case "CHANGE CURRENCY":
            const newCurrencyKey = action.newCurrencyKey;
            const newCurrencyObject = state.availableCurrencies.find(
                (currency) => currency[newCurrencyKey]
            );
            return {
                ...state,
                currentCurrency: newCurrencyObject,
            };
        default:
            return state;
    }
};

export const ExpenseListReducer = (state = ExpenseListState, action) => {

    const existingExpense = state.find(expense => expense.department === action.department);

    switch (action.type) {
        case 'ADD EXPENSE':
            if (existingExpense) {
                // Use map to iterate over the state array and return a new array with the updated values
                return state.map((expense) => {
                    // If the current expense is the existing department, update the allocation value
                    if (expense.department === existingExpense.department) {
                        return {
                            ...expense,
                            allocation: expense.allocation + action.allocation,
                        };
                    }
                    // Otherwise, return the expense as it is
                    return expense;
                });
            } else {
                // If it doesn't exists, add the new expense
                return [
                    ...state,
                    { id: action.id, department: action.department, allocation: action.allocation },
                ];
            }

        case 'SUBTRACT EXPENSE':
            if (existingExpense) {
                return state.map((expense) => {
                    // If the current expense is the existing department, update the allocation value
                    if (expense.department === existingExpense.department) {
                        return {
                            ...expense,
                            allocation: expense.allocation - action.allocation,
                        };
                    }
                    // Otherwise, return the expense as it is
                    return expense;
                })
            } else {
                alert("Expense doesn't exist. Select an existing one.")
            }
            break;
        case 'DELETE EXPENSE':
            return state.filter((expense, index) => index !== action.id);

        case 'INCREASE BY TEN':
            return state.map((expense, index) => {
                if (index === action.id) {
                    return { ...expense, allocation: expense.allocation + 10 };
                }
                return expense;
            });

        case 'DECREASE BY TEN':
            return state.map((expense, index) => {
                if (index === action.id) {
                    return { ...expense, allocation: expense.allocation - 10 };
                }
                return expense;
            });

        default:
            return state;
    }
};

// Combine all reducers and export to make centralized store
const RootReducer = combineReducers({
    BudgetReducer,
    CurrencyReducer,
    ExpenseListReducer
});
export default RootReducer;