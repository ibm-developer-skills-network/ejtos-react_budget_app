import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const [ setBudget ] = useState('');
    const { dispatch, expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    
    const checkBudget = (event) => {
        
      if (event.target.value<totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending.");
      }
      
      dispatch({
        type: 'SET_BUDGET',
        payload: event.target.value,
      });
      setBudget(event.target.value);
      return;
    };
    
    return (
        <div className='alert alert-secondary'>
          <label>Budget: {currency}
          <input
              required='required'
              type='number'
              id='budget'
              max="20000"
              step="10"
              defaultValue="6000"
              onChange={(event) => checkBudget(event)}
              />
          </label>
        </div>
    );
};

export default Budget;
