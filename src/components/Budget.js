import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            <span> Budget: £{budget} </span>
            <input className='ml-2' type='number' step='10' value={newBudget} onChange={handleBudgetChange}/>
        </div>
    );
};

export default Budget;
