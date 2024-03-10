import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };

    return (
        <div className='alert alert-secondary'>
            {/* Display the budget with the £ symbol */}
            <span>Budget: £</span>
            {/* Remove the £ symbol from the input field */}
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
        </div>
    );
};

export default Budget;
