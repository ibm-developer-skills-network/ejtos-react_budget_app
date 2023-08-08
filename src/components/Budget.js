import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);

const handleBudgetChange = (event) => {
    const nowyBudget = parseInt(event.target.value, 10);
    if (nowyBudget <= 20000){

    dispatch ({ type: 'SET_BUDGET', payload: nowyBudget});
    }
    
};
    return (
        <div className='alert alert-secondary'>
            <span>
                <input
                type='number'
                id='budget'
                value={budget}
                max="20000"
                style={{ marginLeft: '2rem' }}
                onChange = {handleBudgetChange}
                className = {budget > 20000 ? 'exceeded' : ''}
            />
            </span>
        {budget > 20000 && <p className='alert-message'>Budget must be lower than 20 000.</p>}
        </div>
    );
};
export default Budget;