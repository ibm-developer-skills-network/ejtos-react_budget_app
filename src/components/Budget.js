
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const handleBudgetSet = (e) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        })
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
<button type="button" id="new_Budget" onClick={handleBudgetSet} >SET</button>
</div>
    );
};
export default Budget;