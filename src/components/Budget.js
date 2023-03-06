import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency} = useContext(AppContext);
    const [currbudget, setCurrbudget] = useState(budget);

    const updateCurrbudget = (event) => {   
        let totalSpent = expenses.reduce((total, currExp) => {
            total = total + currExp.cost;
            return total;
        }, 0);

        console.log(totalSpent);

        if(event.target.value > 20000) {
            alert("Budget cannot exceed 20000");
        }
        else if (event.target.value < totalSpent){
            alert("You cannot reduce the budget value lower than the spending");
        }
        else {
            setCurrbudget(event.target.value);
            console.log(currbudget);
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value
            });
            console.log(budget);
        }
    }

    return (
        <div className='alert alert-secondary'>
            <div className='form-group row'>
                <label className='col-sm-3 col-form-label' htmlFor='budgetInput'>Budget: </label>
                <div className='col-sm-9'>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'>{currency}</span>
                        </div>            
                        <input 
                        type='number' 
                        step='10'
                        id='budgetInput'
                        name='budgetInput'
                        value={currbudget}
                        onChange={(event) => updateCurrbudget(event)}
                        className='form-control col-sm' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Budget;