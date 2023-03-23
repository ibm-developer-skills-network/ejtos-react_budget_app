//Import AppContext and useContext Hook
import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

//Create Arrow Function Method
const Budget = () => {

    //Use budget element from AppContext
    const {budget, dispatch, expenses, currency} = useContext(AppContext);

    const totalExpenses = expenses.reduce((sum, item) => {
        return (sum = sum + item.cost);
      }, 0);

    const setBudget = (event) => {
        if (event.target.value > 20000) {
            alert ('The budget value cannot exceed £20,000.');
            setBudget('');
            return;
        }
        else if (event.target.value < totalExpenses) {
            alert("The budget value cannot be lower than the expenses.");
            setBudget('');
            return;
        }
        dispatch ({
            type: 'SET_BUDGET',
            payload: event.target.value
        });
    };

    //Return grey-colored div with text and budget elements displayed
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    defaultValue={budget}
                    max='20000'
                    min={totalExpenses}
                    required='required'                    
                    step='10'
                    style={{ marginLeft: '0.25rem'}}
                    type='number'
                    onInput={(event) => setBudget(event)}>
                </input>
            </span>
        </div>
    );
};

//Allow other files to access Budget.js
export default Budget;