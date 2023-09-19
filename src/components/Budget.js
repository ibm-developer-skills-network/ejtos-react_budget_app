import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [errorMessage, setErrorMessage] = useState('');

    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value, 10);
        if (newBudgetValue <= 20000) {
            dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
            setErrorMessage(''); // Clear any previous error message
        } else {
            setErrorMessage('The value cannot exceed 20000');
        }
    }

    return (
        <div>
            <div className='alert alert-secondary'>
                <span>Budget: £{budget}</span>
                <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
            </div>
            {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
        </div>
    );
};

export default Budget;
