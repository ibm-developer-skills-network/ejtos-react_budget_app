import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const  { budget, dispatch, expenses, currency} = useContext(AppContext);
    const budget_limit = 20000;

    const changeBudget = (budget) => {

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if(budget > budget_limit) {
            alert("The value cannot exceed maximum budget of  £"+budget_limit);
            dispatch({
                type: 'SET_BUDGET',
                payload: budget_limit
            });
        
        }
        
        else if (budget < totalExpenses){
            alert("The value cannot be lower than you already spent £"+totalExpenses);
            dispatch({
                type: 'SET_BUDGET',
                payload: budget
            });
        }

        else {
            dispatch({
                type: 'SET_BUDGET',
                payload: budget
            });
        
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input
                required='required'
                type='number'
                id='budget'
                value={props.budget}
                step={10}
                style={{ marginLeft: '5rem' , size: 2}}
                onChange={(event) => changeBudget(event.target.value)}
                >
            </input>
        </div>
    );
};
export default Budget;