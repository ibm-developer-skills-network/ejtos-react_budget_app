import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { Budget, expenses, Currency, dispatch } = useContext(AppContext);

    const changeBudget = (val)=>{

        const totalSpent = expenses.reduce((total, item) => {
            return (total += item.allocatedBoudget);
        }, 0);

        val = parseInt(val);
        if(val > 20000)
        {
            alert('The value can not be more than 20,000');
        }
        if(val <= totalSpent)
        {
            alert('You cannot reduce the budget value lower than the spending');
        }
        else
        {
            dispatch({
                type: 'CHG_BUDGET',
                payload: parseInt(val),
            })
        }
    }

    return (
        <div className='alert alert-secondary' style={{'display': 'flex', 'flexDirection':'row'}}>
            <span>Budget:{Currency} </span>
            <input
                required='required'
                type='number'
                id='budget'
                value={Budget}
                style={{size: 10}}
                step='10'
                max='20000'
                onChange={event=>changeBudget(event.target.value)}>
                </input>
        </div>
    );
};

export default Budget;