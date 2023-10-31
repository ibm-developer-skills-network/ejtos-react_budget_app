import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        const handleBudget = (e) => {
            dispatch({
                type: 'SET_BUDGET',
                payload: e,
            });
        };
        handleBudget(newBudget)
    }, [newBudget, dispatch])

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
