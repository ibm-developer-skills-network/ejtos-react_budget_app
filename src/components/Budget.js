
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch,budget,expenses,currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if(event.target.value>20000){
            alert("The value cannot be more than 20000");
        }else if(event.target.value<totalExpenses){
            alert("The value cannot be less than spending");
        }
        else{
            dispatch({
            type:'SET_BUDGET',
            payload:event.target.value
        });
        }
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;