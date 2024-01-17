import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Drop from '../components/Drop';

const Budget = ({ selectedOption }) =>{
    const { expenses, budget,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if(event.target.value>20000){
            alert("Value cannot exceed!")
        }
        if(event.target.value<totalExpenses){
            alert("You cannot reduce budget lower than spending")
        
        }
        else{
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

