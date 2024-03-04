import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { dispatch } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        })
    }

 return (
<div className='alert alert-secondary'>
    <span>Budget: $ </span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
