import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency, setBudget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleChange = (e) => {
        const budgetValueInput = e.target.value
        if(budgetValueInput > 20000){
            alert("The budget cannot exceed 20000")
        }else{
            if(totalExpenses > budgetValueInput){
                alert("You cannot reduce the budget value lower than the spending")
            }else{
                setBudget(budgetValueInput)
            }
        }
    }
    return (
        <div className='alert alert-secondary'>
            <label>Budget: {currency}</label>
            <input type='number' step='10' min='0' width='300' value={budget} onChange={handleChange} />
        </div>
    );
};
export default Budget;