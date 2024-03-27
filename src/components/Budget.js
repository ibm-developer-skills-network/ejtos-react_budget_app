import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch,remaining, totalExpenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;
        setNewBudget(updatedBudget);
        if (updatedBudget >= 20000) {
            alert("The budget cannot exceed 20,000.");
            return;
        }
        if (updatedBudget < 960){
            alert("The budget cannot be a lower value than already spent.")
            return;
        }
        console.log("total expenses = "+totalExpenses);
        console.log("updated budget = "+updatedBudget);

    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{newBudget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
        </div>
    );
};

export default Budget;
