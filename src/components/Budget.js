import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        console.log(totalExpenses)

        if (newBudget > 20000) {
            alert("The value cannot exceed the upper limit of 20,000");
        } else if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget that is already allocated!");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            })
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
