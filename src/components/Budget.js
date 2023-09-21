import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value, 10);
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

        if (!isNaN(newBudgetValue) && newBudgetValue >= 0 && newBudgetValue <= 20000) {
            if (newBudgetValue >= totalExpenses) {
                dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
            } else {
                // Display a browser alert if the budget is less than total expenses
                window.alert('Budget cannot be lower than spending.');
            }
        } else {
            window.alert('Budget cannot be more than 20,000.');
        }
    };

    return (
            <div className='alert alert-secondary'>
                <span>Budget: £{budget}</span>
                <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
            </div>
    );
};

export default Budget;
