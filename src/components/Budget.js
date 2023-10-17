import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import AllocationForm from './AllocationForm';
const Budget = (props) => {
    const { budget, remaining, allocationForm, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const value = event.target.value.replace(/\D/g, "");
        if(value > 20000) {
            alert("The value cannot exceed 20000");
            setNewBudget(value);
            return;
        }
        if(value < remaining) {
            alert("The budget cannot can't be less than spending");
            setNewBudget(value);
            return;
        }
        
        setNewBudget(value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {props.ab}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
