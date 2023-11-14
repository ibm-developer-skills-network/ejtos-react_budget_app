import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import HandleCurrencyChange from './currencyComponent.js'
const Budget = () => {
    const { budget, expenses, } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if (event.target.value < totalExpenses){
            alert("Budget may not be lower than spending " + totalExpenses)
        }
        else{
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: <select className="custom-select" value="value niig" onChange={(event) => HandleCurrencyChange('event.target.value')}>
                    <option value="$" name="$">$</option>
                    <option value=" €" name=" €"> €</option>
                    <option value="₹" name="₹">₹</option>
                    <option value=" £" name=" £"> £</option>
                </select>{budget}</span>
                <div>Selected Currency: <HandleCurrencyChange /></div>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
