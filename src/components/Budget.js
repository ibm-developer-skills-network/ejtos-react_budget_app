import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value, 10);
        dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
