import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext); // Corrected line
    const totalExpenses = expenses.reduce((total, expense) =>{
        return total+=expense.cost;
    },0);
    const updateBudget = (newBudget) => {
        if(newBudget < totalExpenses) {
            alert("Budget cannot be less than Spending");
        }
        if(newBudget > 20000) {
            alert("Budget cannot exceed $20,000")
        }
        else {
            dispatch({type:'SET_BUDGET', payload: newBudget});
        }
    };
    console.log("Currency value:", currency);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" max="20000" step="10" value={budget} onChange={(e)=>{updateBudget(e.target.value)}}></input>
        </div>
    )
};

export default Budget;
