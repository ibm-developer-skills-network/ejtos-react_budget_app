import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    
    const { budget, currency, dispatch } = useContext(AppContext);

    const changeBudget = (event) => {
         dispatch({type: 'SET_BUDGET', payload: event.target.value});
    }

    return (
        <div className='alert alert-secondary inOneLine'>

            <label htmlFor="budget">Budget: {currency} </label>
            <input
                type='number'
                id='budget'
                value = {budget}
                step="10"
                style={{ marginLeft: '0.5rem' , size: 10}}
                onChange = {changeBudget}
                >
            </input>

        </div>
    );
};
export default Budget;
