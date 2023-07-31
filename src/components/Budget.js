import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);

    const increaseBudget = (val) => {
            dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });
    }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input 
                required='required'
                type='number'
                id='budget'
                // value={expenses}
                onChange={event => increaseBudget(event.target.value)}
                >
                </input>
            </span>
        </div>
    );
};

export default Budget;