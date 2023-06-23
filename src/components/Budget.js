import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
 
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const setBudget = (newBudget) => { // alert
        if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the current spendings." );
        }
        else {
            if (newBudget <= 20000) {
                // Event to change budget
                dispatch({
                  type: "SET_BUDGET",
                  payload: newBudget,
                });
            }
        }
    }

    return (
        <div className="alert alert-secondary">
            <span>
                Budget: {currency}
                <input type="number" value={budget} step="10" onChange={(e) => setBudget(e.target.value)}></input>
            </span>
        </div>
    );
    
};

export default Budget;

