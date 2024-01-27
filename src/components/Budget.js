import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, maxBudget, remaining, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {

        let numericNewBudget = parseFloat(event.target.value);
        if (isNaN(numericNewBudget)) {
            alert("Oops, budget needs to be a positive number.");
            setNewBudget(AppContext.budget);
            return;
        }

        if (newBudget >= maxBudget) {
            alert ("Oops, the maximum budget is " + currency[0] + maxBudget + ".");
            setNewBudget(maxBudget);
            return;
        }

        if (newBudget <= remaining) {
            alert ("Please ensure that budget is larger than the remaining " + currency[0] + remaining + ".");
            setNewBudget(remaining);
            return;
        }


        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency[0]} </span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
