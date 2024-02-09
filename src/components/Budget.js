
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);

        if(event.target.value>20000)
               alert("limit value to 20,000")
               else
                 if(event.target.value>1661)
                            alert("you cant reduce the budget to be lower than the spending")
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: ${budget}</span>
<input type="number" step="10"   value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;