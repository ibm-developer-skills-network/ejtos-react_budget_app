import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);

const handleBudgetChange = (event) => {
    const nowyBudget = parseInt(event.target.value, 10);
    if (nowyBudget <= 20000){

    dispatch ({ type: 'SET_BUDGET', payload: nowyBudget});
    }
    else if (nowyBudget > 20000) {
        alert('Budget cannot be higher than 20 000');
    }
    
    //checking spendings
    const spendings = expenses.reduce((total, expense) => total + expense.cost, 0);
    
    if (nowyBudget >= spendings){
        dispatch({type: 'SET_BUDGET', payload: nowyBudget});
    }
    else {
        alert('Budget cannot be lower than present spendings :(')
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
        {budget > 20000 && (
        <p className='alert-message'>Budget must be lower than 20 000.</p>)}
        <p>Currency: {currency}</p>
        </div>
    );
};
export default Budget;